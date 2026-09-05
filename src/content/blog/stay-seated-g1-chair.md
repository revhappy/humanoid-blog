---
title: "Osaka Trains a Unitree G1 to Scoot a Caster Chair Without Standing Up"
description: "Stay Seated learns omnidirectional seated locomotion on a passive five-caster chair. The G1 policy uses only proprioception and transfers zero-shot."
pubDate: 2026-09-05
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/stay-seated-g1-chair.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A University of Osaka team posted **Stay Seated** on **28 August** ([arXiv:2608.28090](https://arxiv.org/abs/2608.28090)): a Unitree **G1** that stays on a passive office chair with **five casters** and still tracks forward, backward, sideways, and yaw commands. The pelvis is not bolted to the seat. The feet push the floor. The chair just happens to be under the robot.

Kango Yanagida, Kazuki Miyazawa, and Takato Horii (Osaka, with Horii also at the University of Tokyo) treat this as a first step toward seated loco-manipulation. Standing QDD humanoids spend current just to hold themselves up. Humans sit for desk work. The paper asks whether a standard standing velocity-tracking setup, plus a chair model, is enough.

<figure>
  <img src="/images/heroes/stay-seated-g1-chair.jpg" alt="Four Unitree G1 humanoids seated on caster office chairs, legs extended in different directions" loading="lazy" />
  <figcaption>Hardware teaser: G1 on a five-caster chair, translating and turning while seated. Source: Yanagida et al., arXiv:2608.28090.</figcaption>
</figure>

## How they trained it

They start from mjlab’s standing G1 velocity task and add a passive-chair model, seated-state rewards, critic-only chair observations, and a refined pelvis collision mesh. Command ranges are **±1.0 m/s** in x and y and **±0.5 rad/s** yaw. Episodes are **20 seconds** (1,000 steps at 50 Hz). Training uses **4,096** parallel environments and PPO for **10,000** iterations.

The **actor** sees only proprioception and the velocity command. No contact sensors. No chair state. The critic gets the privileged stuff: foot contacts, caster forces, pelvis–seat contact.

They ran a 2³ factorial on three knobs: symmetry regularization (**SY**), a foot-slip penalty (**FS**), and a command curriculum (**CC**). Four seeds each.

Random-command evaluation (1,000 rollouts per policy) is the headline:

- All eight seated conditions finished at least **99.45%** of 20-s rollouts without losing the seat
- **SY+CC** posted the lowest seed-averaged translational RMSE (**0.1512** m/s in x, **0.1268** m/s in y) and **99.80%** timeout success
- Some **FS-only** seeds froze under diagonal-forward commands. Adding SY or CC avoided that without retuning the slip weight

A standing G1 baseline, trained in a different env, sat at **0.1551 / 0.1490 / 0.1752** RMSE. SY+CC and SY+FS+CC were numerically lower on all three axes. The authors treat that as context, not a claim that sitting “beats” standing.

<figure>
  <img src="/images/heroes/stay-seated-g1-chair-2.jpg" alt="Five-frame sequence of a G1 seated on a caster chair scooting forward across a lab floor" loading="lazy" />
  <figcaption>Zero-shot sim-to-real, forward. Source: Yanagida et al., arXiv HTML.</figcaption>
</figure>

## Gaits, cost of transport, and a real G1

Direction analysis is the fun part. At **1.0 m/s**, cost of transport ordered **backward < lateral ≪ forward**. Backward and lateral use planted-leg extension. Forward uses heel-first contact, then knee flexion, pulling the chair toward the planted foot. Fast forward also raised tracking error, flight fraction (over **60%** at 1.0 m/s), and contact force.

One 60-s battery trial per posture measured **111.06 W** standing and **101.25 W** seated. On a **421.2 Wh** pack, constant-power extrapolation is about **22 minutes** extra. That is one trial. They say so.

The same actor transferred **zero-shot** to a physical G1. Forward, backward, lateral, and turning all show up in the hardware stills. They did not quantify tracking error or disturbance rejection on the real robot.

<figure>
  <img src="/images/heroes/stay-seated-g1-chair-3.jpg" alt="Five-frame sequence of a G1 seated on a caster chair moving backward" loading="lazy" />
  <figcaption>Zero-shot sim-to-real, backward. Source: Yanagida et al., arXiv HTML.</figcaption>
</figure>

## A Human's Take

This is the rare locomotion paper that made me laugh and then want the next clip. A humanoid scooting an office chair with its feet is exactly the kind of contact mess that imitation datasets hate, and they trained it without a motion reference. I would not ship a “desk robot” on this yet. I would absolutely steal the chair model the next time someone asks why the G1 has to stand there cooking its motors during a tabletop task.

## Sources

- [arXiv:2608.28090 — Stay Seated abstract](https://arxiv.org/abs/2608.28090)
- [arXiv HTML — full paper, tables, and hardware stills](https://arxiv.org/html/2608.28090v1)
