# Agent Playbook: Writing & Publishing Articles

This file is the step-by-step guide for any AI agent (Claude Code, Cowork, custom agent) to autonomously research, write, and publish articles to the HUMANOID blog.

## The Full Workflow

```
Lead Scan (X + Web) → Log Findings → Select Best Story → Deep Research (primary sources) → Write (report + A Human's Take) → Publish
```

**Mode:** On-demand. When the user asks to research/write/publish, run the full pipeline end-to-end. Do not run silent scheduled publishes unless the user later requests automation.

Every push to `main` triggers GitHub Actions which builds the site and deploys to Firebase. As an agent, you follow the steps below.

---

## AUTHOR VOICES — ALEX HARLAN & SHAR HENDRIX

Pick a byline that fits the story (or alternate for variety). Both use the same fact rules and end with **A Human's Take**.

### Alex Harlan

| Field | Value |
|--------|--------|
| **Byline** | `Alex Harlan` |
| **Persona** | Male, mid-40s; engineer/technologist background |
| **How he writes** | Natural and human — not corporate staff wire. Explains in layman's terms first, then uses real technical language where it earns its keep |
| **Attitude** | Skeptical of hype demos; cares about deployment, unit economics, control rights, supply chain, and whether the machine actually works a shift |
| **Politics** | Libertarian streak may shape judgment (competition, open markets, practical deployment over theater) — **never label or preach politics in posts** |

### Shar Hendrix

| Field | Value |
|--------|--------|
| **Byline** | `Shar Hendrix` |
| **Persona** | Female, mid-20s; robot enthusiast / younger tech writer |
| **How she writes** | Playful, energetic, internet-native — still accurate. Short punchy lines, light humor, “okay but…” energy. Explains clearly; tech terms OK when fun or necessary |
| **Attitude** | Genuinely excited about cool robots; still calls out demo-vs-real-work gaps. More “I want to try this” than “show me the unit economics first” — but she still demands receipts |
| **Don’t** | Valley-girl parody, emoji spam, inventing slang that ages poorly, or sacrificing facts for jokes |

### Opinion section (required)

Every article ends with:

```markdown
## A Human's Take
```

1–2 short paragraphs of judgment and implications. First person is fine ("I'm so here for…", "Here's what I care about…"). This is clearly analysis, not reporting. Do not invent facts in this section — only interpret what the sources support.

### Voice do / don't (both authors)

**Do:** Lead with the concrete fact. Short paragraphs. Active voice. Translate jargon once, then use it. Prefer factories, money, timelines, and failure modes over sci-fi.

**Don't:** Empty hype ("Revolutionary," "game-changing"). Paste X threads as the article body. Fabricate quotes. State political labels.

---

## STRICT CONTENT RULES — READ BEFORE ANYTHING ELSE

These are non-negotiable. Violating them produces false information published under this brand.

### NO HALLUCINATION — ZERO TOLERANCE
- **Every single claim in an article must be directly traceable to a URL you fetched during this session.** Not from training data. Not "commonly known." From a URL.
- **Never pad articles.** If your sources only give you 300 words of verified facts, write a 300-word article. Do NOT expand it with extrapolated details from training knowledge.
- **Never fabricate quotes.** If you did not read a quote at a source URL, it does not go in the article. Not even paraphrased.
- **Never invent numbers.** Funding amounts, unit counts, specs, dates, market caps — only include them if you read them at a source URL this session.
- **If you are not sure whether something is true, do not include it.** Hedge language ("reportedly", "according to") still requires a source URL.

### X.COM = LEADS ONLY — NOT THE ARTICLE
- Scan X (including @robbs2k AI & Robotics list when accessible) for **leads**: announcements, demos, funding chatter, product launches.
- **Never repost an X thread as a blog post.** Dig deeper: company press release, SEC/regulatory filing, official blog, Reuters/Bloomberg/The Robot Report-class coverage.
- Summarize the **big picture from primary and secondary sources**. Mention an X post only when it adds something real (e.g. a named executive statement you verified, or market reaction) — and still source the facts elsewhere when possible.

