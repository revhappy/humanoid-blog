---
title: "HiWET Tracks Humanoid Hands in the World Frame"
description: "HiWET's hierarchical RL hits 12.4 mm sim EE error on Unitree G1 and transfers zero-shot for real-world loco-manipulation under arm motion."
pubDate: 2026-08-04
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/hiwet.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most humanoid loco-manipulation stacks command the arms in a **body-centric** frame. That works until the base walks, drifts, and the hand target in the room is no longer where the controller thinks it is. **HiWET** (Hierarchical World-Frame End-Effector Tracking) reformulates the job as **world-frame** end-effector tracking with a two-level RL hierarchy.

Authors from Shanghai Jiao Tong University and collaborators posted [arXiv:2602.06341](https://arxiv.org/abs/2602.06341) (February 6, 2026). Experiments run on a **29-DoF Unitree G1**.

## Hierarchy: commander + tracker

- **High-level world-frame command policy** — takes absolute world end-effector targets and base pose; outputs base velocity, body height, base-relative hand poses, and a waist regularization weight **α**.
- **Low-level whole-body tracking policy** — high-frequency joint targets; upper body uses residual actions around a frozen **Kinematic Manifold Prior (KMP)**; lower body uses absolute joint targets for gait.

Training is two-stage in Isaac Lab: train the tracker first, freeze it, then train the commander. A spatial curriculum expands world-frame target range only after local tracking error drops.

<figure>
  <img src="/images/heroes/hiwet.jpg" alt="HiWET sim and real G1 reaching and trajectory tracking demos" loading="lazy" />
  <figcaption>HiWET sim-to-real capabilities and LED long-exposure trajectories. Source: arXiv:2602.06341 HTML figures.</figcaption>
</figure>

## Numbers that matter

Low-level tracking (Table I in the paper): full HiWET reports **12.4 ± 2.4 mm** end-effector position error in simulation, better than ablations without KMP (**25.2 mm**), without state estimation (**23.0 mm**), or without importance sampling (**16.1 mm**). Linear velocity tracking also improves versus the HOMIE baseline cited in the paper.

Long-horizon world-frame geometric trajectories (star, heart, circle, spiral, rectangle) within **±5 m** of the start are scored successful if average EE error stays under **20 mm**. Ablations without KMP or state estimation show clear distortions and oscillations on heart/star paths.

Real-world zero-shot transfer of the low-level policy: walking while reaching high or tracing a circular hand path. With LiDAR/IMU localization (Livox Mid-360 + Fast-LIO2), circle/square world-frame tasks report **12 mm** / **15 mm** RMSE for full HiWET (Table II), worse when α is fixed or KMP/estimator removed.

<figure>
  <img src="/images/heroes/hiwet-2.jpg" alt="HiWET two-stage hierarchical architecture diagram" loading="lazy" />
  <figcaption>Tracker and commander training stages. Source: arXiv:2602.06341 HTML figures.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/hiwet-3.jpg" alt="Unitree G1 real-world reaching and circular hand path under HiWET" loading="lazy" />
  <figcaption>Real G1 deployment with unilateral reach and circular hand tracking. Source: arXiv:2602.06341.</figcaption>
</figure>

## Limits the authors list

World-frame precision is capped by LiDAR localization; evaluated trajectories are relatively small; high-level experiments emphasize single-arm tracking; contact-rich grasping is left for future work.

## A Human's Take

Body-frame EE tracking is fine for a table-fixed arm on a robot that barely moves. The moment the base walks a shift, world-frame drift eats your grasp. HiWET’s explicit base-transport + height + residual KMP stack is the control diagram I want next to every “loco-manipulation” claim.

## Sources

- [arXiv:2602.06341 — HiWET abstract](https://arxiv.org/abs/2602.06341)
- [arXiv HTML — HiWET full paper](https://arxiv.org/html/2602.06341v1)
