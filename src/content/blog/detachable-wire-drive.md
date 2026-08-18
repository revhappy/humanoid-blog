---
title: "Tokyo Lab Built Arms That Unplug From Their Motors"
description: "JSK’s IROS 2026 Detachable Wire Drive parks the motors in one base and lets arms and grippers click on through Vectran tendons."
pubDate: 2026-08-18
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/detachable-wire-drive.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Takahiro Hattori**, **Kento Kawaharazuka**, and **Kei Okada** at the University of Tokyo’s **JSK** lab have an IROS 2026 paper on a problem every reconfigurable robot hits: if every module carries its own motors, the pile gets heavy and expensive. Their answer is **Detachable Wire Drive**. Park the actuators in one base. Snap different arms onto the same tendons.

The project page puts the usual waste at **30–50%** of system weight and cost. The paper’s claim is simpler: one motor set, many shapes.

<figure>
  <img src="/images/heroes/detachable-wire-drive.jpg" alt="Detachable Wire Drive base with interchangeable arms and grippers" loading="lazy" />
  <figcaption>One motor base, two arms, two grippers, and the Wire Detach Units that join them. Source: Hattori et al., project page / arXiv:2608.15461.</figcaption>
</figure>

## A coupler for tendons, not just a latch

The **Wire Detach Unit** lives in a sector-shaped shell: winding pulley, alignment pulley, and convex-concave faces that take torque. Up to **six** units pack in a ring. The tendons are **1 mm Vectran** rated at **1000 N**.

The motor base has **four quasi-direct-drive motors**, **15 Nm** peak, and **312 N** continuous wire tension. Attach is push-to-click. Detach is rotate-and-pull.

They built four payloads for that one base:

- **2-DoF rigid arm** with a claimed **10 kg** payload (three routed wires plus a Bowden cable for the tool)
- **Continuum arm** of seven spring-plate modules
- **Parallel-jaw gripper**
- **3-finger adaptive gripper**

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/DQmWqQCSztM"
    title="Detachable Wire Drive demonstration"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Arm and gripper swaps on the shared motor base. Source: JSK / YouTube.</p>

## Ten seconds on, one second off

There are no joint encoders in the limbs. A state machine runs **FREE → ATTACH → CALIBRATE → CONTROL**. Joint angles are estimated from motor encoders and the geometric tendon map.

Bench numbers from the project page:

- Tensile cycling to **450 N** with no structural damage; friction scatter about **±16 N**
- Arm attach about **10 s**; detach about **1 s**
- End-effector swap about **1 s**
- Across **225** postures, AprilTag RMSE of **0.087 rad** (actual vs estimated) and **0.177 rad** (actual vs reference)

<figure>
  <img src="/images/heroes/detachable-wire-drive-2.jpg" alt="Sequential attach, control, and detach of the rigid and continuum arms" loading="lazy" />
  <figcaption>Same motor unit: attach the rigid arm, then the continuum arm. Source: Hattori et al., project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/detachable-wire-drive-3.jpg" alt="Rigid arm swapping a parallel gripper and a three-finger gripper" loading="lazy" />
  <figcaption>Gripper swap on the rigid arm, then box and glue-stick picks. Source: Hattori et al., project page.</figcaption>
</figure>

## A Human's Take

Sharing motors is an old factory idea. Doing it with tendons you can unplug is the part that made me look twice.

I care less about the 10 kg slide than about whether the 1-second detach still works after a few hundred hot swaps and a frayed Vectran line. The state machine is the real product. If ATTACH and CALIBRATE stay boring, this architecture is how a small lab owns one expensive actuator pack and a drawer of arms.

## Sources

- [arXiv:2608.15461 — Detachable Wire Drive](https://arxiv.org/abs/2608.15461)
- [Project page — Detachable Wire Drive](https://hatofly.github.io/detachable-wire-drive/)
- [YouTube — demonstration video](https://youtu.be/DQmWqQCSztM)
