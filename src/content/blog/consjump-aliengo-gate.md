---
title: "ConsJump Sends a 22 kg Aliengo Through a Body-Sized Gate"
description: "HKU and Oxford’s ConsJump policy jumps a Unitree Aliengo through a narrow gate at 2.5 m/s with 0.44 s in the air."
pubDate: 2026-09-02
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/consjump-aliengo-gate.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A **22-kilogram Unitree Aliengo** sprints at a rectangular frame, tucks, and flies through a gap about as wide as its own body. The controller is **ConsJump**, a hierarchical reinforcement-learning stack from the University of Hong Kong’s Adaptive Robotic Controls Lab and the Oxford Robotics Institute. The paper went on arXiv on **20 August 2026** and is listed in *Advanced Robotics Research*. Interesting Engineering covered the hardware result on **1 September**.

There is no scripted jump. A high-level policy watches the gate and picks a velocity command. A frozen low-level policy turns that command into animal-like gaits, including the aerial phase.

<figure>
  <img src="/images/heroes/consjump-aliengo-gate.jpg" alt="Unitree Aliengo in mid-air passing through a white rectangular gate, side and front views" loading="lazy" />
  <figcaption>Hardware jump through a body-scale gate. Source: Luo et al., arXiv:2608.19977.</figcaption>
</figure>

## Two loops, one jump

The low-level policy imitates retargeted animal clips: pace, canter, jump, and steer. Jump frames are sampled **6×** more often than slow gaits so the network actually learns the hard part. Training ran **5,480** agents in parallel in Isaac Gym for **25,000** episodes. Forward command range is **0.0–2.4 m/s**; yaw is **±1.57 rad/s**.

On the trained policy, low commands stay in a pace (**0.25–1.57 m/s**). High commands trigger a running jump (**1.42–2.40 m/s**). The high-level module sits on top at **10 Hz** and outputs only forward speed and yaw. The locomotion loop runs at **50 Hz**.

On hardware, the robot used an onboard **Intel D435i** RGB-D camera to find the black square frame, an **Intel NUC** for both controllers, and a **VICON** hall of **6.0 m × 3.0 m** for pose. Peak thigh torque on Aliengo is about **45 Nm**.

<figure>
  <img src="/images/heroes/consjump-aliengo-gate-2.jpg" alt="Aliengo with labeled D435i camera, NUC computer, and VICON markers on its back" loading="lazy" />
  <figcaption>Sensor stack: (1) D435i, (2) NUC, (3) VICON markers. Source: Luo et al., arXiv:2608.19977.</figcaption>
</figure>

## Numbers from the run

Interesting Engineering and the paper agree on the flight: the robot hit as much as **2.5 m/s**, then braked hard for landing. Airborne time is about **0.44 seconds**. Rear calf joints folded more than **140°** so the feet missed the frame.

Gate randomization in training put the center anywhere from **1.2–6.0 m** ahead, **±1.8 m** sideways, and **0.5–0.63 m** high, with outer size **0.7–1.0 m**. The team also ran the same stack over stairs, gaps, a slope, and a moving gate. Lateral tests stepped the gate from **+1.4 m** to **−1.4 m** in **0.4 m** steps; the paper says those trials finished without a failure.

<figure>
  <img src="/images/heroes/consjump-aliengo-gate-3.jpg" alt="Time-lapse of Aliengo jumping a gate from uneven terrain, plus foot trajectory plot" loading="lazy" />
  <figcaption>Uneven takeoff and the planned foot paths that dodge the frame. Source: Luo et al., arXiv:2608.19977.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/consjump-aliengo-gate-4.jpg" alt="Aliengo gait diagram with velocity peaking near 2.5 m/s and thigh torque traces" loading="lazy" />
  <figcaption>Gait, speed, and torque through the jump. Source: Luo et al., arXiv:2608.19977.</figcaption>
</figure>

End-to-end baselines that tried to learn the whole task from scratch either jerked through the gap or collapsed in training. ConsJump’s bet is a small, semantic command space on top of a skill library, not a new joint-level acrobat for every obstacle.

## A Human's Take

A dog-sized robot clearing a dog-sized hole is the right demo for hierarchical control. The VICON hall still does a lot of the localization work, and the gate is a high-contrast square, not a random doorway. What I want next is the same takeoff logic on a construction catwalk with a cheap camera and no motion-capture ceiling. If the high-level policy still picks the jump when the frame is dirty and the floor is wet, then the 0.44-second flight counts as a skill, not a lab stunt.

## Sources

- [arXiv:2608.19977 — ConsJump paper](https://arxiv.org/abs/2608.19977)
- [arXiv HTML — figures and methods](https://arxiv.org/html/2608.19977v1)
- [Interesting Engineering — quadruped jumps tight gaps](https://interestingengineering.com/ai-robotics/quadruped-robot-jump-through-tight-gaps)
- [Wiley — Advanced Robotics Research DOI 10.1002/adrr.202500032](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adrr.202500032)
