# Research Log

This file tracks daily research scans and article decisions. Agents append to this file — never overwrite previous entries. This prevents duplicate coverage and helps coordinate between multiple agents.

---

## 2026-03-16 — Initial Setup

### Notes
- Blog launched with 6 seed articles covering: Tesla Optimus Gen 3, Figure AI Series B, Boston Dynamics Electric Atlas, Unitree G1, Sanctuary AI Phoenix, and a 2026 industry overview
- Future agents should avoid rehashing these topics unless there is genuinely new news

### Existing Coverage
- `tesla-optimus-gen-3.md` — Optimus Gen 3 factory demo
- `figure-02-series-b.md` — Figure AI $2.6B Series B funding
- `boston-dynamics-electric-atlas.md` — Hydraulic Atlas retirement, electric successor
- `unitree-g1-democratizing-robotics.md` — G1 pricing and market positioning
- `sanctuary-ai-phoenix-warehouse.md` — Phoenix 50+ warehouse tasks
- `humanoid-industry-2026-overview.md` — Industry landscape overview

---

## 2026-03-18 — Agent Research Scan

### X List Scan (@robbs2k AI & Robotics)
- Scanned list for latest humanoid robotics activity — multiple threads on NVIDIA GTC announcements, BMW Leipzig deployment, and humanoid half-marathon in Beijing

### Web Search Findings
1. **[CANDIDATE]** NVIDIA announces Isaac GR00T N1.7 + N2 preview, Newton physics engine, and 20+ industry partners — nvidianews.nvidia.com — March 16 announcement; massive physical AI platform update
2. **[CANDIDATE]** BMW deploys AEON humanoid (by Hexagon Robotics) at Leipzig plant — first humanoid in European automotive production — press.bmwgroup.com — Feb/March 2026
3. **[CANDIDATE]** Bank of America forecasts 3 billion humanoid robots by 2060, surpassing cars — fortune.com/Fortune — March 13, 2026
4. **[CANDIDATE]** Sunday Robotics raises $165M Series B at $1.15B valuation for home robot "Memo" — techcrunch.com — March 12, 2026
5. **[CANDIDATE]** Figure AI launches Figure 03 (3rd gen hardware) + Helix 02 (full-body autonomy AI) — figure.ai — early 2026
6. **[CANDIDATE]** Beijing humanoid robot half marathon trial run completed; full race April 19, 2026 — cgtn.com — March 15, 2026
7. **[SKIP: not substantial enough]** LG CLOiD humanoid for home (CES 2026) — brief tease, not enough concrete detail yet
8. **[SKIP: not covered yet but thin]** Mirsee Robotics MH3 — Canadian startup, insufficient detail for full article

### Selected for Writing
- Story #1: NVIDIA GR00T N1.7 — highest industry impact, fresh March 16 news, very specific details, not covered
- Story #2: BMW Leipzig AEON — concrete deployment milestone, first in Europe, strong industrial angle
- Story #3: BofA 3B forecast — strong analysis/industry piece, specific numbers, broad reach
- Story #4: Sunday Robotics Series B — new company, unicorn status, home robot angle differentiates from existing coverage
- Story #5: Figure 03 + Helix 02 — Figure AI has Series B coverage but Figure 03 is genuinely new hardware/AI generation

