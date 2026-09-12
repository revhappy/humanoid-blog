---
title: "DUET-DINO Plans 7-DoF Reaches From Side and Wrist Views at Once"
description: "A dual-camera latent world model hits 92% on reach and 72.5% on angled-reach, beating single-view V-JEPA 2-AC."
pubDate: 2026-09-12
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/duet-dino-cross-view.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A side camera sees the table. A wrist camera sees the fingers. Most latent world models pick one and then struggle with rotation. **DUET-DINO** trains both views together.

**Nisarga Nilavadi**, **Wolfram Burgard**, and coauthors at **UTN**, **TUM**, **KIT**, and **NVIDIA** posted the paper **September 9**. Frozen **DINOv3** encoders map each image to patches. Cross-attention lets each view query the other. Separate predictors then roll out future latents conditioned on a **7-D** end-effector action: translation, roll/pitch/yaw, gripper.

Planning is CEM against a **normalized dual-view goal cost**. Code and checkpoints are listed as coming.

<figure>
  <img src="/images/heroes/duet-dino-cross-view.jpg" alt="V-JEPA 2-AC missing a banana reach while DUET-DINO completes it" loading="lazy" />
  <figcaption>Same banana goal: V-JEPA 2-AC veers off, DUET-DINO closes. Source: Nilavadi et al., arXiv:2609.10506, Figure 1.</figcaption>
</figure>

## What they trained on

After filtering: **62,877** DROID trajectories and **5,856** from **RoboArena**. Clips are 8 frames at 4 FPS. They train cross-attention and predictors from scratch for **120k** steps, batch **256**, on four GPUs. Baselines include official **V-JEPA 2-AC\***, single-view predictors, and an independent dual-view stack with no cross-attention.

Eval is in **RoboLab** on a Franka plus **Robotiq 2F-85**, matching the DROID camera layout. Success on reach: end-effector within **5 cm** in **100** steps.

## The scores

**Reach** (100 runs, 10 breakfast-table objects):

| Predictor | Success | Final position error |
|---|---|---|
| V-JEPA 2-AC\* (side) | 55% | 18.6 cm |
| DINOv3 wrist only | 79% | 13.1 cm |
| Independent dual DINOv3 | 78% | 9.8 cm |
| **DUET-DINO** | **92%** | **5.4 cm** |

**Angled-reach** (40 runs, 5 cm and 12°): DUET-DINO **72.5%**, wrist-only DINOv3 **62.5%**, V-JEPA 2-AC\* **2.5%**. Under background and distractor shifts (100 runs): DUET-DINO **63%** vs wrist-only **25%**.

**Angled lift-to-home** (40 runs): DUET-DINO **60%** full lift vs wrist-only **20%**.

**Hardware**, three hard corner poses, reduced CEM (1 iteration, 500 samples, 15 steps): DUET-DINO **26.7%** vs independent dual **16.7%** and wrist-only **3.3%**. Collisions and singularities aborted a run after three unsafe proposals.

An ablation without cross-attention drops reach to **81%** and angled-reach to **42.5%**. DROID-only training hits **78%** reach. Planning is slow: about **15–17 s** per step in their setup, roughly 2× a single-view model.

<figure>
  <img src="/images/heroes/duet-dino-cross-view-2.jpg" alt="Franka arm over a labeled breakfast table used for reach tasks" loading="lazy" />
  <figcaption>Ten reach targets in RoboLab. Source: DUET-DINO paper, Figure 4.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/duet-dino-cross-view-3.jpg" alt="DUET-DINO architecture with side and wrist encoders, cross-attention, and predictors" loading="lazy" />
  <figcaption>Cross-view conditioning and action-conditioned predictors. Source: DUET-DINO paper, Figure 2.</figcaption>
</figure>

They also plot latent change: V-JEPA 2’s wrist predictor underestimates motion from fine actions; DINOv3 tracks it better. That is their explanation for the encoder swap.

## A Human's Take

Wrist plus scene is the right argument. 92% on a 5 cm reach in sim is a real lift over the public V-JEPA checkpoint. Hardware at 27% with a starved CEM is the part I will not over-read. If they ever replace the action sampler with a VLA proposal, this might leave the overnight-batch club.

## Sources

- [DUET-DINO project page](https://utn-air.github.io/DUET-DINO)
- [arXiv:2609.10506 — DUET-DINO](https://arxiv.org/abs/2609.10506)
