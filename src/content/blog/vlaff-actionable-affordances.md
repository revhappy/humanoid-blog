---
title: "VLAff Learns Where, How, and Which Way From Ego Video"
description: "University of Tokyo’s IROS 2026 VLAff trains one VLM on 204K EgoAffordance episodes for visual heatmaps, grasps, and trajectories—68% real zero-shot."
pubDate: 2026-08-07
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/vlaff.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Human video is plentiful. Robot action labels are not. **VLAff**, accepted at **IROS 2026** and posted on arXiv **August 5, 2026** (arXiv:2608.05215) from the University of Tokyo’s JSK lab, bets that **object-centric actionable affordances** — where to touch, how to grasp, how to move — can bridge that gap without cloning human joints onto a gripper.

<figure>
  <img src="/images/heroes/vlaff.jpg" alt="VLAff overview: ego affordances, generation, and real robot tasks" loading="lazy" />
  <figcaption>From ego video affordances to robot execution. Source: arXiv:2608.05215 HTML.</figcaption>
</figure>

## EgoAffordance + one model

The pipeline runs SfM, hand-object detection, segmentation, MANO hand reconstruction, ego inpainting, and 3D hand tracking on egocentric footage. The resulting **EgoAffordance** set holds **204K episodes**, about **5.6M** visual heatmaps and **11.6M** grasp/trajectory affordances (paper abstract; Table I also lists 5.78M heatmaps and 11.61M trajectories).

**VLAff** extends a **Qwen2.5-VL** backbone with special tokens: `<SEG>` for heatmaps (plus DINOv2 features), `<GRASP>` for 96-D MANO-style parameters, and discrete trajectory bins for autoregressive 6D waypoints. Object-centric transforms pin grasp and path to a 3D anchor from the heatmap peak so outputs stay embodiment-agnostic.

## What the numbers say

On visual affordance metrics, VLAff leads the paper’s comparison (IoU **0.121**, NSS **1.542**, SIM **0.142**, KLD **2.517** vs LISA, UAD, VRB, 3DOI).

Zero-shot manipulation: **83.0%** average on 10 sim household tasks vs **85.0%** for VidBot (strongest sim baseline in the table). Real kitchen tasks on **Fetch** and **PR2**: **68.0%** average for VLAff vs **52.0%** for VidBot across five tasks (10 trials each). Affordance-guided real RL on Open Fridge learns fastest when all three modalities stay in the reward; drop the visual heatmap and learning collapses.

<figure>
  <img src="/images/heroes/vlaff-2.jpg" alt="VLAff architecture with VLM, DINOv2, and three affordance decoders" loading="lazy" />
  <figcaption>Architecture: VLM plus visual, grasp, and trajectory decoders. Source: arXiv:2608.05215 HTML.</figcaption>
</figure>

## A Human's Take

I’m excited when “see / grasp / move” comes out of one model trained on kitchen ego video, not another 10k teleop hours. The real-robot gap over VidBot is the money shot; the remaining miss mode — bad first trajectory direction — is exactly the kind of bug you can hunt with better scene priors. Code and weights are listed as coming soon on the project page, so I’m watching that drop.

## Sources

- [arXiv:2608.05215 — VLAff abstract](https://arxiv.org/abs/2608.05215)
- [arXiv HTML — VLAff full paper](https://arxiv.org/html/2608.05215v1)
- [VLAff project page](https://ojh6404.github.io/vlaff/)
