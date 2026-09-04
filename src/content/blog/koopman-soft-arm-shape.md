---
title: "A Soft Arm That Tracks Its Whole Shape, Not Just the Tip"
description: "Arizona State researchers run Koopman MPC on 3- and 5-segment cable-driven arms at 0.6 m/s, with 400 g tip load and a 7 N shove."
pubDate: 2026-09-04
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/koopman-soft-arm-shape.png"
readTime: "3 min read"
featured: false
draft: false
---

Most soft-arm papers steer the tip and let the body do whatever it wants. **Jiahe Wang**, **Jiefeng Sun**, and collaborators (posted **2 September** on arXiv, submitted to TRO) argue that is not enough once the arm has to snake through a hole. They close the loop on the **full backbone shape**.

The controller is Koopman MPC with a trick in the lifted state: they concatenate **global** coordinates (where the backbone sits in the room) with **local** coordinates (how each segment is bent in its own frame). Dense QP via OSQP runs at more than **300 Hz** on a **2.2 GHz** CPU.

<figure>
  <img src="/images/heroes/koopman-soft-arm-shape.png" alt="Cable-driven multi-segment soft arm with global and local observable overlays and several bent shapes" loading="lazy" />
  <figcaption>Combined global/local observables on a real multi-segment arm. Source: Wang et al., arXiv:2609.03175.</figcaption>
</figure>

## Hardware, not just a cartoon

Table I in the paper lists two physical robots: a **3-segment** arm **0.60 m** long and a **5-segment** arm **1.00 m** long. Simulation scales the same method to **10** independently actuated segments. Each segment is cable-driven (four cables, opposing pairs on one motor, so **two** independent inputs per segment).

On the metal, the authors claim:

- Real-time shape tracking on both the 3- and 5-segment arms
- Tip speeds up to **0.6 m/s**
- Tracking **without retraining** under distal payloads up to **400 g**
- Recovery from a **7 N** lateral disturbance
- A confined-space demo: the arm threads a wall hole, a tip camera finds a yellow target, then the body pulls back out

<figure>
  <img src="/images/heroes/koopman-soft-arm-shape-5.png" alt="Five-segment soft arm tracking six reference shapes under global, local, and combined controllers" loading="lazy" />
  <figcaption>Five-segment tracking: reference vs global-only vs local-only vs combined. Source: Wang et al., arXiv:2609.03175.</figcaption>
</figure>

Global-only lifting is the usual Koopman recipe. The paper’s comparison grid shows it drifting on the 5-segment body; combined observables stay on the reference curves. A static-repeatability panel in the same PDF prints an average global shape error of **2.35 mm²** across patterns.

<figure>
  <img src="/images/heroes/koopman-soft-arm-shape-6.png" alt="Time sequence of a five-segment soft arm reaching through a circular hole with a tip-camera view of a yellow target" loading="lazy" />
  <figcaption>Inspection-style reach through a hole; tip camera flags the target at t = 20 s. Source: Wang et al., arXiv:2609.03175.</figcaption>
</figure>

References are replayed from held-out motor sequences, not a planner. The authors say shape planning is out of scope. Intermediate backbone points made hardware control *worse* under noisy motion capture, so they only close the loop on segment-tip points.

## A Human's Take

Tip tracking is a vanity metric on a continuum arm. If the middle of the body hits the porthole, you failed even if the last plate is on the waypoint. Combining local bend with global pose is a small modeling choice that shows up as a robot that still holds shape after a 400 g can and a 7 N yank. I want to see the same controller on an arm that is not hanging from a beam in a motion-capture bay. Until then, this is the right objective: the whole snake, at 300 Hz, not the last vertebra.

## Sources

- [arXiv — Real-Time Shape Control of Multi-Segment Soft Robotic Arms Using Koopman Operators (2609.03175)](https://arxiv.org/abs/2609.03175)
- [arXiv HTML — full paper with hardware figures](https://arxiv.org/html/2609.03175v1)
