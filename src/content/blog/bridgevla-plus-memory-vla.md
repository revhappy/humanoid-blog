---
title: "BridgeVLA++ Adds Spatio-Temporal Memory Without Blowing the Data Budget"
description: "BridgeVLA++ posts SOTA on memory manipulation benchmarks while keeping few-shot real-robot generalization from the original BridgeVLA design."
pubDate: 2026-08-06
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/bridgevla-plus.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Vision-language-action models are good at “do this now” and weak at “remember what you covered.” **BridgeVLA++** (arXiv:2608.05042, submitted **August 5, 2026**) grafts a unified **spatio-temporal memory** onto the earlier BridgeVLA stack and claims you can keep the few-shot, 3D heatmap advantages while solving tasks that need history.

<figure>
  <img src="/images/heroes/bridgevla-plus.jpg" alt="BridgeVLA++ teaser with benchmarks radar chart and real-world generalization panels" loading="lazy" />
  <figcaption>Project teaser: multi-view heatmaps, memory module, and benchmark scores. Source: bridgevla-plus.github.io.</figcaption>
</figure>

## What changed

BridgeVLA projects point clouds into multi-view 2D images and predicts intermediate **heatmaps** before robot actions, so the VLM backbone stays in its image comfort zone. BridgeVLA++ adds:

- **Temporal memory** at the coarse stage (interaction history / keyframes)
- **Spatial memory** at the fine stage (less-occluded initial geometry under the current zoom)

Both inject into **patch-token space** without rewriting the action heads. The project page says the memory adds about **+9.2%** parameters on a multi-billion-parameter backbone and roughly **+0.22 s** per step latency on an RTX 4090 in their timing setup.

## Benchmark receipts (from paper + project site)

Headline success rates reported for BridgeVLA++:

| Suite | Score | Note |
|-------|-------|------|
| **RLBench** (18 tasks) | **93.7%** | +6.9 pts vs prior SOTA cited |
| **COLOSSEUM** | **65.2%** | 14 perturbation settings |
| **GemBench** | **51.1%** | four generalization levels |
| **RMBench** (dual-arm memory) | **96.0%** | base BridgeVLA 18.9% without memory |
| **MemoryBench** | **99.7%** | single-arm memory suite |

Real-robot work spans a **Franka Research 3** for general manipulation (BridgeVLA base reported **96.9%** average with 10 demos per task; **95.4%** with 3 demos) and a held-out **Dobot CR5A** for memory tasks, where BridgeVLA++ reaches **93.3%** average on memory-dependent tasks in the basic setting versus **0–30%** for the cited memory-free / weaker baselines on the same tables.

<figure>
  <img src="/images/heroes/bridgevla-plus-2.jpg" alt="Architecture diagram for BridgeVLA and BridgeVLA++ memory injection" loading="lazy" />
  <figcaption>Architecture: 2D heatmap alignment plus temporal and spatial memory blocks. Source: project site.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/bridgevla-plus-3.jpg" alt="Franka and Dobot real-robot experimental setups with ZED cameras" loading="lazy" />
  <figcaption>Real platforms used in evaluation (Franka FR3 and Dobot CR5A). Source: project site.</figcaption>
</figure>

## A Human's Take

Memory is the difference between “pick the red block” and “uncover the block you covered two steps ago.” BridgeVLA++’s numbers on RMBench are the kind of jump that usually means the base model had no chance. I’m more interested in the Franka few-shot table than the absolute RLBench average — ten demos (or three) that still generalize under lighting and distractors is the practical bar for lab robots. Next check: open code and third-party replications on a different arm.

## Sources

- [arXiv:2608.05042 — BridgeVLA++ abstract](https://arxiv.org/abs/2608.05042)
- [BridgeVLA++ project page](https://bridgevla-plus.github.io/)
