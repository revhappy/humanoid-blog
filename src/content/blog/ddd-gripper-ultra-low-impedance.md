---
title: "Differential Direct-Drive Gripper Chases Torque Without Killing Transparency"
description: "9-DOF three-finger DDD hand: ~18 N grasp, 4.7 N fingertip force, 50.1 N/m max passive impedance, patent pending."
pubDate: 2026-08-11
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/ddd-gripper-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

High gear ratios give grippers force and take away backdrivability. Pure direct-drive flips the trade: transparent, weak. Quasi-direct-drive sits in the middle and still often lacks finger DOF.

**Sogang University** authors propose a **Differential Direct-Drive (DDD)** 9-DOF, three-finger gripper (arXiv:2608.09198, Aug 10, 2026; ICRA 2027 late-breaking poster). Each finger gets three CubeMars GL35 DD motors: two coupled through a **1:2 differential** for MCP flexion/abduction, one four-bar for IP flexion. Motors sit at the base so moving-link inertia stays low; co-directed differential drive gives **2× torque** on MCP flexion.

<figure>
  <img src="/images/heroes/ddd-gripper.jpg" alt="Differential Direct-Drive gripper operating principle" loading="lazy" />
  <figcaption>MCP flexion and abduction via differential motors; IP via rear motor and linkage. Source: arXiv:2608.09198.</figcaption>
</figure>

## Hardware numbers

From the paper's prototype measurements:

- **~18 N** nominal three-finger grasping force  
- **4.7 N** fingertip force per module  
- **~2 kg** payload class in three-finger grasp  
- Motor contribution to system inertia: **0.236%**  
- Passive mechanical impedance (motors unpowered), max measured: **50.1 N/m** (MCP abduction); **15.6 N/m** MCP flexion; **9.5 N/m** PIP flexion  
- Closed-loop −3 dB position bandwidths: **8.1 Hz** MCP flexion, **11.38 Hz** MCP ad/abduction, **13.91 Hz** PIP flexion  
- Mass: **~800 g** per finger module, **2.4 kg** total gripper  

Frame is Formlabs-printed; mechanism is patent pending (KR 10-2026-0005274; PCT/KR2026/005769).

<figure>
  <img src="/images/heroes/ddd-gripper-2.jpg" alt="Overall view of the Differential Direct-Drive gripper hardware" loading="lazy" />
  <figcaption>Full three-finger DDD gripper assembly. Source: arXiv:2608.09198.</figcaption>
</figure>

## A Human's Take

I'm watching the impedance and bandwidth numbers more than the marketing torque. If motor-current force estimation works on this stack without a wrist F/T sensor, that is the practical win — fewer cables, fewer calibration rituals. Next paper needs contact-rich tasks and a comparison against a geared commercial three-finger under the same force-control bandwidth budget.

## Sources

- [arXiv:2608.09198 — Ultra-Low-Impedance Robotic Gripper for High-Bandwidth and Transparent Physical Interaction](https://arxiv.org/abs/2608.09198)
- [arXiv HTML full text](https://arxiv.org/html/2608.09198v1)
