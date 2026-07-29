#!/usr/bin/env node
/**
 * Pre-publish media verification for HUMANOID blog posts.
 *
 * Catches: missing files, HTML/error pages saved as "images", tiny/corrupt
 * assets, undersized heroes, and (optionally) quarantines failing posts.
 *
 * Does NOT replace agent vision review — the daily pipeline still requires
 * opening every still with a multimodal read to confirm subject relevance
 * (e.g. no sandwiches on robot posts). This script is the machine gate.
 *
 * Usage:
 *   node scripts/verify-article-media.mjs
 *   node scripts/verify-article-media.mjs --today
 *   node scripts/verify-article-media.mjs --slug generative-bionics-gene01
 *   node scripts/verify-article-media.mjs --today --quarantine
 *   node scripts/verify-article-media.mjs --all --json
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "src", "content", "blog");
const PUBLIC_DIR = path.join(ROOT, "public");

const MIN_BYTES = 8_000; // ~8 KB — rejects icons, tracking pixels, empty shells
const MIN_HERO_W = 400;
const MIN_HERO_H = 200;
const MIN_BODY_W = 300;
const MIN_BODY_H = 150;

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const argValue = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
};

const ONLY_TODAY = flag("--today");
const ONLY_SLUG = argValue("--slug");
const QUARANTINE = flag("--quarantine");
const AS_JSON = flag("--json");
const CHECK_ALL = flag("--all") || (!ONLY_TODAY && !ONLY_SLUG);

function todayPacific() {
  // en-CA → YYYY-MM-DD
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end < 0) return { data: {}, body: raw };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4);
  const data = {};
  for (const line of fm.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    data[m[1]] = v;
  }
  return { data, body };
}

function collectBodyImagePaths(body) {
  const paths = new Set();
  const patterns = [
    /src=["'](\/humanoid-blog\/images\/heroes\/[^"']+)["']/gi,
    /src=["'](images\/heroes\/[^"']+)["']/gi,
    /!\[[^\]]*\]\((\/humanoid-blog\/images\/heroes\/[^)]+)\)/gi,
    /!\[[^\]]*\]\((images\/heroes\/[^)]+)\)/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(body)) !== null) {
      paths.add(m[1]);
    }
  }
  return [...paths];
}

function resolvePublicPath(ref) {
  let p = ref.replace(/\\/g, "/");
  if (p.startsWith("/humanoid-blog/")) p = p.slice("/humanoid-blog/".length);
  if (p.startsWith("/")) p = p.slice(1);
  return path.join(PUBLIC_DIR, p);
}

function sniffKind(buf) {
  if (!buf || buf.length < 12) return "too-small";
  // HTML / XML masquerading
  const head = buf.slice(0, 256).toString("utf8").trimStart().toLowerCase();
  if (
    head.startsWith("<!doctype") ||
    head.startsWith("<html") ||
    head.startsWith("<?xml") ||
    head.startsWith("<svg") ||
    head.startsWith("{") ||
    head.startsWith("[")
  ) {
    return "not-image-text";
  }
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpeg";
  // PNG
  if (
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  )
    return "png";
  // GIF
  if (buf.slice(0, 6).toString("ascii") === "GIF87a" || buf.slice(0, 6).toString("ascii") === "GIF89a")
    return "gif";
  // WebP (RIFF....WEBP)
  if (
    buf.slice(0, 4).toString("ascii") === "RIFF" &&
    buf.slice(8, 12).toString("ascii") === "WEBP"
  )
    return "webp";
  // AVIF / HEIC ftyp
  if (buf.slice(4, 8).toString("ascii") === "ftyp") return "avif-or-heic";
  return "unknown";
}

function readJpegSize(buf) {
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1];
    if (marker === 0xd8 || marker === 0xd9) {
      i += 2;
      continue;
    }
    const len = (buf[i + 2] << 8) | buf[i + 3];
    // SOF0 / SOF1 / SOF2
    if (
      marker === 0xc0 ||
      marker === 0xc1 ||
      marker === 0xc2 ||
      marker === 0xc3
    ) {
      const h = (buf[i + 5] << 8) | buf[i + 6];
      const w = (buf[i + 7] << 8) | buf[i + 8];
      return { width: w, height: h };
    }
    if (len < 2) break;
    i += 2 + len;
  }
  return null;
}

function readPngSize(buf) {
  // IHDR at byte 8 after signature
  if (buf.length < 24) return null;
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  return { width: w, height: h };
}

function readWebpSize(buf) {
  // VP8X extended: bytes 12-15 'VP8X', then canvas size at 24-29 (24-bit LE each, minus 1)
  if (buf.length < 30) return null;
  const chunk = buf.slice(12, 16).toString("ascii");
  if (chunk === "VP8X" && buf.length >= 30) {
    const w = 1 + buf[24] + (buf[25] << 8) + (buf[26] << 16);
    const h = 1 + buf[27] + (buf[28] << 8) + (buf[29] << 16);
    return { width: w, height: h };
  }
  if (chunk === "VP8 " && buf.length >= 30) {
    // lossy: frame tag then 16-bit LE width/height with scale bits
    const w = buf[26] | ((buf[27] & 0x3f) << 8);
    const h = buf[28] | ((buf[29] & 0x3f) << 8);
    return { width: w, height: h };
  }
  if (chunk === "VP8L" && buf.length >= 25) {
    const b0 = buf[21],
      b1 = buf[22],
      b2 = buf[23],
      b3 = buf[24];
    const w = 1 + (((b1 & 0x3f) << 8) | b0);
    const h = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
    return { width: w, height: h };
  }
  return null;
}

function readSize(kind, buf) {
  if (kind === "jpeg") return readJpegSize(buf);
  if (kind === "png") return readPngSize(buf);
  if (kind === "webp") return readWebpSize(buf);
  return null;
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function listPosts() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const full = path.join(BLOG_DIR, f);
      const raw = fs.readFileSync(full, "utf8");
      const { data, body } = parseFrontmatter(raw);
      return { slug, full, raw, data, body };
    });
}

function checkImage(absPath, role) {
  const issues = [];
  if (!fs.existsSync(absPath)) {
    issues.push({ level: "error", code: "missing", msg: `File missing: ${absPath}` });
    return { issues, meta: null };
  }
  const buf = fs.readFileSync(absPath);
  const kind = sniffKind(buf);
  const meta = {
    bytes: buf.length,
    kind,
    hash: sha256(buf),
    width: null,
    height: null,
  };

  if (kind === "not-image-text") {
    issues.push({
      level: "error",
      code: "html-or-text",
      msg: "File is HTML/XML/JSON text, not a real image (classic bad scrape)",
    });
    return { issues, meta };
  }
  if (kind === "too-small" || kind === "unknown") {
    issues.push({
      level: "error",
      code: "bad-format",
      msg: `Unrecognized or corrupt image format (sniff=${kind})`,
    });
    return { issues, meta };
  }
  if (buf.length < MIN_BYTES) {
    issues.push({
      level: "error",
      code: "too-small",
      msg: `Only ${buf.length} bytes (min ${MIN_BYTES}) — likely icon, pixel, or failed download`,
    });
  }

  const size = readSize(kind, buf);
  if (size) {
    meta.width = size.width;
    meta.height = size.height;
    const minW = role === "hero" ? MIN_HERO_W : MIN_BODY_W;
    const minH = role === "hero" ? MIN_HERO_H : MIN_BODY_H;
    if (size.width < minW || size.height < minH) {
      issues.push({
        level: "error",
        code: "undersized",
        msg: `${size.width}x${size.height} below min ${minW}x${minH} for ${role}`,
      });
    }
  } else if (kind === "jpeg" || kind === "png" || kind === "webp") {
    issues.push({
      level: "warn",
      code: "no-dimensions",
      msg: `Could not parse dimensions for ${kind}`,
    });
  }

  return { issues, meta };
}

function setDraftTrue(post) {
  if (/^draft:\s*true\s*$/m.test(post.raw)) return false;
  let next;
  if (/^draft:\s*/m.test(post.raw)) {
    next = post.raw.replace(/^draft:\s*.*$/m, "draft: true");
  } else if (post.raw.startsWith("---")) {
    const end = post.raw.indexOf("\n---", 3);
    next =
      post.raw.slice(0, end) + "\ndraft: true" + post.raw.slice(end);
  } else {
    return false;
  }
  fs.writeFileSync(post.full, next, "utf8");
  return true;
}

