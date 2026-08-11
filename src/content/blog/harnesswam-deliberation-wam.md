---
title: "HarnessWAM Adds Planning Memory on Top of World Action Models"
description: "Agentic harness lifts RoboMemArena full-task success to 59.6% by closing the prediction–deliberation gap."
pubDate: 2026-08-11
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/harnesswam.jpg"
readTime: "5 min read"
featured: false
draft: false
---

World Action Models (WAMs) are good at short-horizon “what happens if I move like this.” They are worse at remembering which drawer was full after it closed, deciding when a subtask is actually done, or recovering without throwing away the whole plan.

**HarnessWAM**, from CASIA and collaborators including Yinwang Intelligent Technology (arXiv:2608.09516, Aug 10, 2026), names that mismatch the **prediction–deliberation gap** and builds a model-external **agentic harness** around a frozen-style WAM executor (LingBot-VA in the experiments).

<figure>
  <img src="/images/heroes/harnesswam.jpg" alt="HarnessWAM vs conventional WAM on a multi-drawer memory task" loading="lazy" />
  <figcaption>Conventional WAM fails a hidden-target place; HarnessWAM explores, binds the target, then executes. Source: arXiv:2608.09516.</figcaption>
</figure>

## How the harness works

A **VLM Task Manager** (Qwen3-VL-32B-Instruct, not task-finetuned) keeps an evidence-grounded **scene belief** and a **task graph** of motor and cognitive nodes. Unresolved entities stay symbolic until visual evidence binds them. A **capability-conditioned executable-space projection** compiles open semantic plans into primitives the WAM has actually validated — checking dependencies, gripper holding state, and preconditions. Invalid plans get sent back instead of blindly executed.

Execution is dual-timescale: a lightweight **progress estimator** runs at high frequency on recent RGB; the Task Manager deliberates only on events (milestones, budget hits, failures). Decisions include continue, advance, observe, replan, recover, or terminate. **Recovery** restores the arm and gripper toward the subtask-start embodiment state while **keeping** acquired scene knowledge.

<figure>
  <img src="/images/heroes/harnesswam-2.jpg" alt="HarnessWAM architecture with Task Manager and executable projection" loading="lazy" />
  <figcaption>Task Manager, executable-space projection, and event-driven WAM loop. Source: arXiv:2608.09516.</figcaption>
</figure>

## Results

On **RoboMemArena** (26 long-horizon tasks, average ~1,076 steps, 68.9% of subtasks history-dependent), HarnessWAM reports **59.6%** full-task success and **69.9%** subtask success — above PrediMem and above same-WAM diagnostics that only use a global instruction or a static plan. On **RoboCerebra Ideal**, success rate is **23.7%**, slightly above GPT-4o Planner + OpenVLA and the HPE Framework under the paper’s table.

Ablations are blunt: removing executable-space projection drops average full-task success from **59.6%** to **18.5%**. Plan-quality diagnostics show raw VLM plan executability at **13.8%**, rising to **72.9%** after full projection. Removing recovery or progress-conditioned events also hurts, especially on sequential tasks.

<figure>
  <img src="/images/heroes/harnesswam-3.jpg" alt="Keyframes of drawer exploration and object place with HarnessWAM" loading="lazy" />
  <figcaption>Representative multi-drawer rollout with delayed target binding. Source: arXiv:2608.09516.</figcaption>
</figure>

## A Human's Take

I am glad someone wrote “the model is fine; the loop is wrong” without pretending the WAM itself grew a hippocampus. Projection is the star: open language plans that cannot be grounded in executable skills are just confident fiction. Fifty-nine percent full-task on a memory benchmark is still a lab score, not a factory KPI, but the ablation table is the kind of receipts that make agentic robotics feel less like vibes. Next step I care about is the same harness on a second WAM and a real dual-arm cell without privileged sim state.

## Sources

- [arXiv:2608.09516 — HarnessWAM: Bridging Prediction and Deliberation in World Action Models](https://arxiv.org/abs/2608.09516)
- [arXiv HTML full text](https://arxiv.org/html/2608.09516v1)
