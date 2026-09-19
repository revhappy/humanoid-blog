---
title: "SkipVLA Lets the Motion Planner Drive, and the VLA Only Grab"
description: "Purdue’s hybrid policy hands free-space transit to VAMP or cuRobo. On a YAM arm it finishes up to 2.5× faster with the same success, and uses less Jetson energy."
pubDate: 2026-09-19
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/skipvla-planner.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A vision-language-action model is slow in empty air. Crossing the table to a block is geometry. Grasping the block is not. **Kaivalya Agrawal**, **Md Ashiqur Rahman**, **Raymond A. Yeh**, and **Zachary Kingston** (Purdue) posted [arXiv:2609.20648](https://arxiv.org/abs/2609.20648) on **17 September 2026** with a split that takes that seriously.

**SkipVLA** keeps a pretrained VLA frozen. A classical planner flies the arm through free space. The VLA is queried for contact: grasp, place. Gripper open/close is the handoff signal.

<figure>
  <img src="/images/heroes/skipvla-planner.jpg" alt="YAM robot arm overlaid in three colors showing planner transit to a red block, then to a box for placing" loading="lazy" />
  <figcaption>Planner for the arc, VLA for the pinch. Source: Agrawal et al., arXiv:2609.20648.</figcaption>
</figure>

## No new demonstrations

A small scoring head sits on the frozen vision-language tokens. FastSAM plus DBSCAN propose object boxes. The head picks which box to hover over. Labels come from existing demos: at each gripper event, the nearest box is the target for the preceding transit. No extra annotation, no VLA retraining.

They plug the same wrapper onto **π0.5**, **SmolVLA**, and **MolmoAct2**, with **VAMP** or **cuRoboV2** as the planner.

LIBERO-Object, 10 pick-and-place tasks, 50 trials each. π0.5 stays at **99.0%** success. Wall-clock **8.33 s → 5.27 s** with VAMP. VLA queries **17.0 → 10.6**. SmolVLA is the surprise: success **39.0% → 82.0%** with cuRoboV2. The authors blame shorter VLA segments for less compounding error.

LIBERO-10 (longer horizon) is milder for π0.5 (**15.69 s → 13.84 s**) and still a lift for SmolVLA (**5.3% → 29.3%**).

<figure>
  <img src="/images/heroes/skipvla-planner-2.jpg" alt="LIBERO episode of picking alphabet soup into a basket with planner versus VLA control shaded on a timeline" loading="lazy" />
  <figcaption>On this soup-to-basket run the planner owns 54% of the 6.8 s. Source: Agrawal et al., arXiv:2609.20648.</figcaption>
</figure>

## A YAM arm, a Jetson, less joules

Real robot: 6-DoF **YAM**, **20** trials per task, onboard **NVIDIA Jetson Thor**. Tasks: put the red block in the box, put red and blue in the box, stack three blocks.

Versus the frozen VLA alone, wall-clock drops **30.6%** on π0.5 and **46.0%** on MolmoAct2 (up to **59.6%**, a **2.47×** speedup). VLA queries fall **33.8%** on average. Jetson energy per successful trial: **−29.1%** (π0.5), **−52.4%** (MolmoAct2). Multi-object placement goes from **90%** to **100%** on both backbones. Precision stacking rises **15** percentage points for π0.5 and **10** for MolmoAct2.

The limit is the indicator. It assumes every contact skill ends with a gripper toggle. That is pick-and-place. It is not wiping a table.

## A Human's Take

I have been waiting for someone to stop running a billion-parameter net through empty Cartesian space. The energy number on Thor is the one I would take to a deployment meeting. Same success, half the joules, because the planner is allowed to be a planner. If your “generalist” spends most of the episode reaching, you do not have a generalist problem. You have a routing problem.

## Sources

- [arXiv:2609.20648 — SkipVLA: Skipping VLA Steps with Classical Planning for Fast Robot Manipulation](https://arxiv.org/abs/2609.20648)
- [arXiv HTML — LIBERO tables, YAM stills, and Jetson energy](https://arxiv.org/html/2609.20648v1)
