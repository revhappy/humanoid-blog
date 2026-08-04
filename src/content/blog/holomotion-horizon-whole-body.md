---
title: "HoloMotion: Horizon’s Open Whole-Body Humanoid Controller Hits 300 FPS"
description: "Horizon Robotics open-sources HoloMotion for whole-body humanoid control, with MoE inference around 300 FPS and zero-shot G1 demos."
pubDate: 2026-08-04
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/holomotion-ie.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Horizon Robotics has open-sourced **HoloMotion**, a foundation model for whole-body humanoid motion control. Interesting Engineering’s write-up on **HoloMotion-1** describes a large MoE Transformer “cerebellum” aimed at real-time imitation and teleoperation on edge hardware, with GitHub releases through **v1.4** (July 16, 2026).

## What it does

HoloMotion is built for motion tracking and whole-body imitation rather than full language-to-task VLA stacks. The project page and README describe a reference-conditioned MoE Transformer trained on large motion corpora — the v1.3 notes scale parameters from tens of millions toward **0.4B** and motion data from tens of hours toward **2,000+ hours**, with policy inference moving from roughly **100** toward **~300 FPS**.

Interesting Engineering reports on-device inference around **200–300** control cycles per second on a Unitree G1’s onboard computer, with the low-level motion loop at about **50 Hz**. The same coverage says the policy transferred zero-shot from simulation onto G1 hardware without extra real-world fine-tuning, showing dance, crawl, sit, and kick-style motions plus live VR / MoCap teleoperation.

<figure>
  <img src="/images/heroes/holomotion-ie.jpg" alt="Unitree G1 performing dance, crawl, kick, and teleop box carry with HoloMotion" loading="lazy" />
  <figcaption>Zero-shot and teleop motion demos on Unitree G1. Source: Interesting Engineering / Horizon Robotics.</figcaption>
</figure>

## Stack and roadmap

GitHub documents three user paths: offline motion replay, live teleoperation, and full train-your-own. **HoloSMPL** unifies VR, inertial, optical, and vision capture; **HoloRetarget** (v1.4) is claimed at **3,000+ FPS** on RTX 4090 for data generation and **300+ FPS** fully on-robot for teleop retargeting.

The roadmap is explicit:

- **v1.x Any Pose** — motion imitation (done)
- **v2.x Any Command** — language / task-conditioned motion (next)
- **v3.x Any Terrain** — planned
- **v4.x Any Embodiment** — planned

Technical report: arXiv:2605.15336. Code, Docker deployment docs, and Hugging Face model collection are public.

<figure>
  <img src="/images/heroes/holomotion-1.jpg" alt="HoloMotion MoE policy architecture and latency charts" loading="lazy" />
  <figcaption>MoE policy architecture and training/inference latency charts from the open repo. Source: HorizonRobotics/HoloMotion on GitHub.</figcaption>
</figure>

## A Human's Take

Whole-body tracking that actually runs at control rates is the boring layer factories need before fancy task models matter. I’m less interested in the martial-arts kick reels than in whether HoloRetarget and the Docker path let a lab stick this on a G1 without a six-month systems project. Command following and terrain are still roadmap — judge the project on those when they ship, not on the dance clips.

## Sources

- [Horizon Robotics — HoloMotion project page](https://horizonrobotics.github.io/robot_lab/holomotion/)
- [GitHub — HorizonRobotics/HoloMotion](https://github.com/HorizonRobotics/HoloMotion)
- [Interesting Engineering — China unveils powerful 4B humanoid robot model with edge performance](https://interestingengineering.com/ai-robotics/china-humanoid-robot-intelligence-300-fps-control)
- [arXiv:2605.15336 — HoloMotion-1 Technical Report](https://arxiv.org/abs/2605.15336)
