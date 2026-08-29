---
title: "CLAP Trains Video World Models Across Robot Bodies, Including G1"
description: "CLAP learns action-conditioned video physics from mixed human and robot footage, then few-shot adapts to a Unitree G1 and a bimanual YAM."
pubDate: 2026-08-29
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/clap-world-models.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**CLAP**, posted to arXiv on **27 August 2026**, is a cross-embodiment action-conditioned video world model. Most video-for-robots systems train on one arm. CLAP’s bet is that bottles tip and drawers slide under the same physics whether a Franka, a WidowX, a human hand, or a **Unitree G1** is doing the work.

Authors **Kechen Liu** and **Ola Shorinwa** train on mixed **Open X-Embodiment** datasets plus **EgoDex** for **100K** steps. Code and checkpoints are on GitHub and Hugging Face (`omni-CLAP/CLAP`). The project page says inference fits under **12 GB** of VRAM on an RTX 3060, using a Stable Video Diffusion backbone.

<figure>
  <img src="/images/heroes/clap-world-models-g1.jpg" alt="Side-by-side G1 humanoid rollouts: ground truth versus CLAP-CURR predicted video" loading="lazy" />
  <figcaption>Few-shot G1 adaptation: ground truth (left) vs CLAP-CURR (right). Source: arXiv:2608.27406 / project page.</figcaption>
</figure>

## Three action languages, one curriculum

Robot action spaces do not match. Human videos usually have no action labels at all. CLAP talks three dialects:

- **End-effector (`ee`)**: 7-D Cartesian pose plus gripper, or joint angles on joint-space robots
- **Latent action (`lam`)**: a 32-D embedding learned from video, including unlabeled human footage
- **Language**: per-frame CLIP captions of the action

Stage 1 learns physical priors from unlabeled video with latent actions. Stage 2 grounds those priors in end-effector space so the model can run on a real robot without a latent decoder at deployment.

The public suite covers DROID, Bridge, a 14-DoF bimanual **YAM**, and a 26-DoF **G1**. Default checkpoint is `clap-curr`. The authors say a single gradient step of adaptation already produces meaningful video on YAM and G1, unlike training a raw SVD backbone from scratch.

## What they claim against single-body models

On DROID, CLAP matches a Ctrl-World single-embodiment baseline at the same architecture and step count, with fewer domain-specific samples. On Bridge, they say the gap to a strong single-body baseline is mostly qualitative. Zero-shot, the cross-embodiment model is used for inference-time planning and RL fine-tuning of policies such as **π0.5** and **MolmoAct-2** on DROID and YAM. The page is explicit that the planner still hallucinates.

That last clause is the useful one. A video world model that plans is only as good as its refusal to invent a drawer that is not there.

## A Human's Take

Training one video model on mixed bodies is the scaling story robot-video people have been circling. The G1 grid is the part I can actually look at: same table, same plate, predicted frames that are in the neighborhood of the real hand. Matching Ctrl-World without a DROID-only silo is the quantitative claim. Hallucination is still the deployment tax. I want the Hugging Face checkpoints to run on a 3060 the way the page says, not only on the authors’ cluster.

## Sources

- [arXiv:2608.27406 — CLAP](https://arxiv.org/abs/2608.27406)
- [CLAP project page](https://omni-clap.github.io)
- [GitHub — omni-CLAP/clap](https://github.com/omni-CLAP/clap)
- [Hugging Face — omni-CLAP/CLAP checkpoints](https://huggingface.co/omni-CLAP/CLAP)
