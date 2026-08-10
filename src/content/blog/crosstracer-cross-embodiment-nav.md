---
title: "CrossTracer: One Semantic Path, Residual Fixes per Robot"
description: "CrossTracer scores 45.68 on NaviTrace—28% above Gemini-2.5-Pro—by refining VLA pixel traces for wheeled vs legged mobility."
pubDate: 2026-08-10
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/crosstracer-cross-embodiment-nav.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A path that makes sense for a dog-like robot can strand a wheeled Scout at the bottom of the stairs. **CrossTracer** (arXiv:2608.06688, Aug 7, 2026) treats that as the whole problem: keep one semantic pixel-space plan, then **add embodiment-specific residuals**.

Authors from Peng Cheng Laboratory, SUSTech, and collaborators evaluate on **NaviTrace** and deploy on wheeled and legged platforms. Project site: [lilduckkk.github.io/CrossTracer-Nav](https://lilduckkk.github.io/CrossTracer-Nav/).

<figure>
  <img src="/images/heroes/crosstracer-cross-embodiment-nav.jpg" alt="Legged and wheeled robots in a lobby with different pixel-space navigation traces" loading="lazy" />
  <figcaption>Same instruction, different feasible traces: legged robots take stairs; wheeled SCOUTs detour. Source: arXiv:2608.06688.</figcaption>
</figure>

## How it works

1. **VL-Tracer** — adapts a pretrained VLA (OmniVLA-style) to propose an **initial 8-point normalized image-plane trace** from RGB + language and/or pixel goal. Embodiment is *not* injected here.
2. **CE-Adapter** — predicts residual corrections using robot identity (embeddings + FiLM), visual features, and cross-attention from the initial trace.
3. **CE-RRT\*** — training-time labeler only: Mask2Former panoptic maps → robot-conditioned cost maps → RRT\* pixel traces, so the adapter does not need hand-drawn embodiment paths.

At inference, no segmentation planner is required—just observation, goal, and robot type.

<figure>
  <img src="/images/heroes/crosstracer-cross-embodiment-nav-2.png" alt="CrossTracer two-stage architecture diagram" loading="lazy" />
  <figcaption>Stage 1: embodiment-agnostic VLA trace. Stage 2: CE-Adapter residual refinement. Source: arXiv:2608.06688.</figcaption>
</figure>

## Scoreboard

On **NaviTrace** (official total score; higher is better):

| Model | Total score |
|-------|-------------|
| **CrossTracer-8B** | **45.68** |
| Gemini-2.5-Pro | 35.67 |
| Robobrain-2.5-8B | 27.96 |
| CrossTracer w/o CE-Adapter | 22.56 |

That is a **+10.01** absolute gain over Gemini-2.5-Pro (**~28.1%** relative). Ablating CE-Adapter drops the total by **23.12** points—especially on accessibility, social norms, and stationary obstacles.

With an extra goal-pose input, CrossTracer reaches **63.91**. Embodiment scores stay balanced (bicycle / human / legged / wheeled all ~42–46).

Real-world tests use Jetson Orin on-robot, RTX 4090 offboard inference over Wi-Fi, comparing against OmniVLA under matched tasks; the paper reports improved success and paths closer to human expert references.

## A Human's Take

Pixel-space residuals are a clean interface: language understands “go upstairs to the blue door,” kinematics decide whether that is legal for *this* chassis. Beating a giant generalist VLM on an embodiment-sensitive benchmark with an 8B stack is a fun receipt. I’d love open weights plus outdoor mud next—not only marble lobbies.

## Sources

- [arXiv:2608.06688 — CrossTracer](https://arxiv.org/abs/2608.06688)
- [arXiv HTML full text](https://arxiv.org/html/2608.06688v1)
- [Project page](https://lilduckkk.github.io/CrossTracer-Nav/)
