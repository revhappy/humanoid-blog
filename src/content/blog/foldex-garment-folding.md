---
title: "FolDeX Makes Laundry the Real-Robot Benchmark"
description: "Fudan, Midea, and CMU release 2,000+ hours of folding data across 10+ robots, plus a FoldChallenge leaderboard."
pubDate: 2026-09-10
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/foldex-garment-folding.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most real-robot leaderboards still score short, rigid picks. **FolDeX**, posted September 9 by Fudan University, Midea Group’s Shanghai AI Research Center, and Carnegie Mellon, is a physical benchmark built around the thing people actually complain about: **folding clothes**.

The dataset is **2,000+ hours** of real-robot data, **20+** tasks, **10+** embodiments. Platforms named in the paper include Aloha, YAM, Piper, Astribot, Franka, UR5, a mobile dual-arm, and **AgiBot G2**. An episode starts with a garment in a basket, then retrieve, flatten, fold, and stack. Success means the whole chain, no human rescue.

The public eval is **FoldChallenge**, already running at [ai.midea.com](https://ai.midea.com/#/fold-challenge), with held-out garments, controlled resets, and rollout video. Binary success is not enough. **FoldScore** mixes neatness, complete-task success, and time: `35 Q̄ + 35 R + 30 max(0, 1 − t/Tmax)`. Neatness is a 0–5 rubric on shape, compactness, flatness, stability, and edge alignment.

<figure>
  <img src="/images/heroes/foldex-garment-folding.jpg" alt="FolDeX overview of sim-to-real and rigid-to-deformable gaps, recovery, cross-task, cross-scene, and FoldChallenge" loading="lazy" />
  <figcaption>FolDeX tracks plus FoldChallenge. Source: FolDeX paper, Figure 1.</figcaption>
</figure>

## Recovery data is the punchline

Reference policies are **π0** trained with real-time chunking. On shirts, skirts, pants, and towels (30 physical trials each, random initial crumple):

| Setting | Average SR | Average FoldScore |
|---------|------------|-------------------|
| RTC multi-task, demos only | 80.75% | 75.59 |
| RTC single-task | 82.50% | 71.69 |
| **RTC multi-task + recovery** | **95.00%** | **82.53** |

Adding human intervention and recovery trajectories lifts pants and towels to **100%** success in that table. Towel is the transfer story: multi-task RTC hits **76.67%** where the towel-only policy sits at **50%**.

The other axes are harsher. Naive joint training across rigid and deformable tasks, or across embodiments, produces interference and forgetting. Lighting and background shifts hurt less. The paper’s point is that mixing more hours is not the same as reusing them.

<figure>
  <img src="/images/heroes/foldex-garment-folding-2.jpg" alt="FolDeX garment categories, folding stages, dual-arm cells, and a humanoid folding station" loading="lazy" />
  <figcaption>Garments, stages, and embodiments. Source: FolDeX paper, Figure 2.</figcaption>
</figure>

The observation interface is two wrist cameras, one workspace camera, language, and proprioception. The policy outputs end-effector pose trajectories. No tactile in this version. The authors flag that as a limit.

## A Human's Take

I have been waiting for someone to stop treating a folded towel as one cell in a 30-task suite. FolDeX is that complaint, with a leaderboard. The 95% recovery-augmented number is the one I will quote, and also the one I will asterisk: you still needed a human on the pedal to get there. The interesting research is whether the next model can eat those recoveries without another week of baby-sitting.

## Sources

- [arXiv:2609.10243 — FolDeX](https://arxiv.org/abs/2609.10243)
- [FolDeX paper HTML](https://arxiv.org/html/2609.10243v1)
- [FoldChallenge evaluation platform](https://ai.midea.com/#/fold-challenge)
