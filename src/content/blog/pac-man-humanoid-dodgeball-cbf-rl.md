---
title: "PAC-MAN: Caltech Teaches a Unitree G1 to Dodge Balls Safely"
description: "New arXiv paper pairs control-barrier functions with onboard vision so a humanoid dodges throws using only head-camera depth—95% on hardware."
pubDate: 2026-08-01
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/pac-man-dodgeball.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Caltech’s **AMBER Lab** released **PAC-MAN**—Perception-Aware CBF-RL for whole-body safety in humanoid dodgeball—on arXiv (submitted **30 Jul 2026**). The punchline: a **Unitree G1** dodges thrown balls using only onboard sensing, with a **95%** hardware success rate (19 of 20 hand throws) and **zero falls**.

## Why dodgeball is a serious benchmark

The robot must clear **every body link** from a ball’s path and stay upright. At deployment, the policy never gets privileged ball state. It sees only **segmentation-masked depth** from a **head-mounted RGB-D camera**—the same sparse ball-only representation used in training.

<figure>
  <img src="/images/heroes/pac-man-dodgeball.jpg" alt="PAC-MAN system diagram showing Unitree G1 sensing, masked depth, CBF-RL, and dodging" loading="lazy" />
  <figcaption>Onboard sensing, ball-only perception, CBF-RL training, and execution. Source: PAC-MAN project page (AMBER Lab / Caltech).</figcaption>
</figure>

Authors **Lizhi Yang**, **Junheng Li**, and **Aaron D. Ames** couple:

- **Link-CBF** training rewards that enforce clearance barriers on each link (deployed policy).
- **Joint-CBF** guidance / privileged filtering for sim ceilings when ball state is known.
- An **adversarial motion prior** so evasive reflexes look human-like (ducks, sidesteps, leaps).

## Results that transfer

On a controlled any-link contact benchmark (seeded throws; single throws and a walk-back deployment loop), the fixed-camera policy sits within a few points of a privileged oracle. Joint-CBF wins when ball state is accurate, degrades under fixed-camera partial observability, and recovers with a tracking gimbal or privileged filter.

On hardware, a lightweight **Link-CBF** policy transfers **zero-shot** to the G1. An EfficientTAM segmenter masks ZED depth to the training observation. Semantic segmentation makes the threat ball-agnostic—the robot dodges ball types it never saw in training.

Code is public on GitHub; the project site includes an in-browser throw-a-ball demo.

## A Human's Take

Whole-body safety that works when the camera loses the ball for a frame is the product. Lab oracles that assume full state are easy; 95% on imperfect onboard perception is the receipt. Next question is whether the same barrier-shaped RL survives multi-agent clutter, outdoor light, and industrial payloads—not just gym dodgeball.

## Sources

- [arXiv:2607.28623 — PAC-MAN paper abstract](https://arxiv.org/abs/2607.28623)
- [PAC-MAN project page — AMBER Lab, Caltech](https://lzyang2000.github.io/perceptive_cbf_rl/)
- [arXiv PDF — PAC-MAN full paper](https://arxiv.org/pdf/2607.28623.pdf)