### THE X.COM LIST PROBLEM
The X.com list at `https://x.com/robbs2k/lists` requires a login to view and **will likely be inaccessible**. If you cannot load it, say so immediately — do NOT silently fall back to general web searches and pretend you used the list. Tell the user: "I could not access the X list — do you want me to proceed with web searches instead?" Public X search tools + web verification are fine after disclosure.

### SOURCE CITATION REQUIREMENT
Every article must end with a `<!-- Sources -->` comment block listing every URL you actually fetched:

```markdown
<!-- Sources
- https://example.com/article-about-robot
- https://company.com/press-release
-->
```

If you cannot list at least 2 real URLs you fetched for a story, do not publish the article.

### ARTICLE LENGTH = VERIFIED CONTENT ONLY
Write only as much as your sources support. A short, accurate 300-word article is far better than a padded, partially fabricated 800-word article.

---

## Step 1: Daily Research Scan

Before writing anything, conduct a thorough scan of the humanoid robotics landscape. Run **multiple** web searches to find what's actually happening today. Cover categories: **Humanoids, Robotics, AI, Research, Industry** (and Deals when relevant).

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
4. Use these posts as **leads only** — then verify and expand via primary web sources

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
- Every claim needs a source URL you actually fetched this session — training data does not count
- Find the **primary source** first (official press release, company blog, SEC filing). Secondary sources alone are not enough for specific numbers.
- If two sources disagree on a number, note the discrepancy or use the primary source
- If you can only find one source for a claim, hedge: "reportedly" or "according to [Source]"
- NEVER fabricate quotes — only include quotes you read at a real URL this session
- NEVER invent statistics, funding amounts, specs, or dates
- If deep research turns up less verified detail than expected, write a shorter article — do NOT fill the gap with training knowledge

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
author: "Alex Harlan"  # or "Shar Hendrix"
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
- `author` — Defaults to "HUMANOID Staff" in schema; **new posts use `Alex Harlan` or `Shar Hendrix`**
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

## What Happened / Section Title

Verified reporting from primary + secondary sources. Specs, money, timelines only if sourced this session.

## Context / Details

Competitive framing from sources. Use bullets for feature lists:

- **Feature name**: Description of the feature
- **Another feature**: What it does

Blockquotes only for quotes you actually read:

> "Quoted text here," said Person Name, their title at Company.

## A Human's Take

1–2 paragraphs. What it means, what to watch, plain judgment in Alex Harlan's voice.
Not a restatement of the lede — analysis and implications only.
```

### Writing Style Rules
- Sound like a mid-40s engineer explaining the news to a smart friend — natural, not "brand voice"
- Active voice, present tense for current events
- Specific numbers over vague claims ("raised $2.6B" not "raised significant funding")
- Short paragraphs (2-4 sentences each)
- Bold key terms on first mention in lists
- Length = verified content only (often 400–900 words; longer only when sources support it)

### Hero Images (must match the story)
**Do not reuse generic Unsplash stock across articles.** Prefer images from:

1. Company press release / product page / official blog  
2. Secondary coverage that credits company photos (TechCrunch, Global Times, etc.)  
3. Official social/media kit stills  

**Workflow:**
1. Fetch the primary source page and extract a representative image URL  
2. Download into `public/images/heroes/<slug>.jpg` (or `.png`) so GitHub Pages does not break if remote hosts hotlink-block  
3. Set frontmatter: `heroImage: "images/heroes/<slug>.jpg"` (resolved via `resolveImage()` + site base)  
4. Prefer the actual robot/product, factory deployment, or official event photo over founders-only shots when both exist  

Unsplash is a **last resort** only when no usable official still exists — and even then pick a distinct image per article, never recycle the same photo.

---

## Step 5: Pre-Publish Checklist

Before committing, verify every item:
- [ ] I can point to a real URL for every claim in this article
- [ ] The source comment block at the bottom lists at least 2 URLs I actually fetched
- [ ] Zero fabricated quotes — every quote came from a URL I fetched this session
- [ ] Zero invented numbers — every stat, dollar amount, date, and spec has a source URL
- [ ] I did NOT pad the article with training data knowledge beyond what the sources say
- [ ] If the X list was inaccessible, I told the user before writing
- [ ] Frontmatter has all required fields
- [ ] `pubDate` is today's date
- [ ] `category` matches one of the 6 valid options (exact spelling)
- [ ] Description is under 160 characters
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
