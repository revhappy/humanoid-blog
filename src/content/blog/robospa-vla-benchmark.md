---
title: "RoboSPA: Pick the Third-Farthest Bottle, Then Remember What You Hid"
description: "EMNLP 2026 benchmark with 527K trajectories. At difficulty L5, π0.5, X-VLA, GO-1, and RDT all sit under 25% success."
pubDate: 2026-09-08
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/robospa.jpg"
readTime: "4 min read"
featured: false
draft: false
---

“Pick the ketchup” is easy. “Pick the third-farthest pill bottle from the brown one” is the test. **RoboSPA** (Robot Spatial-Procedural Assessment), [arXiv:2609.05324](https://arxiv.org/abs/2609.05324), landed **4 September** and is accepted at **EMNLP 2026**. Zhejiang University and partners built it on **RoboTwin 2.0**.

The corpus: **527K** trajectories, **997 hours** of interaction video, **108 million** timesteps, **56** base tasks, **280** variants, **5** embodiments (**Aloha-AgileX**, **ARX-X5**, **Piper**, **Franka**, **UR5**). **463K** of those runs are domain-randomized.

<figure>
  <img src="/images/heroes/robospa.jpg" alt="RoboSPA overview of ten task categories with dual-arm table scenes and language prompts" loading="lazy" />
  <figcaption>Ten capability buckets, from geometric attributes to memory. Source: RoboSPA project page.</figcaption>
</figure>

## Two axes, five notches

**Fine-grained spatial reasoning** covers geometric attributes, distance, row-column indexing, referential relations, and cross-view prompts. **Long-horizon procedural planning** covers repeats, order-free piles, ordered sequences, composite action chains, and memory (hide the blocks, then match the ones in back).

Each base task has levels **L1–L5**. Spatial variants add lookalike candidates. Procedural variants add steps. Metrics besides success rate: **ONTA** (chance-corrected target pick) and **Progress Score** (fraction of subgoals done).

Paper protocol on clean Aloha-AgileX: **50** successful expert demos per variant, train on all five levels (**250** demos) per base task, **100** eval rollouts with unseen instructions.

<figure>
  <img src="/images/heroes/robospa-2.jpg" alt="RoboSPA taxonomy wheel plus rows of increasing object count and longer action sequences" loading="lazy" />
  <figcaption>Difficulty is extra objects or a longer sequence, not a new task name. Source: RoboSPA project page.</figcaption>
</figure>

## L5 is a cliff

Single-task results on clean scenes:

| Model | L1 success | L5 success |
| --- | --- | --- |
| **RDT** | 16.8% | 6.9% |
| **GO-1** | 25.1% | 8.8% |
| **π0.5** | 55.2% | 22.3% |
| **X-VLA** | 50.4% | 19.9% |

Every evaluated model stays **under 25%** overall at L5. Spatial ONTA sits near chance when the cue is a relation, not a category. Progress Score beats final success: the policy starts the recipe and dies on a later step. Memory-intensive L5 is a wipe.

<figure>
  <img src="/images/heroes/robospa-3.jpg" alt="Failure examples for grounding, manipulation, ordering, repetition, and memory on dual-arm table tasks" loading="lazy" />
  <figcaption>How the models fail, not only whether. Source: RoboSPA project page.</figcaption>
</figure>

Code, configs, and a Hugging Face dump are up. This is a diagnostic, not a leaderboard for warehouse humanoids. The arms are tabletop dual-arm setups.

## A Human's Take

I am tired of 90% on pick-the-red-cup. Asking for the fourth object in row one, counted right to left, is closer to how people actually talk to a robot. If π0.5 is the high-water mark at 22% on L5, the model is still guessing which bottle you meant.

## Sources

- [arXiv:2609.05324 — RoboSPA](https://arxiv.org/abs/2609.05324)
- [RoboSPA project page](https://fanzhenxuan.github.io/RoboSPA/)
- [GitHub — fanzhenxuan/RoboSPA](https://github.com/fanzhenxuan/RoboSPA)
- [Hugging Face — zxfan/RoboSPA](https://huggingface.co/datasets/zxfan/RoboSPA)
