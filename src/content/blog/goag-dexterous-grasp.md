---
title: "GOAG Learns the Hand First, Then Looks at the Object"
description: "CEA-List’s IROS 2026 grasp planner trains only on gripper geometry, then hits 86.93% on MultiDex and 11 real YCB objects."
pubDate: 2026-08-21
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/goag-dexterous-grasp.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most dexterous grasp networks memorize objects. **GOAG**, from Université Paris-Saclay / CEA-List and École Centrale de Lyon, does the opposite: it trains only on the gripper, then meets the object at inference.

The paper landed on arXiv on 20 August 2026 for IROS 2026. The hook is geometric and a little smug: at a contact patch, the gripper surface and the object surface are the same shape. If you learn the gripper’s feasible contact manifold, you can drop an unseen object into that manifold later.

<figure>
  <img src="/images/heroes/goag-dexterous-grasp.jpg" alt="Contact maps on a can from object and gripper perspectives" loading="lazy" />
  <figcaption>GOAG’s teaser: contact zones match from the object side and the hand side. Source: CEA-List project page.</figcaption>
</figure>

## Train the fingers, not the mug

The team samples **10,000** valid joint configurations, maps them to six common grasp types from a human taxonomy (the types that cover most shop-floor and household time in the cited studies), and samples contacts only inside those pads. That yields **3 million** labeled gripper clouds.

Generation took about **1 GPU-hour** on an RTX 4090. They contrast that with **1,400 GPU-hours** reported for an object-grasp database in prior work.

A CVAE learns the contact distribution in a gripper-centric Basis Point Set. A PointNet++ “links mapper” tags which phalanx should hit which point. At test time the object is warped into the gripper frame, contacts are sampled from the latent prior, a force-closure check can reject a bad draw (up to 20 resamples), and an optimizer solves joints with penetration penalties.

## MultiDex and a real Allegro

On MultiDex, with Barrett, Allegro, and Shadow Hand, GOAG’s average success is **86.93%**. Per hand, with force-closure in the loop: **87.40%** Barrett, **93.20%** Allegro, **77.90%** Shadow Hand. Those beat object-trained baselines in the paper’s table even though GOAG never saw those objects in training.

Across five datasets and **3,438** objects with a Shadow Hand trained once, GOAG averages **53.97%**. DGA, retrained per dataset, sits at **58.48%**. GOAG is second overall on that protocol.

On the bench, an Allegro Left on a 7-DoF arm grasped **11** YCB objects. The photos match cans, a bowl, and the usual kitchen clutter.

<figure>
  <img src="/images/heroes/goag-dexterous-grasp-3.jpg" alt="Allegro hand grasping YCB cans and a bowl next to matching simulations" loading="lazy" />
  <figcaption>Real Allegro grasps (top) and the corresponding simulated contacts (bottom). Source: GOAG paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/goag-dexterous-grasp-4.jpg" alt="Allegro hand above a table of YCB household objects" loading="lazy" />
  <figcaption>The real-robot setup: Allegro over YCB objects used in the transfer tests. Source: GOAG paper.</figcaption>
</figure>

Code is on GitHub under CEA-LIST/GOAG. Videos live on the project site.

## A Human's Take

I am here for a planner that does not need a new object dataset every time you change the SKU. The Allegro photos are the receipt. The remaining bet is whether “sample a pose on the convex hull” still works when the part is bigger than the hand’s workspace.

## Sources

- [arXiv:2608.19759 — GOAG](https://arxiv.org/abs/2608.19759)
- [Project page — teaser, method, real-hand video](https://cea-list.github.io/goagweb/)
- [arXiv HTML — tables and real-robot figures](https://arxiv.org/html/2608.19759v1)
- [GitHub — CEA-LIST/GOAG](https://github.com/CEA-LIST/GOAG)
