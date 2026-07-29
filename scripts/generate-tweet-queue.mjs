/**
 * Generate copy-paste X (Twitter) drafts from blog frontmatter.
 * No X API required — post manually, or paste into Buffer/Typefully/Hypefury.
 *
 * Usage: node scripts/generate-tweet-queue.mjs
 * Output: social/tweet-queue.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'src', 'content', 'blog');
const outDir = path.join(root, 'social');
const outFile = path.join(outDir, 'tweet-queue.md');

const SITE_ORIGIN = 'https://revhappy.github.io';
const BASE = '/humanoid-blog/';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
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
    if (val === 'true') val = true;
    if (val === 'false') val = false;
    data[m[1]] = val;
  }
  return data;
}

/** Soft trim description to ~140 chars at a word boundary. */
function shortSummary(text, max = 140) {
  const t = (text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

function hashtagFor(category) {
  const map = {
    Humanoids: '#HumanoidRobots',
    Robotics: '#Robotics',
    AI: '#AI',
    Research: '#RoboticsResearch',
    Industry: '#RoboticsIndustry',
    Deals: '#Robotics',
  };
  return map[category] || '#Robotics';
}

/** Build a ready-to-post tweet under ~280 chars. */
function buildTweet({ title, description, url, category }) {
  const tag = hashtagFor(category);
  const summary = shortSummary(description, 120);
  // Prefer: bold lede (title) + one-line summary + link + tag
  let body = `${title}\n\n${summary}\n\n${url}\n\n${tag} #Humanoids`;
  if (body.length <= 280) return body;

  body = `${title}\n\n${url}\n\n${tag}`;
  if (body.length <= 280) return body;

  const maxTitle = 200;
  const shortTitle =
    title.length > maxTitle ? `${title.slice(0, maxTitle - 1)}…` : title;
  return `${shortTitle}\n\n${url}`;
}

function intentUrl(tweetText) {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
}

const files = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith('.md'))
  .sort();

const posts = [];
for (const file of files) {
  const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const data = parseFrontmatter(raw);
  if (!data || data.draft === true) continue;
  const id = file.replace(/\.md$/, '');
  const url = `${SITE_ORIGIN}${BASE}blog/${id}/`;
  const tweet = buildTweet({
    title: data.title || id,
    description: data.description || '',
    url,
    category: data.category || 'Robotics',
  });
  posts.push({
    id,
    file,
    title: data.title,
    description: data.description,
    pubDate: data.pubDate || '',
    category: data.category || '',
    author: data.author || '',
    url,
    tweet,
    intent: intentUrl(tweet),
    chars: [...tweet].length,
  });
}

posts.sort((a, b) => String(b.pubDate).localeCompare(String(a.pubDate)));

const generatedAt = new Date().toISOString();
const lines = [
  '# X (Twitter) tweet queue',
  '',
  'Auto-generated from blog frontmatter. **No X API required.**',
  '',
  '## How to post',
  '',
  '1. Open a draft below',
  '2. Click **Post on X** (intent link) or copy the text into the X app / Buffer / Typefully',
  '3. Optional: attach the article hero image from `public/images/heroes/`',
  '4. Check the box in your head when posted (or delete the block)',
  '',
  '## Automation later (optional)',
  '',
  '- **Easiest:** point Buffer/Typefully/RSS.app at `https://revhappy.github.io/humanoid-blog/rss.xml`',
  '- **API:** only if you want fully unattended posts — costs money and needs a developer app (not required)',
  '',
  `Generated: ${generatedAt}`,
  `Posts: ${posts.length}`,
  '',
  '---',
  '',
];

for (const p of posts) {
  lines.push(`## ${p.title}`);
  lines.push('');
  lines.push(`- **Slug:** \`${p.id}\``);
  lines.push(`- **Date:** ${p.pubDate}`);
  lines.push(`- **Category:** ${p.category}`);
  lines.push(`- **Article:** ${p.url}`);
  lines.push(`- **Chars:** ${p.chars}/280`);
  lines.push(`- **Post on X:** [Open compose](${p.intent})`);
  lines.push('');
  lines.push('```');
  lines.push(p.tweet);
  lines.push('```');
  lines.push('');
  lines.push('---');
  lines.push('');
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, lines.join('\n'), 'utf8');

// Machine-readable queue for future tooling
const jsonPath = path.join(outDir, 'tweet-queue.json');
fs.writeFileSync(
  jsonPath,
  JSON.stringify(
    {
      generatedAt,
      site: `${SITE_ORIGIN}${BASE}`,
      posts: posts.map(({ id, title, pubDate, category, url, tweet, intent, chars }) => ({
        id,
        title,
        pubDate,
        category,
        url,
        tweet,
        intent,
        chars,
      })),
    },
    null,
    2
  ),
  'utf8'
);

console.log(`Wrote ${posts.length} drafts → ${path.relative(root, outFile)}`);
console.log(`JSON → ${path.relative(root, jsonPath)}`);
