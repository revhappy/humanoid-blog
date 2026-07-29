/**
 * Draft organic Robb Harlan X posts from blog "A Human's Take" + frontmatter.
 * Output is human-feeling takes — not headline+hashtag spam.
 *
 * Usage: node scripts/draft-robb-x.mjs
 * Appends/refreshes: social/robb-from-articles.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'src', 'content', 'blog');
const outFile = path.join(root, 'social', 'robb-from-articles.md');

const SITE = 'https://revhappy.github.io/humanoid-blog/';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    data[m[1]] = val;
  }
  return { data, body: raw.slice(match[0].length) };
}

function extractTake(body) {
  const m = body.match(/## A Human's Take\s*\r?\n([\s\S]*?)(?=\r?\n## Sources|\r?\n## |\s*$)/i);
  if (!m) return '';
  return m[1]
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Turn a long take into 1–2 tweet-sized chunks (prefer one). */
function toTweets(take, title) {
  if (!take) {
    return [
      `${title} — wrote it up for the boring metrics, not the hype cycle.`,
    ];
  }

  // Prefer first 1–2 sentences of the take
  const sentences = take.match(/[^.!?]+[.!?]+/g) || [take];
  const first = sentences.slice(0, 2).join(' ').trim();
  const chunks = [];

  if (first.length <= 280) {
    chunks.push(first);
  } else {
    // Hard split at word boundary
    let cut = first.slice(0, 270);
    const sp = cut.lastIndexOf(' ');
    if (sp > 100) cut = cut.slice(0, sp);
    chunks.push(`${cut.trim()}…`);
  }

  return chunks;
}

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
const posts = [];

for (const file of files) {
  const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const { data, body } = parseFrontmatter(raw);
  if (data.draft === 'true' || data.draft === true) continue;

  const id = file.replace(/\.md$/, '');
  const take = extractTake(body);
  const solos = toTweets(take, data.title || id);
  const url = `${SITE}blog/${id}/`;

  posts.push({
    id,
    title: data.title || id,
    author: data.author || '',
    category: data.category || '',
    pubDate: data.pubDate || '',
    take,
    solos,
    url,
  });
}

posts.sort((a, b) => String(b.pubDate).localeCompare(String(a.pubDate)));

const lines = [
  '# Robb-from-articles (auto)',
  '',
  'Generated from each post’s **A Human’s Take** — organic SOLO / SOFT-LINK seeds.',
  'Edit before posting. Prefer no link; soft-link only when the take needs the full piece.',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  'See also: `ROBB-ON-X.md` (voice) · `robb-organic-queue.md` (hand-tuned starter)',
  '',
  '---',
  '',
];

for (const p of posts) {
  lines.push(`## ${p.title}`);
  lines.push('');
  lines.push(`- Author on blog: ${p.author || '—'}`);
  lines.push(`- Category: ${p.category}`);
  lines.push(`- Article: ${p.url}`);
  lines.push('');
  lines.push('### SOLO (no link)');
  lines.push('');
  for (const t of p.solos) {
    lines.push('```');
    lines.push(t);
    lines.push('```');
    lines.push('');
  }
  lines.push('### SOFT-LINK variant');
  lines.push('');
  lines.push('```');
  const soft = `${p.solos[0]}\n\n${p.url}`;
  lines.push(soft.length <= 280 ? soft : `${p.solos[0].slice(0, 200)}…\n\n${p.url}`);
  lines.push('```');
  lines.push('');
  lines.push('---');
  lines.push('');
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log(`Wrote ${posts.length} article-based drafts → social/robb-from-articles.md`);
