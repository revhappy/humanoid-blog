---
title: "XR-2 Trains on 1,500 Hours of Two-Handed Housework, Then DAgger"
description: "PrimeBot and Peking University open 531.7 robot hours plus ~1,000 UMI hours, then push clothes-folding success from 58% to 93% with corrections."
pubDate: 2026-09-04
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/xr2-hardware.png"
readTime: "4 min read"
featured: false
draft: false
---

Bimanual household work is still starved for data that looks like a Tuesday laundry pile. A **PrimeBot** / Peking University / **Crobotia** team posted a dump on **3 September**: **1,500 hours** of two-handed demos, a **5B**-parameter VLA they call **XR-2**, and a scaling plot that actually bends.

The robot is the **X2W**: two **7-DoF** arms with **1-DoF** grippers, a **4-DoF** waist, a **2-DoF** head, and a three-wheel omni base — **25** control variables, states logged at **30 Hz**. Cameras: a RealSense **D435i**, **ZED X Mini**, and two **ZED-XONE GS** wrists, plus dual **Jetson AGX Orin** compute in the diagram.

<figure>
  <img src="/images/heroes/xr2-hardware.png" alt="X2W wheeled bimanual robot with labeled cameras, arms, torso, and compute" loading="lazy" />
  <figcaption>X2W hardware callouts. Source: Xu et al., arXiv:2609.03591.</figcaption>
</figure>

## Two pipelines, one pile of clothes

The **real-robot** slice is **32,518** teleop trajectories, **57.4 million** frames, **531.7 hours**, frame-level language. Four scenes: folding station (**~14.6k** traj), washer (**~8.4k**), sofa (**~6.1k**), laundry basket (**~3.4k**). Some episodes run past **150 s**. After merging equivalent instructions they list **11** atomic skills; fold-clothes alone is **14.6k**.

The **UMI** slice is about **1,000 hours** of handheld-gripper folding, from more than **200** households and **100** collectors, covering **5,000** garments. Dual 960×960 video at **30 Hz**, metric 6-DoF trajectories from visual-inertial SLAM, gripper aperture from vision, no encoders on the jaws. Sessions can run **90 minutes** without a reset.

XR-2 is a Mixture-of-Transformer: **Qwen3-VL-4B-Instruct** plus an 18-block flow-matching action expert (hidden **1024**, 8 heads). Deployment: RTX **4090**, async inference at **10 Hz**, action chunk **50×25**, commands issued at **30 Hz** after a **1000 Hz** whole-body controller.

<figure>
  <img src="/images/heroes/xr2-robot-view.png" alt="Head-camera strips of washer loading, basket handling, and clothes folding" loading="lazy" />
  <figcaption>Real-robot episodes from the head camera. Source: Xu et al., arXiv:2609.03591.</figcaption>
</figure>

## Expert data saturates. Corrections do not.

On clothes folding, success climbs from **34%** at **30 hours** of expert data to **84%** at **120 hours**, then **82%** at **160 hours**. Extra expert hours stop helping.

DAgger starts from a checkpoint trained on **18,695** expert trajectories across **10** sub-tasks (**58%** on folding). Three rounds, **2.5** epochs each, with extra correction budget on the weak sub-tasks: **74%**, **82%**, **93%**. That is a **35**-point lift over the expert-only start.

<figure>
  <img src="/images/heroes/xr2-umi.jpeg" alt="Egocentric UMI gripper sequences folding shirts, a sweater, a jacket, and jeans in real homes" loading="lazy" />
  <figcaption>In-the-wild UMI folding across households. Source: Xu et al., arXiv:2609.03591.</figcaption>
</figure>

The authors say a model at **85%** under their slight generalization (size, color, start pose) clears **95%** in-distribution. Data and a URDF live on [Hugging Face](https://huggingface.co/datasets/challenge-2026/challenge_data). A change log in the paper says full data and an IROS 2026 household bimanual challenge launched in **July 2026**.

## A Human's Take

A thousand hours of people folding shirts in actual bedrooms is the part I would steal. The robot hours are the part I would trust for a washer door. Putting both under one VLA, then admitting expert data saturates at **120 hours** on folding, is the adult version of “just scale the demos.” If you are collecting, the next dollar is probably a human with a deadman switch, not another tidy teleop take.

## Sources

- [arXiv — Scaling Bimanual Household Manipulation from 1,500 hours of Demonstrations to On-Policy Corrections](https://arxiv.org/abs/2609.03591)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2609.03591v1)
- [Hugging Face — challenge_data (dataset and robot description)](https://huggingface.co/datasets/challenge-2026/challenge_data)
