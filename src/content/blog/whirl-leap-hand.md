---
title: "WHIRL Learns What a Human Would Avoid on a LEAP Hand"
description: "HKUST Guangzhou and IIT turn pedal takeovers into a risk head, hitting 96.7% on hard grasps and cutting operator steps 84%."
pubDate: 2026-09-10
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/whirl-leap-hand.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Human-in-the-loop RL usually treats a takeover as a one-off save. **WHIRL**, a CoRL 2026 paper from HKUST (Guangzhou), the Italian Institute of Technology, and Zhejiang University, trains a fourth world-model head to predict the *next* pedal press, then uses that probability to steer the actor away from those states.

Hardware is a **Franka FR3** plus a **16-DoF LEAP Hand**, a SpaceMouse, a Manus Quantum glove, and a foot pedal. The residual policy only corrects a frozen behavior-cloning prior. Hand residuals live in a low-dimensional synergy basis, not raw 16-D joint noise.

<figure>
  <img src="/images/heroes/whirl-leap-hand.jpg" alt="WHIRL teaser: LEAP Hand on a Franka, human-in-the-loop pedal, intervention-aware world model, and a six-step drawer sequence" loading="lazy" />
  <figcaption>Takeovers become a next-step risk signal. Source: WHIRL project page.</figcaption>
</figure>

## Four heads, one of them is the human

The latent world model predicts dynamics, reward, termination, *and* next-step intervention probability. Dynamics/reward/termination train the critic. The intervention head is **actor-side only**. The authors refuse to dump operator habits into the Bellman target.

Five real tasks, in-region pose randomization, one seed and one operator per cell (they say seed averaging is too expensive on this hardware):

- Pick Cube
- Pick LEGO
- Pick & Place
- Pull Drawer
- Pull Drawer + Place + Close (long horizon)

The ladder is behavior prior → ResFiT → residual RL (model-free HIL) → WHIRL. WHIRL beats the strongest residual-RL baseline by **15–30** percentage points on every task. Fisher’s exact is **p < 0.05** on the three pick tasks; drawer and long-horizon sit around **p ≈ 0.08**. The abstract’s headline grasp number is **96.7%** success on complex grasping.

Operator burden is the other axis. On Pull Drawer, the final rolling 5-episode step-weighted intervention fraction falls from **0.113** to **0.018**, an **84%** drop. Ablating actor-side intervention shaping (`α_i = 0`) or removing the world model delays that near-zero regime.

<figure>
  <img src="/images/heroes/whirl-leap-hand-3.jpg" alt="Five LEAP Hand tasks: pick cube, pick LEGO, pick and place, pull drawer, and long-horizon drawer-place-close" loading="lazy" />
  <figcaption>Task suite. Source: WHIRL paper, Figure 4.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/whirl-leap-hand-2.jpg" alt="WHIRL pipeline: residual policy plus intervention-aware world model with four prediction heads" loading="lazy" />
  <figcaption>Online residual RL and the four-head world model. Source: WHIRL project page.</figcaption>
</figure>

Limits: in-region only, one operator’s takeover threshold, no new objects. Recalibrate if the next human is more jumpy.

## A Human's Take

Using the pedal as a *forecast*, not a replay mask, is the idea I wish more HIL stacks stole. 84% fewer operator steps on a drawer pull is the kind of number that decides whether a grad student still has a wrist by Friday. One seed and one cautious operator is also the caveat. If the risk head just memorizes that person’s flinch, you have a clone of their anxiety, not a safety model.

## Sources

- [arXiv:2609.06009 — WHIRL](https://arxiv.org/abs/2609.06009)
- [WHIRL project page](https://whirl-dexterous.github.io/)
- [WHIRL paper HTML](https://arxiv.org/html/2609.06009v1)
