# Mechafeed — Daily Article Pipeline (Scheduled)

You are running the **scheduled daily research + publish job** for the Mechafeed.
Follow `AGENTS.md` and `NOTES.md` exactly. Zero hallucination. Every claim needs a URL fetched this session.

## Goal

1. Scan the humanoid robotics landscape for **new** stories (last 24–48 hours, plus anything not yet covered).
2. Log findings in `src/content/research-log.md`.
3. Write and publish **as many strong, distinct articles as sources support**, aiming for **8–10** when the day is rich.
4. Commit and push to `main` so deploy runs.

## Volume rules (non-negotiable)

| Rule | Value |
|------|--------|
| **Target** | 8–10 articles when enough distinct, source-backed stories exist |
| **Hard max** | 10 per run |
| **Quality floor** | Never invent or pad to hit quota. If only 4 solid stories exist, publish 4. |
| **Soft floor** | Prefer at least 3 if the scan finds that many real candidates |
| **Thin day** | If fewer than 3 verified candidates, write what you can, note the thin day in the research log, and stop — do not rehash old posts |

Each article must be a **genuinely different story** (different company, product, deal, paper, or deployment). No angle-spinning the same announcement into multiple posts.

## Time budget

- Complete the full run in one session.
- Prefer **shorter verified posts** (often 300–700 words) over long padded essays.
- Parallelize deep research with subagents only when it helps quality; do not sacrifice source-fetching.

## Step-by-step (run in order)

### 1. Preflight

- Working directory is the Mechafeed repo root.
- `git pull --rebase origin main` (resolve conflicts carefully; never discard remote work).
- List existing posts: `src/content/blog/` — skip anything already covered unless there is a **new** development.
- Read the tail of `src/content/research-log.md` so you do not repeat yesterday’s picks.

### 2. Lead scan

**Primary (disclose if inaccessible):**

- https://x.com/i/lists/1805786050763087967  
- If the list fails: state that clearly in the research log, then proceed with public X search + web.

**Web searches (run several):**

- humanoid robot news today / this week  
- Tesla Optimus, Figure AI, Boston Dynamics, Unitree, Agility, Apptronik, 1X, Sanctuary, UBTECH, Fourier, Agibot, etc.  
- humanoid robotics funding / factory deployment / research breakthrough  

Cover categories: **Humanoids, Robotics, AI, Research, Industry, Deals**.

### 3. Log candidates

Append to `src/content/research-log.md` (never overwrite):

```markdown
## YYYY-MM-DD — Daily Scheduled Pipeline

### X List Scan
- ...

### Web Search Findings
1. **[CANDIDATE]** ...
2. **[SKIP: already covered]** ...
...

### Selected for Writing (ranked)
1. Story — why
...

### Volume note
- Aim: 8–10 | Solid candidates found: N | Writing: M
```

Score candidates (newsworthiness, impact, specificity, exclusivity). Pick the top **M** stories where M ≤ 10 and every pick has enough primary/secondary source depth.

### 4. Deep research + write (per story)

For each selected story:

1. Fetch **primary** source (company press, blog, product page, filing).
2. Fetch **≥1 secondary** when available.
3. Download **source-page images only** into `public/images/heroes/` (hero + ≥1 body still when available). Never stock/Unsplash.
4. **VISION GATE (mandatory per still):** After each download, open the local file with the image/read tool and confirm the pixels match the story (robot, product, facility, named exec from this source). Reject food, memes, ads, stock lifestyle, generic logos-only, or unrelated products. If wrong, delete the file and re-fetch from a better source URL — never publish a mismatched still.
5. Embed official video when a cited source has one.
6. Create `src/content/blog/<kebab-slug>.md` with full frontmatter:
   - `pubDate`: **today** (YYYY-MM-DD, Pacific date)
   - `category`: one of Humanoids | Robotics | AI | Research | Industry | Deals
   - `author`: alternate **Robb Harlan** and **Shar Hendrix** across the batch for variety (pick the better fit per story)
   - `draft: false`
   - `featured: false` (do not steal homepage feature unless no posts exist)
7. End every article with `## A Human's Take` then visible `## Sources` (≥2 real URLs you fetched).
8. Body images use site base: `/images/heroes/...`

### 5. Pre-publish verification (HARD GATE — do this before any commit)

**Do not commit or push until both gates pass.**

#### 5a. Machine gate (required)

```bash
npm run verify-media:today
```

- Exit code **must be 0**.
- This checks: file exists, real image magic bytes (not HTML/JSON), minimum size, minimum dimensions, and flags identical hero bytes across posts.
- On failure: fix or replace the bad image(s), or set that post `draft: true`, then re-run until clean.
- Never ignore errors to hit the article quota.

#### 5b. Vision gate (required)

For **every** hero and in-body still written this run:

1. Open the local image file (multimodal read).
2. Confirm it depicts the **correct subject** for that article (this robot/product/site — not ads, food, unrelated gadgets, stock filler).
3. If wrong: delete, re-download from a cited source, re-verify, or remove the image and drop the post to `draft: true` if no good still exists.

#### 5c. Social + build

- Run `npm run tweets` (and `npm run robb-x` if useful) so social queues include new posts.
- Optionally: `node "./node_modules/astro/astro.js" build` — fix frontmatter if build fails.
- If build fails on one post, fix or set that post `draft: true` rather than shipping a broken site.

### 6. Publish (only after Step 5 passes)

```bash
npm run verify-media:today
git pull --rebase origin main
git add src/content/blog/ src/content/research-log.md public/images/heroes/ social/
# Also stage automation setup if still untracked/modified (scripts/, AGENTS.md, .gitignore)
git add scripts/ AGENTS.md .gitignore package.json 2>/dev/null || true
git status
git commit -m "Daily pipeline: N articles (YYYY-MM-DD)"
git push origin main
```

- If `git pull --rebase` fails due to local changes, **stash or commit** pipeline/setup files first, then pull, then continue writing; never discard remote work.
- Only commit files related to this run (articles, media, research log, social queues, and pipeline scripts if changed).
- If nothing new was written, do **not** empty-commit; log the thin day and exit cleanly.
- If push fails, retry once after `git pull --rebase`; if still failing, leave commits local and record the error in the research log.

### 7. Run summary (write at end of research log entry)

- Articles published (titles + slugs)
- Skipped candidates
- X list accessible? Y/N
- Media verify: pass/fail + any quarantined drafts
- Vision gate: confirmed stills for each published slug
- Any failures (images, build, push)

## Absolute bans

- No claims without a URL fetched this session  
- No fabricated quotes, numbers, or dates  
- No Unsplash/stock/recycled unrelated heroes  
- No reposting X threads as articles  
- No duplicate of an existing blog slug/topic without a new development  
- No political labels or preaching  

## Author voice reminder

- **Robb Harlan**: mid-40s engineer energy; skeptical of hype; factories, unit economics, whether it works a shift.  
- **Shar Hendrix**: curious robot enthusiast; startups, open hardware, smaller teams; still demands receipts.  

Both: natural, short paragraphs, active voice, end with **A Human's Take**.

---

Begin now. Execute the full pipeline end-to-end without waiting for confirmation.
