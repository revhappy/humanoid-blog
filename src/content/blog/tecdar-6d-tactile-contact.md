---
title: "TECDAR Localizes Tool Collisions With a Tiny 6D IMU in the Gripper Tip"
description: "HUMIT Lab's TECDAR uses a 2.5×3 mm 6D IMU at 7 kHz to detect and range extrinsic contacts on grasped objects within about 180 ms at ~7 mm accuracy."
pubDate: 2026-08-10
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/tecdar-tactile.jpg"
readTime: "5 min read"
featured: false
draft: false
---

When a grasped tool scrapes a surface, humans feel it in the hand. Most robot grippers only notice after the whole arm is already in the wrong place.

**TECDAR** — transient extrinsic contact detection and ranging — is a method from Zheng, Wu, Liu, Li, and Shao (HUMIT Lab / HIT Shenzhen) on arXiv:2608.07075 (submitted Aug 7, 2026). Project page: [humitlab.github.io/TECDAR](http://humitlab.github.io/TECDAR/).

<figure>
  <img src="/images/heroes/tecdar-tactile.jpg" alt="TECDAR system overview with gripper tip IMU sensing" loading="lazy" />
  <figcaption>System overview for transient extrinsic contact detection and ranging. Source: arXiv:2608.07075.</figcaption>
</figure>

## Sensor that fits in a tip

The gripper tip design uses **dynamic tactile sensing** from a single **2.5 × 3 mm 6D inertial measurement unit**:

- **7 kHz** sampling of tip deformations
- data stream only about **84 KB/s**
- fusion of tactile signals with robot pose through an **extended Kalman filter**

That bandwidth is the point. High sample rate, small packet size, fast enough to catch sub-millisecond tip events that a 100 Hz vision loop will miss.

<figure>
  <img src="/images/heroes/tecdar-tactile-3.jpg" alt="Fabrication process for TECDAR gripper tip sensor" loading="lazy" />
  <figcaption>Fabrication / tip assembly process. Source: arXiv:2608.07075.</figcaption>
</figure>

## Numbers

Reported results from the abstract and paper:

- localization to **millimeter-level accuracy within 180 ms**
- average localization accuracy about **7 mm** on line-contact and point-contact tasks
- enables millisecond-scale trajectory correction for tool use and tactile exploration / mapping

Demo stills cover pens, paper cutters, books — contact ranging while the object is already grasped, not free-space force sensing.

<figure>
  <img src="/images/heroes/tecdar-tactile-2.jpg" alt="Real-world pen contact localization experiment" loading="lazy" />
  <figcaption>Real-world pen contact experiment. Source: arXiv:2608.07075.</figcaption>
</figure>

## A Human's Take

I like cheap, fast sensors that answer one question well: *where on the tool did the world hit me?* Dense tactile skins are great research; a 6D IMU in the tip is something you can actually fit on a product gripper without a second power budget. If 7 mm and 180 ms hold under oily shop parts, this is the kind of extrinsic-contact stack assembly cells have been missing.

## Sources

- [arXiv:2608.07075 — Detection and Ranging of Transient Extrinsic Contacts Based on 6D Dynamic Tactile Sensing](https://arxiv.org/abs/2608.07075)
- [arXiv HTML full text](https://arxiv.org/html/2608.07075v1)
- [TECDAR project page](http://humitlab.github.io/TECDAR/)
