---
title: "HALOMI Teaches G1 Loco-Manipulation From Human Demos Alone"
description: "HALOMI uses UMI-style human demos, an active neck, and a manifold whole-body controller to hit ~85% average success on Unitree G1 tasks."
pubDate: 2026-08-04
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/halomi.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most humanoid learning still assumes you own a robot and a skilled teleoperator. **HALOMI** (Humanoid Active-Perception Loco-Manipulation Interface) flips that: learn long-horizon loco-manipulation from **robot-free human demonstrations**, then run them on a Unitree **G1** with a custom **3-DoF active neck**.

## The interface

Authors from Shanghai Jiao Tong University and collaborators describe a data kit that pairs bimanual **UMI-style** handheld grippers (Agilex Pika Sense) with a helmet-mounted RealSense and VIVE tracking. Demonstrators produce synchronized ego-view RGB, wrist-view RGB, and head-hand trajectories at **30 Hz** — no robot in the loop during collection.

On the robot side, matching Pika grippers sit on the G1 arms, and a servo-driven neck aims the head camera with yaw/pitch/roll roughly aligned to the optical center. A high-level VLA (**π0.5** fine-tuned on processed human data) predicts relative head-hand action chunks; a **manifold-constrained** whole-body controller tracks those world-frame targets by planning in a BFM-Zero latent behavior space rather than raw joint commands.

<figure>
  <img src="/images/heroes/halomi.jpg" alt="HALOMI real-world G1 tasks: bag transfer, bread place, towel, toss, squat grasp" loading="lazy" />
  <figcaption>Five real-world G1 task suites from the HALOMI paper. Source: arXiv:2606.18772 HTML figures.</figcaption>
</figure>

## Results worth quoting

Across three quantitative tasks with ~95–102 human demos each and 20 rollouts per setting, success rates land at **90%** (bag transfer to cabinet), **85%** (pick bread and place), and **80%** (towel to basket) — about **85%** average as stated in the abstract. Qualitative demos add dynamic tossing and deep-squat grasps.

Ablations are sharp:

- Drop ego-view alignment on bag transfer: **90% → 10%**
- Disable active neck on bag transfer: **90% → 30%**; on towel task: **80% → 10%**
- Controller-aware trajectory adaptation trims tracking error ~**6–8%** and lifts bread task **75% → 85%**

OOD tests hold partial generalization (e.g. **60%** on novel towel appearance; **60%** on unseen cabinet placements) but collapse when bread-to-plate relative layout leaves the demonstration distribution.

<figure>
  <img src="/images/heroes/halomi-2.jpg" alt="HALOMI bag transfer ablation and generalization panels" loading="lazy" />
  <figcaption>Bag transfer ablations and failure modes. Source: arXiv:2606.18772.</figcaption>
</figure>

Project site: [halomi-humanoid.github.io](https://halomi-humanoid.github.io). Paper: arXiv:2606.18772 (submitted June 17, 2026).

## A Human's Take

Active perception is the sleeper feature here. Teaching a humanoid from people who naturally look where they reach is how long-horizon home and warehouse tasks should be collected — if the alignment stack holds up outside the authors’ lab. The neck hardware is a reminder that stock G1 heads still leave something on the table for hand-eye work.

## Sources

- [arXiv:2606.18772 — HALOMI abstract](https://arxiv.org/abs/2606.18772)
- [arXiv HTML — HALOMI full paper](https://arxiv.org/html/2606.18772v1)
- [HALOMI project website](https://halomi-humanoid.github.io/)
