---
title: "PartialBiGrasp Guesses the Hidden Side of the Object Before Two Arms Close"
description: "PartialBiGrasp generates dual-arm grasps from partial point clouds instead of assuming a full object scan."
pubDate: 2026-08-23
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/partialbigrasp-1.png"
readTime: "4 min read"
featured: false
draft: false
---

Most two-arm grasp planners want the whole object as a point cloud. **PartialBiGrasp**, posted to arXiv on **August 19** by **Ayush Kaura, Vignesh Vembar, Md Faizal Karim, Keshab Patra, and K. Madhava Krishna**, starts from the messier thing you actually get: a partial view.

Large, heavy, or awkward objects often only have a few legal grasp patches, set by thickness, edges, and whether the gripper jaws fit. A full scan contains that geometry. A single depth camera usually does not. The hidden back side of a chair or a toolbox is exactly where a naive grasp wants to close.

<figure>
  <img src="/images/heroes/partialbigrasp-1.png" alt="Diagram showing a partial RGB-D view missing hidden geometry and producing bad dual-arm grasps" loading="lazy" />
  <figcaption>Teaser: partial views hide thickness and edges, so naive contacts fail. Source: arXiv:2608.19188.</figcaption>
</figure>

## Occupancy instead of a completed mesh

The method learns local geometry with **convolutional occupancy networks**, then reasons about graspability, collision-free contact, and thickness from that implicit field. It samples force-closure-compliant grasp pairs and runs a sampling-based refinement step to mop up the ambiguity left by missing geometry.

The authors evaluate with analytical force-closure scores, large-scale simulation, and real-robot runs on noisy partial clouds of **novel** objects. The paper does not put a single headline success percentage in the abstract, so I am not inventing one.

<figure>
  <img src="/images/heroes/partialbigrasp-4.jpg" alt="Real dual-arm lab setup with two white robot arms over a table of large objects" loading="lazy" />
  <figcaption>Real-robot setup used for the partial-view evaluations. Source: arXiv:2608.19188.</figcaption>
</figure>

The object set in the paper’s real-world figure is the kind of stuff that actually needs two hands: a blue plastic chair, a toolbox, a monitor, pans, a bucket, a water bottle. That is the point. A single Franka can pick a mug. Two arms on a chair is the dual-arm problem.

<figure>
  <img src="/images/heroes/partialbigrasp-3.jpg" alt="Overhead photo of a chair, toolbox, monitor, pans, bucket, and other large objects on a table" loading="lazy" />
  <figcaption>Real-world object set used in the evaluations. Source: arXiv:2608.19188.</figcaption>
</figure>

## A Human's Take

I like a paper that admits the camera cannot see the back of the chair. Completing a pretty mesh in simulation is a different sport from putting two grippers on a toolbox you only saw from one side. I want the real-robot table of wins and drops in a follow-up, with the same objects, lights left ugly.

## Sources

- [arXiv:2608.19188 — PartialBiGrasp](https://arxiv.org/abs/2608.19188)
- [arXiv HTML — PartialBiGrasp](https://arxiv.org/html/2608.19188v1)
