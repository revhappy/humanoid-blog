---
title: "Humanoid VLAs Pick a Hand From the Starting Pose"
description: "Jung and Park measure a policy-induced hand prior across 17 initial arm poses and show more pose coverage in training cuts the bias."
pubDate: 2026-08-13
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/policy-hand-priors-humanoid.jpg"
readTime: "3 min read"
featured: false
draft: false
---

A humanoid with two arms should grab the apple with whichever hand is closer. Chaeyeon Jung and Juyoun Park show that several vision-language-action policies do not. They pick a hand from the **starting pose**, and that early preference can bury a task that the same policy finishes from a different stance. The paper posted **August 12**.

<figure>
  <img src="/images/heroes/policy-hand-priors-humanoid.jpg" alt="Ten overhead views of a dual-arm humanoid reaching for a red apple from different initial arm poses" loading="lazy" />
  <figcaption>Seventeen initial configurations, eight of them shown here, change which hand moves first. Source: Jung and Park, arXiv:2608.11769.</figcaption>
</figure>

## A prior you can score

The authors call that early, pose-conditioned preference a **policy-induced hand prior**. They measure it with **HandPriorScore**, residual hand bias, and target responsiveness, then run multiple VLA policies across **17** initial arm configurations.

The same pose produces very different success rates from policy to policy. One policy also swings hard across poses. Some stances suppress an asymmetric hand preference. Others induce it. Wrist-camera observations change both hand choice and success.

The heatmap in the paper is the receipt. Rows are initial poses (zero, pose01–08, synthetic unseen, teleop default, left/right sim, left/right real). Columns are policies A1 through E. Mean success across that grid is **60%**, but single cells run from the teens to the mid-90s.

<figure>
  <img src="/images/heroes/policy-hand-priors-humanoid-2.jpg" alt="Heatmaps of success rate by initial pose and policy, plus HandPriorScore and target-responsiveness maps" loading="lazy" />
  <figcaption>Success is pose-and-policy specific. Source: Jung and Park, arXiv:2608.11769.</figcaption>
</figure>

## What actually helps

Two data interventions move the needle:

- **Expand initial-pose coverage** in the training set. Robustness across held-out stances goes up.
- **Targeted augmentation** around a low-performing configuration raises that pose’s success rate.

Comparisons across training mixes say the target simulation task needs enough exposure. Real or auxiliary data only helps when pose coverage, the simulation ratio, and the available cameras line up. The authors treat a localized initial arm configuration as a **causal handle** on hand-selection, not just a correlation.

alphaXiv hosts the same abstract and PDF as the arXiv posting.

## A Human's Take

This is a small, useful complaint about how we score humanoid VLAs. A single success rate can hide a robot that only works if you park the arms in the dataset’s favorite pose. I want labs to publish the pose grid, not just the mean. And I want the next training mix to treat “which hand?” as a first-class label, not something the policy improvises from wrist pixels.

## Sources

- [arXiv:2608.11769 — Policy-Induced Hand Priors in Humanoid Dual-Arm Manipulation](https://arxiv.org/abs/2608.11769)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.11769v1)
- [alphaXiv — Policy-Induced Hand Priors](https://www.alphaxiv.org/abs/2608.11769)
