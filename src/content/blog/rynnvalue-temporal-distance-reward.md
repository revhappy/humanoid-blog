---
title: "RynnValue Turns Timestamps Into Robot Rewards at 7,000 Hours Scale"
description: "Alibaba DAMO open-sources a value foundation model that uses temporal distance, not preferences, and lifts real-world RL success."
pubDate: 2026-08-11
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/rynnvalue.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Robot reinforcement learning is often starved of usable rewards. Hand-tuned scores do not travel between tasks, and sparse success labels give almost no gradient on long horizons. Preference labels scale even worse.

**RynnValue**, posted to arXiv on Aug 10, 2026 (arXiv:2608.09853) by researchers at Alibaba’s DAMO Academy and Hupan Lab, reframes the problem. Instead of scoring preferences or normalized progress inside a single trajectory, the model predicts **temporal distance**: how many seconds remain until a language-specified goal is done. Timestamps supply the labels, so the team can train without preference pairs.

<figure>
  <img src="/images/heroes/rynnvalue.jpg" alt="RynnValue overview: heterogeneous data into temporal value heads and downstream rewards" loading="lazy" />
  <figcaption>RynnValue overview: language-conditioned temporal values over mixed robot data. Source: arXiv:2608.09853.</figcaption>
</figure>

## What they trained

The training mix is large and messy on purpose. After preprocessing, the authors report **more than 7,000 hours** of trajectories and roughly **3 million** instruction-conditioned clips, drawn from real robots, simulation, and egocentric sources such as AgiBot, EgoDex, Open X-Embodiment, RoboCOIN, RoboMIND, and others. Episodes are segmented and given completion cutoffs so remaining time is well defined.

RynnValue builds on **RynnBrain**, inserts repeated absolute and relative value-query tokens per sampled frame, and reads continuous distances through distributional heads (256 symlog bins). Training deliberately breaks shortcuts: irregular frame sampling, temporal-order shuffling, and **value-isolation attention** so one frame’s value query cannot peek at another’s. A language branch still does video description, instruction match, and success checks, but those outputs do not feed the value heads.

## Benchmark and real-robot numbers

On the **RBM-EVAL-OOD** trajectory-ranking suite (976 OOD trajectories across six institutions and embodiments), **RynnValue-8B** reaches average Kendall’s τ_a of **0.675**. That beats the fully preference-supervised Robometer baseline at **0.655** and more than doubles Robometer’s progress-only ablation (**0.292**). A **4B** variant is close at **0.670**.

As a dense reward via potential-based shaping (potential = negative remaining time), the paper reports real dual-arm Franka results on four tasks (bread basket, spatula steak transfer, box-in-drawer, bimanual box transfer). Average success moves from **52.5%** to **72.5%** online and from **63.8%** to **82.5%** offline versus the strongest baseline under the same shaping interface. Models and collections are linked from the project page, GitHub, Hugging Face, and ModelScope.

<figure>
  <img src="/images/heroes/rynnvalue-2.jpg" alt="Real-world Franka dual-arm tasks used for RynnValue reward evaluation" loading="lazy" />
  <figcaption>Four real-world evaluation tasks on a dual-arm Franka cell. Source: arXiv:2608.09853.</figcaption>
</figure>

## A Human's Take

Preference farms were always going to lose to anything you can stamp from a clock. Temporal distance is an old control idea, and the contribution is the engineering that makes it work across heterogeneous robots without inventing a progress scale per dataset. The ablations matter more than the logo: kill order shuffling or isolation attention and the ranking score collapses, which is exactly what you want from a paper that claims it fixed shortcuts. What I will watch is whether labs outside DAMO can drop the 8B checkpoint in as a zero-shot reward annotator on their own cells without a week of κ tuning.

## Sources

- [arXiv:2608.09853 — RynnValue: Scaling Robotic Value Foundation Models with Temporal Distance](https://arxiv.org/abs/2608.09853)
- [arXiv HTML full text](https://arxiv.org/html/2608.09853v1)
- [RynnValue project site](https://alibaba-damo-academy.github.io/RynnValue.github.io)
- [RynnValue GitHub](https://github.com/alibaba-damo-academy/RynnValue)
