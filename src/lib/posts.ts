import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

const blogDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../content/blog');

/** File mtime for same-day tie-break (last written/edited wins). */
function postMtimeMs(id: string): number {
  const candidates = [`${id}.md`, `${id}.mdx`];
  for (const name of candidates) {
    try {
      return fs.statSync(path.join(blogDir, name)).mtimeMs;
    } catch {
      /* try next */
    }
  }
  return 0;
}

/**
 * Newest first: pubDate desc, then updatedDate desc, then file mtime desc,
 * then id for a fully stable order. Date-only frontmatter ties (same day)
 * used to look random because getCollection order is arbitrary.
 */
export function sortPostsNewestFirst(a: BlogPost, b: BlogPost): number {
  const byPub = b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  if (byPub !== 0) return byPub;

  const aUpdated = a.data.updatedDate?.valueOf() ?? 0;
  const bUpdated = b.data.updatedDate?.valueOf() ?? 0;
  if (bUpdated !== aUpdated) return bUpdated - aUpdated;

  const byMtime = postMtimeMs(b.id) - postMtimeMs(a.id);
  if (byMtime !== 0) return byMtime;

  return a.id.localeCompare(b.id);
}

/** Non-draft posts, newest first. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  return (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort(sortPostsNewestFirst);
}
