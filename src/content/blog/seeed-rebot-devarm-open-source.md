---
title: "Seeed’s reBot Arm Opens the Full CAD, BOM, and LeRobot Stack"
description: "reBot-DevArm ships 6+1 DoF arms with open hardware, ROS2, and LeRobot; DM kit lists around $1,799 assembled."
pubDate: 2026-08-11
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/seeed-rebot-devarm.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most “open” robot arms stop at a partial CAD dump and a half-finished ROS package. **Seeed Studio’s reBot-DevArm** is pushing harder: sheet-metal and 3D-print sources, screw-level BOMs with purchase links, Python SDK, ROS1/2, Pinocchio, LeRobot, and Isaac Sim support — all in the public GitHub repo and wiki.

The product line is **reBot Arm B601**, in two motor families that share the same outward look: **B601-DM** (Damiao, 24 V) and **B601-RS** (Robostride, 48 V). Both are **6 DoF plus gripper**.

<figure>
  <img src="/images/heroes/seeed-rebot-devarm.jpg" alt="Seeed reBot Arm industrial design render" loading="lazy" />
  <figcaption>reBot Arm product render from Seeed’s open-source project materials. Source: Seeed-Projects/reBot-DevArm on GitHub.</figcaption>
</figure>

## Specs and kit paths

From the project README hardware table:

| | **B601-DM** | **B601-RS** |
|--|-------------|-------------|
| **Payload** | 1.5 kg | 2.5 kg |
| **Max reach** | 767 mm | 754 mm |
| **Weight** | ~4.5 kg | ~6.7 kg |
| **Repeatability** | &lt; 0.2 mm | &lt; 0.2 mm |
| **Supply** | DC 24 V | DC 48 V |

Seeed’s store lists an assembled **B601-DM** (without power supply) at **$1,798.80** as of this fetch, with multi-unit discount steps. Kits range from motors-only and structure-only up to pre-assembled arms with gripper; power bricks and C-clamps are intentionally optional so people can use batteries or custom bases. A **Star Arm 102** leader arm is sold for teleop. Hardware is under CERN-OHL-W-2.0-style open hardware licensing with Apache-2.0 software badges on the repo; commercial use paths are called out on the storefront and README.

## Software that is actually finished

Roadmap tables on GitHub mark **Python/MotorBridge**, **ROS2** (kinematics, trajectory planning, gravity compensation), **Pinocchio**, **LeRobot**, depth-camera grasp demos, and voice control with reSpeaker as completed for DM; RS adds **Isaac Sim** as completed. Community contributions include diagnostics overlays, safe park-on-shutdown, and gamepad IK teleop packages. The wiki walks assembly video steps, motor CAN ID programming, and MotorBridge studio install on Windows, Ubuntu, and macOS.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/ONbpv3seiG8"
    title="About the reBot Arm"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Official reBot Arm overview. Source: Seeed reBot-DevArm GitHub / YouTube.</p>

<figure>
  <img src="/images/heroes/seeed-rebot-devarm-2.jpg" alt="reBot arm grasping fruit in a community demo" loading="lazy" />
  <figcaption>Community grasp demo shared in the reBot-DevArm repository. Source: Seeed-Projects/reBot-DevArm.</figcaption>
</figure>

## A Human's Take

I like when the open-source claim survives a BOM audit. Screw links, motor IDs, and a leader-arm SKU are the receipts that separate a real developer platform from a render and a Discord. Payload and reach are desktop-class, not factory-class, and that is fine if the goal is LeRobot data and classroom cells. What I will watch is whether the dual motor lines stay software-compatible as Isaac and LeRobot move, and whether Seeed keeps the unassembled path cheap enough that students still build instead of only unbox.

## Sources

- [GitHub — Seeed-Projects/reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)
- [Seeed store — reBot Arm B601-DM](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html)
- [Seeed wiki — reBot Arm B601-DM quick start](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/)
- [YouTube — About the reBot Arm](https://www.youtube.com/watch?v=ONbpv3seiG8)
