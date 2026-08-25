---
title: "ViTacPhys Estimates Mass and Stiffness Before It Squeezes"
description: "A visuo-tactile model trained on 1,800 human grasps of 60 objects hits 95% ID grasp success by predicting mass, friction, and stiffness."
pubDate: 2026-08-24
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/vitacphys-4.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most grasp policies see an object and close. **ViTacPhys** tries to guess **mass**, **friction class**, and **stiffness** first, then conditions the grasp on those numbers.

The paper (arXiv:2608.21355, submitted **August 21**) and the project page describe a visuo-tactile pipeline trained on **1,800** one-second human demonstrations of **60** rigid and deformable objects.

<figure>
  <img src="/images/heroes/vitacphys-4.jpg" alt="Lab humanoid with a 6-DoF dexterous hand holding a paper cup while an operator wears a Manus teleoperation glove" loading="lazy" />
  <figcaption>In-lab humanoid, 6-DoF hand, Manus glove. Source: ViTacPhys project page.</figcaption>
</figure>

## What it claims to measure

On seen objects, the paper reports:

- **97.2%** mass-class accuracy
- **98.8%** friction-class accuracy
- stiffness mean absolute percentage error **5.51%**

On held-out objects from known categories: **87.5%** mass, **97.5%** friction, stiffness MAPE **9.08%**. One-shot, with very little object diversity, falls off hard (mass accuracy **0.492** in their table).

The grasp policy that uses those predictions, after a human-to-robot transfer step, reaches **95.0%** total grasp success on in-distribution objects and **83.4%** on out-of-distribution objects. For OOD objects both methods lifted, the force traces sit closer to human teleop than **ACT**.

Transfer is not magic. They fine-tune with robot teleoperation, visually augmented dexterous-hand demos, and matched-action human demos. The project page says the strongest OOD transfer uses all three.

<figure>
  <img src="/images/heroes/vitacphys.jpg" alt="Grid comparing ACT, ViTacFormer, and ViTacPhys grasps on bottles, cans, and a paper cup" loading="lazy" />
  <figcaption>Teaser: ACT and ViTacFormer crush or drop several items; ViTacPhys labels mass/stiffness/friction under each column. Source: arXiv:2608.21355.</figcaption>
</figure>

## How they collected it

Demonstrations are **1 second** at **30 Hz**, two protocols: vertical lift and lateral shake. Labels come from a precision scale, force–displacement fits, and an inclined-plane friction test. Wrist RGB and fingertip tactile maps are aligned to the robot’s sensors.

The real robot in the paper is a **7-DoF** arm with a direct-drive **6-DoF** dexterous hand. Fingertips carry piezoresistive arrays matching the human glove. Teleop uses a **Quantum Manus** glove: **10** demos on each of **50** objects.

<figure>
  <img src="/images/heroes/vitacphys-3.jpg" alt="Motion-capture cameras, a laptop, fingertip tactile sensors on a human hand, and a matching robot fingertip" loading="lazy" />
  <figcaption>Acquisition setup and the human-to-robot sensor match. Source: ViTacPhys project page.</figcaption>
</figure>

## A Human's Take

This is the right complaint about vision-only grasping. A full bottle and an empty can can look similar until you close. Estimating a stiffness number, even a crude one, is more useful than another VLM caption.

The 95% ID number is a lab table, not a shift. The one-shot collapse is the part I would not skip: if the object class is new, the property head is not a sensor. It is a guess with a nice error bar. Still, I would rather a policy that admits mass and friction exist than one that treats every cup like a brick.

## Sources

- [arXiv:2608.21355 — ViTacPhys](https://arxiv.org/abs/2608.21355)
- [ViTacPhys project page](https://vitacphys.github.io/ViTacPhys/)
