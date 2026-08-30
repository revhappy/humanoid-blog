---
title: "Menlo’s Asimov 1 Walks Zero-Shot From Sim, Onboard"
description: "Menlo Research says Asimov 1 now transfers flat-ground walking from simulation with no per-robot tuning, running 50 Hz on the motion board."
pubDate: 2026-08-29
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/menlo-asimov-sim2real.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Menlo Research** posted on **27 August 2026** that **Asimov 1** now does **zero-shot sim-to-real** walking on flat ground. Same policy in MuJoCo or Isaac Lab, same policy on the metal, no per-robot retune. The company says that holds across **multiple units**, not one lab hero, and that the base policy runs **onboard** on the motion-control board at **50 Hz**, driving **25 motors** and sensors with no external computer in the loop.

Menlo’s line is that the gap closed more from making the hardware boring than from another training trick.

<figure>
  <img src="/images/heroes/menlo-asimov-sim2real.jpg" alt="Four panels of the black-and-gold Asimov 1 humanoid walking forward, backward, sideways, and turning" loading="lazy" />
  <figcaption>Omnidirectional walking on Asimov 1. Source: Menlo Research.</figcaption>
</figure>

## What they actually claim

The post’s takeaways, in their words:

- Zero-shot transfer on flat walking, with some generalization to slight slopes and grass texture, without extra tuning
- Multiple units of the same robot, not a single tuned machine
- Onboard 50 Hz control of 25 motors and sensors
- Lessons they think transfer to other open hardware, not only Asimov

Figure 2 on the page is a grid of joint position-versus-velocity plots for **12 lower-body joints**. Real-robot traces in blue sit on top of simulation traces in green for forward, backward, and lateral commands at **0.5 m/s**.

<figure>
  <img src="/images/heroes/menlo-asimov-sim2real-2.jpg" alt="Joint position-velocity plots comparing real Asimov traces in blue with MuJoCo traces in green" loading="lazy" />
  <figcaption>Real vs MuJoCo joint phase portraits. Source: Menlo Research.</figcaption>
</figure>

They are explicit about what is **not** claimed: no large-fleet consistency yet, and no complicated loco-manipulation. Mild disturbance recovery, yes. Shipyard parkour, no.

The training stack on the page is an adversarial-motion (AMP) pipeline with a discriminator, style and task rewards, and a PPO actor-critic. Researchers iterate in **mjlab**, then move to **Isaac Lab** with Newton physics. Actuator configs live in [Isaac Lab pull request 7071](https://github.com/isaac-sim/IsaacLab/pull/7071).

## Hardware they call “deterministic”

Menlo spent **eight months** on this, per the post. They asked other labs how long a new locomotion policy takes to go live and heard answers from **3–5 hours** to **two weeks**. They think they have parity with **Unitree locomotion circa early 2025**.

Fixes they list: a fan after PREEMPT_RT Linux made thermals worse; CPU thermal throttling that had been quietly slowing actuators; CAN cleanup, including a move to full SPI-CAN and an **MCP2518FD** chip because native CAN on their CPU was buggy. Domain randomization, they say, should only cover things that are actually random on the robot. They wrote that up earlier in “Noise is all you need.”

<figure>
  <img src="/images/heroes/menlo-asimov-sim2real-3.jpg" alt="Diagram of Asimov motion retargeting and AMP training with a PPO agent in simulation" loading="lazy" />
  <figcaption>AMP training pipeline from the post. Source: Menlo Research.</figcaption>
</figure>

The Asimov 1 product page, fetched this session, still lists a **1.2 m**, **35 kg**, **25+2 DoF** educational biped, a **$499** deposit toward a **$20,000** kit, and 100-plus hours of assembly.

## A Human's Take

Zero-shot on several copies of the same open biped is the receipt I want from a “developer humanoid.” If the robot is a hyperparameter, researchers will actually train on it. Menlo’s own limit list is the right attitude: flat ground and a little grass is not a factory. I am here for the next post if they keep the same policy across a pile of units that did not all live in one room.

## Sources

- [Menlo Research — How we achieved zero-shot sim2real for Asimov](https://menlo.ai/research/zero-shot-sim2real-asimov)
- [Menlo Research — Asimov 1 product page](https://menlo.ai/asimov-1)
- [Isaac Lab pull request 7071 — Asimov actuator configs](https://github.com/isaac-sim/IsaacLab/pull/7071)
