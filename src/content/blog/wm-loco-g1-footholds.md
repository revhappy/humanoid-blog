---
title: "WM-LOCO Walks a G1 Across Stones, Stairs, and an 0.8 m Gap Onboard"
description: "D-Robotics’ WM-LOCO co-trains a world model with PPO; a Unitree G1 hits 93.3% on stones, stairs, and a gap."
pubDate: 2026-09-03
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/wm-loco-1.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Unitree **G1** with one head-mounted depth camera is walking stepping stones, stairs, and a gap without a terrain map. **D-Robotics** posted the method on **2 September 2026** as [arXiv:2609.02542](https://arxiv.org/abs/2609.02542): **World-Model-Augmented Visual Locomotion**, or **WM-LOCO**.

The hardware average is **93.3%** success over **10** trials on each of the three courses. The same policy runs fully onboard a **Jetson Orin** from proprioception and a single **Intel RealSense D435** stream.

<figure>
  <img src="/images/heroes/wm-loco-1.jpg" alt="Unitree G1 crossing wooden stepping blocks in a lab" loading="lazy" />
  <figcaption>G1 on 0.25 m stone tops with 0.45 m gaps. Source: Liu et al., arXiv:2609.02542.</figcaption>
</figure>

## Why a world model here

Foothold-constrained terrain is the nasty case: sparse pads, gaps, narrow treads. One bad foot and there is nowhere to recover. The paper’s argument is that a policy staring at the current depth frame is late. WM-LOCO co-trains a recurrent state-space model with **PPO**. The world model sees proprioception plus one egocentric depth image and feeds a predictive recurrent feature into the actor. No foothold labels.

Training is in IsaacLab, **8,192** parallel environments, simulated D435 frames cropped to **32×18**, clipped to **0.1–2.5 m**, at **50 Hz**.

The matched PPO baseline, same reward and cameras, scores **0%** on gaps and stepping stones at Easy, Medium, and Hard. WM-LOCO stays between **78.2%** (stones, Hard) and **100%** (gap, Medium). On stairs both methods work; WM-LOCO is a few points higher and the paper reports longer strides (**+15% to +35%**) and lower pelvis acceleration (**−24% to −33%**).

<figure>
  <img src="/images/heroes/wm-loco-2.jpg" alt="G1 climbing a wooden stair set in the lab" loading="lazy" />
  <figcaption>Stairs: 0.15 m risers, 0.25 m treads on the real course. Source: Liu et al., arXiv:2609.02542.</figcaption>
</figure>

## What ran on the real robot

Exported ONNX, no offboard perception. Real course numbers from the paper:

- **Stepping stones**: 0.25 m-wide tops, 0.45 m longitudinal gaps — **100%** of 10 trials
- **Stairs**: 0.15 m risers, 0.25 m treads — **90%**
- **Gap**: **0.8 m** in a single step — **90%**

They did not test larger gaps, for safety. Lead authors **Yuxi Liu** and **Lijun Han** share first credit; **Wei Sui** is project lead.

<figure>
  <img src="/images/heroes/wm-loco-3.jpg" alt="G1 stepping across a gap between pallet platforms" loading="lazy" />
  <figcaption>The 0.8 m gap crossing. Source: Liu et al., arXiv:2609.02542.</figcaption>
</figure>

The authors are explicit about scope: discrete pads and narrow geometry, one G1, one RSSM backbone. Balance beams and outdoor mess are out.

## A Human's Take

Zero percent versus high-80s on stones is the result I care about. If the world-model feature is doing real look-ahead, that is a cheaper trick than another teacher-student ladder. Ten trials per class is a lab card, not a shift. I want the same policy on wet stone and a missed depth frame before I call it a foothold controller.

## Sources

- [arXiv:2609.02542 — WM-LOCO abstract](https://arxiv.org/abs/2609.02542)
- [arXiv HTML — full paper](https://arxiv.org/html/2609.02542v1)
