---
title: "TacPAC Corrects a Grasp Mid-Chunk Using Predicted Touch"
description: "A Flexiv world-action model caches predicted tactile contact, then a 32.9 Hz expert patches the unexecuted suffix. Success rises from 22% to 64%."
pubDate: 2026-09-08
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/tacpac.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most world-action models guess the future, then freeze the plan until the next chunk. **TacPAC** (arXiv:2609.05266, **4 September 2026**) keeps that plan and lets new fingertip images rewrite the part that has not executed yet.

The authors — Zipei Ma, Xiaofei Wei, Junzhe Jiang, Shunlin Lu, and Li Zhang — put the code on GitHub under Logos Robotics Group. The robot in the paper is a **Flexiv Rizon 4**.

<figure>
  <img src="/images/heroes/tacpac.jpg" alt="TacPAC teaser comparing failed tight grasps and insertions with successful tactile-corrected trials" loading="lazy" />
  <figcaption>Fragile grasp and plug insertion, with and without tactile correction. Source: TacPAC GitHub / arXiv:2609.05266.</figcaption>
</figure>

## Predict, cache, patch

Stage 1 trains a tactile-predictive world-action model: a video expert forecasts future RGB and tactile frames while an action expert denoises a chunk. Stage 2 freezes that base. For each planned chunk, TacPAC caches the predicted contact and the action representation tied to it. A tactile expert then reads each new tactile image against that cache and outputs a delta on the unexecuted suffix.

The README’s timing: one correction is **30.4 ms (32.9 Hz)** in their setup, **20.7×** faster than regenerating the whole chunk. The paper’s line is the same idea — feedback is interpreted against what the plan expected, not as a raw reflex.

<figure>
  <img src="/images/heroes/tacpac-2.jpg" alt="TacPAC two-stage architecture with video expert, action expert, and tactile expert sharing a KV cache" loading="lazy" />
  <figcaption>Stage 1 predicts vision and touch; stage 2 corrects the live suffix through a tactile-action cache. Source: TacPAC GitHub.</figcaption>
</figure>

## Five contact-rich tasks

Twenty real-world trials per task. Average success:

| Variant | Plug | Fruit | Chip | Bottle | Card | Avg. |
| --- | --- | --- | --- | --- | --- | --- |
| Vision only | 15 | 30 | 60 | 5 | 0 | **22** |
| Tactile prediction, no expert | 35 | 50 | 65 | 20 | 15 | **37** |
| Correction, no prediction | 40 | 25 | 45 | 30 | 25 | **33** |
| Both, no cache | 40 | 50 | 75 | 40 | 30 | **47** |
| **TacPAC** | **80** | **65** | **90** | **40** | **45** | **64** |

The tasks are charger-plug insertion, multi-object fruit transfer, potato-chip transfer, empty-bottle uprighting, and expansion-card insertion. The 16-point gap over the strongest ablated baseline is the cache: predicted contact plus the plan’s own keys, reused every tick.

Datasets and checkpoints are “being prepared.” The repo currently has model, training, preprocessing, and deployment code.

## A Human's Take

Predicting touch is cute. Using that prediction as the thing you compare the real fingertip against, while the arm is still moving, is the part I will steal. 22% to 64% on five messy tasks is a real jump. Bottle uprighting still sitting at 40% is the honest number. Ship the datasets.

## Sources

- [arXiv:2609.05266 — TacPAC](https://arxiv.org/abs/2609.05266)
- [GitHub — LogosRoboticsGroup/TacPAC](https://github.com/LogosRoboticsGroup/TacPAC)
