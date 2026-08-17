---
title: "FlatLab Teaches Arms to Pick Up Things That Have No Handle"
description: "Jilin’s Isaac Sim benchmark covers 100+ flat objects and three grasp strategies, then transfers to a Baxter."
pubDate: 2026-08-17
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/flatlab-flat-objects.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Books, boards, and towels lie there daring a parallel gripper to find a lip. A Jilin University group, with Peking, CAS, and Birmingham, built **FlatLab** so that problem has a shared sim and more than one trick.

The platform sits on **NVIDIA Isaac Sim 4.5.0**. The paper and project page list more than **100** physically simulated flat objects, **18** scenes in six room types, and two **7-DoF Franka** arms. Code is promised on the project site.

<figure>
  <img src="/images/heroes/flatlab-flat-objects.jpg" alt="FlatLab collage of laundry, warehouse, study, and kitchen scenes with dual Franka arms" loading="lazy" />
  <figcaption>FlatLab scenes and the dual-arm setup. Source: arXiv:2608.14049 / flatlab-web.github.io.</figcaption>
</figure>

## Three strategies, then primitives

No single pre-grasp covers the set. Edge-push fails on large or floppy things. Dual-arm lift wants thickness. So the framework first classifies the object, then runs primitives.

- **Strategy A**: slide to the table edge (thin, small: disks, pads)
- **Strategy B**: two-arm lift (thick, large: boxes, paintings)
- **Strategy C**: squeeze an edge into a fold (towels, fabric)

The **strategy generator** reads a point cloud, uses simulated material/scale transforms, and contrastive learning so same-strategy objects cluster even when they look different. The **execution module** then sequences touch, slide, and squeeze primitives from scene point clouds, with separate losses for position and quaternion geodesic error.

<figure>
  <img src="/images/heroes/flatlab-flat-objects-2.jpg" alt="Simulation rollouts of edge-push, dual-arm lift, and fabric squeeze grasps" loading="lazy" />
  <figcaption>Strategy-conditioned grasps in sim. Source: arXiv:2608.14049.</figcaption>
</figure>

## The scoreboard

**104** objects in **21** categories split into Train, Test α (unseen objects, known categories), and Test β (unseen categories). Strategy accuracy: **99.2% / 91.3% / 78.6%**. Grasp success, five random orientations each, object held aloft **two seconds**: **81.1% / 74.2% / 69.0%**.

They generated **1,390** object clouds for the classifier and **50** pose demos per object for execution. Single-strategy Slide and Lift baselines, plus Diffusion Policy, 3D Diffusion Policy, OpenVLA, π0, and π0.5, all land lower on the same protocol. The comparison table’s top baseline in the paper is **68.6%** on train against their **81.1%**.

On a real **Baxter** with a **RealSense D455** and **SAM** for tabletop masks, they report **83.6% / 80.0% / 80.0%** on the same three splits over **30+** household flats. The paper notes reality can be kinder than sim: real rigid friction holds, and real cloth actually wrinkles.

<figure>
  <img src="/images/heroes/flatlab-flat-objects-3.jpg" alt="Baxter dual-arm robot grasping real flat objects on a table" loading="lazy" />
  <figcaption>Baxter transfer. Source: arXiv:2608.14049.</figcaption>
</figure>

Accepted to **ICML 2026**. Limits they list: most work is still sim, scene clutter is untested, and they have not stuffed a giant VLA into the pipeline.

## A Human's Take

Picking a magazine off a table is the unglamorous cousin of humanoid laundry demos, and I am glad someone made a 100-object bench for it. Strategy first, primitives second is how you avoid teaching a diffusion policy to memorize one particular book. The Baxter numbers being *higher* than Isaac is a nice reminder that cloth in a warehouse renderer is still a little fake.

## Sources

- [arXiv:2608.14049 — FlatLab abstract](https://arxiv.org/abs/2608.14049)
- [FlatLab project page](https://flatlab-web.github.io/)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.14049v1)
---
