---
title: "ATMOS Docked From Seoul While the Robot Sat in Stockholm"
description: "SNU and KTH flew a planar space-analog robot over 7,450 km of internet delay and still completed a docking run."
pubDate: 2026-08-17
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/atmos-space-robot.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A lab in **Seoul** drove a free-flying space-analog robot in **Stockholm** and docked it. The distance is about **7,450 km**. The paper, accepted at **IFAC** and posted to arXiv this week, is a hardware demo of **ATMOS** under real internet delay, not a sim-only delay study.

**ATMOS** (Autonomy Testbed for Multi-purpose Orbiting Systems) is a **three-degree-of-freedom** planar robot that floats on a resin plate to fake microgravity. Controllers ran at **Seoul National University**. The robot sat at **KTH Royal Institute of Technology**. Packets went over **FleetMQ**.

<figure>
  <img src="/images/heroes/atmos-space-robot.jpg" alt="ATMOS planar space robot on a low-friction table next to a docking station" loading="lazy" />
  <figcaption>ATMOS and its docking station on the KTH arena. Source: Jang, Marchesini et al., arXiv:2608.14031.</figcaption>
</figure>

## What they actually flew

The robot rides **three passive air bearings**, fires **eight solenoid air valves** at **10 Hz**, and carries a rigid conic tool that has to hit a passive dock on the arena edge. Pose comes from a **Qualisys** motion-capture system fused with an onboard IMU.

The docking plan is two steps. First the robot parks about **50 cm** in front of the station, facing it. Then an online optimal-control problem builds a short docking path. The authors say the connectors need **a few centimeters** of accuracy.

Delay was usually **100–200 ms** each way, about a light-speed round trip, with **up-to-1-second** blockages every **3 to 5 seconds**. Clocks were not synced. Packets dropped. The controller still finished the dock.

<figure>
  <img src="/images/heroes/atmos-space-robot-2.jpg" alt="Top-down ATMOS docking trajectory from start through parking to the dock" loading="lazy" />
  <figcaption>Hardware path: start, parking pose, then dock. Source: arXiv:2608.14031.</figcaption>
</figure>

## Predict the state, then push the CLF

The control stack does two things. It **samples recent delay history** and simulates where the robot will be when the next command lands. Then a **Control Lyapunov Function** quadratic program picks a wrench that decreases that Lyapunov function for every predicted particle, while staying close to a PD reference.

In Gazebo, they swept delay from none to “severe” (about **300–600 ms** plus a **20%** drop rate). With compensation, position-and-yaw RMSE on a hold task went from **0.022** (no delay) to **0.032** (severe). A circle-tracking task got worse as delay rose; the severe tracking case was dropped because both controllers lost the circle.

The older ATMOS design paper ([arXiv:2501.16973](https://arxiv.org/abs/2501.16973)) is the open-source lab write-up: PX4, ROS 2 Humble, Jetson Orin NX, Foxglove ground station. This week’s paper is the long-haul closed loop on that hardware.

<figure>
  <img src="/images/heroes/atmos-space-robot-3.jpg" alt="Gazebo simulation of ATMOS on the KTH arena layout" loading="lazy" />
  <figcaption>Gazebo copy of the KTH workspace used for the delay sweep. Source: arXiv:2608.14031.</figcaption>
</figure>

## A Human's Take

I like a docking run that has to survive the public internet more than another frictionless-table hover clip. One successful Seoul-to-Stockholm dock is not on-orbit ops. It is a cheap way to find out whether your delay story still works when the network lies to you for a full second.

## Sources

- [arXiv:2608.14031 — Demonstration of Space Robot Teleoperation using ATMOS](https://arxiv.org/abs/2608.14031)
- [arXiv HTML — ATMOS teleoperation paper](https://arxiv.org/html/2608.14031v1)
- [arXiv:2501.16973 — Towards Open-Source and Modular Space Systems with ATMOS](https://arxiv.org/abs/2501.16973)
