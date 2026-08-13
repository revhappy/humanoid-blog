---
title: "RAI Trains Spot and a G1 to Push Boxes With Sparse Rewards"
description: "SMPC in simulation writes the expert data; sparse-reward RL then beats the teacher on a Spot with an arm and a Unitree G1."
pubDate: 2026-08-13
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/smpc-loco-manipulation-spot-g1.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A RAI Institute team with TUM and ETH Zurich is using **sample-based model predictive control** as a cheap expert, then training **sparse-reward** policies that run on a Boston Dynamics **Spot** with an arm and a Unitree **G1**. The paper posted to arXiv on **August 12**. The hardware clips show Spot pushing a box, standing a tire up, and rolling a tire, plus a G1 shoving a cardboard cube.

<figure>
  <img src="/images/heroes/smpc-loco-manipulation-spot-g1.jpg" alt="Pipeline graphic: SMPC data collection, sparse RL training, and deployment on Spot and a G1" loading="lazy" />
  <figcaption>Collect with SMPC, train with sparse offline-to-online RL, deploy on Spot and G1. Source: Schuck et al. / RAI Institute.</figcaption>
</figure>

## Why they threw out dense rewards

Dense reward shaping is the usual way to teach loco-manipulation. Every tweak means another training run. The authors flip that: SMPC, which they can retune in minutes in simulation, writes a large offline dataset. Because those trajectories already solve exploration, the RL agent only sees a sparse objective:

- **0** at the goal
- a one-time crash penalty
- **−1** otherwise

A frozen low-level whole-body controller (ReLIC) tracks arm motion and base velocity and keeps the legs under the robot. The high-level policy only outputs deltas: base velocity, arm joints, and, on the G1, torso height and pitch.

On one **RTX 5090**, the SMPC expert runs at about **0.5×** real time. After the costs are set, a tiled GPU collector produces about **one million samples per hour**. The hardest task, tire rolling, needs about **four million** samples, or four GPU hours.

## What actually moved

Five real-world tasks transferred without platform-specific reward engineering. The box is **0.5 m** on a side and **1.2 kg**. The tire has a **0.33 m** radius, **0.34 m** width, and **14.3 kg**. Spot commands go over Wi-Fi from an offboard computer. G1 inference runs onboard. State comes from **OptiTrack** plus the robots’ own sensors.

<figure>
  <img src="/images/heroes/smpc-loco-manipulation-spot-g1-2.jpg" alt="Unitree G1 humanoid pushing a cardboard box labeled do not throw away" loading="lazy" />
  <figcaption>G1 box-pushing after sparse-reward training. Source: Schuck et al. / RAI Institute.</figcaption>
</figure>

The sparse policies finish faster than the SMPC teacher, by more than **50%** on some tasks, and cut the standard deviation of completion time by **11–45%**. Without the expert buffer, the same sparse setup never learns. Multi-modal SMPC data (kick the tire, shoulder it, step into it) also fails: the uni-modal policy needs one behavioral mode.

<figure>
  <img src="/images/heroes/smpc-loco-manipulation-spot-g1-3.jpg" alt="Arm-equipped Spot in floral wrap rolling a car tire" loading="lazy" />
  <figcaption>Spot rolling the 14.3 kg tire, the paper’s hardest coordination task. Source: Schuck et al. / RAI Institute.</figcaption>
</figure>

The authors are blunt about limits. The policy stays near the teacher’s distribution. The low-level controller is frozen, so it cannot adapt to task-specific disturbances. And outdoor or vision-only deployment would need a second training or distillation step.

## A Human's Take

This is the right kind of “the robot works a shift” paper: a 14 kg tire, a G1 pushing a box, and a reward you can write on a napkin. I like that they measured the teacher and then beat it, and I like that they said multi-modal planner data wrecks training. What I want next is the same stack with a wrist camera and no motion-capture hall. Until then this is a lab method that already walks on two bodies.

## Sources

- [arXiv:2608.12063 — Learning Loco-Manipulation From SMPC Demonstrations](https://arxiv.org/abs/2608.12063)
- [RAI project page — SMPC to RL](https://pages.rai-inst.com/smpc2rl/)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.12063v1)
