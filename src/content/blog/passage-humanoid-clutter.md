---
title: "PASSAGE Walks a G1 Through 50 Unseen Clutter Layouts Onboard"
description: "Galbot and university partners train one planner-tracker on 100 hours of VR clutter, then run LiDAR and control on a Jetson AGX Orin."
pubDate: 2026-09-18
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/passage-humanoid.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Stepping over a pallet, ducking a beam, and squeezing past a case are different skills if you train them that way. **PASSAGE** is a single destination-conditioned planner plus a whole-body tracker that is supposed to pick the mix from onboard geometry. The paper, dated 16 September, puts a **Unitree G1** through **50** physical layouts with no prebuilt map and no offboard computer.

<figure>
  <img src="/images/heroes/passage-humanoid.jpg" alt="PASSAGE system diagram with real G1 photos stepping over, ducking under, and moving sideways through clutter" loading="lazy" />
  <figcaption>Data, elevation map, flow planner, tracker, and real G1 stills. Source: Ma, Zeng et al., arXiv:2609.18732, teaser.</figcaption>
</figure>

## 100 hours in a headset, 1,500 fake corridors

Operators in a **Noitom PN Link** mocap suit and a VR headset walk 10 m procedural corridors stuffed with ground, side, and overhead blocks. Collisions get haptic buzz and the take is thrown out. After retargeting to a 29-DoF G1 and screening, they keep **19,310** sequences, about **100 hours**, across **1,500** scenes. Validated obstacle rescales (0.5–1.5 scale, ±15°) expand that to roughly **1,000 hours** of motion–scene pairs without more capture.

A conditional flow-matching planner emits 0.5 s (25-frame) references at **6.25 Hz** from four history frames, a local destination, and a torso-centered **three-layer elevation map** (support, lateral block, overhead clearance). Real-time chunking blends the previous plan into the next so the robot does not twitch at chunk boundaries. A ScaleBFM tracker, perception-augmented, runs at **50 Hz**. Then they freeze the tracker and RL-fine-tune only the planner on closed-loop rollouts.

Onboard: Manifold Tech **Odin** LiDAR, ROG-Map occupancy, TensorRT FP16 planner on a **Jetson AGX Orin**, CPU tracker, joint commands at 500 Hz.

<figure>
  <img src="/images/heroes/passage-humanoid-2.jpg" alt="Operator in a mocap suit stepping through a VR clutter scene with an egocentric inset" loading="lazy" />
  <figcaption>VR-guided capture. Source: arXiv:2609.18732, Figure 3.</figcaption>
</figure>

## Sim scale, then 50 real layouts

In MuJoCo, 150 held-out scenes × 5 rollouts. Across three seeds, scaling captured data from **6 to 100 h** lifts mean success **84.3% → 96.4%** and contact-free success **48.1% → 68.9%**. The final augmented checkpoint hits **98.7%** success and **70.3%** contact-free. CAT’s released generalist, zero-shot on the same test distribution, is **70.3% / 14.0%**. Ablations are brutal: drop RTC and contact-free success falls to **24.5%**; drop planner RL, **26.4%**; swap in the base tracker, **18.4%**.

Hardware: 50 distinct layouts, destination-only commands, one attempt each. **50/50** reach the finish without a fall or safety stop. **45/50 (90%)** are contact-free. The five contacts are the remaining problem, not falling over.

<figure>
  <img src="/images/heroes/passage-humanoid-3.jpg" alt="Simulated G1 under a block arch beside onboard LiDAR reconstruction of a real arch and pallet" loading="lazy" />
  <figcaption>Same three-layer geometry in sim and from live LiDAR. Source: arXiv:2609.18732, Figure 4.</figcaption>
</figure>

Project page: [galaxygeneralrobotics.github.io/PASSAGE](https://galaxygeneralrobotics.github.io/PASSAGE/).

## A Human's Take

Fifty layouts with one planner and a backpack Jetson is the demo I want more of. Contact-free at 45/50 is the honest number: it finishes the course, and sometimes it still kisses the foam. If they add stairs and thin cables like the conclusion teases, keep the same 50-layout rule. I will be watching the contact column, not the highlight reel.

## Sources

- [Ma, Zeng et al. — PASSAGE (arXiv:2609.18732)](https://arxiv.org/abs/2609.18732)
- [Paper HTML with figures](https://arxiv.org/html/2609.18732v1)
- [PASSAGE project page](https://galaxygeneralrobotics.github.io/PASSAGE/)
