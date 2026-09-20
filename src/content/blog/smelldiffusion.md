---
title: "SmellDiffusion Maps a Named Gas Leak, Then Plans the Walk"
description: "Skoltech’s sim pipeline builds an olfactory scene graph, gates a 60% source-error cut on displaced peaks, and compares diffusion routes to A* in Gazebo."
pubDate: 2026-09-20
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/smelldiffusion-3.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A leak inspector does not want “follow the strongest smell.” They want “find the chlorine.” **Faith Ogunwoye**, **Iana Zhura**, **Dzmitry Tsetserukou**, and colleagues at the Skolkovo Institute of Science and Technology posted **SmellDiffusion** ([arXiv:2609.20624](https://arxiv.org/abs/2609.20624)) on **17 September 2026**.

It is a simulation pipeline. No physical quadruped run is reported. The teaser art in the paper is labeled conceptual. The useful part is the split: a language-tagged map chooses *where*, a planner chooses *how*.

<figure>
  <img src="/images/heroes/smelldiffusion-3.jpg" alt="Concentration-field map with A-star and diffusion paths around inflated obstacles" loading="lazy" />
  <figcaption>Same goal, different routes. Source: Ogunwoye et al., arXiv:2609.20624, Fig. 5.</figcaption>
</figure>

## Graph first, then a gate

Offline, GADEN filament fields are swept by a virtual e-nose at **0.5 m** height on a **0.1 m** grid. Zones store a peak-based source estimate and a **512-d CLIP** text embedding. A query is scored against those sentences. The winning coordinate becomes the goal for either **A\*** or a diffusion waypoint policy.

Obstacle flow can shove the concentration peak off the source. Among **424** unique source–wind configs, **28** have a peak more than **0.5 m** from the source. A peak-local geometric gate, fit only on training data, fires on **14** of **204** held-out cases: **9** true positives, **5** false positives, **1** miss (**0.64** precision, **0.90** recall). When it fires, a library lookup of training simulations cuts mean error on the displaced subset from **1.468 m** to **0.592 m** (**60%**). All-case mean error goes **0.205 m → 0.180 m**. Matching every peak without the gate makes the majority worse.

<figure>
  <img src="/images/heroes/smelldiffusion-2.jpg" alt="Flowchart from GADEN simulation and CLIP embeddings to online query matching and A-star or diffusion planning" loading="lazy" />
  <figcaption>Offline graph, online query. Source: Ogunwoye et al., arXiv:2609.20624, Fig. 2.</figcaption>
</figure>

## Diffusion is not faster if you sample ten times

On **12** start–goal pairs, every method succeeds. Plain A\* is shortest and fastest (**15.2 ± 8.9 ms**). One diffusion sample is **41.7 ms** with higher clearance and **39%** more length. Best-of-ten diffusion hits mean gas exposure **0.0476** versus **0.0455** for gas-guided A\*, at **407.7 ms**.

Six matched Gazebo runs (chlorine, ethanol, methane × two planners) give mean robot-to-source error **0.39 m** (A\*) and **0.31 m** (diffusion). One execution per condition. The paper does not treat that as a statistical win.

Language is the weak joint. An integrated query test scores **7/9**. A held-out probe on new sentences is **3/10** until nearest-neighbor normalization lifts it to **5/10**. Code: [github.com/FaithOgunwoye/Olfsg](https://github.com/FaithOgunwoye/Olfsg).

## A Human's Take

I will take a gate that only spends the expensive lookup on 14 of 204 cases. That is engineering. I will not take a CLIP sentence match that still loses half of the held-out queries and call it “find the chlorine.” The map has to know the species. The language layer, as written, is not there yet.

## Sources

- [arXiv:2609.20624 — SmellDiffusion](https://arxiv.org/abs/2609.20624)
- [arXiv HTML — tables, Gazebo runs, language probe](https://arxiv.org/html/2609.20624v1)
- [GitHub — FaithOgunwoye/Olfsg](https://github.com/FaithOgunwoye/Olfsg)
