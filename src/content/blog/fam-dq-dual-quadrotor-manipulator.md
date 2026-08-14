---
title: "FAM-DQ Is Two Quads on a Stick That Can Drive a Screw"
description: "A 447-gram dual-quadrotor aerial manipulator puts out 1.019 N·m and tightens an M8 screw while holding pose."
pubDate: 2026-08-14
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/fam-dq.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most aerial manipulators fight their own base. Tilt the multirotor and the arm moves. **FAM-DQ** (arXiv **August 13**) is a different shape: two quadrotor modules on the ends of a carbon-fiber tube, an end-effector hanging off a gear-driven servo, and passive joints so the props can point without dragging the tool.

**Xuwei Yang, Ruoyu Ren, and Ziqian Guo** built it for high-torque contact — valve work, bolt tightening — without a heavy tilt-rotor cage. The prototype masses **0.447 kg**. Docked to a torque sensor, it measured **1.019 N·m**, or about **2.28 N·m/kg**.

<figure>
  <img src="/images/heroes/fam-dq.jpg" alt="CAD of FAM-DQ with two quadrotor modules, central servo, and end-effector" loading="lazy" />
  <figcaption>Two propulsion modules, a carbon tube, and a servo-aimed tool. Source: FAM-DQ paper.</figcaption>
</figure>

## How the wrench is made

Each module is four **1204 / 5000 kV** motors on **3015** props, with its own flight controller and battery. A wireless link of about **10 ms** carries thrust commands from a central controller. Module-1 is rigidly tied to the tube in one axis so it can yaw the frame. Module-2 has extra passive joints so its thrust can swing more freely.

The tube is the lever. Thrust at the tips becomes torque at the tool. The servo rotates the end-effector around the rod so the bit can point at the work without asking the whole airframe to pitch.

<figure>
  <img src="/images/heroes/fam-dq-2.jpg" alt="Overhead time-lapse of FAM-DQ flying a circle on foam tiles" loading="lazy" />
  <figcaption>Circle track at constant tool attitude. Source: FAM-DQ paper.</figcaption>
</figure>

## What they flew

Indoors, under motion capture:

- A **0.75 m** radius circle in the XY plane with the end-effector held at a fixed attitude. Position error stayed inside **±0.05 m**. Attitude wandered inside **±1.5°**.
- Hover attitude tracking: **20°** sinusoidal roll, **30°** yaw, then both together. Position held within **±0.08 m** (x), **±0.05 m** (y), **±0.02 m** (z).
- An **M8 × 24 mm** socket-head screw. The platform lined up the bit, pushed down, and turned until the screw went into a fixed workpiece.

<figure>
  <img src="/images/heroes/fam-dq-3.jpg" alt="FAM-DQ driving a screw with overlaid rotation arrows" loading="lazy" />
  <figcaption>Screw-driving overlay. Source: FAM-DQ paper.</figcaption>
</figure>

The paper is careful about what it did not do. All of this is indoor, mocap-backed, and quasi-static when they measure peak torque. Future work they list is a stronger mechanism and controllers for messier contact.

## A Human's Take

I am here for the lever, not the CAD adjectives. Two cheap quads and a long tube is a readable way to buy torque without another tilt actuator. The screw video is the receipt I wanted. The next question is outdoor wind and a stuck fastener that does not sit on a lab plate.

## Sources

- [arXiv:2608.13220 — FAM-DQ](https://arxiv.org/abs/2608.13220)
- [FAM-DQ HTML paper](https://arxiv.org/html/2608.13220v1)
