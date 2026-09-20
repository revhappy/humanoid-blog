---
title: "FlipToSee Flips a Snack Box So the Camera Can See the Barcode"
description: "KAUST’s placement prior predicts stable support normals from one point cloud. First-proposal success hits 98.4% in-distribution and 90% on YCB objects."
pubDate: 2026-09-20
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/fliptosee.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A robot looking down at a snack tin cannot see the barcode on the bottom. **Chang Shu**, **Sushil Samuel Dinesh**, and **Shinkyu Park** at KAUST posted **FlipToSee** ([arXiv:2609.20078](https://arxiv.org/abs/2609.20078)) on **17 September 2026**: guess the next stable face from a single-view point cloud, then regrasp.

They do not predict a full 6-DoF pose. Translation and yaw are the planner’s problem. Stability is a **support normal on the sphere**.

<figure>
  <img src="/images/heroes/fliptosee.jpg" alt="Four panels: snack tin on a table, predicted flip, robot regrasping, barcode visible on the new face" loading="lazy" />
  <figcaption>One flip, barcode in view. Source: Shu et al., arXiv:2609.20078, Fig. 1.</figcaption>
</figure>

## A mixture on the sphere, then a rerank

A PointNet++ encoder feeds a **von Mises–Fisher mixture density network** (**14** components). Deterministic mode extraction keeps the **K=5** component means with the highest density scores. An auxiliary head, trained with candidate-aligned supervision, adds a robustness score so a skinny face does not outrank a fat one.

In PyBullet, objects are dropped from **1,000** random orientations. Modes cluster at **10°**. Evaluation averages four camera views per placement.

First-proposal success, joint ranking, candidate-aligned head:

- **98.4%** on in-distribution polycube blocks
- **95.3%** on held-out 10-voxel shapes
- **90.0%** zero-shot on **24** filtered **YCB** objects

A Gaussian mixture in ℝ³, then projected onto the sphere, trails the vMF model. Geometry heuristics either miss modes (RANSAC likes big planes) or rank poorly under occlusion (convex-hull landing probability).

<figure>
  <img src="/images/heroes/fliptosee-2.jpg" alt="Robot gripper flipping an L-shaped block through three orientations with accumulating point clouds" loading="lazy" />
  <figcaption>Two regrasps on an L-block, three registered clouds. Source: Shu et al., arXiv:2609.20078, Fig. 5.</figcaption>
</figure>

## A UR10e, a real L-block

Hardware: **Universal Robots UR10e**, **OnRobot RG6**, **Zivid 2**. The placement prior is used without fine-tuning on real clouds. **GraspGen-X** and **cuRoboV2** check grasp and motion. Two sequential flips on an L-shaped block expose faces the first view never saw. For that demo they used density ranking, not the robustness head, and picked among feasible proposals by hand to accumulate new surfaces.

The paper does not optimize for information gain. It proposes stable faces. A planner still has to reach them. Code is promised after review.

## A Human's Take

Flipping a Haribo tin to find a barcode is the right kind of small, mean robotics problem. Predicting a direction on a sphere instead of a 6-DoF soup is the part I would steal. The real-robot section is still a walkthrough, not a success table. Show me 50 unknown kitchen objects and I will get louder.

## Sources

- [arXiv:2609.20078 — FlipToSee](https://arxiv.org/abs/2609.20078)
- [arXiv HTML — YCB tables, UR10e demo, architecture](https://arxiv.org/html/2609.20078v1)
