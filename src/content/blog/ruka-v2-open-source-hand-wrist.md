---
title: "Ruka-v2 Adds Wrist and Finger Abduction to Open-Source Hands"
description: "NYU’s Ruka-v2 open-sources a tendon-driven hand with a 2-DoF parallel wrist and finger abduction, under $2,000 materials, with faster teleop than Ruka v1."
pubDate: 2026-07-31
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/ruka-v2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Open-source hands keep closing the gap on “you need a six-figure end effector to do research.” NYU’s group is on version two of that thesis.

**Ruka-v2**, presented via the [project site](https://ruka-hand-v2.github.io/) and [arXiv:2603.26660](https://arxiv.org/abs/2603.26660) (March 2026), is a fully open-sourced tendon-driven humanoid hand. The headline upgrades over the original Ruka: a **decoupled 2-DoF parallel wrist** (flexion/extension and radial/ulnar deviation) and **controlled finger abduction/adduction**.

<figure>
  <img src="/images/heroes/ruka-v2.jpg" alt="Ruka-v2 CAD diagrams showing degrees of freedom, adduction, and wrist movement" loading="lazy" />
  <figcaption>Ruka-v2 hardware overview: DoF map, abduction, and wrist motion. Source: ruka-hand-v2.github.io.</figcaption>
</figure>

## Specs and results from the paper

- **Original Ruka**: **11 DoF**, buildable for under **$1,300**
- **Ruka-v2**: **16 DoF** across fingers/thumb plus the **2-DoF** wrist; major structure **3D printed**; total material cost under **$2,000**; actuators parked proximally in the forearm
- **User study vs Ruka**: **51.3%** reduction in teleop completion time and **21.2%** higher success rate on the reported task set
- **Applications shown**: single-arm and bimanual teleop across **13** dexterous tasks (pen pickup, writing, charger plug-in, oven open, bread handling, declutter, wipe), plus autonomous visual BC policies on **3** tasks with BAKU
- **Payload table** (static holds): e.g. non-thumb DIP–PIP **1,200 g** for 15 s; wrist supination/pronation **1,215 g** for 20 s; thumb **835 g** for 20 s

<figure>
  <img src="/images/heroes/ruka-v2-3.jpg" alt="Ruka-v2 hand holding a weighted shopping bag by the handles during payload test" loading="lazy" />
  <figcaption>Payload evaluation: Ruka-v2 holding a loaded bag. Source: ruka-hand-v2.github.io.</figcaption>
</figure>

The wrist design uses intersecting rotation axes at a passive spherical ball joint so palm translation stays small during rotation; finger tendons route near the wrist center to limit length change when the wrist moves. Abduction uses independent knuckle modules with spring return; the middle finger stays fixed as a geometric reference.

Everything is meant to be rebuildable: 3D print files, assembly docs, controller software, CAD, and video are linked from the project page (GitHub + Onshape + GitBook).

## A Human's Take

Wrist and abduction are the boring DoFs until you try to open a cabinet or pinch a card without them. The 51% teleop speed-up is the number I bookmark — not because teleop is the product, but because operator time is where open hands either get used or sit on a shelf. Next receipt: multi-lab builds hitting those payload numbers without hero tuning.

## Sources

- [Ruka-v2 project page](https://ruka-hand-v2.github.io/)
- [arXiv:2603.26660 — Ruka-v2 tendon-driven open-source hand](https://arxiv.org/abs/2603.26660)
