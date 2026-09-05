---
title: "FOCUS Stops Trusting a Foot Just Because It Is Touching the Floor"
description: "AgiBot and Wuhan University replace binary contact gating with continuous per-foot FK reliability. Real walking ATE drops 70.8% on A3 Ultra."
pubDate: 2026-09-05
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/focus-humanoid-odometry.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**FOCUS** (Foot Observation Confidence from Unannotated Simulation) landed **2 September** ([arXiv:2609.02222](https://arxiv.org/abs/2609.02222)). Authors at Wuhan University and **AgiBot** argue a simple thing that walking robots keep getting wrong: contact is not the same as a trustworthy forward-kinematics measurement.

Toe drag, partial support, and slip all look like “in contact” to a torque threshold. The kinematics of that foot are still junk. Binary gating then injects junk into the EKF for a whole stance.

<figure>
  <img src="/images/heroes/focus-humanoid-odometry.jpg" alt="AgiBot A3 Ultra humanoid with sensor callouts and a labeled lower-limb kinematic diagram" loading="lazy" />
  <figcaption>A3 Ultra hardware used for the real tests. FOCUS uses only IMU and leg encoders. Source: Feng et al., arXiv:2609.02222.</figcaption>
</figure>

## Weights, not a switch

A causal Transformer (50-frame window, 1 s at 50 Hz, 30-D input: IMU accel/gyro plus 12-DoF lower-limb positions and velocities) predicts two scalars **w_L, w_R ∈ [0, 1]**. Those weights blend FK-derived body velocity with IMU propagation and inflate observation noise when a foot looks unreliable. Torque is deliberately **not** an input. The deployed ONNX model is **693,768** parameters, **1.62 ms** per step on one i7-13700K thread.

Training is simulation-only. An Isaac Lab motion-tracking policy is frozen and replayed over walking, jumping, standing, running, and martial-arts clips (5,420 train episodes, about **51.65 h** at 50 Hz). The main loss is FK-weighted velocity consistency against simulator body velocity. Binary contact is only a light regularizer. No one labels “reliability” by hand.

The robot is **A3 Ultra**: **174 cm**, **60 kg**, five units sharing the same kinematic model. LiDAR and cameras exist on the platform. FOCUS ignores them.

## The walking number

On **19 real walking segments** (1.51 km, 54.1 min) against a LiDAR reference, mean ATE falls from **2.634 m** (torque-threshold gating) to **0.768 m**. That is **70.8%**. Pronto, CoCo-InEKF, and Legolas are all worse than the threshold baseline on that set. A Wilcoxon test on the paired segments is p < 10⁻⁵.

Simulated walking (20 episodes): ATE **0.166 m** vs **1.016 m** threshold, an **83.7%** cut.

Four real dance routines (Charleston, Chaosha, Zero-Frame Start, Cyberwalk) against motion capture: mean ATE **0.542 m** vs **0.947 m** threshold (**42.7%**). FOCUS also stays closest to 1.0 on amplitude and spectral ratio.

<figure>
  <img src="/images/heroes/focus-humanoid-odometry-3.jpg" alt="XY trajectory overlays for walking and dance, comparing FOCUS against threshold, Pronto, CoCo-InEKF, and Legolas" loading="lazy" />
  <figcaption>Walking and dance traces. Blue is FOCUS. Source: Feng et al., arXiv:2609.02222.</figcaption>
</figure>

Ablation on the same 19 walks: learned binary contact is a disaster (**6.125 m** ATE). Hard-thresholding the continuous weights at 0.5 is almost as good as full FOCUS (**0.802 m**). Covariance-only modulation is **0.902 m**. The blend plus covariance is the win.

<figure>
  <img src="/images/heroes/focus-humanoid-odometry-2.jpg" alt="Diagram of FOCUS predicting per-foot reliability weights for an EKF instead of binary contact" loading="lazy" />
  <figcaption>Motivation: high torque is not reliable FK. Source: Feng et al., arXiv:2609.02222.</figcaption>
</figure>

## A Human's Take

This is the unglamorous half of a humanoid: dead-reckoning when the cameras fog or the LiDAR is in a pocket. I trust a 70% ATE cut on 19 real walks more than another parkour clip. The useful lesson is not “learn odometry end to end.” It is “keep the EKF, stop lying to it about the feet.” If they can adapt those weights on new terrain without a second sim campaign, this becomes a default block in the stack.

## Sources

- [arXiv:2609.02222 — FOCUS abstract](https://arxiv.org/abs/2609.02222)
- [arXiv HTML — A3 Ultra setup, tables, ablations](https://arxiv.org/html/2609.02222v1)
