---
title: "OmniMimic Teaches One Go2 Policy Four Gaits, Then Turns"
description: "Hunan University’s OmniMimic turns forward animal clips into omnidirectional trot, pace, canter, and pronk. Grid tracking RMSE drops 63.1% versus APEX."
pubDate: 2026-09-20
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/omnimimic-go2-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Dogs mostly run forward. A robot that has to sidestep a pallet needs the other directions too. **Sheng Wu**, **Guoqiang Zhao**, **Kailun Yang**, and colleagues at Hunan University posted **OmniMimic** ([arXiv:2609.20566](https://arxiv.org/abs/2609.20566)) on **17 September 2026**: one policy, four animal gait styles, on a **Unitree Go2**.

The trick is not a bigger motion library. It is stretching the clips you already have.

<figure>
  <img src="/images/heroes/omnimimic-go2-2.jpg" alt="Unitree Go2 in four outdoor poses labeled Trot, Pace, Canter, and Pronk" loading="lazy" />
  <figcaption>Same actor, four gaits, no fine-tuning on the real Go2. Source: Wu et al., arXiv:2609.20566.</figcaption>
</figure>

## Reverse, reflect, then complete the physics

**Dynamics-completed Motion Augmentation (DMA)** time-reverses a clip for backward motion, reflects it across the sagittal plane for left/right and yaw, then solves for contact forces and joint torques that the reversed tape does not contain. Those labels are training-only.

**Demonstration-guided Omnidirectional Command Expansion (DOCE)** starts near the recorded velocities and widens toward **±2 m/s** in x and y and **±1.5 rad/s** yaw.

**Shared-residual Multi-gait Policy (SMP)** keeps one shared actor and mixes four bounded residual experts with a gait-conditioned soft gate. At deploy, the actor sees proprioception, the velocity command, and a gait code. No reference motion. No guidance torque.

<figure>
  <img src="/images/heroes/omnimimic-go2.jpg" alt="Diagram of OmniMimic motion augmentation, command expansion, residual experts, and Go2 deployment" loading="lazy" />
  <figcaption>DMA, DOCE, and SMP. Source: Wu et al. / OmniMimic project page.</figcaption>
</figure>

## The numbers that are simulation

Against a matched **APEX** baseline, four-gait mean **foot-position RMSE** at forward and backward reference velocities falls **12.9%**. Velocity-tracking RMSE on a uniform Cartesian command grid falls **63.1%**. Ablations split the work: DOCE and SMP move tracking; DMA moves motion fidelity at the reference speeds.

The project page is clear that those percentages are simulation, not the outdoor clips.

Hardware is the fun part. The same actor runs **Trot**, **Pace**, **Canter**, and **Pronk** on a real Go2 with no extra training. The [project page](https://omnimimic.github.io/) has indoor, asphalt, stone, and grass clips, including backward canter and a pace-to-canter switch.

Limits the authors list: fidelity is scored only at forward/backward reference speeds, gaits are discrete labels, and the eval is mostly flat ground.

## A Human's Take

I like a paper that admits dogs do not demo crab-walks and then does the unglamorous work of reversing the tape and filling in the forces. One policy that can pronk on grass and still take a yaw command is the kind of clip I will watch twice. I still want a table of hardware tracking error before I call it omnidirectional.

## Sources

- [arXiv:2609.20566 — OmniMimic](https://arxiv.org/abs/2609.20566)
- [OmniMimic project page](https://omnimimic.github.io/)
- [arXiv HTML — tables, real-Go2 stills, ablations](https://arxiv.org/html/2609.20566v1)
