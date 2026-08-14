---
title: "NestDex Lets the Hand Policy Collect Its Own Demos"
description: "Sydney and Vanderbilt train inner finger skills, then an outer policy that drops the copilot at deploy."
pubDate: 2026-08-14
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/nestdex.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Dexterous teleop usually asks one person to drive the arm *and* every finger. **NestDex**, from the University of Sydney and Vanderbilt and posted **August 13**, splits that job. The operator moves the arm. A learned inner hand policy does the contact work. A one-DoF clutch advances or rewinds that skill.

At deploy time those inner policies go away. A separate outer visuomotor policy, trained on the assisted demonstrations, runs the arm and the hand by itself.

<figure>
  <img src="/images/heroes/nestdex.jpg" alt="NestDex dexterous hands using tongs, filing paper, and making toast" loading="lazy" />
  <figcaption>Outer-policy rollouts and copilot collection: tongs, dual-object picks, binder filing, toast. Source: NestDex paper.</figcaption>
</figure>

## Clutch, not a glove

A leader-follower desk is the hardware. Each leader has an arm and a clutch; each follower has an arm, a multi-finger hand, and a wrist camera. Leader joints map to the follower arm. The clutch gates a proprioceptive inner policy that adapts from recent joint history as contact changes.

A vision-language selector picks which inner skill is live for the current stage. The paper’s six tasks make the split obvious:

- **Tongs Transfer**: pull tongs, grab a wooden carrot, drop it in a pot
- **Bottle Disposal**: open a lid, toss a bottle
- **Dual-Object Transfer**: two number blocks in one go
- **Ingredient and Pot Transfer**: scallion into pot, then move the pot
- **Toast Preparation** (bimanual): tongs, toaster, button
- **Binder Filing** (bimanual): paper off a rack, punch, into a ring binder

Inner skills themselves come from multi-view human-hand videos retargeted with an AnyTeleop-style vector fit and a Huber penalty.

<figure>
  <img src="/images/heroes/nestdex-2.jpg" alt="NestDex system diagram of inner-policy collection and outer-policy training" loading="lazy" />
  <figcaption>Inner policies help collect complete-task demos; the outer policy does not keep them. Source: NestDex paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/nestdex-3.jpg" alt="Reusable inner hand policy rolling out on several objects" loading="lazy" />
  <figcaption>One inner skill producing coordinated configurations across objects. Source: NestDex paper.</figcaption>
</figure>

## Why a VAE only on the fingers

A **hand-action VAE (H-VAE)** compresses finger commands into the targets the outer policy clones. Arm commands stay in joint space. The authors’ point is that the high-DoF part is the hand; do not make the arm pay for that.

They report better demonstration reliability and efficiency on the six real tasks, and that the outer policies learn from those tapes. Video is on the project page.

## A Human's Take

This is the first teleop paper in a while that treats the operator as a scarce resource instead of a motion-capture suit. A clutch and a reusable pinch is how you scale data without hiring more glove-wearers. The thing I want next is a number I can argue with: how many complete toast runs per hour with the copilot versus without. If that gap is large, every dexterous lab should steal the clutch.

## Sources

- [arXiv:2608.13362 — NestDex](https://arxiv.org/abs/2608.13362)
- [NestDex HTML paper](https://arxiv.org/html/2608.13362v1)
- [NestDex project page](https://aus.bot/research/nestdex)
