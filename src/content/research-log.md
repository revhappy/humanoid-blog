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

