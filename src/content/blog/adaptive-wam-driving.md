---
title: "Adaptive-WAM: Stop Generating the Future Video Just to Steer"
description: "A multi-exit video DiT planner scores trajectories early and skips full world-model depth, hitting 90.8 PDMS on NAVSIM at ~170 ms on an A100."
pubDate: 2026-08-09
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/adaptive-wam-driving.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Driving world models love to render the next few seconds of road. Deployment only needs a trajectory. Paying for the full movie every frame is optional.

**Adaptive-WAM** (arXiv:2608.06008, submitted Aug 6, 2026) builds a quality-aware multi-exit planner on a **Wan2.2-5B** video DiT backbone. Trajectory heads hang off intermediate blocks; a lightweight **DINOv2-Small** scorer decides whether the best decoded plan so far is good enough, or whether the backbone should keep going deeper. Training still uses future-video supervision; the default planner path does **not** run the full denoising loop or VAE decode of future frames.

<figure>
  <img src="/images/heroes/adaptive-wam-driving.jpg" alt="Comparison of video WAM, multimodal WAM, and Adaptive-WAM early-exit routing" loading="lazy" />
  <figcaption>Fixed-path WAMs vs Adaptive-WAM quality-guided early exit. Source: arXiv:2608.06008.</figcaption>
</figure>

## Depth beats noise in the ablation

A controlled study on **NAVSIM** finds planning scores barely move across five tested video-noise indices (ranges of ~0.13–0.15 PDMS at fixed layers). **DiT depth** does matter: intermediate exits can beat full-depth single-trajectory readouts, and different layers solve overlapping but non-identical scene sets. That motivates adaptive routing instead of one fixed block.

Exits: blocks **{5, 9, 15, 18, 22, 30}**. Each exit has an independent five-step trajectory diffusion head (ReCogDrive-style). At inference, one trajectory is decoded per attempted exit; the scorer predicts NAVSIM component scores and stops when the best so far clears threshold η.

<figure>
  <img src="/images/heroes/adaptive-wam-driving-2.jpg" alt="Jaccard overlap matrix of high-quality scene sets across exits" loading="lazy" />
  <figcaption>Partial overlap of high-quality scene sets across layer exits. Source: arXiv:2608.06008.</figcaption>
</figure>

## Numbers

On NAVSIM v1 navtest, the adaptive **single-trajectory** planner reports **90.8 PDMS**. A separate fixed block-22 variant with **64** proposals reaches **92.6 PDMS**. On NAVSIM v2, Adaptive-WAM reports **89.9 EPDMS**, which the authors call best among the compared front-view video world-model planners.

Without nuScenes fine-tuning: **0.88 m** average L2 and **0.08%** collision rate.

Latency on one **A100** (batch 1, end-to-end planning): adaptive **~170 ms**, fixed block-15 **~190 ms**, fixed full-depth **~320 ms**. For contrast, a full 40-step classifier-free future-video generation path is reported at **13.22 s** under the same hardware setting. At the selected threshold, more than **94%** of scenes terminate within the first three exits.

<figure>
  <img src="/images/heroes/adaptive-wam-driving-3.jpg" alt="Adaptive-WAM architecture with multi-exit trajectory heads and quality scorer" loading="lazy" />
  <figcaption>Multi-exit trajectory heads and quality-guided routing on the Wan backbone. Source: arXiv:2608.06008.</figcaption>
</figure>

## A Human's Take

World models for driving only matter if they fit a real control cycle. Early-exit trajectory heads that skip the cinematic rollout is the right failure mode: spend compute when the plan is bad, cash out when it is already fine. I want third-party replications on NAVSIM and a public code drop before treating 90.8 PDMS as a settled ranking — but the “how much of the DiT do you actually need?” question is the useful one.

## Sources

- [arXiv:2608.06008 — Adaptive-WAM](https://arxiv.org/abs/2608.06008)
- [arXiv HTML full text](https://arxiv.org/html/2608.06008)
