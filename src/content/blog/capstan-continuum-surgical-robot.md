---
title: "A Capstan Surgical Snake That Feels Cable Tension From the Motor Mount"
description: "CUHK researchers put strain gauges in a capstan drive so a 3.5 mm continuum robot can sense shape and contact without stuffing sensors in the drum."
pubDate: 2026-08-15
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/capstan-continuum.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A team at the **Chinese University of Hong Kong** posted a paper on **August 13** that solves a small, mean problem: how to measure tendon tension on a **capstan-driven** continuum surgical robot when there is no room for a load cell in the drum.

Lead authors include **Gang Zhang**, **Yufu Qiu**, and **Junyan Yan**, with corresponding author **Shing Shin Cheng**. The work is also supported by **Curve Robotics Limited**. The HTML version of the paper is the primary source.

<figure>
  <img src="/images/heroes/capstan-continuum.jpg" alt="Capstan drive unit with strain-gauge motor mounts and two-segment continuum instrument" loading="lazy" />
  <figcaption>Fig. 1 from the paper: drive unit, strain-gauge brackets, and single- vs two-segment instruments. Source: Zhang et al., arXiv:2608.13396.</figcaption>
</figure>

## Why the mount, not the cable

Lead-screw drives make it easy to bolt a tension sensor on each tendon. They are also bulky. Commercial surgical platforms prefer **capstans** because they are compact, swap instruments fast, and survive sterilization. The tradeoff is that the winding drum is too tight for those sensors.

The authors machine **thin-walled beams** into each **Maxon DCX14** motor bracket. Cable reaction force bends the beam a little; a **BF1K-3EB** strain gauge reads it. They map strain to tension with a neural net. Over **0–9.5 N**, they report **0.12 N** mean error and **0.4 N** max. Sampling goes up to **1000 Hz**.

The instrument itself is a **3.5 mm** notched Nitinol tube. Eight **0.27 mm** cables are staggered so each rigid ring only needs four channels, not eight, inside a wall thinner than **0.4 mm**.

## A short-thick-beam model that actually runs

Because the notches are short and fat, Euler–Bernoulli and Cosserat rod models underestimate shear. The paper uses a **short-thick-beam** static model and batches all beam elements as a matrix so the update can run in parallel.

They report **>200 Hz** model updates, more than ten times a non-parallel version. Combined with a proximal **ATI Nano 17** force/torque sensor, the system estimates tip pose plus contact force and location.

<figure>
  <img src="/images/heroes/capstan-continuum-2.jpg" alt="Bench setup and single-segment bending tests with 25 g tip loads" loading="lazy" />
  <figcaption>Fig. 3: bench hardware, tension calibration, and single-segment bending with and without a 25 g load. Source: Zhang et al., arXiv:2608.13396.</figcaption>
</figure>

On a single segment, mean tip position error is **0.34 mm** at **326 Hz** with no load, **0.36 mm** at **218 Hz** with **25 g**. Two segments: **0.48 mm** / **296 Hz** unloaded, **0.62 mm** / **207 Hz** loaded. Contact-force error on the two-segment unit averaged **1.89 g** (max **4.09 g**); location error averaged **1.93 mm** (max **7.87 mm**).

The authors are honest about the hardware: 3D-printed brackets, cyanoacrylate-glued gauges, zero drift between trials. They call it a lab proof, not a sterile product.

<figure>
  <img src="/images/heroes/capstan-continuum-3.jpg" alt="Two-segment bending and contact-perception experiment" loading="lazy" />
  <figcaption>Fig. 4: two-segment shape checks and a reciprocating contact test. Source: Zhang et al., arXiv:2608.13396.</figcaption>
</figure>

## A Human's Take

This is the kind of paper I want more of: a real packaging constraint, a mechanical trick, and numbers on a bench. Sensing tension from the motor mount is a clever way to keep the capstan small. I will not call it OR-ready until they stop recaling after every run. Show me a machined bracket that holds zero for a week, then we can talk about ESD.

## Sources

- [arXiv:2608.13396 — Capstan-driven Continuum Surgical Robot](https://arxiv.org/abs/2608.13396)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2608.13396v1)
