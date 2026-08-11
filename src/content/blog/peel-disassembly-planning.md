---
title: "PEEL Races Parts Out of Assemblies With Parallel Motion Planning"
description: "MAB-RRT hits 100% on 76 Automate single-part extractions; PEEL dismantles 10–17 part assemblies on a Fetch simulator."
pubDate: 2026-08-11
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/peel-disassembly-2.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Disassembly sequence planning often builds a huge precedence graph first, then validates motions. That combinatorial front-end does not age well past a few dozen parts.

**PEEL** (Parallel Extraction for Long-Horizon Disassembly), arXiv:2608.08773 (Aug 9, 2026) from Servet B. Bayraktar, Andreas Orthey, Zachary Kingston, and Marc Toussaint, flips the order: **geometric removability is the sequence**. Batches of single-part planners race; the first to find a collision-free escape wins, competitors die, and the reduced assembly goes again.

<figure>
  <img src="/images/heroes/peel-disassembly.jpg" alt="Fetch manipulator disassembling a pair of pliers" loading="lazy" />
  <figcaption>Fetch mobile manipulator mid-disassembly of pliers. Source: arXiv:2608.08773.</figcaption>
</figure>

## Planner stack

Each single-object query is **MAB-RRT**: a multi-arm bandit switches among uniform, scale-invariant, and PCA-directional samplers to find narrow escape corridors (think bolts in tight bores). Scale is estimated in a burn-in sphere of free space; PCA then biases along the corridor.

PEEL pops up to B parts from a shuffled queue, launches concurrent MAB-RRT processes with shared time budget T, and either commits a winner or doubles T after a full failed sweep. Pure geometry: rigid bodies, zero penetration, no friction model.

Project page with animations and code pointers: [peel-disassembly.surge.sh](https://peel-disassembly.surge.sh/).

## Results

- **MAB-RRT** alone: **100%** success on **76** collision-free Automate assemblies (10 random rotations each → 760 trials), under strict collision checking, outperforming AssembleThemAll baselines in the paper's comparison.  
- **PEEL** on four multi-part assemblies with **10–17** removable parts, with full robot grounding (grasp → extraction → regrasp → place) on a **Fetch** in simulation.  
- Free-state detection uses translational/rotational mobility rank along the object path so the arm does not follow the entire overshot RRT tree into free space.

<figure>
  <img src="/images/heroes/peel-disassembly-3.jpg" alt="Fetch placing disassembled parts on a table" loading="lazy" />
  <figcaption>Parts placed after sequenced extraction. Source: arXiv:2608.08773.</figcaption>
</figure>

## A Human's Take

I like treating "can I pull this part out without hitting anything" as the *definition* of the next step instead of a post-check on a symbolic plan. That will not replace physics for gravity-sensitive subassemblies, and the authors know it — pure geometry is a candidate generator. For recycling cells that already have CAD of bolted machinery, a 100% single-part extraction rate on a filtered Automate set is a useful bar. Show me a physical Fetch or industrial arm on one of those 17-part assemblies next.

## Sources

- [arXiv:2608.08773 — PEEL: Parallel Extraction for Long-Horizon Disassembly Planning via Scale-Invariant Sampling](https://arxiv.org/abs/2608.08773)
- [arXiv HTML full text](https://arxiv.org/html/2608.08773v1)
- [PEEL project page](https://peel-disassembly.surge.sh/)
