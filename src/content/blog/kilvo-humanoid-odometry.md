---
title: "KILVO: Humanoid Odometry That Fuses Legs, IMU, LiDAR, and Cameras"
description: "KILVO runs kinematic-inertial-LiDAR-visual odometry in a hybrid ESIKF built for bipeds, with code and datasets on GitHub."
pubDate: 2026-08-07
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/kilvo-humanoid-odometry.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Biped state estimation is ugly: contact switches, slip, swinging arms in the camera, and sensors that do not sample at the same rate. **KILVO** (Kinematic-Inertial-LiDAR-Visual Odometry), accepted at **IEEE/ASME Transactions on Mechatronics** and posted on arXiv **August 6, 2026** (arXiv:2608.05647), is a fusion stack aimed at that mess instead of wheeled-robot defaults.

<figure>
  <img src="/images/heroes/kilvo-humanoid-odometry.jpg" alt="Humanoid robot outdoors with labels for camera, LiDAR, IMU, and encoders" loading="lazy" />
  <figcaption>KILVO cover figure: multi-rate sensors on a walking humanoid. Source: arXiv:2608.05647 HTML.</figcaption>
</figure>

## How it is wired

KILVO runs an **asynchronous-sequential hybrid error-state iterated Kalman filter (ESIKF)**:

- **Inertial** data for prediction  
- **Leg kinematics** from joint encoders, processed asynchronously at high rate as proprioceptive constraints  
- **Exteroception** updated in sequence: first **LiDAR** point registration for geometric priors, then **visual** photometric error  

The framework includes **multimodal adaptation** so the estimator can degrade gracefully when a sensor fails, plus a compact **contact estimation** module that shares information with state estimation without extra contact sensors.

<figure>
  <img src="/images/heroes/kilvo-humanoid-odometry-2.jpg" alt="KILVO system overview block diagram of the hybrid ESIKF" loading="lazy" />
  <figcaption>System overview of the hybrid filter pipeline. Source: arXiv:2608.05647 HTML.</figcaption>
</figure>

## What the authors claim

The abstract reports **extensive experiments** on public datasets and in the real world across **multiple humanoid robots**, gait patterns, and scenarios. KILVO is described as **highly competitive** on accuracy, efficiency, and output rate, with strong robustness under sensor degradation and failures relative to state-of-the-art fusion methods tailored less carefully to bipeds. **Code and datasets** are released on GitHub (linked from the paper).

<figure>
  <img src="/images/heroes/kilvo-humanoid-odometry-3.jpg" alt="Robot configuration and sensor placement for KILVO experiments" loading="lazy" />
  <figcaption>Robot configuration used in experiments. Source: arXiv:2608.05647 HTML.</figcaption>
</figure>

## A Human's Take

Foundation policies get the headlines; localization still decides whether those policies stay on the factory aisle. KILVO’s sequence — kinematics first, LiDAR geometric prior, then vision — matches how I’d want a biped to fail: drop the camera in a dusty aisle and keep a usable pose from legs and LiDAR. I’ll believe “more suitable for humanoids” when more groups run the open code on their own Unitree/Fourier-class platforms and publish the drift curves.

## Sources

- [arXiv:2608.05647 — KILVO abstract](https://arxiv.org/abs/2608.05647)
- [arXiv HTML — KILVO full paper](https://arxiv.org/html/2608.05647v1)
- [IEEE Xplore related DOI — TMECH.2026.3721778](https://doi.org/10.1109/TMECH.2026.3721778)
