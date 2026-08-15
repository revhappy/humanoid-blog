---
title: "DreamX-Phi Predicts What a Bimanual Arm Will See Next"
description: "AMAP’s action-conditioned video world model topped WorldArena 2.0 Track 1 by tying each arm’s SE(3) path to the generated frames."
pubDate: 2026-08-15
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/dreamx-phi.jpg"
readTime: "4 min read"
featured: false
draft: false
---

The **DreamX Team** posted **DreamX-Phi 1.0** on **August 13**: a video world model that takes one RGB frame, a language instruction, and a prescribed bimanual action sequence, then predicts the next observations. On a pinned **WorldArena 2.0** snapshot dated **August 12**, their submission ranked **first** on Track 1 (**EWMScore-P 60.65**) and tied for **second** on Track 2 (**67.19%** Adjust Bottle success).

The paper and the public GitHub repo (**AMAP-ML/DreamX-Phi**) match on those ranks. Weights stay closed until the WorldArena 2.0 **IROS** challenge ends.

<figure>
  <img src="/images/heroes/dreamx-phi.jpg" alt="DreamX-Phi 1.0 overview of action-conditioned video prediction" loading="lazy" />
  <figcaption>Paper teaser: one frame plus left/right SE(3) paths in, predicted rollout out. Source: DreamX Team, arXiv:2608.13489.</figcaption>
</figure>

## Pretty video is not enough

A convincing rollout can still move the wrong arm or drop the object. DreamX-Phi is built on **Wan2.2-TI2V-5B**. The authors inject per-arm **SE(3)** transforms into attention with **PRoPE-style** geometric encoding so each arm keeps its identity. Gripper opening is a separate scalar bias, because it is not a rigid transform.

They add three extra checks during training:

- a **depth branch** (Depth Anything 3 targets) so scene geometry does not drift
- **SAM3** object masks that reweight the RGB loss onto the thing being grasped
- a frozen **V-JEPA** teacher that keeps object relations consistent over time

**DMD** (distribution-matching distillation) then compresses the multi-step generator into a few-step student.

<figure>
  <img src="/images/heroes/dreamx-phi-2.jpg" alt="Predicted WorldArena clean-scene rollouts of bimanual robot arms" loading="lazy" />
  <figcaption>Qualitative Track 1 rollouts on clean RoboTwin 2.0 scenes. Source: DreamX Team, arXiv:2608.13489.</figcaption>
</figure>

## What they trained on

The corpus mixes **Ego4D** (3,700 h), **AgiBot World 2026** (1,900 h), **InternData-A1**, **Cosmos3-DROID**, **RoboCOIN**, and **25,000** RoboTwin 2.0 clips. They drop mobile-base and parked segments and keep failed executions on purpose. After filtering, the AgiBot imitation split is **178.7 hours**.

Track 2 uses the world model as a rollout environment to train a **π0.5** policy, then tests that policy on held-out **Adjust Bottle** episodes. The paper is clear this is not DreamX-Phi acting as a closed-loop controller.

<figure>
  <img src="/images/heroes/dreamx-phi-3.jpg" alt="DreamX-Phi training diagram with PRoPE, depth, SAM3, and DMD" loading="lazy" />
  <figcaption>Training stack: geometry-aware attention, depth/object losses, then few-step distillation. Source: DreamX Team, arXiv:2608.13489.</figcaption>
</figure>

## A Human's Take

I care that they treated “the wrong arm moved” as a failure mode, not a footnote. Leaderboard snapshots expire; the useful bit is the interface: keep each arm’s rigid path in the attention, then supervise the object so it does not teleport. I will believe it more when the weights ship and someone runs it on a real bimanual bench that is not RoboTwin.

## Sources

- [arXiv:2608.13489 — DreamX-Phi 1.0](https://arxiv.org/abs/2608.13489)
- [GitHub — AMAP-ML/DreamX-Phi](https://github.com/AMAP-ML/DreamX-Phi)
- [arXiv:2605.17912 — WorldArena 2.0 benchmark paper](https://arxiv.org/html/2605.17912v1)
