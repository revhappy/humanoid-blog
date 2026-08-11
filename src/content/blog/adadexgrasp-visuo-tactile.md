---
title: "AdaDexGrasp Fuses Geometry and Touch for Adaptive Dexterous Grasps"
description: "ECCV 2026 framework hits 91% seen / 83% unseen-category success in sim and 90% / 81% on a real Psibot hand."
pubDate: 2026-08-11
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/adadexgrasp.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Vision-only dexterous grasp planners freeze after the first contact. If the pad slips or the contact map was optimistic, the hand just commits.

**AdaDexGrasp**, accepted at **ECCV 2026** and posted as arXiv:2608.07600 (Aug 6, 2026), is a closed-loop visuo-tactile framework from Peking University, HKUST, and UC Berkeley authors. It plans with a **semantic contact map** (which finger or palm should touch which surface), then uses measured tactile IDs on the object point cloud to classify grasp quality and, if needed, **adapt** the pose before lift.

<figure>
  <img src="/images/heroes/adadexgrasp.jpg" alt="AdaDexGrasp grasp adaptation from unstable to stable contacts" loading="lazy" />
  <figcaption>Failed initial contacts densify after tactile-guided adaptation. Source: arXiv:2608.07600.</figcaption>
</figure>

## Pipeline

Three modules share one representation:

1. **Contact-driven generator** — PointNet++ predicts per-point finger/palm labels and a grasp pose.  
2. **Classifier** — after contact, annotates the object cloud with tactile markers and scores success.  
3. **Adaptation model** — diffusion-style correction of pose and joints when the score is low, up to a fixed iteration budget.

Training data comes from PPO rollouts in a custom **Isaac Gym** tactile ShadowHand environment (22 hand DoF + 6 root). Real tests use a **Psibot** hand with high-resolution tactile sensors.

## Results

| Setting | Seen | Unseen objects | Unseen categories |
|---------|------|----------------|-------------------|
| **Sim (ours)** | **91%** | **82%** | **83%** |
| Best baseline (DexGraspAnything) | 77% | 72% | 67% |
| **Real (ours)** | **90%** | **87%** | **81%** |
| Best real baseline (DexGraspAnything) | 81% | 71% | 73% |

On the large DexGrasp Anything asset set (15k+ objects), the authors report **87%**. Ablations show contact IDs and the adaptation loop both matter — without adaptation, unseen-category success falls from **83%** to **59%**.

<figure>
  <img src="/images/heroes/adadexgrasp-2.jpg" alt="AdaDexGrasp contact maps and generated grasp poses" loading="lazy" />
  <figcaption>Semantic contact maps guide initial pose generation. Source: arXiv:2608.07600.</figcaption>
</figure>

## A Human's Take

The useful idea is not "add tactile features." It is **naming which finger owns which contact** before and after touch, then refusing to lift until the classifier is happy. That is closer to how people actually recover a bad pinch. I want to see the same loop on industrial multi-finger hands with oily parts and partial sensor dropout — sim numbers are clean; shops are not.

## Sources

- [arXiv:2608.07600 — AdaDexGrasp: Adaptive Dexterous Grasping via 3D Visuo-Tactile Representation Fusion](https://arxiv.org/abs/2608.07600)
- [arXiv HTML full text](https://arxiv.org/html/2608.07600v1)
