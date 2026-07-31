#Requires -Version 5.1
<#
.SYNOPSIS
  Mechafeed blog article pipeline — launches Grok headless (Task Scheduler or manual).

.DESCRIPTION
  Two daily slots (Pacific, machine local time if PC is on Pacific):
    Morning   9:00 AM  — target up to 8 articles  (task: HumanoidBlog-Morning)
    Afternoon 2:00 PM  — target up to 6 articles  (task: HumanoidBlog-Afternoon)

  Each slot has its own lock so both can run the same day.
  Writes logs/pipeline-slot.json so the agent prompt knows target/max.
  Logs under logs/daily-YYYY-MM-DD-<slot>.log

.NOTES
  Register/update tasks:  powershell -File scripts/register-daily-tasks.ps1
  Disable: Task Scheduler → HumanoidBlog-Morning / HumanoidBlog-Afternoon → Disable
  Manual morning:   .\scripts\run-daily-pipeline.ps1 -Slot Morning
  Manual afternoon: .\scripts\run-daily-pipeline.ps1 -Slot Afternoon
  Re-run a slot:    .\scripts\run-daily-pipeline.ps1 -Slot Morning -Force
  No auto-approve:  .\scripts\run-daily-pipeline.ps1 -Slot Morning -NoYolo

  Terminal does NOT need to be open. PC must be on (or wake from sleep if wake timers allowed).
#>

[CmdletBinding()]
param(
  [ValidateSet('Morning', 'Afternoon')]
  [string]$Slot = 'Morning',

  [switch]$NoYolo,
  [switch]$Force,
  [int]$MaxTurns = 0
)

$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$agentsPath = Join-Path $RepoRoot "AGENTS.md"
if (-not (Test-Path -LiteralPath $agentsPath)) {
  throw "AGENTS.md not found under $RepoRoot - refusing to run."
}

$PromptFile = Join-Path $RepoRoot "scripts\daily-article-pipeline.md"
if (-not (Test-Path -LiteralPath $PromptFile)) {
  throw "Missing prompt file: $PromptFile"
}

# Per-slot volume (quality floor still applies — never pad)
$slotConfig = @{
  Morning   = @{ Target = 8; HardMax = 8; SoftFloor = 3 }
  Afternoon = @{ Target = 6; HardMax = 6; SoftFloor = 2 }
}
$cfg = $slotConfig[$Slot]
$slotKey = $Slot.ToLowerInvariant()

$Grok = $null
$candidates = @(
  (Join-Path $env:USERPROFILE ".grok\bin\grok.exe"),
  "grok.exe",
  "grok"
)
foreach ($candidate in $candidates) {
  if ($candidate -match '[\\/]' -and (Test-Path -LiteralPath $candidate)) {
    $Grok = $candidate
    break
  }
  $cmd = Get-Command $candidate -ErrorAction SilentlyContinue
  if ($cmd) {
    $Grok = $cmd.Source
    break
  }
}
if (-not $Grok) {
  throw "grok CLI not found. Expected at %USERPROFILE%\.grok\bin\grok.exe"
}

$LogDir = Join-Path $RepoRoot "logs"
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null

$Stamp = Get-Date -Format "yyyy-MM-dd"
$TimeStamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
$LogFile = Join-Path $LogDir "daily-$Stamp-$slotKey.log"
$LockFile = Join-Path $LogDir "daily-$Stamp-$slotKey.lock"
$SlotConfigFile = Join-Path $LogDir "pipeline-slot.json"

if ((Test-Path -LiteralPath $LockFile) -and -not $Force) {
  $msg = "[$TimeStamp] SKIP: lock exists ($LockFile). Use -Force to re-run this slot."
  Add-Content -LiteralPath $LogFile -Value $msg
  Write-Host $msg
  exit 0
}

"$TimeStamp starting slot=$Slot" | Set-Content -LiteralPath $LockFile -Encoding utf8

function Write-Log {
  param([string]$Message)
  $line = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $Message"
  Add-Content -LiteralPath $LogFile -Value $line
  Write-Host $line
}