function main() {
  const today = todayPacific();
  let posts = listPosts();

  if (ONLY_SLUG) {
    posts = posts.filter((p) => p.slug === ONLY_SLUG);
  } else if (ONLY_TODAY) {
    posts = posts.filter((p) => p.data.pubDate === today);
  } else if (!CHECK_ALL) {
    posts = posts.filter((p) => p.data.pubDate === today);
  }

  // Skip already-draft posts for --today gate unless --all
  if (ONLY_TODAY) {
    posts = posts.filter((p) => p.data.draft !== "true");
  }

  const report = {
    checkedAt: new Date().toISOString(),
    today,
    postsChecked: 0,
    errors: 0,
    warnings: 0,
    posts: [],
  };

  /** @type {Map<string, string[]>} hash -> slugs */
  const hashOwners = new Map();

  for (const post of posts) {
    report.postsChecked++;
    const postReport = {
      slug: post.slug,
      title: post.data.title || post.slug,
      pubDate: post.data.pubDate || null,
      issues: [],
      images: [],
    };

    const heroRef = post.data.heroImage;
    if (!heroRef) {
      postReport.issues.push({
        level: "error",
        code: "no-hero",
        msg: "Missing frontmatter heroImage",
        ref: null,
      });
    } else {
      const abs = resolvePublicPath(heroRef);
      const { issues, meta } = checkImage(abs, "hero");
      postReport.images.push({ role: "hero", ref: heroRef, abs, meta, issues });
      for (const iss of issues) {
        postReport.issues.push({ ...iss, ref: heroRef });
      }
      if (meta?.hash) {
        const owners = hashOwners.get(meta.hash) || [];
        owners.push(post.slug);
        hashOwners.set(meta.hash, owners);
      }
    }

    const bodyRefs = collectBodyImagePaths(post.body);
    for (const ref of bodyRefs) {
      const abs = resolvePublicPath(ref);
      const { issues, meta } = checkImage(abs, "body");
      postReport.images.push({ role: "body", ref, abs, meta, issues });
      for (const iss of issues) {
        postReport.issues.push({ ...iss, ref });
      }
    }

    // Prefer at least one in-body still when hero exists (warn only — sources may lack extras)
    if (heroRef && bodyRefs.length === 0) {
      postReport.issues.push({
        level: "warn",
        code: "no-body-image",
        msg: "No in-body image paths found (prefer ≥1 when sources have stills)",
        ref: null,
      });
    }

    report.posts.push(postReport);
  }

  // Cross-post identical hero files (often a bad shared scrape)
  for (const [hash, slugs] of hashOwners) {
    const unique = [...new Set(slugs)];
    if (unique.length >= 2) {
      for (const slug of unique) {
        const pr = report.posts.find((p) => p.slug === slug);
        if (!pr) continue;
        pr.issues.push({
          level: "warn",
          code: "shared-hero-bytes",
          msg: `Hero binary identical to other post(s): ${unique.filter((s) => s !== slug).join(", ")} (hash ${hash.slice(0, 12)}…) — verify this is intentional`,
          ref: null,
        });
      }
    }
  }

  // Tally + optional quarantine
  const quarantined = [];
  for (const pr of report.posts) {
    const errs = pr.issues.filter((i) => i.level === "error");
    const warns = pr.issues.filter((i) => i.level === "warn");
    report.errors += errs.length;
    report.warnings += warns.length;
    if (QUARANTINE && errs.length > 0) {
      const post = posts.find((p) => p.slug === pr.slug);
      if (post && setDraftTrue(post)) {
        quarantined.push(pr.slug);
      }
    }
  }
  report.quarantined = quarantined;

  if (AS_JSON) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`Media verify — ${report.postsChecked} post(s), today=${today}`);
    for (const pr of report.posts) {
      const errs = pr.issues.filter((i) => i.level === "error");
      const warns = pr.issues.filter((i) => i.level === "warn");
      const mark = errs.length ? "FAIL" : warns.length ? "WARN" : "OK";
      console.log(`\n[${mark}] ${pr.slug}`);
      for (const iss of pr.issues) {
        console.log(`  - ${iss.level.toUpperCase()} ${iss.code}: ${iss.msg}${iss.ref ? ` (${iss.ref})` : ""}`);
      }
      if (!pr.issues.length) console.log("  (no issues)");
    }
    if (quarantined.length) {
      console.log(`\nQuarantined (draft: true): ${quarantined.join(", ")}`);
    }
    console.log(
      `\nSummary: ${report.errors} error(s), ${report.warnings} warning(s)`,
    );
  }

  // Write log for cron
  const logDir = path.join(ROOT, "logs");
  fs.mkdirSync(logDir, { recursive: true });
  const logPath = path.join(logDir, `media-verify-${today}.json`);
  fs.writeFileSync(logPath, JSON.stringify(report, null, 2));

  if (report.errors > 0) {
    process.exitCode = 1;
  }
}

main();
