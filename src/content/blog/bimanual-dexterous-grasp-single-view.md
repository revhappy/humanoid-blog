---
title: "Two Dexterous Hands, One Depth Frame: Real Bimanual Lifts Hit 73%"
description: "Chongqing and Auckland researchers lift bins and balls with an H1-2 plus Inspire hands from a single RealSense view."
pubDate: 2026-08-12
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/bimanual-dexterous-grasp-single-view-2.png"
readTime: "4 min read"
featured: false
draft: false
---

Large objects do not fit in one hand. Most papers that admit that stay in simulation and ask for a full mesh. A Chongqing University / University of Auckland team (arXiv:2608.10383, **August 11**) runs the job on a real **Unitree H1-2** with two **Inspire RH56DFTP** hands and a head-mounted **RealSense D435i**. From a single segmented depth view they report **73.33%** lift success on held-out objects.

<figure>
  <img src="/images/heroes/bimanual-dexterous-grasp-single-view.png" alt="Dual Inspire hands enclosing a pale plastic bin from both sides" loading="lazy" />
  <figcaption>Cooperative enclosure of a bin too wide for one hand. Source: Li et al., arXiv:2608.10383.</figcaption>
</figure>

## Teleop data, then a diffusion pose

They collected **353** grasps on **33** large objects (6–20 poses each) with Apple Vision Pro teleop at **15 Hz**: commanded and measured joints, RGB-D, finger torques, and palm/finger tactile. SAM masks the first frame. A human marks the “just grasped, not yet lifted” frame. Code and data: [github.com/zhangdana483/real_bi_dex_grasp](https://github.com/zhangdana483/real_bi_dex_grasp/).

A PointNet++ turns the partial cloud into a 1024-D code. A DDPM denoises a **26-D** joint vector (two 7-DoF arms + two 6-DoF hands) over **200** steps. Joint limits are clipped. Execution is not a single snap: lift the arms, approach from a pre-grasp offset, then squeeze the palms together until they stall and curl any finger that is not yet in contact (torque **>2.9 N** or tactile above threshold).

## What beat the baselines

Object-level 80/20 split. Each test object: **5** poses × **3** attempts. Success means a **5 cm** lift, **2 s** hold, no visible slip, inside **30 s**.

- **Theirs: 73.33%**
- BimanGrasp-DDPM (sim poses, IK’d onto the real hands): **40%**
- ViSiL-HD (cuboid RL policy): **33.33%**
- GraspNet (two-finger emulation): **73.33%** (wins on thin-rim buckets)
- DexGraspAnything: **46.67%**

Ablations: no arm squeeze **46.67%**, no finger adjust **53.33%**, no motion planning **20%**, handcrafted open-palm baseline **26.67%**. Single-hand methods failed on boxes and basketballs that have no pinch rim.

<figure>
  <img src="/images/heroes/bimanual-dexterous-grasp-single-view-2.png" alt="Overhead photo of 33 large objects next to the H1-2 humanoid and an Inspire hand" loading="lazy" />
  <figcaption>Dataset objects and the H1-2 plus Inspire RH56DFTP platform. Source: Li et al., arXiv:2608.10383.</figcaption>
</figure>

Failures they show: table collisions if you skip the lateral lift, loose contact if you skip force refine, torso blocking a far-side arm, and a heavy box grasped off-center so the far end slips.

## A Human's Take

73% on unseen bins from one head camera is the kind of receipt I want from “bimanual dexterity.” The force close is doing a lot of the work, and that is fine. I would not ship this next to a person yet: timeout is 30 seconds, the scene is a clean table, and SAM plus a center-merge hack is the perception stack. Still, they lifted real balls and boxes on metal, not in Isaac.

## Sources

- [arXiv:2608.10383 — Real-World Cooperative Bimanual Dexterous Grasp](https://arxiv.org/abs/2608.10383)
- [arXiv HTML — paper](https://arxiv.org/html/2608.10383v1)
- [GitHub — real_bi_dex_grasp code and dataset](https://github.com/zhangdana483/real_bi_dex_grasp/)
