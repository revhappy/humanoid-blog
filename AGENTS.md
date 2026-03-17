# Agent Playbook: Writing & Publishing Articles

This file is the step-by-step guide for any AI agent (Claude Code, Cowork, custom agent) to autonomously research, write, and publish articles to the HUMANOID blog.

## The Full Workflow

```
Daily Research Scan → Log Findings → Select Best Story → Deep Research → Write → Publish
```

Every push to `main` triggers GitHub Actions which builds the site and deploys to Firebase. As an agent, you follow the steps below.

**IMPORTANT:** Every article must be grounded in real, verified, current news. Do NOT fabricate stories, companies, quotes, or statistics. If you cannot verify a claim via web search, do not include it.

---

## Step 1: Daily Research Scan

Before writing anything, conduct a thorough scan of the humanoid robotics landscape. Run **multiple** web searches to find what's actually happening today:

### Primary Source: @robbs2k X.com AI & Robotics List

**START HERE.** Before running general searches, check the curated X list:

```
https://x.com/robbs2k/lists
```

Find the **AI & Robotics** list and scan recent posts. This list is curated by the blog owner and contains the most relevant accounts, companies, and researchers in the humanoid robotics space. It is the single best source for what's trending and newsworthy right now.

To scan the list:
1. Navigate to `https://x.com/robbs2k` and find the AI & Robotics list
2. Read through recent posts (last 24-48 hours)
3. Note any announcements, demos, funding news, or product launches
4. Use these posts as leads — then verify and expand via web search

### Secondary: Web Search Queries (run after checking the X list)

```
humanoid robot news today
humanoid robot news this week
Tesla Optimus latest news
Figure AI news
Boston Dynamics news
humanoid robotics funding 2026
robot AI breakthrough
Agility Robotics Digit update
humanoid robot factory deployment
robotics industry news
```

### News Sources for Verification & Additional Context
- The Robot Report
- IEEE Spectrum Robotics
- TechCrunch (robotics tag)
- Reuters / Bloomberg (robotics/AI coverage)
- Company blogs (Tesla AI, Figure AI blog, Boston Dynamics blog)
- ArXiv (for research papers: search `humanoid robot` or `bipedal locomotion`)
- Hacker News (for community discussion of robotics news)

### Companies to Track
| Company | Robot | HQ | What to watch |
|---------|-------|-----|---------------|
| Tesla | Optimus | USA | Factory deployments, gen updates, pricing |
| Figure AI | Figure 02 | USA | Partnerships, funding, new capabilities |
| Boston Dynamics | Atlas (Electric) | USA | Commercial pilots, new features |
| Unitree | G1 / H1 | China | Pricing, new models, SDK updates |
| Agility Robotics | Digit | USA | Amazon deployment, RoboFab production |
| Apptronik | Apollo | USA | NASA partnership, commercial pilots |
| 1X Technologies | NEO | Norway | Home robotics, OpenAI partnership |
| Sanctuary AI | Phoenix | Canada | Carbon AI updates, task count |
| UBTECH | Walker S | China | Industry deployments |
| Fourier Intelligence | GR-2 | China | Healthcare/rehab applications |
| Xiaomi | CyberOne | China | Consumer robotics |
| Agibot | - | China | Factory automation |
| Mentee Robotics | MenteeBot | Israel | AI-native humanoid approach |

---

## Step 2: Log Your Research

After scanning, log what you found in `src/content/research-log.md`. This prevents duplicate coverage and helps future agents know what's been covered.

### Research Log Format

Append to the file — do NOT overwrite previous entries:

```markdown
## YYYY-MM-DD — Agent Research Scan

### X List Scan (@robbs2k AI & Robotics)
- Notable post by @account: "summary of what they said" — potential story
- Notable post by @account: "summary" — not substantial enough
- Trending topic on the list: description

### Web Search Findings
1. **[CANDIDATE]** Story title — Source URL — Brief summary
2. **[CANDIDATE]** Story title — Source URL — Brief summary
3. **[SKIP: already covered]** Story title — Similar to existing article X
4. **[SKIP: not substantial]** Story title — Only a rumor / too thin

### Selected for Writing
- Story #X: Reason for selection (newsworthiness, relevance, exclusivity)
- Originally spotted via: X list post by @account / web search

### Notes for Future Agents
- Company X is expected to announce Y next week — worth checking
- Ongoing story about Z — follow up when more details emerge
```

