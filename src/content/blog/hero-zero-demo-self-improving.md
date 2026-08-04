---
title: "HERO Bootstraps Robot Skills From Zero Human Demos"
description: "SJTU's HERO agent collects 664 autonomous episodes across four tasks, then distills L1/L2 experience into closed-loop L3 visuomotor policies."
pubDate: 2026-08-04
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/hero-agent.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most manipulation stacks still start with human demos or teleop. **HERO** (Heuristic reasoning, Exemplar reuse, Reflexive execution under Orchestration) argues you can bootstrap and consolidate skills from **zero human demonstrations** by practicing in the loop.

Shanghai Jiao Tong University and University of Sussex authors posted [arXiv:2607.26809](https://arxiv.org/abs/2607.26809) on July 29, 2026, with videos and figures at [hero-agent.github.io](https://hero-agent.github.io/).

## Three capability layers

HERO is a hierarchical embodied agent:

- **L1 — Heuristic Bootstrapper:** zero-shot. A VLM decomposes instructions into four primitives — Grasp, Place, Push, Pull — grounded in a 3D workspace rebuilt with Depth-Anything-3 from multi-view RGB.
- **L2 — Exemplar Accelerator:** one-shot reuse. Similar past trajectories are retrieved and warped by rigid transform so the system skips full VLM replanning.
- **L3 — Reflexive Execution:** a closed-loop visuomotor policy distilled from successful practice, trained at **15 Hz** with automatic fallback to L2/L1.

<figure>
  <img src="/images/heroes/hero-agent.jpg" alt="HERO framework overview diagram" loading="lazy" />
  <figcaption>HERO hierarchical orchestration overview. Source: HERO project page.</figcaption>
</figure>

## Tasks and numbers

Four real-world tasks appear on the project page: package picking, block stacking, drawer search, and cuboid discovery (each with reverse variants). Starting from zero human demos, HERO autonomously collects **664** forward and reverse subtask episodes. Recurring behaviors are distilled into L3 policies using **30** trajectories per task and **10,000** training steps. Deployment schedules **L3 → L2 → L1** with up to **3** retries.

<figure>
  <img src="/images/heroes/hero-agent-2.jpg" alt="HERO four real-world manipulation task setups" loading="lazy" />
  <figcaption>Package, blocks, drawer, and cuboid task settings. Source: HERO project page.</figcaption>
</figure>

Code is listed as coming soon on the project site. The abstract frames the result as reduced human intervention during data collection while still hitting robust manipulation across those tasks.

## A Human's Take

The interesting claim is not “no humans forever” — it is **practice as a first-class data engine**. If L1 really fills the cold-start and L3 eats the routine, you spend human time on exceptions instead of every tray of demos. I want third-party replications before I trust the intervention counts outside the authors’ lab.

## Sources

- [arXiv:2607.26809 — Practice Makes Policies / HERO abstract](https://arxiv.org/abs/2607.26809)
- [HERO project website](https://hero-agent.github.io/)
