---
title: "One Sharpa Wave Hand Caps a Bottle, Syringe, and Marker"
description: "HKU and HKUST Guangzhou train fixture-free in-hand assembly in sim; a 22-DoF hand mates two parts with a single camera, 18/20 on bottle and syringe."
pubDate: 2026-09-10
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/in-hand-assembly-sharpa.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most robot assembly still looks like a vise plus a gripper. **Assembling Two Parts in One Hand**, a CoRL 2026 paper from the University of Hong Kong, HKUST Guangzhou, and ETH Zurich, throws the fixture out. A single **22-DoF Sharpa Wave** on a Franka Research 3 mates two rigid parts with no second arm.

The same reinforcement-learning recipe covers three plug-in tasks: **Bottle**, **Syringe**, and **Marker**. Policies train only in Isaac Sim and transfer zero-shot to hardware, using one RealSense **D435** and **FoundationPose**.

<figure>
  <img src="/images/heroes/in-hand-assembly-sharpa.jpg" alt="Sharpa Wave hand assembling a bottle cap, syringe plunger, and marker cap" loading="lazy" />
  <figcaption>Thumb and index move the held part; the other fingers cage the base. Source: in-hand assembly paper, Figure 1.</figcaption>
</figure>

## Finger jobs, not a blob grasp

The observation is a **34-D** vector: each object's centroid and symmetry axis, plus **22** joint angles. Actions are **0.1 rad** joint-target deltas at **15 Hz**. Thumb and index pinch the moving part. Middle, ring, and little cage the other. A single human snapshot seeds initialization; objects then settle under a short random wrench so training does not memorize one pose.

<figure>
  <img src="/images/heroes/in-hand-assembly-sharpa-2.jpg" alt="Bottle, syringe, and marker geometries with reference and goal points for the assembly reward" loading="lazy" />
  <figcaption>Task geometries and the relative-pose goal. Source: in-hand assembly paper, Figure 2.</figcaption>
</figure>

Closed-loop control versus open-loop replay of successful sim trajectories, **20** consecutive real trials:

| Task | Closed-loop alignment | Closed-loop assembly | Open-loop assembly |
| --- | --- | --- | --- |
| Bottle | 18/20 | 15/20 | 2/20 |
| Syringe | 18/20 | 17/20 | 1/20 |
| Marker | 16/20 | 16/20 | 0/20 |

Alignment means insertion deeper than **1 cm**. Assembly means the final depth is within **1 cm** of the target. Without feedback, early sim-to-real drift kills the mate.

<figure>
  <img src="/images/heroes/in-hand-assembly-sharpa-3.jpg" alt="Hand recovering a knocked bottle cap and a pulled syringe plunger" loading="lazy" />
  <figcaption>Index finger re-aligns a knocked cap; the hand reseats a pulled plunger. Source: in-hand assembly paper, Figure 7.</figcaption>
</figure>

Push the cap off axis and the index finger puts it back. Pull the syringe plunger against the grasp and the hand reseats it. A policy trained across wrist tilts still works when gravity changes direction, until pinch contact goes near-horizontal. Rigid-body sim turns a pad grasp into two points, so some tilts never learn a stable pinch.

## Hands are not interchangeable

The same pipeline in simulation on the Syringe task is a morphology bench. **Sharpa** and **Wuji** (human-scale, high DoF, wide joint range) align and insert. **Allegro** (four large fingers) can line up in the plane but cannot drive insertion along z without a fifth finger. **XHand** (fewer abduction joints) fails both alignment and insertion.

Limits the authors flag: both objects start already in the hand, sometimes with a human holding them until the policy engages. Pickup is out of scope. Only plug-in geometries; threading and friction-fit wait on better contact sim.

## A Human's Take

Capping a marker with the hand that holds it is the kind of boring dexterity factories actually pay for, and almost nobody demos it because two arms plus a fixture is easier to score. The open-loop collapse is the receipt: this is closed-loop contact, not a replayed flourish. I will care more when the hand picks the parts off the table itself. Until then, treat the morphology table as the real product: if your five-finger demo cannot insert a syringe plunger, it is not a hand, it is a fancy gripper.

## Sources

- [arXiv:2609.10137 — Assembling Two Parts in One Hand](https://arxiv.org/abs/2609.10137)
- [Project page](https://ltbgbird.github.io/in-hand-assembly-page/)
- [Paper HTML](https://arxiv.org/html/2609.10137v1)
