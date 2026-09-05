---
title: "TRaIL-Odom Teaches Radar When a LiDAR Scan Goes Blind"
description: "SNU, ETH, and RAI’s RA-L paper reweights radar Doppler toward weak LiDAR directions. On three degenerate sequences, ATE drops 86% versus fixed fusion."
pubDate: 2026-09-05
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/trail-odom-radar-lidar.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Seoul National University, ETH Zürich’s Robotic Systems Lab, and the Robotics and AI Institute posted **TRaIL-Odom** on **3 September** ([arXiv:2609.03561](https://arxiv.org/abs/2609.03561)). IEEE RA-L accepted it on **23 August**. The trick is simple to say and rare to see: when LiDAR geometry goes thin, do not dump a constant radar weight on every residual. Point the Doppler at the directions the scan cannot see.

Chiyun Noh and Ayoung Kim (SNU) wrote it with Turcan Tuna, William Talbot, and Marco Hutter (ETH) and Laurent Kneip (RAI). Code, a six-sequence dataset, and a ROS 2 stack are public.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/YpFgrUllgts"
    title="TRaIL-Odom radar-IMU-LiDAR odometry"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">ANYmal with the Boxi sensor stack in tunnels, parks, and an airfield. Source: TRaIL-Odom / YouTube.</p>

## Two knobs, not one weight

The estimator is tightly coupled Radar-IMU-LiDAR on continuous-time B-splines, so asynchronous ticks do not force a state at every radar stamp.

Each LiDAR scan builds a 3×3 normal information matrix. Weak translational eigenvectors become a degeneracy subspace (threshold τ = **0.2**). Then:

- **Per-point reweighting (α)**: radar points whose line of sight lines up with that weak subspace get more weight
- **Scan-wise gain (γ)**: if the scan’s sphericity is low (corridor, tunnel), turn the whole Doppler contribution up; if the geometry is already isotropic, leave it near one

If the radar rays do not cover the weak axes, reweighting is disabled for that scan. The radar is mounted with a **20°** downward tilt to help that coverage.

<figure>
  <img src="/images/heroes/trail-odom-radar-lidar.jpg" alt="ANYmal quadruped with Boxi sensor payload, radar labeled, plus the same robot walking in a park" loading="lazy" />
  <figcaption>Boxi on ANYmal: Livox Mid-360, Honeywell HG4930 IMU, D3 mmWave radar. Source: Noh et al., arXiv:2609.03561.</figcaption>
</figure>

## Numbers from tunnels, not just offices

They evaluate **13** sequences: seven from GaRLILEO and six in-house runs on ANYmal (BikeTunnel, Park, Airfield), with Leica MS60 ground truth. Sensors are a Livox Mid-360, Honeywell HG4930, and D3 Embedded RS-1843AOPU radar.

LiDAR-only methods fail or drift hard on the in-house set. Radar-aided methods are the ones that finish. **Ours-RLIO** takes best RTE on five of six in-house sequences and lowest ATE on BikeTunnel1/2 and Airfield1.

Ablation on three degenerate sequences is the paper’s punchline. Combining α and γ cuts RMSE **ATE 86.0%** and **RTE 78.5%** versus fixed radar weights. On BikeTunnel2, return-to-start drift falls from **10.48 m** to **0.14 m**. Per-scan runtime stays under **100 ms** on an i9-14900HX (10 Hz LiDAR). Reweighting itself is **0.93–2.95 ms**.

<figure>
  <img src="/images/heroes/trail-odom-radar-lidar-2.jpg" alt="Trajectory plots with inset photos of ANYmal in an open airfield and a bike tunnel, comparing TRaIL-Odom to other odometry methods" loading="lazy" />
  <figcaption>Airfield and tunnel: LiDAR-inertial baselines wobble or fail; TRaIL-Odom holds the loop. Source: Noh et al., arXiv HTML.</figcaption>
</figure>

## A Human's Take

Radar-as-a-constant is how a lot of fusion still ships, and it is why adding a Doppler sensor sometimes makes the estimate worse in a nice courtyard. Weighting the rays toward the blind axis is the kind of unglamorous estimator work that actually keeps a quadruped inside a tunnel. I care that they released the bags. If your next humanoid has to walk a corridor with a cheap spinning lidar, this is the paper I would hand the localization person.

## Sources

- [arXiv:2609.03561 — TRaIL-Odom abstract](https://arxiv.org/abs/2609.03561)
- [arXiv HTML — full paper, Table I, and hardware stills](https://arxiv.org/html/2609.03561v1)
- [GitHub — TRaIL-Odom ROS 2 implementation](https://github.com/ChiyunNoh/TRaIL-Odom)
- [Project page — dataset and video](https://chiyunnoh.github.io/TRaIL-Odom/)
- [YouTube — TRaIL-Odom demo](https://www.youtube.com/watch?v=YpFgrUllgts)
