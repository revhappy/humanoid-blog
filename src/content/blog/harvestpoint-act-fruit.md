---
title: "HarvestPoint-ACT Picks the Orange You Pointed At"
description: "A Fujian–Osaka team conditions ACT on a metric grasp point. 88% success on a citrus mock-up; RGB-only ACT, Diffusion Policy, and SmolVLA grasp none."
pubDate: 2026-08-20
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/harvestpoint-act-fruit.jpg"
readTime: "4 min read"
featured: false
draft: false
---

End-to-end picking policies keep guessing two things: which fruit, and where to close. **HarvestPoint-ACT** writes both down and feeds them to ACT as an eight-number state.

The paper (arXiv:2608.18446) is from **Fujian Agriculture and Forestry University**, Shanghai University, and the University of Osaka, submitted to ROBIO 2026. On an artificial citrus tree, it reaches **88%** grasp success. Under the heaviest occlusion bin, **75%**.

<figure>
  <img src="/images/heroes/harvestpoint-act-fruit.jpg" alt="Custom manipulator, artificial citrus tree, and a cardboard collection bin of oranges" loading="lazy" />
  <figcaption>Lab mock-up: magnet-held oranges, wrist RealSense D405, custom 6-DoF arm. Source: Hu et al., arXiv:2608.18446.</figcaption>
</figure>

## Tell the policy the point

A Mask R-CNN with a keypoint head, fine-tuned on **693** annotated frames from the demo videos, predicts a mask and a harvest point per fruit. The point is labeled by hand as the contact on the fruit body that misses the peduncle. They do not use the mask centroid.

A scheduler ranks fruit by an occlusion index (fraction of the mask boundary next to a nearer occluder) and travel distance, then redetects after every pick. The selected point becomes an 8-D token: 3-D location in the base frame, vector from the gripper, a validity flag, and confidence.

If the wrist camera loses the fruit, the last point is held and marked stale. After too many misses, the arm retracts and the scheduler starts over.

Training is **100** teleoperated single-fruit attempts on a leader arm of the same design. The policy is LeRobot ACT, queried at **12 Hz**, executing the first **50** of a **100**-step chunk.

<figure>
  <img src="/images/heroes/harvestpoint-act-fruit-2.jpg" alt="Diagram of which-fruit versus where-to-grasp, then Mask R-CNN into ACT" loading="lazy" />
  <figcaption>Scheduler plus harvest-point state, not a fourth image channel. Source: Hu et al., arXiv:2608.18446.</figcaption>
</figure>

## The baselines never close

On the same **25** attempts, **ACT (RGB only)**, **ACT + masks**, **Diffusion Policy**, and **SmolVLA** all reach the neighborhood (**76–84%** approach success) and then close in empty air. Grasp success: **0**. HarvestPoint-ACT: **92%** approach, **88%** grasp.

Occlusion, binned by that boundary index, goes **90 / 80 / 80 / 75%** success from open fruit to fully boxed-in. Cycle time roughly doubles, from about **12 s** to **29 s**. Failures that remain are leaf dragging and knocking a magnet-held orange off before the fingers shut.

<figure>
  <img src="/images/heroes/harvestpoint-act-fruit-3.jpg" alt="Wrist-camera views with occlusion index overlaid on fruit masks" loading="lazy" />
  <figcaption>Least-occluded first. Source: Hu et al., arXiv:2608.18446.</figcaption>
</figure>

This is a lab tree with artificial fruit. The authors say they picked oranges because color contrast makes segmentation easy, so the comparison is about the policy, not the detector. A crop that needs a stem cut would need a different gripper and a different point.

## A Human's Take

Giving ACT a metric target instead of hoping it infers depth from a wrist JPEG is the kind of boring fix that actually moves the needle. **88 versus 0** on the same 100 demos is not a subtle ablation.

Magnets and fake leaves still cheat the hard part: real fruit moves when you brush a branch. They say the orchard is next. That is the right next sentence.

## Sources

- [arXiv:2608.18446 — HarvestPoint-ACT](https://arxiv.org/abs/2608.18446)
- [arXiv HTML — paper and figures](https://arxiv.org/html/2608.18446v1)
