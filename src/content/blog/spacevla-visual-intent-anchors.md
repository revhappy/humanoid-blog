---
title: "SpaceVLA Puts User Grasp and Place Anchors Into OpenVLA"
description: "Skoltech’s SpaceVLA paints green/blue visual intent anchors on RGB so OpenVLA-7B hits 91.25% full-task success in closed-loop Unity pick-and-place."
pubDate: 2026-08-09
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/spacevla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Language is fuzzy about *where* to grab. “Pick up the mug and put it on the table” leaves a dozen legal grasps and landings.

**SpaceVLA** (arXiv:[2608.05730](https://arxiv.org/abs/2608.05730), Aug 6, 2026) adds **Visual Intent Anchors**: the user points to a preferred grasp region and placement region in a Unity XR-style interface. Those points become **green** and **blue** image-space overlays on the RGB frame that an **OpenVLA-7B** policy (fine-tuned with LoRA) already knows how to read. Authors are from Skoltech and MWS R&D (Zinniatullina, Kolomiets, Konenkov, Altamirano Cabrera, Tsetserukou).

<figure>
  <img src="/images/heroes/spacevla.jpg" alt="SpaceVLA pipeline: user anchors, anchor-conditioned OpenVLA, closed-loop Unity execution" loading="lazy" />
  <figcaption>Overview: user-authored anchors, marked RGB + language into OpenVLA, closed-loop Unity control. Source: arXiv:2608.05730.</figcaption>
</figure>

## Setup

- **200** Unity pick-and-place demos (mug, pot, thermos, saucepan); ~**150** RGB frames each
- Split: **120** train / **80** held-out episodes; **18,000** anchor-augmented training observations
- Policy predicts tokenized **7-DoF** incremental actions (translation, orientation deltas, gripper width)
- After grasp, the green mask drops; only blue placement stays during transport
- Instruction for anchor policy: “Pick up the object by the green region and place it on the blue region.”

<figure>
  <img src="/images/heroes/spacevla-2.jpg" alt="Offline dataset construction with green grasp and blue place masks on Unity demos" loading="lazy" />
  <figcaption>Offline construction of the anchor-augmented dataset. Source: arXiv:2608.05730.</figcaption>
</figure>

## Numbers (closed-loop Unity, 80 held-out episodes)

| Condition | Full-task success | Mean grasp / place distance |
|-----------|-------------------|-----------------------------|
| Correct anchors | **91.25%** (73/80) | **0.5 cm** / **0.7 cm** |
| Random anchors on objects | **77.5%** (62/80) | **2.6 cm** / **3.4 cm** |
| No-anchor baseline | **50.0%** (40/80) | n/a |

Correct anchors cut average grasp-and-placement action error from **3.0 cm** to **0.6 cm** vs random object anchors. A separate test put anchors at arbitrary workspace points (including off objects); the robot redirected toward the marks, not just the objects.

Current limitation the authors call out: anchors are **fixed image-space masks** under a static camera — they do not stick to moving objects or reproject under viewpoint change. Future work points to 3D world/object-relative anchors for VR/AR on real robots.

## A Human's Take

This is preference injection without full teleop, and the ablation is honest: wrong anchors hurt, no anchors collapse. Until the masks live in 3D, it is a sim-and-static-camera trick. I still want it — “green means grab here” is something a floor supervisor can understand without learning a teach pendant.

## Sources

- [arXiv:2608.05730 — SpaceVLA / Visual Intent Anchors](https://arxiv.org/abs/2608.05730)
- [arXiv HTML full text](https://arxiv.org/html/2608.05730)
