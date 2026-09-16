---
title: "RECAL Teaches a Blind Digit Controller to Sidestep Clutter"
description: "Oregon State wraps Digit V3’s whole-body controller with a point-cloud layer that trades tracking for collision-free motion."
pubDate: 2026-09-16
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/recal-wbc.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most humanoid whole-body controllers track a target and keep the robot upright. They do not see the shelf, the doorframe, or the box in the robot’s hands. **Mohitvishnu S. Gadde**, **Ashish Malik**, **Pranay Dugar**, **Aayam Kumar Shrestha**, and **Alan Fern** at Oregon State’s CoRIS Institute posted a paper on 14 September that wraps that kind of controller with a layer they call **RECAL** — Robot–Environment Cross-Attention Layer.

The stack still uses the team’s pre-trained Masked Humanoid Controller as the base. RECAL sits in front of it, looks at an egocentric point cloud, and rewrites the command when the commanded motion would hit something.

<figure>
  <img src="/images/heroes/recal-wbc.jpg" alt="System diagram of RECAL teacher training, student distillation, and Digit deployment with a carried box" loading="lazy" />
  <figcaption>Privileged teachers, a shared student, and a Digit-style body with query points on a carried box. Source: Gadde et al., arXiv:2609.16405, Figure 1.</figcaption>
</figure>

## What the layer actually changes

A target command can mix planar base velocity, turn rate, base orientation, and left and right hand positions. A freeze flag tells the controller whether the hands must stay put while the robot walks. RECAL turns that into a modified command the frozen WBC can execute: planar velocity, turn rate, orientation, and eight arm joint targets, four per Digit V3 arm.

Geometry comes in as point clouds. The environment cloud is from onboard depth. The robot and any held object are represented by a fixed set of **37** query points: 13 body keypoints from forward kinematics, 8 corners of a cuboid for a two-handed load, and 16 corners for the two end-effectors. Those queries attend into the scene cloud. An LSTM then emits the corrected WBC command.

Training is teacher–student. A control-barrier-style teacher patches locomotion and carrying using privileged obstacle geometry. A PPO teacher patches stationary reaching into cabinets and shelves. One student imitates both from deployable observations.

## Numbers, then hardware

On medium-difficulty adaptive-arm locomotion, collision-free success is **0.93** for RECAL versus **0.38** for the blind WBC and **0.97** for the privileged teacher. On the hard split it is **0.91** versus **0.32**. Frozen-arm walking, box carrying, and reaching with a held object follow the same pattern: RECAL stays close to the teacher and beats PointNet and voxel encoders, especially in tight shelves.

<figure>
  <img src="/images/heroes/recal-wbc-2.jpg" alt="Simulation sequence of a Digit-like humanoid carrying a yellow box as hand queries attend to a nearby wall" loading="lazy" />
  <figcaption>Hand queries light up nearby geometry as Digit carries a box past a wall. Source: arXiv:2609.16405, Figure 3.</figcaption>
</figure>

The paper also reports contact-force averages on the hardest settings. The blind controller takes harder torso hits. RECAL nearly drops torso collisions; leftover contacts sit on the arms and at lower force.

On a physical **Digit V3**, two Intel RealSense D455 cameras sit near chest and pelvis height. Inference runs on a Ryzen 9 9950X plus an RTX 5090, with PD commands sent over UDP. The authors say they ran all five task families on the real robot: adaptive-arm and frozen-arm walking, carrying, standing reach, and reaching with an object. They also note a few light contacts. The HTML paper does not include a hardware photograph.

The work is submitted to IEEE-RAS Humanoids 2026. Funding listed on the paper includes NSF award 2321851, a DARPA contract, and NVIDIA’s academic grant program.

## A Human's Take

I like this more than another end-to-end “see and walk” policy. Keep the controller that already balances on Digit. Teach a thin layer to flinch when the command would clip a shelf. That is how you put teleop and learned skills in a warehouse aisle without asking the operator to steer every elbow. The honest limit is right there in the paper: static, flat floors, no functional contact, and cuboid proxies instead of real payloads. If the next revision ships a hardware still of Digit actually threading a doorway, I’ll be more convinced the sim table survived the lab.

## Sources

- [Gadde, Malik, Dugar, Shrestha, Fern — Collision-Aware Humanoid Whole-Body Control (arXiv:2609.16405)](https://arxiv.org/abs/2609.16405)
- [Paper HTML with figures](https://arxiv.org/html/2609.16405)
