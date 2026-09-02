---
title: "ETH Humanoid Swings Monkey Bars From Onboard Lidar"
description: "ETH Zurich’s PM-01 policy jumps onto bars, brachiates at 0.5 m/s, and lands in 14 of 15 hardware trials using a head-mounted solid-state lidar."
pubDate: 2026-09-02
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/eth-humanoid-monkey-bar.jpg"
readTime: "5 min read"
featured: false
draft: false
---

ETH Zurich’s Robotic Systems Lab posted a paper on **30 August** that puts a humanoid on monkey bars using only a **head-mounted solid-state lidar**. The robot is an **EngineAI PM-01** with homemade **passive hook** hands. The policy completes jump-up, brachiation, and jump-down in **14 of 15** hardware trials across three bar setups, and it swings at up to **0.5 m/s**.

The authors are **Efe Ongan, Chong Zhang, Boyang Sun, Andrei Cramariuc, Cesar Cadena, and Marco Hutter**. Project page: [nemantor.github.io/sparse-3d-traversal-website](https://nemantor.github.io/sparse-3d-traversal-website/). arXiv: [2608.29769](https://arxiv.org/abs/2608.29769).

<figure>
  <img src="/images/heroes/eth-humanoid-monkey-bar.jpg" alt="Humanoid hanging from a bar with hooks, then ducking under a slat, plus lidar attention maps" loading="lazy" />
  <figcaption>Hardware jump-to-bar and duck-under, with the policy’s lidar attention underneath. Source: Ongan et al., arXiv:2608.29769.</figcaption>
</figure>

## Why bars, not stairs

Elevation maps drop thin overhangs. Voxel grids get expensive at the resolution you need for a 1–3 cm radius bar. This policy eats a **decimated RoboSense E1R** scan (192×144 native, 120°×90° field of view) through an attention encoder with GRU memory. Privileged teachers, one each for jump-up, swing, and jump-down, see ground-truth bar endpoints. A student copies them, then gets PPO fine-tuning.

The hooks are a water-jet stainless plate that replaces the hand. Opening admits a **60 mm** circle. Wrist yaw rolls the hook off the bar so the shoulders do not have to lift the whole mass to disengage.

They also modeled the ugly hardware: battery sag (jump-up peaked at **2.11 kW** mechanical joint power and **34.7 V** at the trough), actuator thermal integrators on the 18 low-torque joints, and lidar ray-cone edge bleed. Without the voltage model, the jump browned out the robot. With it, no brownout in any hardware trial.

<figure>
  <img src="/images/heroes/eth-humanoid-monkey-bar-2.jpg" alt="Five-frame sequence of a humanoid jumping to bars, swinging, and landing" loading="lazy" />
  <figcaption>Full jump–swing–land sequence. Source: Ongan et al., arXiv:2608.29769.</figcaption>
</figure>

## The scoreboard

Hardware, from the paper’s Table V:

| Ladder | Height | Spacing | Full-sequence success |
|--------|--------|---------|------------------------|
| A (9 trials) | 1.69 m | 0.26 m | 9/9 |
| B (2) | 1.72 m | 0.31 m | 2/2 |
| C (4) | 1.75 m | 0.33 m | 3/4 |

The one failure: hook did not advance after a clean jump-up. Same perception backbone, separate policy: ducking under **2×2 cm** wooden slats, **10/10** on randomly placed bars, **1.2 m** clearance in the published sequence.

<figure>
  <img src="/images/heroes/eth-humanoid-monkey-bar-4.jpg" alt="Humanoid ducking under thin overhead slats on a wheeled scaffold, heights marked 1.3 m and 1.0 m" loading="lazy" />
  <figcaption>Ducking policy under 2 cm slats. Source: Ongan et al., arXiv:2608.29769.</figcaption>
</figure>

The authors call this the first onboard-sensing demo of the full jump–brachiate–land loop on a general-purpose humanoid. They distinguish it from specialized two-link brachiators and from the University of Tokyo dual-arm brachiation work that assumed known bar positions.

## A Human's Take

Hooks and a lidar that actually looks up is how you get contact on geometry a height map would erase. Fourteen of fifteen is a lab score on three homemade ladders, including ones that shift when loaded, which I respect. 0.5 m/s is in the human brachiation ballpark they cite, on a body that still has to jump onto the first bar without browning out. The next test is a bar the policy has not seen in the gym, outdoors, with sun on the E1R.

## Sources

- [arXiv:2608.29769 — Learning Agile Perceptive Traversal of Sparse 3D Structures for Humanoids](https://arxiv.org/abs/2608.29769)
- [Project page — Sparse 3D Locomotion](https://nemantor.github.io/sparse-3d-traversal-website/)
- [HTML paper with figures](https://arxiv.org/html/2608.29769)
