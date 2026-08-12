---
title: "Penn Jerboa Hops at 8.85 Leg-Lengths per Second on Hip Torque Alone"
description: "Koditschek’s lab recruits pitch-stabilizing hip torque to replace tail energizing, with hardware speeds of 1.02–1.77 m/s."
pubDate: 2026-08-12
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/hip-energized-monopedal-hopping.png"
readTime: "4 min read"
featured: false
draft: false
---

The **Penn Jerboa** has one motor per hip, springy passive legs, and a 2-DoF tail that used to do the energetic heavy lifting. Shane Rozen-Levy, Griffon McMahon, and Daniel Koditschek flipped that (arXiv:2608.10387, **August 11**). Pitch is still stabilized with a PD-plus-feedforward hip law. The reaction torque from that law is now the thing that puts energy back into the bounce.

<figure>
  <img src="/images/heroes/hip-energized-monopedal-hopping.png" alt="Penn Jerboa hardware on a lab floor next to a simulated 5-link biped" loading="lazy" />
  <figcaption>Hardware Jerboa (left) and the planar 5-link sim biped (right). Source: Rozen-Levy, McMahon, and Koditschek, arXiv:2608.10387.</figcaption>
</figure>

## Steal energy from the attitude loop

Jerboa’s tail used to drive the shank spring, SLIP-style. Here the tail, if it is used at all, is a low-power shape shifter. The hip controller moves the mass-center location so the pitch-stabilizing torque grows, which dumps work into the translational gait. A discrete stepping policy then splits that energy between forward speed and apex height.

They analyze the 3-DoF pitch-unlocked SLIP with hybrid averaging, get closed-form fixed points, and prove that **asymmetric stepping** is required in this hip-energized regime. Symmetric steps would let angular energy run away while the radial spring dies. That is Theorem 2 in the paper, not a slogan.

## Hardware that actually hops

Simulation covers a generic 5-link planar biped and a careful Jerboa model. Hardware is the boom-constrained sagittal Jerboa. Stable speeds: **1.02 m/s to 1.77 m/s**, or **5.10 to 8.85 leg-lengths per second**. Earlier tail-energized hopping on the same machine (Shamsah et al., 2018) was **0.2–1.0 m/s**. The authors flag the comparison as suggestive: Cassie and Atlas are spatial robots; Jerboa is on a boom; Atlas is hydraulic.

<figure>
  <img src="/images/heroes/hip-energized-monopedal-hopping-2.png" alt="Diagram of pitch-unlocked SLIP split into a pitch subsystem cascading into a 2-DoF translational SLIP" loading="lazy" />
  <figcaption>Stance model: isolated pitch loop cascading into damped hip-actuated SLIP. Source: Rozen-Levy et al., arXiv:2608.10387.</figcaption>
</figure>

Analytic fixed points match sim within about **6–14%** and hardware within about **12–16%**, per the paper’s tables. Ground-reaction plots in the paper look VPP-like even though the controller does not target a virtual pivot.

## A Human's Take

I have a soft spot for machines that do a lot with one hip motor. Recruiting the pitch loop as a free energy pump is a clever piece of underactuated accounting, and 8.85 leg-lengths per second on that little tailed hopper is a fun number. Boom-constrained hopping is not a warehouse shift. It is still the first hardware hip-energized monoped demo they say is in the literature, and the math is doing real work instead of decorating the appendix.

## Sources

- [arXiv:2608.10387 — Hip Energized Monopedal Hopping](https://arxiv.org/abs/2608.10387)
- [arXiv HTML — paper](https://arxiv.org/html/2608.10387v1)
- [alphaXiv — Hip Energized Monopedal Hopping](https://www.alphaxiv.org/abs/2608.10387)
