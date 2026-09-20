---
title: "CSIRO Evolves Soft Fingers as Graphs, Then Prints the Pareto Set"
description: "A graph-based gripper search over four grasp cases yields 89 non-dominated designs. Two printed in Elastic 50A match sim on a coral pull test."
pubDate: 2026-09-20
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/graph-soft-grippers.jpg"
readTime: "4 min read"
featured: false
draft: false
---

CSIRO Robotics published a way to grow soft gripper fingers as graphs, score them in nonlinear FEM, and keep a diverse Pareto set instead of one “best” finger.

André Farinha, Ge Shi, Harry Bowman, Brendan Tidd, David Howard, and Josh Pinskier posted arXiv **2609.20087** on **17 September 2026**. The hardware check is small and specific: two designs from the four-objective front, printed in **Formlabs Elastic 50A**, on a parallel gripper driven by a Dynamixel **XM430-W210**.

<figure>
  <img src="/images/heroes/graph-soft-grippers.jpg" alt="Pull-force plots and photos of a printed soft finger grasping a coral-like object, overlaid with a yellow mesh" loading="lazy" />
  <figcaption>Sim versus experiment on coral, sphere, and pin, plus a printed finger on coral. Source: arXiv:2609.20087, Fig. 8.</figcaption>
</figure>

## Graphs, not voxels

Each design is a set of 2D nodes. Edges appear when a weighted distance falls under a threshold; each edge becomes a beam of set thickness. That geometry goes into a Neo-Hookean FEM with Incremental Potential Contact, implicit Newmark time, and about **5,000** tetrahedra per design.

The search is Pareto Dominated Novelty Search: a multi-objective twist on Dominated Novelty Search. Population **N = 300**, **200** generations, a 10-D behavior descriptor.

Four grasp cases sit on an ALOHA-style parallel finger: large rigid, large soft, small soft, small rigid. Soft objects use one-third the gripper’s Young’s modulus. Pinch versus power is object size and contact height, not a second controller.

## What the front looks like

The four-objective run kept **89** non-dominated designs. The first two principal components of objective space hold **81.3%** of the variance. PC1 (**57.8%**) splits the small-rigid case from the rest: soft fingers that live on contact area struggle to load a tiny hard object.

Specialists look different. Large-object winners grow longer moment arms. Small-object winners shorten the arm for tip travel. Soft-small designs grow hooks; large-rigid designs grow thin, compliant contact strips.

Single-objective optima win their training case and fall off when the object moves ±**10 mm**. Four-objective samples stay competitive off-diagonal and, on two unseen shapes (a concave column and a coral), the best individuals often come from the random Pareto subset, not the specialist elites.

<figure>
  <img src="/images/heroes/graph-soft-grippers-2.jpg" alt="Three topology-optimization benchmarks recovered as graph-based structures" loading="lazy" />
  <figcaption>Graph encoding recovering gripper, inverter, and MBB-beam topologies. Source: arXiv:2609.20087, Fig. 3.</figcaption>
</figure>

The print test used a Zemic **H3-C3-25KG-3B** load cell on pull-out. The paper calls the match qualitative: deformation and contact line up with sim, and pull-force magnitude is in the same band. It is not a 50-object warehouse trial.

## A Human's Take

I like a gripper paper that prints two fingers and pulls a coral instead of stopping at a heatmap. The useful claim is narrower than “general-purpose”: train on four contacts, and the mixed front transfers better than a greedy specialist. That is a design-process result. I still want a third printed finger on a fruit that was never in the FEM.

## Sources

- [arXiv:2609.20087 — Graph-Based Design of Soft Grippers with Multi-Objective Quality-Diversity Optimisation](https://arxiv.org/abs/2609.20087)
- [arXiv HTML — full paper with hardware Fig. 8](https://arxiv.org/html/2609.20087v1)
