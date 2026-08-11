---
title: "SLIM-0.5B Packs Action-Grounded Latents Into a Compact Robot Policy"
description: "0.47B latent interaction model hits 97.5% on LIBERO and 77.45% zero-shot LIBERO-Plus with 60.6 ms H100 latency."
pubDate: 2026-08-11
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/slim-05b.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most vision-language-action stacks keep a multi-billion-parameter backbone in the control loop even when the next action only needs compact state, language, and dynamics. Pixel world models swing the other way and spend capacity on textures the gripper never cared about.

**SLIM** (Self-supervised Latent Interaction Model), submitted to arXiv on Aug 10, 2026 (arXiv:2608.09771) by Fudan, BAAI, Tsinghua, and Renmin University of China authors, is a **~0.47B** policy that learns *action-grounded* predictive latents: reconstruct the action that explains a transition, and predict the future observation latent an action would produce — without generating pixels at inference.

<figure>
  <img src="/images/heroes/slim-05b.jpg" alt="SLIM overview with MoT backbone and predictive latents" loading="lazy" />
  <figcaption>Compact MoT models observation latents, action tokens, and predictive future slots. Source: arXiv:2608.09771.</figcaption>
</figure>

## How it works

Stage 1 masks trajectory pieces and trains inverse- and forward-dynamics style objectives in observation-latent space (DINOv2 encoder, T5-small language, Mixture-of-Transformers backbone). Stage 2 trains a flow-matching action policy that never receives future frames at deploy time — only the predictive structure baked into the backbone.

The project page is at [kzz1031.github.io/slim-project-page](https://kzz1031.github.io/slim-project-page/).

## Results

On original **LIBERO**, SLIM reaches **97.5%** overall success with **no** additional embodied pretraining. The same checkpoint, zero-shot on **LIBERO-Plus**, hits **77.45%** average across seven perturbation axes. On **CALVIN ABC→D**, average sequence length is **4.556** out of 5.

Real-world multi-task training used **750** demos (150 each on five tasks). Against π0.5 and Fast-WAM, SLIM leads average progress under nominal, distractor, and lighting settings; under hard background shift it scores **49** vs π0.5 at **54**.

Controlled H100 inference: **60.6 ms** mean latency, **4.26 GiB** peak incremental VRAM — **3.19×** faster and **1.86×** lighter than π0.5 under the authors' PyTorch-eager protocol.

<figure>
  <img src="/images/heroes/slim-05b-2.jpg" alt="SLIM evaluation settings LIBERO CALVIN and real tasks" loading="lazy" />
  <figcaption>Simulation suites and real manipulation tasks used in the paper. Source: arXiv:2608.09771.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/slim-05b-3.jpg" alt="Real-world progress scores for SLIM vs baselines" loading="lazy" />
  <figcaption>Average real-world progress by setting. Source: arXiv:2608.09771.</figcaption>
</figure>

## A Human's Take

I care less about another leaderboard peak than about **latency and memory per correct chunk**. If a half-billion-parameter model can hold LIBERO-class success while cutting GPU footprint versus multi-B VLAs, that is the stack you can actually run next to a cell controller. The honest caveats are in the paper: single scale, limited embodiment diversity, zero-shot LIBERO-Plus still droops under robot-initial-state shift. Show me multi-robot finetune curves next.

## Sources

- [arXiv:2608.09771 — SLIM-0.5B: Learning Action-Grounded Predictive Latents for Robot Manipulation](https://arxiv.org/abs/2608.09771)
- [arXiv HTML full text](https://arxiv.org/html/2608.09771v1)
- [SLIM project page](https://kzz1031.github.io/slim-project-page/)
