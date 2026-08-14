---
title: "RoboSynChallenge Grades Manipulation on Real Arms, Not Just Sim"
description: "A NeurIPS 2026 competition from CUHK Shenzhen and DexForce trains on generated data, then scores policies on dual AgileX Pipers."
pubDate: 2026-08-14
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/robosynchallenge-2.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most manipulation leaderboards stay in one world. Either you win in simulation, or you win on a lab table with a frozen dataset. **RoboSynChallenge**, posted to arXiv on **August 12** for the **NeurIPS 2026 Competition Track**, wants the score that matters: a policy trained mostly on **generated** trials, then run on **unseen real** dual-arm setups.

The organizers sit at **CUHK Shenzhen**, **DexForce**, and a long collaborator list. The public kit is on **robosyn-bench.net** and GitHub under **EDEM-AI/RoboSynChallenge**.

<figure>
  <img src="/images/heroes/robosynchallenge-2.jpg" alt="Dual-arm evaluation table with lighting, cameras, and household objects" loading="lazy" />
  <figcaption>The real eval station: two AgileX Piper arms, controllable lights and tablecloths, and a pile of task objects. Source: RoboSynChallenge paper.</figcaption>
</figure>

## Generate in sim, grade on metal

Training data come from **EmbodiChain**, DexForce’s generative simulation stack. For each task they sample **1,000** simulated trials with randomized lights, materials, table height, cameras, and robot start pose. A smaller real set sits beside it: **five** scene conditions × **four** positions × **three** orientations, or **60** teleop samples per task.

Final ranking is not another sim replay. Submitted policies go onto a standardized **bimanual AgileX Piper** station. Three identical backup tables exist so they can rerun eval without waiting on one broken wrist.

Tasks come in three bands:

- **Entry**: click a bell, pour water, pick a basket, rearrange a table
- **Mid**: hand-over, open a drawer and place, run a mixer
- **High**: assembly, pipette work, sample loading

They vary one factor at a time — table texture, light, seen vs unseen objects, **2 / 4 / 8** distractors, and a **3×3** grid of unseen positions — and report success rate, inference time on an **A800**, and action steps (budget **1,000**).

<figure>
  <img src="/images/heroes/robosynchallenge.jpg" alt="RoboSynChallenge pipeline from synthetic data through co-training to real deployment" loading="lazy" />
  <figcaption>Synthetic generation, a little real teleop, then a real-world score. Source: RoboSynChallenge paper.</figcaption>
</figure>

## Early baselines are not crushing it

They ship ACT, Diffusion Policy, **π0**, **π0.5**, and the world-action model **Motus**, each trained sim-only or real-only so far. Task-average success on the current table:

- **π0.5 (sim)**: **38.50%**
- **π0.5 (real)**: **33.00%**
- **Motus (sim)**: **31.50%**
- **Motus (real)**: **27.50%**
- **π0 (sim / real)**: **22.00% / 22.50%**

High-level work is worse. **π0 (real)** is **0/20** on pipette. **Motus (real)** is **0/20** on pipette and sample loading. Click-bell and hand-over are the easier cells. The point of the contest is whether extra synthetic streams move those numbers on the physical table, not in the renderer.

<figure>
  <img src="/images/heroes/robosynchallenge-3.jpg" alt="Side-by-side real and simulated views of five entry-level dual-arm tasks" loading="lazy" />
  <figcaption>Same five entry tasks in the real cell and in sim. Source: RoboSynChallenge paper.</figcaption>
</figure>

## A Human's Take

A competition that refuses to let you hide in Isaac is the right kind of annoying. Sixty real demos per task is still thin, and Piper is not a factory cell. If someone’s synthetic pile actually lifts pipette and assembly on the held-out table, that is a result I will quote. If the leaderboard is just click-bell, we already knew that.

## Sources

- [arXiv:2608.12416 — RoboSynChallenge](https://arxiv.org/abs/2608.12416)
- [RoboSynChallenge HTML paper](https://arxiv.org/html/2608.12416v1)
- [RoboSynChallenge website](https://robosyn-bench.net/)
- [GitHub — EDEM-AI/RoboSynChallenge](https://github.com/EDEM-AI/RoboSynChallenge)
