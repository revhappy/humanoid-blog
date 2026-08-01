---
title: "LimX COSA 0.5: Whole-Body VLA That Tidies a Room Uncut"
description: "LimX’s COSA 0.5 technical report details V³-0 on the 43-DoF Oli humanoid: fast-slow VLA, onboard WBT balance, and real-robot RL with expert takeover."
pubDate: 2026-08-01
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/limx-cosa-05.jpg"
readTime: "6 min read"
featured: false
draft: false
---

**LimX Dynamics** published a technical report for **COSA 0.5** on July 15, 2026. The headline is not a funding round — it is **V³-0**, a whole-body vision-language-action stack on the **43-DoF Oli** humanoid that walks, bends, and manipulates in one continuous room-tidying take with no teleoperation and no mid-run resets, according to the company.

## The three-tier stack

LimX splits control the way factories split shifts: different jobs, different clock rates.

| Layer | Job | Rate (reported) |
|-------|-----|-----------------|
| **V³ slow system** | Vision-language model reads head/wrist cameras + language → intent latent | **&lt; 5 Hz** |
| **V³ fast system** | Flow-matching policy turns latent + live vision + robot state into short whole-body action chunks | **50 Hz** |
| **LimX-WBT (S0)** | Single whole-body tracker converts targets to joint commands while holding balance | Control rate, **onboard** |

Locomotion and manipulation share one action space. Head targets are first-class so the robot can look at the object it is about to grab instead of only staring where the torso points.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/vxFnOu7kf6Y"
    title="LimX COSA 0.5 long-horizon mobile manipulation demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Company demo: continuous home-tidying run on Oli under COSA 0.5 / V³-0. Source: LimX Dynamics / YouTube.</p>

## Numbers from the report (not the marketing cut)

On an in-house whole-body tracking eval versus a reproduced **SONIC** baseline trained with the same data and compute on Oli, LimX reports:

- **MPJPE**: 12.85 mm vs 13.75 mm
- **MPJAE**: **1.5°** vs 3.3° (about **55%** lower)
- Joint-space jerk and base-orientation jerk both lower (smoother motion)

For real-robot RL with human-in-the-loop expert takeover, basket cleanup success rises from **18.01%** to **74.00%**; across three tasks, failure rate falls from **39.65%** to **11.33%**. Experts can seize whole-body control mid-rollout, correct a miss, and hand control back without a hard reset.

<figure>
  <img src="/images/heroes/limx-cosa-05-3.jpg" alt="LimX Oli humanoid performing household chores under COSA 0.5" loading="lazy" />
  <figcaption>Oli in a household demo scene tied to the COSA 0.5 / V³-0 release. Source: LimX Dynamics / coverage of company materials.</figcaption>
</figure>

The unbroken tidying run is the integration test: laundry into a hamper, plush on a chair, boxes stacked, desk toys cleared, chair straightened, trash binned, wallet handed to a person — nearly **three minutes**, one take. LimX says layouts are rearranged between takes so the policy cannot memorize one stage set.

Training and inference ride **FluxVLA Engine**; the company says it is open-sourcing humanoid FluxVLA training/inference code with this release, using GR00T as a reference VLA and supporting on-device inference.

## A Human's Take

A continuous take is a proof of stack cohesion, not a reliability certificate — LimX has not published full-run success rates for the multi-minute chore chain. What I care about is the plumbing: expert takeover on the **same** whole-body interface as the policy, RL on metal instead of only sim, and balance that does not live on a rack PC. If those loops hold outside a furnished demo room, COSA 0.5 is a real OS upgrade. If they only hold on camera day, it is still a useful technical report — and I will wait for the failure stats.

## Sources

- [LimX Dynamics — Introducing COSA 0.5 / V³-0 technical report](https://limxdynamics.com/cosa05v3/#en)
- [LimX news — COSA 0.5 announcement](https://www.limxdynamics.com/en/news/BK000066)
- [humanoid.guide — LimX Pre-IPO context + COSA 0.5 demo summary](https://humanoid.guide/limx-dynamics-200m-pre-ipo-cosa-0-5/)
- [YouTube — LimX COSA 0.5 demo](https://www.youtube.com/watch?v=vxFnOu7kf6Y)
