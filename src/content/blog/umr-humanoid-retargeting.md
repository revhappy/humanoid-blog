---
title: "UMR Retargets Human Motion to Humanoids With Surface Point Clouds, Not Hand-Labeled Joints"
description: "HKUST(GZ) and Noitom’s UMR learns dense surface correspondence so G1, H2, and T800 share one retargeter."
pubDate: 2026-09-03
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/umr-humanoid-retargeting-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most human-to-humanoid retargeters still pair a few human joints to a few robot joints by hand. **Unified Motion Retargeting (UMR)**, posted **2 September 2026** as [arXiv:2609.02134](https://arxiv.org/abs/2609.02134), throws that map away and matches **dense surface point clouds** instead.

The authors are at **HKUST(GZ)**, **Noitom Robotics**, **Hanyang University**, **HKUST**, and **HKU**. Equal first authors: **Hanyang Cao**, **Yuetong Fang**, **Taesoo Kwon**.

<figure>
  <img src="/images/heroes/umr-humanoid-retargeting-2.jpg" alt="Unitree G1 spin kick, basketball pickup, and stair sequence from UMR references" loading="lazy" />
  <figcaption>Real G1: spin kick, ball pickup, stairs then jump-down. Source: Cao et al., arXiv:2609.02134.</figcaption>
</figure>

## Surfaces, then a QP

UMR learns an ordered correspondence between a human T-pose cloud and a robot T-pose cloud with a PointNet-style encoder. Those paired points stick to their meshes. As the human moves, the robot optimizer matches point positions, surface orientations, and a **contact map** under joint limits and floor clearance. No “left ankle = robot ankle 3” spreadsheet.

That is how one pipeline eats SMPL-X, SOMA, a humanoid character, and a scanned mesh, then emits motion for robots from **0.75 m to 1.83 m**. The paper’s grid includes **HighTorque PiPlus**, **Booster K1**, **Unitree G1**, **EngineAI T800**, and **Unitree H2**.

<figure>
  <img src="/images/heroes/umr-humanoid-retargeting-3.jpg" alt="Grid of retargeted kicks across five robot bodies and four motion sources" loading="lazy" />
  <figcaption>Same pipeline across sources and embodiments. Source: Cao et al., arXiv:2609.02134.</figcaption>
</figure>

Setup on an RTX 4070 Ti SUPER plus an Intel Core Ultra 7 265KF, averaged on LAFAN1: **25.79 s** to learn the reusable correspondence, then **65.29 FPS** overall retargeting throughput (**121.26 FPS** for the motion step itself).

## Does the reference actually track?

On **40** LAFAN1 clips that also have Unitree’s own references, they train BeyondMimic trackers. UMR beats **GMR** on success, especially under domain randomization and sim-to-sim, and posts the lowest mean joint-angle error in that table. Against Unitree’s curated references it stays competitive.

For big-batch learning they retarget actor-specific **SOMA-Proportional** motions into **SONIC**. Without SONIC’s SMPL encoder, UMR-retargeted data outperforms the released GMR Unitree references by about **10%** relative on reward and tracking error late in training. With the encoder, the gap shrinks — extra human-motion alignment papers over a worse robot reference.

Contact-rich tasks versus **OmniRetarget**: on OmniContact carry/kick/push, UMR policies hit higher success and cut joint error about **40–56%**. Object error on carry drops from **0.252 m** to **0.081 m**. On GRAIL scene tasks, UMR wins on stairs (**43.53%** vs **11.01%** success) and slope; OmniRetarget keeps a small chair lead.

Hardware in the paper: a high-dynamic **spin kick** from MimicKit, a ball pick-up with backward walking, and stair traversal then a jump down, all on G1.

<figure>
  <img src="/images/heroes/umr-humanoid-retargeting.jpg" alt="Human soccer kick meshes next to G1 meshes and contact-colored point clouds" loading="lazy" />
  <figcaption>Source meshes and transferred contact clouds. Source: Cao et al., arXiv:2609.02134.</figcaption>
</figure>

Limitation they own: you still need mesh geometry and a canonical template. Raw video without a body model is future work.

## A Human's Take

If the correspondence is learned once per robot, then every new mocap dump is just another clip through the same QP. That is the scaling story I wanted from retargeting. The G1 kick and stair stills are the receipt. Next ask is whether a dexterous hand — which they flag as future work — still fits a surface map, or whether fingers force you back to sparse joints.

## Sources

- [arXiv:2609.02134 — UMR abstract](https://arxiv.org/abs/2609.02134)
- [arXiv HTML — full paper](https://arxiv.org/html/2609.02134v1)
