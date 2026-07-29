#Requires -Version 5.1
<#
.SYNOPSIS
  Daily HUMANOID blog article pipeline - launches Grok headless at a fixed clock time.

.DESCRIPTION
  Invoked by Windows Task Scheduler (default: 12:30 PM Pacific).
  Runs Grok with scripts/daily-article-pipeline.md against this repo.
  Logs stdout/stderr under logs/daily-YYYY-MM-DD.log

.NOTES
  Disable auto-run: Task Scheduler -> HumanoidBlog-DailyArticles -> Disable
  Manual: .\scripts\run-daily-pipeline.ps1
  Re-run same day: .\scripts\run-daily-pipeline.ps1 -Force
  No auto-approve: .\scripts\run-daily-pipeline.ps1 -NoYolo
#>

[CmdletBinding()]
param(
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
$LogFile = Join-Path $LogDir "daily-$Stamp.log"
$LockFile = Join-Path $LogDir "daily-$Stamp.lock"

if ((Test-Path -LiteralPath $LockFile) -and -not $Force) {
  $msg = "[$TimeStamp] SKIP: lock exists ($LockFile). Use -Force to re-run."
  Add-Content -LiteralPath $LogFile -Value $msg
  Write-Host $msg
  exit 0
}

"$TimeStamp starting" | Set-Content -LiteralPath $LockFile -Encoding utf8

function Write-Log {
  param([string]$Message)
  $line = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $Message"
  Add-Content -LiteralPath $LogFile -Value $line
  Write-Host $line
}

Write-Log "=== Daily pipeline start ==="
Write-Log "Repo: $RepoRoot"
Write-Log "Grok: $Grok"
Write-Log "Prompt: $PromptFile"

$extraPaths = @(
  "C:\Program Files\Git\cmd",
  "C:\Program Files\nodejs",
  (Join-Path $env:USERPROFILE "AppData\Roaming\npm"),
  (Join-Path $env:USERPROFILE ".grok\bin")
) | Where-Object { Test-Path -LiteralPath $_ }

$env:Path = ($extraPaths -join ";") + ";" + $env:Path

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
  Write-Log "=== Daily pipeline end ==="

  if ($exitCode -ne 0) {
    exit $exitCode
  }

  ("ok " + $TimeStamp + " exit=" + $exitCode) | Set-Content -LiteralPath $LockFile -Encoding utf8
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
