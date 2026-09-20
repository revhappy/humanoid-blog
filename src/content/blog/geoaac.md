---
title: "GeoAAC Lets a VLA Shorten the Chunk When the Denoise Wobbles"
description: "Tongji’s training-free horizon picker reads Flow Matching geometry. Real dual-arm success rises from 53.3% to 74.4% across three lab tasks."
pubDate: 2026-09-20
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/geoaac-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Action chunking is a bet: execute N predicted steps before you look again. N=2 jitters. N=16 flies past the handle. **Xin Chen**, **Yi Bin**, and colleagues at Tongji University posted **GeoAAC** ([arXiv:2609.20776](https://arxiv.org/abs/2609.20776)) on **17 September 2026**: pick N from the shape of the Flow Matching denoise, with no extra training.

They measure how much the velocity field wiggles across action prefixes. More wiggle, less trust in the long prefix. A temporally weighted profile, then the median of positive geometric growth, sets the cut. A motion-aware floor stops the policy from chopping a tiny move into noise.

<figure>
  <img src="/images/heroes/geoaac-2.jpg" alt="Dual-arm lab tasks: capping an alcohol lamp, pulling a rubber tube, uncapping a test tube, with fixed-horizon failures marked" loading="lazy" />
  <figcaption>Same checkpoint, different horizon rule. Source: Chen et al., arXiv:2609.20776, Fig. 6.</figcaption>
</figure>

## Simulation first

**GR00T N1.5** on LIBERO (40 tasks, 50 rollouts each): GeoAAC **95.5%** average success, versus **94.7%** for the best fixed horizon they report (8). Object **99.0%**, Long **89.2%**.

**π0.5** on LIBERO: **98.0%** versus **97.1%** for fixed-5. Long **96.4%** versus **93.2%**.

**RoboCasa365** (18 tasks, GR00T N1.5): **75.1%**, **8.7** points above the best fixed baseline, and above two other adaptive methods (multi-sample uncertainty, self-attention).

**LIBERO-Pro** position shifts, π0.5: **36.2%** average, **5.3** points above fixed-horizon.

Align and place get shorter average horizons (~7.8–7.9). Transport, push/pull, and turn run longer (~9.2–10.5). That matches the story: look more often when the pose has to be right.

<figure>
  <img src="/images/heroes/geoaac.jpg" alt="OpenDrawer rollout comparing fixed chunk lengths that miss the handle versus GeoAAC varying chunk size over time" loading="lazy" />
  <figcaption>Fixed-2 grabs the table edge. Fixed-16 overshoots. GeoAAC changes N mid-task. Source: Chen et al., arXiv:2609.20776, Fig. 1.</figcaption>
</figure>

## Real dual arms

Two **PiperX** arms, three **RealSense D435i** cameras, a Qwen3-VL-2B backbone with a Flow Matching expert, prediction horizon **H=50**, **50 Hz** control. **50** demos per task, **30** eval trials each.

| Task | Fixed-50 | GeoAAC |
|------|----------|--------|
| Extinguish alcohol lamp | 16.7% | 36.7% |
| Disconnect rubber tube | 76.7% | 100.0% |
| Uncap test tube | 66.7% | 86.7% |
| **Average** | **53.3%** | **74.4%** |

Same weights. Only the execution boundary changes. Fixed-50 misses the cap alignment and grabs the wrong object on uncap. GeoAAC replans during those pinches.

## A Human's Take

I have been waiting for someone to stop treating chunk length as a hyperparameter you pick once for the whole kitchen. Reading the denoise instead of training a second head is the kind of cheap trick that survives contact with a real lab. 21 points on the same checkpoint is the number. If your VLA already “knows” the task and still drops the cap, maybe it did not need more data. Maybe it needed to look up sooner.

## Sources

- [arXiv:2609.20776 — GeoAAC](https://arxiv.org/abs/2609.20776)
- [arXiv HTML — LIBERO, RoboCasa365, and real-arm tables](https://arxiv.org/html/2609.20776v1)
