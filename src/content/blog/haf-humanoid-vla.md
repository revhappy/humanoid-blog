---
title: "HAF Splits a Generalist VLA So a Humanoid Can Walk and Work"
description: "Peking University and Beijing Innovation Center adapt frozen VLAs to whole-body loco-manipulation with a three-stage action flow."
pubDate: 2026-08-18
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/haf-humanoid-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A team from **Peking University**, the **Beijing Innovation Center of Humanoid Robotics**, **Nankai University**, and **Xi’an Jiaotong University** posted **HAF** on **August 17**. The pitch is blunt: off-the-shelf vision-language-action models are not ready to run a humanoid that has to walk, set its waist, and use both arms at the same time.

HAF is a two-part adapter. **HAF-VLA** generates the motion. **HAF-Steer** tweaks it later without retraining the big backbone.

<figure>
  <img src="/images/heroes/haf-humanoid-vla.jpg" alt="HAF overview of real humanoid tasks, hierarchical VLA, and Steer RL" loading="lazy" />
  <figcaption>HAF’s overview: seven real loco-manipulation tasks, hierarchical generation, then latent RL. Source: Gu et al., HAF project page.</figcaption>
</figure>

## Three stages instead of one noisy whole-body chunk

HAF-VLA sits on a pretrained flow-matching VLA. Instead of denoising the entire body in one shot, it expands the action space in order:

1. **Locomotion + head**
2. **Add the waist**
3. **Add manipulation**

Clean actions from earlier stages go into a **KV cache** so later stages still know what the feet already committed to. The authors say one-shot generation is how you get incoherent whole-body motion.

They evaluated **seven** real humanoid loco-manipulation tasks. On the project page’s main table, **HAF-VLA** averages **70.5%** success. The listed baselines are **π0.5 at 53.3%**, **GR00T N1.7 at 38.1%**, **Cosmos at 27.6%**, and **ACT at 25.2%**.

Out-of-distribution checks are small but specific. With an unseen chair on the **Laundry Loading** path, HAF-VLA scores **40.0%** versus **26.7%** for π0.5. With a **20 cm** backward start shift on **Clothes Retrieval**, it scores **43.3%** versus **36.7%**.

<figure>
  <img src="/images/heroes/haf-humanoid-vla-2.jpg" alt="HAF-VLA three-stage hierarchical action flow diagram" loading="lazy" />
  <figcaption>Locomotion first, then waist, then arms. Source: Gu et al., HAF project page.</figcaption>
</figure>

## Steer the noise, leave the VLA frozen

HAF-Steer is the part I would actually deploy if I already paid for a large VLA. The generator stays frozen. Expert action chunks are reversed through the flow, squashed with **DCT**, and used to train a regularized **SAC** policy in that compact noise space.

The authors’ reason is practical. Offline behavior cloning is often mediocre on the real robot, and online RL on the full backbone is expensive and unsafe. They report extra gains on **Toy Storage** and **Basket Transfer** after offline-to-online adaptation. The project page notes that some **DSRL** training was stopped when exploration got unsafe.

<figure>
  <img src="/images/heroes/haf-humanoid-vla-3.jpg" alt="HAF-VLA generalization tests with an unseen chair and a shifted start" loading="lazy" />
  <figcaption>Chair-in-the-path and 20 cm start-shift tests. Source: Gu et al., HAF project page.</figcaption>
</figure>

## A Human's Take

Whole-body VLA papers keep trying to emit legs, waist, and hands as one pretty trajectory. That is a bad habit. Feet have to be right before the arms get clever.

I like that they kept the backbone frozen and only trained in a compressed noise subspace. That is how you refine a factory policy without gambling the whole model on a bad episode. The success table is the right kind of receipt. Now I want hours, not ten-trial averages.

## Sources

- [arXiv:2608.16837 — HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation](https://arxiv.org/abs/2608.16837)
- [HAF project page](https://grange007.github.io/HAF)
