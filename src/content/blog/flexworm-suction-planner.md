---
title: "FlexWorm Plans Suction Steps Instead of Handing You a Gait"
description: "Peking University’s RA-L planner walks a pneumatic suction worm over 3D surfaces 12× faster by reusing short validated moves."
pubDate: 2026-08-18
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/flexworm-suction-planner.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Suction worms are great at clinging to walls and awful to program. Most still run a hand-written gait. A **Peking University** team led by **Meng Guo** posted **FlexWorm** on **August 17**, accepted at **IEEE RA-L**: a planner that treats each suction pad as a discrete contact mode and the soft body as a continuous deformation.

The hardware in the lab is a pneumatic worm with **two soft segments**, **three suction pads**, and **four chambers** per segment.

<figure>
  <img src="/images/heroes/flexworm-suction-planner.jpg" alt="FlexWorm suction robot planned across floor-wall-ceiling 3D terrain" loading="lazy" />
  <figcaption>PaHS plans adhesion switches and body bends on mixed 3D surfaces. Source: Tang et al., arXiv:2608.16853.</figcaption>
</figure>

## Search the contacts, solve IK only on the free bits

The core planner is **IKHS**, block-wise inverse-kinematics hybrid search. Attached pads become anchors. The planner only solves IK on the free segments between them, then checks collision, suction pose, and a load-deformation manifold built from about **10³** hardware measurements and **5×10⁵** finite-element samples.

**PaHS** sits on top. Offline IKHS rollouts (1,500 episodes, more than **40,000** short segments, about **6,000** library entries) become reusable primitives. Online, the planner retrieves the nearest ones, refines them with IK, and falls back to full IKHS if retrieval fails.

In simulation, both IKHS and PaHS hit **20/20** on three scenario sets (floor-wall-ceiling, clutter, strong curvature). PaHS cut planning time from **20.4 / 11.9 / 15.6 s** to **1.7 / 1.0 / 1.8 s**, about **12×, 11.9×, and 8.7×**. Retrieval hit rates were **92%, 99%, and 93%**.

Baselines that just replay primitives, warm-start a long optimizer, or beam-search a discrete grid all lost on success and time. Replay without IK refinement is how a wall transition goes from green to an illegal suction pose.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/OQR5Sx5Bwnc"
    title="FlexWorm supplementary video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Simulation and hardware clips from the RA-L paper. Source: Tang et al. / YouTube.</p>

## A real worm, a small table, a 45-degree slope

Hardware ran in a **60 cm × 40 cm** workspace on plastic mats with movable obstacles. Nine motion-capture markers fed state back to the planner. They show planar navigation and a **45°** slope transition, with closed-loop pressure commands and online recovery when adhesion or actuation drifted.

<figure>
  <img src="/images/heroes/flexworm-suction-planner-2.jpg" alt="Hardware FlexWorm on a table and a 45-degree slope with pressure plots" loading="lazy" />
  <figcaption>Hardware FlexWorm on the table (T1) and a wall climb (T2), with tracking and chamber pressures. Source: Tang et al., arXiv:2608.16853.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/flexworm-suction-planner-3.jpg" alt="Simulation scenes of FlexWorm on cluttered and curved 3D surfaces" loading="lazy" />
  <figcaption>The three simulation worlds: transitions, clutter, and curvature. Source: Tang et al., arXiv:2608.16853.</figcaption>
</figure>

## A Human's Take

A suction robot without a planner is a party trick you retune every time the wall changes. This paper treats the interesting part as the hybrid decision: which pad sticks, then how the body bends.

The 12× speedup is just a library of moves they already proved were legal. That is the right kind of learning for a machine whose physics you do not fully trust. Table-scale is still table-scale. I want the same stack in a pipe or an aircraft bay before I call it inspection-ready.

## Sources

- [arXiv:2608.16853 — FlexWorm: Primitive-augmented Hybrid Contact-motion Planning](https://arxiv.org/abs/2608.16853)
- [YouTube — RA-L supplementary video](https://youtu.be/OQR5Sx5Bwnc)
