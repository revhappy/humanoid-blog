---
title: "This UR10e Puts a Jacket On You While You Wave and Check Your Phone"
description: "A PolyU dressing policy learned on still arms, then tracks a moving sleeve with point-cloud registration. Nine people, three garments, 89% insert."
pubDate: 2026-09-08
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/dressing-in-motion-2.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most robot dressing papers freeze the arm. [arXiv:2609.04759](https://arxiv.org/abs/2609.04759), posted **4 September** by a **Hong Kong Polytechnic University** group with **York** and **Great Bay University**, lets the person move.

A **UR10e** holds the garment. After the sleeve is on the hand, the subject can wave, reach for a phone, or take an object. The policy still has to slide the sleeve to the shoulder.

<figure>
  <img src="/images/heroes/dressing-in-motion-2.jpg" alt="Six columns of a UR10e dressing people during up-down, side-to-side, wave, phone, and object-taking motions" loading="lazy" />
  <figcaption>Canonical motion test. Faces blurred in the paper. Source: Sun et al., arXiv:2609.04759.</figcaption>
</figure>

## Static demos, moving people

A diffusion policy learns from **210** SpaceMouse demonstrations on **static** arms with mixed poses. No sim-to-real: simulation and hardware use separate datasets. At runtime, a PDE-diffused scalar field on the arm point cloud picks the uncovered region near the sleeve, then **GICP** registers that patch frame to frame. The estimated transform warps the pending end-effector chunk. DDIM inference is under **50 ms** and registration under **10 ms** on an **RTX 5070** laptop GPU.

Safety caps: **20 kg·m/s** joint momentum, **120 N** tool force. Camera is a **RealSense D435i**.

Nine participants (**3** women, **6** men), heights **162–185 cm**. Three garments: vest, shirt, windbreaker. Six motion patterns: up-and-down, side-to-side, back-and-forth, waving, phone use, object receiving. Each person ran **28** trials. **36** trials per method, **252** in all.

Overall dressing ratio **0.88 ± 0.105**, sleeve-insertion success **89% ± 10.4%**. Baselines (DP3, Diff-MPC, image diffusion, BC-LSTM, and an ablation without trajectory adaptation) trail on progress, freedom-of-movement ratings, and comfort. A capability sweep of **150** extra trials shows the policy thinning out at **80–100 cm** swings and **0.8–1.0 Hz**.

<figure>
  <img src="/images/heroes/dressing-in-motion-3.jpg" alt="Lab setup with UR10e, depth camera, vest shirt and windbreaker, plus six arm-motion diagrams" loading="lazy" />
  <figcaption>Hardware setup, garments, and the six motion patterns. Source: Sun et al., arXiv:2609.04759.</figcaption>
</figure>

## Simulation first

Assistive Gym, four body models, three Cloth3D sleeve types, ten motion patterns, three speeds including **2.0 rad/s**. **180** teleop trajectories for imitation methods. Over **1,470** eval trials, the full method stays above **0.95** mean dressing ratio and insertion success even when the arm is moving. Without the adaptation module, insertion fails when the hand pulls away from the opening.

The robot is a cobot arm, not a humanoid. The contact problem is the same one a home humanoid will hit the first time someone shrugs mid-sleeve.

<figure>
  <img src="/images/heroes/dressing-in-motion-4.jpg" alt="Simulation stills of a robot dressing different body models in multiple garments" loading="lazy" />
  <figcaption>Assistive Gym dressing trials. Source: Sun et al., arXiv:2609.04759.</figcaption>
</figure>

## A Human's Take

If you cannot dress someone who is fidgeting, you cannot dress someone who is tired. The 89% insert number is on scripted lab motions with a force cap, not a bedroom at 7 a.m. Still, teaching on still arms and adapting online is the right split. I would not put this gripper near a collarbone without the 120 N trip.

## Sources

- [arXiv:2609.04759 — Dressing in Motion](https://arxiv.org/abs/2609.04759)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.04759)
