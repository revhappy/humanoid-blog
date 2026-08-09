---
title: "PanoVLA Puts 360° Context Into Mobile Bimanual Manipulation"
description: "PanoVLA fuses top-mounted panoramas with local cameras for wheeled dual-arm tasks, reporting 73.4% end-to-end success across four real-robot workflows."
pubDate: 2026-08-09
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/panovla-mobile.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Mobile arms keep failing for a boring reason: the thing they need is outside the wrist camera, and the base has already rolled past the only good view.

**PanoVLA**, described in arXiv:2608.02257 (submitted Aug 3, 2026), is a panorama-aware vision-language-action policy for wheeled bimanual robots. The authors pair a VR whole-body teleop stack with a Mixture-of-Transformers model that treats a top-mounted 360° camera as first-class context, not an afterthought image stream.

<figure>
  <img src="/images/heroes/panovla-mobile.jpg" alt="VR teleoperation diagram mapped to wheeled dual-arm robot with 360 camera" loading="lazy" />
  <figcaption>GMR-based whole-body teleoperation feeding a wheeled bimanual platform. Source: arXiv:2608.02257.</figcaption>
</figure>

## What they built

Hardware is a **RANGER MINI 3** base, two **Agilex PIPER** 6-DoF arms with parallel grippers, three local RGB cameras (front + two wrists), and a top-mounted 360° camera stored as equirectangular images. Operators wear a VR headset, two hand controllers, and three body trackers; sparse motion is reconstructed into SMPL and retargeted through **General Motion Retargeting (GMR)** so base and arms move from one body stream instead of a separate joystick for the chassis.

Dataset facts from the paper:

- **800** successful teleoperated trajectories (200 per task)
- About **5.5 hours** of multimodal demos
- Roughly **500K** synchronized frames at **25 Hz**
- Whole-body action is **17-D** (14 arm/gripper + 3 base velocities)

Tasks: **Move Pen**, **Move Block**, **Open Curtain**, **Wipe Table** — layouts that deliberately put targets off-axis relative to local cameras.

<figure>
  <img src="/images/heroes/panovla-mobile-2.jpg" alt="PanoVLA Mixture-of-Transformers architecture with panorama expert" loading="lazy" />
  <figcaption>PanoVLA architecture: VLM expert, panorama expert, action expert. Source: arXiv:2608.02257.</figcaption>
</figure>

## Results that matter

Closed-loop real-robot evaluation (15 trials per task) reports average **stage completion rate 91.3%** and **end-to-end success 73.4%** for PanoVLA. A local-view **π0.5** baseline lands at **58.6% SCR** and **30.0% SR**. Naively stuffing the equirectangular panorama into SigLIP helps some tasks but collapses on long multi-stage work such as **Wipe Table**; the dedicated **MTPano** encoder plus **100M** panorama expert is what holds global state across stages.

<figure>
  <img src="/images/heroes/panovla-mobile-3.jpg" alt="Real-world mobile manipulation task rollouts with dual arms" loading="lazy" />
  <figcaption>Representative closed-loop rollouts across the four mobile tasks. Source: arXiv:2608.02257.</figcaption>
</figure>

## A Human's Take

I’m so here for the boring sensor upgrade: one more camera, wired into the policy the hard way. Mobile manipulation fails less because of “not enough foundation model” and more because the robot keeps forgetting where the cloth is when the base turns. If panoramic fusion stays this useful outside one lab layout, every wheeled dual-arm cell is going to want a ceiling eye — and a training stack that doesn’t treat that eye like a decorative logo cam.

## Sources

- [arXiv:2608.02257 — Learning Panorama-Aware VLA for Mobile Manipulation with Whole-Body Teleoperation](https://arxiv.org/abs/2608.02257)
- [arXiv HTML full text](https://arxiv.org/html/2608.02257)
