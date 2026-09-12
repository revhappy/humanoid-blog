---
title: "FARM Reads Failure Out of a Frozen World Model"
description: "A 33,985-parameter probe on VLA-JEPA states hits 85.68 pooled AUROC and transfers to PIPER X, SO-101, and Franka."
pubDate: 2026-09-12
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/farm-world-model-failure.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most failure monitors train a second brain. **FARM** asks whether the world model you already run is already muttering “this is going badly.”

**Haoran Pei** and colleagues at the **Institute of Automation, Chinese Academy of Sciences**, with **Harbin Institute of Technology**, posted the paper **September 10**. They freeze **VLA-JEPA**, pull the last predictor block’s **768 × 1024** tokens, and train only a **33,985**-parameter readout. That head emits a per-step score \(s_t\) and a causal risk \(q_t = \max_{\tau \le t} s_\tau\).

Code: [github.com/HaoranPei-casia/FARM](https://github.com/HaoranPei-casia/FARM).

<figure>
  <img src="/images/heroes/farm-world-model-failure.jpg" alt="PIPER X and SO-101 robot setups with failure-score traces for plug, duck, and cube tasks" loading="lazy" />
  <figcaption>Real-robot rollouts: plug insertion, duck boxing, cube grasp. Scores stay low, then rise near failure. Source: Pei et al., arXiv:2609.11445, Figure 3.</figcaption>
</figure>

## Simulation first

The sim set is **500** LIBERO trajectories (**246** success / **254** failure) across **10** tasks, with one LIBERO-10 task swapped for a LIBERO-Goal drawer job because the original almost never failed. Seven source tasks, three held-out.

Five-fold out-of-fold on the **350** source trajectories: **85.68 / 88.59** pooled AUROC / AUPRC. A linear probe on seven coarse hidden-state stats only reaches **77.19 / 78.81** pooled. Using earlier predictor blocks is weaker than the final WM state.

On the fixed 10-task split, FARM leads **15** matched baselines on all four Seen metrics, **5.42 / 4.88** Macro AUROC / AUPRC points over **SAFE-MLP**. Strict-unseen is harder: **STAC-Single** wins zero-shot there; with **35** labeled target trajectories per task, FARM leads the SAFE readouts again.

Partial history already works. At **25%** of the horizon, pooled AUROC / AUPRC are **75.07 / 80.75**. At **75%**, **81.63 / 85.53**, within about two points of the full trace.

<figure>
  <img src="/images/heroes/farm-world-model-failure-2.jpg" alt="Failure-score curves aligned to LIBERO keyframes for stall, misplace, and wrong-object errors" loading="lazy" />
  <figcaption>OOF scores on stall, mug misplacement, and wrong-object transport. Source: FARM paper, Figure 4.</figcaption>
</figure>

## Four real-robot rooms

They keep the backbone frozen and try two source readouts (Core vs Expanded) plus readout-only adaptation:

| Robot / policy | Expanded zero-shot AUROC/AUPRC | Core zero-shot | Adapted |
|---|---|---|---|
| PIPER X / π0.6\* | 84.70 / 79.13 | 41.35 / 35.43 | 98.48 / 98.41 |
| PIPER X / VLA-JEPA | 90.91 / 93.20 | 72.73 / 90.11 | 95.73 / 97.80 |
| SO-101 / Eval-RL | 69.85 / 68.46 | 57.80 / 42.76 | 82.88 / 73.06 |
| Franka / π0-FAST-DROID | 55.89 / 55.82 | 51.58 / 54.66 | 75.78 / 74.31 |

Zero-shot is not uniform. How you train the source readout matters as much as the frozen features. Adaptation updates only those 33,985 weights.

Once the WM state is already on an **RTX 5090**, the readout adds **0.2256 ms** mean CUDA time (**0.2393 ms** P99), about **4,433** steps/s. That number excludes world-model inference.

<figure>
  <img src="/images/heroes/farm-world-model-failure-3.jpg" alt="FARM readout diagram over frozen world-model tokens" loading="lazy" />
  <figcaption>Token projection, attention pooling, and causal max risk. Source: FARM paper, Figure 1.</figcaption>
</figure>

Limits they own: you need internal states and labeled outcomes; unseen tasks stay harder than matched ones.

## A Human's Take

I will take a 34k-parameter whistle on a frozen predictor over another full-size critic any day, if the score actually rises before the mug hits the floor. The transfer table is the adult slide: Core vs Expanded is a reminder that “the representation contains failure” is not the same as “your probe found it.” Adaptation is allowed. Pretending zero-shot is free is not.

## Sources

- [arXiv:2609.11445 — FARM](https://arxiv.org/abs/2609.11445)
- [GitHub — HaoranPei-casia/FARM](https://github.com/HaoranPei-casia/FARM)
