---
title: "PPS Steers a Frozen π0.5 Without Touching Its Weights"
description: "Cornell’s Proxy Policy Steering lifts π0.5 by 53 points on average and turns coffee brewing from 0/10 to 5/10 while keeping recovery behaviors."
pubDate: 2026-09-09
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/pps-proxy-policy-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Fine-tuning a generalist robot policy on a handful of demos often teaches the new task and deletes the old common sense. **Proxy Policy Steering (PPS)**, a **8 September** arXiv paper from **Cornell** (Chuanruo Ning, Tianrui Wang, Wei-Chiu Ma, Kuan Fang), leaves the base weights alone. Two small proxies estimate the *direction* task supervision would push, then add that residual into the frozen sampler at every flow-matching step.

The base in the main results is **π0.5**. On **8** real-world and **4** simulation manipulation tasks, PPS lifts that base by **53** percentage points of success on average, including zero-to-one jumps on tasks the base never solves. It beats LoRA, from-scratch specialists, residual policies, and earlier inference-time steering.

<figure>
  <img src="/images/heroes/pps-proxy-policy-2.jpg" alt="PPS method diagram: base, reference, and task proxies combined in velocity space over a jeans-folding robot" loading="lazy" />
  <figcaption>Reference proxy minus task proxy, added to the frozen base. Source: PPS project page / paper teaser.</figcaption>
</figure>

## Two proxies, one residual

A **reference proxy** is distilled from the frozen base on the observations in the new demos. It copies how π0.5 already acts on that scene. A **task proxy** starts from that same reference and is fine-tuned on the demos. Because they share architecture and init, their difference is supposed to isolate the change caused by task supervision.

At each flow-matching step:

`v_PPS = v_base + γ · (v_task − v_ref)`

**γ** is the steering knob. The project page says success peaks for **γ** in **(0.4, 0.6)**. When the proxies agree, the residual vanishes and the base stays in charge, which is how recovery behaviors that never appeared in the demos can still fire.

Adaptation only needs forward velocity predictions from the base, so it still works if you cannot see the weights.

<figure>
  <img src="/images/heroes/pps-proxy-policy-3.jpg" alt="Franka arm with a Robotiq gripper folding a pair of jeans on a table" loading="lazy" />
  <figcaption>Jeans folding, one of the eight real tasks. Source: PPS paper figure.</figcaption>
</figure>

## Where the base goes to zero

The project page lists coffee brewing, flower insertion, jeans folding, shoe retrieval, tissue wiping, drawer stowing, lever pressing, utensil insertion, plus sim tasks such as fruit weighing, egg cooking, tea pouring, and capsule loading.

Coffee brewing is the blunt example: **base 0/10, PPS 5/10**. The page’s failure notes are specific. The base cannot open a lid, cannot fold, releases a tissue before wiping, cannot open a drawer. LoRA overfits: it tosses the jeans, stows before opening, drags before the tissue is out.

On the two lowest-success tasks (tea and capsule), PPS leads at every demo budget from **50 to 200**, with the biggest gap in the low-data regime. The specialist catches up near **200**. Failure-mode charts: PPS cuts incorrect-mode errors **69%** versus the base and out-of-distribution errors **44%** versus the specialist.

Because the proxies are separate nets, they can eat sensors the RGB-only base never saw. Point cloud on a texture-less marble task: PPS about **82%**. Audio to tell a ringing phone from a silent one: about **86%**.

<figure>
  <img src="/images/heroes/pps-proxy-policy-4.jpg" alt="Franka Emika arm opening a stacked drawer box on a table with toy cars" loading="lazy" />
  <figcaption>Drawer-style manipulation on a Franka. Source: PPS paper figure.</figcaption>
</figure>

## A Human's Take

Leaving the base frozen so it can still recover from a miss is the part I would steal. Five out of ten on coffee is not a barista. It is a policy that used to score zero. I want to see γ stay in that 0.4–0.6 band when the lighting changes and the jeans are a different size.

## Sources

- [arXiv:2609.09148 — Proxy Policy Steering](https://arxiv.org/abs/2609.09148)
- [PPS project page](https://ppsteering.github.io)
