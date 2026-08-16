---
title: "ASPIRE-VINS Puts Extra Knots Where the Robot Actually Turns"
description: "A KAIST RA-L paper makes continuous-time VIO spend spline knots on fast motion. Mean RMSE is 0.212 m on a UAV-style benchmark."
pubDate: 2026-08-16
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/aspire-vins.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Visual-inertial odometry usually locks its state to camera frames, or it uses a spline with knots every N milliseconds whether you are standing still or whipping a stairwell. **ASPIRE-VINS** (**arXiv:2608.12840**, accepted to **IEEE Robotics and Automation Letters**, June 2026) tries to spend those knots only where the motion needs them.

Authors: Kwangyik Jung, Eungchang Mason Lee, Taekjun Oh, and Hyun Myung.

<figure>
  <img src="/images/heroes/aspire-vins.jpg" alt="Diagram of 3D measurement-space residual versus 2D reprojection" loading="lazy" />
  <figcaption>3D-MSR: align a feature to the camera ray instead of a pixel error. Source: arXiv:2608.12840.</figcaption>
</figure>

## Three pieces

- **Adaptive knot placement (AKP):** knot spacing shrinks when filtered velocity changes a lot, clipped to **0.03–0.25 s**.
- **Multi-resolution splines (MRS):** three levels. Coarse keeps the path smooth; finer levels add local wiggle in the tangent space.
- **3D measurement-space residuals (3D-MSR):** instead of 2D reprojection, they push the triangulated point onto the calibrated bearing ray. Depth still comes from multi-view triangulation. Pure rotation does not make depth observable. They say that out loud.

Camera **30 Hz**, IMU **400 Hz**, spline order **4**. Solver is **Ceres**.

## What they beat

On nine sequences from a UAV-style VIO benchmark (square / circle / infinity × normal / fast / head-turn), ASPIRE-VINS mean **ATE RMSE is 0.212 m**, about **5.36%** under the best listed continuous-time baseline, **OKVIS-CT** (**0.224 m**). Gains show up on the fast and head-turning runs. On square-normal, **Ctrl-VIO** is slightly better.

Runtime on an **i7-7567U**: **56 ms/frame (~18 FPS)**. Faster than OKVIS-CT (**87 ms**) and about even with Ctrl-VIO (**63 ms**). The square-root filter **√VINS** is much quicker (**18 ms**).

<figure>
  <img src="/images/heroes/aspire-vins-2.jpg" alt="Handheld rig with RealSense D435, Xsens MTi-300, and Velodyne VLP-16" loading="lazy" />
  <figcaption>Custom handheld rig used for stair and indoor-to-outdoor tests. Source: arXiv:2608.12840.</figcaption>
</figure>

They also ran two campus handheld sets (multistory stairs; indoor-to-outdoor glass) with **PALoc** LiDAR ground truth, plus Hilti-Oxford **exp04 / 05 / 06 / 18**. Across those six, mean RMSE is **0.454 m**. Stairs: **0.240 m**. Hilti exp18 (spiral staircase): **0.379 m**.

<figure>
  <img src="/images/heroes/aspire-vins-3.jpg" alt="3D stair trajectory overlay and translation-error box plots" loading="lazy" />
  <figcaption>Multistory stairs: trajectories versus PALoc, plus error over time. Source: arXiv:2608.12840.</figcaption>
</figure>

## A Human's Take

Uniform knots are lazy. If you are going to pay for a continuous-time backend, make it spend degrees of freedom on the landing, not the hallway. 18 FPS on a 2017 laptop is honest. I still want this on a walking humanoid before I retire the discrete filter.

## Sources

- [arXiv:2608.12840 — ASPIRE-VINS HTML](https://arxiv.org/html/2608.12840)
- [arXiv:2608.12840 — abstract](https://arxiv.org/abs/2608.12840)
