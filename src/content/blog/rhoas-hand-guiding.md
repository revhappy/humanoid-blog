---
title: "KUKA’s RHOAS Makes Hand-Guiding Push Back Without a Wrist Sensor"
description: "A 16-person study on a LWR iiwa shows observer-based active support cuts effort and wins the agility test."
pubDate: 2026-08-12
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/rhoas-hand-guiding.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Teaching a cobot by dragging it around is still how a lot of demonstration data gets made. After a few hours, the operator is the worn-out part. A KUKA / TU Braunschweig team posted **RHOAS** on August 11: Robot Hand-guiding with Observer-based Active Support. The arm estimates the force you apply from its own joint-torque sensors and then helps you in that direction. No extra wrist force-torque sensor.

The paper is accepted at **RO-MAN 2026**. The work was done at KUKA’s Augsburg lab on a 7-DoF **LWR iiwa** (7 kg payload).

<figure>
  <img src="/images/heroes/rhoas-hand-guiding.jpg" alt="Operator guiding a KUKA LWR iiwa with a marker along a rectangular path" loading="lazy" />
  <figcaption>Precision trial: trace a rectangle on a pad with a marker in the custom 3D-printed grip. Source: Tuma et al. / arXiv:2608.10847.</figcaption>
</figure>

## Treat the human as the controller

Most industrial hand-guiding just cancels gravity. Some research setups add a wrist sensor and an admittance loop. Passivity-based compliance assumes the environment is passive. The authors say hand-guiding is the opposite: the person is actively driving the robot.

RHOAS uses a momentum observer on the elastic joint torques, maps those to a spatial force at the tool, then:

- Low-pass filters at **5 Hz** (human control is cited as under 22 Hz)
- Scales the estimate down near singularities via a confidence factor
- Drops the gravity-axis component so residual gravity-comp error is not amplified
- Turns the cleaned force into a desired Cartesian velocity and tracks it
- Optionally adds a small “reflex” torque in the same direction

Redundancy is used as damping in the nullspace so the operator does not have to babysit the elbow.

<figure>
  <img src="/images/heroes/rhoas-hand-guiding-2.jpg" alt="KUKA LWR iiwa in the agility test, operator tapping boxes on a metronome" loading="lazy" />
  <figcaption>Agility trial: tap two boxes about 60 cm apart at 45 beats per minute. Source: Tuma et al. / arXiv:2608.10847.</figcaption>
</figure>

## Sixteen people, two nasty tasks

Sixteen participants ran a precision path-trace and a fast box-tap. Controllers were blinded and shuffled. Each person did 32 runs, **256** trials in all. A wrist ATI Mini 58 logged force for scoring only; it was not in the control loop. Update rate on the Fast Research Interface was **55 ms**.

Compared with factory gravity-comp and an estimate-based adaptive-damping baseline:

- Normalized human energy dropped (overall **23.6%** / **23.5%** of a user’s own energy on the two RHOAS variants vs **26.3%** / **26.5%** on the baselines; ANOVA *p* < 10⁻⁴)
- Raw agility energy: about **184 J** on RHOAS vs **222 J** on gravity-comp
- Users ranked RHOAS better, especially on the fast task (*p* < 10⁻⁵)
- Missed metronome beats trended down; that quality gap was not statistically significant

The paper is honest about the cheap tricks: they do not assist along gravity, they shut off near singularities, and they have only shown this on one iiwa.

<figure>
  <img src="/images/heroes/rhoas-hand-guiding-3.jpg" alt="Visualization of observer-based support accelerating the KUKA arm toward a target" loading="lazy" />
  <figcaption>Transparent “shadow” shows the velocity setpoint the observer feeds the arm. Source: Tuma et al. / arXiv:2608.10847.</figcaption>
</figure>

## A Human's Take

If you are paying people to drag a 7-DoF arm for a dataset, the interesting number is not a new imitation-learning score. It is whether the operator is still accurate on hour three. RHOAS gets there with sensors the robot already has. I want the same controller on a second brand of cobot, and I want to see whether the 5 Hz filter still feels honest when someone slams the tool into a stop. Until then, this is the right kind of factory paper: less fatigue, same hardware.

## Sources

- [arXiv:2608.10847 — Enabling Scalable Kinesthetic Teaching via Observer-based Hand-guiding](https://arxiv.org/abs/2608.10847)
- [arXiv HTML — full paper, user-study tables, and figures](https://arxiv.org/html/2608.10847v1)
- [Ancillary video — RHOAS_video.mp4](https://arxiv.org/src/2608.10847v1/anc/RHOAS_video.mp4)
