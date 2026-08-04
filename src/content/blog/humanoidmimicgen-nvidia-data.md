---
title: "HumanoidMimicGen: NVIDIA Turns One Teleop Demo Into Thousands"
description: "NVIDIA GEAR’s HumanoidMimicGen generates G1 loco-manipulation demos from few teleops, lifting real-world co-training success from 51% to 71%."
pubDate: 2026-08-04
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/humanoidmimicgen.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Teleoperating a humanoid is slow and expensive. **HumanoidMimicGen**, from NVIDIA’s GEAR lab and collaborators at UT Austin, takes a handful of whole-body demos and expands them into large synthetic datasets for imitation learning — then shows the synthetic data helps on real hardware.

## How it works

The project page describes a pipeline that starts from a single teleoperated demonstration with per-arm skill annotations. **Whole-body planning** builds locomotion and arm plans to new object poses; contact-rich skills are adapted rather than replayed blindly. The method interleaves single- and dual-arm skills with locomotion so generated trajectories stay collision-free across layouts.

That is the core claim versus arm-only generators such as DexMimicGen: humanoid action spaces couple legs, torso, and arms, so tabletop data generators transfer poorly.

<figure>
  <img src="/images/heroes/humanoidmimicgen.jpg" alt="Simulated Unitree G1 lifting a floor box in HumanoidMimicGen benchmark" loading="lazy" />
  <figcaption>Box Lift Floor task on a simulated Unitree G1. Source: humanoidmimicgen.github.io.</figcaption>
</figure>

## Numbers that matter

The authors introduce a **nine-task** G1 loco-manipulation sim benchmark (box lift, drill pick-and-place, shelf push, obstacle-aware pick, and more). Finetuning VLAs on **1,000** HumanoidMimicGen demos from one source demo yields **89%** average success across the nine tasks, versus **48%** with 100 human demos and **33%** with DexMimicGen+ synthetic data from the same single source.

Real-robot co-training is the better headline. Across four hardware tasks (BoxToCart, PickCanister with obstruction, ThrowBottle, PickCanister), policies trained on real demos alone average **51%** success; adding HumanoidMimicGen simulation data lifts that to **71%** — a **20-point** absolute gain the abstract also summarizes as a **20%** relative improvement in co-trained whole-body policies.

<figure>
  <img src="/images/heroes/humanoidmimicgen-2.jpg" alt="Obstacle-aware drill pick task snapshots for HumanoidMimicGen" loading="lazy" />
  <figcaption>Obstacle-Aware Pick Drill task sequence. Source: humanoidmimicgen.github.io.</figcaption>
</figure>

Paper: arXiv:2605.27724 (ICRA 2026 workshop Best Paper Finalist, per author notes). Project site hosts task videos and tables.

## A Human's Take

Synthetic data is only useful if it moves real success rates. A 51→71 jump on four hardware tasks is the kind of receipt I want to see more of. Still: every number above is from the authors’ own benchmark and co-training protocol. I’ll be more convinced when another lab regenerates from one demo and hits the same band.

## Sources

- [HumanoidMimicGen project page](https://humanoidmimicgen.github.io/)
- [arXiv:2605.27724 — HumanoidMimicGen: Data Generation for Loco-Manipulation via Whole-Body Planning](https://arxiv.org/abs/2605.27724)
- [NVIDIA Research — HumanoidMimicGen publication entry](https://research.nvidia.com/publication/2026-06_humanoidmimicgen-data-generation-loco-manipulation-whole-body-planning)
