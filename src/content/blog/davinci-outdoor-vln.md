---
title: "DaViNCi Makes Street Navigation Continuous — and the Cars Move"
description: "SJTU’s CARLA dataset has 6,933 outdoor routes with live traffic. Success drops more than 10 points versus older static street graphs."
pubDate: 2026-08-16
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/davinci-outdoor-vln.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Outdoor vision-and-language navigation still mostly hops between frozen Street View nodes. **DaViNCi** (Dynamic Vision-and-Language Navigation in Continuous Environment) is an SJTU dataset that drops that graph. The agent drives a continuous path in **CARLA** while other cars and pedestrians do their own thing.

Paper: **arXiv:2608.11901** (12 August 2026). Project page: **xzh0312.github.io/DaViNCi**. Authors: Zihao Xie, Pingrui Lai, Yitong Wu, Hua Yang.

<figure>
  <img src="/images/heroes/davinci-outdoor-vln.jpg" alt="Diagram comparing static discrete VLN waypoints to DaViNCi continuous changing views" loading="lazy" />
  <figcaption>Old outdoor VLN: same panorama at a node. DaViNCi: the view changes while you drive. Source: arXiv:2608.11901.</figcaption>
</figure>

## What is in the bag

Six CARLA maps, **6,933** trajectories. Counts from the paper: town01 **969**, town02 **765**, town03 **930**, town04 **463**, town05 **951**, town10 **2,855**. Paths are mostly **200–800 m**. Waypoints are logged every **1 s** from a free-roaming autopilot, then cleaned for collisions and traffic-law fails.

Instructions come from a two-stage pipeline: fit turns from the trajectory, then **Qwen 3-VL-Plus** (project page) writes landmark language, with manual edits. The paper’s example reads like a real set of directions: sculpture, Coca-Cola board, stone buildings, striped awnings, stop sign, neoclassical pile.

At test time they spawn extra traffic. Default continuous setup: **30** vehicles and **30** pedestrians.

<figure>
  <img src="/images/heroes/davinci-outdoor-vln-2.jpg" alt="DaViNCi dataset overview of six towns, traffic cases, and an example route" loading="lazy" />
  <figcaption>Maps, traffic cases, and one annotated route. Source: arXiv:2608.11901.</figcaption>
</figure>

## How hard is it

They discretized four maps to look like **Touchdown**. Methods such as VELMA and FLAME land roughly **30–40%** success. The authors say that is more than **10** points worse than the same methods on Touchdown / Map2Seq.

In the continuous world they train **COVL-RL**, a PPO agent with a 10 m lookahead distance reward and a **+100 / −100** destination bonus. Random walking almost never finishes. Their agent completes some routes; unseen maps are worse than town10. Adding more dynamic actors drops success. Changing step size among **3 / 4 / 5 m** barely moves the needle.

<figure>
  <img src="/images/heroes/davinci-outdoor-vln-5.png" alt="Side-by-side previous datasets versus DaViNCi continuous dynamic path" loading="lazy" />
  <figcaption>Project-page version of the same comparison. Source: DaViNCi project site.</figcaption>
</figure>

## A Human's Take

If your outdoor navigator only works on a frozen graph, you do not have a driver. You have a slideshow. DaViNCi is still CARLA, so the buildings repeat and the pedestrians are dolls. Fine. At least the red car can pull out and steal the landmark you were about to use.

## Sources

- [arXiv:2608.11901 — DaViNCi HTML](https://arxiv.org/html/2608.11901)
- [DaViNCi project page](https://xzh0312.github.io/DaViNCi/)
- [arXiv:2608.11901 — abstract](https://arxiv.org/abs/2608.11901)
