---
title: "R2S-Eval Ranks Robot Policies by Watching the Whole Rollout, Not Just Success"
description: "A real-to-sim plus VLM-preference pipeline matches human pairwise judgments 82.9% of the time on LIBERO and 91.9% on calibrated hardware tasks."
pubDate: 2026-09-05
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/r2s-eval-vla-ranking.jpg"
readTime: "3 min read"
featured: false
draft: false
---

**R2S-Eval**, posted **3 September** ([arXiv:2609.03276](https://arxiv.org/abs/2609.03276)), is a ranking pipeline for vision-language-action policies that tries to stop treating evaluation as “reset the table, count the wins.” Humans watching a robot already grade smoothness, progress, and ugly recoveries. Binary success does not.

The loop: calibrate a simulator to the real cell, roll policies there, ask a vision-language model which of two videos it prefers, then Bradley–Terry those pairwise votes into a ranking.

<figure>
  <img src="/images/heroes/r2s-eval-vla-ranking.jpg" alt="R2S-Eval pipeline from six policies through calibrated real-to-sim videos, VLM preference, and a ranked list" loading="lazy" />
  <figcaption>Overview: calibrated rollouts, VLM pairwise judge, aggregated ranks. Source: r2s-eval.github.io.</figcaption>
</figure>

## Calibrate the factors that change the policy

They do not chase photorealism. The simulator (NVIDIA Isaac Sim) is aligned on robot geometry, kinematics, joint limits, control interface, objects, cameras, and initializations. Seven tabletop tasks get side-by-side real vs replay videos: cover ball with cup, pick ball into box, pick ball into cup, cup onto plate, stack blocks, take block out of box, upright a fallen cup.

Six VLA policies sit on the bench: **X-VLA**, **π0.5**, **π0**, **NORA-Long**, **SmolVLA**, **OpenVLA**. Eight VLM judges. Human agreement is 200 sampled pairs per setting, three annotators, majority vote.

On **LIBERO** (40 tasks), average ground-truth success on the project page is X-VLA **97.5%**, π0.5 **96.8%**, π0 **92.8%**, NORA-Long **82.2%**, SmolVLA **76.2%**, OpenVLA **70.7%**. Preference rankings average Spearman **0.823** with that success order; preference scores average Pearson **0.924** with success rates; pairwise agreement with humans is **82.9%**.

On the seven **hardware** tasks, success collapses for the smaller models: X-VLA **65.7%**, π0.5 **63.6%**, π0 **53.6%**, OpenVLA **7.1%**, NORA-Long **4.3%**, SmolVLA **2.1%**. Here the VLM ranking tracks hardware success even tighter (Spearman **0.957**, Pearson **0.978**, human agreement **91.9%**).

The interesting cases are both-fail and both-succeed pairs. The judge is asked for progress, continuity, control quality, and completion, then a preference. That is how a “success” that rattles the cup can lose to a cleaner one.

<figure>
  <img src="/images/heroes/r2s-eval-vla-ranking-2.jpg" alt="Two white robot hands stacking wooden blocks, with a red box around the stack" loading="lazy" />
  <figcaption>Stack-blocks task still from the calibrated evaluation set. Source: r2s-eval.github.io.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/r2s-eval-vla-ranking-3.jpg" alt="Robot gripper placing a cup onto a plate in the calibrated tabletop cell" loading="lazy" />
  <figcaption>Pick-cup-place-on-plate. Source: r2s-eval.github.io.</figcaption>
</figure>

## A Human's Take

I want this in every lab that currently reports a single success rate from twenty sweaty resets. Ranking two ugly failures is how you notice a policy that almost had it. I would not fire the human grader yet. I would let the VLM eat the bulk of the pairwise work and keep people on the disagreements. The hardware drop from LIBERO-high-nineties to sixty-percent tabletop is the other story hiding in the same figure.

## Sources

- [arXiv:2609.03276 — R2S-Eval abstract](https://arxiv.org/abs/2609.03276)
- [R2S-Eval project page — pipeline, LIBERO and hardware tables](https://r2s-eval.github.io/)
- [arXiv HTML — full paper](https://arxiv.org/html/2609.03276v1)
