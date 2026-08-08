---
title: "GAUGE Stress-Tests Physics Engines and Video World Models Against Real Motion Capture"
description: "22 real-world task families, ~1,560 MoCap trials: Isaac Sim, Genesis, Newton, and six video models miss impact, cloth fling, and true accelerations."
pubDate: 2026-08-08
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/gauge.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Pretty sim is not physics. **GAUGE**, posted **August 6, 2026** as [arXiv:2608.05948](https://arxiv.org/abs/2608.05948) with a [project page](https://internrobotics.github.io/GAUGE/), is a **measurement-grounded** benchmark that scores both **numerical engines** and **video world models** against the same real experiments.

<figure>
  <img src="/images/heroes/gauge.jpg" alt="GAUGE overview of real experiments feeding physics-engine and video-model tracks" loading="lazy" />
  <figcaption>Shared real tasks → engine trajectory errors and video-model law/parameter checks. Source: arXiv:2608.05948 HTML.</figcaption>
</figure>

## What’s in the suite

- **22 task families**: rigid bodies, rope, textiles, volumetric foams/rubber (collision, friction, cradle momentum, pendulum, cloth stretch/bend/fling, foam moduli, etc.)
- About **1,560** motion-capture trials in a **2 m** NOKOV volume (16 cameras, 180 Hz capture, downsampled to 30 fps), **20** repeats per task setting
- Calibrated masses, friction, restitution, fabric stiffness, Young’s modulus / Poisson ratios — not just pretty meshes

## Engines vs reality

On **14** reconstructed tasks, **Isaac Sim 6.0**, **Genesis 1.12**, and **Newton 1.3** run **out of the box** with GAUGE calibrations (no task-specific tuning). Patterns from their tables:

- Isaac often leads on several **rigid contact / turntable** cases
- Genesis is stronger on many **textile dynamic** and **volumetric** cases
- **Nobody wins everywhere**
- Hard modes: **bouncing ball**, **Newton’s cradle** (near-zero “longest stationary duration,” weak momentum-transfer efficiency), **textile flinging** (Isaac RMSE can blow up), soft-body errors still ~**10×** real trial noise

<figure>
  <img src="/images/heroes/gauge-2.jpg" alt="Overview of GAUGE’s 22 standardized real-world task families" loading="lazy" />
  <figcaption>Task-family gallery across rigid, textile, and soft bodies. Source: arXiv:2608.05948 HTML.</figcaption>
</figure>

## Video world models

Six systems (Cosmos3 Nano/Super-I2V, Wan 2.2/2.7, Seedance 2.0, Genie 3) get a fixed first frame + prompt on rigid tasks. GAUGE separates **equation form** (R², QFI) from **parameter truth** (acceleration, MTE, period). Finding: models can look like uniform acceleration or nice pendula while recovering **wrong g-scale**, **partial cradle momentum**, or **~1.8–2×** real periods. Negative prompts help some runs and hurt others — so they report paired results.

<figure>
  <img src="/images/heroes/gauge-3.jpg" alt="Motion-capture volume and marker setups for rigid and deformable objects" loading="lazy" />
  <figcaption>MoCap cage and marker configurations. Source: arXiv:2608.05948 HTML.</figcaption>
</figure>

## A Human's Take

If your “world model” can’t bounce a ball with the right restitution or fling a cloth without inventing mass, your robot policy is learning theater. GAUGE’s useful move is refusing a single beauty score — law form, parameters, and engine trajectory error are different failures, and sim-to-real work needs all three called out.

## Sources

- [arXiv:2608.05948 — GAUGE abstract](https://arxiv.org/abs/2608.05948)
- [arXiv HTML — GAUGE full paper](https://arxiv.org/html/2608.05948v1)
- [GAUGE project page](https://internrobotics.github.io/GAUGE/)
