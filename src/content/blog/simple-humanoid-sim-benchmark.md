---
title: "SIMPLE: PSI Lab’s Dual-Sim Benchmark for Humanoid Loco-Manipulation"
description: "USC PSI Lab’s SIMPLE pairs MuJoCo physics with Isaac Sim rendering for 60 whole-body humanoid tasks and zero-shot sim-to-real transfer."
pubDate: 2026-08-04
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/simple-humanoid.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Humanoid foundation models are shipping faster than anyone can fairly compare them. USC’s Physical Superintelligence (PSI) Lab answers with **SIMPLE** — Simulation-Based Policy Learning and Evaluation for humanoid loco-manipulation — a dual-simulator testbed with **60** whole-body tasks, **50** indoor scenes, and **1,000+** object assets.

## Dual engines on purpose

SIMPLE decouples physics from vision. **MuJoCo** owns contact-rich dynamics and high-frequency control; **Isaac Sim** owns photorealistic rendering after offline replay. The project page describes three stages: collect trajectories in MuJoCo (motion planning or VR teleop), replay and domain-randomize in Isaac Sim, then evaluate policies under three progressive randomization levels (**L0 / L1 / L2**) via a Gym-style interface.

<figure>
  <img src="/images/heroes/simple-humanoid.jpg" alt="SIMPLE pipeline: data generation, replay and render, policy evaluation" loading="lazy" />
  <figcaption>SIMPLE system pipeline across MuJoCo data generation, Isaac Sim rendering, and multi-level evaluation. Source: psi-lab.ai/SIMPLE.</figcaption>
</figure>

Data collection is built in. Automated planning uses **BoDex** grasps and **CuRobo** dual-arm trajectories with a scripted base policy. VR teleop streams egocentric stereo to a PICO headset while a whole-body tracker holds balance. The authors report collection rates (demos/hour) on whole-body pick-and-place of **58.9** (motion planning), **206.8** (real teleop), and **310.3** (sim teleop) — sim teleop wins because resets and safety overhead disappear.

## Who wins the leaderboard

The team fine-tunes and scores mainstream policies — including **Ψ0**, GR00T N1.6, π0.5, DreamZero, ACT, and others — on six task families under L0/L1/L2. Tables on the project site show Ψ0 and ACT among the strongest overall, with mobile pick-and-place still hard for several large VLAs. Ablations favor mixing domain-randomization levels and prefer teleop data over motion-planning-only for several task families.

<figure>
  <img src="/images/heroes/simple-humanoid-3.jpg" alt="Automated motion planning pipeline diagram for SIMPLE" loading="lazy" />
  <figcaption>Automated motion-planning path for upper-body manipulation and lower-body locomotion. Source: psi-lab.ai/SIMPLE.</figcaption>
</figure>

![Egocentric sim pick-and-place view used in SIMPLE zero-shot transfer studies](/images/heroes/simple-s2r-pp.jpg)

Critically, policies trained only in SIMPLE transfer **zero-shot** to physical humanoids under matched settings. Reported sim vs real success includes pick-and-place **0.90 / 0.80** and handover **1.00 / 0.80**. Code is open on GitHub (`physical-superintelligence-lab/SIMPLE`); paper: arXiv:2606.08278.

## A Human's Take

I love a benchmark that admits humanoid loco-manipulation is not tabletop arms with legs glued on. Dual-sim is the right trade: MuJoCo for feet, Isaac for cameras. The zero-shot numbers are the real pitch — if outside labs can reproduce them, SIMPLE becomes the default place to fail cheaply before you burn robot-hours.

## Sources

- [PSI Lab — SIMPLE project page](https://psi-lab.ai/SIMPLE/)
- [arXiv:2606.08278 — SIMPLE: Simulation-Based Policy Learning and Evaluation for Humanoid Loco-manipulation](https://arxiv.org/abs/2606.08278)
- [GitHub — physical-superintelligence-lab/SIMPLE](https://github.com/physical-superintelligence-lab/SIMPLE)
