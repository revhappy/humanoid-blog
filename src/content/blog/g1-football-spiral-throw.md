---
title: "A Unitree G1 Just Threw a Measured Tight Spiral"
description: "Iowa State researchers put a G1 and Dex3-1 on a football and report 93.6% spin efficiency with a follow-through controller."
pubDate: 2026-08-18
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/g1-football-spiral-throw.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Iowa State researchers **Zaid Mahboob** and **Bowen Weng** posted a paper on **August 17** that does something I have not seen on a humanoid before: a **spin-stabilized tight spiral** with an American football. The robot is a **29-DoF Unitree G1** with a **7-DoF Dex3-1** three-finger gripper and a custom 3D-printed thumb nail for a cleaner release.

The best throw they report hits **93.6% spin efficiency**, a **0.286 rad** nose-angle error, **5.35 m/s** linear speed, and **14.5 rad/s** spin. An ideal spiral, as they define it, is 100% spin efficiency and zero nose error.

<figure>
  <img src="/images/heroes/g1-football-spiral-throw.jpg" alt="Unitree G1 with Dex3-1 throwing an American football with and without follow-through" loading="lazy" />
  <figcaption>With follow-through the ball holds a spiral. Without it, the ball tumbles. Source: Mahboob and Weng, arXiv:2608.16642.</figcaption>
</figure>

## Why a football is a mean object

Most robot throws treat release as “open the gripper.” A football cares about both linear and angular momentum lining up with the long axis. If the nose is not pointed along the velocity, the ball wobbles.

The authors say they could not find a clean scientific consensus on what a “tight spiral” even is, so they wrote one. Spin efficiency is how much of the angular velocity sits on the nose axis. Nose angle is how far the nose sits off the velocity vector.

The hard part is the last **sub-100 milliseconds**. After the thumb opens, leftover finger contact can still shove the ball. Their follow-through phase lasted **78.5 ms** on average across **61 trials**, and sometimes only **30–40 ms**.

## Two phases, then the legs hold still

The controller splits the job:

- **Throw phase:** offline trajectory optimization over **0.6 s** on a reduced **10-DoF** waist-and-arm model, then PD tracking with feedforward torque
- **Follow-through:** model-predictive control on the wrist and remaining fingers to keep spin on-axis and the nose pointed
- **Legs:** NVIDIA **GR00T** whole-body control, with pelvis motion estimated by an EKF so the arm can subtract it

They ran OptiTrack at **360 Hz** (six PrimeX 22 cameras) on a **0.252 kg** ball inflated to **12 psi**. Target release in the optimizer was **3 m/s** and **−6 rad/s**. Hardware overshot that on the best throw.

<figure>
  <img src="/images/heroes/g1-football-spiral-throw-2.jpg" alt="Whole-body control diagram for the G1 football throw" loading="lazy" />
  <figcaption>Throw phase plus MPC follow-through, with the legs on a separate controller. Source: Mahboob and Weng, arXiv:2608.16642.</figcaption>
</figure>

Without follow-through, average spin efficiency dropped from **67.1%** at the end of the throw phase to **60.9%**, and nose error grew from **18.9°** to **34.7°**. The worst trial fell to **18.5%** spin and **48.5°** of wobble. Online MPC was too slow (**~500 ms** per solve), so they used a lookup table built from real throws.

Shoulder roll, shoulder pitch, and waist pitch did most of the throw. Waist yaw, roll, and pitch took over during follow-through. There is no human-style wrist snap in this stack.

<figure>
  <img src="/images/heroes/g1-football-spiral-throw-3.jpg" alt="Torque impulse pie charts on the G1 for throw and follow-through" loading="lazy" />
  <figcaption>Shoulder and waist dominate the throw. The waist does the release cleanup. Source: Mahboob and Weng, arXiv:2608.16642.</figcaption>
</figure>

## A Human's Take

This is the kind of paper I want more of. A G1, a real ball, a definition you can argue with, and an ablation that shows the last 80 milliseconds are the whole trick.

It is still a lab throw into a motion-capture volume, not a 20-yard out. The robot needed a thumb nail, a lookup table, and a lot of OptiTrack. Fine. Someone finally measured a spiral instead of posting a clip and calling it athletics.

## Sources

- [arXiv:2608.16642 — Throwing a Tight Spiral American Football by a Humanoid Robot](https://arxiv.org/abs/2608.16642)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.16642v1)
