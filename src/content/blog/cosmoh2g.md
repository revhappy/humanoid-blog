---
title: "CosmoH2G Turns Flips and Rotations Into Gripper Motions"
description: "CUHKSZ’s paired hand-gripper dataset of 6,189 episodes hits 70% real-robot success on Galaxea R1 Lite for spatial pick-and-place."
pubDate: 2026-09-13
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/cosmoh2g.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most “copy this human video” pipelines choke when the object rotates or flips. **CosmoH2G**, posted **7 September** on arXiv by **Hongxiang Zhao**, **Mutian Xu**, and colleagues at **CUHKSZ**, **FNii-Shenzhen**, and **GenuX**, is a paired hand-to-gripper dataset built for those motions.

**6,189** episodes. **1,254** objects. Handheld **UMI** grippers mimicking the same contact patch, orientation, and path as the human hand.

<figure>
  <img src="/images/heroes/cosmoh2g.jpg" alt="Five-frame human demonstration of rotating a bottle compared with matching robotic gripper execution" loading="lazy" />
  <figcaption>Human demo on top, gripper replay below, including a rotation in clutter. Source: Zhao, Xu et al., arXiv:2609.07498, Figure 1.</figcaption>
</figure>

## Why a new dataset

Rule-based retargeting (thumb–index midpoint as the grasp) fails on natural grasps. Object-flow methods lose tracked points when a face rotates out of view. The authors’ protocol forces in-plane rotations and vertical flips, varies grasp type and contact area, and keeps start/end object poses aligned between hand and UMI takes. Pairs below **0.9** trajectory similarity are dropped; retained pairs average **0.957**.

Object mix from their Table 1: toys **33.33%**, decor **27.88%**, food **23.03%**, daily necessities **12.12%**, beauty **3.64%**. Code and dataset are listed as coming soon on the [project page](https://cosmoh2g.github.io/).

<figure>
  <img src="/images/heroes/cosmoh2g-3.jpg" alt="Paired RGB-D hand and UMI gripper videos with 3D reconstruction pipeline" loading="lazy" />
  <figcaption>Paired hand and UMI captures, then 3D registration. Source: arXiv:2609.07498, Figure 5.</figcaption>
</figure>

## Two stages, then a cleanup

End-to-end pose sequences drifted. Their fix:

1. **Stage I** predicts only start and terminal 6-DoF gripper poses from hand and object points.
2. **Stage II** learns **orientation** from the paired data. Translation is initialized from the hand path (aligned contact regions) and then optimized for contact, smoothness, and inverse-kinematics feasibility.

Test split: **186** cases on **40** unseen objects. Simulation is **GalaxeaManipSim** on an **R1 Lite**. Hardware is the same wheeled dual-arm.

| Method | Sim success | Real success |
|--------|-------------|--------------|
| MimicFunc | 56.45% | 43.01% |
| 3DFlowAction | 44.62% | 36.02% |
| Im2Flow2Act | 57.53% | 51.61% |
| Track2Act (retrained) | 77.42% | 60.22% |
| **CosmoH2G** | **83.87%** | **70.43%** |

Real-robot drops: objects slip during large rotations, or get dragged before they leave the table.

<figure>
  <img src="/images/heroes/cosmoh2g-2.jpg" alt="Real-robot comparison: CosmoH2G places a bottle upright while four baselines miss orientation or position" loading="lazy" />
  <figcaption>Galaxea R1 Lite: CosmoH2G vs four baselines on a rotation-and-place task. Source: arXiv:2609.07498, Figure 7.</figcaption>
</figure>

Limits they list: open-loop, no live collision avoidance, pick-and-place only. A one-stage model is left for when the paired set is larger.

## A Human's Take

The useful part is the collection protocol, not the transformer. If you force flips in the data, the mapping has something to learn. Seventy percent on a real R1 Lite with unseen objects is enough to keep watching. Closed-loop is the next receipt I want.

## Sources

- [arXiv:2609.07498 — CosmoH2G](https://arxiv.org/abs/2609.07498)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.07498v1)
- [Project page — cosmoh2g.github.io](https://cosmoh2g.github.io/)
