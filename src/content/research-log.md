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
