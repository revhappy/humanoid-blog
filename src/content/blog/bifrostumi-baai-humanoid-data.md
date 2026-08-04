---
title: "BifrostUMI Bridges Robot-Free Demos to G1 Whole-Body Skills"
description: "BAAI's BifrostUMI uses Pico VR plus UMI grippers to teach Unitree G1 pick-place, bimanual produce, throws, under-table dumps, and walking coffee delivery."
pubDate: 2026-08-04
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/bifrostumi.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Another answer to “how do we collect humanoid whole-body demos without parking a robot in every room”: **BifrostUMI** from the Beijing Academy of Artificial Intelligence (BAAI). It records portable VR–UMI demonstrations as sparse keypoints, retargets them onto a Unitree **G1**, and runs a hierarchical controller in the real world.

Paper: [arXiv:2605.03452](https://arxiv.org/abs/2605.03452) (v2 July 7, 2026). Project: [baai-aether.github.io/BifrostUMI](https://baai-aether.github.io/BifrostUMI/).

## Hardware without the humanoid present

Collection uses a **Pico 4** motion-capture setup (headset, controllers, two foot trackers, one waist tracker) plus two instrumented handheld grippers with fisheye cameras and magnetic-encoder aperture. Streams include wrist-view RGB, five whole-body keypoints (pelvis, two gripper TCPs, two feet; knees optional), and gripper width. Online **Spatial Keypoint Retargeting (SKR)** maps human keypoints into robot-native references during capture so operators can see whether the motion stays kinematically sane.

<figure>
  <img src="/images/heroes/bifrostumi.jpg" alt="BifrostUMI pipeline from VR-UMI capture to G1 execution" loading="lazy" />
  <figcaption>Full BifrostUMI pipeline overview. Source: BifrostUMI project page.</figcaption>
</figure>

## Three-stage control

1. **High-level diffusion policy** — DINOv2-encoded wrist views + **15-D** lower-body proprioception → **47-D** action (five keypoints × 9 + two gripper widths), horizon **H = 48**.
2. **SKR** — preserves metric spatial structure; only scales vertical pelvis-to-foot distance (**λ_leg = 0.75** in the paper) for G1 height mismatch; solves constrained whole-body IK.
3. **Low-level whole-body controller** — **50 Hz** residual joint tracking trained in MJLab.

## Five real G1 tasks

Project demos cover cluttered tabletop pick-and-place, bimanual vegetable collection, dynamic ball shooting, under-table waste disposal, and walking coffee delivery. Ablations on the first three tasks (20 trials each in the paper figures): replacing SKR with GMR hurts pick-place and bimanual success; dropping latency matching hurts timed throws. Seven-keypoint mode (adding knees) matters for deep bends and loco-manipulation.

Throughput vs **TWIST2** teleop in **10-minute** windows (paper Table I):

| Operator | Task | BifrostUMI | TWIST2 | Speedup |
|----------|------|------------|--------|---------|
| Novice | Bimanual | 55 | 25 | **2.2×** |
| Novice | Throw trash | 43 | 17 | **2.5×** |
| Novice | Walk + coffee | 61 | 1 | **61×** |
| Experienced | Walk + coffee | 62 | 5 | **12.4×** |

Average ~**2.2×** on non-locomotion tasks; loco-manipulation is where robot-free collection opens the widest gap.

<figure>
  <img src="/images/heroes/bifrostumi-2.jpg" alt="BifrostUMI Pico VR trackers and instrumented grippers" loading="lazy" />
  <figcaption>Robot-free acquisition hardware. Source: BifrostUMI project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/bifrostumi-3.jpg" alt="BifrostUMI G1 real-world pick-place, bimanual, and ball-throw trials" loading="lazy" />
  <figcaption>Real-world G1 evaluations and ablations. Source: BifrostUMI project page.</figcaption>
</figure>

## A Human's Take

HuMI and BifrostUMI are racing the same bottleneck from different labs: **whole-body data without babysitting the robot**. The novice coffee-walk number is the one I keep. If your teleop stack cannot teach walking handovers, your training set will never look like a shift.

## Sources

- [arXiv:2605.03452 — BifrostUMI abstract](https://arxiv.org/abs/2605.03452)
- [arXiv HTML — BifrostUMI full paper](https://arxiv.org/html/2605.03452v2)
- [BifrostUMI project website](https://baai-aether.github.io/BifrostUMI/)
