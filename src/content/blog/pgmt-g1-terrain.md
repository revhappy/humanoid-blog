---
title: "PGMT Puts One G1 Policy on Stairs, Grass, and a 37 cm Box"
description: "Zhejiang and NUS train a perceptive motion tracker that adapts flat-ground references to real terrain without matched demos."
pubDate: 2026-09-11
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/pgmt.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most humanoid motion trackers look great on a flat lab floor and then meet a stair. **PGMT** (Perceptive General Motion Tracking) is a two-stage policy that keeps the dance, the punch, and the cartwheel, then lets the legs cheat when the ground disagrees.

The paper (arXiv:2609.08511, v2 **September 9, 2026**) deploys **zero-shot** on a **29-DoF Unitree G1**. Onboard: **Livox Mid-360S** LiDAR, an elevation map, **NVIDIA Jetson Orin NX**. Obstacles go up to **37 cm**.

<figure>
  <img src="/images/heroes/pgmt.jpg" alt="Unitree G1 running stairs, grass, a box climb, cartwheel, and VR teleop under one PGMT policy" loading="lazy" />
  <figcaption>One policy: outdoor stairs and grass, box climb, cartwheel, VR teleop, fall recovery. Source: PGMT paper, Figure 1.</figcaption>
</figure>

## Two stages, one controller

Stage one is a general tracker and fall-recovery prior on flat ground. An **Intent Fusion Module** mixes robot history with future reference frames. A split-return critic keeps upper-body, lower-body, and auxiliary rewards from stomping each other.

Stage two injects perception. Four **motion-conditioned terrain glimpses** crop 5×5 patches from a yaw-aligned **2 m × 2 m**, **21×21** elevation map. The policy looks where the next motion actually needs footholds, not at the whole height field. **Terrain-aware tracking relaxation** lets the legs deviate on slopes, stairs, and boxes while the upper body stays strict.

The point of the design: you do not need terrain-matched motion clips. References and terrains are sampled independently. A coarse compatibility rule just drops the obviously impossible pairs.

In simulation, PGMT reports **87.81%** completion over 9,600 matched 30-second episodes, and **83.33%** at the hardest level (L9). The same stack without perception (**PGMT-Pretrain**) is **40.02%** overall and **35.31%** at L9. On L9 stairs, four glimpses beat a full-map CNN (**78.12%** vs **64.58–69.79%** for ablations).

<figure>
  <img src="/images/heroes/pgmt-2.jpg" alt="PGMT control modes: joystick, VR teleop, whole-body tracking, and fall recovery on a G1" loading="lazy" />
  <figcaption>Joystick, VR teleop, whole-body tracking, disturbance recovery. Same policy, no switch. Source: PGMT paper, Figure 5.</figcaption>
</figure>

## Real G1, several command plugs

The project page and paper show the same checkpoint doing:

- Joystick locomotion, including jogging and sprinting stairs (clearing more than one step per stride)
- Outdoor grass and dense vegetation
- Box climbs to **37 cm**
- Whole-body teleop via **PICO** and **GMR** retargeting (punch, squat, lie down, stand back up)
- Locomotion teleop: operator drives the upper body while the robot climbs stairs
- Dynamic tracking, including cartwheels on uneven ground
- Push and kick during a dance; autonomous get-up after a fall

No dedicated recovery controller. Elevation maps still do not know semantics: a box you should climb and a box you should not look the same.

## A Human's Take

I am here for the “one policy, several plugs” part. Teleop that does not make the operator specify every stair riser is the useful interface. 37 cm is not a loading dock. If the next revision can tell “obstacle” from “step I am allowed to use,” this becomes a field tool instead of a very good campus demo.

## Sources

- [PGMT project page](https://luyili.github.io/pgmt/)
- [arXiv:2609.08511 — PGMT](https://arxiv.org/abs/2609.08511)
- [PGMT paper HTML](https://arxiv.org/html/2609.08511)
