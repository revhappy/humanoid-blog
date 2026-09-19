---
title: "A G1 Walks Up and Closes the Door From Head Depth Alone"
description: "ViLoMan distills door-closing onto a 29-DoF Unitree G1. One policy, onboard depth, no motion reference. 32 of 40 real trials close under 10 degrees."
pubDate: 2026-09-19
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/viloman-g1-door.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Closing a door is a whole-body job: walk up, plant, push, keep your feet. **Zejie Tian**, **Ruibing Hou**, **Bingpeng Ma**, **Börje F. Karlsson**, and **Shiguang Shan** (ICT/CAS, UCAS, BAAI) posted [arXiv:2609.19340](https://arxiv.org/abs/2609.19340) on **16 September 2026** with a [project page](https://viloman-anonymous.pages.dev/) of real G1 clips.

**ViLoMan** maps four frames of head-mounted depth (**36×64**) plus an **808-D** proprioceptive history to **29** joint-position commands at **50 Hz**. At runtime there is no reference motion and no intermediate velocity or keypoint command.

<figure>
  <img src="/images/heroes/viloman-g1-door.jpg" alt="Simulated Unitree G1 humanoids approaching a door from several start poses under one policy" loading="lazy" />
  <figcaption>One policy, several starts, one door. Source: Tian et al., arXiv:2609.19340.</figcaption>
</figure>

## Human clips, then physics, then a student

They start from TRUMANS human–door clips, retarget with OmniRetarget, and fill in the missing walk-up with Kimodo. **10** approaches × **71** interactions = **710** kinematic sequences. DoorGym randomizes handle type (lever, pull, round), hinge side, opening angle, and size. A physics tracker then has to actually execute the motion. After filtering: **409** train trajectories, **106** test, split so TRUMANS source clips do not leak.

A frozen GentleHumanoid motion tracker is the prior. Residual specialists, trained with PPO, add contact corrections. Online DAgger distills that privileged teacher into the depth student. Offline behavior cloning is the cautionary tale: **31.89%** door-closing success and **56.98%** survival on the test split. The distilled student is **77.55%** success and **99.81%** survival. Strip vision and success falls to **33.96%**.

A rollout counts as success only if the robot stays up and the door ends below **10°**.

<figure>
  <img src="/images/heroes/viloman-g1-door-2.jpg" alt="Grid of real Unitree G1 trials approaching and closing a physical door from several start poses" loading="lazy" />
  <figcaption>Same ONNX policy on a physical G1. Source: Tian et al., arXiv:2609.19340.</figcaption>
</figure>

## Hardware: 32 of 40

They export the student and drop it on the G1’s onboard computer. Depth comes from a head-mounted **Intel RealSense D435i**. Eight combinations of start pose and door angle, five trials each.

ViLoMan: **32/40 (80%)**. Behavior cloning: **15/40 (37.5%)**. A student trained with a quarter of the parallel environments: **27/40 (67.5%)**. Successful real rollouts average **6.6 s**. Simulation test success for the same student is **77.55%** in about **6.20 s**.

SONIC’s latent-token interface is **58.30%** test success. A Handoff-style task-space loop with Qwen3-VL-8B is **20.94%** and takes on the order of **100 s**. Direct joints win the comparison they ran.

The failure they show is not a fall. The G1 gets the door almost shut and stops a hair over 10°. Depth contrast dies when the panel fills the camera.

## A Human's Take

Door closing is the right boring task. You can fake a dance clip. You cannot fake a hinge angle. I care that they measured DAgger against cloning on the same robot, same camera, same 10° line. Eighty percent with a 36×64 depth image is not a butler. It is a policy that found the door without a motion file in its pocket, which is the version I would actually try on a real latch.

## Sources

- [arXiv:2609.19340 — ViLoMan: Learning Visual-Proprioceptive Whole-Body Loco-Manipulation Skills for Humanoid Robots](https://arxiv.org/abs/2609.19340)
- [arXiv HTML — tables, real G1 stills, and failure case](https://arxiv.org/html/2609.19340v1)
- [ViLoMan project page — real-world door-closing clips](https://viloman-anonymous.pages.dev/)
