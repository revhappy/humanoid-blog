---
title: "BooST Moves Franka Skills Onto a UR3 From Five Demos"
description: "Seoul National’s skill codebook bridges what and how, then a 60 Hz policy adapts across action spaces."
pubDate: 2026-08-12
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/boost-skill-transfer-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Skill libraries usually learn either the *what* (language and pixels) or the *how* (joint trajectories). **BooST**, from Seoul National University and Georgia Tech, trains one codebook on both and then distills it into a small policy. The paper is listed as **IEEE RA-L 2026** and went up on arXiv August 11.

The transfer stunt is the hook. Skills are pretrained on **DROID** — **76k** Franka teleop trajectories in **joint-velocity** space — then dropped onto **LIBERO**, which is commanded in **Cartesian** end-effector space, with no LIBERO data in pretraining. The same prior later adapts to a **UR3** from **five** demonstrations per kitchen task.

<figure>
  <img src="/images/heroes/boost-skill-transfer-2.jpg" alt="UR3 kitchen tasks with success-rate bars; BooST is the tall blue bar on each" loading="lazy" />
  <figcaption>Real UR3 kitchen set, five demos per task. Blue is BooST. Source: BooST project page.</figcaption>
</figure>

## One codebook, two pathways

Stage I is a cross-modal VQ-VAE with a shared codebook:

- A **visuo-linguistic** path fuses CLIP ViT patch tokens with the language instruction
- An **action** path encodes the trajectory
- The two train **alternately** so neither owns the codes
- The only reconstruction target is **actions**, not pixels

That last choice is why the authors say moving distractors do not poison the codes.

Stage II freezes the encoder. A small causal skill prior learns its codes as pseudo-labels. A low-level policy is behavior-cloned on top. Both are small Transformers. The project page says the deployed stack runs about **60 Hz**.

<figure>
  <img src="/images/heroes/boost-skill-transfer.jpg" alt="BooST two-stage diagram: unified skill pretraining and downstream adaptation" loading="lazy" />
  <figcaption>Stage I pretrains a shared skill codebook; Stage II distills a lightweight policy. Source: BooST project page.</figcaption>
</figure>

## Few-shot, then a different arm

On LIBERO, mean success over five seeds, 50 rollouts per task. On **LIBERO-90**, BooST hits **0.91 / 0.82 / 0.70** at 50 / 20 / 10 demos. Relative gain over the second-best method is **+41%**, **+59%**, and **+140%** as data shrinks. Similar gaps show up on Goal, Object, and Spatial.

Low-level baselines that locked to Franka joint velocity (QueST, VQ-BeT) “fail outright” on the UR3, according to the project page, because the action space changed. BooST’s UR3 bars sit well above Diffusion Policy, EXTRACT, and those two.

They also pretrained on a LIBERO-90 variant with animated human distractors in every episode. Evaluated on clean LIBERO, BooST averages **0.90** vs **0.79** for LAPA and **0.70** for UniVLA. The encoder keeps picking the same skill for a given sub-behavior when unseen distractors show up at test time.

<figure>
  <img src="/images/heroes/boost-skill-transfer-3.jpg" alt="Three skills shown across DROID, LIBERO, UR3, and a human hand" loading="lazy" />
  <figcaption>Same codebook skills on DROID, LIBERO, a UR3, and a human hand. Source: BooST project page.</figcaption>
</figure>

## A Human's Take

Five demos on a different arm, after pretraining in a different action space, is the receipt I wanted. Reconstructing actions instead of pixels is a small, stubborn design choice that shows up in the distractor table. I still want someone else to train this codebook and hit a UR3 I have not seen in their figure. Until that replication, BooST is the cleanest “what plus how” skill paper in this week’s pile.

## Sources

- [arXiv:2608.10600 — BooST: Bridging Semantics and Motions for Efficient Skill Transfer](https://arxiv.org/abs/2608.10600)
- [BooST project page](https://boost-robots.github.io/)
- [BooST code repository](https://github.com/boost-robots)