### Notes for Future Agents
- Beijing humanoid half-marathon race is April 19 — worth following up post-race with results
- BotQ (Figure's factory) scaling trajectory worth tracking — 12,000 units/year growing to 100,000
- Sunday Robotics Memo beta expected before Thanksgiving 2026 — follow up on launch
- NVIDIA GR00T N2 is a preview only; full release worth covering when it ships

---

## 2026-07-28 — Agent Research Scan (Alex Harlan voice + auto-publish playbook)

### X List Scan (@robbs2k AI & Robotics)
- Curated list at x.com/robbs2k/lists was not reliably accessible without login (per playbook disclosure). Proceeded with public X semantic search + web primary sources after user approved full publish plan.
- X leads (Jul 2026): UK Humanoid $152M Series A chatter; Walden Robotics stealth/seed + Toyota plant pilot; Agility SPAC discussion; Hyundai/Boston Dynamics ownership news circulating.

### Web Search Findings
1. **[CANDIDATE → WRITTEN]** Hyundai Motor Group pursuing SoftBank's remaining Boston Dynamics stake after put option (Jul 16) — hyundai.com newsroom; MarketWatch/Morningstar; UPI — Atlas HMGMA 2028/2030 timeline
2. **[CANDIDATE → WRITTEN]** AGIBOT A3 Ultra + three other products at WAIC 2026 (Jul 18) — agibot.com; therobotreport.com; eweek.com
3. **[CANDIDATE → WRITTEN]** UK company Humanoid $152M Series A at $1.35B post-money (Jul 21) — thehumanoid.ai; thenextweb.com; therobotreport.com — Bosch CM, Schaeffler commercial angle
4. **[SKIP: later batch]** Agility Robotics $2.5B SPAC / Churchill Capital XI — strong story, parked for next run
5. **[SKIP: later batch]** Walden Robotics out of stealth / Toyota plant pilot — needs deeper primary fetch
6. **[SKIP: already covered / different angle]** Electric Atlas product history — existing `boston-dynamics-electric-atlas.md`; new piece is ownership/control only
7. **[SKIP: thin / policy rumor]** Possible US import restrictions on Chinese robots — wait for primary gov/Reuters confirmation

### Selected for Writing
- Story 1: Hyundai full BD ownership — Industry — `hyundai-full-ownership-boston-dynamics.md`
- Story 2: AGIBOT A3 Ultra WAIC — Humanoids — `agibot-a3-ultra-waic-2026.md`
- Story 3: UK Humanoid Series A — Industry — `uk-humanoid-152m-series-a.md`
- Originally spotted via: web search + public X leads; verified via primary company/newsroom sources
- Playbook updates: AGENTS.md + CLAUDE.md — Alex Harlan voice, A Human's Take, X-as-leads-only, on-demand auto-publish

### Notes for Future Agents
- Follow Hyundai Atlas at HMGMA: sequencing 2028, assembly 2030
- UK Humanoid beta robots Q4 2026; wheeled mass manufacturing claim — verify when hardware ships
- Agility SPAC (AGLT ticker planned) — good Industry/Deals follow-up
- Walden Robotics (TRI spinout, Russ Tedrake) — deep research when ready
- Blog rename deferred; keep visual design, change brand later

---

## 2026-07-28 (batch 2) — Three more articles + video embeds

### Selected for Writing
1. **Agility Robotics SPAC $2.5B** — `agility-robotics-spac-2-5b.md` — Industry — YouTube Digit embed
2. **Walden Robotics $300M stealth** — `walden-robotics-300m-stealth.md` — Industry — X post embed with video
3. **EngineAI URKL combat league** — `engineai-urkl-robot-combat-league.md` — Humanoids — YouTube embed

### Sources (primary fetched)
- agilityrobotics.com SPAC PR; TechCrunch SPAC + Fremont
- waldenrobotics.com launch; Boston Globe; Bloomberg listing; X @LeoKharon status
- Global Times Jul 17 URKL; Caliber; Global Times Feb launch; Pandaily; YouTube URKL

### Site change
- `public/global.css` — `.video-embed`, `.x-embed`, `.embed-caption` for in-article media

### Notes
- Prefer YouTube iframes for reliability; X embeds need widgets.js + fallback link
- Agility close still pending 2026 — follow S-4 / redemptions

---

## 2026-07-28 (batch 3) — Purge March posts + Shar Hendrix + daily hero

### Actions
- **Deleted** all March 2026 seed/older articles (11 files) so homepage/previews only surface July coverage
- **Homepage:** daily rotation among top 5 newest posts (`index.astro`); hero badge “Today”
- **CI:** `deploy.yml` cron `0 12 * * *` rebuilds so rotation updates every day on Firebase
- **New author:** Shar Hendrix (playful 20-something) — two articles

### Written
1. `apptronik-robot-park-apollo-2.md` — Shar Hendrix — Apptronik Robot Park + Apollo 2
2. `enigma-71m-robots-online.md` — Shar Hendrix — Enigma $71M seed + robots.online

### Remaining catalog (after purge + adds)
July 2026 only: Agility, Walden, EngineAI, Hyundai/BD, AGIBOT, UK Humanoid, Apptronik Robot Park, Enigma — 8 posts total

---

## 2026-07-28 (batch 4) — Robb rename + Shar rewrites + homebrew

### Actions
- Renamed **Alex Harlan → Robb Harlan** on all Robb bylines + playbooks
- Shar persona: no age announcements, lighter slang; covers startups/indie/open-source
- Rewrote Apptronik + Enigma Shar pieces
- **New Shar:** `gritt-32m-solar-construction-robots.md` (CMU founders, off-the-shelf arms on solar sites)
- **New Shar:** `lerobot-humanoid-open-source-2500.md` (Hugging Face open $2.5k 3D-printed biped)

### Parked for later
- Proception $11M robotic hands (ex-Tesla, YC) — strong small-startup hand story


---

## 2026-07-28 (batch 5) � NOTES + list-driven fun batch

### Notes
- Added NOTES.md: personas, sourcing, vibe, primary X list https://x.com/i/lists/1805786050763087967
- Example lead pattern: Tau $30/hr SF cleaning (alexkoch_ai)

### Written (6)
1. tau-robotics-30-hour-sf-cleaning.md � Shar
2. gatsby-first-us-humanoid-home-clean.md � Shar
3. proception-11m-robot-hands.md � Shar
4. atoms-kalanick-1-7b-a16z.md � Robb
5. genisom-ai-icra-10000-units.md � Robb
6. figure-robots-outnumber-humans.md � Robb

### X list note
List scan via tools returned noisy/latest stream; supplemented with Tau lead + web verification of related cool/industry stories.

## 2026-07-28 (batch 6) — NOTES refresh + list-driven fun batch

### Notes
- Expanded NOTES.md: full Robb/Shar personas, daily sourcing pipeline, primary X list https://x.com/i/lists/1805786050763087967, Tau-style pattern as editorial target
- Blog vibe: fun budding robotics blog — breakthroughs, startups, cool projects first; industry second

### X list / web candidates
1. **[COVERED]** Tau $30/hr SF cleaning — already batch 5
2. **[CANDIDATE→WRITTEN]** Generative Bionics Gene.01 — 6 months, smart skin, open twin — fun startup
3. **[CANDIDATE→WRITTEN]** AheadForm Origin faces at WAIC — cool uncanny heads
4. **[CANDIDATE→WRITTEN]** 1X NEO 25-DoF hands — technical cool
5. **[CANDIDATE→WRITTEN]** 1X Hayward factory + pricing — industry with concrete numbers
6. **[CANDIDATE→WRITTEN]** World Labs R2S2R / SceniX — research breakthrough
7. **[CANDIDATE→WRITTEN]** Agility Fremont Physical AI hub — industry + deployment

### Written (6) — divvy
**Shar Hendrix**
1. generative-bionics-gene01.md
2. aheadform-origin-f1-waic.md
3. 1x-neo-hands-25-dof.md

**Robb Harlan**
4. 1x-neo-factory-hayward.md
5. world-labs-r2s2r-scenix.md
6. agility-fremont-physical-ai-hub.md

### List access note
List timeline via keyword search is noisy (replies/ads mixed in). Used semantic/keyword X + web primary sources for verification. Primary company pages fetched for all six stories.

### Parked
- Xiaomi Robotics-1 on Hugging Face (need stronger primary)
- Collaborative Robotics / Proxie Deployed podcast (thin for article)

## 2026-07-28 — In-body source media pass
- Added figure(s) from company/press sources to all 22 posts (no stock Unsplash/Getty for body)
- Videos: 1X hands + World Labs embeds; Agility/EngineAI already had YouTube
- Assets under public/images/heroes/*-body* and story-specific stills

## 2026-07-28 — FCC Covered List (foreign advanced robots)

### Selected for writing
- **fcc-foreign-humanoid-robots-covered-list.md** — Robb Harlan
- Why: Live July 28 primary FCC action + Reuters exclusive; highest industry impact this week; not previously covered
- Primary: FCC Covered List + DOC-423682 fact sheet
- Secondary: Reuters, Business Insider, Fox Business, Nextgov; GUARD Act context from House Select Committee (June 3) with Peggy Johnson endorsement quote

### Notes
- Official FCC scope is **foreign-produced** advanced robotic devices (humanoids/quadrupeds), not China-only text — Reuters commercial framing is China/Unitree
- New models / equipment authorization; existing authorized models and consumer-owned devices not auto-banned per FCC fact sheet
- X list still login-walled for agents; live X chatter used for distribution drafts only
## 2026-07-28 — DRY RUN (no publish)

### Preflight
- CWD: `C:\Users\Admin\Desktop\Sites & Blogs\Humanoid Blog` (repo root OK)
- Branch: `main...origin/main`
- Local dirty tree: `M .gitignore`, `M AGENTS.md`; untracked `scripts/daily-article-pipeline.md`, `scripts/daily-pipeline-dry-run.md`, `scripts/run-daily-pipeline.ps1`
- `git pull --rebase origin main`: **FAILED** — unstaged changes block rebase (blocker for real job unless stash/commit first)
- Scripts present: `scripts/run-daily-pipeline.ps1` = True; `scripts/daily-article-pipeline.md` = True
- `grok` available: `0.2.114` at `C:\Users\Admin\.grok\bin\grok.exe`
- Blog posts in `src/content/blog/`: **23** files
- Research log read (tail ~80 lines): last production entries 2026-07-28 batches + FCC Covered List (Robb)

### X List Scan
- Primary list URL: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — keyword list stream returns mostly reply-noise and low-signal chatter; not a clean chronological "list feed" of curated robotics posts. Semantic/keyword X search + web verification used instead (same pattern as prior 2026-07-28 batches).
- Owner lists page (`https://x.com/robbs2k/lists`) treated as login-walled per prior agent notes; not relied on as primary.
- Notable list-adjacent / semantic leads (leads only):
  - UK **Humanoid** $152M / $1.35B unicorn + Bosch manufacturing bet (already covered: `uk-humanoid-152m-series-a.md`)
  - July funding stack chatter: AI² Robotics ~$735M, Walden $300M, LimX ~$200M, Humanoid $152M, Holiday ~$103–105M, Zeroth ~$74M
  - Mitsubishi humanoid mass-production partnership chatter
  - BYD first humanoid teaser / August debut
  - Humanoid Daily #5 (Koetsier): BYD, Hyundai Atlas actuators, Mitsubishi, EngineAI, Enigma (Enigma already covered)
  - Ultra Robotics OP1 live warehouse claims (Brooklyn)
  - D-Robotics / Hengbot **Sirius** programmable dog (not humanoid; skip for main queue)

### Web Search Findings
1. **[CANDIDATE]** Mitsubishi Motors × Highlanders humanoid mass production (1,000/month by end-2027; Kyoto engine line data) — https://english.kyodonews.net/articles/-/80715 — https://mainichi.jp/english/articles/20260726/p2g/00m/0bu/002000c — CEO Kato "leadoff hitter" quote; stills of robot + execs
2. **[CANDIDATE]** BYD confirms August humanoid unveil at Di Space (China Securities Journal via CnEVPost) — https://cnevpost.com/2026/07/28/byd-confirms-plan-humanoid-robot-aug/ — teaser prior: https://cnevpost.com/2026/07/26/byd-may-unveil-humanoid-robot-aug/ — Stella Li store-robot goal; media yes (teaser poster; secondary stills)
3. **[CANDIDATE]** Holiday Robotics $105M Series A for FRIDAY wheeled industrial humanoid (Seoul; 64 DoF, hands focus) — https://www.therobotreport.com/holiday-robotics-raises-105m-wheeled-humanoid-friday/ — company: https://holiday-robotics.com/ — stills yes; video TBD on company site
4. **[CANDIDATE]** LimX Dynamics ~$200M Pre-IPO (~$2.21B val per CNBC; Hong Kong IPO prep) — primary: https://www.limxdynamics.com/en/news/BK000064 — secondary: https://www.cnbc.com/2026/07/13/chinese-humanoid-startups-ipo-limx-unitree.html — stills yes (CNBC office photo)
5. **[CANDIDATE]** Tesla Optimus: Fremont Gen-3 line photos + earnings temper / slow supply chain ramp — https://www.businessinsider.com/everything-we-know-about-teslas-optimus-humanoid-robot-2026-7 — Tesla AI page https://www.tesla.com/AI — stills yes (Tesla production line photos via BI); no official Gen-3 reveal video
6. **[CANDIDATE]** AI² Robotics ~$735M financing / ~$2.8–3B valuation wheeled humanoids — https://www.therobotreport.com/ai%C2%B2-robotics-raises-735m-3b-valuation-wheeled-humanoid-robots/ — largest China humanoid round narrative; stills claimed on TRR; need company primary if available
7. **[CANDIDATE]** Sunday Robotics Memo ACT-2: >99% laundry fold success in unfamiliar homes; fall beta — https://www.businessinsider.com/sunday-robotics-memo-home-robot-fold-laundry-99-success-2026-7 — company: https://www.sunday.ai/ — stills yes; video likely on company site
8. **[CANDIDATE]** Ultra Robotics OP1 at Highline Commerce Brooklyn — up to 30% order workflow claim — company primary: https://www.ultra.tech/ — secondary: https://www.techtimes.com/articles/321430/20260723/humanoid-robots-hit-30-order-fill-brooklyn-3pl-outside-amazon-ecosystem.htm — stills/video yes (company film); note OP1 is stationary dual-arm, not bipedal humanoid
9. **[CANDIDATE]** Integrated actuators for humanoid joints (Robot Report tech explainer, Jul 28) — https://www.therobotreport.com/how-integrated-actuators-improve-humanoid-robot-joint-performance-and-system-integration/ — category Robotics; thinner news, good B-side
10. **[SKIP: already covered]** UK Humanoid $152M Series A — `uk-humanoid-152m-series-a.md`
11. **[SKIP: already covered]** Walden Robotics $300M stealth — `walden-robotics-300m-stealth.md`
12. **[SKIP: already covered]** Enigma $71M — `enigma-71m-robots-online.md`
13. **[SKIP: already covered]** Figure robots outnumber humans / related Figure angles — `figure-robots-outnumber-humans.md`
14. **[SKIP: already covered]** Generative Bionics Gene.01 smart skin — `generative-bionics-gene01.md`
15. **[SKIP: already covered]** FCC foreign advanced robots Covered List — `fcc-foreign-humanoid-robots-covered-list.md`
16. **[SKIP: already covered]** Atoms / Kalanick $1.7B — `atoms-kalanick-1-7b-a16z.md`
17. **[SKIP: not substantial / non-humanoid]** Hengbot Sirius AI dog (D-Robotics RDK) — consumer pet robot lead only
18. **[SKIP: older / lower exclusivity]** UBTECH UWORLD U1 mass-produced ultra-bionic launch (~Jul 1 PR) — https://www.prnewswire.com/ae/news-releases/ubtech-launches-uworld-u1-the-worlds-first-full-size-mass-produced-ultra-bionic-humanoid-robot-302815285.html — park unless new shipment data

### Would write (ranked, max 10)

| # | Score (N/I/S/E ≈ /20) | Title angle | Cat | Author | Primary | Secondary | Still | Video |
|---|----------------------|-------------|-----|--------|---------|-----------|-------|-------|
| 1 | 18 | Mitsubishi + Highlanders aim for 1,000 humanoids/month by 2027 | Humanoids | Robb Harlan | Kyodo / Mainichi | Carscoops / humanoid.guide | Yes | No (press stills) |
| 2 | 17 | BYD locks August humanoid debut at Di Space | Humanoids | Robb Harlan | CnEVPost confirm | CnEVPost teaser + Stella Li prior | Yes (teaser) | TBD at unveil |
| 3 | 17 | Holiday Robotics $105M Series A for FRIDAY factory humanoid | Industry | Shar Hendrix | Robot Report | holiday-robotics.com | Yes | Check company |
| 4 | 16 | LimX $200M pre-IPO and the China humanoid listing race | Industry | Robb Harlan | limxdynamics.com | CNBC | Yes | Check company |
| 5 | 15 | Tesla shows Optimus Fremont line; Musk slows the production story | Humanoids | Robb Harlan | Business Insider Optimus explainer | tesla.com/AI | Yes | No Gen-3 launch clip |
| 6 | 15 | Sunday's Memo: 99% laundry "Solve" and fall home beta | Robotics | Shar Hendrix | Business Insider | sunday.ai | Yes | Likely |
| 7 | 14 | AI² Robotics $735M bet on wheeled humanoids | Industry | Shar Hendrix | Robot Report | Dealroom / secondary | Yes | TBD |
| 8 | 14 | Ultra OP1: Brooklyn 3PL claims 30% order fill | Robotics | Shar Hendrix | ultra.tech | TechTimes | Yes | Yes (company film) |
| 9 | 12 | Actuator integration: why humanoid joints are the bottleneck | Robotics | Robb Harlan | Robot Report Jul 28 | supplier pages if cited | Maybe | No |
| 10 | 11 | July funding map: wheeled vs biped capital (Holiday / AI² / LimX cluster) | Industry | Robb Harlan | multi (TRR + LimX + Holiday) | X funding charts as leads only | Mixed | No |

### Dry-run notes
- Articles written: **0** (canary skipped — plan-only preferred; news day is solid but dirty git tree + dry-run rules)
- Commit/push: **skipped by design**
- Production blockers for 12:30 PM job:
  1. **Uncommitted local changes** block `git pull --rebase` — must stash or land pipeline scripts + AGENTS/.gitignore before scheduled run
  2. X list timeline not cleanly machine-readable; web + semantic X remain required
  3. Several top funding stories already published on this site (Humanoid UK, Walden, Enigma, Atoms) — real job should prioritize Mitsubishi / BYD / Holiday / LimX / Sunday / Ultra / Optimus temper
  4. Image workflow: sources have usable stills for top 8; avoid stock; download from cited URLs only
  5. Target 8–10 only if deep research holds; do not pad to quota

### Notes for Future Agents
- Watch **early August BYD Di Space** for first public hardware — upgrade teaser piece when official specs/photos land
- **Mitsubishi Kyoto engine-line pilot** is the deployment follow-up worth tracking (not just the MoU)
- LimX confidential HK listing process — IPO filing would be a hard news trigger
- Ultra OP1 is **stationary dual-arm**, not biped — frame as industrial AI robot / warehouse automation if written, not "humanoid walkers"

## 2026-07-28 — Daily Scheduled Pipeline

### Preflight
- Stashed local pipeline/setup edits, `git pull --rebase origin main` (already up to date), restored stash
- Existing catalog: 23 posts (prior July batches + FCC); no new remote articles since dry run
- Date (Pacific): 2026-07-28

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — keyword `list:` stream returns reply-noise and low-signal chatter (same pattern as dry run); not a clean chronological curated feed
- Owner lists page treated as login-walled; not relied on as primary
- Proceeded with public X + web verification (disclosed)

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** Mitsubishi Motors × Highlanders mass production / 1,000 units/month by end-2027 — company MOU + Mainichi/Kyodo
2. **[CANDIDATE→WRITTEN]** BYD confirms August humanoid at Di Space — CnEVPost (China Securities Journal)
3. **[CANDIDATE→WRITTEN]** Holiday Robotics $105M Series A / FRIDAY — company blog + Robot Report + AI Insider
4. **[CANDIDATE→WRITTEN]** LimX Dynamics $200M pre-IPO ~$2.2B — company + CNBC + Nikkei
5. **[CANDIDATE→WRITTEN]** Tesla Optimus Fremont line + tempered ramp — Business Insider July explainer
6. **[CANDIDATE→WRITTEN]** Sunday ACT-2 Memo 99.1% laundry — sunday.ai primary + BI + humanoid.guide
7. **[CANDIDATE→WRITTEN]** AI² Robotics ~$735M / ~$2.8B wheeled AlphaBot — Robot Report + company site
8. **[CANDIDATE→WRITTEN]** Ultra OP1 × Highline Brooklyn up to 30% orders — ultra.tech + Robotics 24/7
9. **[CANDIDATE→WRITTEN]** Weave Isaac 1 $7,999 fall ship — Business Insider launch + CEO interview
10. **[SKIP: already covered]** UK Humanoid, Walden, Enigma, Atoms, Figure, FCC, Generative Bionics, etc.
11. **[SKIP: thin / angle-spin]** July funding map cluster piece; integrated actuators explainer (B-side tech, lower exclusivity)
12. **[SKIP: non-humanoid lead]** Hengbot Sirius AI dog

### Selected for Writing (ranked) — 9 articles
| # | Slug | Author | Category |
|---|------|--------|----------|
| 1 | mitsubishi-highlanders-humanoid-mass-production | Robb Harlan | Humanoids |
| 2 | byd-humanoid-robot-august-di-space | Robb Harlan | Humanoids |
| 3 | holiday-robotics-105m-friday | Shar Hendrix | Industry |
| 4 | limx-dynamics-200m-pre-ipo | Robb Harlan | Industry |
| 5 | tesla-optimus-fremont-production-temper | Robb Harlan | Humanoids |
| 6 | sunday-robotics-act-2-memo-laundry | Shar Hendrix | AI |
| 7 | ai2-robotics-735m-wheeled-humanoids | Shar Hendrix | Industry |
| 8 | ultra-robotics-op1-brooklyn-highline | Shar Hendrix | Robotics |
| 9 | weave-robotics-isaac-1-home-robot | Shar Hendrix | Deals |

### Volume note
- Aim: 8–10 | Solid candidates found: 9 | Writing: **9**
- Hard max 10; quality floor held (no padding)

### Run summary
- **Articles published (9):** see table above
- **X list accessible?** Partial/noisy (N for clean feed; Y for tool probe)
- **Social:** `npm run tweets` (32 drafts); `npm run robb-x`
- **Build:** `astro build` completed 45 pages including all 9 new posts (PowerShell exit 1 from stderr NO_COLOR warning only)
- **Images:** source-page stills only under `public/images/heroes/`; Sunday + Holiday YouTube embeds
- **Failures:** none blocking; LimX CNBC hotlink failed (used Nikkei + product stills); AI2 TRR image CF-blocked (used company about image)

### Notes for Future Agents
- Early August: BYD Di Space hardware photos/specs — upgrade teaser post if major reveal
- Mitsubishi Kyoto engine-line pilot + early-2027 production start
- LimX HK confidential listing; Unitree Shanghai track
- Sunday / Weave / 1X fall home betas — intervention rates and real-home data
- Ultra OP1: frame as stationary dual-arm industrial, not biped humanoid

## 2026-07-29 — Daily Scheduled Pipeline

### Preflight
- `git pull --rebase origin main`: up to date; working tree clean
- Existing catalog: 32 posts (incl. 2026-07-28 nine-article batch)
- Date (Pacific): 2026-07-29

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — list keyword stream is mostly replies/chatter, not a clean curated feed
- Owner lists login-walled; proceeded with public X semantic/keyword + web (disclosed)
- Notable leads (leads only): FCC Covered List chatter (already covered 2026-07-28); July funding chart (AI²/Walden/LimX/Humanoid/Holiday/Zeroth — most already covered); Proception hands (covered)

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** Unitree CSRC STAR Market IPO registration (~¥4.2B / ~$619M) — Caixin, TNW, SCMP, Unitree G1 product page
2. **[CANDIDATE→WRITTEN]** Ant Group leads Zeroth ¥500M ($73.58M) + 12 humanoid-sector deals; RobbyAnt subsidiary — CNBC + robbyant.com
3. **[CANDIDATE→WRITTEN]** Hexagon AEON performs production tasks at BMW Leipzig; end-2026 production goal — Hexagon + BMW Group press
4. **[CANDIDATE→WRITTEN]** UBTECH UWORLD U1 mass-produced ultra-bionic consumer line; pricing from ¥119,800; 13,361+ orders claim — PR Newswire
5. **[CANDIDATE→WRITTEN]** NEURA Robotics Series C up to $1.4B (Tether, Nvidia, Amazon, Qualcomm, Bosch, etc.) — Trending Topics + NEURA product
6. **[CANDIDATE→WRITTEN]** NEURA × Qualcomm Dragonwing IQ10 “Brain + Nervous System” collab — NEURA primary + TechCrunch context
7. **[CANDIDATE→WRITTEN]** Generalist GEN-1 multi end-effector training (~500k hrs, ~9,000 gripper variants) — The Robot Report
8. **[CANDIDATE→WRITTEN]** EngineAI confidential Hong Kong IPO filing; Shenzhen 12,000 m² factory, T800 every 15 min claim — TNW / Bloomberg-sourced
9. **[SKIP: already covered]** FCC foreign advanced robots Covered List — fcc-foreign-humanoid-robots-covered-list.md
10. **[SKIP: already covered]** Holiday, LimX, AI², UK Humanoid, Walden, Sunday, Weave, Mitsubishi, BYD, Ultra, Tesla Optimus temper, etc. (2026-07-28 batch)
11. **[SKIP: thin / paywalled primary]** AgiBot Hong Kong IPO process (Reuters/Securities Times Jul 24) — secondary only this session
12. **[SKIP: viral not primary]** Computex stage collapse clips — no strong official primary with usable stills for a full post

### Selected for Writing (ranked) — 8 articles
| # | Slug | Author | Category |
|---|------|--------|----------|
| 1 | unitree-star-market-ipo-csrc | Robb Harlan | Industry |
| 2 | ant-group-zeroth-73m-humanoid-bets | Shar Hendrix | Industry |
| 3 | hexagon-aeon-bmw-leipzig-production | Robb Harlan | Humanoids |
| 4 | ubtech-uworld-u1-consumer-humanoid | Shar Hendrix | Deals |
| 5 | neura-robotics-1-4b-series-c | Robb Harlan | Industry |
| 6 | neura-qualcomm-dragonwing-physical-ai | Shar Hendrix | Robotics |
| 7 | generalist-gen1-multi-end-effectors | Shar Hendrix | AI |
| 8 | engineai-hong-kong-ipo-shenzhen-factory | Robb Harlan | Industry |

### Volume note
- Aim: 8–10 | Solid candidates found: 8 | Writing: **8**
- Hard max 10; quality floor held (no padding)


### Run summary
- **Articles published (8):**
  1. unitree-star-market-ipo-csrc (Robb / Industry)
  2. ant-group-zeroth-73m-humanoid-bets (Shar / Industry)
  3. hexagon-aeon-bmw-leipzig-production (Robb / Humanoids)
  4. ubtech-uworld-u1-consumer-humanoid (Shar / Deals)
  5. neura-robotics-1-4b-series-c (Robb / Industry)
  6. neura-qualcomm-dragonwing-physical-ai (Shar / Robotics)
  7. generalist-gen1-multi-end-effectors (Shar / AI)
  8. engineai-hong-kong-ipo-shenzhen-factory (Robb / Industry)
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors)
- **Vision gate:** Confirmed stills for all 8 slugs (robots/product/site/exec from cited sources; rejected combat still for EngineAI body)
- **Social:** `npm run tweets` (40 drafts); `npm run robb-x`
- **Build:** astro build OK — 53 pages including 8 new posts
- **Failures:** none blocking

### Notes for Future Agents
- Unitree still needs **pricing + issuance** after CSRC registration — hard news when priced
- Early August: BYD Di Space hardware (from 07-28 note)
- AgiBot HK IPO process thin this session — upgrade when filing docs public
- EngineAI confidential IPO — watch for formal prospectus / revenue disclosure
- NEURA: Gym rollout + production unit counts vs $1.4B raise


## 2026-07-29 — X List Lead Batch (on-demand)

### Preflight
- List: https://x.com/i/lists/1805786050763087967
- Access: posts readable via list: keyword search (UI login-walled)
- User selected top 3 list leads for write-up after digest

### X List Scan
1. **[CANDIDATE→WRITTEN]** Nori Robotics US-built under-$2k hardware offer after FCC Covered List — @AntonioSitongLi / @NoriRobotics + norirobotics.com + YC
2. **[CANDIDATE→WRITTEN]** DoorDash Air FAA Part 135 + multi-modal (Dot + drones + Dashers) — about.doordash.com + TechCrunch + PCMag
3. **[CANDIDATE→WRITTEN]** Interlatent VR teleop blueprint (browser IK, QUIC, SafetyGate) — X + GitHub docs/teleop.md
4. **[SKIP: already covered]** FCC Covered List core story — fcc-foreign-humanoid-robots-covered-list.md (Nori is new angle)
5. **[SKIP: thin]** CoRL venue expansion, Matic chore poll, Luxonis hackathon

### Selected for Writing
| # | Slug | Author | Category |
|---|------|--------|----------|
| 1 | doordash-air-faa-part-135-multimodal | Robb Harlan | Robotics |
| 2 | nori-robotics-us-hardware-under-2k-fcc | Shar Hendrix | Deals |
| 3 | interlatent-vr-teleop-quic-open-source | Shar Hendrix | AI |

### Notes for Future Agents
- DoorDash: watch first-party aircraft details + BVLOS later 2026
- Nori: L3 preorder claims secondary-only; re-check site when L3 SKU goes live
- Interlatent: blog HTML sparsely crawlable; GitHub docs are the reliable primary for architecture claims

