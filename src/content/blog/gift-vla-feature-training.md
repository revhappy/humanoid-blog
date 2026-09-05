---
title: "GIFT Trains Robot Policies to Keep Geometry, Affordances, and Goals"
description: "CASIA, Tsinghua, and NUS post GIFT, a feature-training method that lifts LIBERO-Plus and real-arm success without changing how actions are decoded."
pubDate: 2026-09-05
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/gift-vla-feature-training.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A team from the Chinese Academy of Sciences, Tsinghua, Fudan, and the National University of Singapore posted **GIFT** on **3 September** ([arXiv:2609.04193](https://arxiv.org/abs/2609.04193)): a training recipe that forces a robot policy’s intermediate visual features to keep three control-relevant structures. Geometry for “can I move there,” affordance for “what to grab and how,” and goals for “which pixels actually matter for the instruction.”

The authors call the usual mismatch the **action-sufficiency gap**. Vision-language pretraining and world models give rich pictures. Those pictures still dump a lot of stuff a gripper does not need.

<figure>
  <img src="/images/heroes/gift-vla-feature-training.jpg" alt="UFACTORY xArm 7 fruit-shelf setup and dual ARX X5 lab bench with cameras labeled" loading="lazy" />
  <figcaption>Real evaluation rigs: single-arm UFACTORY xArm 7 and dual-arm ARX X5. Source: Zheng et al. / GIFT project page.</figcaption>
</figure>

## What they actually train

GIFT does not invent a new action head. It wraps three existing policy families and keeps each family’s action math:

- **GIFT-VLA**: a semantics-centered vision-language-action policy
- **GIFT-WAM-Fast**: a world-action model that dumps a current-frame action
- **GIFT-WAM-IDM**: an inverse-dynamics world-action model that imagines a trajectory first

The extra losses sit on intermediate tokens. Geometry is aligned to a frozen VGGT teacher. Affordance heads predict entity roles, object-centric end-effector poses, and gripper closure. A goal head reconstructs instruction-relevant image regions. At deployment the extra heads can stay off. The paper’s default is **no-injection**: the auxiliaries supervise features, they do not get concatenated into the action path.

On zero-shot **LIBERO-Plus** (seven distribution shifts, no fine-tune), the project page reports:

- GIFT-VLA **79.6%** vs StarVLA-OFT **75.0%** (+4.6 points)
- GIFT-WAM-Fast **72.6%** vs Fast-WAM **60.0%** (+12.6)
- GIFT-WAM-IDM **87.8%** vs Fast-WAM-IDM **82.6%** (+5.2)

On **RoboCasa**, the same three land at **61.4%**, **83.6%**, and **82.3%**. Articulated-object tasks are where the world-action variants move the most: +21.3 and +24.6 points over their Fast-WAM counterparts.

<figure>
  <img src="/images/heroes/gift-vla-feature-training-2.jpg" alt="Grid of dual-arm rollouts placing a cube in a cabinet and inserting test tubes, with and without visual perturbations" loading="lazy" />
  <figcaption>Dual-arm rollouts, including unseen lighting and tabletop clutter. Source: GIFT project page.</figcaption>
</figure>

## Hardware, not just sim

The real suite is four tasks, ten trials each, on the two platforms above: color-conditioned placement, layer-conditioned placement, cabinet work, and bimanual test-tube insertion. GIFT-WAM-IDM hits **87.5%** in the original settings and **67.5%** across perturbation conditions, against **52.5%** and **15.0%** for Fast-WAM-IDM (40 original trials, 40 perturbed). Level-2 perturbations include a rotating colored lamp, a swapped tabletop, and a 15–20° rack rotation.

Ablations on the project page say each single guidance signal helps, all three together win, and the no-injection variants beat the injection ones on both LIBERO-Plus and RoboCasa.

<figure>
  <img src="/images/heroes/gift-vla-feature-training-3.jpg" alt="Single-arm color- and layer-conditioned placement sequences under rotating lamp and changed tabletop" loading="lazy" />
  <figcaption>Single-arm placement under lighting and background shifts that were not in training. Source: GIFT project page.</figcaption>
</figure>

## A Human's Take

I like that they left the action decoder alone. If your VLA already works, the useful question is whether the features it sees are the ones that decide a grasp, not whether you can stack another transformer on top. The real-arm gap under perturbation is the number I would take into a lab meeting. Eighty-seven percent on a clean table is nice. Sixty-seven percent when someone spins a lamp and rotates the rack is closer to a shift.

## Sources

- [arXiv:2609.04193 — GIFT abstract](https://arxiv.org/abs/2609.04193)
- [GIFT project page — numbers, rigs, and real-world tables](https://openphoenix-team.github.io/GIFT-pages/)
- [arXiv HTML — full paper](https://arxiv.org/html/2609.04193v1)
