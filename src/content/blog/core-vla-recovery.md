---
title: "CoRe Recovers a Frozen VLA by Imagining the Next Move"
description: "A training-free recovery loop plans on synthesized cameras, then moves only the objects it has to. Real xArm6 success jumps as much as 85 points."
pubDate: 2026-08-18
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/core-vla-recovery-2.jpg"
readTime: "5 min read"
featured: false
draft: false
---

When a VLA gets shoved mid-task, most stacks either fine-tune on failure tapes or hand the mess to a second model. **CoRe** (Counterfactual Realignment), posted August 14, keeps the policy frozen and plans the recovery in its head.

It watches the action-expert suffix latent, flags an out-of-distribution stretch, then rolls the same policy forward from a recent clean state on **synthesized** RGB. No extra world model. Physical motion starts only after that imagined continuation looks safe.

<figure>
  <img src="/images/heroes/core-vla-recovery-2.jpg" alt="Real xArm6 pick, push, and place tasks used to test CoRe recovery" loading="lazy" />
  <figcaption>Physical xArm6 tasks. Source: Zhang et al., arXiv:2608.14822.</figcaption>
</figure>

## Detect, imagine, move less

Detection is a Mahalanobis score on the action head, calibrated on successful rollouts. Recovery anchors at the latest in-distribution frame that still keeps finished subgoals. From there CoRe synthesizes exo and ego views (voxel stores + forward-kinematics arm + inpainting), queries the frozen policy, and stops before contact.

A probe then asks which displaced objects actually matter. It restores the smallest subset whose imagined arm path stays close to a full-restore reference. The rest of the clutter stays put.

<figure>
  <img src="/images/heroes/core-vla-recovery.jpg" alt="CoRe pipeline from OOD trigger through virtual planning to physical handoff" loading="lazy" />
  <figcaption>Virtual planning, then a short physical rearrange. Source: Zhang et al., arXiv:2608.14822.</figcaption>
</figure>

## The numbers they report

On **LangSwitch** (xArm6 in ManiSkill; mid-episode instruction changes), CoRe lifts three backbones from **18.3–35.5%** to **82.6–92.7%** average success. No false triggers in 1,500 unswitched runs.

On **LIBERO-Long** with injected arm collisions, grasp drops, and object shoves, CoRe reaches **69.8–88.2%** versus **12.8–43.5%** for the bare policies.

On a real **xArm6** with two RealSense D435i cameras and a π0.5 backbone (100 demos per skill), 20 paired trials per condition:

| Condition | Bare | +CoRe |
| --------- | ---- | ----- |
| Re-grounding (pick→pick) | 6/20 | 18/20 |
| Re-skilling (pick→push) | 1/20 | 18/20 |
| Conflict (place→push) | 1/20 | 18/20 |
| Arm collision | 9/20 | 17/20 |
| Scene rearrangement | 4/20 | 19/20 |

Those re-skill and conflict jumps are **+85** points, matching the abstract. Median virtual planning is **9.7 s**. Median physical pick-and-place to test a hypothesis would have been **20.5 s** of arm time. Scene-rearrangement recoveries restore **1.15 of 2.77** above-tolerance objects and leave **58%** untouched. The abstract’s **42.2%** drop in physical restorations is the same idea measured across the paper’s suite.

<figure>
  <img src="/images/heroes/core-vla-recovery-3.jpg" alt="LangSwitch task families: re-grounding, re-skilling, and conflict" loading="lazy" />
  <figcaption>Language-switch families in simulation. Source: Zhang et al., arXiv:2608.14822.</figcaption>
</figure>

Synthesized rollouts stay within the pre-contact margins they use for decisions (median TCP divergence 0.36–3.28 cm vs ground-truth renders). The method still assumes RGB-D, object tracks, and a planner that can pick the objects it decides to move.

## A Human's Take

I have watched too many “recovery” papers collect a new failure dataset and call it autonomy. Planning the retry on fake cameras, then moving only the cup that actually blocks the next motion, is closer to how a tired human cleans up a knock.

It is still a tabletop with tracked objects. The interesting bet is whether that suffix latent stays a decent smoke alarm once the scene is a kitchen, not four cubes and two plates.

## Sources

- [arXiv:2608.14822 — Imagining Recovery: Inference-Time Counterfactual Realignment](https://arxiv.org/abs/2608.14822)
- [arXiv HTML — full paper, tables, and real-robot figure](https://arxiv.org/html/2608.14822v1)
