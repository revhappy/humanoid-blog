---
title: "IIT Teaches a 68 kg Quad to Walk After Actuator Power Loss"
description: "IROS 2026 work from IIT uses asymmetric actor-critic RL plus learnable gait frequency so Kyon keeps moving when a joint loses torque."
pubDate: 2026-08-10
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/fault-tolerant-gait.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Small dogs can thrash their way out of a bad joint. A **68 kg** quadruped cannot. When an actuator loses power, mass and inertia eat the cute high-frequency recovery tricks that work on lighter platforms.

Italian Institute of Technology researchers (Gravina, Rossini, Rizzardo, Laurenzi, Tsagarakis) have an IROS 2026 paper (arXiv:2608.07328, submitted Aug 7, 2026) on fault-tolerant locomotion under **actuator power loss**, validated in simulation on uneven terrain and on flat ground with the **Kyon** quadruped. Funding note in the paper: EU Horizon EuROBIN (grant 101070596).

<figure>
  <img src="/images/heroes/fault-tolerant-gait.jpg" alt="Kyon quadruped with highlighted faulty joint under power loss" loading="lazy" />
  <figcaption>Fault-tolerant locomotion under sudden actuator power loss on the 68 kg Kyon. Source: arXiv:2608.07328.</figcaption>
</figure>

## The controller idea

They train a single PPO policy with an **asymmetric actor-critic**:

- **Critic** sees privileged state in sim, including a binary joint-health mask.
- **Actor** only gets proprioception (plus terrain height maps) and a short observation history.
- A **latent-alignment loss** pushes the actor's latent toward the critic's privileged embedding so the deployed policy can infer fault without a labeled sensor bit.

Actions are joint position targets **plus a learnable gait-frequency scalar**. Step timing is not locked to a fixed CPG. The policy can slow or speed the reference contact schedule when a joint dies or the ground changes. Faulty legs are excluded from the phase-consistency reward so the policy is not punished for inventing a tripod or other compensation.

<figure>
  <img src="/images/heroes/fault-tolerant-gait-2.jpg" alt="Asymmetric actor-critic architecture for fault-tolerant locomotion" loading="lazy" />
  <figcaption>Asymmetric actor-critic with latent alignment. Source: arXiv:2608.07328.</figcaption>
</figure>

## Training and transfer

Simulation uses MuJoCo XLA / MJWarp on stepped-pyramid terrain (4, 8, and 12 cm step heights) with 8192 parallel agents. Fault severity starts partial (initial torque efficiency 0.25) and curricula toward complete power loss when velocity tracking holds. Domain randomization covers mass, friction, and PD gains.

On hardware, they report **zero-shot** transfer on flat ground with terrain observations zeroed (no onboard height map in that setup). Knee faults often push the robot into tripodal gaits; hip faults still let the injured leg help balance through remaining DoFs. A project page is linked from the paper: [gianni0907.github.io/fault_tolerant_locomotion](https://gianni0907.github.io/fault_tolerant_locomotion/).

<figure>
  <img src="/images/heroes/fault-tolerant-gait-3.jpg" alt="Parallel training quadrupeds on stepped pyramid terrain" loading="lazy" />
  <figcaption>Massively parallel training on stepped pyramids. Source: arXiv:2608.07328.</figcaption>
</figure>

## A Human's Take

I care less about the marketing of "resilience" and more about the mass class. Teaching a 15 kg demo dog to limp is a different physics problem from a 68 kg platform with tighter torque budgets. Learnable gait frequency is the part that smells production-adjacent: when a joint freewheels, you need time to reorganize contacts, not another 50 Hz thrash. I want the same stack with real LiDAR terrain and multi-joint faults before I'd trust a warehouse aisle.

## Sources

- [arXiv:2608.07328 — Learning Fault-Tolerant Locomotion with Adaptive Gait Timing](https://arxiv.org/abs/2608.07328)
- [arXiv HTML full text](https://arxiv.org/html/2608.07328v1)
- [Project page](https://gianni0907.github.io/fault_tolerant_locomotion/)
