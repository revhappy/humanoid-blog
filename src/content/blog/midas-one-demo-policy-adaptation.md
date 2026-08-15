---
title: "MiDAS Adapts a Generalist Robot Policy From One Demo"
description: "CMU’s CoRL 2026 submission fine-tunes π0.5 on a single demonstration, then residual RL lifts success on a bimanual YAM in about six hours."
pubDate: 2026-08-15
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/midas-one-demo.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Carnegie Mellon group posted **MiDAS** (Minimal-Data Adaptation Strategy) on **August 11**: take a pretrained vision-language-action model, clone **one** successful demonstration, then let residual reinforcement learning clean up the rest. The project page and paper both call this the first reliable adaptation of a robot policy from a **single task demonstration**.

Authors include **Shreyas Kowshik**, **Sreyas Venkataraman**, **Leo Wang**, **Niharika Pant**, **Max Simchowitz**, and **Aviral Kumar**. The page marks it as an anonymous **CoRL 2026** submission under review. Extra videos live at **minimal-data-adaptation.github.io**.

<figure>
  <img src="/images/heroes/midas-one-demo.jpg" alt="MiDAS diagram: pretrained VLA, one demo, residual RL" loading="lazy" />
  <figcaption>One demo anchors a pretrained VLA; residual RL expands the successful region. Source: MiDAS project page / arXiv:2608.11363.</figcaption>
</figure>

## Two stages, frozen backbone

The base policy is **π0.5**. **Stage I** fine-tunes it with LoRA on the VLM backbone and full fine-tuning of the flow action head. Zero-shot success on every tested task is **0%**. After one-demo behavior cloning, LIBERO-Long averages **33.5%**.

**Stage II** freezes that policy and trains a small residual actor-critic on top of its features. The residual sees the state **and** the base action chunk, then predicts the executed action directly (not a tiny additive nudge). Sparse reward is **−1** every step until success.

Three tricks keep one-demo RL from collapsing: a warmup buffer that copies the base action, a **success buffer** that oversamples the rare wins (sometimes only **2–5%** at the start), and **PA-RL** Best-of-N distillation that only needs one expensive forward pass through the frozen VLA.

<figure>
  <img src="/images/heroes/midas-one-demo-2.jpg" alt="Bimanual YAM placing colored blocks into left and right containers" loading="lazy" />
  <figcaption>Real YAM block-placement rollouts after adaptation. Source: MiDAS project page.</figcaption>
</figure>

## What one demo plus a few hours buys

On **LIBERO-Long**, MiDAS averages **91.2%** (paper Table 1) vs **33.5%** for behavior cloning. **RoboCasa** average is **89.3%** on the three tasks that move at all; **Cup + Bowl → Dishwasher** stays at **0%** for every method.

On a bimanual **YAM**:

- Blocks into two bins: **40% → 67%**
- Knife and donut onto a plate: **27% → 80%**

The abstract and project page both say **roughly six hours** of autonomous interaction. Success rates are over **15** rollouts mixing in- and out-of-distribution object poses.

<figure>
  <img src="/images/heroes/midas-one-demo-3.jpg" alt="YAM placing a knife and donut on a plate" loading="lazy" />
  <figcaption>Knife-and-donut task after residual RL. Source: MiDAS project page.</figcaption>
</figure>

The paper is also blunt about limits. Swap object identities and success falls to **0%**. Observation shifts (color, paraphrase) mostly survive because the VLM stays frozen. Bigger state shifts need a reset curriculum.

## A Human's Take

One demo plus six hours is a number I can argue about. I am here for residual RL that is allowed to leave the clone’s action cloud, not just sharpen it. The dishwasher task staying at zero is the honest part: if the warm start never touches the reward, residual RL has nothing to chew on. That is the real floor, not the 90% average.

## Sources

- [arXiv:2608.11363 — Adaptation of Generalist Robot Policies with Minimal Data](https://arxiv.org/abs/2608.11363)
- [Project page — minimal-data-adaptation.github.io](https://minimal-data-adaptation.github.io/)
