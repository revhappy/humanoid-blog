---
title: "HIL-UMI Fine-Tunes a VLA Without Rolling the Robot"
description: "Peking and JD’s HIL-UMI collects policy-blind spots on a handheld UMI gripper, 5.63× faster than real-robot HG-DAgger."
pubDate: 2026-09-18
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/hil-umi-vla-3.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most VLA post-training still means running the policy on a real arm and grabbing the joystick when it stalls. **HIL-UMI** moves that loop onto a handheld Universal Manipulation Interface gripper. The human demonstrates. The current policy predicts on the same camera stream and **never executes**. Where the two disagree, the system keeps the clip.

The paper is [arXiv:2609.20659](https://arxiv.org/abs/2609.20659), submitted **17 September**. Project page: [hil-umi.github.io](https://hil-umi.github.io). Authors span Xi’an Jiaotong, Peking University, PrimeBot, and JD Technology.

<figure>
  <img src="/images/heroes/hil-umi-vla-3.jpg" alt="Franka-style gripper folding a towel, sorting drawers, stacking cubes, and stamping paper" loading="lazy" />
  <figcaption>Four evaluation tasks on a Franka arm. Source: arXiv:2609.20659.</figcaption>
</figure>

## Four tasks, one Franka

All scoring is on a **Franka** arm. Each checkpoint gets **10 trials** with object starts varied in a **30 cm × 60 cm** workspace. The metric is Task Progress Score (TPS), 0–100, with partial credit.

- **Fold Towel:** flatten, two folds, into a basket (**+25** each)
- **Clean Up Table:** pens into color slots, toys into a second drawer, open/close both drawers
- **Stack Cube:** purple cube onto red
- **Stamp:** stamp body inside a box **1 cm** larger than the stamp on each side

They adapt open-source **π₀.₅**. Long-horizon tasks start from **50** UMI demos and add **12,000 frames** per round. Stack Cube and Stamp start from **80** demos and **2,500 frames**. SFT is the same budget with ordinary UMI recordings.

A separate Energy Score on **N = 10** policy samples flags out-of-distribution states. An advantage model, queried every **K = 50** steps, labels how much a clip actually helps. Mixed training uses **α = 0.5** new vs base data. Detector latency: **112 ms** (policy) and **93 ms** (advantage).

<figure>
  <img src="/images/heroes/hil-umi-vla.jpg" alt="Side-by-side of robot HG-DAgger versus handheld HIL-UMI collection and a TPS chart" loading="lazy" />
  <figcaption>Teaser: robot-free collection vs HG-DAgger. Source: arXiv:2609.20659.</figcaption>
</figure>

## Faster than teaching on the arm

On Clean Up Table, HIL-UMI finishes about **five TPS points** above real-robot **HG-DAgger** at the same stage budget. Collection time is the headline: HG-DAgger takes **412.99 ms/frame**. HIL-UMI takes **73.40 ms/frame** on that task — the paper’s **5.63×**. Per-task handheld times still beat SFT’s simpler recording on progress, even though HIL-UMI is slower per kept frame than plain SFT (for example **91.92 vs 69.43 ms** on Fold Towel).

A threshold ablation on Stack Cube, with **(τP, τA) = (1.2, 0.2)**, goes **84 → 86 → 90 → 100** TPS across base and three rounds. Looser or tighter gates stall below that.

The gripper stack in Figure 2 is a **Meta Quest 3** controller, an **Intel RealSense D405** wrist camera, an **AgiBot OmniPicker**, a Quest 3 headset, and a **D455** front camera.

<figure>
  <img src="/images/heroes/hil-umi-vla-2.jpg" alt="Labeled HIL-UMI handheld gripper with Quest 3 controllers, RealSense cameras, and OmniPicker" loading="lazy" />
  <figcaption>UMI hardware used for robot-free collection. Source: arXiv:2609.20659.</figcaption>
</figure>

## A Human's Take

Taking the policy off the robot during data collection is the part I want copied. Five-point TPS over HG-DAgger is modest. **5.63×** less time per frame is not. The catch is the same as every UMI paper: the gripper is not the Franka, and the paper still evaluates on one arm in one cell. If distributed operators can actually feed π₀.₅ this way, the next chart I want is TPS versus number of cities, not versus number of rounds on one table.

## Sources

- [arXiv:2609.20659 — HIL-UMI](https://arxiv.org/abs/2609.20659)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.20659)
- [HIL-UMI project page](https://hil-umi.github.io)
