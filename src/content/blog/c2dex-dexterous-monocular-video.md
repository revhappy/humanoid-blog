---
title: "C2Dex Turns Phone Videos Into Dexterous Hand Trajectories"
description: "C2Dex recovers stable object-side contacts from monocular video, retargets them to robot hands, and hits 57.78% success on DexYCB vs 17.78% for baselines."
pubDate: 2026-08-10
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/c2dex.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Collecting clean demos for multi-finger hands is expensive. Phone video of people manipulating objects is not — if you can turn noisy monocular hand-object footage into something a robot hand can actually run.

**C2Dex**, submitted to arXiv on Aug 7, 2026 (arXiv:2608.07045) and aimed at IEEE RA-L, is a video-to-dexterous-manipulation pipeline from Nanjing University and collaborators. The core trick is not better per-frame pose estimation. It is **stable object-side contacts**: aggregate noisy frame-wise contact observations into the canonical object frame, then use those contacts both to clean the human trajectory and to retarget it onto a robot hand.

<figure>
  <img src="/images/heroes/c2dex.jpg" alt="C2Dex overview from monocular video to dexterous hand trajectory" loading="lazy" />
  <figcaption>Pipeline overview: contact-consistent HOI reconstruction, then interaction-preserving retargeting. Source: arXiv:2608.07045.</figcaption>
</figure>

## What they built

C2Dex has two coupled modules:

- **Contact-consistent HOI reconstruction** — start from Dyn-HaMR hand estimates, SAM 3D object geometry, and ProxyPose object poses; filter contacts with silhouette overlap and normal consistency; cluster contacts across stable temporal segments with DBSCAN; refine MANO trajectories with contact, SDF penetration, and regularization losses.
- **Contact-interaction-preserving retargeting** — transfer stable contacts to the target hand (Inspire in the paper), preserve local hand-object geometry with Laplacian interaction optimization, then refine in Isaac Gym with residual RL (ManipTrans-style).

The project page ([k-jie.github.io/C2Dex](https://k-jie.github.io/C2Dex/)) shows open-loop replay on a **Unitree G1** with an **Inspire** hand on eight contact-rich tasks: hang cap, pour juice, sweep litter, wipe board, stack cups, and more. Twenty-four human demos feed the pipeline with no per-task policy training and no teleop on the robot.

<figure>
  <img src="/images/heroes/c2dex-3.jpg" alt="C2Dex method diagram for HOI reconstruction and retargeting" loading="lazy" />
  <figcaption>Method diagram from the project page. Source: C2Dex project site / arXiv:2608.07045.</figcaption>
</figure>

## Numbers that matter

Under identical evaluation criteria on monocular demos:

| Dataset | C2Dex (relaxed) | Strongest baseline |
|---------|-----------------|--------------------|
| **DexYCB** (45 seq) | **57.78%** (26/45) | 17.78% (Do As I Do) |
| **TACO** (30 seq) | **26.67%** (8/30) | 10.00% (Do As I Do) |

Strict rotation thresholds still leave C2Dex far ahead (55.56% / 23.33%). On retargeting alone with ground-truth human HOI input, max penetration on DexYCB drops from 22.92 mm (DexPilot) to **3.99 mm**. Ablations show removing cross-frame contact consistency collapses DexYCB success back to 17.78%.

<figure>
  <img src="/images/heroes/c2dex-2.jpg" alt="Real-world C2Dex replay tasks hang cap sweep wipe drop litter" loading="lazy" />
  <figcaption>Real-robot open-loop replay on hang, sweep, wipe, and drop tasks. Source: arXiv:2608.07045.</figcaption>
</figure>

## A Human's Take

I'm so here for the boring object-space contact bank. Most video-to-dexterity stacks fail because contacts jitter every frame and retargeting matches fingertips instead of *where the object actually gets touched*. If C2Dex-style stable contacts hold up outside author-recorded demos and clean object meshes, phone footage stops being a research novelty and starts looking like a data factory for hands.

## Sources

- [arXiv:2608.07045 — C2Dex: Contact-Consistent Reconstruction and Retargeting for Dexterous Manipulation from Monocular Video](https://arxiv.org/abs/2608.07045)
- [arXiv HTML full text](https://arxiv.org/html/2608.07045v1)
- [C2Dex project page](https://k-jie.github.io/C2Dex/)
