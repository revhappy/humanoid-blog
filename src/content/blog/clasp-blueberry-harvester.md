---
title: "CLASP Rolls Ripe Blueberries Off the Cluster, Leaves Green Ones"
description: "Georgia Tech’s $3,326 cluster picker uses rolling silicone bands and current-limited pull to harvest 23 of 25 field clusters."
pubDate: 2026-09-17
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/clasp-blueberry-harvester.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Fresh-market blueberries ripen on the same stem at different times. Shake-and-catch machines bruise **16–26%** of fruit versus **1–4%** for hand picking, which is why those machines stay on the processing side. Per-fruit robot pickers also fight cluster geometry: berries are small, packed, and occlude each other.

**CLASP** (Cluster-Level Autonomous Selective Picking) is Georgia Tech’s answer, with University of Georgia and University of Florida co-authors. A paper dated 16 September describes a **Soft Active Rolling-Band Gripper** that wraps a cluster and rolls ripe berries off while a current loop keeps pull below the green-berry detachment force. End-to-end field trials grasped **23 of 25** presented clusters (**92%**). Parts cost about **$3,326**.

<figure>
  <img src="/images/heroes/clasp-blueberry-harvester.jpg" alt="Field photo of a wheeled blueberry harvester with a long arm and net, plus CAD callouts of the gripper and electronics" loading="lazy" />
  <figcaption>CLASP in the row, CAD, and gripper stack. Source: Xia, Cai et al., arXiv:2609.18051, Figure 1.</figcaption>
</figure>

## Bands, not fingers on one berry

The gripper copies a picker who uses a thumb to roll berries against the stem while the other hand catches. Two Dragon Skin 20 silicone bands, each driven by a Dynamixel XC330 through a 0.6:1 gear, close around the cluster. Finger opening is **100 mm**; band contact length is **100 mm**. A net between two aluminum rods catches what comes off. An Intel RealSense D435 sits above the gripper.

There is no force/torque sensor. Finger motors run current-based position control. Unloaded current is calibrated, then a threshold plus a sliding average detect contact. During harvest an adaptive baseline tracks the load so the fingers nibble open and closed around the threshold at **50 Hz** while the bands roll. Commanded pulling force matched a Nano17 sensor to within **3.7%**. Field clipper tests confirmed a detachment-force gap between mature and immature fruit.

<figure>
  <img src="/images/heroes/clasp-blueberry-harvester-2.jpg" alt="Human hands picking a blueberry cluster next to diagrams of rolling-band fingers drawing berries off a stem into a net" loading="lazy" />
  <figcaption>Human cue, rolling-band kinematics, and the four-step harvest sequence. Source: arXiv:2609.18051, Figure 2.</figcaption>
</figure>

## Arm and eyes

The manipulator is a 6-DoF **RRPRRR** chain: stepper azimuth and elevation (self-locking worm on elevation), a prismatic reach from **937 mm to 1333 mm**, then a three-axis Dynamixel wrist. A ZED 2 does global cluster search. The D435 does close-range pose. YOLO26n, trained on a 672-image multi-season set from Mississippi and Georgia farms, detects mature vs immature berries. On the held-out test split, mAP50 is **0.767**. Harvest stop uses either motor current falling back toward unloaded, or a vision count of remaining ripe berries.

The paper is honest about missed detections: **20%** of mature berries and **25%** of immature ones go to background on a single frame, so the controller takes the max count over several frames before it quits a cluster.

## A Human's Take

Selectivity in the contact, not in a bounding box, is the right fight for this crop. 92% of 25 clusters is a small field card, but the 3.7% force tracking and the $3,326 BOM are the kind of numbers a farm can argue with. Next I want bruise rates on the berries that actually went in the net, next to a hand-picked tray.

## Sources

- [Xia, Cai et al. — CLASP (arXiv:2609.18051)](https://arxiv.org/abs/2609.18051)
- [Paper HTML with figures](https://arxiv.org/html/2609.18051)
