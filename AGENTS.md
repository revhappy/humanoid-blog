# Agent Playbook: Writing & Publishing Articles

This file is the step-by-step guide for any AI agent (Claude Code, Cowork, custom agent) to autonomously research, write, and publish articles to the HUMANOID blog.

## The Full Workflow

```
Lead Scan (X + Web) → Log Findings → Select Best Story → Deep Research (primary sources) → Write (report + A Human's Take) → Publish
```

**Mode:** On-demand. When the user asks to research/write/publish, run the full pipeline end-to-end. Do not run silent scheduled publishes unless the user later requests automation.

Every push to `main` triggers GitHub Actions which builds the site and deploys to Firebase. As an agent, you follow the steps below.

---

## AUTHOR VOICES — Robb Harlan & SHAR HENDRIX

Pick a byline that fits the story (or alternate for variety). Both use the same fact rules and end with **A Human's Take**.

### Robb Harlan

| Field | Value |
|--------|--------|
| **Byline** | `Robb Harlan` |
| **Persona** | Male, mid-40s; engineer/technologist background |
| **How he writes** | Natural and human — not corporate staff wire. Explains in layman's terms first, then uses real technical language where it earns its keep |
| **Attitude** | Skeptical of hype demos; cares about deployment, unit economics, control rights, supply chain, and whether the machine actually works a shift |
| **Politics** | Libertarian streak may shape judgment (competition, open markets, practical deployment over theater) — **never label or preach politics in posts** |

### Shar Hendrix

| Field | Value |
|--------|--------|
| **Byline** | `Shar Hendrix` |
| **Persona** | Robot enthusiast and tech writer; covers startups, open-source hardware, and work outside the largest labs |
| **How she writes** | Curious and clear — still accurate. Light humor without heavy slang or age references. Explains plainly; tech terms when useful |
| **Attitude** | Excited about cool robots and smaller teams; still calls out demo-vs-real-work gaps. Demands receipts. Strong fit for early-stage and open projects |
| **Don’t** | Announce age/demographics, emoji spam, forced slang, buzzword labels, or sacrificing facts for jokes |

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
Every article must end with a **visible** Sources section (readers see this in the article footer area) listing company pages, press, and coverage you fetched:

```markdown
## Sources

- [Company — announcement title](https://company.com/press-release)
- [Outlet — article title](https://example.com/article-about-robot)
```

If you cannot list at least 2 real URLs you fetched for a story, do not publish the article. Keep the HTML comment block only if you need an internal log — the visible `## Sources` list is required for readers.

### ARTICLE LENGTH = VERIFIED CONTENT ONLY
Write only as much as your sources support. A short, accurate 300-word article is far better than a padded, partially fabricated 800-word article.

---

## Step 1: Daily Research Scan

Before writing anything, conduct a thorough scan of the humanoid robotics landscape. Run **multiple** web searches to find what's actually happening today. Cover categories: **Humanoids, Robotics, AI, Research, Industry** (and Deals when relevant).

### Primary Source: Curated X list (daily feed)

**START HERE** for daily leads:

```
https://x.com/i/lists/1805786050763087967
```

This is a **primary source for breaking / cool robotics news** for the feed. Scan last 24–48 hours for launches, demos, startups shipping real things, and technical projects.

Also check owner lists when available:

```
https://x.com/robbs2k/lists
```

To scan:
1. Read recent posts on the list above
2. Note announcements, demos, pricing, open projects, deployments
3. Use posts as **leads only** — then verify via company sites and secondary reporting
4. Prefer fun/technical breakthroughs and small teams as well as industry news

See **`NOTES.md`** for full persona notes, vibe, and selection patterns (e.g. Tau-style service launches).

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
author: "Robb Harlan"  # or "Shar Hendrix"
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
- `author` — Defaults to "HUMANOID Staff" in schema; **new posts use `Robb Harlan` or `Shar Hendrix`**
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

1–2 paragraphs. What it means, what to watch, plain judgment in Robb Harlan's voice.
Not a restatement of the lede — analysis and implications only.
```

### Writing Style Rules
- Sound like a mid-40s engineer explaining the news to a smart friend — natural, not "brand voice"
- Active voice, present tense for current events
- Specific numbers over vague claims ("raised $2.6B" not "raised significant funding")
- Short paragraphs (2-4 sentences each)
- Bold key terms on first mention in lists
- Length = verified content only (often 400–900 words; longer only when sources support it)

### Media: images + video (required)

**Every article must include media — not just a hero.**

| Requirement | Rule |
|-------------|------|
| **Hero** | 1 frontmatter `heroImage` (card + top of post) |
| **In-body images** | **At least 1** mid-article image; prefer **2–3 total** distinct stills across hero + body when sources have them |
| **Video** | **If a usable official / press / YouTube demo exists, embed it.** Do not skip a good launch video. |

**Do not reuse generic Unsplash stock across articles.** Prefer images from:

1. Company press release / product page / official blog  
2. Secondary coverage that credits company photos (TechCrunch, etc.)  
3. Official social / media kit stills  
4. Frame grabs only if the company posted them as stills (don’t invent screenshots)

**Image workflow:**
1. Fetch primary source pages and extract 2–3 representative image URLs when available  
2. Download into `public/images/heroes/` (or `public/images/articles/`) as `<slug>.jpg`, `<slug>-2.jpg`, `<slug>-3.jpg`  
3. Frontmatter hero: `heroImage: "images/heroes/<slug>.jpg"`  
4. In-body images use the **site base path** (GitHub Pages):

```markdown
![Digit moving totes in a warehouse](/humanoid-blog/images/heroes/agility-digit-2.jpg)

<figure>
  <img src="/humanoid-blog/images/heroes/agility-digit-3.jpg" alt="Close-up of Digit hands" loading="lazy" />
  <figcaption>Digit at a customer site. Source: Agility Robotics.</figcaption>
</figure>
```

5. Prefer the actual robot/product/demo over founders-only shots when both exist  
6. Caption or alt text should say what it is; credit source when not yours  

Unsplash is a **last resort** only when no usable official still exists — and even then pick a distinct image per article, never recycle the same photo.

**Video embed (when available):**

Search company YouTube, press pages, and the lead X post for demos. Prefer official channels. Place early (after lede or first section):

```html
<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Short descriptive title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">What the clip shows. Source: Company / YouTube.</p>
```

- Use `youtube.com/embed/ID` (not `watch?v=`)  
- If only an X video exists and no YouTube, link the X post in Sources and still use in-body stills; optional raw video URL only if it plays in-browser  
- Always list the video URL in `## Sources`  
- Do **not** invent or deep-fake media  

---

## Step 5: Pre-Publish Checklist

Before committing, verify every item:
- [ ] I can point to a real URL for every claim in this article
- [ ] Visible `## Sources` lists at least 2 URLs I actually fetched
- [ ] Zero fabricated quotes — every quote came from a URL I fetched this session
- [ ] Zero invented numbers — every stat, dollar amount, date, and spec has a source URL
- [ ] I did NOT pad the article with training data knowledge beyond what the sources say
- [ ] If the X list was inaccessible, I told the user before writing
- [ ] **Hero image set** and at least **1 in-body image** (prefer 2–3 stills total when available)
- [ ] **Video embedded** when an official/demo clip exists; caption + Sources entry included
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
