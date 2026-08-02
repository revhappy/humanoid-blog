---
title: "Train a Humanoid from AI Video, Not MoCap: NCKU’s Synthetic Demo Pipeline"
description: "NCKU researchers turn Veo-generated human videos into Unitree G1 reference motions, then RL-track tasks like boxing and pick-and-place without real demos."
pubDate: 2026-08-02
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/synthetic-humanoid.png"
readTime: "4 min read"
featured: false
draft: false
---

Collecting real humanoid demonstrations is expensive, narrow, and weirdly personal—every person does the same task differently. A National Cheng Kung University (NCKU) team proposes skipping MoCap entirely: **generate diverse human motion videos from text prompts, retarget them to a Unitree G1, and train RL motion-tracking policies** in simulation.

The paper, *Learning Diverse Humanoid Tasks via Synthetic Video Scenarios without Real World Data* ([arXiv:2607.21648](https://arxiv.org/abs/2607.21648), 22 July 2026), is pure sim for now—but the pipeline is concrete.

<figure>
  <img src="/images/heroes/synthetic-humanoid.png" alt="Pipeline diagram from prompts through Veo 3 to humanoid RL training" loading="lazy" />
  <figcaption>Framework overview: prompts → generative video → pose retargeting → RL tracking. Source: arXiv HTML (2607.21648).</figcaption>
</figure>

## How the pipeline works

Authors Yun-Hao Tsai, Cong-Thanh Vu, and Yen-Chen Liu describe three stages:

1. **Prompt-driven video generation** — structured instruction prompts plus user task prompts drive Google **Veo 3** (and related generative models) to produce full-body, camera-stable human motion clips. Multiple videos per task capture different execution styles.  
2. **Video → humanoid reference** — SMPL-X style pose extraction, then retargeting to the humanoid (GMR) with limb scaling, foot-slide fixes, and IK under joint limits.  
3. **Motion stitching + RL tracking** — root alignment and joint smoothing to chain clips; DeepMimic-style RL (PPO in NVIDIA Isaac Lab) with imitation rewards on pose, velocity, end-effectors, and CoM, plus limit/smoothness/self-collision penalties.

They report training with **4096** parallel agents on Isaac Lab hardware (Xeon W5-3435X + RTX 4000 Ada in their setup).

<figure>
  <img src="/images/heroes/synthetic-humanoid-2.png" alt="Side-by-side AI video frames and Unitree G1 mimic for lie-stand, boxing, pick-and-place" loading="lazy" />
  <figcaption>Qualitative results: generative human video vs G1 mimic on four task families. Source: arXiv HTML (2607.21648).</figcaption>
</figure>

## What they evaluated

- **Motion generation:** 50 everyday task prompts × 10 videos each; most everyday motions looked physically plausible; high-speed actions (e.g. backflips) still showed temporal glitches.  
- **Policy tasks:** lie-and-stand, boxing, pick-and-place (including with a **0.5 kg** payload). Joint-position MAE roughly **0.04–0.07 m** on dynamic tasks; loads hit the upper body harder while lower-body tracking stayed steadier.

The conclusion is careful: the method works in simulation for diverse whole-body tasks; sim-to-real and physical consistency of generated video are left for future work.

## A Human's Take

If generative video can flood the imitation dataset with style variation, humanoid learning stops waiting for a motion-capture studio booking. That is a real data bottleneck unlock—on paper.

I care about two follow-ups: (1) does this survive domain gap to a real G1 without collapsing, and (2) how often Veo invents physics that the retargeter happily teaches the robot. Diversity is worthless if half the demos are soft-body fiction.

## Sources

- [arXiv:2607.21648 — Learning Diverse Humanoid Tasks via Synthetic Video Scenarios without Real World Data](https://arxiv.org/abs/2607.21648)
- [arXiv HTML full text (figures)](https://arxiv.org/html/2607.21648v1)
