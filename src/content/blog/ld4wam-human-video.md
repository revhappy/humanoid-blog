---
title: "LD4WAM Learns Robot Actions From 5,000 Hours of Human Video"
description: "LD4WAM pretrains on 5,086 hours of human and robot video, then runs grippers and dexterous hands. Real-world average success is 70.5%."
pubDate: 2026-08-25
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/ld4wam-human-video.png"
readTime: "5 min read"
featured: false
draft: false
---

World action models like to predict the next pixels, then hope an action head can read them. **LD4WAM** tries a middle language: motion-aligned latent dynamics, trained on semantic features and real end-effector deltas, then handed to the action expert through learnable queries.

The pretrain set is **274.66 million** frames, **5,086 hours** at 15 fps, **76.4%** human and **23.6%** robot, cleaned into LeRobot format. On **RoboTwin** the paper reports **93.4%** average success. In the real world, across seven gripper and dexterous-hand tasks, the average is **70.5%**, ahead of π0.5 (**63.3%**), Lingbot-VA (**64.3%**), and Fast-WAM (**47.1%**). Best on six of the seven tasks.

<figure>
  <img src="/images/heroes/ld4wam-human-video.png" alt="LD4WAM teaser: 5000-hour dataset, latent-dynamics pipeline, RoboTwin 93.4% and real-world 70.5% bars" loading="lazy" />
  <figcaption>Dataset, method, and headline scores. Source: Shen et al., arXiv:2608.22403.</figcaption>
</figure>

## Do not reconstruct pixels. Reconstruct motion.

A frozen **DINOv3** encodes frames. A transformer plus soft vector quantization writes a latent **z** for what changed. One head reconstructs future DINO features. Another predicts camera-frame end-effector delta, but only on clips that have action labels. Ablating motion alignment inflates a probe MSE **3.7–5.0×**. Pixel reconstruction and hard VQ also hurt.

The World Dynamics Action Model is a mixture of transformers: a **Wan2.2**-initialized video expert, a latent-dynamics expert, an action expert. Attention is one-way: video → latents → action. Stage I trains video and latents on all data with the action expert frozen. Stage II aligns on robot data. Stage III post-trains per task.

## Hands and shirts, not only sim

Real robots: dual-arm **PIPER** with parallel grippers, and a dual-arm **Tianji** with **Wuji** dexterous hands. Tasks: sort, insert a test tube, tidy a desk, fold a shirt, hand over a mug, place a Rubik’s cube, spray a bottle. Fifty demos per task, **30** rollouts per setting.

Unseen objects keep **88.6%** of in-distribution performance, the best retention in their table. Unseen backgrounds are harsher: **44.4%** versus π0.5 at **54.5%**. The authors blame the world-action loop: the action head is conditioned on generated video, and new table texture is exactly what video models miss.

<figure>
  <img src="/images/heroes/ld4wam-human-video-2.png" alt="Overhead rollouts of dual-arm tasks: Rubik’s cube, spray bottle, mug handover, test tube, shirt fold, sorting, tidy desk" loading="lazy" />
  <figcaption>Real-world rollouts on gripper and dexterous-hand tasks. Source: LD4WAM paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/ld4wam-human-video-3.png" alt="LD4WAM architecture: latent dynamics model on the left, mixture-of-transformers world-action model on the right" loading="lazy" />
  <figcaption>Latent Dynamics Model plus the three-expert World Dynamics Action Model. Source: LD4WAM paper.</figcaption>
</figure>

A retrieval figure in the paper shows human-hand clips and robot-arm clips landing as neighbors when the motion matches. That is the claim: the latent cares about the move, not the skin.

## A Human's Take

Five thousand hours is a serious pile of egocentric video. The number I trust more is the background drop. If your policy reads a dreamed future, a new tablecloth can still wreck the action. Motion alignment helps. It does not delete appearance. That is a fair paper, and a reminder that “just add human video” is not a complete recipe.

## Sources

- [arXiv:2608.22403 — LD4WAM](https://arxiv.org/abs/2608.22403)
- [HTML paper with figures](https://arxiv.org/html/2608.22403v1)
