---
title: "RoboStriker Teaches Two G1s to Box Without Falling Over"
description: "SJTU and Shanghai AI Lab box in a 32-D latent space, then put the policy on two real Unitree G1s with red gloves."
pubDate: 2026-08-18
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/robostriker-boxing.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A **29-DoF Unitree G1** does not have a lot of spare balance to spend on punching. If you let multi-agent RL poke around in raw joint space, the robot eats the floor before it learns a jab. **RoboStriker**, posted August 17 by Shanghai Jiao Tong University and Shanghai AI Lab, moves the fight into a **32-dimensional latent** that a pretrained motion decoder is allowed to reach.

They then put two real G1s in gloves and let the policies run onboard.

<figure>
  <img src="/images/heroes/robostriker-boxing.jpg" alt="Two Unitree G1 humanoids boxing in a lab with red gloves" loading="lazy" />
  <figcaption>Hardware bouts after latent-space self-play. Source: Yin et al., arXiv:2608.16195.</figcaption>
</figure>

## Three layers, then they hit each other

Stage I is a motion tracker trained on about **30 minutes** of Xsens boxing capture at **50 Hz**, doubled by left-right mirroring, then retargeted to G1. Stage II distills that tracker into a unit-hypersphere latent. Stage III warms the agents up against a standing dummy with an AMP style reward, then runs **Latent-Space Neural Fictitious Self-Play**.

Training used Isaac Lab on one RTX 4090: **4,096** parallel environments, **200 Hz** physics, **50 Hz** control. A hit counts only if contact force exceeds **10 N**. Engagement is the share of time the robots stay **0.5–1.2 m** apart and facing each other.

<figure>
  <img src="/images/heroes/robostriker-pipeline.jpg" alt="RoboStriker three-stage pipeline from motion tracking to latent NFSP" loading="lazy" />
  <figcaption>Tracker, latent decoder, then self-play. Source: Yin et al., arXiv:2608.16195.</figcaption>
</figure>

## The latent actually matters

Cross-play over 20 rounds of 4,096 bouts each:

- **68.52%** win rate vs fictitious self-play
- **76.24%** vs naive latest-policy self-play
- **84.47%** vs PPO against a fixed opponent
- **92.50%** vs raw 29-DoF self-play that also got AMP

RoboStriker’s offensive landing rate is **0.685** and engagement **0.824**. Adding AMP to the raw-joint baseline helped (landing 0.142 → 0.285) and still lost. A **32-D** latent beat **16-D** and **64-D** on the landing-rate tradeoff.

On hardware, two G1s run ONNX at **50 Hz** on the onboard CPUs, coordinated over ROS 2. Pelvis markers at **100 Hz** give inter-robot range. PD gains are set from inertia with ω = 10 and ζ = 2.

<figure>
  <img src="/images/heroes/robostriker-mujoco.jpg" alt="MuJoCo comparison of RoboStriker boxing poses with and without AMP" loading="lazy" />
  <figcaption>Without AMP the guards disappear. Source: Yin et al., arXiv:2608.16195.</figcaption>
</figure>

## A Human's Take

I will watch two G1s square up all day. The useful claim is narrower: strategy has to live somewhere the robot cannot fall out of. That is a nicer way to say “don’t let self-play invent a new spine.”

This is still a mocap gym with markers and a fall-when-anything-but-feet-touches-ground rule. Fine. If the next clip is the same policy in a gym without the orange couch, I’ll be louder.

## Sources

- [arXiv:2608.16195 — RoboStriker: Latent-Space Strategic Games for Autonomous Humanoid Boxing](https://arxiv.org/abs/2608.16195)
- [arXiv HTML — full paper and hardware figures](https://arxiv.org/html/2608.16195v1)
- [Project page](https://sites.google.com/view/robo-striker/)
