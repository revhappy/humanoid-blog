---
title: "UT Austin Walks a G1 Through Holes Tighter Than NIST Specs"
description: "A three-stage whole-body planner plus residual RL threads a Unitree G1 through Cr < 1.5 openings where spline baselines fail."
pubDate: 2026-08-12
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/humanoid-confined-space-planning.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Humanoids do not get stuck on flat ground. They get stuck in holes. **Carlos Gonzalez** and **Luis Sentis** at UT Austin posted a whole-body planner (arXiv:2608.10220, **August 10**) that treats the robot as reachable rigid volumes instead of a particle on a spline. On a simulated **Unitree G1** it threads openings with confinement ratio **Cr < 1.5**, tighter than the NIST emergency-response mobility tests they compare against.

<figure>
  <img src="/images/heroes/humanoid-confined-space-planning.jpg" alt="Eight-frame sequence of a G1 humanoid climbing through an obstructed wooden hole" loading="lazy" />
  <figcaption>G1 crossing an obstructed hole with hand and foot contacts, 1.86 s to 15 s. Source: Gonzalez and Sentis, arXiv:2608.10220.</figcaption>
</figure>

## Three stages, then a residual policy

Stage 1 plans collision-free Bézier paths for torso, feet, and palms inside IRIS convex regions, with a convex stand-in for rigid-link reach. Stage 2 adds differentiable collision between capsules and spheres so those paths stop intersecting the robot itself. Stage 3 transcribes the guides into a full-order trajectory optimization with hard collision inequalities and a two-pass warm start (dynamics first, then collisions). A residual RL policy then tracks the plan in MuJoCo under mass, friction, and push noise.

The G1 here is **27 DoF**. Plans run **12–18 seconds** with palm and foot contacts. Supplementary video is on the authors’ project page.

## Benchmarks that actually pinch

Three testbeds: unobstructed hole, obstructed (non-convex) hole, and tilted stairs. Nominal stance confinement: **Cr = 1.4**, **1.5**, and **2.0**. Ten random start poses per contact sequence.

Full pipeline success (mean solve time):

- Tilted stairs: **10/10** (174 s)
- Unobstructed hole, step over / step on: **10/10** (125 s / 180 s)
- Obstructed hole, left / right step: **7/10** (191 s) and **6/10** (332 s)

Spline guides that ignore knees went **0/10** on both hole tasks. Linear frame interpolation also **0/10** on holes. Skipping Stage 2 (no volume-aware self-collision guides) dropped obstructed-hole left-step success to **1/10**. The learned tracker hit **>95%** traversal under the paper’s domain randomization after **2×10⁸** env steps.

<figure>
  <img src="/images/heroes/humanoid-confined-space-planning-2.png" alt="Diagrams of hole dimensions, tilted stairs, and NIST-style confined-space fixtures" loading="lazy" />
  <figcaption>Author testbeds versus NIST confined-area fixtures. Source: Gonzalez and Sentis, arXiv:2608.10220.</figcaption>
</figure>

The authors say hardware validation is future work. This version is submitted to IEEE.

## A Human's Take

Confined space is the job humanoids keep promising and rarely show. Planning over volumes instead of points is the right geometry. The numbers I trust are the 0/10 baselines on the obstructed hole: if your knee is not in the plan, the optimizer eats the wall. I will care more when a physical G1 repeats that 15-second hole crossing without a perfect map and a 3-minute offline solve.

## Sources

- [arXiv:2608.10220 — Whole-Body Planning for Humanoids Navigating Confined Spaces](https://arxiv.org/abs/2608.10220)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2608.10220v1)
- [Project page — confined-space WBP](https://carlosiglezb.github.io/confined-space-wbp-humanoid/)
