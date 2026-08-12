---
title: "A Go2 With a Local 3D Gaussian Map Stops Grabbing Banana Photos"
description: "HKUST(GZ) and Midea put Semantic-3DGS on a Unitree quadruped and lift clutter success from 46% to 74%."
pubDate: 2026-08-12
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/semantic-3dgs-mobile-manip.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Unitree **Go2 Edu** with a 6-DoF arm will happily reach for a banana on a tablet if all it has is a 2D VLA. A paper accepted to **ACM Multimedia 2026** (arXiv, August 11) from HKUST(Guangzhou) and **Midea** builds a tiny, refreshable **Semantic-3DGS** from four wrist shots, then uses that field to pick a stance and condition the arm policy.

The platform is a Go2 Edu with stand/crouch modes, a Unitree **4D L1** LiDAR, an onboard **Jetson Orin NX**, and an **Alicia-D** arm with a gripper camera. Semantic reconstruction and VLA inference run off-board on an **RTX 4090**. Joint commands stream at **30 Hz** over ROS.

<figure>
  <img src="/images/heroes/semantic-3dgs-mobile-manip.jpg" alt="Unitree Go2 Edu quadruped with Alicia-D arm, RealSense cameras, L1 LiDAR, and Jetson Orin NX labeled" loading="lazy" />
  <figcaption>The mobile manipulator: Go2 Edu, Alicia-D arm, RealSense, L1 LiDAR, Orin NX. Source: Ou et al. / arXiv:2608.10756.</figcaption>
</figure>

## Four views, then move the base

After a language command, the robot grabs four inverse-kinematics-feasible wrist views scored for target coverage, diversity, and motion cost. VGGT initializes geometry. CLIP and DINOv2 features, plus SAM masks, get distilled into a local Gaussian field. Language relevance scores pick the object Gaussians; PCA (and optional ICP) give a 6D pose.

The base then parks at a reachability stance: **0.35 m** back, **0.20 m** to the side, yaw toward the object, crouch if the target is under **0.30 m**. That posture policy is PPO-trained in Isaac Lab. The arm policy is a DexVLA-style diffusion VLA (Qwen2-VL + ScaleDP). 3D semantic tokens go only into the **last five** action-expert blocks so the pretrained prior stays intact. Fine-tuning uses **10** real demos per task and 15-step action chunks.

<figure>
  <img src="/images/heroes/semantic-3dgs-mobile-manip-2.jpg" alt="Go2 sequence: walk to a cabinet, open a drawer, take a banana, walk to a chair, place it" loading="lazy" />
  <figcaption>Long-horizon trial: drawer, banana, chair. Source: Ou et al. / arXiv:2608.10756.</figcaption>
</figure>

## Where 2D policies break

On **50**-trial expansions:

- **Long-horizon** (open drawer, fetch banana, close, walk, place): **30/50 (60%)** vs **20/50 (40%)** PointVLA and **14/50 (28%)** DexVLA. Drop the base-RL module and it falls to **11/50 (22%)**.
- **Cluttered banana-to-bowl**: **37/50 (74%)** vs **26/50 (52%)** single-view and **23/50 (46%)** PointVLA. Collision-free rate **88%**; false grasps **6%**.
- **Height shift of 75 cm**: **75%** success with stance selection; the no-base-RL variant is **0%** if it keeps the original pose.
- **Photo banana on a tablet**: the full system reports **0%** photo false-grasps. DexVLA and the single-view ablation grab the screen a lot.
- Few-shot multi-task average: **81.7%** vs **64.0%** PointVLA and **37.7%** DexVLA.

Active four-view sensing adds about **3.7 s** of wall-clock on the clutter task (**33.2 s** vs **29.5 s**). Late-block injection is listed at **80 ms** per chunk vs **175 ms** if every block is touched. The authors do not claim onboard, real-time 3DGS inside the servo loop.

<figure>
  <img src="/images/heroes/semantic-3dgs-mobile-manip-3.jpg" alt="Three few-shot tabletop scenes with banana, bottle, bowl, and book" loading="lazy" />
  <figcaption>Few-shot tabletop set: banana-on-book, bottle-in-basket, ordered bowl packing. Source: Ou et al. / arXiv:2608.10756.</figcaption>
</figure>

## A Human's Take

The photo-banana result is the one I will quote. A VLA that cannot tell a fruit from a screen is not ready for a kitchen, and a 3D field that you rebuild from four wrist shots is a practical fix, not a new foundation model. The 4090 off-board and the 16-second grounding stage are the bill. I want this loop on the Orin, and I want it to refresh when someone walks through the scene, not only when grounding already failed.

## Sources

- [arXiv:2608.10756 — Embodied Multimodal Grounding via Semantic 3D Gaussian Splatting](https://arxiv.org/abs/2608.10756)
- [arXiv HTML — ACM MM ’26 paper with platform and trial figures](https://arxiv.org/html/2608.10756v1)
- [alphaXiv — 2608.10756](https://www.alphaxiv.org/abs/2608.10756)
