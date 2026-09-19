---
title: "RotateIt Spins a Shirt Open With One Arm, No Fling"
description: "NTU’s single-arm RotateIt uses axial spin instead of dual-arm flinging. Sim-trained policies hit 75.6% success on eight unseen real garments with no fine-tune."
pubDate: 2026-09-19
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/rotateit-garment.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most dynamic cloth unfolding looks like two arms stretching a towel and hurling it. **Zeqing Zhang**, **Zuokun Xie**, **Ao Fang**, and colleagues at Nanyang Technological University posted [arXiv:2609.19817](https://arxiv.org/abs/2609.19817) on **17 September 2026** with a different primitive: grab one point, lift, and spin.

**RotateIt!** is, they write, the first unfolding framework that uses dynamic axial rotation as its main move. One arm. Compact workspace. No second grasp.

<figure>
  <img src="/images/heroes/rotateit-garment.jpg" alt="White robot arm spinning a green T-shirt about a fixed grasp with an inset of the unfolded shirt after release" loading="lazy" />
  <figcaption>One grasp, a spin, a shirt that is no longer a lump. Source: Zhang et al., arXiv:2609.19817.</figcaption>
</figure>

## Grasp first, then change speed and how far you go

Stage I scores visible grasp candidates from RGB-D. The label is not “looks like a corner.” It is settled coverage after the same nominal spin in simulation. Stage II is a residual policy on the suspended garment: it nudges rotation extent and angular velocity over **K = 4** chunks. Release time falls out of that schedule.

Both stages train in Isaac Sim on a Franka, then run unchanged on an **xArm 7** with RealSense **D435** and **D405**. No real-world fine-tune.

A rollout succeeds at coverage **≥ 0.8**, or it gets two more attempts. **20** rollouts per garment–method pair.

## Not pick-and-place, and not a fling

Against a quasi-static pick-and-place baseline trained in the same sim, on the same five seen garments:

| Setting | RotateIt S@3 | P&P S@3 | First-attempt coverage |
| --- | ---: | ---: | ---: |
| Seen sim | **66.0%** | 5.0% | 0.755 vs 0.612 |
| Unseen sim | **79.0%** | 35.0% | 0.745 vs 0.673 |
| Unseen real (8 garments) | **75.6%** | 31.2% | 0.712 vs 0.505 |

That real first-attempt coverage is **41%** higher than P&P. Final coverage is **0.860** vs **0.684**. Attempts drop from **2.69** to **1.93**.

The eight real garments include cloths, handkerchief, two pants, a T-shirt. Four of them average final coverage above **0.90**. Pants-2 and T-shirt are harder (S@3 **60%** and **55%**): hanging limbs stay folded.

Ablations on seen-sim rollouts: random grasps drop S@3 from **70.0%** to **18.0%**. Freeze Stage II at the nominal spin: **32.0%**. Extent adaptation does more for first-attempt coverage; speed adaptation is what lifts rollout reliability.

They then fold two unseen real garments from RotateIt’s settled state with a two-step keypoint policy, no human tidy-up, in **24.56 s** and **26.29 s**.

<figure>
  <img src="/images/heroes/rotateit-garment-2.jpg" alt="Sim and real comparisons of RotateIt versus pick-and-place, plus eight unseen real garments before and after unfolding" loading="lazy" />
  <figcaption>One rotate-and-release versus a stack of pick-and-place moves. Source: Zhang et al., arXiv:2609.19817.</figcaption>
</figure>

## A Human's Take

Flinging is a party trick that needs two hands and a clear table. Spinning around a single pinch is the version that fits a home arm. I like that they shipped the policy with no real fine-tune and still beat pick-and-place by forty-plus points on clothes the sim never saw. The branched pants remaining at 55% is the receipt: rotation unfolds a sheet. Sleeves are still a second problem.

## Sources

- [arXiv:2609.19817 — RotateIt! Fast and Reliable Single-Arm Garment Unfolding via Online-Adaptive Dynamic Rotation](https://arxiv.org/abs/2609.19817)
- [arXiv HTML — real xArm trials, ablations, and unfold-to-fold sequences](https://arxiv.org/html/2609.19817v1)
