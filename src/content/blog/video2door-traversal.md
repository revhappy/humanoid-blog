---
title: "One Phone Video, Then a Wheel-Legged Robot Walks Through the Door"
description: "SJTU’s Video2DoorTraversal rebuilds a door from one RGB clip and hits 96.57% real-world traversal in about 13 seconds."
pubDate: 2026-08-21
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/video2door-traversal.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Shanghai Jiao Tong University team posted **Video2DoorTraversal** on 20 August 2026: film a real door with a phone, rebuild it as a simulation twin, then send a wheel-legged manipulator through that door on its own.

The hardware is a **Unitree A2-W** base with a **Unitree Z1** arm and two RealSense D435 cameras (head and wrist). Perception and policy run onboard, including a Jetson Orin NX for vision and arm commands.

<figure>
  <img src="/images/heroes/video2door-traversal.jpg" alt="Wheel-legged robot approaching, opening, and walking through real doors" loading="lazy" />
  <figcaption>Real-world approach, handle, push, and pass-through on several doors. Source: Video2DoorTraversal paper.</figcaption>
</figure>

## DoorTwin, then ArticuACT

**DoorTwin** turns one RGB video into a metric, articulated, simulation-ready door: panel, handle, hinge side, textures. A simulation-in-the-loop agent then writes a skill program (approach, grasp, rotate handle, push, pass, retract) and patches failed rollouts until the sequence is physically executable.

**ArticuACT**, built on action-chunking, predicts coordinated base velocity, yaw, six arm joints, and gripper from dual depth images plus a 99-D robot state. Extra tricks are robot-centric Plücker rays so pixels sit in the same frame as the wheels, and auxiliary predictions of contact, handle rotation, and door angle. Those extras are training-only. They do not change the control interface.

## The numbers that matter

On five real doors, 35 trials each, the policy finished **169 of 175** runs: **96.57%**. Per door: 35/35, 32/35, 35/35, 33/35, 34/35. Vanilla ACT on the same stack sat at **65.71%**. Open-loop replay was **18.29%**.

Average time for approach, open, and walk-through is about **13 seconds**. Zero-shot transfer to three structurally similar unseen doors, with no extra data generation, was **80.95%** (25/35, 31/35, 29/35).

In simulation, full traversal hit **97.27%** against **64.84%** for vanilla ACT. DoorTwin also beat Articraft, Articulate-Anything, and PhysX-Omni on metric scale and mask overlap for 20 real door instances.

<figure>
  <img src="/images/heroes/video2door-traversal-3.jpg" alt="Wrist camera frames of handle contact with plots of velocity and interaction state" loading="lazy" />
  <figcaption>Handle contact, then door angle, then forward speed as the robot commits to the doorway. Source: Video2DoorTraversal paper.</figcaption>
</figure>

The authors are explicit about the hole: this is **push** doors. Pull doors, other handle types, and weirder geometry are listed as future work.

## A Human's Take

Filming the actual door instead of hoping a generic asset is close enough is the part I would steal. Thirteen seconds through a doorway is a useful clip. I will care more when the same stack pulls the door toward itself and does not eat the frame.

## Sources

- [arXiv:2608.20251 — Video2DoorTraversal](https://arxiv.org/abs/2608.20251)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.20251v1)
- [Project page — videos and real-door results](https://video2doortraversal.github.io/)
