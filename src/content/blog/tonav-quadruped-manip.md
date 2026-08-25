---
title: "TONAV Walks a Go2-W to the Drawer, Then Closes It With Velocity"
description: "Hunan University’s TONAV pairs last-meter navigation with action-velocity chunks on a Unitree Go2-W. Manipulation success hits 80% with P–V teleop."
pubDate: 2026-08-25
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/tonav-quadruped-manip.png"
readTime: "5 min read"
featured: false
draft: false
---

Most mobile-manip papers stop the base “near” the furniture and hope the arm can reach. **TONAV**, from Hunan University, treats that last meter as the job. A Unitree **Go2-W** with two **Piper** arms has to park in a pose that can actually close a drawer, flick a lamp, or lower a toilet lid, then keep contact without jitter.

Posted to arXiv August 23, with a project page of bedroom experiments. Navigation success across those three tasks is **60%** overall (**4/5**, **3/5**, **2/5**). StreamVLN is **13.33%**, InternNav **26.67%**. Once the base is in the manipulation-ready region, TONAV’s arm policy with position-velocity teleop data hits **80%** on all three tasks (**4/5** each).

<figure>
  <img src="/images/heroes/tonav-quadruped-manip.png" alt="Three views of a wheeled quadruped with dual arms approaching a bedroom drawer" loading="lazy" />
  <figcaption>Coarse approach, fine approach, then close-the-drawer. Source: TONAV project page.</figcaption>
</figure>

## Stop where the arm can work

Perception-Planning Chain-of-Thought asks **Qwen-3.7-Max** to name the target and landmarks, then write turn-by-turn subgoals. An Adaptive Approach Module tracks the object with SAM2, a Kalman filter, and a stand-off distance picked for the arm workspace, not “as close as possible.”

Ablation: drop PP-CoT and overall nav falls to **26.67%** with the same Qwen model. Doubao-Seed-2.1-Pro with PP-CoT is **46.67%**.

## Velocity in the chunk

Teleop runs **220 Hz** impedance tracking with joint velocity in the command, cameras at **30 Hz**. The policy is ACT-style CVAE with a second head for velocity and a consistency loss so predicted Δq matches predicted q̇. Position-only ACT and Diffusion Policy sit at **13.33%** overall on the same start poses. TONAV without P–V data is **53.33%**; with it, **80%**.

<figure>
  <img src="/images/heroes/tonav-quadruped-manip-2.png" alt="Go2-W approaching a cabinet and graphs comparing jittery position-only tracking to smoother position-velocity tracking" loading="lazy" />
  <figcaption>Position-only lag versus position-velocity coupling. Source: TONAV paper Fig. 1.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/tonav-quadruped-manip-4.png" alt="Labeled bedroom setup with Unitree Go2-W, Piper master and follower arms, drawer, and lamp" loading="lazy" />
  <figcaption>Real-world cell: Go2-W, Piper arms, drawer and lamp. Source: TONAV paper Fig. 10.</figcaption>
</figure>

Five trials per cell is small. The paper is honest about that. The qualitative claim is less oscillation on Piper joints 1–3 while the drawer runs.

## A Human's Take

“Near the drawer” is how a lot of demos fail in kitchens. Parking on purpose, then teaching the arm how fast to push, is the right split. I want a larger trial count and a house that is not this one bedroom. The 80% with velocity in the chunk is still the number I will watch people try to copy.

## Sources

- [arXiv:2608.22296 — TONAV](https://arxiv.org/abs/2608.22296)
- [HTML paper](https://arxiv.org/html/2608.22296v1)
- [Project page](https://haochen611.github.io/TONAV)
