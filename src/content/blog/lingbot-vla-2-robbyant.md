---
title: "Robbyant Open-Sources LingBot-VLA 2.0 Across 20 Robot Morphologies"
description: "Ant Group’s Robbyant released LingBot-VLA 2.0 trained on 60,000 hours across 20 robot configs, with open weights and real-robot pilots."
pubDate: 2026-08-04
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/lingbot-vla-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Robbyant, the embodied-AI unit inside Ant Group, has open-sourced **LingBot-VLA 2.0**, a vision-language-action model built to run on many robot bodies instead of one fixed arm stack. The company says the model was pre-trained on about **60,000 hours** of physical data and covers **20 robot configurations** from **17** manufacturers.

## What shipped

According to Robbyant’s GitHub release and secondary coverage from IT Brief Asia, the pre-training mix is roughly **50,000 hours** of cleaned robot trajectories plus **10,000 hours** of egocentric human manipulation video. Embodiments span single-arm, dual-arm, half-humanoid, humanoid, and mobile bases — including hardware from Leju, AgiBot, Unitree, AgileX, Galaxea, Galbot, RealMan, Franka, ARX, Fourier, Flexiv, and others listed in the release materials.

<figure>
  <img src="/images/heroes/lingbot-vla-2.jpg" alt="LingBot-VLA 2.0 framework diagram with unified action space" loading="lazy" />
  <figcaption>LingBot-VLA 2.0 framework: unified action space and MoE action expert. Source: Robbyant GitHub (lingbot-vla-v2).</figcaption>
</figure>

The action interface is a **55-dimensional** canonical vector that can carry arm joints, end-effector pose, gripper, hand joints, waist, head, and mobility signals rather than dual-arm-only control. Architecture notes on the repo include sparse MoE layers in the action expert and dual-query distillation from **LingBot-Depth** and **DINO-Video** teachers for geometry and future-scene cues.

## Benchmarks and pilots

On Robbyant’s reported numbers for the GM-100 bimanual benchmark, LingBot-VLA 2.0 posted higher progress / success than π0.5 and GR00T N1.7 on AgileX Cobot Magic (**66.2 / 34.4** vs lower baselines) and competitive results on Galaxea R1 Pro. Long-horizon mobile tasks on Astribot S1 and Cobot Magic-ARX X5 also beat π0.5 in the company’s tables for both in-domain and out-of-domain settings. On RoboTwin 2.0 simulation, the release lists **93.52%** (clean) and **92.80%** (randomized) success averages.

Deployment notes claim about **130 ms** inference on an RTX 4090-class card with 10 denoising steps after post-training. IT Brief Asia reports commercial pilots in retail sorting, logistics, and industrial automation with partners including Leju, Ti5 Robot, GuoDa Drugstore, and Longsheng Technology.

<figure>
  <img src="/images/heroes/lingbot-vla-2-2.jpg" alt="Heterogeneous pre-training data collage for LingBot-VLA 2.0" loading="lazy" />
  <figcaption>Pre-training corpus collage across arms, mobile bases, and humanoid-like platforms. Source: Robbyant GitHub.</figcaption>
</figure>

Weights and code are public under Apache-2.0 on GitHub and Hugging Face (`lingbot-vla-v2-6b`), with a RoboTwin post-training checkpoint dated **2026-07-25**. Technical report: arXiv:2607.06403.

## A Human's Take

I’m here for models that treat “which robot am I on?” as a first-class problem instead of a footnote. Cross-morphology VLA work is how smaller teams stop rebuilding brains every time they change a chassis. The pilot list is still thin on independent third-party metrics — when warehouses publish shift-level numbers, that’s when this graduates from open-source moment to labor tool.

## Sources

- [Robbyant — lingbot-vla-v2 GitHub README](https://github.com/robbyant/lingbot-vla-v2)
- [IT Brief Asia — Robbyant open-sources robot model for multiple types](https://itbrief.asia/story/robbyant-open-sources-robot-model-for-multiple-types)
- [Hugging Face — robbyant/lingbot-vla-v2 collection](https://huggingface.co/collections/robbyant/lingbot-vla-v2)
- [arXiv:2607.06403 — From Foundation to Application: Improving VLA Models in Practice](https://arxiv.org/pdf/2607.06403)
