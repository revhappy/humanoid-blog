import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absoluteUrl } from '../lib/site';

const staticPaths = [
  '',
  'about/',
  'contact/',
  'advertise/',
  'privacy/',
  'terms/',
  'category/humanoids/',
  'category/robotics/',
  'category/ai/',
  'category/research/',
  'category/industry/',
  // category/deals/ reserved for sponsors — add back when Deals is public
];

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);

  const urls = [
    ...staticPaths.map((path) => ({
      loc: absoluteUrl(path),
      lastmod: undefined as string | undefined,
      changefreq: path === '' ? 'daily' : 'weekly',
      priority: path === '' ? '1.0' : '0.7',
    })),
    ...posts.map((post) => ({
      loc: absoluteUrl(`blog/${post.id}/`),
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
      changefreq: 'monthly',
      priority: '0.8',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
