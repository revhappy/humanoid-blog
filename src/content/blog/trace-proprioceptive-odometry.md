---
title: "TRACE: Legged Odometry When Contacts Lie"
description: "KAIST’s TRACE learns proprioceptive odometry with foot-aware attention — less position drift on soft and outdoor terrain."
pubDate: 2026-08-07
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/trace-odometry.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Classic legged odometry assumes you know when a foot is planted. Soft mats, mud, and partial slips break that assumption. **TRACE** (Tokenized Robust Attention for Contact-Aware Estimation), from **Taehyeon Kong, Woojin Kim, and Jemin Hwangbo** at KAIST and posted **August 6, 2026** (arXiv:2608.05975), is a learned **proprioceptive** estimator built for **unreliable contact**.

<figure>
  <img src="/images/heroes/trace-odometry.jpg" alt="Quad robot trajectory comparison over an air mat: proposed TRACE vs baselines" loading="lazy" />
  <figcaption>Trajectory comparison over an air mat: TRACE (red) vs filtering and learning baselines. Source: arXiv:2608.05975 HTML.</figcaption>
</figure>

## What TRACE predicts

From a short history of **onboard inertial and joint measurements**, TRACE directly predicts:

- relative **displacement**  
- relative **rotation**  
- body-frame **velocity**  

A **foot-aware cross-attention** module adaptively weights **IMU** and **leg-wise kinematic tokens** without hand-tuned contact or slip thresholds. Training uses direct supervision plus two **physics-inspired auxiliary losses** for kinematic consistency and reliable use of leg information. To cut policy-specific overfitting, simulation training uses **policy randomization**, then **partial real-world fine-tuning** of the temporal encoder and prediction head.

<figure>
  <img src="/images/heroes/trace-odometry-2.jpg" alt="TRACE network architecture with foot-aware cross-attention" loading="lazy" />
  <figcaption>Architecture with tokenized IMU/leg streams and foot-aware attention. Source: arXiv:2608.05975 HTML.</figcaption>
</figure>

## Field picture

Experiments across **indoor and outdoor** terrains report **consistent reductions in position drift** versus classical filtering, hybrid, and purely learning-based baselines. Ablations back the training objectives, policy randomization, and real-world fine-tuning, especially under unreliable contacts and sim-to-real mismatch. The paper is submitted to **IEEE RA-L** (8 pages, 7 figures).

<figure>
  <img src="/images/heroes/trace-odometry-3.jpg" alt="TRACE outdoor or additional experimental figure" loading="lazy" />
  <figcaption>Additional experimental figure from the paper. Source: arXiv:2608.05975 HTML.</figcaption>
</figure>

## A Human's Take

I’m glad someone attacked the air-mat case instead of only hard-floor lab runs. If your humanoid or quadruped is going to work outside a polished demo floor, proprioceptive drift under soft contact is the unsexy bug that kills maps. TRACE’s “no manual contact threshold” stance is what I want bolted under the next parkour stack.

## Sources

- [arXiv:2608.05975 — TRACE abstract](https://arxiv.org/abs/2608.05975)
- [arXiv HTML — TRACE full paper](https://arxiv.org/html/2608.05975v1)
