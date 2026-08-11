---
title: "Mixed-Stiffness Fingertips Widen the Operating Range for Coin Pickup"
description: "Soft-center, stiff-side anthropomimetic pads beat uniform soft pads on approach and rotation ranges; nail-free tips failed every trial."
pubDate: 2026-08-11
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/mixed-stiffness-fingertip.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Picking a coin flush on a hard table is still awkward for robots. Many stacks cheat with under-edge nails, scoops, or prior flip. Humans often just tip a pad into the coin's **side** and rotate it free — no underside access.

Researchers at the University of Electro-Communications (Tokyo) ask whether **where** you put pad stiffness matters as much as how soft the pad is. Their paper, arXiv:2608.07887 (submitted Aug 8, 2026), fabricates anthropomimetic fingertips with **Shore E10** silicone in the center and **Shore A60** on the sides, then runs automated **oblique rotational tip pinches** against uniformly soft E10 tips and a nail-free control.

<figure>
  <img src="/images/heroes/mixed-stiffness-fingertip.jpg" alt="Three pinch strategies for picking up a coin" loading="lazy" />
  <figcaption>Tip pinch, rotational tip pinch, and the paper's oblique rotational tip pinch. Source: arXiv:2608.07887.</figcaption>
</figure>

## Setup

All nails (when present) are SLA-printed; pads share geometry and a 1.5 mm skin. An Arduino-driven apparatus varies horizontal approaches, vertical displacements, index rotation, and coin position on a Japanese **500-yen** coin (26.5 mm diameter, 1.8 mm thick). Ten trials per condition. CAD, STL, code, and trial tables are on [GitHub (TogoLab)](https://github.com/TogoLab/mixed-stiffness-fingertip-coin-grasping).

## Results that stuck

- **Nail-free** pair: **0/36** conditions formed a geometric constraint in Experiment 1-1.  
- Mixed pair integrated success score on the d1–d2 grid: **23.5** (mean 0.653) vs uniform **18.5** (0.514); bootstrap 95% CI on the difference **[3.8, 6.2]**.  
- Mixed also won on vertical displacement and rotation-angle sweeps, and on **transition to stable grasp** (mean 0.693 vs 0.350 on 14 shared conditions).  
- Trade-off: when **coin position along the finger** varied, the **uniform** pad scored higher.  
- After per-denomination tuning, **both** mixed and uniform grasped **all six** Japanese coin types at 100%.

<figure>
  <img src="/images/heroes/mixed-stiffness-fingertip-2.jpg" alt="Mixed, uniform, and nail-free fingertip designs plus test apparatus" loading="lazy" />
  <figcaption>Fingertip types and the automated grasping rig. Source: arXiv:2608.07887.</figcaption>
</figure>

## A Human's Take

This is the kind of small, measurable hardware paper I want more of. Not a new foundation model — a **stiffness map** that widens the set of poses that still form a constraint. The honest bit is the coin-position trade-off: mixed is not free lunch. If they open the molds and someone ports this to a commercial two-finger tip for card and coin trays, that is a real product conversation.

## Sources

- [arXiv:2608.07887 — A Mixed-Stiffness Anthropomimetic Fingertip Broadens the Operating Range for Coin Grasping](https://arxiv.org/abs/2608.07887)
- [arXiv HTML full text](https://arxiv.org/html/2608.07887v1)
- [GitHub — CAD, code, trial data](https://github.com/TogoLab/mixed-stiffness-fingertip-coin-grasping)
