---
title: "WISE Only Imagines When the Robot Is About to Touch Something"
description: "Tsinghua and BAAI schedule world-model rollouts at contact-heavy states. On a Galaxea R1 Lite, π0 success rises 17.5 points."
pubDate: 2026-09-04
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/wise-vla-imagination.png"
readTime: "3 min read"
featured: false
draft: false
---

World models let a VLA try a move in its head before it chews the table. The expensive part is running that imagination on every timestep. **Chenhao Zhang**, **Long Zeng**, and colleagues at Tsinghua and BAAI argue you should only pay for it when the robot is about to make contact.

**WISE** (World-model-guided Imagination Scheduling for Efficient Post-training) landed on arXiv on **3 September**. It post-trains **π0** and **π0.5** by sampling candidate action chunks at interaction-heavy states, rolling a frozen Open-Sora-style world model a bounded horizon, scoring those futures, and updating the policy with group-relative advantages. Imagined frames are for scoring. The gradient still sits on the real observation.

<figure>
  <img src="/images/heroes/wise-vla-imagination.png" alt="Galaxea R1 Lite sequences for pick-and-place, cube stacking, and opening then closing a lid" loading="lazy" />
  <figcaption>Real tasks on Galaxea R1 Lite: pick-and-place, two-cube stack, open-and-close. Source: Zhang et al., arXiv:2609.03681.</figcaption>
</figure>

## Less GPU, higher success

On five MimicGen tasks (Stack, Coffee, Square, Threading, Mug Cleanup):

- **π0**: 49.7% → **59.5%** average (+9.8 points)
- **π0.5**: 52.3% → **60.2%** (+7.9 points)

WISE beats π0 + DPO (53.8%) on that suite. An ablation that always imagines uses **11.45** GPU hours and 60.4% on a three-task slice. WISE hits **68.3%** on the same slice in **2.61** GPU hours, about **80%** fewer world-model calls and **77%** less GPU time than full imagination.

A DINOv2 head predicts an interaction-relevance score from wrist and third-person views. Imagination fires only when that score clears a threshold. Uniform and random scheduling at the same budget both lose.

## The robot in the room

They put the same recipe on a **Galaxea R1 Lite** for pick-and-place, two-cube stacking, open, and open-and-close. Standard setting, average of four tasks:

- π0: **60.0%** → **77.5%** with WISE (+17.5 points)
- π0.5: **61.3%** → **77.5%** (+16.3)

Under a generalization split (geometry, lighting, distractors, paraphrased language) the lift is larger: π0 **42.5% → 68.8%**, π0.5 **50.0% → 71.3%**.

<figure>
  <img src="/images/heroes/wise-vla-imagination-3.png" alt="Four generalization setups: raised basket, dim lighting, extra cubes, and reworded pick-and-place prompts" loading="lazy" />
  <figcaption>Generalization knobs used in the real-world eval. Source: Zhang et al., arXiv:2609.03681.</figcaption>
</figure>

Failure stills in the paper show the baseline missing a raised basket or a shifted cube; WISE still finishes the put.

<figure>
  <img src="/images/heroes/wise-vla-imagination-4.png" alt="Failure cases without WISE versus successful grasps with WISE on height, position, and handle localization" loading="lazy" />
  <figcaption>Height shift, cube offset, handle localization. Source: Zhang et al., arXiv:2609.03681.</figcaption>
</figure>

Limits they list: fixed imagination horizon, coarse stage labels for the scheduler, and a lab robot rather than a long-horizon mobile humanoid.

## A Human's Take

Imagining every frame is a tax. Scheduling imagination for the grasp and the lid is closer to how a person actually thinks: walk over on autopilot, then pay attention. The 80% compute cut is the number that makes this usable. I still want a public checkpoint, because “we post-trained π0 in our lab” is easy to overfit to four table tasks. If the scheduler holds up on a messier kitchen, this is the right way to spend world-model FLOPs.

## Sources

- [arXiv — WISE: World-model-guided Imagination Scheduling (2609.03681)](https://arxiv.org/abs/2609.03681)
- [arXiv HTML — full paper with R1 Lite figures](https://arxiv.org/html/2609.03681v1)
