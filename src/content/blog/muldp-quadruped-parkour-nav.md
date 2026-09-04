---
title: "MulDP Lets a Go1 Plan Parkour, Not Just Avoid the Obstacle"
description: "Fudan’s diffusion navigator hits 89.7% sim success and a 1 km outdoor follow on Unitree Go1, accepted to IROS 2026."
pubDate: 2026-09-04
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/muldp-nav.png"
readTime: "4 min read"
featured: false
draft: false
---

Most quadruped parkour clips still have a human on the stick for the high-level path. **Kangmai Hu**, **Lihua Zhang**, and colleagues at Fudan’s College of Intelligent Robotics posted **MulDP** on **3 September**: a diffusion policy that emits velocity commands so a **Unitree Go1** can decide to jump the gap instead of walking around it. The paper is marked **IROS 2026** accept.

MulDP conditions on historical depth, proprioception, the current depth frame, and a goal, then denoises a horizon of **(Δv, Δθ)** commands. Only the first command goes to the locomotion policy. The navigator runs at **5 Hz** with **10** DDPM steps.

<figure>
  <img src="/images/heroes/muldp-nav.png" alt="Unitree Go1 following a person across plaza stairs, grass, and gaps, with overhead maps" loading="lazy" />
  <figcaption>Outdoor dynamic-goal follow, about 1 km. Source: Hu et al., arXiv:2609.03984.</figcaption>
</figure>

## A parkour dataset, not a hallway dataset

**QPND** is collected in Isaac Sim on a Go1 with a head-mounted depth camera matched to a RealSense **D435i** (10 Hz, **2 m** range, up to **10 mm** / **±5°** pose noise). Terrains: gaps **0.4–0.7 m**, hurdles **0.4–0.5 m**, stairs **0.15–0.2 m**, plus boxes, gravel, flat, and impassable walls. Scripted policies cover simple maps; teleop covers the multimodal ones. Totals: **31.0 km**, **6,400** trajectories, about **250,000** depth images.

The low-level parkour skill is **RENet**, a vision RL controller that still needs someone else to pick velocities. MulDP is that someone.

<figure>
  <img src="/images/heroes/muldp-sim.png" alt="Isaac Sim Go1 traces taking different parkour paths through pillars, stairs, and gaps" loading="lazy" />
  <figcaption>Multimodal paths in an unseen 16 m × 16 m Isaac Sim map. Source: Hu et al., arXiv:2609.03984.</figcaption>
</figure>

In Isaac Sim, six terrain types × two difficulties, **50** randomized starts, goals **5–8 m** out, **60 s** timeout. MulDP’s averages: **89.7%** success, **71.9%** SPL, **4.9 s** time-to-reach. A QPND-trained NavDP* sits at **59.0%** SR. Drop the decision-memory encoder and success collapses to **7.4%** while the robot wanders (**90.3%** traversal). No proprioception: **69.5%**. No data augmentation: **32.5%**.

## Real grass, real bikes

On hardware the stack is an **Orin NX 16 GB** and a D435i, with UWB for the relative goal. Velocity traces show the dog accelerating toward **2 m/s** before a gap and only slowing after landing. In clutter it holds about **1.1 m/s** and steers instead of slamming the brakes.

A long outdoor follow covers stairs, grass, a gap, a garden, and a hurdle. The paper calls it more than **1 km** with no human intervention. Unseen discs on grass and parked bicycles get circumnavigated rather than climbed.

<figure>
  <img src="/images/heroes/muldp-outdoors.png" alt="Go1 facing a disc on grass and a bicycle beside a path" loading="lazy" />
  <figcaption>Out-of-distribution outdoor obstacles. Source: Hu et al., arXiv:2609.03984.</figcaption>
</figure>

## A Human's Take

Parkour without a joystick is the right demo for a local planner. I like that they measure SPL and not just “it jumped once.” The 1 km follow is the clip I want, with the UWB goal in the caption so nobody pretends this is a GPS-free city stack. Next test is the same run when the person turns a corner the depth camera has not seen.

## Sources

- [arXiv — MulDP: Multimodal Diffusion Policy for Autonomous Quadruped Parkour Navigation](https://arxiv.org/abs/2609.03984)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2609.03984v1)
