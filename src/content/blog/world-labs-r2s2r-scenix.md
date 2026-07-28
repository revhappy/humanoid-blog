---
title: "World Labs Shows R2S2R: Train Robot Policies With Zero Real Data"
description: "After buying SceniX, Fei-Fei Li’s World Labs demos real-to-sim-to-real policies that run an hour on hardware."
pubDate: 2026-07-28
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/world-labs.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**World Labs** — Fei-Fei Li’s spatial-intelligence company — just published early results from a **real-to-sim-to-real (R2S2R)** engine built with the team from **SceniX**, which joined World Labs on **July 21, 2026**. The July 28 technical post is unusually blunt for a research lab: policies trained **entirely in simulation**, with **zero real-world training data**, transferring to physical robots and running **autonomously for about an hour** on several tasks.

If that holds up outside the blog, it is one of the more practical robotics breakthroughs of the summer.

## What R2S2R Is Trying to Fix

Robot learning is slow because experience is expensive. Reset the scene, fix the grasp, burn hardware time. World Labs argues the bottleneck is not only model architecture (VLAs, world-action models) but **scalable experience and evaluation**.

R2S2R has two halves:

1. **Real-to-Sim** — Capture a physical task (robot, sensors, objects, demos) and rebuild it as an interactive simulation that preserves **appearance and dynamics** that matter for the task.
2. **Sim-to-Real** — Train and stress-test policies in that world, then deploy on hardware when simulation rankings predict real rankings.

The claim is the closed loop: find weak spots in sim, generate more experience, improve the policy, *then* spend scarce robot hours.

## What They Showed

Examples from the [World Labs post](https://www.worldlabs.ai/blog/real-to-sim-to-real) include:

- **Bimanual box packing** on **ALOHA** — policy trained with zero real data, transferred open-loop-aligned worlds
- **Cable / power-cord routing** on **YAM** and **RB-Y1** — deformable contact, hour-long autonomous runs
- **Test-tube transfer** on **Flexiv** and **marker/pencil singulation** on **xArm** — also claimed hour-long autonomy
- Evaluation on cube handover where **simulation preserves policy ranking** vs **100 real trials** per checkpoint (50 in-distribution, 50 OOD), against **2,000 sim trials**

They also show matched near-failure and failure behaviors between sim and reality — important if you want sim to be a filter, not a pretty video.

## Why SceniX Matters Here

SceniX was building systems that turn real robots and environments into simulations for training and eval. World Labs’ acquisition post frames robotics as spatial intelligence made physical: perceive, predict, act. R2S2R is the first public technical dump of that bet.

## A Human's Take

I have watched enough sim-to-real demos die on a soft cable. If World Labs can keep “zero real training data → hour of real autonomy” as a repeatable product for outside robots, not only lab benches, that changes the cost of iterating manipulation. The charts that rank policies the same way in sim and on metal are the part I trust more than any single packing video. Demand third-party replications.

## Sources

- [World Labs — Building Worlds That Train Robots (R2S2R)](https://www.worldlabs.ai/blog/real-to-sim-to-real)
- [World Labs — Acquires SceniX](https://www.worldlabs.ai/blog/scenix)
- [Fei-Fei Li — related R2S2R discussion on X](https://x.com/drfeifei/status/2082137339430859021)
