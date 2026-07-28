# HUMANOID Blog — Editorial Notes

Living notes for anyone writing or publishing here. Keep the look fun, technical, and curious — a budding robotics blog, not a wire service.

---

## Blog vibe

- **Tone:** Light, clear, a little playful — breakthroughs and cool projects first; industry money second.
- **Mix:** Real demos, small startups, open projects, technical “wait, they shipped that?” stories — plus industry when it matters.
- **Not required:** Buzzwords like “homebrew,” “disrupting,” “game-changing.” Just show the work.
- **Always:** Facts from fetched URLs only. Visible `## Sources` at the end of every post.
- **Media (required):** **hero + at least 1 in-body image** (prefer **2–3** stills when sources have them). **Embed a video** when a source has one.  
- **Images always from source articles only** — no Unsplash, stock, or unrelated recycled photos. Every still must come from a URL listed in `## Sources`.

### Story shape we love (example, not a template)

Startups shipping something real with a **price**, a **city**, and **footage** — e.g. **Tau Robotics** launching a humanoid cleaning service in SF at **$30/hour** ([X post](https://x.com/alexkoch_ai/status/2082135074615763251), [tau-robotics.com](https://www.tau-robotics.com/)).

Lead from X → dig into the company site and other coverage. Prefer that shape over vague “AI will change everything” rounds.

Other good shapes:

| Pattern | Why it works |
|---------|----------------|
| Service with a price | Readers can argue over coffee ($30/hr clean, $499/mo robot) |
| Small team / hands / tools | Dexterous hands, smart skins, open twins |
| Open platform | Printable bipeds, pip-installable robot models |
| Site-specific robots | Solar install, shipyard welding, warehouse totes |
| Lab breakthrough with video | Real-to-sim that actually runs an hour on metal |
| Industry still fun | Factories, order books, odd ownership deals |

---

## The two publishers

### Robb Harlan

| | |
|--|--|
| **Byline** | `Robb Harlan` |
| **Who** | Male, mid-40s; engineer / technologist |
| **Voice** | Natural, plain first, technical when it earns its keep. Skeptical of hype. Cares whether it works a real shift, costs, control, supply chain. |
| **Usually covers** | Industry deals, ownership, public markets, factories, big-company deployments, hard analysis, research with real stakes |
| **Never** | Preach politics (quiet preferences only); invent quotes or numbers |

**Robb’s “A Human’s Take”:** judgment about reliability, shipping, and what could still go wrong. Dry humor ok; no TED-talk crescendo.

### Shar Hendrix

| | |
|--|--|
| **Byline** | `Shar Hendrix` |
| **Who** | Robot enthusiast / tech writer |
| **Voice** | Curious and clear. Light humor without heavy slang. Never announces age. Explains plainly. |
| **Usually covers** | Startups, open-source platforms, weird/cool demos, consumer services, small teams shipping something tangible |
| **Never** | Age/demo talk, emoji spam, forced slang, empty buzzwords (“homebrew,” “disrupt,” etc.) |

**Shar’s “A Human’s Take”:** what made them smile or pause; what to watch next; still grounded in the sources.

### How to divvy (for now)

- **Shar** → fun/startup/service/open/demo-first pieces  
- **Robb** → capital, factories, structure, industrial scale, research-with-stakes  
- Either can cross lanes if the story fits the voice better  
- Alternate when in doubt so both bylines stay active  
- **Do not invent a third byline** unless the owner asks

Every article ends with:

```markdown
## A Human's Take
```

1–2 short paragraphs of judgment. Then:

```markdown
## Sources

- [Label - what it is](https://url...)
```

---

## How to source articles (daily pipeline)

### 1. Primary lead source (breaking / daily feed)

**X list — scan this first, every session:**

https://x.com/i/lists/1805786050763087967

This is a **primary daily source** for populating the feed. Scan recent posts for product launches, demos with real numbers, small teams shipping, cool technical projects, and industry moves worth a story.

**How to use the list:**

1. Skim last 24–48 hours (or since last scan)
2. Flag posts that are **groundbreaking, fun, cool, or concrete** (price, place, units, open repo, factory)
3. Treat each flag as a **lead only** — never republish the thread as the article
4. Dig to company site / press / secondary coverage
5. Log candidates in `src/content/research-log.md`

**If the list is inaccessible** (login wall, tool failure): say so clearly. Do **not** pretend you scanned it. Ask whether to proceed with public X search + web, or wait.

**Also useful:**

- https://x.com/robbs2k/lists (if accessible; disclose if not)
- Company sites, press rooms
- The Robot Report, TechCrunch robotics, IEEE Spectrum, company blogs
- ArXiv / lab blogs for research pieces

### 2. Lead → story rules

1. **X is a lead, not the article.** Never paste a thread as the post.
2. Open the **company site / press release** first.
3. Add **1–2 secondary** sources when available.
4. Only claims from URLs fetched this session.
5. Prefer stories with a **concrete hook**: price, demo, open repo, deployment, hours, unit count.
6. **Collect media while researching:** hero still + 1–2 extra stills; grab YouTube/demo embed if present.
7. Short is fine. Verified 300 words beats padded 800.

### Media requirements (every post)

| Piece | Minimum | Prefer |
|-------|---------|--------|
| Hero (`heroImage`) | 1 | Still from primary source page |
| In-body images | **≥1** | **2–3 total** when cited sources have them |
| Video embed | When on a source | Official launch/demo on a cited URL |

#### Images: only from source articles (non-negotiable)

1. Open a URL that will appear under `## Sources`  
2. Take **that page’s** art (og:image, press photo, inline figure) — not a random site elsewhere  
3. Download to `public/images/heroes/<slug>.jpg`  
4. Caption with company/outlet name  
5. **Never** Unsplash, Getty, Pexels, generic robots, or reuse from an unrelated post  

Fewer real source photos beats padded stock. Full detail: `AGENTS.md`.

**In body** (base path for GitHub Pages):

```markdown
![Alt describing the robot/scene](/humanoid-blog/images/heroes/slug-2.jpg)
```

```html
<figure>
  <img src="/humanoid-blog/images/heroes/slug-2.jpg" alt="..." loading="lazy" />
  <figcaption>What it is. Source: Company press / Outlet.</figcaption>
</figure>
```

**Video (when on a source)** — after lede or first H2:

```html
<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="..." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>
<p class="embed-caption">What the clip shows. Source: Company / YouTube.</p>
```

List every media page under `## Sources`.

### 3. Selection filter (fun + substance)

Rate roughly:

- **Cool / fun factor** — Would a robotics fan share this?
- **Newsworthiness** — New this week, not a rehash?
- **Specificity** — Numbers, product, place, people?
- **Not already covered** — Check `src/content/blog/` + research log

Target mix over a week: **more projects & startups** than pure funding roundups; industry still welcome when it’s a real milestone (factory open, order book, public listing path).

### 4. Publish

1. Write markdown in `src/content/blog/`
2. Append research log
3. Build: `node "./node_modules/astro/astro.js" build`
4. Commit + push `main` (GitHub Pages deploys)

Full rules: `AGENTS.md`.

---

## Notes for agents

- List URL above is a **primary daily source** for the feed — start there.
- Disclose if the list is inaccessible; then use public X search + web, don’t pretend you scanned it.
- Keep Robb/Shar consistent; don’t invent third bylines unless asked.
- Site live path: GitHub Pages under repo base (see `src/lib/paths.ts`).
- Featured: only one `featured: true` at a time.
