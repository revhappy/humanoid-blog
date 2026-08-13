---
title: "StellaVLA Adapts From One Demo by Teaching the Why"
description: "StellarEdge’s VLA ranks first on VLA-Arena at 0.63 by retrieving a structured demonstration instead of fine-tuning."
pubDate: 2026-08-13
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/stellavla-structured-demo.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**StellaVLA** is a vision-language-action recipe that adapts at test time from **one retrieved demonstration**. The twist is what that demonstration contains. An offline pipeline turns a raw trajectory into a task plan, sub-goal text, and verbalized 2D/3D motion, then stuffs that structure into the prompt. No extra human labels. The paper and the StellarEdge project page went up with the **August 12** arXiv listing.

<figure>
  <img src="/images/heroes/stellavla-structured-demo.jpg" alt="StellaVLA overview converting human, XR, and robot demos into structured in-context prompts" loading="lazy" />
  <figcaption>Human, XR, and robot clips become the same structured context. Source: StellaVLA paper.</figcaption>
</figure>

## Imitate the plan, not the pixels

Most in-context imitation feeds the policy raw observations and actions. StellaVLA’s authors say that teaches *what* happened and hides *why*. Qwen3-VL segments the expert clip. A deterministic verbalizer writes the 3D workspace move and its 2D projection. Retrieval is by instruction embedding, so a human-hand or XR clip can be fetched for a robot episode.

Training uses two heads in parallel: an action expert that regresses a continuous chunk, and a spatial-language expert that predicts the current subtask and the same motion in words. At deployment the language head is stripped. The demonstration prefix is KV-cached once. The project page puts the cached path at about **2×** faster than an uncached image+text prefix.

The backbone is **Qwen3-VL-4B** with an OpenVLA-OFT-style MLP action head.

## Leaderboard and a real arm

On the **VLA-Arena** board dated **August 1, 2026**, StellaVLA is first at **0.63** overall versus **0.44** for π0.5 and **0.22** for LingBot-VLA. Level scores: **0.84 / 0.62 / 0.43** on L0 / L1 / L2. On **LIBERO** it averages **98.8%**. On **LIBERO-Plus**, trained only on standard LIBERO, it hits **85.1%** zero-shot, **10.1** points above a matched demonstration-free control.

A causal check on a frozen checkpoint is the part I keep quoting. Correct demo: **98.8%**. No demo: **62.4%**. Wrong-task demo: **44.9%**. The model is using the context as a task spec, not wallpaper.

<figure>
  <img src="/images/heroes/stellavla-structured-demo-2.jpg" alt="AgileX Piper real-robot scenes for pen-to-cup, carrot-to-bowl, drawer, and bowl stacking, plus OOD variants" loading="lazy" />
  <figcaption>In-distribution and OOD scenes on an AgileX Piper. Source: StellaVLA paper.</figcaption>
</figure>

The real-robot set is a 6-DoF **AgileX Piper** with third-person and wrist cameras. **125** teleop episodes (**71,702** frames), plus **26** human-hand XR takes and **26** frame-aligned retargeted clips. In-distribution success is **85.0%**. OOD-L1 (object color / identity swaps) is **75.0%**. Nobody finishes the unseen OOD-L2 drawer task; StellaVLA’s progress score is **1.9 / 4**.

<figure>
  <img src="/images/heroes/stellavla-structured-demo-3.jpg" alt="StellaVLA framework diagram with retrieved context, dual experts, and action-only inference" loading="lazy" />
  <figcaption>Train with two experts, deploy with the action head only. Source: StellaVLA paper.</figcaption>
</figure>

Code, a Hugging Face model card, and the VLA-Arena link sit on the project page.

## A Human's Take

I like a paper that breaks its own context. If a wrong demo hurts more than no demo, the model is actually reading the example. That is the receipt. The Piper numbers are a small tabletop cell, and the unseen drawer still fails, so this is not a generalist you drop in a kitchen. It is a clean argument that a retrieved *plan* travels farther than a retrieved *pixel tape*.

## Sources

- [arXiv:2608.11671 — StellaVLA](https://arxiv.org/abs/2608.11671)
- [StellarEdge — StellaVLA project page](https://www.stelledge.com/blog/stellavla)
- [VLA-Arena leaderboard](https://vla-arena.github.io/#leaderboard)
- [StellaVLA GitHub](https://github.com/StellEdge-AI/StellaVLA)
