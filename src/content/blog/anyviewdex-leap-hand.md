---
title: "AnyViewDex Grasps From Uncalibrated RGB, No Depth at Test Time"
description: "IIIT-H’s LEAP Hand policy hits 76.7% on eight unseen objects and six camera poses. Geometry is taught in sim; deployment is a single RGB camera."
pubDate: 2026-09-19
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/anyviewdex-leap-hand.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Move the camera a little and a dexterous grasp that worked a second ago starts closing on empty air. **Soham Patil**, **Om Sanjay Gunjal**, **Sourabh Bhosale**, **Arhan Chavare**, **Ramandeep Singh Hora**, and **Spandan Roy** (IIIT Hyderabad and collaborators) posted [arXiv:2609.20107](https://arxiv.org/abs/2609.20107) on **17 September 2026** with a [project page](https://anyviewdex.github.io/).

**AnyViewDex** trains a view-invariant representation in simulation, then throws the 3D crutches away. At test time the policy sees uncalibrated monocular RGB and proprioception. No depth. No extrinsics.

<figure>
  <img src="/images/heroes/anyviewdex-leap-hand.jpg" alt="AnyViewDex overview: viewpoint shift failure, privileged sim training, and xArm7 plus LEAP Hand deployment" loading="lazy" />
  <figcaption>Privileged 3D in sim, RGB only on the table. Source: Patil et al., arXiv:2609.20107 / project page.</figcaption>
</figure>

## Contrastive views plus a secret coordinate

A ResNet-18 pools to a 1D embedding. During training the sim renders the same state from a canonical camera and a randomized one. InfoNCE pulls those embeddings together. That alone, they say, spatially collapses: the contrastive-only ablation goes near **0%** on three of four Maniwhere tasks.

The fix is a privileged head that regresses the object’s absolute 3D coordinates from the pooled features. A linear probe on the frozen visual embedding, no proprioception, recovers coordinates at **R² = 0.814** with **4.73 cm** mean error. That is coarse for a fingertip. The closed-loop policy still has joints and time.

They run the same idea in two stacks: Maniwhere RL and DextrAH-style student–teacher distillation. Hardware is an **xArm7** plus a **16-DoF LEAP Hand**, watched by one uncalibrated **RealSense D455**.

<figure>
  <img src="/images/heroes/anyviewdex-leap-hand-2.jpg" alt="xArm7 with LEAP Hand grasping from three camera orientations on a lab table" loading="lazy" />
  <figcaption>Same grasp, three camera poses. Source: Patil et al., arXiv:2609.20107.</figcaption>
</figure>

## 368 of 480 real grasps

Hardware: eight unseen objects (rigid plastics, cardboard, two plush octopuses), six viewpoints in a **140°** azimuthal cone, **10** trials each. **480** trials per method.

AnyViewDex: **368/480 (76.7%)**, **60–64** successes per viewpoint. Domain randomization only: **30.2%**. No InfoNCE: **18.7%**. No auxiliary 3D loss: **8.3%**. Fixed camera at a new view: **1.4%**. They ran **2,400** trials across those conditions.

In Maniwhere RL, AnyViewDex is the best RGB-only method on three of four tasks and beats RGB-D Maniwhere on Close Dex (**92.1%** vs **81.5%**). Lift Cube Dex is the miss: **53.0%**, behind MV-MWM at **78.0%**. Global pooling is a bad fit for a small cube.

On-laptop inference: **5.16 ms** per control step on an RTX 4050, **1–2 GB** VRAM.

The paper’s own failure modes: a textureless background hugging the object, and viewpoints outside the training cone, where the auxiliary prediction drifts and the hand closes on a plane that is not the table.

<figure>
  <img src="/images/heroes/anyviewdex-leap-hand-3.jpg" alt="Eight unseen test objects including plastic boxes, plush octopuses, cardboard, and 3D-printed supports" loading="lazy" />
  <figcaption>The eight objects that never appeared in training. Source: Patil et al., arXiv:2609.20107.</figcaption>
</figure>

## A Human's Take

I have watched too many hand papers that assume a perfectly bolted camera. This one moves the camera on purpose and still gets three-quarters of the grasps. The ablation is the part I trust: drop the 3D dummy loss and you fall to 8%. So the “RGB-only” story is a training trick, not a claim that 2D is enough by itself. Fine by me, as long as the D455 on the tripod does not need a calibration ritual every time someone bumps it.

## Sources

- [arXiv:2609.20107 — AnyViewDex: View-Invariant Dexterous Manipulation from RGB Observations](https://arxiv.org/abs/2609.20107)
- [AnyViewDex project page](https://anyviewdex.github.io/)
- [arXiv HTML — hardware tables and viewpoint stills](https://arxiv.org/html/2609.20107v1)
