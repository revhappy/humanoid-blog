---
title: "ADEPT Learns Dexterity Once, Then Inserts Pegs From Cameras"
description: "NVIDIA and Michigan’s ADEPT pretrains dexterous RL, then zero-shots peg insert and dish-rack on Kuka-Allegro and Flexiv-Sharpa."
pubDate: 2026-08-20
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/adept-nvidia-dexterity.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most dexterous RL papers relearn “reach, grasp, lift” for every new task. **ADEPT** tries to pay that bill once.

The paper, posted **August 19** as [arXiv:2608.19182](https://arxiv.org/abs/2608.19182), comes from **NVIDIA** and the **University of Michigan Robotics** group. Authors include **Jayjun Lee**, **Jessica Yin**, **Ankur Handa**, and **Nima Fazeli**. The [project page](https://adept-dexterity.github.io/) walks the same pipeline: pretrain on generic object reposing, post-train a specialist, distill a vision (or visuo-tactile) student, deploy zero-shot.

<figure>
  <img src="/images/heroes/adept-nvidia-dexterity.jpg" alt="Kuka-Allegro placing a plate in a dish rack and Flexiv-Sharpa inserting a peg, shown as sequential frames" loading="lazy" />
  <figcaption>Real-world ADEPT students: dish-rack on a 23-DoF Kuka-Allegro, peg insert on a 29-DoF Flexiv-Sharpa. Source: ADEPT paper / project page.</figcaption>
</figure>

## Pretrain the boring skills

Pretraining is PPO on a reposing task: 16 primitive shapes at random scale, reach-grasp-lift-reorient-transport to a sampled pose. The Kuka-Allegro teacher hits **0.73** success on those primitives, **0.76** on the unseen FMB pegs, and **0.77** on 152 VisDex objects. Flexiv-Sharpa sits a bit lower (**0.64 / 0.58 / 0.61**).

That prior zero-shots the easy part of peg insertion. On the Kuka-Allegro, success stays above **50%** through ADR level 35 and drops to **0%** at the actual hole (ADR 50). So post-training only has to learn contact-rich insertion, not grasping from scratch.

Naïve PPO fine-tuning wrecks the prior in a few updates. ADEPT’s recipe is: behavior-clone the actor into the new observation space, freeze it while a fresh critic warms up, then run conservative PPO (actor LR **1e-5**, clip down to **0.05**). Ablations say the low actor learning rate is the piece that stops collapse.

A **full joint-space geometric fabric** sits between policy and robot. Unlike earlier fabric work that stuffed the hand into a 5-D PCA grasp, ADEPT commands all **23** (Kuka-Allegro) or **29** (Flexiv-Sharpa) joints and still keeps collision and joint-limit guards.

<figure>
  <img src="/images/heroes/adept-nvidia-dexterity-2.jpg" alt="Lab photos of Kuka-Allegro and Flexiv-Sharpa arms with peg boards, plates, and cameras" loading="lazy" />
  <figcaption>Hardware: Kuka iiwa7 + Allegro, Flexiv Rizon + Sharpa, two RealSense cameras each. Source: ADEPT paper.</figcaption>
</figure>

## What actually ran on the bench

Students see stereo RGB. The Sharpa student also gets five fingertip **TacMap** depth images. No pose tracker, no human demos at deployment.

Real-world, 10 trials per condition, cumulative stages:

- Kuka-Allegro, FMB **star** peg: **5/10** full inserts
- Kuka-Allegro, **square/round** peg: **3/10**
- Flexiv-Sharpa, square/round, **vision only**: **3/10**
- Flexiv-Sharpa, square/round, **visuo-tactile**: **8/10**
- Kuka-Allegro, **dish rack**: **6/10**

Touch is the split. The paper says the vision-only student often cannot tell a grasp landed, so it reopens and loops. With tactile maps it grasped and lifted in every trial.

Cycle time is **5–10 s** per trial versus **20–70 s** for the FMB parallel-jaw pipeline that uses fixtures and multi-stage regrasps. The authors call that a **2×–14×** speedup.

A single-stage distillation student transferred at **0/10**. The two-stage curriculum (reposing teacher first, then insertion teacher) is what made sim-to-real land.

<figure>
  <img src="/images/heroes/adept-nvidia-dexterity-3.jpg" alt="Four-panel ADEPT pipeline from reposing pretraining through real-world zero-shot deployment" loading="lazy" />
  <figcaption>The four-stage recipe: pretrain, post-train, distill, deploy. Source: ADEPT paper.</figcaption>
</figure>

## A Human's Take

Pretrain on cubes, then insert a two-legged peg from pixels, with no motion-capture crutch. That is the right research shape.

The 3/10 vision-only inserts on the hard peg still say perception is the bottleneck they named. I care more about the 8/10 with fingertip cameras: if you cannot feel the grasp, you will keep opening the hand. Hands that guess are not ready for a shift.

## Sources

- [arXiv:2608.19182 — ADEPT: Accelerating Dexterity via Pre-Training and Post-Training using Reinforcement Learning](https://arxiv.org/abs/2608.19182)
- [ADEPT project page](https://adept-dexterity.github.io/)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2608.19182)
