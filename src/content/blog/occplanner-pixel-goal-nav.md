---
title: "OccPlanner Turns a Pixel Tap Into a 3D Path on a Go2"
description: "A diffusion planner grounds image-space goals in local occupancy and lifts 5–8 m sim success from 21% to 72% over NavDP."
pubDate: 2026-08-17
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/occplanner-pixel-goal.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**OccPlanner** is a diffusion local planner that takes a **pixel in the camera** as the goal, then builds a continuous path through a learned **3D occupancy** volume. The technical report is on arXiv as **2608.14160**.

A pixel has no depth and no “you can walk here” label. Most pixel-goal stacks either stay in image space or back-project a waypoint and hope. OccPlanner’s bet is to keep asking the occupancy grid where the floor actually is.

<figure>
  <img src="/images/heroes/occplanner-pixel-goal.jpg" alt="OccPlanner teaser showing L3ROcc occupancy generation and pixel-goal trajectories" loading="lazy" />
  <figcaption>L3ROcc builds local occupancy from RGB video; OccPlanner plans through it. Source: arXiv:2608.14160.</figcaption>
</figure>

## L3ROcc, then a two-stage goal

**L3ROcc** (Local 3D Reconstruction with Occupancy) turns monocular navigation video into robot-centric occupancy. It reconstructs geometry with **π³**, voxelizes it, then ray-marches so voxels are **occupied**, **observed free**, or **unknown**.

OccPlanner shares an RGB-D encoder, predicts a local occupancy volume, and compresses the near-ground slice into tokens. The pixel goal becomes a Fourier feature. Two cross-attention stages then mix that goal with visual history and occupancy before a **10-step** diffusion head emits **24** waypoints.

Training used **InternData-N1**: more than **200,000** simulated indoor trajectories, **30** epochs on four **H100**s, about **48** hours. Input is eight **224×224** RGB-D frames.

## The number that jumped

Closed-loop eval is **6,000** episodes in **60** unseen **InternScenes** rooms: home, commercial, cluttered-easy, cluttered-hard, at **3–5 m** and **5–8 m**.

In the **5–8 m** band, average success over four categories rises from **NavDP**’s **20.81%** to **71.55%**. Cluttered-easy hits **86.20%**. Cluttered-hard hits **84.92%**. The paper also lists home going from **24.98%** to **69.90%** and commercial from **19.07%** to **45.17%**. Success is a stop within **0.5 m**.

Ablations say **ego-goal** supervision is the big single-stage gain, and **two-stage** conditioning then lifts cluttered-hard from **75.55%** to **84.92%**.

<figure>
  <img src="/images/heroes/occplanner-pixel-goal-2.jpg" alt="OccPlanner simulated paths through cluttered, commercial, and home scenes" loading="lazy" />
  <figcaption>Pixel goals (red) and occupancy-conditioned paths across four scene types. Source: arXiv:2608.14160.</figcaption>
</figure>

## A Go2 in an office, open-loop

They recorded RGB-D on a **Unitree Go2** in a cluttered office. Zero-shot, the sim-trained model already draws coarse obstacles and a goal-directed curve. Fine-tuning on **829** L3ROcc-labeled real clips makes the occupancy denser around furniture. That test is **open-loop** and **qualitative**. No closed-loop physical success rate is in the paper.

<figure>
  <img src="/images/heroes/occplanner-pixel-goal-3.jpg" alt="Unitree Go2 office sequences comparing zero-shot and fine-tuned occupancy" loading="lazy" />
  <figcaption>Same Go2 views, zero-shot vs fine-tuned occupancy. Source: arXiv:2608.14160.</figcaption>
</figure>

## A Human's Take

Tapping a pixel on the floor is how I already drive a robot when I do not have a map. The 70-point clutter jump is the part I will remember. The Go2 reel is still a look-but-don’t-walk test. Close the loop on that office and then we can talk about whether occupancy tokens earn their keep outside InternScenes.

## Sources

- [arXiv:2608.14160 — OccPlanner](https://arxiv.org/abs/2608.14160)
- [arXiv HTML — OccPlanner paper](https://arxiv.org/html/2608.14160v1)
