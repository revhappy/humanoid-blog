---
title: "VLA-Precision Learns Lab Chemistry on Real Arms in Under an Hour"
description: "USTC’s VLA-Precision posts 98.3% mean success on nine chemistry tasks across four robot setups, with 45.8 minutes of online RL per task."
pubDate: 2026-09-08
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/vla-precision.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A University of Science and Technology of China team put real-world online reinforcement learning on a large vision-language-action model and aimed it at lab glassware. **VLA-Precision**, posted to arXiv on **3 September 2026** (arXiv:2609.04355), reports **98.3%** mean success on **nine** high-precision chemistry tasks, **45.8 minutes** of online training per task, and **27.6-second** episodes.

<figure>
  <img src="/images/heroes/vla-precision.jpg" alt="VLA-Precision overview with four robot embodiments and chemistry experiment stills" loading="lazy" />
  <figcaption>Four embodiments, a frozen VLM plus action expert, and the chemistry bench. Source: arXiv:2609.04355.</figcaption>
</figure>

## The jobs

The project page and paper list the same nine tasks, grouped as contact-rich, contact-light, contact-free, and bimanual:

- Pipette tip attachment
- Cuvette transfer
- Tube brushing
- Tube rack loading
- Pipette transfer and ejection
- 2 mL vial transfer
- Bulb dropper transfer
- Alcohol lamp extinguishing
- Rubber stopper insertion

<figure>
  <img src="/images/heroes/vla-precision-3.jpg" alt="UR5e with a parallel gripper at a chemistry bench" loading="lazy" />
  <figcaption>UR5e-DHGripper, one of the four real-robot setups. Source: arXiv:2609.04355.</figcaption>
</figure>

Hardware is not a humanoid. The authors run **UR5e** with a parallel gripper, UR5e with a **LinkerHand L20**, a dual UR5e cell, and a **Franka Research 3**. That is four embodiments, four categories, nine tasks — the abstract’s counting.

<figure>
  <img src="/images/heroes/vla-precision-2.jpg" alt="Nine chemistry manipulation tasks shown as sequences of robot-arm stills" loading="lazy" />
  <figcaption>The nine-task suite, from dropper transfer to tube brushing. Source: arXiv:2609.04355.</figcaption>
</figure>

## How they train it

Pretrained VLAs still miss on tight, repeatable work. Straight online RL on a big VLA has two problems the authors name: noisy value estimates that drift the policy, and the compute cost of updating a large model while the robot is running.

**Asymmetric Co-Bootstrapping (ACoB)** splits timescales. Early on, intervention-guided behavioral learning soaks up human corrections. As autonomous rollouts pile up, global return propagation and local preference ranking clean up the critic. Relative action advantages then update the policy with a frozen reference so it does not wander off the demonstration prior.

**ACoB-Stream** is the systems piece: keep frozen vision-language contexts, stream only what the current loss needs, and sync only the trainable action-expert LoRA instead of the whole VLA. The abstract claims up to **10.9×** throughput and efficiency. Episodes run at **1.2×** and **1.8×** the speeds of their VLA and RL baselines.

Stage I is full-parameter imitation on demonstrations from a **π0.5** checkpoint. Stage II freezes that backbone and trains LoRA in the action expert. They also built a UR5e-isomorphic master arm for teleop and a keyboard interface for millimeter increments.

## A Human's Take

Pipette tips and rubber stoppers are the right test. If a VLA cannot seat a tip, it will not load a tray. Forty-six minutes per task is a serious number if it holds outside this lab. I want to see the same loop on a humanoid hand, and I want the 98.3% broken out per task instead of averaged. The paper has the bar charts. Read those before you quote the headline.

## Sources

- [arXiv:2609.04355 — VLA-Precision](https://arxiv.org/abs/2609.04355)
- [VLA-Precision project page](https://vla-precision.github.io/)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.04355)
