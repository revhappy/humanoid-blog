---
title: "KC-SVSDF Plans Mobile Manipulators With Weird Payloads"
description: "HKU researchers propose kinematically coupled swept-volume planning so wheeled arms can haul large non-convex loads through clutter in real time."
pubDate: 2026-08-10
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/kc-svsdf-payload-motion-planning.png"
readTime: "4 min read"
featured: false
draft: false
---

Moving a water bottle is a solved demo. Moving a **T-shaped carbon-fiber spar** or a long rectangular panel through a forest of poles is where sphere-approximated planners give up.

**arXiv:2608.07005** (submitted Aug 7, 2026) from the University of Hong Kong team led with equal contribution by Yisheng Li and Longji Yin (corresponding: Fu Zhang) presents a real-time whole-body planner for mobile manipulators carrying **arbitrarily shaped payloads**, built around a **Kinematically-Coupled Swept-Volume SDF (KC-SVSDF)**.

<figure>
  <img src="/images/heroes/kc-svsdf-payload-motion-planning.png" alt="Tunnel and forest planning comparison against TOPAY and REMANI baselines" loading="lazy" />
  <figcaption>Tunnel and forest comparisons: sphere-based baselines collide with the payload; KC-SVSDF keeps a whole-body swept envelope clear. Source: arXiv:2608.07005.</figcaption>
</figure>

## The failure mode they fix

Standard optimizers wrap robot and payload in bounding spheres and query an ESDF. That wastes free space and rejects valid paths when the load is large and non-convex. Single-body swept-volume SDFs fix geometry for one rigid body, but on a serial arm each link’s “escape” gradient can shove an upstream link into a new collision and stall the solver.

KC-SVSDF walks the kinematic chain and forces escape directions to stay consistent with upstream joints before accepting a per-link distance.

## Pipeline

Three stages:

1. **Front-end** — chain-decomposed bit-packed kernels for true geometry; Hybrid A* base search + multilayer constrained RRT*-Connect for the arm (whole-body RRT* fallback).
2. **Mid-end** — cheap smooth, kinematically feasible trajectory that can run as-is if still collision-free.
3. **Back-end** — full optimization with KC-SVSDF safety when the mid-end needs repair.

Hardware in the paper: **Agilex Scout Mini** base, **Agilex Piper** 6-DoF arm, Livox MID-360 + FAST-LIO2, ROG-Map occupancy, running on an Intel NUC (i7-1360P, 32 GB).

<figure>
  <img src="/images/heroes/kc-svsdf-payload-motion-planning-2.png" alt="Mobile manipulator carrying elongated payload through narrow corridor with beams" loading="lazy" />
  <figcaption>Real-world run: elongated rectangular payload through a narrow corridor with inclined beams. Source: arXiv:2608.07005.</figcaption>
</figure>

## Numbers from the paper

Simulation (100 trials per scene). Baselines in Table III:

- **Tunnel:** TOPAY **23%** success / **7878 ms** total; REMANI **29%** / **11225 ms**. Proposed method: **4162 ms** total, and the paper reports the **highest success rate** in the comparison (exact percentage not parsed cleanly from the HTML table layout).
- **Forest:** TOPAY **25%** / **23178 ms**; REMANI **17%** / **31440 ms**. Proposed method: **13613 ms** total, again **highest success** per authors.

Ablation on bridge clearance (20 trials per height): with KC-SVSDF, success holds at **80%** at **0.8 m** bridge height; independent per-link SVSDF drops to **0%** at that height under the same time budgets (front-end ≤80 ms, optimization ≤300 ms).

Authors state code will be publicly released.

## A Human's Take

If your “mobile manipulator” only plans as if the payload is a tennis ball, you do not have a logistics robot—you have a demo. Coupling collision gradients through the arm is the unglamorous fix that decides whether a door panel fits a 90 cm gap. I’ll watch the open-source release and whether mid-end shortcuts still hold when the map is messier than wooden poles.

## Sources

- [arXiv:2608.07005 — Real-time Whole-Body Motion Planning… via Kinematically-Coupled SVSDF](https://arxiv.org/abs/2608.07005)
- [arXiv HTML full text](https://arxiv.org/html/2608.07005v1)
