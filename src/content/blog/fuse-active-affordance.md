---
title: "FUSE Looks Around Before It Decides What Can Scoop the Food"
description: "A new Habitat benchmark asks a robot to find an object by function, not name. FUSE picks extra viewpoints and hits 72% success versus 42% from a frozen camera."
pubDate: 2026-08-15
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/fuse-affordance.png"
readTime: "4 min read"
featured: false
draft: false
---

If you ask a robot to “scoop food,” the right tool might be a spoon, a cup, or a ladle, and the first camera pose may hide all of them. **FUSE** (Functional Understanding through Semantic–Geometric Exploration) treats that as its own task: **active functional affordance grounding**. The paper is **arXiv:2608.12683**, posted **13 August 2026**, by Zhou Chen and Sathyanarayanan N. Aakur.

Passive affordance methods pick a mask from the frame they already have. Active object search usually hunts a named class. FUSE is asked for a **function**, then has to decide where to look until one object is grounded well enough to point at.

<figure>
  <img src="/images/heroes/fuse-affordance.png" alt="Diagram comparing passive versus active functional grounding on a kitchen table" loading="lazy" />
  <figcaption>Passive commit versus extra views. Source: arXiv:2608.12683.</figcaption>
</figure>

## How it chooses the next look

A functional query first becomes a set of candidate object names. **SAM3** paints semantic evidence for those names. A 3D Gaussian scene, started from **four** seed views via COLMAP, renders what the model thinks it should see. The mismatch, via a structural SNR map, is geometric uncertainty. Those two maps add into an acquisition score that picks the next pan or tilt.

When that search is expensive, a small **amortized** planner (CLIP image features plus a three-layer MLP) guesses the same action values in one pass. If the action distribution is confident (entropy at or below **0.8**), FUSE takes the cheap guess. If not, it refines the Gaussians and does the full search. Exploration stops after **K = 5** non-improving fused scores or **T = 30** steps.

<figure>
  <img src="/images/heroes/fuse-affordance-2.png" alt="FUSE architecture with amortized planner and explicit exploration" loading="lazy" />
  <figcaption>Fast planner versus explicit semantic–geometric search. Source: arXiv:2608.12683.</figcaption>
</figure>

## The Habitat table they built

They evaluate **100** randomized tabletop scenes in Habitat. Each episode hides a target among **7–14** distractors and starts from a view where at least one valid target is partly occluded. Success is SAM3 IoU **> 0.5** against a valid target at the returned viewpoint.

With **CRAFT-E** as the affordance source, they report:

- **Static** (no move): **42%** success
- One **canonical** bird’s-eye move: **32%**
- **Random** walks: **56%**
- **VLM Active** (Gemini, with the oracle label): **65%**
- **Explicit** search only: **70%**
- **Amortized** only: **66%**
- **FUSE**: **72%** success, **70.91%** mean IoU
- **Oracle-label FUSE**: **77%**

On paired episodes, FUSE is **1.33×** faster than full explicit search and calls the expensive 3DGS refine on **33.41%** of decisions (**2.97** refinements per episode). Swap the hypothesis source and FUSE still works; weaker name lists (CRAFT at **53%**) cannot be rescued by better looking.

<figure>
  <img src="/images/heroes/fuse-affordance-3.png" alt="Fused evidence map used to pick the next viewpoint" loading="lazy" />
  <figcaption>Fused evidence map for a “sip” query. Source: arXiv:2608.12683.</figcaption>
</figure>

The authors say they will release the Habitat benchmark. Future work listed: real robots, dynamic scenes, and tying this to actual grasping. Funding includes NSF and a USDA award.

## A Human's Take

I like that the one-shot “canonical view” was *worse* than sitting still. Extra motion without a reason is not a strategy. FUSE is still a tabletop sim with a name list upstream of the camera. That 72% is a looking score, not a scooping score. Put a real arm behind it and then we can talk about the spoon.

## Sources

- [arXiv:2608.12683 — FUSE](https://arxiv.org/abs/2608.12683)
- [arXiv HTML — FUSE (figures and tables)](https://arxiv.org/html/2608.12683)
