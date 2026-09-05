---
title: "LimX TRON 2 Torsos on Industrial Arms Nail Formwork and Tie Rebar"
description: "ZINOVA and LimX mount TRON 2 dual-arm torsos on orange industrial booms for a scaled tilt-up demo: boards, nail guns, rebar. Teleop, not a job site yet."
pubDate: 2026-09-05
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/limx-zinova-tron2-construction.jpg"
readTime: "4 min read"
featured: false
draft: false
---

ZINOVA Labs, LimX Dynamics, and RIC Robotics posted a scaled-down **tilt-up construction** demo: two **TRON 2** dual-arm torsos bolted onto heavy orange industrial arms, holding lumber, driving a nail gun, then laying and tying rebar. LimX’s YouTube clip went up **2 September**. Gasgoo and Humanoids Daily picked it up **4 September**.

The point is not a walking humanoid on a job site. They took the legs off the problem. The boom supplies reach and payload. The TRON 2 torso supplies two 7-DoF arms and a pair of hands that can pick up tools a carpenter already owns.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/8KDxnT-4zl0"
    title="LimX TRON 2 and ZINOVA Tool Intelligence construction demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Two TRON 2 torsos on industrial arms assemble formwork, place rebar, and smooth a slab. Source: LimX Dynamics / YouTube.</p>

## What the demo actually runs

Humanoids Daily and Gasgoo describe a scaled concrete-slab sequence:

- **Formwork**: one unit holds a board, the other drives fasteners
- **Rebar**: multi-layer placement and tying on supports
- **Finish**: dual-arm smoothing of wet concrete in the assembled frame

ZINOVA frames this as **Tool Intelligence**, split three ways: **Grasp** (hold messy tool geometry), **Feel** via TEISI (resistance, torque, vibration, impact), and **Form** (change the body to match the workspace). Construction is the first vertical they chose because sites are nonstandard and the tools already exist.

<figure>
  <img src="/images/heroes/limx-zinova-tron2-construction.jpg" alt="Two TRON 2 dual-arm torsos on orange industrial arms holding a wooden board while one drives a pneumatic nail gun" loading="lazy" />
  <figcaption>One TRON 2 holds the board. The other nails it. Source: Humanoids Daily / LimX–ZINOVA demo still.</figcaption>
</figure>

## Why they mounted it on a boom

TRON 2 is LimX’s modular research platform: dual arms, wheeled legs, or soles on one core. Specs on LimX’s site list **7 DoF per arm**, **5 kg** max end-effector load per arm (3 kg extended), and **5 m/s** end-effector speed. In this setup the torso is not walking. It is an end-effector for a large industrial arm.

Humanoids Daily is explicit that the run is **teleoperated**, with a human in the loop. The teams are collecting contact, torque, and video for later models, not claiming an unsupervised crew. Construction trades also come with certifications that a scaled indoor slab does not satisfy.

<figure>
  <img src="/images/heroes/limx-zinova-tron2-construction-2.jpg" alt="Two TRON 2 torsos on orange booms over a wooden formwork box with rebar laid out on the floor" loading="lazy" />
  <figcaption>The scaled slab cell: formwork box, rebar, two boom-mounted torsos. Source: LimX Dynamics via Gasgoo.</figcaption>
</figure>

## A Human's Take

This is the first construction humanoid clip in a while that does not pretend the hard part is walking. Nailing a board while the other arm holds it is a real two-handed task. Teleop plus a boom is also an honest admission that balance and payload still lose to a used industrial arm. I want the next video on a dusty floor with a human who is not on the pendant.

## Sources

- [LimX Dynamics — TRON 2 × ZINOVA construction demo (YouTube)](https://www.youtube.com/watch?v=8KDxnT-4zl0)
- [Humanoids Daily — LimX and ZINOVA TRON 2 construction POC](https://www.humanoidsdaily.com/news/limx-and-zinova-put-tron-2-to-work-on-simulated-construction-sites)
- [Gasgoo — LimX Dynamics robots enter construction sites](https://autonews.gasgoo.com/articles/news/limx-dynamics-robots-enter-construction-sites-to-work-2095801974909128705)
- [LimX Dynamics — TRON 2 specifications](https://www.limxdynamics.com/en/tron2/spec)
