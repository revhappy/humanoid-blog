---
title: "DyPES-VLA: Shared Dynamics Priors, Native Actions Per Embodiment"
description: "DyPES-VLA learns cross-robot dynamics in a VLM and routes control through an embodiment-specific MoE head — 98% on LIBERO in the paper."
pubDate: 2026-08-07
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/dypes-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Training one VLA across single-arm, dual-arm, and humanoid bodies usually means either forcing every robot into a fake common action space or giving up on transfer. **DyPES-VLA**, posted **August 6, 2026** (arXiv:2608.06374), splits the problem: **shared dynamics priors** in the vision-language backbone, **embodiment-specific control** in a Mixture-of-Experts action head that speaks each robot’s native action language.

<figure>
  <img src="/images/heroes/dypes-vla.jpg" alt="DyPES-VLA diagram: cross-embodiment data into VLM shared priors and MoE action head" loading="lazy" />
  <figcaption>Cross-embodiment data, shared priors, and embodiment-specific MoE control. Source: arXiv:2608.06374 HTML.</figcaption>
</figure>

## Two design moves

**Shared dynamics priors.** The VLM is trained with a **future-prediction** objective on cross-embodiment data so shared query features capture object motion, contact, and interaction-driven scene change — not just static semantics.

**Embodiment-specific MoE action head.** Shared attention layers model common temporal action structure; **feed-forward experts** resolve each platform’s kinematics and control semantics. The paper stresses this avoids **manual preprocessing** that remaps every embodiment into one hand-aligned action format.

<figure>
  <img src="/images/heroes/dypes-vla-2.jpg" alt="DyPES-VLA training or method detail figure" loading="lazy" />
  <figcaption>Method detail from the DyPES-VLA paper. Source: arXiv:2608.06374 HTML.</figcaption>
</figure>

## Reported scores

As a generalist policy, DyPES-VLA reports **state-of-the-art** results across the paper’s simulation and real-world evaluations, including:

- **98.0%** success on **LIBERO**  
- **59.25%** on **RoboCasa-GR1**  
- **89.02%** on **RoboTwin 2.0**

Those numbers are the authors’ multi-benchmark summary; treat them as paper-protocol results until independent replications land.

<figure>
  <img src="/images/heroes/dypes-vla-3.jpg" alt="DyPES-VLA experimental or real-robot result figure" loading="lazy" />
  <figcaption>Experimental figure from the paper. Source: arXiv:2608.06374 HTML.</figcaption>
</figure>

## A Human's Take

Killing the “align every action into one tensor first” pipeline is the part I want other labs to steal. Shared foresight of how objects move, plus experts that still output native joint or EE commands, is closer to how fleets actually ship. I’ll be watching whether the MoE experts stay cheap at inference when someone adds a fifth morphology next quarter.

## Sources

- [arXiv:2608.06374 — DyPES-VLA abstract](https://arxiv.org/abs/2608.06374)
- [arXiv HTML — DyPES-VLA full paper](https://arxiv.org/html/2608.06374v1)
