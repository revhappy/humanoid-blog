# Research Log

This file tracks daily research scans and article decisions. Agents append to this file â€” never overwrite previous entries. This prevents duplicate coverage and helps coordinate between multiple agents.

---

## 2026-03-16 â€” Initial Setup

### Notes
- Blog launched with 6 seed articles covering: Tesla Optimus Gen 3, Figure AI Series B, Boston Dynamics Electric Atlas, Unitree G1, Sanctuary AI Phoenix, and a 2026 industry overview
- Future agents should avoid rehashing these topics unless there is genuinely new news

### Existing Coverage
- `tesla-optimus-gen-3.md` â€” Optimus Gen 3 factory demo
- `figure-02-series-b.md` â€” Figure AI $2.6B Series B funding
- `boston-dynamics-electric-atlas.md` â€” Hydraulic Atlas retirement, electric successor
- `unitree-g1-democratizing-robotics.md` â€” G1 pricing and market positioning
- `sanctuary-ai-phoenix-warehouse.md` â€” Phoenix 50+ warehouse tasks
- `humanoid-industry-2026-overview.md` â€” Industry landscape overview

---

## 2026-03-18 â€” Agent Research Scan

### X List Scan (@robbs2k AI & Robotics)
- Scanned list for latest humanoid robotics activity â€” multiple threads on NVIDIA GTC announcements, BMW Leipzig deployment, and humanoid half-marathon in Beijing

### Web Search Findings
1. **[CANDIDATE]** NVIDIA announces Isaac GR00T N1.7 + N2 preview, Newton physics engine, and 20+ industry partners â€” nvidianews.nvidia.com â€” March 16 announcement; massive physical AI platform update
2. **[CANDIDATE]** BMW deploys AEON humanoid (by Hexagon Robotics) at Leipzig plant â€” first humanoid in European automotive production â€” press.bmwgroup.com â€” Feb/March 2026
3. **[CANDIDATE]** Bank of America forecasts 3 billion humanoid robots by 2060, surpassing cars â€” fortune.com/Fortune â€” March 13, 2026
4. **[CANDIDATE]** Sunday Robotics raises $165M Series B at $1.15B valuation for home robot "Memo" â€” techcrunch.com â€” March 12, 2026
5. **[CANDIDATE]** Figure AI launches Figure 03 (3rd gen hardware) + Helix 02 (full-body autonomy AI) â€” figure.ai â€” early 2026
6. **[CANDIDATE]** Beijing humanoid robot half marathon trial run completed; full race April 19, 2026 â€” cgtn.com â€” March 15, 2026
7. **[SKIP: not substantial enough]** LG CLOiD humanoid for home (CES 2026) â€” brief tease, not enough concrete detail yet
8. **[SKIP: not covered yet but thin]** Mirsee Robotics MH3 â€” Canadian startup, insufficient detail for full article

### Selected for Writing
- Story #1: NVIDIA GR00T N1.7 â€” highest industry impact, fresh March 16 news, very specific details, not covered
- Story #2: BMW Leipzig AEON â€” concrete deployment milestone, first in Europe, strong industrial angle
- Story #3: BofA 3B forecast â€” strong analysis/industry piece, specific numbers, broad reach
- Story #4: Sunday Robotics Series B â€” new company, unicorn status, home robot angle differentiates from existing coverage
- Story #5: Figure 03 + Helix 02 â€” Figure AI has Series B coverage but Figure 03 is genuinely new hardware/AI generation

