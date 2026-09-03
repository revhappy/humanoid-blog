---
title: "ETH’s ADAPT Turns Text Into Closed-Loop G1 Motion at 50 Hz"
description: "ADAPT maps language to joint actions with a diffusion prior plus residual RL, deployed on a Unitree G1 at 50 Hz."
pubDate: 2026-09-03
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/adapt-eth-text-driven.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**ETH Zurich** posted **ADAPT** on **1 September 2026** ([arXiv:2609.00677](https://arxiv.org/abs/2609.00677)): a diffusion policy that maps a text command and proprioceptive history **straight to joint actions** on a Unitree **G1**, closed-loop at **50 Hz**.

This is not the AdaPT tennis-from-broadcast paper we already covered. This one is **Agile Diffusion Action Priors**, from **Yan Wu**, **Chenhao Li**, **Kaifeng Zhao**, **Gen Li**, **Marco Hutter**, and **Siyu Tang**.

<figure>
  <img src="/images/heroes/adapt-eth-text-driven.jpg" alt="G1 jogging, squatting, sprinting, and kicking from text prompts" loading="lazy" />
  <figcaption>Interactive text control and styled goal-reaching on G1. Source: Wu et al. / ADAPT project page.</figcaption>
</figure>

## Language as a control problem

Most text-to-motion stacks generate a kinematic clip, then a tracker tries to follow it. ADAPT treats prompt switching as a **closed-loop dynamics** job. The team retargets AMASS motions to G1, tracks them in physics, and labels frames with **BABEL**, so the policy sees skill boundaries instead of one caption per clip.

The denoiser is an **8-layer causal transformer** (hidden size **512**, **8** heads). It predicts future actions *and* future states. Inference uses **two DDIM steps** and a CLIP text embedding. The project page says that keeps **50 Hz** deployment; the paper’s limitations section puts inference around **2 ms**.

Offline behavior cloning still falls when you switch prompts at odd times. So they freeze the diffusion prior and train a **PPO residual** that:

- corrects **lower body only**
- warms the residual scale up from zero
- uses a **self-tracking** reward so the corrected state stays near the diffusion-predicted next state
- sees random prompt switches every **5–10 s** in training

<figure>
  <img src="/images/heroes/adapt-eth-text-driven-2.jpg" alt="Simulation kick without residual RL falls; with residual and real G1 kicks stay upright" loading="lazy" />
  <figcaption>Residual RL vs behavior cloning on kicks, plus real G1. Source: Wu et al., arXiv:2609.00677.</figcaption>
</figure>

## Numbers from the paper

On a pool of **130** commands, **2,048** simulated rollouts of **20 s** with switches every 5–10 s, ADAPT’s success (no fall) is **0.984**. Ablating the residual drops that to **0.804**. Two-stage baselines in the same table: DART+track **0.764**, offline TextOp **0.522**, LangWBC **0.923**. Those two-stage numbers are **offline** (full prompt schedule known ahead). ADAPT is online.

Hardware: **five trials per skill** on G1. The paper says locomotion transfers more reliably; failures cluster on long single-leg support (kicks) and repeated high jumps.

A second frozen-prior trick **steers diffusion noise** toward a goal while keeping the text style (“run”, “walk while bending over”, even an unseen “jog”). Steering cuts fall rate from **34.7%** to **2.9%** in that goal-reaching setup.

## A Human's Take

Fifty hertz from two DDIM steps is the part that makes this deployable instead of a renderer. Residual RL buying success at the cost of a bit of semantic alignment is an honest trade. I’d rather a G1 that stays up when you yell “squat” mid-sprint than a prettier kick that dumps the robot. Next test is whether that residual starts sanding off the fun motions the authors already flag as a limitation.

## Sources

- [arXiv:2609.00677 — ADAPT abstract](https://arxiv.org/abs/2609.00677)
- [ADAPT project page](https://wuyan01.github.io/ADAPT-project/)
- [arXiv HTML — full paper](https://arxiv.org/html/2609.00677v1)