### Selection Criteria — Pick the BEST Story

Rate each candidate on:
1. **Newsworthiness** (1-5): Is this actually new? Or a rehash?
2. **Impact** (1-5): Does this matter to the industry?
3. **Specificity** (1-5): Are there concrete details, numbers, quotes?
4. **Exclusivity** (1-5): Have we covered this angle already?

Pick the story with the highest total score.

### Avoiding Duplicates

Before writing, check existing articles:
```bash
ls src/content/blog/
```
Read the titles and make sure your topic isn't already covered. If a previous article exists on the same company/topic, your new article should cover a genuinely new development — not rehash old news.

---

## Step 3: Deep Research on Selected Story

Once you've picked your story, do a deep dive:

- [ ] Search for the **primary source** (company press release, SEC filing, official blog post)
- [ ] Search for **2-3 secondary sources** reporting on the same story
- [ ] Look for **specific numbers**: funding amounts, unit counts, specs, dates, pricing
- [ ] Look for **direct quotes** from executives or spokespeople
- [ ] Search for **competitive context**: what are rival companies doing in this space?
- [ ] Check the **timeline**: when was this announced? Is it today's news or old?

### Fact-Checking Rules
- Every claim needs a source found via web search
- If two sources disagree on a number, note the discrepancy or use the primary source
- If you can only find one unverified source, hedge with language like "reportedly" or "according to"
- NEVER fabricate quotes — only use quotes you found in real sources
- NEVER invent statistics or funding amounts

---

## Step 4: Write the Article

### File Naming
Use kebab-case based on the topic:
```
src/content/blog/tesla-optimus-factory-deployment.md
src/content/blog/figure-ai-series-c-funding.md
src/content/blog/humanoid-robots-warehouse-comparison.md
```

### Frontmatter Template
```yaml
---
title: "Your Headline Here"
description: "1-2 sentence summary under 160 characters for SEO"
pubDate: YYYY-MM-DD
category: "Humanoids"
author: "HUMANOID Staff"
heroImage: "https://images.unsplash.com/photo-XXXXX?w=1200&h=630&fit=crop"
readTime: "X min read"
featured: false
draft: false
---
```

### Required Frontmatter Fields
- `title` — Article headline
- `description` — Short summary for SEO and preview cards (under 160 chars)
- `pubDate` — Today's date in YYYY-MM-DD format
- `category` — Must be exactly one of: `Humanoids`, `Robotics`, `AI`, `Research`, `Industry`, `Deals`

### Optional Frontmatter Fields
- `author` — Author name (defaults to "HUMANOID Staff")
- `heroImage` — Unsplash URL with `?w=1200&h=630&fit=crop`
- `readTime` — e.g., "5 min read" (calculate at ~200 words/minute)
- `featured` — Set `true` to make homepage hero (only one at a time)
- `draft` — Set `true` to hide from the site
- `updatedDate` — YYYY-MM-DD, for updated articles

### Category Selection
| Category | Use for |
|----------|---------|
| `Humanoids` | News about specific humanoid robots (Optimus, Figure, Atlas, G1) |
| `Robotics` | Broader robotics tech, components, non-humanoid robots |
| `AI` | AI systems, foundation models, computer vision for robots |
| `Research` | Academic papers, lab breakthroughs, new techniques |
| `Industry` | Business news, funding, partnerships, market analysis |
| `Deals` | Product launches, pricing, availability, sales |

### Article Structure

