import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';
import { getPublishedPosts } from '../lib/posts';

/** Lightweight index for client-side search overlay. */
export const GET: APIRoute = async () => {
  const posts = (await getPublishedPosts()).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    author: post.data.author,
    pubDate: post.data.pubDate.toISOString(),
    url: withBase(`blog/${post.id}`),
  }));

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=600',
    },
  });
};
