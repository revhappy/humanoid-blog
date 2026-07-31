#Requires -Version 5.1
<#
.SYNOPSIS
  Register or update the two Mechafeed daily pipeline scheduled tasks.

.DESCRIPTION
  Creates:
    HumanoidBlog-Morning   — 9:00 AM local (use Pacific machine clock) — up to 8 articles
    HumanoidBlog-Afternoon — 2:00 PM local — up to 6 articles

  Disables the legacy single task HumanoidBlog-DailyArticles if present.
  Enables "wake the computer to run this task" (still needs Windows wake timers allowed).

.NOTES
  Run once (normal user is fine for your own tasks):
    powershell -File scripts/register-daily-tasks.ps1
#>

$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$ScriptPath = Join-Path $RepoRoot "scripts\run-daily-pipeline.ps1"
if (-not (Test-Path -LiteralPath $ScriptPath)) {
  throw "Missing $ScriptPath"
}

function Register-PipelineTask {
  param(
    [string]$TaskName,
    [string]$Slot,
    [string]$TimeHHmm,  # "09:00", "14:00"
    [string]$Description
  )

  $arg = "-NoProfile -ExecutionPolicy Bypass -File `"$ScriptPath`" -Slot $Slot"
  $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument $arg -WorkingDirectory $RepoRoot
  $trigger = New-ScheduledTaskTrigger -Daily -At $TimeHHmm
  $settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -WakeToRun `
    -ExecutionTimeLimit (New-TimeSpan -Hours 6)
  # Run only when user is logged on (matches prior Interactive task; Grok/user profile)
  $principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Limited

  Register-ScheduledTask `
    -TaskName $TaskName `
    -Action $action `
    -Trigger $trigger `
    -Settings $settings `
    -Principal $principal `
    -Description $Description `
    -Force | Out-Null

  Write-Host "Registered $TaskName at $TimeHHmm daily (Slot=$Slot)"
}

Register-PipelineTask `
  -TaskName "HumanoidBlog-Morning" `
  -Slot "Morning" `
  -TimeHHmm "09:00" `
  -Description "Mechafeed morning pipeline (Grok). 9:00 AM local/Pacific. Target up to 8 articles. scripts/daily-article-pipeline.md"

Register-PipelineTask `
  -TaskName "HumanoidBlog-Afternoon" `
  -Slot "Afternoon" `
  -TimeHHmm "14:00" `
  -Description "Mechafeed afternoon pipeline (Grok). 2:00 PM local/Pacific. Target up to 6 articles. scripts/daily-article-pipeline.md"

# Retire legacy single daily task
$legacy = Get-ScheduledTask -TaskName "HumanoidBlog-DailyArticles" -ErrorAction SilentlyContinue
if ($legacy) {
  Disable-ScheduledTask -TaskName "HumanoidBlog-DailyArticles" | Out-Null
  Write-Host "Disabled legacy task HumanoidBlog-DailyArticles (was 12:30 PM)"
}

Write-Host ""
Write-Host "Done. Confirm in Task Scheduler:"
Write-Host "  HumanoidBlog-Morning   9:00 AM"
Write-Host "  HumanoidBlog-Afternoon 2:00 PM"
Write-Host ""
Write-Host "Notes:"
Write-Host "  - Grok terminal does NOT need to be open."
Write-Host "  - PC should be on and you logged in (Interactive logon)."
Write-Host "  - Sleep: WakeToRun is on; also enable wake timers in Windows Power Options if jobs are missed."
Write-Host "  - Machine clock should be Pacific if you mean 9 AM / 2 PM PST."
