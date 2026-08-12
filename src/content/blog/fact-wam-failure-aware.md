---
title: "FACT Trains World-Action Models on Failures Without Copying Bad Moves"
description: "UC San Diego’s causal WAM uses failed rollouts as consequence labels and lifts real bimanual success from 82% to 89%."
pubDate: 2026-08-12
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/fact-wam-failure-aware.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most world-action models learn to imagine the future from successful demos. Ask them what a bad action does and they still paint a successful grasp. **FACT**, from Quanquan Peng, Yutong Liang, Rui Yan, Nicklas Hansen, and Xiaolong Wang at **UC San Diego**, flips the order: act first, then imagine the future that action actually caused.

The paper hit arXiv on August 10. The project page is up at fact-wam.github.io.

<figure>
  <img src="/images/heroes/fact-wam-failure-aware.jpg" alt="FACT architecture: causal diffusion transformer that acts, then predicts value and future video" loading="lazy" />
  <figcaption>Act, then imagine. Failures mask the action-imitation loss and still supervise the failed future and a lower progress value. Source: FACT project page.</figcaption>
</figure>

## Failures teach consequences, not behavior

FACT is a causal diffusion transformer on a **WAN2.2-5B** video backbone with a light action adapter. Token order is observation, noisy predicted action, a clean teacher-forced action slot, value, then future video. Value and video attend to the **clean** action, not the noisy one.

On successful demos, all three losses fire. On failure rollouts the action-imitation loss is **masked**. The observed failed video and a lowered progress target stay. That is the whole trick: bad moves are not cloned; they are labeled as what went wrong.

At test time the model can stop after the action. Or it can sample **N** candidates and rank them with the progress head. Scoring only helps after failure training. Without failed outcomes, optional scoring did not help (79%).

<figure>
  <img src="/images/heroes/fact-wam-failure-aware-3.jpg" alt="Five real bimanual tasks: stack cubes, pick cubes, handover, stack bowls, pour" loading="lazy" />
  <figcaption>Seen real-world set: stack/pick cubes, handover, stack bowls, pour. Source: Peng et al. / arXiv:2608.10232.</figcaption>
</figure>

## Numbers that come with the failure mix

On **50** RoboTwin tasks, about **1.3K** rollout failures were added. Video co-training moved average success from **81.8%** to **85.6%**. Failure co-training reached **87.5%**, next to Motus at **87.8%**, while the project page says FACT runs about **3×** faster at deployment.

Real bimanual cell, no robot pretraining:

- Cube tasks: **200** expert demos; other seen tasks: **50**; about **30** failure rollouts per cube task
- Each table cell: **20** trials
- Seen-task success: Motus **64%**, FACT **82%**, plus failures **89%**, plus N=4 scoring **92%**
- Unseen color/shape variants: **67% → 77% → 82%** with scoring, next to π0.5 at **85%** (π0.5 had large-scale robot pretraining FACT did not use)
- If failure actions are *not* masked, success drops to **63%**
- Future-prediction PSNR on failure rollouts: **19.51 → 25.92**; success futures stay about **26.1 dB**
- On a three-task RoboTwin slice, mixing more failures raised success from **32.7%** to **57.3%** with no early saturation

Action chunks are **H = 48**. Future video is supervised at five offsets along the chunk.

<figure>
  <img src="/images/heroes/fact-wam-failure-aware-2.jpg" alt="Same bad action: success-only model hallucinates a grasp, failure-aware FACT predicts the miss" loading="lazy" />
  <figcaption>Same bad action. Success-only training hallucinates a grasp (dotted box); FACT predicts the miss. Source: FACT project page.</figcaption>
</figure>

## A Human's Take

Throwing away failed rollouts is how you train a liar. FACT’s mask is the unglamorous part I trust: do not clone the miss, do learn what the miss looked like. The 3× speed note versus Motus is the other half. I care whether that progress head still ranks actions when the lighting and the objects are not from the same table. Until then, this is the right argument for keeping the crashes in the dataset.

## Sources

- [arXiv:2608.10232 — FACT: Failure-Aware Causal Training for World-Action Models](https://arxiv.org/abs/2608.10232)
- [FACT project page](https://fact-wam.github.io/)
- [arXiv HTML — method, RoboTwin, and real-world tables](https://arxiv.org/html/2608.10232v1)
