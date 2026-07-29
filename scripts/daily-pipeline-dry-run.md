# Mechafeed — DRY RUN (no publish)

You are testing the scheduled daily pipeline. This is a **DRY RUN**.

## Hard rules for this run
- Do **NOT** `git commit`
- Do **NOT** `git push`
- Do **NOT** create production articles (`draft: false`) or more than **one** optional draft
- Do **NOT** set `featured: true`
- Follow fact rules in AGENTS.md for any research claims

## Steps (complete all)

### 1. Preflight
- Confirm cwd is the Mechafeed repo
- `git status -sb` and `git pull --rebase origin main` (pull is OK; no commit/push after)
- Confirm `scripts/run-daily-pipeline.ps1` and `scripts/daily-article-pipeline.md` exist
- Confirm `grok` is available (already running)
- List count of files in `src/content/blog/`
- Read the last ~80 lines of `src/content/research-log.md`

### 2. Lead scan (same as production)
- Try X list: https://x.com/i/lists/1805786050763087967 — if inaccessible, say so clearly
- Run multiple web searches for humanoid/robotics news (today / this week)
- Gather 8–15 candidate leads with source URLs you actually open

### 3. Score & select
- Check against existing blog posts to avoid duplicates
- Score candidates; rank a production plan of **up to 10** stories you would write tomorrow
- For each planned story: title angle, category, author (Robb or Shar), primary URL, secondary URL if found, media availability (still/video yes-no)

### 4. Research log (required)
Append a section to `src/content/research-log.md`:

```markdown
## YYYY-MM-DD — DRY RUN (no publish)

### Preflight
- ...

### X List Scan
- ...

### Web Search Findings
1. **[CANDIDATE]** ...
...

### Would write (ranked, max 10)
1. ...
...

### Dry-run notes
- Articles written: 0 (or 1 draft if canary)
- Commit/push: skipped by design
```

### 5. Optional canary (only if one story is rock-solid)
- At most **one** file: `src/content/blog/dry-run-canary-*.md` with `draft: true`
- Or skip writing any article and only plan — preferred if short on time
- Still no commit/push

### 6. Final report (in your response)
Summarize for the operator:
- Preflight OK/fail
- X list accessible?
- N candidates / M would-publish
- Top 5 planned headlines
- Any blockers for the real 12:30 PM job (auth, git, images, thin news day)
- Explicit confirmation: no commit, no push

Begin now.
