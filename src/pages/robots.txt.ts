import type { APIRoute } from 'astro';
import { absoluteUrl, siteConfig } from '../lib/site';

export const GET: APIRoute = async () => {
  const sitemap = absoluteUrl('sitemap.xml');
  const body = `User-agent: *
Allow: ${siteConfig.basePath}

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
