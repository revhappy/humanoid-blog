---
title: "SafeHarness Makes a Coding Agent Detour the Wine Bottle"
description: "USC’s obstacle-aware harness lifts GPT-6 on SafeLIBERO to 71.9% task success and 87.5% collision avoidance, 2.3× and 1.5× the unharnessed agent."
pubDate: 2026-09-20
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/safeharness-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A coding agent can write the controller. It is much worse at treating “do not hit that” as a first-class goal. **Bingxin Xu**, **Yuzhang Shang**, **Zhen Dong**, and **Emilio Ferrara** posted **SafeHarness** ([arXiv:2609.20822](https://arxiv.org/abs/2609.20822)) on **17 September 2026**.

The prompt already says not to touch the obstacle. The traces mention it. The arm still drives through it. The authors locate the miss in planning, not perception: no clearing route, no replan, and a contact that ignores the same constraint.

<figure>
  <img src="/images/heroes/safeharness-2.jpg" alt="Simulation sequence of a robot arm detouring a wine bottle to put orange juice in a basket" loading="lazy" />
  <figcaption>Verified detour around the bottle, then the pour. Source: Xu et al., arXiv:2609.20822, Fig. 3.</figcaption>
</figure>

## Two harnesses, one frozen VLA

**Obstacle-aware route planning** grounds target and obstacle as boxes (SAM-3), draws waypoints, verifies the polyline against the box, executes only a cleared path, and replans if the arm gets stuck.

**Obstacle-aware contact execution** checks whether an obstacle sits next to the grasp or place pose and approaches from the far side, or rotates the wrist and drops vertically if no side is clear.

The loop, skill memory, and frozen **π0.5** from Harness VLA stay unchanged. The harness is the difference.

## SafeLIBERO

**SafeLIBERO** plants one extra object (moka pot, bottle, mug, book, and so on) on four tasks from each of LIBERO’s Spatial, Goal, Object, and Long suites. Level I puts the obstacle next to the target. Level II puts it on the transport path. **10** seeds per task, **32** tasks.

With **GPT-6**, SafeHarness reports **71.9%** task success and **87.5%** collision avoidance. That is **+6.5** and **+27.0** points over the previous SOTA they cite (**AEGIS**, a barrier layer on π0.5). Versus the same coding agent without harnesses: **2.3×** success and **1.5×** collision avoidance.

A frozen π0.5 alone, in their table, sits around **57.8%** success and **17.1%** collision avoidance. AEGIS lifts safety into the high sixties and does not lift success with it. On Long, the filter can even cost completions. SafeHarness is the row that moves both columns.

<figure>
  <img src="/images/heroes/safeharness.jpg" alt="Diagram of SafeHarness route and contact tools versus an agent that hits a mug, with SafeLIBERO bar charts" loading="lazy" />
  <figcaption>Safety in the tools, not in a sentence at step zero. Source: Xu et al., arXiv:2609.20822, Fig. 1.</figcaption>
</figure>

Ablations: a stronger planner (GPT-6 vs GPT-5.5) helps local “which side to grasp” and barely helps the long route. Once the harness verifies the path, the two planners land close together on safety. Evaluation is simulation-first. One obstacle, axis-aligned box.

## A Human's Take

This is the same lesson as SkipVLA, aimed at collisions instead of joules: put the constraint where the robot moves, not in a system prompt that is 300 steps old. I will take 87.5% collision avoidance over a model that “knows” the bottle and still hits it. I still want the same harness on a real YAM before I retire the fence.

## Sources

- [arXiv:2609.20822 — Coding Agents with an Obstacle-Aware Harness](https://arxiv.org/abs/2609.20822)
- [arXiv HTML — SafeLIBERO tables, ablations, wine-bottle rollout](https://arxiv.org/html/2609.20822v1)
