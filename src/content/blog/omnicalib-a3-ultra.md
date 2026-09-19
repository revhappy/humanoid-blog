---
title: "OmniCalib Recalibrates an A3 Ultra Without a Checkerboard"
description: "On AGIBOT’s A3 Ultra, robot-native motion recovers 14 arm zeros, 12 leg zeros, and a five-camera head rig. CAD is the start, not the measurement."
pubDate: 2026-09-19
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/omnicalib-a3-ultra.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A humanoid’s CAD file is a drawing. After assembly, a few millimeters at the wrist camera and a fraction of a degree at the hip are not the same drawing. **Kaixiang Lu**, **Haiyu Lan**, and colleagues posted [arXiv:2609.19582](https://arxiv.org/abs/2609.19582) on **17 September 2026** with **OmniCalib**, a target-free workflow they ran on one physical **AGIBOT A3 Ultra**.

Three robot-native motions, three parameter blocks, one write-back rule: if the motion does not make a parameter observable, leave the CAD value alone.

<figure>
  <img src="/images/heroes/omnicalib-a3-ultra.jpg" alt="AGIBOT A3 Ultra diagram showing upper-limb, lower-limb, and head-rig calibration modules" loading="lazy" />
  <figcaption>Arms in place, four stances, then a walk. Source: Lu et al., arXiv:2609.19582.</figcaption>
</figure>

## Arms from chest depth, legs from standing still

Upper limbs: in-place arm motion, chest RGB-D looking at the hands, wrist cameras looking at each other. Depth ICP recovers all **14** arm joint zeros and the chest/wrist extrinsics with no marker. They inject encoder offsets up to **0.58°** before recording. ICP recovers every offset with a max absolute error of **0.0060°**, under the paper’s **0.1°** encoder-resolution check. ArUco does the same job with a target; ICP does it without one.

Corrections written relative to CAD:

- **Left wrist**: **10.56 mm**, **1.74°**
- **Right wrist**: **6.33 mm**, **1.25°**
- **Chest RGB-D**: **9.81 mm**, **0.929°**

ICP point-to-plane residual: **2.09 mm** over **1.9 million** correspondences. An independent ArUco chest transform differs from ICP by **7.15 mm** and **1.004°**.

Lower limbs: four static double-support stances, encoders plus a pelvis IMU. They will not crank twelve leg zeros on hardware (fall risk), so they inject a known bias into the recorded encoder stream. Recovery RMS is **0.063°** across **12** joints. Hip yaw is the weak axis. Held-out static bags: foot-height RMS **2.396 mm → 2.074 mm**, sole-normal tilt **1.326° → 0.976°**. A walking replay with a virtual **+3°** hip-pitch offset cuts vertical odometry RMS from **265.0 mm** to **188.1 mm**.

<figure>
  <img src="/images/heroes/omnicalib-a3-ultra-3.jpg" alt="Chest RGB-D views of left and right A3 Ultra arms before and after ICP calibration overlays" loading="lazy" />
  <figcaption>Chest depth before and after the ICP correction. Source: Lu et al., arXiv:2609.19582.</figcaption>
</figure>

## Head cameras from a walk, not a 6-DoF dance

The five-camera head rig is the part that usually wants a checkerboard and a wild IMU wave. OmniCalib uses planar walking, legged odometry, and the live ROS transform tree so camera motion is projected through moving waist and neck joints. Rotation only. Translation stays at CAD.

Three ~two-minute walks. Mean SO(3) error versus a hidden Kalibr reference: **1.061°**. Best sequence **0.775°**. iKalibr, on a separate rich **6-DoF** recording of the same un-remounted rig: **0.902°**. Rig-relative angles repeat within **0.140°** across the three walks. Freeze the articulated link at t0 and the mean/max Kalibr error jumps to **1.359° / 2.219°**. CamOdoCal on one sequence lands **46.8°–178.2°** off the same reference.

Head camera translation and time offsets are not claimed. Those stay CAD.

## A Human's Take

This is the unglamorous work that decides whether a factory humanoid’s wrist camera is lying. I like that they refuse to write a number the walk cannot see. The 10 mm wrist correction is the kind of thing that silently wrecks a grasp policy, then gets blamed on the network. If you are shipping A3 Ultras, this is the procedure I would want after every camera swap, not a once-a-year lab ritual with tags.

## Sources

- [arXiv:2609.19582 — OmniCalib: Target-Free, Task-Structured Self-Calibration for Humanoid Robots](https://arxiv.org/abs/2609.19582)
- [arXiv HTML — A3 Ultra experiments, injection tables, and chest/wrist figures](https://arxiv.org/html/2609.19582v1)
