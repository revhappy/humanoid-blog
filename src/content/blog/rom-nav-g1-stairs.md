---
title: "RoM-Nav Walks a G1 Up 10 Meters of Stairs, Mapless"
description: "Caltech’s RoM-Nav kickstarts G1 navigation from a reduced-order policy, then filters collisions on real multi-floor routes."
pubDate: 2026-09-18
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/rom-nav-g1-stairs.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Unitree **G1** from Caltech’s Ames lab walks multi-floor buildings without a map. The policy is **RoM-Nav**: train navigation on a cheap reduced-order model, then kickstart the full humanoid with a frozen walking controller in the loop. On hardware the authors report climbs of more than **10 m** of vertical and paths longer than **100 m**. They say **none of the hardware trials included a collision**.

The paper is [arXiv:2609.19272](https://arxiv.org/abs/2609.19272), submitted **16 September**, under review for ICRA 2027. The [project page](https://wdc3iii.github.io/rom-nav/) has the videos.

<figure>
  <img src="/images/heroes/rom-nav-g1-stairs.jpg" alt="Unitree G1 humanoids on a glass stairwell with an orange path overlay" loading="lazy" />
  <figcaption>Hardware deploy panel from the RoM-Nav paper. Source: arXiv:2609.19272.</figcaption>
</figure>

## Stairs are the failure mode

A one-stage RL navigator, they argue, falls apart when the goal is on another floor. Same-level walking is not the hard part. Cross-level goals are.

They train a policy on a **single integrator with heading** that “slides” on an occupancy grid, then copy that skill onto the G1 with a mix of PPO and a KL penalty toward the reduced-order teacher. The KL weight starts at **1** for 100 iterations, decays to **0.05** by iteration 1100, and holds through 2000. Reduced-order training is **12 hours** on one H100; the humanoid stage is **32 hours**. Combined, under **45 hours** on a single GPU.

The robot runs navigation at **5 Hz** and a frozen locomotion policy at **50 Hz**. Command limits: **1 m/s** forward, **0.25 m/s** lateral, **1 rad/s** yaw. Sensors are a **Mid-360** LiDAR and a downward **ZED Mini**. Encoders are frozen VAEs pretrained on **1 million** uniform plus **1 million** stair/ramp-oversampled images.

On a held-out sim seed, **RoM-Nav** hits **82.3%** success at 45 s and **92.8%** at 120 s. Direct single-stage PPO on the humanoid: **62.2%** and **81.7%**. The gap is almost all on **cross-level** trials. Fall rate on 120 s cross-level runs drops from **16.3%** (zero-shot RoM transfer) to **8.3%** with kickstarting.

<figure>
  <img src="/images/heroes/rom-nav-g1-stairs-2.jpg" alt="Four hardware routes with LiDAR maps and G1 stills on stairs, labs, and outdoor paths" loading="lazy" />
  <figcaption>Four real deployments, including a 10 m ascent and a 100 m outdoor path. Source: arXiv:2609.19272.</figcaption>
</figure>

## A Poisson filter for weird obstacles

Learned navigation has no collision certificate. They rasterize the point cloud to a **0.05 m** grid, solve Poisson’s equation for a barrier, and project the command with a QP (**α = 0.75**). The map used to line up start/goal is **never** given to the policy.

On ten shared hardware pairs:

| Obstacle set | Filter | Success | Collisions |
| --- | --- | --- | --- |
| In-distribution | off / on | 10/10 | 0 / 0 |
| Out-of-distribution | off / on | 10/10 | **2/10** / **0/10** |
| Adversarial hanging tubes | off / on | 10/10 | **4/10** / **0/10** |

Time-to-goal goes up with the filter. Success does not drop.

Hardware paths include a cluttered lab (**38 m**), a two-story climb (**7 m**, **51 m**), an outdoor-to-indoor climb (**10 m**, **51 m**), and a **100 m** outdoor loop. Training never saw more than **8 m** of vertical or **30 m** geodesic goals. Glass is still a hole: they blocked a glass door and window with cardboard in one trial.

<figure>
  <img src="/images/heroes/rom-nav-g1-stairs-3.jpg" alt="RoM-Nav architecture diagram with LiDAR encoders, GRU, and humanoid kickstarting" loading="lazy" />
  <figcaption>Two-stage training: reduced-order navigator, then G1 kickstart. Source: arXiv:2609.19272.</figcaption>
</figure>

## A Human's Take

Mapless stairs with zero reported hardware collisions is the kind of result I will actually watch twice. The interesting number is not 92% in sim. It is 4/10 collisions on skinny hanging tubes until the Poisson filter is on. If the next paper names how many real stair flights failed instead of “none of the trials collided,” I’ll trust this as a building robot, not a well-chosen bag file.

## Sources

- [arXiv:2609.19272 — Learning Safe Humanoid Navigation from Reduced Order Models](https://arxiv.org/abs/2609.19272)
- [RoM-Nav project page](https://wdc3iii.github.io/rom-nav/)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.19272)