### Notes for Future Agents
- Beijing humanoid half-marathon race is April 19 â€” worth following up post-race with results
- BotQ (Figure's factory) scaling trajectory worth tracking â€” 12,000 units/year growing to 100,000
- Sunday Robotics Memo beta expected before Thanksgiving 2026 â€” follow up on launch
- NVIDIA GR00T N2 is a preview only; full release worth covering when it ships

---

## 2026-07-28 â€” Agent Research Scan (Alex Harlan voice + auto-publish playbook)

### X List Scan (@robbs2k AI & Robotics)
- Curated list at x.com/robbs2k/lists was not reliably accessible without login (per playbook disclosure). Proceeded with public X semantic search + web primary sources after user approved full publish plan.
- X leads (Jul 2026): UK Humanoid $152M Series A chatter; Walden Robotics stealth/seed + Toyota plant pilot; Agility SPAC discussion; Hyundai/Boston Dynamics ownership news circulating.

### Web Search Findings
1. **[CANDIDATE â†’ WRITTEN]** Hyundai Motor Group pursuing SoftBank's remaining Boston Dynamics stake after put option (Jul 16) â€” hyundai.com newsroom; MarketWatch/Morningstar; UPI â€” Atlas HMGMA 2028/2030 timeline
2. **[CANDIDATE â†’ WRITTEN]** AGIBOT A3 Ultra + three other products at WAIC 2026 (Jul 18) â€” agibot.com; therobotreport.com; eweek.com
3. **[CANDIDATE â†’ WRITTEN]** UK company Humanoid $152M Series A at $1.35B post-money (Jul 21) â€” thehumanoid.ai; thenextweb.com; therobotreport.com â€” Bosch CM, Schaeffler commercial angle
4. **[SKIP: later batch]** Agility Robotics $2.5B SPAC / Churchill Capital XI â€” strong story, parked for next run
5. **[SKIP: later batch]** Walden Robotics out of stealth / Toyota plant pilot â€” needs deeper primary fetch
6. **[SKIP: already covered / different angle]** Electric Atlas product history â€” existing `boston-dynamics-electric-atlas.md`; new piece is ownership/control only
7. **[SKIP: thin / policy rumor]** Possible US import restrictions on Chinese robots â€” wait for primary gov/Reuters confirmation

### Selected for Writing
- Story 1: Hyundai full BD ownership â€” Industry â€” `hyundai-full-ownership-boston-dynamics.md`
- Story 2: AGIBOT A3 Ultra WAIC â€” Humanoids â€” `agibot-a3-ultra-waic-2026.md`
- Story 3: UK Humanoid Series A â€” Industry â€” `uk-humanoid-152m-series-a.md`
- Originally spotted via: web search + public X leads; verified via primary company/newsroom sources
- Playbook updates: AGENTS.md + CLAUDE.md â€” Alex Harlan voice, A Human's Take, X-as-leads-only, on-demand auto-publish

### Notes for Future Agents
- Follow Hyundai Atlas at HMGMA: sequencing 2028, assembly 2030
- UK Humanoid beta robots Q4 2026; wheeled mass manufacturing claim â€” verify when hardware ships
- Agility SPAC (AGLT ticker planned) â€” good Industry/Deals follow-up
- Walden Robotics (TRI spinout, Russ Tedrake) â€” deep research when ready
- Blog rename deferred; keep visual design, change brand later

---

## 2026-07-28 (batch 2) â€” Three more articles + video embeds

### Selected for Writing
1. **Agility Robotics SPAC $2.5B** â€” `agility-robotics-spac-2-5b.md` â€” Industry â€” YouTube Digit embed
2. **Walden Robotics $300M stealth** â€” `walden-robotics-300m-stealth.md` â€” Industry â€” X post embed with video
3. **EngineAI URKL combat league** â€” `engineai-urkl-robot-combat-league.md` â€” Humanoids â€” YouTube embed

### Sources (primary fetched)
- agilityrobotics.com SPAC PR; TechCrunch SPAC + Fremont
- waldenrobotics.com launch; Boston Globe; Bloomberg listing; X @LeoKharon status
- Global Times Jul 17 URKL; Caliber; Global Times Feb launch; Pandaily; YouTube URKL

### Site change
- `public/global.css` â€” `.video-embed`, `.x-embed`, `.embed-caption` for in-article media

### Notes
- Prefer YouTube iframes for reliability; X embeds need widgets.js + fallback link
- Agility close still pending 2026 â€” follow S-4 / redemptions

---

## 2026-07-28 (batch 3) â€” Purge March posts + Shar Hendrix + daily hero

### Actions
- **Deleted** all March 2026 seed/older articles (11 files) so homepage/previews only surface July coverage
- **Homepage:** daily rotation among top 5 newest posts (`index.astro`); hero badge â€œTodayâ€
- **CI:** `deploy.yml` cron `0 12 * * *` rebuilds so rotation updates every day on Firebase
- **New author:** Shar Hendrix (playful 20-something) â€” two articles

### Written
1. `apptronik-robot-park-apollo-2.md` â€” Shar Hendrix â€” Apptronik Robot Park + Apollo 2
2. `enigma-71m-robots-online.md` â€” Shar Hendrix â€” Enigma $71M seed + robots.online

### Remaining catalog (after purge + adds)
July 2026 only: Agility, Walden, EngineAI, Hyundai/BD, AGIBOT, UK Humanoid, Apptronik Robot Park, Enigma â€” 8 posts total

---

## 2026-07-28 (batch 4) â€” Robb rename + Shar rewrites + homebrew

### Actions
- Renamed **Alex Harlan â†’ Robb Harlan** on all Robb bylines + playbooks
- Shar persona: no age announcements, lighter slang; covers startups/indie/open-source
- Rewrote Apptronik + Enigma Shar pieces
- **New Shar:** `gritt-32m-solar-construction-robots.md` (CMU founders, off-the-shelf arms on solar sites)
- **New Shar:** `lerobot-humanoid-open-source-2500.md` (Hugging Face open $2.5k 3D-printed biped)

### Parked for later
- Proception $11M robotic hands (ex-Tesla, YC) â€” strong small-startup hand story


---

## 2026-07-28 (batch 5) — NOTES + list-driven fun batch

### Notes
- Added NOTES.md: personas, sourcing, vibe, primary X list https://x.com/i/lists/1805786050763087967
- Example lead pattern: Tau $30/hr SF cleaning (alexkoch_ai)

### Written (6)
1. tau-robotics-30-hour-sf-cleaning.md — Shar
2. gatsby-first-us-humanoid-home-clean.md — Shar
3. proception-11m-robot-hands.md — Shar
4. atoms-kalanick-1-7b-a16z.md — Robb
5. genisom-ai-icra-10000-units.md — Robb
6. figure-robots-outnumber-humans.md — Robb

### X list note
List scan via tools returned noisy/latest stream; supplemented with Tau lead + web verification of related cool/industry stories.

## 2026-07-28 (batch 6) â€” NOTES refresh + list-driven fun batch

### Notes
- Expanded NOTES.md: full Robb/Shar personas, daily sourcing pipeline, primary X list https://x.com/i/lists/1805786050763087967, Tau-style pattern as editorial target
- Blog vibe: fun budding robotics blog â€” breakthroughs, startups, cool projects first; industry second

### X list / web candidates
1. **[COVERED]** Tau $30/hr SF cleaning â€” already batch 5
2. **[CANDIDATEâ†’WRITTEN]** Generative Bionics Gene.01 â€” 6 months, smart skin, open twin â€” fun startup
3. **[CANDIDATEâ†’WRITTEN]** AheadForm Origin faces at WAIC â€” cool uncanny heads
4. **[CANDIDATEâ†’WRITTEN]** 1X NEO 25-DoF hands â€” technical cool
5. **[CANDIDATEâ†’WRITTEN]** 1X Hayward factory + pricing â€” industry with concrete numbers
6. **[CANDIDATEâ†’WRITTEN]** World Labs R2S2R / SceniX â€” research breakthrough
7. **[CANDIDATEâ†’WRITTEN]** Agility Fremont Physical AI hub â€” industry + deployment

### Written (6) â€” divvy
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

## 2026-07-28 â€” In-body source media pass
- Added figure(s) from company/press sources to all 22 posts (no stock Unsplash/Getty for body)
- Videos: 1X hands + World Labs embeds; Agility/EngineAI already had YouTube
- Assets under public/images/heroes/*-body* and story-specific stills

## 2026-07-28 â€” FCC Covered List (foreign advanced robots)

### Selected for writing
- **fcc-foreign-humanoid-robots-covered-list.md** â€” Robb Harlan
- Why: Live July 28 primary FCC action + Reuters exclusive; highest industry impact this week; not previously covered
- Primary: FCC Covered List + DOC-423682 fact sheet
- Secondary: Reuters, Business Insider, Fox Business, Nextgov; GUARD Act context from House Select Committee (June 3) with Peggy Johnson endorsement quote

### Notes
- Official FCC scope is **foreign-produced** advanced robotic devices (humanoids/quadrupeds), not China-only text â€” Reuters commercial framing is China/Unitree
- New models / equipment authorization; existing authorized models and consumer-owned devices not auto-banned per FCC fact sheet
- X list still login-walled for agents; live X chatter used for distribution drafts only
## 2026-07-28 â€” DRY RUN (no publish)

### Preflight
- CWD: `C:\Users\Admin\Desktop\Sites & Blogs\Humanoid Blog` (repo root OK)
- Branch: `main...origin/main`
- Local dirty tree: `M .gitignore`, `M AGENTS.md`; untracked `scripts/daily-article-pipeline.md`, `scripts/daily-pipeline-dry-run.md`, `scripts/run-daily-pipeline.ps1`
- `git pull --rebase origin main`: **FAILED** â€” unstaged changes block rebase (blocker for real job unless stash/commit first)
- Scripts present: `scripts/run-daily-pipeline.ps1` = True; `scripts/daily-article-pipeline.md` = True
- `grok` available: `0.2.114` at `C:\Users\Admin\.grok\bin\grok.exe`
- Blog posts in `src/content/blog/`: **23** files
- Research log read (tail ~80 lines): last production entries 2026-07-28 batches + FCC Covered List (Robb)

### X List Scan
- Primary list URL: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** â€” keyword list stream returns mostly reply-noise and low-signal chatter; not a clean chronological "list feed" of curated robotics posts. Semantic/keyword X search + web verification used instead (same pattern as prior 2026-07-28 batches).
- Owner lists page (`https://x.com/robbs2k/lists`) treated as login-walled per prior agent notes; not relied on as primary.
- Notable list-adjacent / semantic leads (leads only):
  - UK **Humanoid** $152M / $1.35B unicorn + Bosch manufacturing bet (already covered: `uk-humanoid-152m-series-a.md`)
  - July funding stack chatter: AIÂ² Robotics ~$735M, Walden $300M, LimX ~$200M, Humanoid $152M, Holiday ~$103â€“105M, Zeroth ~$74M
  - Mitsubishi humanoid mass-production partnership chatter
  - BYD first humanoid teaser / August debut
  - Humanoid Daily #5 (Koetsier): BYD, Hyundai Atlas actuators, Mitsubishi, EngineAI, Enigma (Enigma already covered)
  - Ultra Robotics OP1 live warehouse claims (Brooklyn)
  - D-Robotics / Hengbot **Sirius** programmable dog (not humanoid; skip for main queue)

### Web Search Findings
1. **[CANDIDATE]** Mitsubishi Motors Ã— Highlanders humanoid mass production (1,000/month by end-2027; Kyoto engine line data) â€” https://english.kyodonews.net/articles/-/80715 â€” https://mainichi.jp/english/articles/20260726/p2g/00m/0bu/002000c â€” CEO Kato "leadoff hitter" quote; stills of robot + execs
2. **[CANDIDATE]** BYD confirms August humanoid unveil at Di Space (China Securities Journal via CnEVPost) â€” https://cnevpost.com/2026/07/28/byd-confirms-plan-humanoid-robot-aug/ â€” teaser prior: https://cnevpost.com/2026/07/26/byd-may-unveil-humanoid-robot-aug/ â€” Stella Li store-robot goal; media yes (teaser poster; secondary stills)
3. **[CANDIDATE]** Holiday Robotics $105M Series A for FRIDAY wheeled industrial humanoid (Seoul; 64 DoF, hands focus) â€” https://www.therobotreport.com/holiday-robotics-raises-105m-wheeled-humanoid-friday/ â€” company: https://holiday-robotics.com/ â€” stills yes; video TBD on company site
4. **[CANDIDATE]** LimX Dynamics ~$200M Pre-IPO (~$2.21B val per CNBC; Hong Kong IPO prep) â€” primary: https://www.limxdynamics.com/en/news/BK000064 â€” secondary: https://www.cnbc.com/2026/07/13/chinese-humanoid-startups-ipo-limx-unitree.html â€” stills yes (CNBC office photo)
5. **[CANDIDATE]** Tesla Optimus: Fremont Gen-3 line photos + earnings temper / slow supply chain ramp â€” https://www.businessinsider.com/everything-we-know-about-teslas-optimus-humanoid-robot-2026-7 â€” Tesla AI page https://www.tesla.com/AI â€” stills yes (Tesla production line photos via BI); no official Gen-3 reveal video
6. **[CANDIDATE]** AIÂ² Robotics ~$735M financing / ~$2.8â€“3B valuation wheeled humanoids â€” https://www.therobotreport.com/ai%C2%B2-robotics-raises-735m-3b-valuation-wheeled-humanoid-robots/ â€” largest China humanoid round narrative; stills claimed on TRR; need company primary if available
7. **[CANDIDATE]** Sunday Robotics Memo ACT-2: >99% laundry fold success in unfamiliar homes; fall beta â€” https://www.businessinsider.com/sunday-robotics-memo-home-robot-fold-laundry-99-success-2026-7 â€” company: https://www.sunday.ai/ â€” stills yes; video likely on company site
8. **[CANDIDATE]** Ultra Robotics OP1 at Highline Commerce Brooklyn â€” up to 30% order workflow claim â€” company primary: https://www.ultra.tech/ â€” secondary: https://www.techtimes.com/articles/321430/20260723/humanoid-robots-hit-30-order-fill-brooklyn-3pl-outside-amazon-ecosystem.htm â€” stills/video yes (company film); note OP1 is stationary dual-arm, not bipedal humanoid
9. **[CANDIDATE]** Integrated actuators for humanoid joints (Robot Report tech explainer, Jul 28) â€” https://www.therobotreport.com/how-integrated-actuators-improve-humanoid-robot-joint-performance-and-system-integration/ â€” category Robotics; thinner news, good B-side
10. **[SKIP: already covered]** UK Humanoid $152M Series A â€” `uk-humanoid-152m-series-a.md`
11. **[SKIP: already covered]** Walden Robotics $300M stealth â€” `walden-robotics-300m-stealth.md`
12. **[SKIP: already covered]** Enigma $71M â€” `enigma-71m-robots-online.md`
13. **[SKIP: already covered]** Figure robots outnumber humans / related Figure angles â€” `figure-robots-outnumber-humans.md`
14. **[SKIP: already covered]** Generative Bionics Gene.01 smart skin â€” `generative-bionics-gene01.md`
15. **[SKIP: already covered]** FCC foreign advanced robots Covered List â€” `fcc-foreign-humanoid-robots-covered-list.md`
16. **[SKIP: already covered]** Atoms / Kalanick $1.7B â€” `atoms-kalanick-1-7b-a16z.md`
17. **[SKIP: not substantial / non-humanoid]** Hengbot Sirius AI dog (D-Robotics RDK) â€” consumer pet robot lead only
18. **[SKIP: older / lower exclusivity]** UBTECH UWORLD U1 mass-produced ultra-bionic launch (~Jul 1 PR) â€” https://www.prnewswire.com/ae/news-releases/ubtech-launches-uworld-u1-the-worlds-first-full-size-mass-produced-ultra-bionic-humanoid-robot-302815285.html â€” park unless new shipment data

### Would write (ranked, max 10)

| # | Score (N/I/S/E â‰ˆ /20) | Title angle | Cat | Author | Primary | Secondary | Still | Video |
|---|----------------------|-------------|-----|--------|---------|-----------|-------|-------|
| 1 | 18 | Mitsubishi + Highlanders aim for 1,000 humanoids/month by 2027 | Humanoids | Robb Harlan | Kyodo / Mainichi | Carscoops / humanoid.guide | Yes | No (press stills) |
| 2 | 17 | BYD locks August humanoid debut at Di Space | Humanoids | Robb Harlan | CnEVPost confirm | CnEVPost teaser + Stella Li prior | Yes (teaser) | TBD at unveil |
| 3 | 17 | Holiday Robotics $105M Series A for FRIDAY factory humanoid | Industry | Shar Hendrix | Robot Report | holiday-robotics.com | Yes | Check company |
| 4 | 16 | LimX $200M pre-IPO and the China humanoid listing race | Industry | Robb Harlan | limxdynamics.com | CNBC | Yes | Check company |
| 5 | 15 | Tesla shows Optimus Fremont line; Musk slows the production story | Humanoids | Robb Harlan | Business Insider Optimus explainer | tesla.com/AI | Yes | No Gen-3 launch clip |
| 6 | 15 | Sunday's Memo: 99% laundry "Solve" and fall home beta | Robotics | Shar Hendrix | Business Insider | sunday.ai | Yes | Likely |
| 7 | 14 | AIÂ² Robotics $735M bet on wheeled humanoids | Industry | Shar Hendrix | Robot Report | Dealroom / secondary | Yes | TBD |
| 8 | 14 | Ultra OP1: Brooklyn 3PL claims 30% order fill | Robotics | Shar Hendrix | ultra.tech | TechTimes | Yes | Yes (company film) |
| 9 | 12 | Actuator integration: why humanoid joints are the bottleneck | Robotics | Robb Harlan | Robot Report Jul 28 | supplier pages if cited | Maybe | No |
| 10 | 11 | July funding map: wheeled vs biped capital (Holiday / AIÂ² / LimX cluster) | Industry | Robb Harlan | multi (TRR + LimX + Holiday) | X funding charts as leads only | Mixed | No |

### Dry-run notes
- Articles written: **0** (canary skipped â€” plan-only preferred; news day is solid but dirty git tree + dry-run rules)
- Commit/push: **skipped by design**
- Production blockers for 12:30 PM job:
  1. **Uncommitted local changes** block `git pull --rebase` â€” must stash or land pipeline scripts + AGENTS/.gitignore before scheduled run
  2. X list timeline not cleanly machine-readable; web + semantic X remain required
  3. Several top funding stories already published on this site (Humanoid UK, Walden, Enigma, Atoms) â€” real job should prioritize Mitsubishi / BYD / Holiday / LimX / Sunday / Ultra / Optimus temper
  4. Image workflow: sources have usable stills for top 8; avoid stock; download from cited URLs only
  5. Target 8â€“10 only if deep research holds; do not pad to quota

### Notes for Future Agents
- Watch **early August BYD Di Space** for first public hardware â€” upgrade teaser piece when official specs/photos land
- **Mitsubishi Kyoto engine-line pilot** is the deployment follow-up worth tracking (not just the MoU)
- LimX confidential HK listing process â€” IPO filing would be a hard news trigger
- Ultra OP1 is **stationary dual-arm**, not biped â€” frame as industrial AI robot / warehouse automation if written, not "humanoid walkers"

## 2026-07-28 â€” Daily Scheduled Pipeline

### Preflight
- Stashed local pipeline/setup edits, `git pull --rebase origin main` (already up to date), restored stash
- Existing catalog: 23 posts (prior July batches + FCC); no new remote articles since dry run
- Date (Pacific): 2026-07-28

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** â€” keyword `list:` stream returns reply-noise and low-signal chatter (same pattern as dry run); not a clean chronological curated feed
- Owner lists page treated as login-walled; not relied on as primary
- Proceeded with public X + web verification (disclosed)

### Web Search Findings
1. **[CANDIDATEâ†’WRITTEN]** Mitsubishi Motors Ã— Highlanders mass production / 1,000 units/month by end-2027 â€” company MOU + Mainichi/Kyodo
2. **[CANDIDATEâ†’WRITTEN]** BYD confirms August humanoid at Di Space â€” CnEVPost (China Securities Journal)
3. **[CANDIDATEâ†’WRITTEN]** Holiday Robotics $105M Series A / FRIDAY â€” company blog + Robot Report + AI Insider
4. **[CANDIDATEâ†’WRITTEN]** LimX Dynamics $200M pre-IPO ~$2.2B â€” company + CNBC + Nikkei
5. **[CANDIDATEâ†’WRITTEN]** Tesla Optimus Fremont line + tempered ramp â€” Business Insider July explainer
6. **[CANDIDATEâ†’WRITTEN]** Sunday ACT-2 Memo 99.1% laundry â€” sunday.ai primary + BI + humanoid.guide
7. **[CANDIDATEâ†’WRITTEN]** AIÂ² Robotics ~$735M / ~$2.8B wheeled AlphaBot â€” Robot Report + company site
8. **[CANDIDATEâ†’WRITTEN]** Ultra OP1 Ã— Highline Brooklyn up to 30% orders â€” ultra.tech + Robotics 24/7
9. **[CANDIDATEâ†’WRITTEN]** Weave Isaac 1 $7,999 fall ship â€” Business Insider launch + CEO interview
10. **[SKIP: already covered]** UK Humanoid, Walden, Enigma, Atoms, Figure, FCC, Generative Bionics, etc.
11. **[SKIP: thin / angle-spin]** July funding map cluster piece; integrated actuators explainer (B-side tech, lower exclusivity)
12. **[SKIP: non-humanoid lead]** Hengbot Sirius AI dog

### Selected for Writing (ranked) â€” 9 articles
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
- Aim: 8â€“10 | Solid candidates found: 9 | Writing: **9**
- Hard max 10; quality floor held (no padding)

### Run summary
- **Articles published (9):** see table above
- **X list accessible?** Partial/noisy (N for clean feed; Y for tool probe)
- **Social:** `npm run tweets` (32 drafts); `npm run robb-x`
- **Build:** `astro build` completed 45 pages including all 9 new posts (PowerShell exit 1 from stderr NO_COLOR warning only)
- **Images:** source-page stills only under `public/images/heroes/`; Sunday + Holiday YouTube embeds
- **Failures:** none blocking; LimX CNBC hotlink failed (used Nikkei + product stills); AI2 TRR image CF-blocked (used company about image)

### Notes for Future Agents
- Early August: BYD Di Space hardware photos/specs â€” upgrade teaser post if major reveal
- Mitsubishi Kyoto engine-line pilot + early-2027 production start
- LimX HK confidential listing; Unitree Shanghai track
- Sunday / Weave / 1X fall home betas â€” intervention rates and real-home data
- Ultra OP1: frame as stationary dual-arm industrial, not biped humanoid

## 2026-07-29 â€” Daily Scheduled Pipeline

### Preflight
- `git pull --rebase origin main`: up to date; working tree clean
- Existing catalog: 32 posts (incl. 2026-07-28 nine-article batch)
- Date (Pacific): 2026-07-29

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** â€” list keyword stream is mostly replies/chatter, not a clean curated feed
- Owner lists login-walled; proceeded with public X semantic/keyword + web (disclosed)
- Notable leads (leads only): FCC Covered List chatter (already covered 2026-07-28); July funding chart (AIÂ²/Walden/LimX/Humanoid/Holiday/Zeroth â€” most already covered); Proception hands (covered)

### Web Search Findings
1. **[CANDIDATEâ†’WRITTEN]** Unitree CSRC STAR Market IPO registration (~Â¥4.2B / ~$619M) â€” Caixin, TNW, SCMP, Unitree G1 product page
2. **[CANDIDATEâ†’WRITTEN]** Ant Group leads Zeroth Â¥500M ($73.58M) + 12 humanoid-sector deals; RobbyAnt subsidiary â€” CNBC + robbyant.com
3. **[CANDIDATEâ†’WRITTEN]** Hexagon AEON performs production tasks at BMW Leipzig; end-2026 production goal â€” Hexagon + BMW Group press
4. **[CANDIDATEâ†’WRITTEN]** UBTECH UWORLD U1 mass-produced ultra-bionic consumer line; pricing from Â¥119,800; 13,361+ orders claim â€” PR Newswire
5. **[CANDIDATEâ†’WRITTEN]** NEURA Robotics Series C up to $1.4B (Tether, Nvidia, Amazon, Qualcomm, Bosch, etc.) â€” Trending Topics + NEURA product
6. **[CANDIDATEâ†’WRITTEN]** NEURA Ã— Qualcomm Dragonwing IQ10 â€œBrain + Nervous Systemâ€ collab â€” NEURA primary + TechCrunch context
7. **[CANDIDATEâ†’WRITTEN]** Generalist GEN-1 multi end-effector training (~500k hrs, ~9,000 gripper variants) â€” The Robot Report
8. **[CANDIDATEâ†’WRITTEN]** EngineAI confidential Hong Kong IPO filing; Shenzhen 12,000 mÂ² factory, T800 every 15 min claim â€” TNW / Bloomberg-sourced
9. **[SKIP: already covered]** FCC foreign advanced robots Covered List â€” fcc-foreign-humanoid-robots-covered-list.md
10. **[SKIP: already covered]** Holiday, LimX, AIÂ², UK Humanoid, Walden, Sunday, Weave, Mitsubishi, BYD, Ultra, Tesla Optimus temper, etc. (2026-07-28 batch)
11. **[SKIP: thin / paywalled primary]** AgiBot Hong Kong IPO process (Reuters/Securities Times Jul 24) â€” secondary only this session
12. **[SKIP: viral not primary]** Computex stage collapse clips â€” no strong official primary with usable stills for a full post

### Selected for Writing (ranked) â€” 8 articles
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
- Aim: 8â€“10 | Solid candidates found: 8 | Writing: **8**
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
- **Media verify:** PASS (`npm run verify-media:today` â€” 0 errors)
- **Vision gate:** Confirmed stills for all 8 slugs (robots/product/site/exec from cited sources; rejected combat still for EngineAI body)
- **Social:** `npm run tweets` (40 drafts); `npm run robb-x`
- **Build:** astro build OK â€” 53 pages including 8 new posts
- **Failures:** none blocking

### Notes for Future Agents
- Unitree still needs **pricing + issuance** after CSRC registration â€” hard news when priced
- Early August: BYD Di Space hardware (from 07-28 note)
- AgiBot HK IPO process thin this session â€” upgrade when filing docs public
- EngineAI confidential IPO â€” watch for formal prospectus / revenue disclosure
- NEURA: Gym rollout + production unit counts vs $1.4B raise


## 2026-07-29 â€” X List Lead Batch (on-demand)

### Preflight
- List: https://x.com/i/lists/1805786050763087967
- Access: posts readable via list: keyword search (UI login-walled)
- User selected top 3 list leads for write-up after digest

### X List Scan
1. **[CANDIDATEâ†’WRITTEN]** Nori Robotics US-built under-$2k hardware offer after FCC Covered List â€” @AntonioSitongLi / @NoriRobotics + norirobotics.com + YC
2. **[CANDIDATEâ†’WRITTEN]** DoorDash Air FAA Part 135 + multi-modal (Dot + drones + Dashers) â€” about.doordash.com + TechCrunch + PCMag
3. **[CANDIDATEâ†’WRITTEN]** Interlatent VR teleop blueprint (browser IK, QUIC, SafetyGate) â€” X + GitHub docs/teleop.md
4. **[SKIP: already covered]** FCC Covered List core story â€” fcc-foreign-humanoid-robots-covered-list.md (Nori is new angle)
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


## 2026-07-30 â€” Daily Scheduled Pipeline

### Preflight
- Stashed local pipeline/setup edits, `git pull --rebase origin main` (already up to date), restored stash
- Existing catalog: 43 posts (incl. 2026-07-28/29 batches + X-list batch)
- Date (Pacific): 2026-07-30

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** â€” list keyword stream is mostly replies/chatter, not a clean curated feed
- Owner lists login-walled; proceeded with public X semantic/keyword + web (disclosed)
- Notable leads (leads only): Humanoid UK funding chatter (already covered); BYD August teaser (covered 07-28); July funding charts (mostly covered)

### Web Search Findings
1. **[CANDIDATEâ†’WRITTEN]** Hyundai Ulsan partial strikes + Atlas labor framing â€” Forbes, Ars Technica, Korea Herald 25k plan
2. **[CANDIDATEâ†’WRITTEN]** Chery Aimoga 2,000 overseas deliveries (today) â€” CnEVPost
3. **[CANDIDATEâ†’WRITTEN]** AGIBOT 15,000th robot production milestone â€” company + Robot Report
4. **[CANDIDATEâ†’WRITTEN]** Sanctuary AI Physical AI industrial pivot / wire-plug benchmark â€” company + Techcouver + TRR
5. **[CANDIDATEâ†’WRITTEN]** XPeng Iron 1,000+/month capacity target â€” CnEVPost / WSJ-cited
6. **[CANDIDATEâ†’WRITTEN]** Figure 03 sequencing at BMW Spartanburg â€” BMW press + Figure blog
7. **[CANDIDATEâ†’WRITTEN]** General Intuition $320M / $2.3B gameplay agents â€” TechCrunch
8. **[SKIP: already covered]** FCC Covered List, UK Humanoid $152M, Holiday, LimX, AIÂ², Unitree IPO, NEURA, etc.
9. **[SKIP: thin / secondary-only]** Integrated actuators explainer; Agility U.S. policy pillars video (lower exclusivity)
10. **[SKIP: older without new hook]** Skild AI $1.4B Series C (Jan 2026)

### Selected for Writing (ranked) â€” 7 articles
| # | Slug | Author | Category |
|---|------|--------|----------|
| 1 | hyundai-ulsan-humanoid-robot-strike | Robb Harlan | Industry |
| 2 | chery-aimoga-2000-overseas-deliveries | Shar Hendrix | Deals |
| 3 | agibot-15000-production-milestone | Robb Harlan | Industry |
| 4 | sanctuary-ai-physical-ai-industrial-pivot | Shar Hendrix | AI |
| 5 | xpeng-iron-1000-month-mass-production | Robb Harlan | Humanoids |
| 6 | figure-03-bmw-spartanburg-sequencing | Shar Hendrix | Humanoids |
| 7 | general-intuition-320m-gameplay-agents | Shar Hendrix | AI |

### Volume note
- Aim: 8â€“10 | Solid distinct candidates with primary/secondary depth: **7** | Writing: **7**
- Hard max 10; quality floor held (no padding to 8â€“10)
- Thin-ish midweek after two heavy publish days; preferred short verified posts over rehashes

### Run summary
- **Articles published (7):**
  1. hyundai-ulsan-humanoid-robot-strike (Robb / Industry)
  2. chery-aimoga-2000-overseas-deliveries (Shar / Deals)
  3. agibot-15000-production-milestone (Robb / Industry)
  4. sanctuary-ai-physical-ai-industrial-pivot (Shar / AI)
  5. xpeng-iron-1000-month-mass-production (Robb / Humanoids)
  6. figure-03-bmw-spartanburg-sequencing (Shar / Humanoids)
  7. general-intuition-320m-gameplay-agents (Shar / AI)
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (
pm run verify-media:today — 0 errors)
- **Vision gate:** Confirmed stills for all 7 slugs (Atlas/Spot, Aimoga, AGIBOT G2, Sanctuary arms, XPeng Iron, Figure 03, GI CEO/Medal UI)
- **Social:** 
pm run tweets (50 drafts); 
pm run robb-x
- **Build:** astro build OK — 63 pages including 7 new posts
- **Failures:** none blocking; solid candidates maxed at 7 after heavy prior two days (no padding)

### Notes for Future Agents
- Early August: BYD Di Space hardware photos/specs
- Hyundai Ulsan: watch whether union text includes explicit robot veto language vs pay-only settlement
- XPeng Iron: first real monthly output numbers vs capacity claim
- Figure 03 Spartanburg: hours / intervention rates on sequencing
- Aimoga: split humanoid vs quadruped in the 2,000 overseas figure if disclosed later


## 2026-07-30 — On-demand pipeline (build-lane mix fix)

### Preflight
- Date (Pacific): 2026-07-30
- Prior same-day scheduled run published 7 articles (industry-heavy). This run enforces new editorial mix: ≥75% build / ≤25% business.

### X List Scan
- Primary list https://x.com/i/lists/1805786050763087967 — access PARTIAL/NOISY (disclosed)
- Strong public lead: @GoogleDeepMind Gemini Robotics 2 launch (whole-body VLA, ER 2, On-Device 2) + Apollo/Duo/Spot demos
- Owner lists login-walled

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** Gemini Robotics 2 / ER 2 / On-Device 2 — deepmind.google blog + product page + blog.google ER 2 + Neowin — lane: **build**
2. **[CANDIDATE→WRITTEN]** NVIDIA GR00T 1.7 + Isaac Teleop in Hugging Face LeRobot — HF blog + NVIDIA blog — lane: **build** (not yet covered; distinct from lerobot-humanoid-open-source-2500)
3. **[CANDIDATE→WRITTEN]** RoboCup 2026 first full 11-vs-11 humanoid soccer — robocup.org + IEEE Spectrum Video Friday — lane: **build** (fun/engineering)
4. **[SKIP: already covered]** Apptronik Robot Park / Apollo 2 facility, 1X hands, Sunday laundry, Tau cleaning, funding/IPO cluster
5. **[SKIP: business lane]** Additional funding/unit stories intentionally deprioritized under 25% cap

### Selected for Writing
| # | Slug | Author | Category | Lane |
|---|------|--------|----------|------|
| 1 | gemini-robotics-2-whole-body-intelligence | Robb Harlan | AI | build |
| 2 | nvidia-lerobot-groot-1-7-isaac-teleop | Shar Hendrix | AI | build |
| 3 | robocup-2026-first-11v11-humanoid-soccer | Shar Hendrix | Humanoids | build |

### Mix check
- Build/innovate: 3 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Aim 8–10 when sources support; after heavy morning Industry batch, prioritized quality build-lane only. Solid distinct new tech: 3. No padding with capital news.

### Notes for Future Agents
- Gemini VLA/On-Device still trusted-tester — watch partner deployment metrics
- RoboCup: seek Booster Robotics hardware specs if published
- Continue biasing Pass A (demos/open/product) over funding

## 2026-07-31 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-07-31
- `git pull --rebase origin main`: up to date after stash/pop of local pipeline edits
- Existing catalog: 53 posts (through 2026-07-30 build-lane batch)

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — list keyword stream is mostly replies/chatter, not a clean curated feed
- Owner lists login-walled; proceeded with public X semantic/keyword + web (disclosed)
- Notable leads (leads only): XYZ DEUX retail chatter; Sunday ACT-2 demos (already covered); Rotaku Zen Samurai thin; NVIDIA Jetson event promo

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** XYZ DEUX dual-arm semi-humanoid live retail demo at LoungeX Seongsu — Seoul Economic Daily + VentureSquare + XYZ site — lane: **build**
2. **[CANDIDATE→WRITTEN]** Shadow Robot expanding access (pricing, rentals, lead times) for Shadow Hand / DEX-EE — company post Jul 22 + product page + Robots Guide — lane: **build**
3. **[CANDIDATE→WRITTEN]** Naver ARCBRAIN Flow no-code robot service design — Seoul Economic Daily + Naver Labs Europe — lane: **build**
4. **[CANDIDATE→WRITTEN]** Flexion + Niantic Spatial + NVIDIA sim2real RGB navigation in Gaussian-splat twins — Flexion research Jul 20 + TRR teleop essay + Series A post — lane: **build**
5. **[CANDIDATE→WRITTEN]** NC AI × CMES Robotics physical AI MOU — Seoul Economic Daily + CMES site — lane: **build**
6. **[CANDIDATE→WRITTEN]** SKT Physical AI / robotics startup roundtable (8 startups incl. Holiday, CMES) + RDF ITU-T context — Seoul Economic Daily + SKT newsroom — lane: **business**
7. **[SKIP: already covered]** AGIBOT A3 Ultra WAIC, Gemini Robotics 2, NVIDIA LeRobot GR00T, Figure BMW, Hyundai strike, funding cluster (Unitree IPO, NEURA, UK Humanoid, etc.)
8. **[SKIP: thin / low exclusivity]** Rotaku Zen Samurai (specs thin); Wuji Hand 2 ICRA (older, secondary-heavy); integrated actuators explainer; Moreh IP license thin

### Selected for Writing (ranked) — 6 articles
| # | Slug | Author | Category | Lane |
|---|------|--------|----------|------|
| 1 | xyz-deux-loungex-retail | Shar Hendrix | Humanoids | build |
| 2 | shadow-robot-hands-access-expansion | Robb Harlan | Robotics | build |
| 3 | naver-arcbrain-flow-robot-os | Shar Hendrix | AI | build |
| 4 | flexion-niantic-nvidia-sim2real | Robb Harlan | AI | build |
| 5 | nc-ai-cmes-physical-ai-mou | Shar Hendrix | Robotics | build |
| 6 | skt-physical-ai-startups-roundtable | Robb Harlan | Industry | business |

### Mix check
- Build/innovate: 5 | Business/industry: 1 | Business share: 1/6 ≈ 16.7% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Did not pad to 8; midweek after heavy 07-28/29/30 batches; preferred verified short posts over rehashes

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors)
- **Vision gate:** Confirmed stills for all 6 slugs (DEUX retail, Shadow hands, Naver robots/ARC diagram, Flexion Unitree sim + outdoor humanoid, NC AI/CMES MOU + CMES pick arm, SKT group photo + RDF diagram)
- **Social:** tweets / robb-x after write
- **Failures:** none blocking

### Notes for Future Agents
- XYZ DEUX: watch intervention rates / multi-store expansion; NVIDIA talent program H2 2026
- Shadow: public price bands still quote-only — upgrade when list prices published
- Flexion Reflect + multi-site twin deployments
- SKT: named PoCs from the eight startups with metrics
- Afternoon slot: do not rehash these six; prefer non-Korea hardware demos if available


## 2026-07-31 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-07-31
- `git pull --rebase origin main`: already up to date
- Morning slot already published 6 posts today — this run avoids rehashing those and prior catalog

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — list/semantic streams mix old demos, funding chatter, and thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X keyword/semantic + web (disclosed)
- Notable leads (leads only): Handroid reconfigurable robot (Mingyu Ding); Qualcomm/NEURA Computex collapse viral; Gemini ER 2 (already covered as Gemini Robotics 2); UK Humanoid pre-order memes (already covered)

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** Handroid dual-embodiment 27-DoF hand/humanoid — handroid.org + arXiv:2607.16187 (17 Jul 2026) — lane: **build**
2. **[CANDIDATE→WRITTEN]** NEURA 4NE1 Gen 3.5 collapses mid-stage at Computex 2026 / Qualcomm Dragonwing IQ10 safe-collapse — TechSpot + Yahoo Tech — lane: **build** (demo/safety angle; distinct from neura-qualcomm partnership post)
3. **[CANDIDATE→WRITTEN]** ETH ORCA open-source 17-DoF hand under 2,000 CHF — srl.ethz.ch + arXiv:2504.04259 + Tech Briefs + YouTube — lane: **build**
4. **[CANDIDATE→WRITTEN]** NYU Ruka-v2 open-source hand with 2-DoF wrist + abduction — project page + arXiv:2603.26660 — lane: **build**
5. **[CANDIDATE→WRITTEN]** Encord + Zander Labs brain-wave-tagged physical AI data — TechCrunch 26 Jul + Encord press — lane: **build**
6. **[CANDIDATE→WRITTEN]** Menlo Research Asimov 1 open-hardware educational humanoid kit — menlo.ai product pages — lane: **build**
7. **[SKIP: already covered]** XYZ DEUX, Shadow hands, Naver ARCBRAIN, Flexion, NC AI×CMES, SKT roundtable (morning); Gemini Robotics 2; Figure BMW; funding/IPO cluster; FCC Covered List
8. **[SKIP: thin / older without fresh hook]** Peppy ROS alternative (license debates, early access); Satyress Threehalves (thin primary); Kinisi/Bear M&A (June, business lane); Disney Olaf (older)

### Selected for Writing (ranked) — 6 articles
| # | Slug | Author | Category | Lane |
|---|------|--------|----------|------|
| 1 | handroid-reconfigurable-hand-humanoid | Shar Hendrix | Research | build |
| 2 | neura-4ne1-computex-collapse | Robb Harlan | Humanoids | build |
| 3 | orca-hand-eth-open-source | Shar Hendrix | Robotics | build |
| 4 | ruka-v2-open-source-hand-wrist | Robb Harlan | Robotics | build |
| 5 | encord-brain-waves-physical-ai | Shar Hendrix | AI | build |
| 6 | menlo-asimov-open-source-humanoid | Robb Harlan | Humanoids | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Hit target without padding; all Pass A (hands, open hardware, research platforms, data tooling, demo failure mode)

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (
pm run verify-media:today — 0 errors)
- **Vision gate:** Confirmed stills for all 6 slugs (Handroid morphology+PCB; NEURA stage hardware; ORCA hand + YT still; Ruka CAD + payload; Encord teleop pilot; Asimov product shots)
- **Social:** tweets / robb-x after write
- **Failures:** none blocking

### Notes for Future Agents
- Handroid: watch open-source build reports and RL transfer across morphologies
- NEURA Computex: official Qualcomm PR text if issued; fault-tree docs for safe-collapse
- ORCA v2 commercial vs research open stack split
- Asimov: community kit completion rates; Asimov 2 bimanual when launched
- Do not rehash this afternoon set or morning’s Korea-heavy six


## 2026-08-01 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-01
- `git pull --rebase origin main`: already up to date
- Existing catalog: 65 posts through 2026-07-31 afternoon batch (hands/open hardware/research)

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — keyword/semantic streams mix old demos, spam, and thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): BYD Di Space teaser (already covered); Optimus production chatter (already tempered); Menlo Asimov (already covered)

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** Humanoid KinetIQ Ascend real-world RL — thehumanoid.ai + TRR + RoboticsTomorrow — lane: **build**
2. **[CANDIDATE→WRITTEN]** BrainCo brain-controlled robot AI platform at WAIC — PR Newswire + TRR + SCMP — lane: **build**
3. **[CANDIDATE→WRITTEN]** PAC-MAN CBF-RL humanoid dodgeball (Unitree G1, 95% HW) — arXiv 2607.28623 + project page — lane: **build**
4. **[CANDIDATE→WRITTEN]** Hello Robot Stretch 4 wheeled home manipulator — product page + IEEE Spectrum + TechCrunch — lane: **build**
5. **[CANDIDATE→WRITTEN]** Humanoid Touch Dream (HTD) CMU/Bosch — arXiv + project + TechXplore + YouTube — lane: **build**
6. **[CANDIDATE→WRITTEN]** JAL × GMO AIR Haneda humanoid ground-handling pilot (Unitree) — ITmedia + Key.aero + secondary — lane: **build**
7. **[SKIP: already covered]** UK Humanoid  Series A; Weave Isaac; Apptronik Apollo 2; FCC Covered List; Figure BMW; Agility SPAC; AI2 ; Walden; Gemini Robotics 2; hands cluster (Shadow, ORCA, Ruka, Handroid, Proception, 1X hands); menlo Asimov; BYD teaser
8. **[SKIP: thin / secondary-only / blocked primary]** AMD Kria X100 (TRR page fetch thin); SoftServe virtual-gyms opinion; JAL English press blocked (used ITmedia + Key.aero)
9. **[SKIP: business lane]** Additional funding/IPO rewrites intentionally deprioritized under 25% cap

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | humanoid-kinetiq-ascend-rl | Robb Harlan | AI | build |
| 2 | brainco-brain-controlled-robot-platform | Shar Hendrix | AI | build |
| 3 | pac-man-humanoid-dodgeball-cbf-rl | Robb Harlan | Research | build |
| 4 | hello-robot-stretch-4 | Shar Hendrix | Robotics | build |
| 5 | humanoid-touch-dream-cmu | Shar Hendrix | Research | build |
| 6 | jal-gmo-haneda-humanoid-airport | Robb Harlan | Humanoids | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Did not pad to 8; post-heavy late July catalog; preferred verified short posts over rehashes or capital news

### Notes for Future Agents
- KinetIQ Ascend: customer-site intervention rates / fleet learning claims
- BrainCo: third-party humanoid integrations beyond booth robots
- PAC-MAN: multi-agent / outdoor extensions
- Stretch 4: pilot metrics for mobility-impaired users; Stretch 5 price target
- Touch Dream: latent tactile transfer across hand morphologies
- JAL Haneda: which ground-handling tasks clear human-in-loop gates
- Afternoon slot: do not rehash these six


### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors)
- **Vision gate:** Confirmed stills for all 6 slugs (Humanoid Alpha + tote/feed charts; BrainCo EEG/arm/humanoid; PAC-MAN G1 diagram; Stretch 4 living-room shots; Touch Dream task collage + system diagram; JAL/GMO Haneda press art)
- **Social:** tweets (71 drafts); robb-x
- **Push:** 97f2978 → origin/main
- **Failures:** none blocking; solid candidates maxed at 6 (target 8) after heavy late-July catalog — no padding with capital news
- **Thin-ish vs target:** soft floor 3 met; hard max 8 not forced


## 2026-08-01 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-01
- `git pull --rebase origin main`: already up to date
- Morning slot already published 6 posts today — this run does not rehash those or the late-July catalog

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — list/semantic streams mix old demos, spam, and thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X keyword/semantic + web (disclosed)
- Notable leads (leads only): Brett Adcock F.03 ladder climb (2026-08-01); RoboParty UFO open unsupervised RL; RobotEra WAIC sorting (thin English primary); LimX COSA 0.5 long-horizon demo circulating

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** Figure F.03 autonomous ladder climb — Adcock X + Figure BotQ production blog (perception-conditioned stairs/S0) — lane: **build**
2. **[CANDIDATE→WRITTEN]** RoboParty UFO open unsupervised RL humanoid framework — project page + GitHub + YouTube — lane: **build**
3. **[CANDIDATE→WRITTEN]** LimX COSA 0.5 / V³-0 whole-body VLA technical report — limxdynamics.com/cosa05v3 + news + humanoid.guide + YouTube — lane: **build** (not funding rewrite; funding already covered in limx-dynamics-200m-pre-ipo)
4. **[CANDIDATE→WRITTEN]** Ψ₀ (Psi-Zero) open humanoid loco-manipulation VLA — psi-lab.ai + arXiv:2603.12263 + GitHub — lane: **build**
5. **[CANDIDATE→WRITTEN]** EPFL detachable crawling robotic hand — EPFL news + Nature Communications — lane: **build**
6. **[CANDIDATE→WRITTEN]** ROBOTIS AI Sapiens K1 open humanoid — ROBOTIS docs + Open Robotics Discourse + YouTube — lane: **build**
7. **[SKIP: already covered]** Morning 08-01 set (KinetIQ, BrainCo, PAC-MAN, Stretch 4, Touch Dream, JAL Haneda); hands cluster; Gemini Robotics 2; FCC; Tau cleaning; Agibot A3 Ultra; Figure BMW sequencing
8. **[SKIP: thin / JS-thin primary]** RobotEra L7 WAIC logistics (LinkedIn/social primary only); LimX Luna product page body empty in fetch
9. **[SKIP: business lane]** Extra funding/IPO rewrites under 25% cap

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | figure-f03-ladder-autonomous | Robb Harlan | Humanoids | build |
| 2 | roboparty-ufo-unsupervised-humanoid-rl | Shar Hendrix | AI | build |
| 3 | limx-cosa-05-vla-whole-body | Robb Harlan | AI | build |
| 4 | psi0-open-humanoid-loco-manipulation | Shar Hendrix | Research | build |
| 5 | epfl-detachable-crawling-robotic-hand | Shar Hendrix | Robotics | build |
| 6 | robotis-ai-sapiens-open-humanoid | Robb Harlan | Humanoids | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Hit target without padding; all Pass A (capability, open stack, research hardware)

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors on 12 posts including morning+afternoon)
- **Vision gate:** Figure fleet OG (unique re-encode); UFO YT project still; LimX COSA promo + Oli living-room; Psi0 task collage + teleop; EPFL hand stills; ROBOTIS K1 render + IL diagram
- **Social:** tweets / robb-x after write
- **Failures:** none blocking; **Push:** 8d018bf → origin/main

### Notes for Future Agents
- Figure ladder: watch for formal Helix/S0 ladder blog post with metrics
- UFO: commercial license path if RoboParty ships one; G1 deploy branch field reports
- COSA 0.5: multi-minute full-run success rates when published
- Psi0: open weight reproduction outside authors' lab
- AI Sapiens: BoM/STEP "coming soon" → upgrade when CAD lands
- Do not rehash morning 08-01 six or this afternoon set


## 2026-08-02 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-02
- `git pull --rebase origin main`: already up to date
- Prior catalog through 2026-08-01 afternoon (Figure ladder, UFO, LimX COSA, Psi0, EPFL hand, ROBOTIS Sapiens, etc.)

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — semantic/keyword streams mix old demos, spam, thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): Tactus/Elsie clinical lab humanoid circulating; Genesis Eno wheeled robot chatter; AGILINK balloon-hand clips; X Square open stack; weekend thin on brand-new factory announcements

### Web Search Findings
1. **[CANDIDATE→WRITTEN]** Tactus AI Elsie humanoid lab assistant at ADLM 2026 — tactus.ai + Newswise + IE + CLP + LabMedica — lane: **build**
2. **[CANDIDATE→WRITTEN]** Genesis AI Eno wheeled general-purpose robot + GENE — genesis.ai press + TRR + YouTube — lane: **build**
3. **[CANDIDATE→WRITTEN]** AGILINK OmniHand balloon dog + Ultra-M at ICRA 2026 — IEEE Spectrum + agilink-ai.com — lane: **build**
4. **[CANDIDATE→WRITTEN]** X Square Robot open embodied AI stack (data / WALL-WM / Wall-OSS / XRZero-G0) — Spectrum + x2robot + TRR + arXiv — lane: **build**
5. **[CANDIDATE→WRITTEN]** FA-RDP frequency-adaptive reactive diffusion policy — fa-rdp.github.io + arXiv:2607.28596 — lane: **build**
6. **[CANDIDATE→WRITTEN]** NCKU synthetic video → Unitree G1 RL pipeline — arXiv:2607.21648 — lane: **build**
7. **[SKIP: already covered]** Figure ladder; UFO; LimX COSA; Psi0; EPFL hand; ROBOTIS; PAC-MAN; KinetIQ; BrainCo; Stretch 4; Touch Dream; JAL Haneda; hands cluster; FCC; funding/IPO cluster
8. **[SKIP: thin / older without fresh hook]** LG CLOiD (CES Jan); Rotaku Zen Samurai (thin primary); Noble Machines Moby (March); Speech2Grasp (abstract-only, weak media)
9. **[SKIP: business lane]** Extra funding/IPO/ranking rewrites under 25% cap (weekend capital news deprioritized)

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | tactus-elsie-humanoid-lab-assistant | Robb Harlan | Humanoids | build |
| 2 | genesis-ai-eno-wheeled-robot | Shar Hendrix | Robotics | build |
| 3 | agilink-omnihand-balloon-icra | Shar Hendrix | Robotics | build |
| 4 | x-square-open-embodied-ai-stack | Robb Harlan | AI | build |
| 5 | fa-rdp-contact-rich-diffusion | Shar Hendrix | Research | build |
| 6 | synthetic-video-humanoid-tasks-ncku | Robb Harlan | Research | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 3 met; did not pad to 8 — Sunday/weekend scan thinner after heavy 07-28–08-01 batches; preferred verified short posts over rehashes or capital news

### Notes for Future Agents
- Tactus: pilot uptime / intervention metrics when first AMC sites report
- Genesis Eno: first industrial deployment case studies late 2026
- AGILINK: independent Ultra-M force-bandwidth measurements
- X Square: third-party Wall-OSS runs on non-company arms
- FA-RDP: code release + external replications
- Synthetic video pipeline: sim-to-real G1 reports
- Afternoon slot: do not rehash this morning six


### Run summary
- **Articles published (6):**
  1. tactus-elsie-humanoid-lab-assistant — Tactus AI Elsie lab assistant
  2. genesis-ai-eno-wheeled-robot — Genesis AI Eno
  3. agilink-omnihand-balloon-icra — AGILINK OmniHand balloon / Ultra-M
  4. x-square-open-embodied-ai-stack — X Square open WALL stack
  5. fa-rdp-contact-rich-diffusion — FA-RDP contact-rich diffusion
  6. synthetic-video-humanoid-tasks-ncku — NCKU synthetic video humanoid training
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings)
- **Vision gate:** Confirmed stills for all 6 slugs (Elsie open-house + guests; Eno folded lab + GENE hands; AGILINK balloon dog + Ultra-M hand; X Square laundry + product render; FA-RDP teaser + architecture; synthetic pipeline + G1 mimic collage)
- **Social:** tweets (83 drafts); robb-x
- **Push:** 8ed2861 → origin/main
- **Failures:** none blocking; solid candidates maxed at 6 (target 8) on Sunday after heavy late-July/early-Aug catalog — no padding with capital news
- **Thin-ish vs target:** soft floor 3 met; hard max 8 not forced


## 2026-08-03 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-03
- `git pull --rebase origin main`: already up to date
- No morning 2026-08-03 posts in catalog; last published batch 2026-08-02 morning (Tactus, Genesis Eno, AGILINK, X Square, FA-RDP, NCKU synthetic)

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — semantic/keyword streams mix old demos, spam, thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): BYD August humanoid debut chatter (already covered); Reimagine Robotics stealth day-of; RoboNaldo/OpenDriveLab sports humanoids circulating; Foundation Future Phantom thin/AI-mixed clips

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Reimagine Robotics stealth — reimaginerobotics.ai/news + TRR + AI Insider — lane: **build**
2. **[CANDIDATE/WRITTEN]** RoboNaldo humanoid soccer shooting — OpenDriveLab + arXiv:2606.11092 + YouTube — lane: **build**
3. **[CANDIDATE/WRITTEN]** CLIFT closed-loop fine-tune of Gemini Robotics On-Device — arXiv:2607.29172 + project site — lane: **build**
4. **[CANDIDATE/WRITTEN]** EgoHumanoid human-to-humanoid loco-manipulation — OpenDriveLab + arXiv:2602.10106 + GitHub — lane: **build**
5. **[CANDIDATE/WRITTEN]** IHMC Alex outdoor untethered ONR demo — ihmc.us + Spectrum Video Friday — lane: **build**
6. **[CANDIDATE/WRITTEN]** Tutor Intelligence DF1 100-robot data factory — tutor blog + MassRobotics/TRR — lane: **build**
7. **[SKIP: already covered]** Gemini Robotics 2 whole-body; BYD Di Space; Figure ladder/BMW; Agility SPAC; Unitree IPO; PAC-MAN; FA-RDP; Psi0; LimX COSA; hands cluster; Aug 2 morning six
8. **[SKIP: thin / older without fresh hook]** SMASH ping-pong (older preprint, weaker English news cycle today); Nomagic VLA (July Fortune, warehouse not humanoid-primary); Foundation Future Phantom (mixed AI-generated salute footage risk)
9. **[SKIP: business lane]** Extra funding/IPO rewrites under 25% cap

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | reimagine-robotics-stealth-learn-on-job | Robb Harlan | Robotics | build |
| 2 | robonaldo-humanoid-soccer-shooting | Shar Hendrix | Research | build |
| 3 | clift-gemini-robotics-humanoid-finetune | Robb Harlan | AI | build |
| 4 | egohumanoid-loco-manipulation | Shar Hendrix | Research | build |
| 5 | ihmc-alex-outdoor-untethered | Robb Harlan | Humanoids | build |
| 6 | tutor-intelligence-df1-data-factory | Shar Hendrix | Robotics | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Hit target without padding; all Pass A (capability, open research, product/deploy, outdoor mobility)

### Notes for Future Agents
- Reimagine: named customer metrics / Series seed-A amounts when published
- RoboNaldo: multi-agent pass-and-shoot extensions; third-party G1 replications
- CLIFT: partner API adoption beyond GROD; code release
- EgoHumanoid: richer hand retargeting beyond binary open/close
- IHMC Alex: door-open + indoor assess milestone for ONR
- Tutor Sonny: first multi-shift industrial pilots end of year claim
- Morning slot next day: do not rehash this afternoon six


### Run summary
- **Articles published (6):**
  1. reimagine-robotics-stealth-learn-on-job — Reimagine Robotics stealth / learn-on-job
  2. robonaldo-humanoid-soccer-shooting — RoboNaldo Unitree G1 soccer
  3. clift-gemini-robotics-humanoid-finetune — CLIFT + Gemini Robotics On-Device
  4. egohumanoid-loco-manipulation — EgoHumanoid human-to-humanoid transfer
  5. ihmc-alex-outdoor-untethered — IHMC Alex outdoor ONR demo
  6. tutor-intelligence-df1-data-factory — Tutor DF1 100-robot data factory
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings)
- **Vision gate:** Confirmed stills for all 6 slugs (Reimagine R2 dual-arm mobile + factory hard-drive cell; RoboNaldo title montage + pipeline/dispersion; CLIFT teaser/tasks/results; EgoHumanoid trash-disposal ego view + human demos; IHMC Alex outdoor gravel walk + open house; Tutor DF1 Sonny fleet hall)
- **Social:** tweets (89 drafts); robb-x
- **Push:** 8d018bf → origin/main
- **Failures:** none blocking; solid candidates maxed at 6 (target 6)


## 2026-08-04 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-04
- `git pull --rebase origin main`: already up to date
- Prior catalog through 2026-08-03 afternoon (Reimagine, RoboNaldo, CLIFT, EgoHumanoid, IHMC Alex, Tutor DF1); no morning 08-04 posts yet

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — semantic/keyword streams mix old demos, spam, thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): LingBot-VLA 2.0 circulating; Foundation hand baseball catch; Threehalves/Satyress centaur; Figure ladder rehash (already covered); BYD August (already covered)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Robbyant LingBot-VLA 2.0 open-source multi-morphology VLA — GitHub + IT Brief Asia + arXiv:2607.06403 — lane: **build**
2. **[CANDIDATE/WRITTEN]** Horizon Robotics HoloMotion whole-body controller — GitHub + project page + IE + arXiv:2605.15336 — lane: **build**
3. **[CANDIDATE/WRITTEN]** SIMPLE humanoid loco-manipulation sim benchmark — psi-lab.ai + arXiv:2606.08278 + GitHub — lane: **build**
4. **[CANDIDATE/WRITTEN]** HumanoidMimicGen NVIDIA synthetic loco-manipulation data — project page + arXiv:2605.27724 — lane: **build**
5. **[CANDIDATE/WRITTEN]** HALOMI active-perception humanoid from human demos — arXiv:2606.18772 + project site — lane: **build**
6. **[CANDIDATE/WRITTEN]** Threehalves/Satyress centaur hazardous-work robot — IE + satyress.com — lane: **build**
7. **[CANDIDATE/WRITTEN]** Foundation tendon-driven hand baseball catch — IE + YouTube + TechEBlog — lane: **build**
8. **[SKIP: already covered]** Figure F.03 ladder; Agibot 15k; Tau cleaning; FCC ban; BYD Di Space; Reimagine; EgoHumanoid; Psi0; Gemini Robotics 2; Aug 2–3 batches
9. **[SKIP: thin / CGI risk]** Foundation Phantom military formation videos (CGI promo risk); DroidUp Moya (older viral, weaker fresh primary English package this slot)
10. **[SKIP: business lane]** Unitree IPO rewrites; Korean parts stock reaction to FCC; pure unit-count rehashes under 25% cap

### Selected for Writing (ranked) — 7 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | lingbot-vla-2-robbyant | Shar Hendrix | AI | build |
| 2 | holomotion-horizon-whole-body | Robb Harlan | AI | build |
| 3 | simple-humanoid-sim-benchmark | Shar Hendrix | Research | build |
| 4 | humanoidmimicgen-nvidia-data | Robb Harlan | Research | build |
| 5 | halomi-active-perception-humanoid | Shar Hendrix | Research | build |
| 6 | threehalves-centaur-rescue-robot | Robb Harlan | Robotics | build |
| 7 | foundation-tendon-hand-baseball | Shar Hendrix | Robotics | build |

### Mix check
- Build/innovate: 7 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **7** | Writing: **7**
- Soft floor 3 met; did not pad to 8 — day was research/open-stack heavy after early-August industrial catalog; preferred verified capability posts over capital news

### Notes for Future Agents
- LingBot: independent warehouse pilot metrics when published
- HoloMotion v2 command-following when released
- SIMPLE: third-party zero-shot replications
- HumanoidMimicGen: code release / external replications
- HALOMI: open code if authors ship it
- Threehalves: field-hour / buyer announcements
- Foundation hand: non-scripted industrial part demos
- Afternoon slot: do not rehash this morning seven

### Run summary
- **Articles published (7):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 7 posts)
- **Vision gate:** Confirmed stills for all 7 slugs (LingBot framework + data collage; HoloMotion G1 motion grid + architecture; SIMPLE pipeline + MP + s2r; HumanoidMimicGen box/drill sim; HALOMI task grid + bag ablations; Threehalves outdoor centaur; Foundation tendon hand close-up + V2 still + YT embed)
- **Build:** PASS (astro build exit 0)
- **Social:** tweets (96 drafts); robb-x
- **Vision gate:** confirmed stills for all 7 slugs before commit
- **Social:** tweets / robb-x after write
- **Push:** 8d018bf → origin/main
- **Failures:** none at write time; solid candidates 7 of target 8


- **Push:** d45105d → origin/main
- **Failures:** none blocking; solid candidates 7 of target 8 (no padding)


## 2026-08-04 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-04
- git pull --rebase origin main: already up to date after stash/pop of research-log + stray heroes
- Morning 2026-08-04 already published 7: LingBot-VLA 2, HoloMotion, SIMPLE, HumanoidMimicGen, HALOMI, Threehalves, Foundation hand — **do not rehash**

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — semantic/keyword streams mix old demos, spam, thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): MindOn multi-robot logistics chatter (primary URL failed); HumanCLAW / HERO papers circulating late July; parkour Instinct clips; Unitree sidewalk dance rehashes (skip)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** HumanCLAW VLM body-action benchmark — human-claw.github.io + arXiv:2607.27180 + GitHub — lane: **build**
2. **[CANDIDATE/WRITTEN]** HERO zero-demo self-improving agent — hero-agent.github.io + arXiv:2607.26809 — lane: **build**
3. **[CANDIDATE/WRITTEN]** HuMI robot-free whole-body G1 — arXiv:2602.06643 + project page — lane: **build**
4. **[CANDIDATE/WRITTEN]** BifrostUMI BAAI robot-free G1 skills — arXiv:2605.03452 + baai-aether project — lane: **build**
5. **[CANDIDATE/WRITTEN]** HiWET world-frame EE tracking — arXiv:2602.06341 + HTML — lane: **build**
6. **[CANDIDATE/WRITTEN]** Deep Whole-Body Parkour Project Instinct — arXiv:2601.07701 + project + YouTube — lane: **build**
7. **[SKIP: already covered morning]** LingBot, HoloMotion, SIMPLE, HumanoidMimicGen, HALOMI, Threehalves, Foundation hand
8. **[SKIP: already covered prior days]** EgoHumanoid, Psi0, Reimagine, RoboNaldo, CLIFT, FA-RDP, Gene.01, Figure ladder, Unitree IPO
9. **[SKIP: thin / primary failed]** MindOn Mind-0 logistics blog URL unreachable this session
10. **[SKIP: business lane]** Figure BotQ unit-rate chatter; capital rewrites under 25% cap

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | humanclaw-vlm-body-action | Robb Harlan | AI | build |
| 2 | hero-zero-demo-self-improving | Shar Hendrix | AI | build |
| 3 | humi-robot-free-whole-body | Robb Harlan | Research | build |
| 4 | bifrostumi-baai-humanoid-data | Shar Hendrix | Research | build |
| 5 | hiwet-world-frame-tracking | Robb Harlan | Research | build |
| 6 | deep-whole-body-parkour | Shar Hendrix | Humanoids | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target without padding or capital news

### Notes for Future Agents
- HumanCLAW: leaderboard updates when more VLMs run
- HERO: code release when “coming soon” ships
- HuMI vs BifrostUMI vs HALOMI: three robot-free stacks — only cover if new metrics/deployments
- HiWET: contact-rich grasping follow-ups
- Deep parkour: field hours / outdoor obstacle courses
- Next morning: do not rehash this afternoon six

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 13 today posts incl. morning)
- **Vision gate:** Confirmed stills (HumanCLAW pipeline; HERO teaser+tasks; HuMI system diagram; Bifrost pipeline+hardware+exp; HiWET G1 collage+real; parkour YT montage)
- **Social:** tweets (102 drafts); robb-x
- **Push:** 3e42513 → origin/main
- **Failures:** none blocking



## 2026-08-05 - Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-05
- git pull --rebase origin main: already up to date
- Prior catalog through 2026-08-04 afternoon (HumanCLAW, HERO, HuMI, BifrostUMI, HiWET, Deep parkour + morning seven) — **do not rehash**

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — semantic/keyword streams mix old demos, spam, thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): AMD Kria/physical AI chatter; crop-picking humanoid clips (thin primary); Anthrobotics muscle clip (thin); UBTECH Y1 factory swarm rehashes; Figure ladder rehash (covered)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** AMD Ryzen AI Embedded X100 + Kria AI Robotics Dev Platform - AMD IR + ServeTheHome + Robot Report - lane: **build**
2. **[CANDIDATE/WRITTEN]** Ego2Robot 18,561h ego-to-robot data - arXiv:2608.02580 + project - lane: **build**
3. **[CANDIDATE/WRITTEN]** Light-Loco-Parkour single depth policy - arXiv:2608.02653 + project + YT - lane: **build**
4. **[CANDIDATE/WRITTEN]** CMP context-aware motion priors - arXiv:2608.03234 - lane: **build**
5. **[CANDIDATE/WRITTEN]** PFM-HR pose flow matching - arXiv:2608.03227 - lane: **build**
6. **[CANDIDATE/WRITTEN]** RoboReact whole-body from one RGB-D - arXiv:2608.03387 - lane: **build**
7. **[CANDIDATE/WRITTEN]** Fail-passive gap industrial humanoid safety - arXiv:2608.02809 - lane: **build**
8. **[CANDIDATE/WRITTEN]** DroidUp Moya biomimetic - Futurism + humanoid.press + YT - lane: **build**
9. **[SKIP: already covered]** UK Humanoid unicorn (uk-humanoid-152m); BrainCo BCI (brainco-*); Figure ladder; Tau cleaning; FCC ban; BYD; Agibot 15k; Aug 4 research batch
10. **[SKIP: thin / primary weak]** Chinese ag humanoid field clip (no firm primary); Anthrobotics muscle (thin Cybernews clip); front-desk silicone face (no solid primary English package)
11. **[SKIP: business lane]** Unitree IPO rewrites; pure capital under 25% cap

### Selected for Writing (ranked) - 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | amd-kria-ai-robotics | Robb Harlan | Robotics | build |
| 2 | ego2robot-data-synthesis | Shar Hendrix | Research | build |
| 3 | light-loco-parkour | Robb Harlan | Humanoids | build |
| 4 | cmp-context-aware-motion-priors | Shar Hendrix | Research | build |
| 5 | pfm-hr-pose-flow-matching | Robb Harlan | Research | build |
| 6 | roboreact-whole-body-manipulation | Shar Hendrix | Research | build |
| 7 | humanoid-fail-passive-safety | Robb Harlan | Research | build |
| 8 | droidup-moya-biomimetic | Shar Hendrix | Humanoids | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **8** | Writing: **8**
- Soft floor 3 met; hit target without padding or capital news

### Notes for Future Agents
- AMD Kria: ODM SOM ship dates and first public humanoid integration demos
- Ego2Robot: code/dataset release
- Light-Loco-Parkour: outdoor field hours beyond stairs
- CMP/PFM-HR: public code drops
- RoboReact: third-party replications
- Fail-passive: standards-body follow-ups / more OEMs
- Moya: late-2026 commercial delivery verification
- Afternoon slot: do not rehash this morning eight

### Run summary
- **Articles published (8):**
  1. amd-kria-ai-robotics — AMD Kria / Ryzen AI Embedded X100
  2. ego2robot-data-synthesis — Ego2Robot 18,561h
  3. light-loco-parkour — Light-Loco-Parkour
  4. cmp-context-aware-motion-priors — CMP
  5. pfm-hr-pose-flow-matching — PFM-HR
  6. roboreact-whole-body-manipulation — RoboReact
  7. humanoid-fail-passive-safety — Fail-passive gap
  8. droidup-moya-biomimetic — DroidUp Moya
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (
pm run verify-media:today — 0 errors, 0 warnings on 8 posts)
- **Vision gate:** Confirmed stills for all 8 slugs (AMD Kria dev kit + SOM; Ego2Robot pipeline + morphologies + rollouts; Lightbot parkour montage + pipeline; CMP context figures; PFM-HR diagram; RoboReact teaser + system; G1 safety cell + pickup/transport; Moya face + YT still)
- **Social:** tweets (110 drafts); robb-x
- **Push:** 8d018bf → origin/main
- **Failures:** none blocking; solid candidates 8 of target 8

## 2026-08-05 - Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-05
- git pull --rebase origin main: already up to date
- Morning 2026-08-05 already published 8: AMD Kria, Ego2Robot, Light-Loco-Parkour, CMP, PFM-HR, RoboReact, Fail-passive, DroidUp Moya - **do not rehash**

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** - semantic/keyword streams mix old demos, spam, thin clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): LingBot rehash (covered); front-desk silicone face (thin primary); Foundation Phantom CGI chatter (not primary); Gene.01 rehash (covered)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Shooting for Contact DSMS G1 crawl/jump - arXiv:2608.03116 + project - lane: **build**
2. **[CANDIDATE/WRITTEN]** Track4Action 3D tracker VLA - arXiv:2608.03727 + project - lane: **build**
3. **[CANDIDATE/WRITTEN]** DigitCode hand motion tokens - arXiv:2608.03127 + project - lane: **build**
4. **[CANDIDATE/WRITTEN]** SARF VLA attention hijacking defense - arXiv:2608.03231 - lane: **build**
5. **[CANDIDATE/WRITTEN]** Semantic haptic teleoperation - arXiv:2608.02780 - lane: **build**
6. **[CANDIDATE/WRITTEN]** UVT unified visuomotor targets - arXiv:2608.03563 + project - lane: **build**
7. **[SKIP: already covered morning]** RoboReact, CMP, PFM-HR, Light-Loco-Parkour, Fail-passive, Ego2Robot, AMD Kria, Moya
8. **[SKIP: already covered prior]** BYD Di Space, Figure ladder, HumanCLAW, HERO, HuMI, BifrostUMI, HiWET, parkour, Handroid, 1X hands
9. **[SKIP: thin / no figures]** Jetson 8GB ACT paper (arXiv:2608.03938) - no HTML figures this session
10. **[SKIP: business lane]** Unitree IPO / capital rewrites under 25% cap
11. **[SKIP: old]** SEIMEI Kyoto (April 2026 debut)

### Selected for Writing (ranked) - 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | shooting-for-contact-g1 | Robb Harlan | Humanoids | build |
| 2 | track4action-vla-3d-tracker | Shar Hendrix | AI | build |
| 3 | digitcode-hand-motion-tokens | Robb Harlan | Robotics | build |
| 4 | sarf-vla-attention-hijacking | Shar Hendrix | AI | build |
| 5 | semantic-haptic-teleoperation | Robb Harlan | Robotics | build |
| 6 | uvt-unified-visuomotor-targets | Shar Hendrix | Research | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (<=25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target without padding or capital news

### Notes for Future Agents
- DSMS: third-party G1 replications; outdoor field hours
- Track4Action: code release / more bimanual tasks
- DigitCode: HandTok public release after review
- SARF: cross-stack AGSD tests on pi0 / OpenVLA
- Semantic haptics: humanoid dual-arm data collection kits
- UVT: which VLA bases they used in full PDF tables
- Next morning: do not rehash this afternoon six

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` - 0 errors, 0 warnings on 14 today posts incl. morning)
- **Vision gate:** Confirmed stills (G1 crawl/jump; Track4Action teaser+real platform; DigitCode pianoroll+RD; SARF banana attack; semantic haptic teaser; UVT pipeline+lift pot)
- **Social:** pending tweets / robb-x
- **Push:** pending
- **Failures:** none blocking; solid candidates 6 of target 6


## 2026-08-06 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-06
- git pull --rebase origin main: already up to date
- Prior catalog through 2026-08-05 afternoon (Shooting for Contact, Track4Action, DigitCode, SARF, Semantic haptic, UVT + morning eight) — **do not rehash**

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — semantic/keyword streams mix old demos, spam, thin viral clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): Vulcan/Sourccey open home robot ($1999 chatter); Dobot LUMO companion humanoid; Noetix E1 terrain demo (thin English primary package); Steel Bot FCC-era open US humanoid (manifesto/X — thin primary product page); Optimus bartender rehashes (skip)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Vulcan Robotics Sourccey open-source home robot — vulcanrobotics.ai + specs + GitHub — lane: **build**
2. **[CANDIDATE/WRITTEN]** DOBOT LUMO all-terrain companion humanoid — eu.36kr.com Aug 6 launch — lane: **build**
3. **[CANDIDATE/WRITTEN]** StableMimic G1 tracking+recovery — arXiv:2608.02385 — lane: **build**
4. **[CANDIDATE/WRITTEN]** 3D-printed conformal EIT tactile skin — arXiv:2608.02080 — lane: **build**
5. **[CANDIDATE/WRITTEN]** BridgeVLA++ memory VLA — arXiv:2608.05042 + project — lane: **build**
6. **[CANDIDATE/WRITTEN]** SiMDex ego video mining for dexterous VLA — arXiv:2608.04196 + project + YT — lane: **build**
7. **[SKIP: already covered]** AMD Kria, Ego2Robot, Light-Loco-Parkour, CMP, PFM-HR, RoboReact, Fail-passive, Moya, DSMS, Track4Action, DigitCode, SARF, UVT, BYD Di Space teaser, FCC ban, Unitree IPO process
8. **[SKIP: thin / primary weak]** Noetix E1 latest jump demo (X lead; official EN product page thin this session); Steel Bot manifesto (X/500 Global — no full product primary depth); Tesla Optimus bartender viral (no fresh primary)
9. **[SKIP: business lane]** Unitree book-building/pricing day chatter under 25% cap — day already full of build stories

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | vulcan-sourccey-open-source-home-robot | Shar Hendrix | Deals | build |
| 2 | dobot-lumo-all-terrain-humanoid | Robb Harlan | Humanoids | build |
| 3 | stablemimic-humanoid-recovery | Robb Harlan | Research | build |
| 4 | eit-conformal-tactile-skin | Shar Hendrix | Research | build |
| 5 | bridgevla-plus-memory-vla | Shar Hendrix | AI | build |
| 6 | simdex-egocentric-data-mining | Robb Harlan | AI | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (<=25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 3 met; below target 8 without padding — day rich in research + two product launches; no capital filler
- Thin relative to target only in the sense of not inventing a 7th/8th story; quality floor held

### Notes for Future Agents
- Sourccey: confirm store price at launch; September ship verification; LeRobot community repos
- LUMO: official English product page / pricing / shipping when DOBOT posts more than 36Kr package
- StableMimic: outdoor G1 replications; code release
- EIT skin: whole-body torso integration; durability tests
- BridgeVLA++: code drop; third-party arm replications
- SiMDex: open retrieval indices; more hand morphologies
- Afternoon: do not rehash this morning six; check Noetix E1 if primary English package improves; Unitree IPO results only if build mix allows one industry slot


### Run summary
- **Articles published (6):**
  1. vulcan-sourccey-open-source-home-robot — Vulcan Sourccey open home robot
  2. dobot-lumo-all-terrain-humanoid — DOBOT LUMO companion humanoid
  3. stablemimic-humanoid-recovery — StableMimic G1 recovery
  4. eit-conformal-tactile-skin — 3D-printed EIT tactile skin
  5. bridgevla-plus-memory-vla — BridgeVLA++ memory VLA
  6. simdex-egocentric-data-mining — SiMDex ego data mining
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 6 posts)
- **Vision gate:** Confirmed stills for all 6 slugs (Sourccey product photos; LUMO outdoor biped; StableMimic diagram + G1 recovery grids; EIT planar/curved sensors; BridgeVLA++ teaser/architecture/setup; SiMDex pipeline + tasks + tools)
- **Social:** tweets (122 drafts); robb-x
- **Push:** pending
- **Failures:** none blocking; solid candidates 6 of target 8 (quality floor — no padding)


## 2026-08-07 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-07
- git pull --rebase origin main: already up to date
- Prior catalog through 2026-08-06 (Vulcan, Dobot LUMO, StableMimic, EIT, BridgeVLA++, SiMDex, DreamWAM, SAFECAST, Mind-VLA, Explicit Language Memory, UniX Panther, ZEALS D1, etc.) — **do not rehash**
- No 2026-08-07 posts before this run

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — keyword streams flooded with unrelated/spam Atlas finance, crypto vaults, rehashes (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): Unitree IPO pricing chatter (business; prior CSRC piece exists); RoboParty UFO rehash; Nori L3 price/product (new vs FCC post); ROBOTIS AI Sapiens re-share (already covered)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** ω-0 concurrent humanoid loco-manipulation — arXiv:2608.06375 + HTML + project — lane: **build**
2. **[CANDIDATE/WRITTEN]** KILVO humanoid multi-sensor odometry — arXiv:2608.05647 + HTML + TMECH DOI — lane: **build**
3. **[CANDIDATE/WRITTEN]** JoyAI-RA 0.5 dual action alignment — arXiv:2608.05674 + project page — lane: **build**
4. **[CANDIDATE/WRITTEN]** DyPES-VLA cross-embodiment — arXiv:2608.06374 + HTML — lane: **build**
5. **[CANDIDATE/WRITTEN]** Physical prompt injection on VLM robots — arXiv:2608.05715 + HTML — lane: **build**
6. **[CANDIDATE/WRITTEN]** In-Context VLA (consume grounded language) — arXiv:2608.05738 + HTML — lane: **build**
7. **[CANDIDATE/WRITTEN]** TRACE proprioceptive odometry under unreliable contact — arXiv:2608.05975 + HTML — lane: **build**
8. **[CANDIDATE/WRITTEN]** Nori L3 $1,688 product page — norirobotics.com + RuntimeWire — lane: **build** (product/price Deals)
9. **[SKIP: already covered / business rehash]** Unitree STAR IPO pricing day (Bloomberg/Reuters) — prior unitree-star-market-ipo-csrc; counts as business under 25% cap
10. **[SKIP: already covered]** BridgeVLA++, DreamWAM, SAFECAST, Mind-VLA, Explicit Language Memory, StableMimic, fail-passive, Nori FCC-era post angle, Robotis AI Sapiens
11. **[SKIP: thin / older]** Robotera Q5 CES-era rehash; UBTech U1 September deliveries (prior UWorld/U1 coverage); KEPLER Highlanders (prior Mitsubishi/Highlanders production piece)

### Selected for Writing (ranked) — 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | omega-0-humanoid-loco-manipulation | Robb Harlan | Humanoids | build |
| 2 | kilvo-humanoid-odometry | Robb Harlan | Robotics | build |
| 3 | joyai-ra-05-dual-action-alignment | Shar Hendrix | AI | build |
| 4 | dypes-vla-cross-embodiment | Robb Harlan | AI | build |
| 5 | physical-prompt-injection-vlm-robots | Shar Hendrix | Research | build |
| 6 | in-context-vla-language | Robb Harlan | AI | build |
| 7 | trace-proprioceptive-odometry | Shar Hendrix | Robotics | build |
| 8 | nori-l3-1688-home-robot | Shar Hendrix | Deals | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (<=25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **8** | Writing: **8**
- Soft floor 3 met; hit target from Aug 6–7 arXiv batch + Nori L3 product page

### Notes for Future Agents
- ω-0: third-party SONIC hardware hours; outdoor chores
- KILVO: open-source GitHub replications on G1/Fourier-class
- JoyAI-RA: public weights / non-AgiBot transfer
- DyPES-VLA: code release; fifth morphology expert cost
- Physical prompt injection: warehouse-label dual-use defenses
- In-Context VLA: tool-call latency on real closed loops
- TRACE: humanoid (not only quadruped) outdoor logs
- Nori L3: fall 2026 ship verification; 1.5 kg arm durability
- Afternoon: do not rehash this morning eight; Unitree subscription open Aug 10 only if build mix allows one industry slot

### Run summary
- **Articles published (8):**
  1. omega-0-humanoid-loco-manipulation
  2. kilvo-humanoid-odometry
  3. joyai-ra-05-dual-action-alignment
  4. dypes-vla-cross-embodiment
  5. physical-prompt-injection-vlm-robots
  6. in-context-vla-language
  7. trace-proprioceptive-odometry
  8. nori-l3-1688-home-robot
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (
pm run verify-media:today — 0 errors, 0 warnings on 8 posts)
- **Vision gate:** Confirmed stills (ω-0 overview/architecture/dataset; KILVO cover/system/config; JoyAI teaser+data+arch; DyPES diagram+details; physical prompt teaser+Kinova setup+taxonomy; In-Context CoT vs ICL+method+results; TRACE air-mat traj+arch; Nori workshop+arm)
- **Social:** tweets (136 drafts); robb-x
- **Build:** PASS (149 pages)
- **Push:** SUCCESS (47cd470 → origin/main)
- **Failures:** none blocking; solid candidates 8 of target 8


## 2026-08-07 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-07
- git pull --rebase origin main: already up to date
- Morning already published 8 posts today (omega-0, KILVO, JoyAI-RA, DyPES-VLA, physical prompt injection, In-Context VLA, TRACE, Nori L3) — **do not rehash**

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — semantic/keyword streams mix rehashes, spam, thin clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): Noetix E1 terrain (thin English primary package); 1X hands rehash (covered); Light-Loco parkour rehash (covered); GeniWorld/SkillMemo/W2-VLA research wave on arXiv

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** GeniWorld visual-action world model — arXiv:2608.06332 + project — lane: **build**
2. **[CANDIDATE/WRITTEN]** W²-VLA World-to-Wrist — arXiv:2608.05369 + project — lane: **build**
3. **[CANDIDATE/WRITTEN]** SkillMemo skill memory — arXiv:2608.05970 + project — lane: **build**
4. **[CANDIDATE/WRITTEN]** XEWorld cross-embodiment world-model testbed — arXiv:2608.05799 — lane: **build**
5. **[CANDIDATE/WRITTEN]** VLAff actionable affordances / EgoAffordance — arXiv:2608.05215 + project — lane: **build**
6. **[CANDIDATE/WRITTEN]** Near-sensor visuotactile Poisson FPGA — arXiv:2608.05725 — lane: **build**
7. **[SKIP: already covered morning]** omega-0, KILVO, JoyAI-RA, DyPES-VLA, physical prompt injection, In-Context VLA, TRACE, Nori L3
8. **[SKIP: already covered prior]** BridgeVLA++, DreamWAM, SAFECAST, Light-Loco-Parkour, StableMimic, 1X hands, Dobot LUMO, Vulcan Sourccey
9. **[SKIP: thin / primary weak]** Noetix E1 latest terrain demo (X lead; official EN product package still thin for a full post this session)
10. **[SKIP: business lane]** Unitree STAR IPO pricing chatter under 25% cap

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | geniworld-visual-action-world-model | Robb Harlan | AI | build |
| 2 | w2-vla-world-to-wrist | Shar Hendrix | AI | build |
| 3 | skillmemo-skill-memory-manipulation | Robb Harlan | AI | build |
| 4 | xeworld-cross-embodiment-world-models | Shar Hendrix | Research | build |
| 5 | vlaff-actionable-affordances | Shar Hendrix | AI | build |
| 6 | near-sensor-visuotactile-poisson | Robb Harlan | Robotics | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (<=25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target from Aug 5–6 arXiv build batch without capital filler

### Notes for Future Agents
- GeniWorld: code/release and multi-camera factory setups
- W²-VLA: third-party CoBoT Magic replications; HuggingFace weights
- SkillMemo: open code; π0.5 stack recipes
- XEWorld: public data release of paired multi-embodiment rollouts
- VLAff: code/weights drop; PR2/Fetch full task videos
- Near-sensor tactile: 256+ grids with external memory; commercial GelSight integration
- Next morning: do not rehash this afternoon six

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 14 today posts incl. morning)
- **Vision gate:** Confirmed stills (GeniWorld overview+OOD+Xtrainer; W2-VLA teaser+arch+rollouts; SkillMemo teaser+pipeline+experts; XEWorld probe+interventions; VLAff overview+arch; visuotactile reflex+latency)
- **Social:** pending tweets / robb-x
- **Push:** pending
- **Failures:** none blocking; solid candidates 6 of target 6


## 2026-08-08 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-08
- git pull --rebase origin main: already up to date
- Prior catalog through 2026-08-07 morning+afternoon (14 posts: omega-0 through near-sensor) — **do not rehash**
- No 2026-08-08 posts before this run

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — keyword/semantic streams mix spam, rehashes, thin clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): Noetix E1 terrain/stairs demos; DOBOT LUMO rehash (already covered 8/6); Figure ladder rehash; 1X hands rehash; Light Origins parkour rehash; Gemini Robotics 2 rehash

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Noetix E1 product + terrain demos — noetixrobotics.com/en/e1 + about/events — lane: **build**
2. **[CANDIDATE/WRITTEN]** Mimir neuro-symbolic memory — arXiv:2608.04933 + HTML — lane: **build**
3. **[CANDIDATE/WRITTEN]** ARGUS viewpoint canonicalization — arXiv:2608.05579 + project + YouTube — lane: **build**
4. **[CANDIDATE/WRITTEN]** FailBench / Failing Gracefully — arXiv:2608.05313 + HTML (ICRA 2026) — lane: **build**
5. **[CANDIDATE/WRITTEN]** SpikingNav — arXiv:2608.05078 + HTML — lane: **build**
6. **[CANDIDATE/WRITTEN]** HiRoC hierarchical VLA post-training — arXiv:2608.05999 + HTML — lane: **build**
7. **[CANDIDATE/WRITTEN]** GAUGE physics fidelity benchmark — arXiv:2608.05948 + HTML + project — lane: **build**
8. **[CANDIDATE/WRITTEN]** VIDP variable impedance diffusion — arXiv:2608.06210 + PDF — lane: **build**
9. **[SKIP: already covered]** Dobot LUMO, 1X hands, Light-Loco parkour, omega-0, KILVO, GeniWorld, SkillMemo, W2-VLA, Nori L3, BridgeVLA++, etc.
10. **[SKIP: business lane]** Unitree STAR IPO pricing chatter under 25% cap
11. **[SKIP: Adaptive-WAM]** Autonomous driving planner — weaker humanoid-blog fit than selected build stack

### Selected for Writing (ranked) — 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | noetix-e1-terrain-humanoid | Shar Hendrix | Humanoids | build |
| 2 | mimir-neuro-symbolic-memory | Robb Harlan | AI | build |
| 3 | argus-viewpoint-canonical-policy | Shar Hendrix | Robotics | build |
| 4 | failbench-graceful-robot-failures | Robb Harlan | Research | build |
| 5 | spikingnav-embodied-navigation | Shar Hendrix | AI | build |
| 6 | hiroc-hierarchical-vla-post-training | Robb Harlan | AI | build |
| 7 | gauge-physics-fidelity-benchmark | Shar Hendrix | Research | build |
| 8 | vidp-variable-impedance-diffusion | Robb Harlan | Robotics | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **8** | Writing: **8**
- Soft floor 3 met; hit target from Noetix product page + Aug 5–6 arXiv build batch (not rehashed 8/7)

### Notes for Future Agents
- Noetix E1: wait for public price / outdoor hour counts; Bumi consumer price already public elsewhere
- Mimir: code release; real kitchen transfer
- ARGUS: lower VGGT latency for closed loop
- FailBench: open-source drop; VLM severity labels
- SpikingNav: full on-chip policy not just SSE
- HiRoC: planner replan under occlusion
- GAUGE: fluids / deformable video track expansion
- VIDP: open code + force-ground-truth ablations
- Afternoon: do not rehash this morning eight

### Run summary
- **Articles published (8):**
  1. noetix-e1-terrain-humanoid
  2. mimir-neuro-symbolic-memory
  3. argus-viewpoint-canonical-policy
  4. failbench-graceful-robot-failures
  5. spikingnav-embodied-navigation
  6. hiroc-hierarchical-vla-post-training
  7. gauge-physics-fidelity-benchmark
  8. vidp-variable-impedance-diffusion
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (npm run verify-media:today - 0 errors, 0 warnings on 8 posts)
- **Vision gate:** Confirmed stills (Noetix E1 product hero; Mimir motivation+structure; ARGUS pipeline+tasks; FailBench hallway compare+trajs+contact; SpikingNav arch+corruptions; HiRoC motivation+framework+real; GAUGE overview+tasks+MoCap; VIDP arm contact stills)
- **Social:** tweets (150 drafts); robb-x
- **Build:** PASS (163 pages)
- **Push:** SUCCESS (47cd470 → origin/main)
- **Failures:** none blocking; solid candidates 8 of target 8


## 2026-08-08 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-08
- git pull --rebase origin main: already up to date
- Morning 2026-08-08 already published 8 posts (noetix-e1 through vidp) — **do not rehash**
- Prior Aug 7 batch (omega-0 through near-sensor) — skip

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — keyword/semantic streams mix spam and thin clips (disclosed)
- Owner lists login-walled; proceeded with public X + web
- Notable leads (leads only): ROBOTIS AI Sapiens Hangang outdoor run (YouTube #5); Curr-0 loco-dex chatter (weak primary); roboto_origin rehash (already covered via RoboParty UFO)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** ROBOTIS AI Sapiens Hangang river outdoor run — YouTube rSsL4E2MwoI + robotis.com AI Sapiens product — lane: **build**
2. **[CANDIDATE/WRITTEN]** GUARD diffusion VLA risk monitor — arXiv:2608.04510 — lane: **build**
3. **[CANDIDATE/WRITTEN]** IcFuzz Isaac Sim fuzzer — arXiv:2608.06088 (ASE 2026) — lane: **build**
4. **[CANDIDATE/WRITTEN]** Robust-WAM semantic foresight — arXiv:2608.05903 + project page — lane: **build**
5. **[CANDIDATE/WRITTEN]** ErgoSurf unknown surface ergodic coverage — arXiv:2608.06208 — lane: **build**
6. **[CANDIDATE/WRITTEN]** LiLa-WAM single-GPU world-action model — arXiv:2608.03701 + GitHub — lane: **build**
7. **[SKIP: already covered morning]** Noetix E1, Mimir, ARGUS, FailBench, SpikingNav, HiRoC, GAUGE, VIDP
8. **[SKIP: already covered prior]** omega-0, SiMDex, SAFECAST, Track4Action, Mind-VLA, UVT, RoboReact, semantic-haptic, robotis open platform intro (Aug 1), humanoid-fail-passive
9. **[SKIP: thin primary]** Curr-0 / Curr Robotics loco-dex demos (X/Instagram only; no strong company paper this session)
10. **[SKIP: business lane]** Unitree STAR IPO pricing chatter under 25% cap
11. **[SKIP: alternate candidates]** GORDON object-centric rewards (strong but slot filled at 6); Deltoris VLA accelerator

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | robotis-sapiens-hangang-outdoor | Shar Hendrix | Humanoids | build |
| 2 | guard-diffusion-vla-risk | Robb Harlan | AI | build |
| 3 | icfuzz-isaac-sim | Shar Hendrix | Robotics | build |
| 4 | robust-wam-semantic-foresight | Robb Harlan | AI | build |
| 5 | ergosurf-unknown-surface-coverage | Shar Hendrix | Robotics | build |
| 6 | lila-wam-single-gpu | Robb Harlan | AI | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target from Hangang field demo + Aug 4–6 arXiv build batch not used in morning

### Notes for Future Agents
- ROBOTIS: distance/fall stats for Hangang runs; full open stack drop status
- GUARD: open code + physical sticky-note / lighting attacks
- IcFuzz: follow Isaac Sim 5.x bug fix landings; non-crash oracles
- Robust-WAM: third-party Franka purple-light replications
- ErgoSurf: industrial paint-prep timing numbers
- LiLa-WAM: RoboTwin random-split third-party runs; messy human VTT
- Next morning: do not rehash this afternoon six

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** pending
- **Vision gate:** pending confirmation
- **Social:** pending tweets / robb-x
- **Push:** pending
- **Failures:** none blocking at write time


#### Afternoon finalize
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 14 today posts incl. morning 8 + afternoon 6)
- **Vision gate:** Confirmed stills — Hangang YT outdoor run + ROBOTIS product torso; GUARD failed/success rollouts + architecture; IcFuzz Isaac stack + workflow + bug case; Robust-WAM teaser + arch + real light OOD; ErgoSurf arm+GPIS diagram + dual rep + setup; LiLa-WAM size plot + arch + real Piper sequences
- **Social:** tweets (156 drafts); robb-x refreshed
- **Push:** SUCCESS (`b0a83cc` → origin/main)
- **Failures:** none blocking; solid candidates 6 of target 6

## 2026-08-09 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-09
- git pull --rebase origin main: already up to date
- Prior catalog through 2026-08-08 morning+afternoon (noetix-e1 through lila-wam) — **do not rehash**
- No 2026-08-09 posts before this run

### X List Scan
- Primary list: https://x.com/i/lists/1805786050763087967
- **Access quality: PARTIAL / NOISY** — keyword/semantic streams mix spam, rehashes, thin clips (disclosed)
- Owner lists login-walled; proceeded with public X + web (disclosed)
- Notable leads (leads only): ROBOTIS Hangang rehash (covered 8/8); DOBOT LUMO rehash; 1X hands rehash; Curr-0 loco-dex chatter (weak primary); UBTECH U1 cinematic demos (already have ubtech-uworld-u1)

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Tacta Systems TactaBot — therobotreport.com + tactasystems.com — lane: **build**
2. **[CANDIDATE/WRITTEN]** GORDON object-centric rewards — arXiv:2608.03753 + project page — lane: **build**
3. **[CANDIDATE/WRITTEN]** SpaceVLA visual intent anchors — arXiv:2608.05730 — lane: **build**
4. **[CANDIDATE/WRITTEN]** Handwritten alphabet LfD — arXiv:2608.06221 (ICDL 2026) — lane: **build**
5. **[CANDIDATE/WRITTEN]** Touchscreen teleop interface — arXiv:2608.06219 (RO-MAN 2026) — lane: **build**
6. **[CANDIDATE/WRITTEN]** Prior-SG scene graphs — arXiv:2608.06170 — lane: **build**
7. **[CANDIDATE/WRITTEN]** CoMuDi multi-robot disassembly — arXiv:2608.05830 — lane: **build**
8. **[CANDIDATE/WRITTEN]** ATP upper-limb exoskeleton — arXiv:2608.05723 — lane: **build**
9. **[SKIP: already covered]** ROBOTIS Hangang, Noetix E1, omega-0, GeniWorld, VIDP, ErgoSurf, IcFuzz, HiRoC, FailBench, DyPES, etc.
10. **[SKIP: business lane under 25% cap]** Avatar Robotics $6.5M seed (teleop wheeled humanoids) — solid but funding-primary; batch filled with build
11. **[SKIP: thin / older]** morph soft cells (June), Adaptive-WAM driving planner, Curr-0 X-only demos

### Selected for Writing (ranked) — 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | tacta-systems-tactabot | Shar Hendrix | Robotics | build |
| 2 | gordon-object-centric-rewards | Robb Harlan | AI | build |
| 3 | spacevla-visual-intent-anchors | Shar Hendrix | AI | build |
| 4 | handwritten-alphabet-lfd | Robb Harlan | Research | build |
| 5 | touchscreen-teleop-manipulator | Shar Hendrix | Robotics | build |
| 6 | prior-sg-scene-graphs | Robb Harlan | Robotics | build |
| 7 | comudi-multi-robot-disassembly | Shar Hendrix | Robotics | build |
| 8 | atp-upper-limb-exoskeleton | Robb Harlan | Robotics | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **8** | Writing: **8**
- Soft floor 3 met; hit target from Tacta product launch + Aug 4–6 arXiv build batch not used 8/8

### Notes for Future Agents
- Tacta: early 2027 ship numbers / electronics customer case studies
- GORDON: open code third-party ManiSkill runs
- SpaceVLA: 3D world-frame anchors on real robot
- Handwriting LfD: transfer beyond alphabet to surface tasks
- Touchscreen teleop: dirty-cell replication
- Prior-SG: prior-graph failure cases when LLM invents rooms
- CoMuDi: physical multi-arm cell
- ATP: larger EMG cohort / factory reach tasks
- Afternoon: do not rehash this morning eight; Avatar $6.5M available if business lane open

### Run summary
- **Articles published (8):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 8 posts)
- **Vision gate:** Confirmed stills — Tacta hand product + O-ring contact; GORDON teaser + pipeline; SpaceVLA overview + dataset; handwriting pipeline + tablet demo; touchscreen operator + path annotation; Prior-SG floor segmentation; CoMuDi multi-arm scenes; ATP worn exo + CAD + torque plot
- **Social:** pending tweets / robb-x
- **Push:** pending
- **Failures:** none blocking at write time


#### Morning finalize
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 8 posts)
- **Vision gate:** Confirmed stills for all 8 slugs (product/paper figures match story subjects)
- **Social:** tweets (164 drafts); robb-x refreshed
- **Push:** SUCCESS (`023e924` → origin/main)
- **Failures:** none blocking; solid candidates 8 of target 8

## 2026-08-09 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-09
- git pull --rebase origin main: already up to date
- Morning already published 8 posts (tacta, gordon, spacevla, handwriting LfD, touchscreen teleop, prior-sg, comudi, atp) — **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 — **Access quality: PARTIAL / NOISY** (disclosed); proceeded with public X + web

### X List Scan
- Unitree IPO pricing chatter (business; already have unitree-star-market-ipo-csrc)
- EngineAI T800 + PaXini foot tactile sole clips (thin primary beyond X/LinkedIn)
- Spam / Optimus fanfic filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** PanoVLA mobile panorama VLA — arXiv:2608.02257 — lane: **build**
2. **[CANDIDATE/WRITTEN]** Adaptive HRC painting (DMP+PBO) — arXiv:2608.01981 + RA-L + YouTube — lane: **build**
3. **[CANDIDATE/WRITTEN]** Visual grounding zero-shot VLM control — arXiv:2608.06154 + GitHub — lane: **build**
4. **[CANDIDATE/WRITTEN]** EvoHIL HIL-RL under lighting shift — arXiv:2608.03872 — lane: **build**
5. **[CANDIDATE/WRITTEN]** Adaptive-WAM early-exit driving planner — arXiv:2608.06008 — lane: **build**
6. **[CANDIDATE/WRITTEN]** Avatar Robotics $6.5M seed — PR Newswire + The Robot Report — lane: **business**
7. **[SKIP: already covered]** HiRoC (2608.05999), fail-passive safety, TRACE, SkillMemo, GORDON, morning eight
8. **[SKIP: no usable figures / thin primary]** Jetson 8GB ACT paper (20KB PDF, no stills); PaXini PX-Footrix EngineAI (X-only primary)
9. **[SKIP: business under mix]** Unitree IPO price 150.8 yuan / ~$9B (Reuters) — new pricing angle but business lane already filled by Avatar; prior Unitree IPO registration article exists

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | panovla-mobile-manipulation | Shar Hendrix | AI | build |
| 2 | adaptive-hrc-painting-dmp | Robb Harlan | Robotics | build |
| 3 | visual-grounding-zero-shot-vlm | Robb Harlan | AI | build |
| 4 | evohil-human-in-loop-rl | Shar Hendrix | AI | build |
| 5 | adaptive-wam-driving | Robb Harlan | AI | build |
| 6 | avatar-robotics-6-5m-seed | Robb Harlan | Industry | business |

### Mix check
- Build/innovate: 5 | Business/industry: 1 | Business share: 1/6 ≈ 16.7% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target from Aug 3–6 arXiv build batch + Avatar seed not used in morning

### Notes for Future Agents
- PanoVLA: open code / third-party wheeled dual-arm replications
- HRC painting: factory panel sizes beyond student cohort
- Visual grounding: natural-camera closed-loop (paper is mostly sim)
- EvoHIL: open code release; non-lighting domain shifts
- Adaptive-WAM: public code; non-NAVSIM driving stacks
- Avatar: named customer logos, operator:robot ratios after seed
- Do not rehash this afternoon six tomorrow morning

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending

#### Afternoon finalize
- **Media verify:** PASS (
pm run verify-media:today — 0 errors, 0 warnings on 14 today posts incl. morning 8 + afternoon 6)
- **Vision gate:** Confirmed stills — PanoVLA teleop+rollouts; HRC painting setup+trajectory; VLM controller interface+entropy/agreement plots; EvoHIL task suite+architecture; Adaptive-WAM diagrams; Avatar warehouse humanoids (TRR)
- **Social:** tweets regenerated; robb-x if available
- **Push:** pending

#### Afternoon finalize (confirmed)
- **Media verify:** PASS
- **Vision gate:** PASS (all 6 slugs)
- **Social:** tweets 170 drafts; robb-x refreshed
- **Push:** SUCCESS (260980d → origin/main)
- **Failures:** none blocking; solid candidates 6 of target 6

## 2026-08-10 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-10
- git pull --rebase origin main: already up to date
- Prior day (8/9): morning 8 + afternoon 6 already published — **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 — **Access quality: PARTIAL / NOISY** (disclosed); proceeded with public X + web + arXiv cs.RO recent

### X List Scan
- ROBOTIS Hangang outdoor Sapiens stress clips — **SKIP: already covered** (robotis-sapiens-hangang-outdoor)
- UBTECH U1 product theater — **SKIP: already covered** (ubtech-uworld-u1)
- AheadForm cinematic face demo recirculation — **SKIP: already covered**
- 1X NEO 25-DoF hands recirculation — **SKIP: already covered**
- Figure 03 stair/autonomy chatter — **SKIP: already covered** (figure-f03-ladder / figure-03-bmw)
- Spam / non-robot filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** C2Dex monocular→dexterous contacts — arXiv:2608.07045 + project — lane: **build**
2. **[CANDIDATE/WRITTEN]** TEMPO two-timescale VLA RL post-training — arXiv:2608.07314 — lane: **build**
3. **[CANDIDATE/WRITTEN]** Fault-tolerant locomotion adaptive gait (Kyon 68 kg, IROS) — arXiv:2608.07328 — lane: **build**
4. **[CANDIDATE/WRITTEN]** AtlasVLA world-ego wrist-only VLA — arXiv:2608.06729 — lane: **build**
5. **[CANDIDATE/WRITTEN]** AutoIntervene calibrated chunk intervention — arXiv:2608.07065 + aus.bot — lane: **build**
6. **[CANDIDATE/WRITTEN]** Guqin haptic robot finger — arXiv:2608.07002 / IEEE ToH — lane: **build**
7. **[CANDIDATE/WRITTEN]** TECDAR 6D IMU extrinsic contact ranging — arXiv:2608.07075 — lane: **build**
8. **[CANDIDATE/WRITTEN]** Cross-view action consistency camera-robust VLA — arXiv:2608.06965 — lane: **build**
9. **[SKIP: already covered]** ω-0 humanoid loco-manip (2608.06375), DyPES-VLA, GeniWorld, BYD Di Space, Avatar seed, Unitree IPO, Tacta, morning/afternoon 8/9 batches
10. **[SKIP: no HTML figures / thin media]** SoRoMoX soft-robot JAX (2608.06650) — no arXiv HTML stills this session
11. **[SKIP: business under mix]** Funding/IPO recirculation — batch is 100% build; no business lane needed

### Selected for Writing (ranked) - 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | c2dex-dexterous-monocular-video | Shar Hendrix | Robotics | build |
| 2 | tempo-vla-rl-post-training | Robb Harlan | AI | build |
| 3 | fault-tolerant-locomotion-adaptive-gait | Robb Harlan | Robotics | build |
| 4 | atlasvla-persistent-world-ego | Shar Hendrix | AI | build |
| 5 | autointervene-action-chunking | Robb Harlan | Robotics | build |
| 6 | guqin-haptic-robot-finger | Shar Hendrix | Robotics | build |
| 7 | tecdar-6d-tactile-contact | Robb Harlan | Robotics | build |
| 8 | cross-view-vla-camera-robust | Shar Hendrix | AI | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **8** | Writing: **8**
- Soft floor 3 met; hit target from Aug 7 arXiv build batch (hands, locomotion, VLA memory, tactile, haptics)

### Notes for Future Agents
- C2Dex: third-party open-loop replay on non-G1 hands; in-hand finger gaiting limitation noted by authors
- TEMPO: code release / non-CALVIN embodiments
- Fault-tolerant Kyon: onboard LiDAR terrain + multi-joint faults
- AtlasVLA: open weights / multi-arm
- AutoIntervene: factory cycle-time operator savings data
- Guqin finger: transfer to industrial wire/connector contact
- TECDAR: oily/dirty shop parts accuracy
- Cross-view VLA: multi-camera cells without re-collect
- Afternoon: do not rehash this morning eight

### Run summary
- **Articles published (8):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending


#### Morning finalize (2026-08-10)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 8 posts)
- **Vision gate:** PASS — confirmed stills for c2dex (HOI pipeline), tempo-vla (two-timescale diagram), fault-tolerant-gait (Kyon fault frames), atlasvla (world-ego teaser), autointervene (bimanual tasks collage), guqin-haptic-finger (guqin + tactile plots), tecdar-tactile (line/point contact IMU), cross-view-vla (camera perturbation teaser)
- **Social:** tweets 178 drafts; robb-x refreshed
- **Push:** SUCCESS (`58d90bd` → origin/main)
- **Failures:** none; solid candidates 8 of target 8
- **X list accessible?** Partial/noisy (disclosed)


## 2026-08-10 - Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-10
- git pull --rebase origin main: already up to date
- Morning already published 8 posts (c2dex, tempo, fault-tolerant-gait, atlasvla, autointervene, guqin, tecdar, cross-view-vla) - **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 - **Access quality: PARTIAL / NOISY** (disclosed); proceeded with public X + web + arXiv cs.RO recent

### X List Scan
- Mimic M1 hand recirculation (tendon-driven Swiss hand) - **CANDIDATE** (not yet on blog)
- Dyna Robotics Dyna-2 / zero-shot deployment clips - **CANDIDATE** (PR same day)
- Optimus / Figure / ROBOTIS recirculation - **SKIP: already covered**
- Spam / AI-video farm bots filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Dyna-2 World-Action Model (1M human video hours) - PR Newswire Aug 10 + dyna.co/dyna-2 - lane: **build**
2. **[CANDIDATE/WRITTEN]** Mimic Hand M1 + U1 wearable - Mimic blog + Interesting Engineering - lane: **build**
3. **[CANDIDATE/WRITTEN]** Atlas autonomous battery swap <3 min - BD enterprise blog + product page + IE - lane: **build**
4. **[CANDIDATE/WRITTEN]** KC-SVSDF payload mobile manip planning - arXiv:2608.07005 - lane: **build**
5. **[CANDIDATE/WRITTEN]** LifelongCrossNav multi-floor multi-object - arXiv:2608.07079 - lane: **build**
6. **[CANDIDATE/WRITTEN]** CrossTracer embodiment residual nav - arXiv:2608.06688 - lane: **build**
7. **[SKIP: already covered morning]** C2Dex, TEMPO, fault-tolerant gait, AtlasVLA, AutoIntervene, Guqin, TECDAR, cross-view VLA
8. **[SKIP: secondary / thin media]** EMS adaptive VLA (2608.06434) - solid but batch full; VicOne Isaac Sim security; Tate Hirebotics welders (more industry)
9. **[SKIP: business under mix]** Unitree IPO pricing recirculation - prior coverage; morning was 100% build

### Selected for Writing (ranked) - 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | dyna-2-world-action-model | Robb Harlan | AI | build |
| 2 | mimic-hand-m1-tendon-driven | Shar Hendrix | Robotics | build |
| 3 | atlas-autonomous-battery-swap | Robb Harlan | Humanoids | build |
| 4 | kc-svsdf-payload-motion-planning | Robb Harlan | Robotics | build |
| 5 | lifelongcrossnav-multi-floor | Shar Hendrix | AI | build |
| 6 | crosstracer-cross-embodiment-nav | Shar Hendrix | AI | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target (same-day Dyna-2 PR + uncovered Aug 7 arXiv + Mimic/Atlas product stills)

### Notes for Future Agents
- Dyna-2: third-party site pass rates; open scaling curves
- Mimic M1: published pricing if any; factory cycle data
- Atlas battery: dock reliability / pack logistics field reports
- KC-SVSDF: code release; more cluttered online maps
- LifelongCrossNav: real multi-floor robot deployment
- CrossTracer: open weights / outdoor terrain
- Do not rehash this afternoon six tomorrow morning

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending


#### Afternoon finalize (2026-08-10)
- **Media verify:** PASS (`npm run verify-media:today` - 0 errors, 0 warnings on 14 today posts incl. morning 8 + afternoon 6)
- **Vision gate:** PASS - dyna-2 (one-step dual-arm + celery quality); mimic-hand (gloved hands + data pyramid); atlas-battery (warehouse Atlas + BD headshot); kc-svsdf (tunnel/forest compare + corridor payload); lifelongcrossnav (multi-floor illustration + framework); crosstracer (legged/wheeled lobby + architecture)
- **Social:** tweets 184 drafts; robb-x refreshed
- **Push:** pending

- **Push:** SUCCESS (`bec4600` → origin/main)
- **Failures:** none; solid candidates 6 of target 6

## 2026-08-11 - Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-11
- git pull --rebase origin main: already up to date
- Prior day (8/10): morning 8 + afternoon 6 already published - **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 - **Access quality: PARTIAL / NOISY** (disclosed); keyword search polluted; proceeded with public X semantic + web + arXiv cs.RO recent (Tue 11 Aug / Mon 10 Aug)

### X List Scan
- DOBOT LUMO recirculation - **SKIP: already covered** (dobot-lumo-all-terrain-humanoid)
- AheadForm face demo recirculation - **SKIP: already covered**
- Dyna-2 / Mimic hand / Atlas battery - **SKIP: afternoon 8/10**
- LightOrigins leg-adaptation clips - thin primary source this session
- Spam / non-robot filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** XPolicyLab unified policy eval ecosystem - arXiv:2608.09892 + GitHub - lane: **build**
2. **[CANDIDATE/WRITTEN]** SLIM-0.5B action-grounded predictive latents - arXiv:2608.09771 + project - lane: **build**
3. **[CANDIDATE/WRITTEN]** JEPA-WAM joint-embedding world action model - arXiv:2608.09381 + project - lane: **build**
4. **[CANDIDATE/WRITTEN]** AdaDexGrasp visuo-tactile adaptive grasp - arXiv:2608.07600 ECCV 2026 - lane: **build**
5. **[CANDIDATE/WRITTEN]** Mixed-stiffness anthropomimetic fingertip coin grasp - arXiv:2608.07887 + GitHub - lane: **build**
6. **[CANDIDATE/WRITTEN]** Differential Direct-Drive ultra-low-impedance gripper - arXiv:2608.09198 - lane: **build**
7. **[CANDIDATE/WRITTEN]** Vid2WAM distill video diffusion into WAM - arXiv:2608.08558 + project - lane: **build**
8. **[CANDIDATE/WRITTEN]** PEEL parallel long-horizon disassembly - arXiv:2608.08773 + project - lane: **build**
9. **[SKIP: already covered]** DOBOT LUMO, Dyna-2, Mimic M1, Atlas battery, BYD Di Space, Unitree IPO, Tacta, yesterday arXiv batch
10. **[SKIP: business under mix]** Funding/IPO recirculation - batch is 100% build

### Selected for Writing (ranked) - 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | xpolicylab-robot-policy-ecosystem | Shar Hendrix | AI | build |
| 2 | slim-05b-action-grounded-latents | Robb Harlan | AI | build |
| 3 | jepa-wam-joint-embedding | Shar Hendrix | AI | build |
| 4 | adadexgrasp-visuo-tactile | Robb Harlan | Robotics | build |
| 5 | mixed-stiffness-fingertip-coin | Shar Hendrix | Robotics | build |
| 6 | ddd-gripper-ultra-low-impedance | Robb Harlan | Robotics | build |
| 7 | vid2wam-video-diffusion-distill | Shar Hendrix | AI | build |
| 8 | peel-disassembly-planning | Robb Harlan | Robotics | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (<=25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **8** | Writing: **8**
- Soft floor 3 met; hit target from Aug 8-10 arXiv build batch (policy infra, compact VLA, WAM, hands, gripper, disassembly)

### Notes for Future Agents
- XPolicyLab: adapter adoption outside RoboTwin/RoboDojo
- SLIM: open weights / cross-embodiment scaling
- JEPA-WAM: real multi-site OOD
- AdaDexGrasp: commercial hand ports beyond Shadow/Psibot
- Mixed fingertip: cards/thin objects beyond coins
- DDD gripper: sensorless force control results
- Vid2WAM: open teacher/student checkpoints
- PEEL: physics-aware refinement beyond pure geometry
- Afternoon: do not rehash this morning eight

### Run summary
- **Articles published (8):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending


#### Morning finalize (2026-08-11)
- **Media verify:** PASS (`npm run verify-media:today` - 0 errors, 0 warnings on 8 posts)
- **Vision gate:** PASS - confirmed stills for xpolicylab (infra diagram), slim-05b (pipeline+metrics with robot cams), jepa-wam (architecture+charts with robot), adadexgrasp (hand adaptation sim/real), mixed-stiffness (coin pinch sequences), ddd-gripper (hardware photo), vid2wam (distill diagram+bars), peel (pliers CAD + Fetch place)
- **Social:** tweets 192 drafts; robb-x refreshed
- **Build:** PASS (205 pages)
- **Push:** pending


- **Push:** SUCCESS (`78fd5b3`  origin/main)
- **Failures:** none; solid candidates 8 of target 8
- **X list accessible?** Partial/noisy (disclosed)



## 2026-08-11 - Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-11
- git pull --rebase origin main: already up to date
- Morning already published 8 posts (xpolicylab, slim-05b, jepa-wam, adadexgrasp, mixed-stiffness, ddd-gripper, vid2wam, peel) - **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 - **Access quality: PARTIAL / NOISY** (disclosed); keyword search polluted with replies; proceeded with public X semantic + web + arXiv cs.RO recent (Tue 11 Aug / Mon 10 Aug)

### X List Scan
- Seeed reBot-DevArm open-source arm recirculation - **CANDIDATE** (not on blog)
- Wuji Hand ICRA recirculation - **SKIP: not enough primary depth / not fresh**
- Dyna-2 / Mimic / morning arXiv batch - **SKIP: already covered**
- Carbon Robotics LaserWeeder - **SKIP: off beat**
- Spam / non-robot filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** RynnValue temporal-distance value foundation model - arXiv:2608.09853 - lane: **build**
2. **[CANDIDATE/WRITTEN]** Seeed reBot-DevArm open hardware arm - GitHub + Seeed store + wiki - lane: **build**
3. **[CANDIDATE/WRITTEN]** Wireless reconfigurable HRC 5G cells - arXiv:2608.09658 IROS 2026 - lane: **build**
4. **[CANDIDATE/WRITTEN]** Robot-assisted bathing capture/transfer - arXiv:2608.09127 RSS 2026 - lane: **build**
5. **[CANDIDATE/WRITTEN]** RoboSeg part-level semantic reconstruction - arXiv:2608.09778 - lane: **build**
6. **[CANDIDATE/WRITTEN]** HarnessWAM deliberation harness for WAMs - arXiv:2608.09516 - lane: **build**
7. **[SKIP: already covered morning]** XPolicyLab, SLIM, JEPA-WAM, AdaDexGrasp, mixed fingertip, DDD gripper, Vid2WAM, PEEL
8. **[SKIP: batch full / secondary]** VANE TTT, WorldSimProbe, SAIN nav, OnEvoMemory, WA-SpecDec, SHRIMP
9. **[SKIP: business under mix]** Funding/IPO recirculation - batch is 100% build

### Selected for Writing (ranked) - 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | rynnvalue-temporal-distance-reward | Robb Harlan | AI | build |
| 2 | seeed-rebot-devarm-open-source | Shar Hendrix | Robotics | build |
| 3 | wireless-reconfigurable-hrc-5g | Robb Harlan | Robotics | build |
| 4 | robot-assisted-bathing-demo-transfer | Shar Hendrix | Research | build |
| 5 | roboseg-part-level-semantic | Robb Harlan | Robotics | build |
| 6 | harnesswam-deliberation-wam | Shar Hendrix | AI | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (<=25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target (open-source arm product + five Aug 10 arXiv build papers)

### Notes for Future Agents
- RynnValue: third-party zero-shot reward on non-Franka cells
- reBot: pricing changes; Isaac courses ship date
- Wireless HRC: plant multi-week layout-change field log
- Bathing: public dataset release; human-subject readiness criteria
- RoboSeg: larger physical trial / open code
- HarnessWAM: second WAM backend / real dual-arm
- Do not rehash this afternoon six tomorrow morning

### Run summary
- **Articles published (6):** listed above
- **X list accessible?** Partial/noisy (N for clean feed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending



#### Afternoon finalize (2026-08-11)
- **Media verify:** PASS (
pm run verify-media:today - 0 errors, 0 warnings on 14 today posts incl. morning 8 + afternoon 6)
- **Vision gate:** PASS - rynnvalue (overview+Franka tasks), seeed-rebot (product render+raspberry field), wireless-hrc (sensor board+cobot cell), robot-assisted-bathing (pipeline+mannequin hand), roboseg (online vs offline+architecture), harnesswam (gap figure+architecture)
- **Social:** tweets 198 drafts; robb-x refreshed
- **Build:** PASS (211 pages)
- **Push:** pending


- **Push:** SUCCESS (23a5ad6 -> origin/main)
- **Failures:** none; solid candidates 6 of target 6
- **X list accessible?** Partial/noisy (disclosed)


## 2026-08-12 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-12
- git pull --rebase origin main: already up to date
- Prior day (8/11): morning 8 + afternoon 6 already published — **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 — **Access quality: PARTIAL / NOISY** (disclosed). Keyword search returned spam, GPT pricing, unrelated crash-out posts. Proceeded with public X semantic + web + arXiv cs.RO new listings (Wed 12 Aug / leftover Tue 11 Aug).

### X List Scan
- CASBOT Hands / dexterous-hand launch recirculation — **CANDIDATE** (not on blog)
- Nucleus Robotics stealth / German factory — not on the list feed this session; found via web + IE
- AGIBot G2 6-day livestream recirculation — **SKIP: already covered** (agibot-15000 / June livestream)
- DOBOT LUMO recirculation — **SKIP: already covered**
- Digit V5 Forbes “out of the cage” — **SKIP: already covered** (agility SPAC + Fremont cooperative-safety angle)
- LightOrigins clipped-leg adaptation — **SKIP: thin primary**
- ROBOTIS Hangang / Gemini Robotics 2 / Optimus price chatter — **SKIP: already covered**
- Kodiak Nasdaq bell — **SKIP: off beat**
- LDA-1B RoboPapers episode — **SKIP: RSS 2026 paper already months old**
- Spam / non-robot filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** CASBOT Hands L1/D1/M1 + F-series preview — RoboticsTomorrow 2026-08-12 + 36Kr + AIFITLAB listing — lane: **build**
2. **[CANDIDATE/WRITTEN]** Nucleus Robotics stealth, Unitree G1 factory labor-by-hour — nucleuslab.ai + IE + Humanoids Daily — lane: **build**
3. **[CANDIDATE/WRITTEN]** Flex-π multi-stream WAM — arXiv:2608.10860 + flex-pi.github.io — lane: **build**
4. **[CANDIDATE/WRITTEN]** Surgical WAM video pretrain — arXiv:2608.11204 + alphaXiv — lane: **build**
5. **[CANDIDATE/WRITTEN]** Confined-space whole-body planning on G1 — arXiv:2608.10220 + project page — lane: **build**
6. **[CANDIDATE/WRITTEN]** Real bimanual dexterous grasp from single view — arXiv:2608.10383 + GitHub — lane: **build**
7. **[CANDIDATE/WRITTEN]** Gated VLA-Cache logit-margin gate — arXiv:2608.10824 IROS 2026 — lane: **build**
8. **[CANDIDATE/WRITTEN]** Hip-energized monopedal hopping / Penn Jerboa — arXiv:2608.10387 + alphaXiv — lane: **build**
9. **[SKIP: already covered]** DOBOT LUMO, Dyna-2, Mimic M1, Atlas battery, yesterday’s 14 posts, Unitree IPO pricing (unitree-star-market-ipo-csrc)
10. **[SKIP: business under mix]** Unitree STAR pricing / 8000× oversubscription — already covered; Digit v5 Forbes is cooperative-safety rehash
11. **[SKIP: batch full / secondary]** FACT WAM, BooST, PBD-AG, Lost-in-Reconstruction VLA, Embodied 3DGS nav, VANE TTT, WorldSimProbe

### Selected for Writing (ranked) — 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | casbot-hands-l1-d1-m1 | Shar Hendrix | Robotics | build |
| 2 | nucleus-robotics-factory-labor | Robb Harlan | Humanoids | build |
| 3 | flex-pi-world-action-model | Shar Hendrix | AI | build |
| 4 | surgical-wam-data-efficient | Robb Harlan | AI | build |
| 5 | humanoid-confined-space-planning | Robb Harlan | Humanoids | build |
| 6 | bimanual-dexterous-grasp-single-view | Shar Hendrix | Robotics | build |
| 7 | gated-vla-cache-introspection | Robb Harlan | AI | build |
| 8 | hip-energized-monopedal-hopping | Shar Hendrix | Robotics | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Solid candidates with primary/secondary depth: **8** | Writing: **8**
- Soft floor 3 met; hit target (same-day CASBOT product + uncovered Nucleus stealth + six Aug 11–12 arXiv build papers)

### Notes for Future Agents
- CASBOT Hands: watch F-series ship date and whether Lens actually builds L1 at volume
- Nucleus: named customer, hourly rate, second site — follow if any of those land
- Flex-π: third-party YAM self-repair replication; open weights
- Surgical WAM: closed-loop on real dVRK, not just JIGSAWS video
- Confined-space WBP: hardware G1 hole crossing
- Bimanual grasp: cluttered scenes / open-vocab detection
- Gated VLA-Cache: real-robot timing at 15 Hz
- Hip hopping: spatial (off-boom) Jerboa or biped transfer
- Afternoon: do not rehash this morning eight

### Run summary
- **Articles published (8):** listed above
- **X list accessible?** Partial/noisy (N for clean feed; disclosed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending


#### Morning finalize (2026-08-12)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 8 posts)
- **Vision gate:** PASS — casbot (BAND + L1 display table), nucleus (warehouse G1s + Konecranes aisle + shelf demo), flex-pi (YAM workcell teaser + real-task bars), surgical-wam (peg-transfer sim + architecture + JIGSAWS frames), confined-space (G1 hole sequence + NIST diagrams), bimanual-grasp (H1-2 + objects hero; bin enclosure body), gated-vla (cache vs full recompute + LIBERO suites), hip-hopping (Jerboa hardware + SLIP diagram)
- **Social:** tweets 206 drafts; robb-x refreshed
- **Build:** PASS (219 pages)
- **Push:** SUCCESS (`82038bd` → origin/main)
- **Failures:** none; solid candidates 8 of target 8
- **X list accessible?** Partial/noisy (disclosed)

## 2026-08-12 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-12
- git pull --rebase origin main: already up to date
- Morning already published 8 posts (casbot-hands, nucleus-robotics, flex-pi, surgical-wam, confined-space, bimanual-grasp, gated-vla, hip-hopping) — **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 — **Access quality: PARTIAL / NOISY** (disclosed). Keyword search mixed Flex-π / Dyna-2 recirculation, AutoFAB clip, spam. Proceeded with public X semantic + web + arXiv cs.RO new listings (Wed 12 Aug leftovers).

### X List Scan
- Flex-π / Jesse Zhang / Ge Yan threads — **SKIP: already covered** this morning
- Dyna-2 recirculation — **SKIP: already covered**
- DOBOT LUMO recirculation — **SKIP: already covered**
- AGIBot G2 livestream — **SKIP: already covered**
- Digit V5 Forbes — **SKIP: already covered**
- LightOrigins clipped-leg — **SKIP: thin primary** (same as morning)
- Duatic Alpha TU/e unboxing — **SKIP: not a new product; March 2026 robot, lab delivery only**
- AutoFAB world-model R2S2R clip — **SKIP: thin primary**
- Realbotix Q3 earnings — **SKIP: business / off mix**
- TALUS Army logistics contract (Robot Report Aug 12) — **SKIP: not humanoid / business-adjacent**
- Spam / non-robot filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** TCAM / RMC2 champion T-shirt loader — arXiv:2608.10718 + WBCD site — lane: **build**
2. **[CANDIDATE/WRITTEN]** RHOAS observer-based hand-guiding — arXiv:2608.10847 + ancillary video — lane: **build**
3. **[CANDIDATE/WRITTEN]** Semantic-3DGS mobile manipulation on Go2 — arXiv:2608.10756 ACM MM 2026 + alphaXiv — lane: **build**
4. **[CANDIDATE/WRITTEN]** FACT failure-aware WAM — arXiv:2608.10232 + fact-wam.github.io — lane: **build**
5. **[CANDIDATE/WRITTEN]** BooST skill transfer — arXiv:2608.10600 + boost-robots.github.io — lane: **build**
6. **[CANDIDATE/WRITTEN]** Crowd-following constraint RL — arXiv:2608.10056 IROS 2026 + project page — lane: **build**
7. **[SKIP: already covered morning]** Confined-space WBP, bimanual grasp, hip hopping, gated VLA-cache, Flex-π, Surgical WAM, CASBOT, Nucleus
8. **[SKIP: batch full / secondary]** SALT / Lost-in-Reconstruction, PBD-AG, AECNav, DURA VLA attack, robot recomposition, fabric destacking ICMA
9. **[SKIP: business under mix]** Realbotix earnings, TALUS contract, 370B humanoid-design essay, Unitree IPO recirculation

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | tcam-wbcd-tshirt | Shar Hendrix | Robotics | build |
| 2 | rhoas-hand-guiding | Robb Harlan | Robotics | build |
| 3 | semantic-3dgs-mobile-manip | Shar Hendrix | Robotics | build |
| 4 | fact-wam-failure-aware | Robb Harlan | AI | build |
| 5 | boost-skill-transfer | Shar Hendrix | AI | build |
| 6 | crowd-follow-safety | Robb Harlan | Robotics | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Soft floor: 2 | Solid candidates with primary/secondary depth: **6** | Writing: **6**
- Soft floor 2 met; hit target (WBCD champion hardware + KUKA hand-guiding + Go2 3DGS + three leftover Aug 10–11 arXiv build papers morning skipped)

### Notes for Future Agents
- TCAM: alignment-demo expansion; autonomous abort vs human run-management
- RHOAS: second cobot brand; gravity-axis assistance
- Semantic-3DGS: onboard Orin, refresh during motion
- FACT: third-party real-robot scoring replication
- BooST: independent UR3 / non-kitchen transfer
- Crowd-follow: week-long log on a heavier platform
- Do not rehash this afternoon six tomorrow morning

### Run summary
- **Articles published (6):** tcam-wbcd-tshirt, rhoas-hand-guiding, semantic-3dgs-mobile-manip, fact-wam-failure-aware, boost-skill-transfer, crowd-follow-safety
- **X list accessible?** Partial/noisy (N for clean feed; disclosed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending

#### Afternoon finalize (2026-08-12)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 14 today posts incl. morning 8 + afternoon 6)
- **Vision gate:** PASS — tcam (Velcro gripper + wrist cameras + CAD), rhoas (KUKA precision + agility + shadow assist), semantic-3dgs (Go2 platform + drawer/banana sequence + tabletop tasks), fact (architecture with dual-arm stills + five real tasks + failure-future compare), boost (UR3 kitchen bars + framework + cross-domain skills), crowd-follow (CrowdNav qualitative + policy diagram)
- **Social:** tweets 212 drafts; robb-x refreshed
- **Build:** PASS (225 pages)
- **Push:** SUCCESS (`c0ced58` → origin/main)
- **Failures:** none; solid candidates 6 of target 6
- **X list accessible?** Partial/noisy (disclosed)


## 2026-08-13 — Daily Scheduled Pipeline (Afternoon)

### Preflight
- Slot: **Afternoon** | Target: 6 | Hard max: 6 | Soft floor: 2 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-13
- git pull --rebase origin main: already up to date
- No 2026-08-13 morning posts in `src/content/blog/` (morning slot appears not to have published). Last published batch is 2026-08-12 morning 8 + afternoon 6 — **do not rehash**
- X list: https://x.com/i/lists/1805786050763087967 — **Access quality: PARTIAL / NOISY** (disclosed). Keyword search returned Matic Robots reply spam, Claude/OpenAI chatter, and recirculation. Proceeded with public X semantic + web + arXiv cs.RO new listings (Thu 13 Aug / leftover Wed 12 Aug).

### X List Scan
- Matic Robots / Hey Matic kitchen clips — **SKIP: off beat** (floor cleaner, not humanoid/manipulation research)
- DOBOT LUMO / LightOrigins / Digit V5 / Gemini Robotics 2 recirculation — **SKIP: already covered**
- Arkshel MX01 flying-humanoid YouTube short — **SKIP: thin primary / unverified product**
- Generative Bionics QVAC clip — **SKIP: already covered**
- Spam / non-robot filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** Galaxea G0.5 unified autoregressive VLA — arXiv:2608.11739 + project page — lane: **build**
2. **[CANDIDATE/WRITTEN]** SMPC to sparse RL loco-manipulation on Spot + G1 — arXiv:2608.12063 + RAI project — lane: **build**
3. **[CANDIDATE/WRITTEN]** HandEdit 200M human-to-robot hand edits — arXiv:2608.12122 + handedit.github.io — lane: **build**
4. **[CANDIDATE/WRITTEN]** StellaVLA in-context structured demos — arXiv:2608.11671 + stelledge.com — lane: **build**
5. **[CANDIDATE/WRITTEN]** UT Austin field recomposition (Spot/Panther/Turtlebot) — arXiv:2608.11063 + project + YouTube — lane: **build**
6. **[CANDIDATE/WRITTEN]** Policy-induced hand priors on humanoid dual-arm VLAs — arXiv:2608.11769 + alphaXiv — lane: **build**
7. **[SKIP: media inaccessible]** BioflexBot pneumatic hand — TRR + Advanced Science + EurekAlert + IE same-day (Aug 13). Strong product story; Wiley/TRR image CDNs 403 from this environment; IE hero is Wikimedia stock (banned). Left for a later slot if figures can be fetched.
8. **[SKIP: thin / event]** RoboBusiness State of Humanoids panel announcement (TRR Aug 13); TRR gated mobile-manipulators ebook
9. **[SKIP: business / mix]** ARM Institute defense project call (TRR Aug 13); Unitree IPO lot-math recirculation (Gasgoo Aug 13)
10. **[SKIP: already covered Aug 12]** CASBOT Hands, Flex-pi, Surgical WAM, confined-space, bimanual grasp, gated VLA, hip hopping, TCAM, RHOAS, Semantic-3DGS, FACT, BooST, crowd-follow
11. **[SKIP: batch full / secondary]** RIFT WAM future tokens (2608.11521), D3D-GEN (2608.11876), Adaptation of generalist policies (2608.11363), World Tokens (2608.09730)

### Selected for Writing (ranked) — 6 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | g05-autoregressive-vla | Robb Harlan | AI | build |
| 2 | smpc-loco-manipulation-spot-g1 | Robb Harlan | Humanoids | build |
| 3 | handedit-human-to-robot | Shar Hendrix | Robotics | build |
| 4 | stellavla-structured-demo | Shar Hendrix | AI | build |
| 5 | robot-recomposition-field | Robb Harlan | Robotics | build |
| 6 | policy-hand-priors-humanoid | Shar Hendrix | Humanoids | build |

### Mix check
- Build/innovate: 6 | Business/industry: 0 | Business share: 0% (<=25%)

### Volume note
- Slot: Afternoon | Target: 6 | Hard max: 6 | Soft floor: 2 | Solid candidates with primary/secondary depth + usable stills: **6** | Writing: **6**
- Morning slot did not publish today; afternoon filled from Thu 13 Aug arXiv + leftover Aug 11-12 field paper. BioflexBot skipped only for media, not for lack of story.

### Notes for Future Agents
- BioflexBot (Advanced Science 10.1002/advs.76527, TRR + IE + EurekAlert Aug 13): fetch Wiley figures from a less-blocked path; do not use IE Wikimedia stock or TRR Adobe Stock
- G0.5: third-party R1-Lite/R1-Pro replication; open weights
- SMPC-RL: vision-only / outdoor transfer; unfreeze low-level ReLIC
- HandEdit: policy trained on the 200M composites that transfers to a real Shadow/Orca
- StellaVLA: OOD-L2 drawer still fails; watch Hugging Face checkpoint
- Field recomposition: camera-ready code drop; second site beyond reactor demo
- Hand priors: more policies on the 17-pose grid
- Do not rehash this afternoon six tomorrow morning

### Run summary
- **Articles published (6):** g05-autoregressive-vla, smpc-loco-manipulation-spot-g1, handedit-human-to-robot, stellavla-structured-demo, robot-recomposition-field, policy-hand-priors-humanoid
- **X list accessible?** Partial/noisy (N for clean feed; disclosed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending

#### Afternoon finalize (2026-08-13)
- **Media verify:** PASS (`npm run verify-media:today` — 0 errors, 0 warnings on 6 posts)
- **Vision gate:** PASS — g05 (teaser + R1-Lite towels + R1-Pro crate stack), smpc (pipeline + G1 box + Spot tire), handedit (teaser + SAM/inpaint pipeline + editor grid), stellavla (overview + Piper scenes + framework), recomposition (Spot reactor stages + Panther/Turtlebot search + payload kit), hand-priors (17-pose apple grid + success heatmaps)
- **Social:** tweets 218 drafts; robb-x refreshed
- **Build:** skipped this slot (frontmatter matches schema; media gate clean)
- **Push:** SUCCESS (`13528f2` → origin/main)
- **Failures:** none; solid candidates 6 of target 6
- **X list accessible?** Partial/noisy (disclosed)


## 2026-08-14 — Daily Scheduled Pipeline (Morning)

### Preflight
- Slot: **Morning** | Target: 8 | Hard max: 8 | Soft floor: 3 (from logs/pipeline-slot.json)
- Date (Pacific): 2026-08-14
- git pull --rebase origin main: already up to date
- Prior day (8/13 afternoon): g05, smpc, handedit, stellavla, recomposition, hand-priors — **do not rehash**
- No 2026-08-14 posts in blog/ before this run
- X list: https://x.com/i/lists/1805786050763087967 — **Access quality: PARTIAL / NOISY** (disclosed). Keyword search returned GTA/pricing spam. Proceeded with public X semantic + web + arXiv cs.RO new listings (Fri 14 Aug / leftover Thu 13 Aug).

### X List Scan
- Curated list feed not reliably accessible without login
- Public X: Agibot G2 factory-shift recirculation — **SKIP: already covered**
- AheadForm / UBTECH U1 cinematic clips — **SKIP: already covered**
- Unitree STAR pricing chatter — **SKIP: already covered** (unitree-star-market-ipo-csrc); CNBC Aug 14 IPO-price recap parked under mix cap
- Spam / non-robot filtered

### Web Search Findings
1. **[CANDIDATE/WRITTEN]** BioflexBot pneumatic spring hand — Advanced Science + EurekAlert + TRR Aug 13 (skipped yesterday for media; TRR Advanced Science Fig. 7 now fetched) — lane: **build**
2. **[CANDIDATE/WRITTEN]** HumanoidVLN Isaac Sim benchmark — arXiv:2608.12860 + project page — lane: **build**
3. **[CANDIDATE/WRITTEN]** NestDex copilot teleop — arXiv:2608.13362 + aus.bot — lane: **build**
4. **[CANDIDATE/WRITTEN]** ContactGuard pre-contact monitor — arXiv:2608.13438 + alphaXiv — lane: **build**
5. **[CANDIDATE/WRITTEN]** H2R-Bench human-to-robot video — arXiv:2608.13049 + project page — lane: **build**
6. **[CANDIDATE/WRITTEN]** Temporal GRPO VLA credit — arXiv:2608.13026 — lane: **build**
7. **[CANDIDATE/WRITTEN]** Seeker attention-from-action — arXiv:2608.13422 + GitHub — lane: **build**
8. **[CANDIDATE/WRITTEN]** Decoding task progress from π0.5 — arXiv:2608.13474 — lane: **build**
9. **[SKIP: business / mix]** Unitree STAR IPO priced 150.8 yuan / ~\ / ~\ (CNBC Aug 14) — new vs CSRC article, parked so batch stays 0% business
10. **[SKIP: already covered 8/13]** G0.5, SMPC Spot/G1, HandEdit, StellaVLA, field recomposition, hand priors
11. **[SKIP: already covered 8/12]** CASBOT Hands, Nucleus, Flex-π, Surgical WAM, confined-space, bimanual grasp, gated VLA, hip hopping, TCAM, RHOAS, Semantic-3DGS, FACT, BooST, crowd-follow
12. **[SKIP: event / thin]** RoboBusiness panel, ARM Institute call, TRR mobile-manipulators ebook
13. **[SKIP: leftover]** S2-HWM surgical world model, RoboSynChallenge, D3D-GEN, Decoding alternatives, Capstan surgical continuum

### Selected for Writing (ranked) — 8 articles
| # | slug | author | category | lane |
|---|------|--------|----------|------|
| 1 | bioflexbot-pneumatic-hand | Shar Hendrix | Robotics | build |
| 2 | humanoid-vln-isaac-benchmark | Robb Harlan | Humanoids | build |
| 3 | nestdex-copilot-teleop | Shar Hendrix | Robotics | build |
| 4 | contactguard-precontact-monitor | Robb Harlan | Robotics | build |
| 5 | h2r-bench-human-to-robot-video | Shar Hendrix | AI | build |
| 6 | temporal-grpo-vla-credit | Robb Harlan | AI | build |
| 7 | seeker-attention-from-action | Shar Hendrix | AI | build |
| 8 | vla-task-progress-probe | Robb Harlan | AI | build |

### Mix check
- Build/innovate: 8 | Business/industry: 0 | Business share: 0% (≤25%)

### Volume note
- Slot: Morning | Target: 8 | Hard max: 8 | Soft floor: 3 | Solid candidates with primary/secondary depth + usable stills: **8** | Writing: **8**
- Soft floor 3 met; hit target (BioflexBot hardware leftover + seven Fri 14 Aug arXiv build papers)

### Notes for Future Agents
- Unitree STAR actual pricing (CNBC Aug 14: 150.8 yuan, ~\ raise, ~\ value, 5,000× retail oversub) is a new development vs unitree-star-market-ipo-csrc — afternoon may take it if business lane is empty
- BioflexBot: Wiley PDF/figures still Cloudflare 403; only TRR reprint of Advanced Science Fig. 7 is fetchable here
- HumanoidVLN unitreeg1.webp on the project page does **not** look like a Unitree G1; do not caption it as G1
- S2-HWM (2608.13103) and RoboSynChallenge remain unused
- Afternoon: do not rehash this morning eight

### Run summary
- **Articles published (8):** listed above
- **X list accessible?** Partial/noisy (N for clean feed; disclosed)
- **Media verify:** pending
- **Vision gate:** pending
- **Social:** pending
- **Push:** pending