```markdown
(Opening — no heading, just start writing)

2-3 sentences covering the core news. Lead with the most important fact.

## Section Title

Analysis, details, specs. Use bullet points for feature lists:

- **Feature name**: Description of the feature
- **Another feature**: What it does

## Another Section

More depth. Include blockquotes for notable quotes:

> "Quoted text here," said Person Name, their title at Company.

## Numbers / Timeline / Specs Section

Use numbered lists for timelines:

1. **Q1 2026**: First milestone
2. **Q2 2026**: Second milestone

## What This Means / Looking Ahead

Closing analysis. What are the implications?
```

### Writing Style Rules
- Professional tech journalism — informative, analytical, NOT hype
- Active voice, present tense for current events
- Specific numbers over vague claims ("raised $2.6B" not "raised significant funding")
- Short paragraphs (2-4 sentences each)
- Bold key terms on first mention in lists
- 400-1500 words depending on story depth

### Hero Images
Search Unsplash and append sizing params:
```
https://images.unsplash.com/photo-XXXXXXX?w=1200&h=630&fit=crop
```
Search terms: `robot`, `humanoid robot`, `artificial intelligence`, `factory automation`, `robotics`, `futuristic technology`

---

## Step 5: Pre-Publish Checklist

Before committing, verify:
- [ ] All claims are based on real sources found via web search
- [ ] No fabricated quotes, stats, or company names
- [ ] Frontmatter has all required fields
- [ ] `pubDate` is today's date
- [ ] `category` matches one of the 6 valid options (exact spelling)
- [ ] Description is under 160 characters
- [ ] Article is 400-1500 words
- [ ] No placeholder text or TODOs remain
- [ ] Research log (`src/content/research-log.md`) is updated

### Quick Build Test (recommended)
```bash
node "./node_modules/astro/astro.js" build
```

---

## Step 6: Commit and Push

```bash
# Pull latest first (in case another agent pushed)
git pull --rebase origin main

# Stage the new article and research log
git add src/content/blog/your-new-article.md
git add src/content/research-log.md

# Commit with descriptive message
git commit -m "Add article: Your Article Title Here"

# Push to trigger auto-deploy
git push origin main
```

The site rebuilds and deploys automatically via GitHub Actions (~2 minutes).

---

## Managing Featured Articles

The homepage hero shows the article with `featured: true`. Only ONE should be featured.

To feature a new article:
1. Find current featured: `grep -l "featured: true" src/content/blog/`
2. Edit that file: change `featured: true` to `featured: false`
3. Set your new article to `featured: true`
4. Commit both files

If no article is featured, the most recent by date becomes the hero automatically.

---

## Example: Complete Agent Session

```
1. RESEARCH SCAN
   - Search: "humanoid robot news today"
   - Search: "Tesla Optimus latest"
   - Search: "Figure AI news"
   - Search: "robotics funding 2026"
   - Found 4 potential stories

2. LOG FINDINGS in src/content/research-log.md
   - Story A: Agility ships 50 Digit units to Amazon (CANDIDATE, score: 18/20)
   - Story B: New humanoid startup raises $10M (SKIP: too small)
   - Story C: Unitree releases SDK update (CANDIDATE, score: 14/20)
   - Story D: Tesla Optimus rumor (SKIP: unverified rumor)

3. SELECT: Story A (highest score)

4. DEEP RESEARCH on Agility + Amazon deployment
   - Found primary source: Agility blog post
   - Found Reuters coverage with quotes
   - Found specs and timeline details
   - Checked: no existing article on this topic

5. WRITE article: src/content/blog/agility-digit-amazon-50-units.md

6. VERIFY: build test passes, checklist complete

7. PUBLISH: git add, commit, push

8. DONE: article live in ~2 minutes
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check frontmatter — category must match exact enum values |
| Article doesn't appear | Check `draft: false` and `pubDate` is not in the future |
| Images broken | Verify Unsplash URL has `?w=1200&h=630&fit=crop` |
| Push rejected | Run `git pull --rebase origin main` first |
| Merge conflict in research-log | Accept both changes, re-commit |
| Path issues on Windows | Use `node "./node_modules/astro/astro.js"` not `npx astro` |
