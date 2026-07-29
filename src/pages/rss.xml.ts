import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absoluteUrl, siteConfig } from '../lib/site';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Real RSS 2.0 feed — built into dist/rss.xml on every deploy. */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog'))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const channelLink = absoluteUrl();
  const feedSelf = absoluteUrl('rss.xml');
  const lastBuild = posts[0]?.data.pubDate ?? new Date();

  const items = posts
    .map((post) => {
      const link = absoluteUrl(`blog/${post.id}/`);
      const pubDate = post.data.pubDate.toUTCString();
      const title = escapeXml(post.data.title);
      const description = escapeXml(post.data.description);
      const category = escapeXml(post.data.category);
      const author = escapeXml(post.data.author);
      const hero = post.data.heroImage
        ? absoluteUrl(post.data.heroImage.replace(/^\//, ''))
        : undefined;

      return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      <category>${category}</category>
      <dc:creator>${author}</dc:creator>${
        hero
          ? `
      <enclosure url="${escapeXml(hero)}" type="image/jpeg" />`
          : ''
      }
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${channelLink}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
    <atom:link href="${feedSelf}" rel="self" type="application/rss+xml" />
    <image>
      <url>${absoluteUrl('favicon.svg')}</url>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${channelLink}</link>
    </image>${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
