---
title: "Duke Humanoid V2 Aims Two Cameras So Reach Is Not Blind"
description: "A 31-DoF lab humanoid with independently actuated RGB-D heads lifts visible-reachable coverage from 38% to 97%."
pubDate: 2026-09-12
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/duke-humanoid-v2-vrw.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A robot can put a hand on a cube it cannot see from that pose. Then it has to twist the torso, walk, or guess. **Boxi Xia**, **Boyuan Chen**, and colleagues at **Duke University** treat that as a design bug, not a planning bug.

Their September 8 paper introduces the **visible-reachable workspace (VRW)**: keep only the arm-reachable points that an onboard camera can also observe from a feasible reaching configuration. They built **Duke Humanoid V2** to measure it.

The body is **31 DoF**: waist, two 6-DoF legs, two 7-DoF arms, plus two 2-DoF camera gimbals. Parallel grippers add another actuated joint each. It stands **1.2 m**, weighs **36 kg**, and has a **0.46 m** arm reach. Each camera module is an **Intel RealSense D436** (90° × 65° RGB, 0.1–3.0 m range) on an independent yaw-pitch gimbal. Camera yaw ROM is **±270°**.

<figure>
  <img src="/images/heroes/duke-humanoid-v2-vrw.jpg" alt="Duke Humanoid V2 with dual actuated cameras, workspace maps, and two-target grasps" loading="lazy" />
  <figcaption>Fixed vs actuated cameras, and left/right plus front/back grasps without turning the torso. Source: Xia et al., arXiv:2609.08905.</figcaption>
</figure>

## The number that moved

On the same robot, actuating the cameras raises visible-reachable coverage from **38%** to **97%**. Pairwise coverage — can it watch two separated regions at once — goes from **0.45** with one independent camera to **0.95** with two. A third camera only reaches **0.97**, while adding **0.58 kg**, two gimbal DoF, and **$600**. They shipped the two-camera layout.

They also ran the same geometric test on other models (camera FOV from published specs or a shared 90° × 65° stand-in). Under that protocol, a fixed-head **Unitree G1** sits at **16%** visible-reachable. Neck-actuated platforms (**PAL Talos**, **Booster T1**, **Fourier GR-3**, **Apptronik Apollo**) land between **48%** and **76%**. None of those can aim two views independently.

<figure>
  <img src="/images/heroes/duke-humanoid-v2-vrw-2.jpg" alt="CAD of Duke Humanoid V2 with joint labels, arm, legs, and camera gimbal" loading="lazy" />
  <figcaption>31-DoF layout and yaw-pitch camera module. Source: Xia et al., Figure 3.</figcaption>
</figure>

## Time and energy, not just a heatmap

In a simulated two-target reach-and-grasp (30 trials per scenario, six layouts including a person holding one cube), the dual-actuated setup cut mean completion time **17%** and mechanical energy **19%** versus the same robot with cameras locked. Success stayed high across configs, **0.967** to **0.994**. Search time dropped because the head moved instead of the feet.

Hardware demos repeat front/back and left/right tabletop grasps without reorienting the body. Far targets still require a walk. A fifth sequence tracks two objects carried by two people; if an arm occludes a target, that camera searches and reacquires.

The control stack is a **50 Hz** whole-body residual policy (**FlashSAC**) with **200 Hz** PD tracking, trained in **4,096** parallel environments. They say software and the hardware design will be open-sourced. Project page: [generalroboticslab.com/DukeHumanoidv2](https://generalroboticslab.com/DukeHumanoidv2).

<figure>
  <img src="/images/heroes/duke-humanoid-v2-vrw-3.jpg" alt="Time-lapse of Duke Humanoid V2 grasping left/right and front/back cubes" loading="lazy" />
  <figcaption>Real-world two-target sequences at 5 s intervals. Source: Xia et al., Figure 7.</figcaption>
</figure>

## A Human's Take

Copying a human head is a local maximum if the job is two benches at once. Independent gimbals are an ugly, correct answer: spend a little mass so the torso does not have to pirouette for a second view. I want to see the open CAD and whether those cameras stay calibrated after a week of walking. Until then, 38% to 97% is the kind of design delta you can actually budget.

## Sources

- [arXiv:2609.08905 — Visible-Reachable Workspace for Perception-Aware Humanoid Design](https://arxiv.org/abs/2609.08905)
- [Duke General Robotics Lab — Duke Humanoid V2](https://generalroboticslab.com/DukeHumanoidv2)
