---
title: "Mimir Splits World Memory from Task Memory for Long-Horizon Agents"
description: "arXiv paper Mimir keeps scene belief and goal progress separate, then grounds them before each action—big gains on EmbodiedBench."
pubDate: 2026-08-08
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/mimir-memory.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Long-horizon household tasks fail in a boring way: the agent still “remembers” frames, but it no longer knows whether the mug is in the cabinet, in its hand, or already in the sink. **Mimir**, posted **August 5, 2026** as [arXiv:2608.04933](https://arxiv.org/abs/2608.04933), treats that as a **memory interface** problem, not just a bigger context window.

<figure>
  <img src="/images/heroes/mimir-memory.jpg" alt="Mimir figure comparing challenge, flat history agents, and world-plus-task memory" loading="lazy" />
  <figcaption>Motivation: separate world belief from task progress, then ground the active goal. Source: arXiv:2608.04933 HTML.</figcaption>
</figure>

## Two memories, then grounding

Mimir is a **neuro-symbolic** stack:

- **World memory** stores object locations, states, and perceptual evidence in an episode-level tree of entities and parents (room / surface / container / hand).
- **Task memory** keeps an ordered goal agenda, status (pending / completed / blocked), hand state, failed object–source hypotheses, and evidence for finished goals.
- A **grounding** step binds the active goal to recalled world candidates, fills missing source locations from memory, and fails closed if nothing is supportable.

Observation updates and action-feedback updates write the two memories on different paths so a successful open-cabinet does not pretend the mug was delivered.

<figure>
  <img src="/images/heroes/mimir-memory-2.jpg" alt="Mimir system diagram with world memory, task memory, and grounding" loading="lazy" />
  <figcaption>Closed loop: recall → ground → plan → embodiment adapter → dual memory update. Source: arXiv:2608.04933 HTML.</figcaption>
</figure>

## Numbers from EmbodiedBench

On **EB-ALFRED** and **EB-Habitat**, the authors report Mimir improving success across many multimodal backbones, with **maximum gains of 42.5%** and **average gains of 23.0%** depending on the split they summarize in the abstract. Against prior agent/memory systems on the same backbone, they claim an **8.5%** overall average success lift. On the **EB-Habitat Long-horizon** subset they report **86.0%** success, above the closed-source baselines they list under a matched generation budget.

Ablations say the division of labor is real: drop world memory and Habitat collapses; drop task memory and ALFRED takes the bigger hit. Code is promised but not released with the paper.

## A Human's Take

Flat chat history is a terrible robot OS. What I like here is the fail-closed grounding: if the world entry never entered perception, Mimir does not invent a mug behind the dishwasher. The open question is transfer beyond EmbodiedBench scripts — real kitchens will stress both the VLM disambiguator and the hand-state bookkeeping when the mug is identical to three others.

## Sources

- [arXiv:2608.04933 — Mimir abstract](https://arxiv.org/abs/2608.04933)
- [arXiv HTML — Mimir full paper](https://arxiv.org/html/2608.04933v1)
