# HUMANOID Blog — Deployment Guide

Everything you need to get new articles written, reviewed locally, and live on Firebase.

---

## Prerequisites (one-time setup)

- Node.js installed on your machine
- Git installed (Git Bash on Windows)
- The repo cloned to `~/Desktop/Sites & Blogs/Humanoid Blog`
- Firebase Hosting configured with GitHub Actions (already done)

---

## Step 1 — Open your terminal

Open **Git Bash** and navigate to the project:

```bash
cd ~/desktop/Sites\ \&\ Blogs/Humanoid\ Blog
```

---

## Step 2 — Install dependencies (first time or after pulling new changes)

```bash
npm install
```

You only need to re-run this if `package.json` changes or it's your first time.

---

## Step 3 — Start the local dev server

```bash
node "./node_modules/astro/astro.js" dev
```

> **Important:** Use this exact command — NOT `npm run dev` or `npx astro dev`.
> The `&` in the folder path (`Sites & Blogs`) breaks the standard commands.

The site will be available at **http://localhost:4321**

Leave this terminal window open while you work.

---

## Step 4 — Write or edit articles

New articles go in `src/content/blog/` as `.md` files.

**Filename format:** `your-article-title-here.md` (lowercase, hyphens, no spaces)

**Required frontmatter at the top of every article:**

```yaml
---
title: "Your Article Title Here"
description: "A 1-2 sentence summary (under 160 chars)"
pubDate: 2026-03-18
category: "Humanoids"
author: "HUMANOID Staff"
heroImage: "https://images.unsplash.com/photo-XXXXXXX?w=1200&h=630&fit=crop"
readTime: "5 min read"
featured: false
draft: false
---
```

**Categories:** `Humanoids`, `Robotics`, `AI`, `Research`, `Industry`, `Deals`

**To feature an article on the homepage:**
1. Find the currently featured article and set `featured: false`
2. Set `featured: true` on the new article
3. Only one article should be featured at a time

---

## Step 5 — Preview your changes

With the dev server running, open **http://localhost:4321** in your browser.
Changes to `.md` files reload automatically. Changes to `.astro` files also hot-reload.

---

## Step 6 — Commit your changes

Open a **new Git Bash window** (keep the dev server running in the first one):

```bash
cd ~/desktop/Sites\ \&\ Blogs/Humanoid\ Blog
```

If you get a git lock error, clear it first:

```bash
rm .git/index.lock
```

Then stage and commit your files:

```bash
git add src/content/blog/your-new-article.md
git commit -m "Add: article title here"
```

To stage all changed files at once:

```bash
git add -A
git commit -m "Add: brief description of changes"
```

---

## Step 7 — Push to GitHub (triggers auto-deploy)

```bash
git push origin main
```

That's it. GitHub Actions automatically:
1. Builds the Astro site
2. Deploys it to Firebase Hosting

**Deploy usually takes 2–3 minutes.** You can watch progress at:
`https://github.com/revhappy/humanoid-blog/actions`

---

## Troubleshooting

### Git lock file error
```
fatal: Unable to create '.git/index.lock': File exists
```
Fix:
```bash
rm .git/index.lock
```

### Dev server won't start / crashes silently
Run `npm install` first, then try the dev command again:
```bash
npm install
node "./node_modules/astro/astro.js" dev
```

### Article links show 404 or go to `/blog/undefined`
This means a component is using `post.slug` instead of `post.id`. Check that all article card components and page files reference `post.id` when building links.

### CSS looks broken on local dev
The `&` in the folder path breaks Vite's CSS injection. This is expected — all CSS has been consolidated into `public/global.css` as a static file workaround. It loads correctly in local dev and in the deployed Firebase build.

### Build fails on GitHub Actions
Check the Actions tab on GitHub for the error. Common causes:
- Frontmatter validation error (wrong category name, missing required field)
- Syntax error in an `.astro` file
- TypeScript error in a component

---

## Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `node "./node_modules/astro/astro.js" dev` |
| Install packages | `npm install` |
| Stage all changes | `git add -A` |
| Commit | `git commit -m "message"` |
| Deploy to Firebase | `git push origin main` |
| Clear git lock | `rm .git/index.lock` |
| View deploy status | GitHub → Actions tab |

---

## Content Workflow (Quick Version)

1. `cd ~/desktop/Sites\ \&\ Blogs/Humanoid\ Blog`
2. `node "./node_modules/astro/astro.js" dev` → keep this running
3. Create/edit `.md` file in `src/content/blog/`
4. Preview at `http://localhost:4321`
5. Open a new terminal tab
6. `git add -A && git commit -m "Add: article name" && git push origin main`
7. Wait 2-3 min → site is live
