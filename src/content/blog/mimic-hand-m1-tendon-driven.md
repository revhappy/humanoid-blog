---
title: "Mimic Hand M1: Swiss Tendon Hand Built for Factory AI"
description: "Mimic Robotics’ M1 packs 15 active DoF, >25 kg power grasp, and sub-0.05 Nm backdrive torque, with a matching U1 wearable for human demos."
pubDate: 2026-08-10
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/mimic-hand-m1-tendon-driven.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Swiss startup **Mimic Robotics** unveiled the **mimic hand M1**, a tendon-driven industrial hand with actuators in the forearm and a matching wearable for collecting human demonstrations. Company blog and Interesting Engineering coverage put the design squarely on factory dexterity, not lab theater.

The M1 is five-fingered, made in Switzerland, and sold as part of a full stack: hand hardware, the **U1 (“umimic”)** exoskeleton, and in-house real-time middleware.

<figure>
  <img src="/images/heroes/mimic-hand-m1-tendon-driven.jpg" alt="Pair of Mimic robotic hands in mesh gloves manipulating a small object" loading="lazy" />
  <figcaption>Mimic hands in mesh work gloves handling a small object. Source: Interesting Engineering / Mimic YouTube.</figcaption>
</figure>

## Specs that matter

From Mimic’s product announcement:

| Spec | M1 claim |
|------|----------|
| **Active DoF** | 15 actuated + 6 coupled = **21 total** |
| **Payload** | **> 25 kg** steady-state cylindrical power grasp |
| **Fingertip force** | **25 N** (stretched out) |
| **Backdrive** | **< 0.05 Nm** (senses ~**50 g** via motor current) |
| **Force sensitivity** | **< 0.1 N** (dual encoders) |
| **Position accuracy** | **± 0.18 mm** (closed loop, joint encoders) |
| **Tactile tips** | Normal force, tangential shear, multi-point contact |
| **Weight** | About **1.8 kg** (4 lb) per Interesting Engineering |

Tendons run over **bearings and pulleys**, not Bowden tubes, to keep friction low and predictable across wrist angles. Mimic widened the wrist/forearm relative to human anatomy so the routing stays linear behind a wrist camera.

Interesting Engineering also notes a YouTube launch clip ([ikjPRgE8WLM](https://www.youtube.com/watch?v=ikjPRgE8WLM)).

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/ikjPRgE8WLM"
    title="Mimic Hand M1 announcement"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Mimic Hand M1 launch footage. Source: Mimic Robotics / YouTube.</p>

## Why the wearable exists

The **U1** passively couples a human hand to M1-matched kinematics (14 tracked + 6 coupled DoF). Sensors and a wrist camera sit in the same places as on the robot, so demos share morphology with deployment. Mimic’s argument: pre-train on human video, mid-tier wearable data, top-tier robot teleop—without jumping from human fingers to a two-finger gripper mid-pipeline.

They also ship **mimic-ipc**, a zero-copy real-time bus they claim hits ~**89 ns** median latency on HD image payloads between processes—orders of magnitude under ROS2 FastDDS in their own charts.

<figure>
  <img src="/images/heroes/mimic-hand-m1-tendon-driven-2.png" alt="Mimic data pyramid for human video, wearable, and robot teleop" loading="lazy" />
  <figcaption>Mimic’s data pyramid: human video at the base, wearable in the middle, robot teleop at the top. Source: Mimic Robotics blog.</figcaption>
</figure>

## A Human's Take

I’m so here for a hand that treats force sensing as a first-class design requirement instead of a fingertip sticker after the fact. Sub-0.05 Nm backdrive plus a matched wearable is the kind of boring infrastructure that makes imitation learning less of a retargeting nightmare. Next receipt I want: cycle-time and failure rates on a real shift, not just another desk-demo power grasp.

## Sources

- [Mimic Robotics — Solving Dexterity: A Full-Stack Approach](https://www.mimicrobotics.com/blog/solving-dexterity-a-full-stack-approach)
- [Interesting Engineering — Startup unveils Mimic Hand M1](https://interestingengineering.com/ai-robotics/startup-unveils-mimic-hand-m1)
- [YouTube — Mimic Hand M1](https://www.youtube.com/watch?v=ikjPRgE8WLM)
