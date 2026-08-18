---
title: "Tac4Loco Lets a G1 Feel the Floor Under Its Feet"
description: "HKUST researchers put 60-taxel pressure insoles on a Unitree G1 and walk foam and gravel the proprioception baseline cannot."
pubDate: 2026-08-18
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/tac4loco-plantar-pressure.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A team led from **HKUST (Guangzhou)** posted **Tac4Loco** on **August 16**: a locomotion policy that treats the **pressure map under each foot** as the thing that actually happened, not a guess from joint torque or a depth camera that never saw the landing.

They put **60-element FSR insoles** on both feet of a **Unitree G1**, read them at **50 Hz**, and trained an asymmetric actor-critic in MJLab. Code and experiment configs are promised as open source.

<figure>
  <img src="/images/heroes/tac4loco-plantar-pressure.jpg" alt="Unitree G1 with plantar pressure insoles on foam, with pressure maps" loading="lazy" />
  <figcaption>G1 with bilateral pressure insoles. Tac4Loco stays up on a foam step where a proprioception-only policy falls. Source: Liu et al., arXiv:2608.15766.</figcaption>
</figure>

## Why a force total is not a foot

The paper’s example is the right one. Full-sole contact and two little patches can share a similar total force and center of pressure and still be completely different support. Binary contact flags throw that away.

Tac4Loco keeps the **spatial layout**. Simulated contact forces and real ADC readings both get mapped into the same **31 ordinal bins** (0–30) so the policy never has to trust raw newtons across a messy FSR curve. A dual-branch encoder then reads the current map and a short history of how load moved.

They also estimate a small **terrain-orientation** cue from kinematics, but only when the pressure map says the foot is actually planted.

<figure>
  <img src="/images/heroes/tac4loco-plantar-pressure-2.jpg" alt="Tac4Loco pipeline from pressure maps through dual-branch encoder to residual joint targets" loading="lazy" />
  <figcaption>Pressure goes through ordinal bins, then a spatial and temporal encoder, then residual joint commands. Source: Liu et al., arXiv:2608.15766.</figcaption>
</figure>

## The numbers that moved

In simulation, Tac4Loco kept **100%** survival on flat, gently undulating, and V-trench terrains. On random support-height terrain, survival rose from **71.7%** to **96.5%**. On slopes, it rose from **22.0%** to **77.9%**. Linear-velocity error dropped on every terrain group they report.

The more useful test is the real robot. Completion (walk the course without falling) versus a proprioception-only Unitree baseline:

- **9° ramp / platform-to-flat:** 10/10 vs 7/10
- **Lateral 9° ramp:** 8/10 vs 1/10
- **15° up to 9° down:** 10/10 vs 0/10
- **V-trench:** 10/10 (baseline not deployed after it failed to progress in training)
- **Rigid floor onto foam:** 7/10 vs 0/10
- **9° ramp onto foam:** 10/10 vs 4/10

They also ran about **five minutes** on a **gravel road** that was never in training. No extra fine-tune.

<figure>
  <img src="/images/heroes/tac4loco-plantar-pressure-3.jpg" alt="Real-world Tac4Loco tests on ramps, a V-trench, foam, and gravel" loading="lazy" />
  <figcaption>Ramps and a trench first, then zero-shot foam and gravel. Source: Liu et al., arXiv:2608.15766.</figcaption>
</figure>

## A Human's Take

Cameras can preview a ramp. They cannot tell you the foot landed on an edge. That is a plantar problem.

I’m glad they quantized the maps instead of pretending cheap FSRs are force plates. The foam and gravel numbers are the ones that matter: support that keeps changing after touchdown. If this ships as an insole kit instead of a paper-only G1, a lot of “blind” walkers just got a cheaper sensor than another depth camera.

## Sources

- [arXiv:2608.15766 — Tac4Loco: Learning Spatiotemporal Plantar Pressure Representations](https://arxiv.org/abs/2608.15766)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.15766v1)
