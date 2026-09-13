---
title: "Dist-GPRL Pulls Bars Off a Moving Conveyor Without Hitting the Neighbor"
description: "UTS trains a UR5e to adapt demonstrated skills around moving obstacles; hardware success hits 90% versus 10% for the prior GP baseline."
pubDate: 2026-09-13
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/dist-gprl.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A UR5e with a hook has to lift one bar off a moving conveyor and miss the other bar and the rollers. **Dist-GPRL**, posted **10 September** on arXiv by **A K M Nadimul Haque**, **Sheila Sutjipto**, **Marc G. Carmichael**, and **Teresa Vidal-Calleja** at the University of Technology Sydney, is a safety-shaped way to adapt a demonstrated skill when the scene keeps moving.

The paper is accepted at **IROS 2026**.

<figure>
  <img src="/images/heroes/dist-gprl.jpg" alt="Simulation of a robot hooking bars on a conveyor above a real UR5e with a hook and two bars on rollers" loading="lazy" />
  <figcaption>Dynamic bar task in PyBullet (top) and on the real UR5e (bottom). Source: Haque et al., arXiv:2609.11433, Figure 1.</figcaption>
</figure>

## What they changed

Earlier Gaussian-process skill adaptation (**GPRL**) updates every via-point at once. That is a big action space, and credit assignment gets messy when a collision happens. Dist-GPRL instead:

- Updates **overlapping local windows** of via-points (**15** via-points per axis, three windows of **5**, one-point overlap).
- Multiplies raw policy outputs by the GP covariance so neighboring via-points move together.
- Biases exploration with a **Hausdorff Approximation Planner** safe subspace.
- Adds Euclidean distance-field penalties and a gradient-alignment reward so the hook veers toward clearance.

A cosine-similarity term tries to keep the demonstrated velocity profile. The authors are explicit: this is empirical safety, not a formal guarantee.

## Numbers

Two PyBullet tasks on a UR5e: **dynamic cube pushing** (moving cube, moving obstacle, wall and plane) and **dynamic bar manipulation**. Object start poses vary up to **20 cm**.

On cube pushing, Dist-GPRL reaches **89%** success and **5%** collisions. On bar manipulation, **98%** success and **1%** collisions. The paper says baseline GPRL posts the lowest success and the highest collision rates on both tasks.

Hardware, **10** bar-removal episodes with randomized bar poses, policy transferred one-shot using a live distance field (**IDMP**) and ArUco markers:

| Method | Success | Collision |
|--------|---------|-----------|
| GPRL | 10% | 70% |
| ProMP-RRL | 0% | 20% |
| Dist-GPRL-Global | 50% | 20% |
| **Dist-GPRL** | **90%** | **10%** |

Adaptation time per episode is about **19.3 ms** on an i7-1185G7: **4 ms** distance queries, **2 ms** local GP, **0.5 ms** policy, times three windows.

<figure>
  <img src="/images/heroes/dist-gprl-2.jpg" alt="Close-up of a UR5e hook colliding with a bar versus lifting it cleanly" loading="lazy" />
  <figcaption>Baseline GPRL collides (left); Dist-GPRL lifts the marked bar (right). Source: arXiv:2609.11433, Figure 4.</figcaption>
</figure>

Limits: GP extrapolation can get jumpy near the end of a push; sensor noise is not in the current model; no constrained-RL safety layer yet.

## A Human's Take

Ninety percent on a real conveyor with a moving neighbor is the kind of number I will remember. Windowing the via-points is a small structural change that made the old GP adapter usable. I still want a hard stop when the distance field says zero, not just a nicer reward.

## Sources

- [arXiv:2609.11433 — Safety-aware Skill Adaptation for Reinforcement Learning in Dynamic Environments](https://arxiv.org/abs/2609.11433)
- [arXiv HTML — Dist-GPRL paper with figures](https://arxiv.org/html/2609.11433v1)
