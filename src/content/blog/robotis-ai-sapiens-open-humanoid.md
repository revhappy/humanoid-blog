---
title: "ROBOTIS AI Sapiens K1: Open-Source Humanoid for Physical AI"
description: "ROBOTIS documents AI Sapiens K1 — a 1355 mm, 35 kg, 23-DoF humanoid on Dynamixel-Q actuators with RL, imitation learning, and a planned full open stack."
pubDate: 2026-08-01
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/robotis-ai-sapiens.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**ROBOTIS**, the company behind Dynamixel servos, is pushing **AI Sapiens** as an open humanoid platform for physical AI — hardware, learning workflows, and (as releases land) CAD and firmware. The documented research body is **AI Sapiens K1**.

## Hardware that fits a lab door

From the official ROBOTIS docs:

| Spec | Value |
|------|--------|
| **Height** | **1355 mm** |
| **Weight** | **35 kg** |
| **DOF** | **23** total (5 per arm, 6 per leg, 1 waist yaw) |
| **Actuators** | **DYNAMIXEL-Q** QDD: **12×** QC060-200 + **11×** QC080-240 |
| **QC060 max torque / speed** | **30.0 Nm** / **200 rpm** (48 V, 20:1, 435 g) |
| **QC080 max torque / speed** | **72.6 Nm** / **110 rpm** (48 V, 20:1, 845 g) |

QDD here means low gear reduction, low-inertia PMSM, integrated electronics, and high-speed communication — the same design language ROBOTIS has used to sell torque-controllable arms for years, now in a full biped package.

<figure>
  <img src="/images/heroes/robotis-ai-sapiens-3.jpg" alt="AI Sapiens K1 hardware drawing overview" loading="lazy" />
  <figcaption>K1 mechanical drawing preview from ROBOTIS documentation. Source: ROBOTIS Docs.</figcaption>
</figure>

## Learning stack: RL legs, imitation upper body

Docs describe **reinforcement learning** for locomotion in **NVIDIA Isaac Sim**, then transfer to the physical robot, plus an **imitation learning** path that records leader-follower demos and trains policies for natural repeatable upper-body behaviors.

On the Open Robotics Discourse (May 31, 2026), ROBOTIS engineer **Pyo** showed text-to-motion on the platform using **NVIDIA Kimodo**, with full-body motions executed under RL control. The post said the company was preparing to open **3D CAD, schematics, firmware, control code, simulation assets, and RL configs**, with a target of a full resource drop by end of June 2026. Specs and open-source resources may still change as the product approaches broader launch — ROBOTIS flags that explicitly in the docs.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/2xAJzQ8V9p8"
    title="ROBOTIS AI Sapiens text-generated motion with NVIDIA Kimodo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Open Humanoid AI Sapiens: text-generated full-body motion on hardware. Source: ROBOTIS / Open Robotics Discourse / YouTube.</p>

<figure>
  <img src="/images/heroes/robotis-ai-sapiens-2.jpg" alt="AI Sapiens imitation learning workflow diagram" loading="lazy" />
  <figcaption>Imitation learning workflow illustrated in ROBOTIS docs. Source: ROBOTIS.</figcaption>
</figure>

## A Human's Take

I care about whether the open-source calendar is real. Docs that list BoM and STEP files as “coming soon” are a promise, not a kit. If ROBOTIS actually drops CAD and RL configs that boot on a Dynamixel-Q biped, university labs get a serious alternative to Chinese G1 clones with opaque support. Until then, treat AI Sapiens as a well-documented platform in progress — and the 23-DoF / 35 kg sheet is already useful for anyone sizing lab humanoids.

## Sources

- [ROBOTIS Docs — AI Sapiens K1 introduction](https://docs.robotis.com/docs/systems/aisapiens/introduction/)
- [ROBOTIS Docs — AI Sapiens K1 hardware specifications](https://docs.robotis.com/docs/systems/aisapiens/specifications/hardware)
- [Open Robotics Discourse — AI Sapiens + NVIDIA Kimodo](https://discourse.openrobotics.org/t/open-humanoid-ai-sapiens-with-ros-2-text-generated-motion-with-nvidia-kimodo/55194)
- [YouTube — AI Sapiens text-generated motion demo](https://www.youtube.com/watch?v=2xAJzQ8V9p8)
