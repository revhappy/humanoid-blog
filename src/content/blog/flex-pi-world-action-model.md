---
title: "Flex-π Predicts RGB, Depth, and DINO Futures From One Checkpoint"
description: "UW and AI2’s 6B WAM beats π0.5 on real bimanual tasks and can drop to a 60 ms action-only mode."
pubDate: 2026-08-12
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/flex-pi-world-action-model.png"
readTime: "5 min read"
featured: false
draft: false
---

University of Washington and Allen Institute for AI researchers posted **Flex-π** on **August 11** (arXiv:2608.10860). It is a **6-billion-parameter** world-action model that jointly denoises RGB, 3D pointmaps, and object-centric **DINOv3** features along with the next actions. One trained checkpoint can run from a fast action-only path to full joint future generation.

<figure>
  <img src="/images/heroes/flex-pi-world-action-model.png" alt="Flex-π teaser with robot workcell photos, three visual streams, and a latency-vs-performance plot" loading="lazy" />
  <figcaption>Flex-π overview: shared latents for RGB, 3D, and DINO, plus real YAM workcell tasks. Source: Yan et al., arXiv:2608.10860.</figcaption>
</figure>

## The free-lunch encoder

Most world-action models only predict RGB latents trained for pixel reconstruction. Flex-π’s claim is that a frozen **Wan-2.2** video VAE already reconstructs 3D pointmaps almost losslessly (the paper reports **PSNR 31.1 dB** and **3.1×10⁻³** MSE in the VAE’s normalized space). Depth comes from **Depth Anything 3**; semantics from frozen DINOv3. No extra camera, no extra pretraining of those encoders.

A Mixture-of-Transformers backbone (5B visual trunk initialized from Wan-2.2-5B, plus a ~1B action expert) denoises every stream with actions. During training the team randomly drops input streams and still forces the model to generate the missing futures. They call that **cross-modality forcing**. Removing it cut RoboTwin success by **21%** in their ablation.

## Real bimanual numbers

The policy was pretrained on about **500 hours** from **100** AGIBOT World-Beta tasks, then fine-tuned per domain. On a real bimanual **YAM** cell it beat **π0.5**, **ManiFlow**, and **Fast-WAM** on five contact-rich tasks, including an eight-stage **self-repair gripper** job with a **4 mm** bit into a **4.5 mm** socket (±0.25 mm).

Project-page bars (task completion):

- Kitchen organization: Flex-π full joint **98.8%** vs π0.5 **73.8%**
- Soft-bag zipping: **70%** vs π0.5 **42.8%**
- Self-repair gripper: **76%** vs ManiFlow **33.3%**
- Action-only mode already beat every baseline; full joint added more
- Action-only latency: **60 ms** on an RTX 5090; full joint about **193 ms**

On RoboTwin (50 tasks) Flex-π hit **94.6%** action-only. On LIBERO, a dropout-free fine-tune reached **99.2%** overall, matching the strongest published VLA they list.

<figure>
  <img src="/images/heroes/flex-pi-world-action-model-2.png" alt="Bar charts of Flex-π vs baselines on five real bimanual tasks with workcell photos" loading="lazy" />
  <figcaption>Real-world task completion vs π0.5, ManiFlow, and Fast-WAM. Source: Yan et al. / flex-pi.github.io.</figcaption>
</figure>

The authors are Ge Yan, Jinghao Liu, Yuzhi Fan, Lei Cai, Minwen Liao, Jesse Zhang, and Dieter Fox. Toyota Research Institute funded compute.

## A Human's Take

The part that made me sit up is not another 6B WAM. It is that the same frozen video VAE already “sees” pointmaps, so they get geometry supervision without a depth camera at deploy. Action-only at 60 ms beating π0.5 is the practical knob. I still want a third lab to rerun the self-repair screwdriver task. Sub-millimeter insertions are where papers love to live and factory bits love to snap.

## Sources

- [arXiv:2608.10860 — Flex-π: A Multi-Stream World-Action Model with Compute Flexibility](https://arxiv.org/abs/2608.10860)
- [Project page — Flex-π](https://flex-pi.github.io/)
- [arXiv HTML — Flex-π paper](https://arxiv.org/html/2608.10860v1)
