---
title: "S2-HWM Lets a Surgical World Model Think in Events"
description: "A hierarchical world model hits 98.7% on SurRoL PegTransfer by planning over variable-length events, not every primitive step."
pubDate: 2026-08-14
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/s2-hwm-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Surgical peg transfer is a long, stingy task. The reward shows up when the block sits on the right peg. Everything before that — approach, grasp, lift, carry, align, release — lasts a different number of steps every episode.

**S2-HWM** (Sparse Event-Structured Hierarchical World Model), posted to arXiv on **August 13**, tries to stop imagining every primitive tick. It learns sparse “event evidence” from latent trajectories, then lets a manager pick a latent goal only when that evidence says the interaction actually changed.

<figure>
  <img src="/images/heroes/s2-hwm-2.jpg" alt="S2-HWM diagram of manager updates and event transition model" loading="lazy" />
  <figcaption>Event-aligned manager updates on top of a primitive-step worker. Source: S2-HWM paper.</figcaption>
</figure>

## Events instead of hand-labeled stages

The authors — **Shuzhe Zhang, Xin Zhu, Yinling Qian, and Qiong Wang** — keep a DreamerV3-style RSSM for the worker. A gated context vector updates only some of the time. Those sparse gates become event evidence. A separate **Event Transition Model** then predicts the next-boundary latent, how long the segment lasted, and the reward piled up inside it.

The manager bootstraps from a short primitive imagination plus a chain of those event-level predictions. The worker still learns at step resolution. Nobody feeds the agent semantic stage names; “approach / grasp / lift” labels appear only after the fact, for plots.

<figure>
  <img src="/images/heroes/s2-hwm.jpg" alt="PegTransfer sequence from approach through grasp, lift, transfer, align, and success" loading="lazy" />
  <figcaption>SurRoL PegTransfer, labeled after the fact. Source: S2-HWM paper.</figcaption>
</figure>

## The scoreboard

They retrain **GASDreamerV3** — a flat surgical world-model baseline from Grasp Anything for Surgery — on the same **SurRoL** PegTransfer setup: DSA4-depth views, a nine-way discrete action space, three seeds. At a matched checkpoint around **300k** environment steps, S2-HWM hits **98.7 ± 2.3%** success. GASDreamerV3 is **76.0 ± 12.0%**. That is the **22.7-point** gap in the abstract.

**PPO** and **DreamerV2** finish at **0%** in every setting they report.

Stress tests use the same checkpoints. Two transfers in one episode: **91.3 ± 6.1%** vs **77.3 ± 18.6%**. Two transfers plus an induced drop: **88.0 ± 5.3%** vs **65.3 ± 14.0%**. Ablations land where you would hope: drop the hierarchy and success falls to **68.0%**; update the manager on a fixed **K=15** schedule and it falls to **80.7%** with huge seed spread; drop the event model and you still get **91.3%** on a single transfer, but the gap widens on the long tests.

<figure>
  <img src="/images/heroes/s2-hwm-3.jpg" alt="Five PegTransfer phases with gripper action arrows" loading="lazy" />
  <figcaption>Worker actions grouped by post-hoc phase. Source: S2-HWM paper.</figcaption>
</figure>

## A Human's Take

I like that they refused to hard-code “now you are in grasp.” Surgical timing is messy; a gate that learns when the interaction flipped is the right object. The caveat is honest in the paper: this is still one simulated peg-transfer family. Until that event loop is on a real dVRK, it is a very clean sim receipt.

## Sources

- [arXiv:2608.13103 — S2-HWM](https://arxiv.org/abs/2608.13103)
- [S2-HWM HTML paper](https://arxiv.org/html/2608.13103v1)
- [alphaXiv — S2-HWM](https://www.alphaxiv.org/abs/2608.13103)
