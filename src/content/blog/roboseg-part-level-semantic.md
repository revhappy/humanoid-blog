---
title: "RoboSeg Maps Handles and Spouts From One Wrist Camera"
description: "Online part-level reconstruction hits 83.4% mIoU and 21/24 task successes without CAD models."
pubDate: 2026-08-11
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/roboseg.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Grasping a watering-can **handle** is not the same problem as grasping its **spout**. Category labels and raw point clouds do not tell a robot which contact region matches a language task. Offline 3D part methods often assume a finished mesh first — which a tabletop arm does not have when it first sees the object.

**RoboSeg**, from Zhaochen Lan and Mengxiang Lin at Beihang University (arXiv:2608.09778, Aug 10, 2026), builds a **part-labeled map online** from a single eye-in-hand RGB-D camera, then indexes grasp proposals by those parts.

<figure>
  <img src="/images/heroes/roboseg.jpg" alt="RoboSeg online part mapping versus offline mesh part segmentation" loading="lazy" />
  <figcaption>Offline mesh pipelines vs RoboSeg’s online eye-in-hand scan. Source: arXiv:2608.09778.</figcaption>
</figure>

## Pipeline

Hardware is a **UR5** with an **Intel RealSense D435i** wrist camera. At start, **Qwen3-VL** looks at the first RGB frame and returns a short list of functional parts (for example, “watering can handle”). Scanning then runs two asynchronous threads:

- **Geometry:** high-rate RGB-D odometry and TSDF fusion  
- **Semantics:** keyframe **SAM3** masks for those part prompts, projected into voxels  

Voxel-level **temporal voting** (top-3 instance IDs per voxel) dampens label flicker. After the scan, **AnyGrasp** proposes 6-DoF candidates on the reconstructed cloud; each candidate is tagged with the dominant part under the gripper close region, and the task language filters to the requested part.

<figure>
  <img src="/images/heroes/roboseg-2.jpg" alt="RoboSeg three-module architecture diagram" loading="lazy" />
  <figcaption>VLM part discovery, asynchronous reconstruction, task-conditioned grasp selection. Source: arXiv:2608.09778.</figcaption>
</figure>

## Numbers

On manually labeled objects (Big Pot, Double Handle Pot, Watering Can, Kitchen Knife, Hammer), RoboSeg reports **83.4% mean part IoU**. In a **24-trial** physical pilot over eight object–task conditions (three repeats each), the executed grasp **contacted the requested part in 24/24 trials**. Combined physical lift + correct part succeeded in **21/24** trials; the three misses still touched the right part but failed the stable lift — pointing at grasp mechanics, not semantic routing. Unfiltered AnyGrasp top-1 matched the target part in only **4/8** conditions on recorded proposals, while semantic filtering selected a target-part candidate in **8/8**.

<figure>
  <img src="/images/heroes/roboseg-3.jpg" alt="Part-level qualitative comparison across pots, knife, and hammer" loading="lazy" />
  <figcaption>Functional parts on household tools: online RoboSeg vs offline baselines on clean geometry. Source: arXiv:2608.09778.</figcaption>
</figure>

## A Human's Take

Semantic indexing on top of an off-the-shelf grasp detector is the right layering. You keep AnyGrasp for geometry and use the part map as a filter — that is how I want factory cells to grow features without rewriting the whole stack. Twenty-four trials is a pilot, not a production yield study, and thin blades still hurt physical success. If they open the code with the VLM prompt and voting config, this becomes a useful default for “grasp the handle, not the blade” demos.

## Sources

- [arXiv:2608.09778 — RoboSeg: Online Part-Level Semantic Reconstruction for Robotic Manipulation via a Single Eye-in-Hand Camera](https://arxiv.org/abs/2608.09778)
- [arXiv HTML full text](https://arxiv.org/html/2608.09778v1)
