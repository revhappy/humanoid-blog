---
title: "Graph-MambaNav Puts the Coffee Machine Last in Line"
description: "A RA-L ObjectNav stack orders household objects by LLM affinity, then scans them with Mamba. It hits 83% success in AI2-THOR."
pubDate: 2026-08-17
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/graph-mambanav.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Graph-MambaNav** is an object-goal navigator that treats **scan order** as the policy. If you are looking for a coffee machine, the toaster and the mug should not be processed in a random pile. The paper is **arXiv:2608.13723**, accepted at **IEEE RA-L** and slated to transfer to **ICRA 2027**.

Most object graphs are permutation-invariant. Every node talks, then attention decides who mattered. Graph-Mamba showed that **who goes last** in a state-space scan gets the richest context. This paper makes that order **target-aware**.

<figure>
  <img src="/images/heroes/graph-mambanav.jpg" alt="Graph-MambaNav overview with kitchen RGB, object graph, and LLM affinity matrix" loading="lazy" />
  <figcaption>Kitchen ObjectNav: graph, target-aware scan, temporal memory. Source: Sun et al., arXiv:2608.13723.</figcaption>
</figure>

## ChatGPT, then Mamba

A frozen **DETR** detector fills a **22-category** object graph. **ChatGPT-5**, via a co-occurrence prompt, builds an affinity matrix. Those scores initialize **edge weights** and a **heuristic order**: low-relevance objects first, the target last, so the target node sees everyone else.

A **GINE** local pass handles neighbors. A **Graph-Mamba** global pass reads the ordered sequence. A second Mamba then walks each object’s history, memory capped at **T = 35**. An A3C LSTM picks among MoveAhead, turns, look up/down, and Done.

Success means Done, the target in view, and distance under **1.5 m**.

## Sim numbers, then a living-room book

On **AI2-THOR**, Graph-MambaNav reports **83.22%** success and **46.52%** SPL on all test trajectories. **TSOG** is **80.04 / 41.44**. **CGI+GAIL** is **77.59 / 46.25**. **Memory-MambaNav** is **81.24%** success. On long paths (**L ≥ 5**) they list **76.09%** success.

**RoboTHOR** is harder: **49.82%** success and **28.67%** SPL, still the best success in their table, with **37.38%** success on **L ≥ 5**.

Ablations say the **global ordered scan** is the big jump (**66.15 → 78.34** success). Temporal scan adds the rest (**78.34 → 83.22**). Random global order drops them to **73.67%**. Corrupting **30%** of the affinity entries lands at **77.92%**.

<figure>
  <img src="/images/heroes/graph-mambanav-2.jpg" alt="AI2-THOR and RoboTHOR top-down comparisons of Graph-MambaNav vs TSOG" loading="lazy" />
  <figcaption>Affinity matrices and room-by-room paths vs TSOG. Source: arXiv:2608.13723.</figcaption>
</figure>

The real robot is a wheeled base with a camera at **0.65 m**, a pitch servo, **Raspberry Pi 5** on ROS 2, and the policy on a host PC. In a living room the target is a **book**. The robot walks toward a laptop, then chairs and a TV, and finds the book on a chair cluster. The paper presents that as a qualitative transfer demo, not a success-rate table.

<figure>
  <img src="/images/heroes/graph-mambanav-3.jpg" alt="Wheeled robot finding a book in a real living room using object relations" loading="lazy" />
  <figcaption>Real living-room book hunt. Point cloud is visualization only. Source: arXiv:2608.13723.</figcaption>
</figure>

## A Human's Take

Ordering the graph by “what usually sits near a remote” is a trick I would actually ship on a home robot. It will also walk you into the wrong chair when the house does not match ChatGPT’s kitchen. The living-room book run is cute. Give me a dozen unseen apartments with a fail log before I trust the affinity matrix more than a map.

## Sources

- [arXiv:2608.13723 — Graph-MambaNav](https://arxiv.org/abs/2608.13723)
- [arXiv HTML — Graph-MambaNav paper](https://arxiv.org/html/2608.13723v1)
