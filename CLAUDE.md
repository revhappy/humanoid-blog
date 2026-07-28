# HUMANOID Blog — Agent Instructions

This is an Astro-based blog about humanoid robotics, AI, and intelligent machines. It deploys to Firebase Hosting via GitHub Actions on every push to `main`.

## Content Creation Workflow

**Read `AGENTS.md` for the full step-by-step playbook.** The short version:

1. **Research first** — Check @robbs2k's AI & Robotics list on X.com (`https://x.com/robbs2k/lists`) for **leads only**, then dig to primary sources (press releases, company blogs, Reuters-class coverage). Do not repost X threads.
2. **Log findings** — Append to `src/content/research-log.md` to avoid duplicate coverage
3. **Write the article** — Create a `.md` file in `src/content/blog/` with proper frontmatter; byline **Robb Harlan** or **Shar Hendrix**; end with **`## A Human's Take`**
4. **Verify** — Build test, fact-check, run pre-publish checklist (every claim from a URL fetched this session)
5. **Publish** — Commit and push to `main` — GitHub Actions auto-deploys

**On-demand mode:** Run the full pipeline when asked. Homepage hero rotates daily among newest posts (daily rebuild cron in deploy.yml).

**Voices:** **Robb Harlan** (mid-40s engineer, skeptical of hype) or **Shar Hendrix** (robot enthusiast covering startups and smaller teams). Details in `AGENTS.md`.

## Article Frontmatter Template

```yaml
---
title: "Your Article Title Here"
description: "A 1-2 sentence summary for SEO and article cards (keep under 160 chars)"
pubDate: 2026-03-16
category: "Humanoids"
author: "Robb Harlan"
heroImage: "https://images.unsplash.com/photo-XXXXXXX?w=1200&h=630&fit=crop"
readTime: "5 min read"
featured: false
draft: false
---
```

### Required Fields
- `title` — Article headline
- `description` — Short summary for SEO and preview cards
- `pubDate` — Publication date in YYYY-MM-DD format
- `category` — Must be one of: `Humanoids`, `Robotics`, `AI`, `Research`, `Industry`, `Deals`

### Optional Fields
- `author` — Author name (defaults to "HUMANOID Staff")
- `heroImage` — URL to hero image. Use Unsplash URLs with `?w=1200&h=630&fit=crop` for consistent sizing
- `readTime` — Estimated read time (e.g., "5 min read")
- `featured` — Set to `true` to make this the hero article on the homepage (only one should be featured at a time)
- `draft` — Set to `true` to hide from the site
- `updatedDate` — Date of last update in YYYY-MM-DD format

## Content Guidelines

### Tone & Style
- Natural tech journalism in Robb Harlan's voice — informative, analytical, not hype-driven
- Lead with the news, then provide context from verified sources only
- Use specific numbers and facts where sources support them
- Include quotes from company representatives only when read at a source URL this session
- End with **A Human's Take** (1–2 paragraphs of implications/judgment)

### Article Structure
- **Opening paragraph**: The news/core story in 2-3 sentences
- **H2 sections**: Break the article into 3-5 digestible sections
- **Bullet points / numbered lists**: For specs, features, timelines
- **Blockquotes**: For notable quotes (use `>` markdown syntax)
- **A Human's Take**: Required closing analysis section

### Article Length
- Standard news: 400-800 words
- Analysis/deep-dive: 800-1500 words
- Industry overview: 1200-2000 words

### Categories Explained
- **Humanoids** — Specific humanoid robot news (Tesla Optimus, Figure, Atlas, Unitree G1, etc.)
- **Robotics** — Broader robotics (non-humanoid robots, components, locomotion, manipulation)
- **AI** — AI systems powering robots (foundation models, computer vision, reinforcement learning)
- **Research** — Academic papers, lab breakthroughs, new techniques
- **Industry** — Business news, funding, partnerships, market analysis
- **Deals** — Product launches, pricing, availability, consumer offers

## Hero Images

**Prefer source-matched photos**, not recycled Unsplash stock.

1. Pull stills from company press / product pages / credited news photos  
2. Save under `public/images/heroes/<slug>.jpg`  
3. Frontmatter: `heroImage: "images/heroes/<slug>.jpg"`  

Unsplash only as last resort, unique per article. Full rules in `AGENTS.md`.

## Managing Featured Articles

Only ONE article should have `featured: true` at a time. When featuring a new article:
1. Set `featured: false` on the currently featured article
2. Set `featured: true` on the new article

If no article is featured, the most recent article becomes the hero automatically.

## Project Structure

```
src/
├── content/blog/          # Blog posts (add .md files here)
├── components/            # UI components
├── layouts/               # Page layouts
├── pages/                 # Route pages
│   ├── index.astro        # Homepage
│   ├── blog/[...slug].astro  # Blog post pages
│   └── category/[category].astro  # Category pages
└── styles/global.css      # Design system
```

## Build Commands

Due to the `&` in the project path, use direct node invocation:

```bash
# Dev server
node "./node_modules/astro/astro.js" dev

# Production build
node "./node_modules/astro/astro.js" build

# Preview production build
node "./node_modules/astro/astro.js" preview
```

On CI (GitHub Actions), the standard `npx astro build` works fine since there's no `&` in the path.

## Deployment

Deployment is automatic via GitHub Actions:
- Push to `main` branch triggers build + deploy to Firebase Hosting
- The workflow is defined in `.github/workflows/deploy.yml`
- Required GitHub Secrets: `FIREBASE_SERVICE_ACCOUNT`, `FIREBASE_PROJECT_ID`

## Adding New Features

When modifying the site (not just content):
- Components are in `src/components/` using Astro's `.astro` format
- Scoped styles are used within components (no CSS modules/Tailwind)
- Global design tokens are in `src/styles/global.css`
- Content schema is defined in `src/content.config.ts`
- If adding a new category, update the schema enum in `content.config.ts` AND the nav arrays in `Header.astro` and `Footer.astro`
