import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

const blogDir = path.join(process.cwd(), 'src/content/blog');
const recencyCache = new Map<string, number>();

/**
 * Same-day tie-break: last git commit time for the file (works in CI after checkout),
 * then filesystem mtime (helps local uncommitted edits).
 */
function postRecencyMs(id: string): number {
  const cached = recencyCache.get(id);
  if (cached !== undefined) return cached;

  let score = 0;
  const rel = path.join('src/content/blog', `${id}.md`).replace(/\\/g, '/');
  try {
    const out = execSync(`git log -1 --format=%ct -- "${rel}"`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (out) score = Number(out) * 1000;
  } catch {
    /* no git history */
  }

  if (!score) {
    try {
      score = fs.statSync(path.join(blogDir, `${id}.md`)).mtimeMs;
    } catch {
      score = 0;
    }
  }

  recencyCache.set(id, score);
  return score;
}

/**
 * Newest first: pubDate desc → updatedDate desc → git/file recency desc → id.
 * Date-only frontmatter (same calendar day) used to look random because
 * getCollection order is arbitrary and equal dates alone do not sort.
 */
export function sortPostsNewestFirst(a: BlogPost, b: BlogPost): number {
  const byPub = b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  if (byPub !== 0) return byPub;

  const aUpdated = a.data.updatedDate?.valueOf() ?? 0;
  const bUpdated = b.data.updatedDate?.valueOf() ?? 0;
  if (bUpdated !== aUpdated) return bUpdated - aUpdated;

  const byRecency = postRecencyMs(b.id) - postRecencyMs(a.id);
  if (byRecency !== 0) return byRecency;

  return a.id.localeCompare(b.id);
}

/** Non-draft posts, newest first. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  return (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort(sortPostsNewestFirst);
}
