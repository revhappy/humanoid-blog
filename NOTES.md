# HUMANOID Blog — Editorial Notes

Living notes for anyone writing or publishing here. Keep the look fun, technical, and curious — a budding robotics blog, not a wire service.

---

## Blog vibe

- **Tone:** Light, clear, a little playful — breakthroughs and cool projects first; industry money second.
- **Mix:** Real demos, small startups, open projects, technical “wait, they shipped that?” stories — plus industry when it matters.
- **Not required:** Buzzwords like “homebrew,” “disrupting,” “game-changing.” Just show the work.
- **Always:** Facts from fetched URLs only. Visible `## Sources` at the end of every post. Source-matched hero images under `public/images/heroes/`.

Example of the *kind* of lead we want (not a template to copy): startups shipping a real service with a price tag and footage — e.g. Tau Robotics launching a humanoid cleaning service in SF at **$30/hour** ([X post](https://x.com/alexkoch_ai/status/2082135074615763251), [tau-robotics.com](https://www.tau-robotics.com/)). Lead from the post → dig into the company site and other coverage.

---

## The two publishers

### Robb Harlan

| | |
|--|--|
| **Byline** | `Robb Harlan` |
| **Who** | Male, mid-40s; engineer / technologist |
| **Voice** | Natural, plain first, technical when it earns its keep. Skeptical of hype. Cares whether it works a real shift, costs, control, supply chain. |
| **Usually covers** | Industry deals, ownership, public markets, big-company deployments, hard analysis |
| **Never** | Preach politics (quiet preferences only); invent quotes or numbers |

### Shar Hendrix

| | |
|--|--|
| **Byline** | `Shar Hendrix` |
| **Who** | Robot enthusiast / tech writer |
| **Voice** | Curious and clear. Light humor without heavy slang. Never announces age. Explains plainly. |
| **Usually covers** | Startups, open-source platforms, weird/cool demos, consumer services, small teams shipping something tangible |
| **Never** | Age/demo talk, emoji spam, forced slang, empty buzzwords |

**How to divvy:** Alternate or match story type — Shar for fun/startup/service/open projects; Robb for capital, structure, industrial scale. Either can write either lane if the story fits.

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

### 1. Primary lead source (breaking / feed)

**X list (required daily scan):**

https://x.com/i/lists/1805786050763087967

Scan recent posts for: product launches, demos with real numbers, small teams shipping, cool technical projects, industry moves worth a story.

**Also useful:**

- https://x.com/robbs2k/lists (if accessible; disclose if not)
- Company sites, press rooms
- The Robot Report, TechCrunch robotics, IEEE Spectrum, company blogs

### 2. Lead → story rules

1. **X is a lead, not the article.** Never paste a thread as the post.
2. Open the **company site / press release** first.
3. Add **1–2 secondary** sources when available.
4. Only claims from URLs fetched this session.
5. Prefer stories with a **concrete hook**: price, demo, open repo, deployment, hours, unit count.
6. Hero image from **that story’s** media (download to `public/images/heroes/slug.ext`).

### 3. Selection filter (fun + substance)

Rate roughly:

- **Cool / fun factor** — Would a robotics fan share this?
- **Newsworthiness** — New this week, not a rehash?
- **Specificity** — Numbers, product, place, people?
- **Not already covered** — Check `src/content/blog/` + research log

Target mix over a week: more **projects & startups** than pure funding roundups; industry still welcome when it’s a real milestone.

### 4. Publish

1. Write markdown in `src/content/blog/`
2. Append research log
3. Build: `node "./node_modules/astro/astro.js" build`
4. Commit + push `main` (GitHub Pages deploys)

Full rules: `AGENTS.md`.

---

## Story patterns we like

| Pattern | Example direction |
|---------|-------------------|
| Service with a price | Humanoid cleaning at $30/hr, invite-only city |
| Small team / hands / tools | Dexterous hands seed, sensor gloves |
| Open platform | Printable biped + full software stack |
| Site-specific robots | Solar install, construction, grid inspection |
| Industry still fun | Odd ownership deals, “robots outnumber staff” |

---

## Notes for agents

- List URL above is a **primary daily source** for the feed.
- Disclose if the list is inaccessible; then use public X search + web, don’t pretend you scanned it.
- Keep Robb/Shar consistent; don’t invent third bylines unless asked.
