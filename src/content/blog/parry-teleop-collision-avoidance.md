---
title: "PARRY Steers a Teleop Arm Around Obstacles Without Stopping"
description: "Tsinghua’s plug-in rotates the end-effector’s relative velocity so a Flexiv arm misses a box instead of freezing the way classic potential fields do."
pubDate: 2026-08-15
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/parry-teleop.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Tsinghua** and **Zhejiang University-UIUC** researchers posted **PARRY** (Predictive Avoidance by Rotating Relative velocitY) on **August 13**. It is a plug-in for teleoperation: given a depth point cloud and the operator’s end-effector velocity, it outputs a new velocity. The tracking controller stays untouched.

Authors: **Changhao Hu**, **Zeyi Liu**, **Songqiao Hu**, **Shuang Liu**, **Zihan Meng**, **Xiao He** (corresponding). The paper also lists **TetraBOT**.

<figure>
  <img src="/images/heroes/parry-teleop.jpg" alt="Flexiv arm hitting a milk carton vs steering around it with PARRY" loading="lazy" />
  <figcaption>Physical static-obstacle test: baseline hits the carton, PARRY rotates the command and goes around. Source: Hu et al., arXiv:2608.13284.</figcaption>
</figure>

## Rotate the velocity, do not cancel it

Classic artificial potential fields add a repulsive force to the task velocity. Attractive and repulsive terms can cancel, the arm stalls, and a human on a Quest stick thinks the link dropped. PARRY keeps the **magnitude** of the relative velocity and only changes **direction** with **Rodrigues’ rotation**.

A time-to-collision look-ahead rebuilds the point cloud to cover perception lag, with an overshoot guard so predicted points cannot fly past the gripper and push it the wrong way.

## 21,000 simulated trials, then a real 7-DoF

They ran **1,000** paired Monte Carlo trials at **0 / 100 / 150 ms** of obstacle delay against APF velocity superposition, a CBF quadratic program, and speed-and-separation monitoring. Counting ablations, **21,000** runs.

Collision-avoidance rate for PARRY: **82.7% / 80.6% / 80.1%** across those delays. APF-VS drops from **79.1%** to **73.7%**. Median compute is **0.101 ms**, vs **0.729 ms** for CBF-QP, on a **100 Hz** loop. Overshoot protection cut large-angle repulsive flips from **20.2%** of trials to **3.6%**, and wrong-way frames from **20.4%** to **0.1%**.

<figure>
  <img src="/images/heroes/parry-teleop-2.jpg" alt="MuJoCo UR5e redirecting around a flying sphere while carrying an object" loading="lazy" />
  <figcaption>MuJoCo: UR5e plus Robotiq 2F-85 steering around a 0.10 m sphere. Source: Hu et al., arXiv:2608.13284.</figcaption>
</figure>

On hardware they used a **Flexiv Rizon 4**, **Meta Quest 3**, and a **RealSense D435** at **30 Hz**, stacked on the **TactAR** teleop stack. The operator stacks four paper cups, then moves the stack back. Static and tossed-in obstacles are in the paper’s figures. The authors say PARRY only covers the **end effector**, not the whole arm, and they used Gemini/ChatGPT for language polish and conceptual figures.

<figure>
  <img src="/images/heroes/parry-teleop-3.jpg" alt="Overhead trajectories of baseline vs PARRY cup-stacking teleop" loading="lazy" />
  <figcaption>Physical trajectories during the cup-stacking task. Source: Hu et al., arXiv:2608.13284.</figcaption>
</figure>

## A Human's Take

A 0.1 ms filter that keeps the stick feeling alive is the kind of safety layer I would actually leave on. I do not need another CBF that spends 0.7 ms thinking while the carton is already in the wrist. Whole-arm coverage is the next receipt. End-effector-only is how you still clip the elbow on the shelf.

## Sources

- [arXiv:2608.13284 — Predictive Relative-Velocity Steering](https://arxiv.org/abs/2608.13284)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2608.13284v1)
