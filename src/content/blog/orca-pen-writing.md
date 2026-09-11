---
title: "An ORCA Hand Writes 'Hello' After 18 Seconds of Finger Wiggles"
description: "ETH Zurich estimates a task Jacobian on the fly. A 17-DoF tendon hand writes on paper at 0.64 mm error with no sim, no demos."
pubDate: 2026-09-11
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/orca-pen-writing.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most in-hand writing papers either train a pile of RL in simulation or collect a pile of demos. **Kai Stewart, Yasunori Toshimitsu, and Robert Katzschmann** at ETH Zurich's Soft Robotics Lab do neither.

Their controller (arXiv:2609.11775, submitted **September 10, 2026**) estimates a **task Jacobian** live from a webcam and the last joint command. After about **18 seconds** of grip excitation, a tendon-driven **ORCA** hand writes with the fingers. No analytic hand-object model. No sim. No demonstrations. The whole loop runs on a **laptop CPU**.

<figure>
  <img src="/images/heroes/orca-pen-writing.jpg" alt="ORCA hand holding a sleeved pen over paper, with a written hello and Jacobian control diagram" loading="lazy" />
  <figcaption>In-hand writing on paper. The arm only moves the hand between letters. Source: ETH paper, Figure 1.</figcaption>
</figure>

## Estimate the map, keep the grip

ORCA has **17** actuated degrees of freedom. Wrist, ring, and pinky stay parked. **10** joints on thumb, index, and middle do the writing. A soft TPU sleeve fattens the pen to about **4×** its bare diameter. An ArUco marker on the pen and three on the desk define the paper frame. Control is perception-limited at about **15 Hz**.

A six-pose Catmull-Rom sweep (**~15 s** plus **~3 s** to settle) bootstraps the Jacobian from zeros. Then a damped pseudoinverse tracks the path. A nullspace term pulls the fingers back toward the initial grip so the pen does not walk out of the hand.

Commanded writing speed is **8×10⁻⁴ m/s**. Height is not controlled. On paper they bulge the sheet about a centimeter so **~2–3 mm** of z-drift still leaves ink.

## Sub-millimeter, slowly

Pooled over **38** fully configured runs (22 in air, 16 on paper), in-plane error is **0.64 ± 0.10 mm**. Air: **0.62 ± 0.12 mm**. Paper: **0.67 ± 0.08 mm**. A continuous **~31-minute** alphabet run in air stays sub-millimeter per letter except a recovered spike on **K**.

<figure>
  <img src="/images/heroes/orca-pen-writing-4.jpg" alt="Green ink letters h e l l o written by the ORCA hand" loading="lazy" />
  <figcaption>On-paper "hello," fingers only. Source: ETH paper, Figure 4.</figcaption>
</figure>

Ablations are blunt. Freeze the Jacobian right after excitation and most runs leave the path. Turn off grip regularization and **4 of 10** runs lose the pen. Double the speed and tracking gets unreliable.

The same estimator/controller, in MuJoCo, writes with a **Shadow Hand** (**0.17 mm** RMSE, 3-D tip) and a **Wuji Hand 2** (**1.48 mm**). Code is on GitHub. The authors call this the first anthropomorphic-hand demo of arbitrary single-stroke trajectories with a grasped pen through purely in-hand motion.

It cannot regrasp. It cannot write an **i**. It cannot keep contact on a rigid flat sheet without the bulge. Errors are measured through the same camera that drives the controller.

## A Human's Take

I grinned at the 18-second warmup more than the millimeter. If a Jacobian you learn at the desk can write the alphabet, a lot of "we need another million demos" talk is covering for a controller that never looks at the pen. It is slow. It is 2-D. I still want this on a prosthetic before I want it on a foundation model.

## Sources

- [ETH project page — Rapid Dexterous Writing](https://srl-ethz.github.io/rapid-dexterous-writing/)
- [arXiv:2609.11775](https://arxiv.org/abs/2609.11775)
- [Paper HTML](https://arxiv.org/html/2609.11775)
- [Code — srl-ethz/dexterity_from_jacobian](https://github.com/srl-ethz/dexterity_from_jacobian)
