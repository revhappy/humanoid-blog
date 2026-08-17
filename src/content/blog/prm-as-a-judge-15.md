---
title: "PRM-as-a-Judge 1.5 Scores the Path, Not Just the Finish"
description: "A new toolkit turns robot rollout videos into progress curves, then grades near-misses, recoveries, and messy successes."
pubDate: 2026-08-17
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/prm-as-a-judge-15.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**PRM-as-a-Judge 1.5** is an open toolkit that watches a robot rollout video and draws a **progress curve** instead of a pass/fail bit. The team posted the technical report on arXiv (**2608.14284**) and a long write-up on the project site on **August 16**.

The pitch is blunt. Two failures are not the same if one died on the first reach and the other almost set the mug down. Two successes are not the same if one was smooth and the other spent half the clip undoing its own mess.

<figure>
  <img src="/images/heroes/prm-as-a-judge-15.jpg" alt="Diagram of PRM-as-a-Judge moving from binary scores to 1.5 assessment reports" loading="lazy" />
  <figcaption>From binary eval to process curves to a 1.5 assessment report. Source: PRM-as-a-Judge project page.</figcaption>
</figure>

## Three new scores on top of 1.0

Version **1.0** already turned videos into **OPD** metrics: milestone coverage, max progress, path-weighted progress length, regret area, stagnation. **1.5** adds three conditioned scores:

- **Failure Near-Success (FNS)**: how close a failed run got, from max progress and the 50% / 75% milestones
- **Drawdown Recovery Ratio (DRR)**: how much of the worst drop the robot climbed back
- **Success Quality Score (SQS)**: how clean a successful run was, from path efficiency, regret, and stall time

A process reward model, defaulting to **Robo-Dopamine (Forward)**, estimates completion at each frame. The output is a report that can line the video up with the curve.

They also ship **RoboPulse++**, an interval test for the judges themselves: **700** trajectories, **275** task entries, **17,052** frames, **2,244** annotated rising/falling intervals. Specialized PRMs beat general VLMs on that set. Robo-Dopamine (Forward) hits **0.84** accuracy; **Gemini 3.1 Pro** in pair style is **0.63**. Falling intervals stay harder than rising ones.

<figure>
  <img src="/images/heroes/prm-as-a-judge-15-2.jpg" alt="PRM-as-a-Judge 1.5 pipeline from rollout inputs to assessment report" loading="lazy" />
  <figcaption>Rollout in, progress curve, FNS/DRR/SQS, then a report. Source: PRM-as-a-Judge 1.5 blog.</figcaption>
</figure>

## What the RoboDojo audit found

They scored released **RoboDojo** videos. They did not retrain the policies. The leaderboard freeze is **3 July 2026**.

A few findings they are willing to put in print:

- **VLAs** take a larger share of the top ranks than **WAMs** on RoboDojo-Sim
- Bigger models are not automatically better
- **π0.5** is the broadest strong model across the radar plots
- **Precision** tasks are the easiest category; **open-vocabulary** is the worst
- Sim-to-real rank correlation is only **Spearman ρ = 0.18–0.58**
- Shared-task heatmaps show **negative** real-minus-sim max-progress gaps for every model they aligned

On RoboDojo-RealWorld, **π0.5** is listed at **17.06%** success, with **85.29%** of rollouts reaching 25% progress and **100** DRR. **GR00T-N1.7** sits at **0.63%** success in that table. Success rate and process rank do not match.

<figure>
  <img src="/images/heroes/prm-as-a-judge-15-3.jpg" alt="Radar charts of embodied models on RoboDojo real and sim metrics" loading="lazy" />
  <figcaption>Multi-metric radar on RoboDojo-RealWorld and RoboDojo-Sim. Source: PRM-as-a-Judge 1.5 blog.</figcaption>
</figure>

## A Human's Take

Pass/fail is a terrible factory metric. I want to know whether the arm almost finished the insert or never found the hole. 1.5 is a report card for that. I’m less sold on cartoon doctor robots than on the sim-to-real heatmap: if every model looks worse on real contact, stop bragging about the sim leaderboard.

## Sources

- [arXiv:2608.14284 — PRM-as-a-Judge 1.5](https://arxiv.org/abs/2608.14284)
- [PRM-as-a-Judge — project site](https://prm-as-a-judge.github.io)
- [PRM-as-a-Judge 1.5 technical blog](https://prm-as-a-judge.github.io/blog-introducing-prm-as-a-judge-1.5.html)
