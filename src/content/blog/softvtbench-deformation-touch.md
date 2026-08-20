---
title: "SoftVTBench Fails Your Policy If It Crushes the Pastry"
description: "A 4,000-demo visuo-tactile suite scores pick-and-place only if deformation stays in a pre-calibrated window. Touch helps more under shift than in-distribution."
pubDate: 2026-08-20
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/softvtbench-deformation-touch.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A policy can finish a pick-and-place by squeezing the object into paste. Most benchmarks still call that a win.

**SoftVTBench** does not. The dataset (arXiv:2608.18701), from Tuojing Intelligence, Tsinghua, and a long university list, logs dual-finger tactile RGB and marker motion for the policy, and hides finite-element node motion from it. **Deformation-aware Success Rate (DSR)** counts a rollout only if the task finishes **and** peak normalized deformation stays inside a per-object tolerance set before any policy is trained.

<figure>
  <img src="/images/heroes/softvtbench-deformation-touch.jpg" alt="SoftVTBench overview with pastry assets and a too-loose / safe / too-tight grasp diagram" loading="lazy" />
  <figcaption>4,000 demos, matched rigid twins, and the slip-to-crush window. Source: Jing et al., arXiv:2608.18701 / SoftVTBench site.</figcaption>
</figure>

## What you get

**4,000** expert demonstrations across **40** tasks in four suites: Object-Soft, Spatial-Soft, and rigid twins of both. More than **50** assets, including volumetric bakery-style objects and lookalike rigid copies. Streams run at **20 Hz** in Isaac Sim / Isaac Lab, with a Franka and Panda gripper. Tactile rendering uses TacEx for simulated GelSight Mini sensors.

None of the accepted demos exceed the deformation tolerance. Median peak normalized deformation on the 2,000 soft demos is **0.433**; the 95th percentile is **0.713**.

<figure>
  <img src="/images/heroes/softvtbench-deformation-touch-2.jpg" alt="SoftVTBench pipeline from matched assets through TSR and DSR labeling" loading="lazy" />
  <figcaption>Calibrate first, then record policy-visible and evaluator-only streams separately. Source: Jing et al., arXiv:2608.18701.</figcaption>
</figure>

## Task success hides the squeeze

They run **Diffusion Policy**, **π0.5**, and **FastWAM**, vision-only and visuo-tactile.

Every one of the **12** in-distribution soft configurations has successes that violate the tolerance, **0.7–24%** of each configuration’s own wins. Diffusion Policy with touch on Object-Soft is the loud case: TSR **40.0%**, DSR **30.4%** — **48** of **500** episodes.

FastWAM is the counterexample. On both spatial configurations its TSR–DSR gap is **0.4** points, two episodes out of 500, while leading the table.

An ablation on π0.5 shows why “we added touch” is a messy claim. Switching from binary to continuous gripper commands lifts Object-Soft TSR about as much as adding tactile input. Combining both adds nothing further on that suite. Match the action space before you credit the camera on the fingertip.

Under nine single-factor shifts (lighting, mass, stiffness), visuo-tactile variants win all six TSR comparisons and five of six DSR comparisons. In distribution the same head-to-head is split.

<figure>
  <img src="/images/heroes/softvtbench-deformation-touch-3.jpg" alt="Tactile RGB and marker-motion fields for ten Object-Soft assets at grasp" loading="lazy" />
  <figcaption>Contact patches differ by object. The policy sees these; the FEM scorer does not. Source: Jing et al., arXiv:2608.18701.</figcaption>
</figure>

## A Human's Take

Scoring the squeeze separately from the place is overdue. The FastWAM numbers prove you can hit the target without leaving the safety window, so the gap is a policy problem, not a law of soft objects.

This is still Isaac Sim with a rendered GelSight. I want the same DSR on a real pastry before I retire task-success as the only headline.

## Sources

- [arXiv:2608.18701 — SoftVTBench](https://arxiv.org/abs/2608.18701)
- [arXiv HTML — paper and figures](https://arxiv.org/html/2608.18701v1)
- [SoftVTBench project page](https://softvtbench.github.io/)
- [GitHub — TuojingAI/SoftVTBench](https://github.com/TuojingAI/SoftVTBench)
