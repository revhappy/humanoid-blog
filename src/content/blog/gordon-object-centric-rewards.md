---
title: "GORDON Learns Object-Centric Rewards From Action-Free Video"
description: "GORDON turns action-free demos into graph-based object-centric rewards and auto-discovers subtasks, hitting 74.4% average success on long-horizon sim tasks."
pubDate: 2026-08-09
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/gordon-object-centric.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Sparse rewards make long-horizon manipulation painful. Raw-pixel reward models break when the background, lighting, or robot body changes.

**GORDON** (arXiv:[2608.03753](https://arxiv.org/abs/2608.03753), submitted Aug 4, 2026) is a graph-based, object-centric reward learner that builds dense progress signals from **action-free video demos**. Authors are Andrea Protopapa, Davide Buoso, Francesca Pistilli, Georgia Chalvatzaki, and Giuseppe Averta. Project page: [andreaprotopapa.github.io/graph-reward-learning](https://andreaprotopapa.github.io/graph-reward-learning/).

<figure>
  <img src="/images/heroes/gordon-object-centric.jpg" alt="GORDON comparison: raw-image methods distracted by robot motion vs object-centric graph rewards" loading="lazy" />
  <figcaption>GORDON vs raw-image reward methods: object graph and subtask-aware progress. Source: arXiv:2608.03753.</figcaption>
</figure>

## How it works

Each scene becomes a **graph of detected objects and spatial relations**. A graph neural network embeds those graphs into a task-aligned latent space with self-supervised training. An **activity-aware weighted pooling** step emphasizes task-relevant objects and downweights robot-dominated motion so the latent is not just “arm moving on camera.”

Dense reward is the distance in that latent space from the current state to demonstrated goal configurations. On long tasks, the reward’s temporal profile shows stage-wise object-state transitions, which GORDON uses for **automatic subtask discovery** without manual segmentation. Segmented demos then train subtask-specific rewards and specialized policies composed sequentially.

<figure>
  <img src="/images/heroes/gordon-object-centric-3.jpg" alt="GORDON pipeline: full-task reward, automatic subtask discovery, per-subtask RL, sequential executor" loading="lazy" />
  <figcaption>Automatic subtask discovery and sequential RL training from one full-task reward profile. Source: arXiv:2608.03753.</figcaption>
</figure>

## Results (from the paper)

- **Seven** manipulation tasks on **MAGICAL** and **ManiSkill3**
- Long-horizon average success rate **74.4%**
- Roughly **+35 percentage points** vs best learned baseline and **+25 p.p.** vs oracle (paper’s reported averages)

Short-horizon settings also improve when the object-centric reward is used for RL.

## A Human's Take

Object graphs will not save you if detection fails in a greasy cell — but for sim and clean bench work, “reward from video without actions, then split the long task for free” is the right kind of lazy. I want the open project code run on a third-party ManiSkill suite before I trust the +35 p.p. number outside the authors’ plot.

## Sources

- [arXiv:2608.03753 — GORDON](https://arxiv.org/abs/2608.03753)
- [GORDON project page](https://andreaprotopapa.github.io/graph-reward-learning/)