# Agent reads this at start of the run
$slotJson = @{
  date       = $Stamp
  slot       = $Slot
  target     = $cfg.Target
  hardMax    = $cfg.HardMax
  softFloor  = $cfg.SoftFloor
  startedAt  = (Get-Date).ToString('o')
} | ConvertTo-Json
Set-Content -LiteralPath $SlotConfigFile -Value $slotJson -Encoding utf8

Write-Log "=== Pipeline start slot=$Slot target=$($cfg.Target) hardMax=$($cfg.HardMax) ==="
Write-Log "Repo: $RepoRoot"
Write-Log "Grok: $Grok"
Write-Log "Prompt: $PromptFile"
Write-Log "Slot config: $SlotConfigFile"

$extraPaths = @(
  "C:\Program Files\Git\cmd",
  "C:\Program Files\nodejs",
  (Join-Path $env:USERPROFILE "AppData\Roaming\npm"),
  (Join-Path $env:USERPROFILE ".grok\bin")
) | Where-Object { Test-Path -LiteralPath $_ }

$env:Path = ($extraPaths -join ";") + ";" + $env:Path
$env:MECHAFEED_PIPELINE_SLOT = $Slot
$env:MECHAFEED_PIPELINE_TARGET = "$($cfg.Target)"
$env:MECHAFEED_PIPELINE_HARD_MAX = "$($cfg.HardMax)"

Push-Location -LiteralPath $RepoRoot
try {
  # Headless: use --prompt-file alone (do not pass -p with it).
  # Auto-approve flag for this CLI: --always-approve
  $grokArgs = @(
    "--prompt-file", $PromptFile,
    "--cwd", $RepoRoot,
    "--output-format", "plain"
  )
  if (-not $NoYolo) {
    $grokArgs += "--always-approve"
  }
  if ($MaxTurns -gt 0) {
    $grokArgs += "--max-turns"
    $grokArgs += "$MaxTurns"
  }

  Write-Log ("Invoking: " + $Grok + " " + ($grokArgs -join " "))

  & $Grok @grokArgs *>> $LogFile
  $exitCode = $LASTEXITCODE
  if ($null -eq $exitCode) { $exitCode = 0 }

  Write-Log "Grok exit code: $exitCode"

  # Post-agent machine gate: catch bad media even if the agent skipped verify
  Write-Log "Running media verify (today)..."
  & node ".\scripts\verify-article-media.mjs" --today *>> $LogFile
  $verifyCode = $LASTEXITCODE
  if ($null -eq $verifyCode) { $verifyCode = 0 }
  Write-Log "Media verify exit code: $verifyCode"

  if ($verifyCode -ne 0) {
    Write-Log "Media verify FAILED - quarantining bad posts (draft: true) and attempting safety commit"
    & node ".\scripts\verify-article-media.mjs" --today --quarantine *>> $LogFile

    & git add "src/content/blog" 2>$null
    $pending = & git status --porcelain "src/content/blog"
    if ($pending) {
      & git commit -m "Quarantine posts that failed media verify (draft: true)" *>> $LogFile
      & git push origin main *>> $LogFile
      Write-Log "Quarantine commit pushed (or attempted)"
    } else {
      Write-Log "No draft changes to commit after quarantine"
    }

    Write-Log "=== Pipeline end slot=$Slot (media verify failed) ==="
    ("error " + $TimeStamp + " media-verify-failed") | Set-Content -LiteralPath $LockFile -Encoding utf8
    exit 1
  }

  Write-Log "=== Pipeline end slot=$Slot ==="

  if ($exitCode -ne 0) {
    exit $exitCode
  }

  ("ok " + $TimeStamp + " slot=" + $Slot + " exit=" + $exitCode) | Set-Content -LiteralPath $LockFile -Encoding utf8
  exit 0
}
catch {
  $err = $_.Exception.Message
  Write-Log "FATAL: $err"
  ("error " + $TimeStamp + " " + $err) | Set-Content -LiteralPath $LockFile -Encoding utf8
  exit 1
}
finally {
  Pop-Location
}
