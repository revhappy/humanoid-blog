---
title: "ω-0: One Humanoid Policy for Manipulate-While-Moving Chores"
description: "NTU/PKU/BAAI ω-0 couples latent foresight with whole-body action latents on a 40+ hour household humanoid dataset."
pubDate: 2026-08-07
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/omega-0-loco-manip.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Household humanoids do not fail only on grasp precision. They fail when wiping needs a step, mopping needs a lean, or fridge retrieval needs bend-plus-reach as one motion. **ω-0** (omega-0), a preprint from NTU, PKU, BAAI, and HKUST(GZ) posted **August 6, 2026** (arXiv:2608.06375), treats that as the product: **concurrent loco-manipulation** from a single whole-body world-action model.

<figure>
  <img src="/images/heroes/omega-0-loco-manip.jpg" alt="ω-0 overview with OMEGA-ZERO logo, ω-HOME dataset pie, and real-world household demos" loading="lazy" />
  <figcaption>Overview of ω-0 and the ω-HOME household dataset. Source: arXiv:2608.06375 HTML.</figcaption>
</figure>

## What the model does

Given a language instruction, visual observation, and robot proprioception, ω-0 predicts **controller-compatible whole-body action latents** for real-robot execution via the **SONIC** low-level controller. It does not reconstruct future video as the main path. Instead it learns **compact future observation embeddings** as a light predictive objective, then couples that foresight with **diffusion-based** whole-body action generation.

Inputs can be **egocentric RGB**, **exocentric RGB**, or **exocentric depth**. Training grounds human and public visual-motion priors into robot-executable latents through **controller-based simulation replay**, then fine-tunes on real hardware data.

<figure>
  <img src="/images/heroes/omega-0-loco-manip-2.jpg" alt="ω-0 architecture with VLM prefix, dual-query attention, and action DiT" loading="lazy" />
  <figcaption>Joint video-action latent predictor and action DiT. Source: arXiv:2608.06375 HTML.</figcaption>
</figure>

## ω-HOME and the 11-task suite

The team collected **ω-HOME**: about **40.3 hours**, **4,827 episodes**, and **24 tasks** at **30 Hz**, with synchronized multi-view RGB-D, SMPL whole-body motion, robot state, and action latents. Teleop uses a **Pico** headset and trackers, **Inspire** dexterous hands, and **ZED** cameras.

Evaluation focuses on **11** household loco-manipulation tasks — table wipe, floor mop, laundry, fridge drink, multi-height trash, and more — under **one multi-task policy** (not eleven specialists). The abstract reports that a single ω-0 model produces smooth manipulate-while-moving behavior and **outperforms** representative imitation learning, VLA, humanoid, and WAM baselines under the paper’s protocol. HTML tables put the full omni variant at the top of the suite on success rate, subtask score, and task progress among listed methods.

<figure>
  <img src="/images/heroes/omega-0-loco-manip-3.jpg" alt="ω-HOME dataset statistics and multimodal demonstration collage" loading="lazy" />
  <figcaption>Dataset statistics and representative multimodal demos. Source: arXiv:2608.06375 HTML.</figcaption>
</figure>

## A Human's Take

I care less about another arm-only VLA and more about whether the base and torso show up in the same action chunk when the table is wider than the reach envelope. ω-0’s design bet — latent foresight instead of a full video world model at runtime — is the right engineering trade for a biped that has to keep balance while it wipes. The next receipt I want is third-party hardware hours outside the authors’ kitchen lab, on a platform that is not already wired for SONIC.

## Sources

- [arXiv:2608.06375 — ω-0 abstract](https://arxiv.org/abs/2608.06375)
- [arXiv HTML — ω-0 full paper](https://arxiv.org/html/2608.06375v1)
- [Project page — OMEGA-0](https://gentlefress.github.io/OMEGA-0_page/)
