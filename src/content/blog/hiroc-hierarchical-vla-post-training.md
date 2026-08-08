---
title: "HiRoC Post-Trains VLAs as Planner Plus Subgoal Executor"
description: "Hierarchical Robotic Control freezes a Qwen planner, aligns an OpenVLA executor to subgoals, then runs hierarchical GRPO—98% on LIBERO-Long."
pubDate: 2026-08-08
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/hiroc.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most VLA post-training still treats the robot as a **flat** policy: one global instruction, one action stream. **HiRoC** (Hierarchical Robotic Control), posted **August 6, 2026** as [arXiv:2608.05999](https://arxiv.org/abs/2608.05999), splits that into a **planner that emits subgoals** and an **executor that is RL-tuned to follow them**.

<figure>
  <img src="/images/heroes/hiroc.jpg" alt="Flat VLA failing place-bowl versus HiRoC staged approach-lift-place subgoals" loading="lazy" />
  <figcaption>Flat global instruction vs stage-wise subgoals. Source: arXiv:2608.05999 HTML.</figcaption>
</figure>

## Three training stages

1. **Planner SFT** — Qwen2.5-VL-3B (LoRA) on cleaned VLA-OS-style subgoal labels; then frozen.
2. **Executor subgoal SFT** — OpenVLA-OFT trained on reorganized (observation, subgoal, action-chunk) tuples so it does not cold-start on planner language (**distribution-misalignment** fix).
3. **Hierarchical GRPO** — online RL with group-relative advantages mixing **task-level** and **subgoal-level** progress; only the executor updates.

Replanning runs periodically during rollouts (every 20 policy calls in their sim recipe).

<figure>
  <img src="/images/heroes/hiroc-2.jpg" alt="HiRoC framework diagram for planner SFT, executor SFT, and RL tuning" loading="lazy" />
  <figcaption>Planner SFT, executor alignment SFT, then hierarchical GRPO. Source: arXiv:2608.05999 HTML.</figcaption>
</figure>

## Benchmarks

On **LIBERO** (Spatial / Object / Goal / Long), HiRoC posts strong suite averages versus OpenVLA, SmolVLA, VLA-RL, TGRPO, VAL-OS, and others. Headline numbers from their Table 1 include **95.6 / 98.0 / 96.0 / 98.0** on the four suites for HiRoC (they highlight **98%** on Long). They also claim about a **10%** average improvement over strong baselines in the abstract framing, plus better **LIBERO-Plus** zero-shot under seven perturbation types.

A sim-to-real case places correction fluid in a box on a real arm after training the executor in a matched simulator with **JoyRA-0.1**, no extra real fine-tune.

<figure>
  <img src="/images/heroes/hiroc-3.jpg" alt="Real-world HiRoC experiment placing correction fluid in a box" loading="lazy" />
  <figcaption>Real deployment example from the paper. Source: arXiv:2608.05999 HTML.</figcaption>
</figure>

## A Human's Take

Long-horizon VLAs need intermediate semantic anchors more than another flat GRPO run. Freezing the planner is a practical trade — credit assignment across plan and act on sparse rewards is messy. I want to see how often replanning lies when the bowl is partially occluded; hierarchy only helps if the subgoals stay true.

## Sources

- [arXiv:2608.05999 — HiRoC abstract](https://arxiv.org/abs/2608.05999)
- [arXiv HTML — HiRoC full paper](https://arxiv.org/html/2608.05999v1)
