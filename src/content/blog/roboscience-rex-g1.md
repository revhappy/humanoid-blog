---
title: "RoboScience’s REX G1 Fits a 0.75-Meter Aisle and Swaps Batteries in 5 Seconds"
description: "Beijing’s RoboScience debuts the wheeled REX G1 at WRC: 22 DoF, 10 kg dual-arm load, 2,070 TFLOPS, hot-swap in five seconds."
pubDate: 2026-08-23
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/roboscience-rex-g1-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**RoboScience** showed its first robot, the wheeled humanoid **REX G1**, at WRC 2026. Gasgoo says the booth act was a one-to-two-minute conducting routine with a baton. The spec sheet is the actual story.

Interesting Engineering, writing from the August 17 launch, puts the company in Beijing and the jobs in logistics, manufacturing, retail, and homes. The machine is not meant to live at one workstation.

<figure>
  <img src="/images/heroes/roboscience-rex-g1-2.jpg" alt="Side view of the white REX G1 wheeled humanoid with glowing green joint rings" loading="lazy" />
  <figcaption>REX G1 product still. Source: RoboScience via Interesting Engineering.</figcaption>
</figure>

## Fit the building you already have

Gasgoo and IE agree on the body:

- **22 degrees of freedom**: 2 head/neck, 7 per arm, 2 waist, 1 lift, 3 chassis
- Dual-arm hold: **10 kg**
- Width **540 mm**; length **540–640 mm**; height **1,100–1,700 mm**
- Work height **0.1–2.0 m**
- Narrow-aisle claim: **0.75 m**, omnidirectional, no extra turning pocket
- Repeatability: **±0.1 mm**
- Endurance: up to **4 hours**, hot-swap, back to work in as little as **5 seconds**

IE adds 360-degree stereo vision, adaptive lighting for film-wrapped shelves, a matte shell, rounded edges, and an e-ink status screen. Quick-release panels are supposed to let you service it without a teardown.

That is a warehouse argument: do not rebuild the aisle for the robot.

<figure>
  <img src="/images/heroes/roboscience-rex-g1.jpg" alt="Four-panel product art of REX G1 in warehouse, retail, factory, and kitchen scenes" loading="lazy" />
  <figcaption>RoboScience’s own scene grid: logistics, retail, factory, home. Source: RoboScience via Gasgoo.</figcaption>
</figure>

## Visics on the edge

Onboard compute is **2,070 TFLOPS**. The model is **Visics**, described as a Vision-Language-Object-Action stack. Gasgoo splits it into an embodied world model that simulates 3D object trajectories and a manipulation model that turns those trajectories into joint commands. The company says the split is how you reuse the same “brain” on new objects and new bodies.

IE says edge inference is there to cut cloud round-trips when the scene changes mid-grasp. A second visual check of bin codes after the pick is the factory-flavored detail.

## A Human's Take

Five-second battery swaps and a 540 mm width are the numbers I can argue about on a plant tour. Conducting with a baton is not. If REX G1 actually stays in a 0.75-meter aisle for a shift, RoboScience built a logistics machine. If the 4-hour pack only lasts through a keynote, we have another booth bot.

## Sources

- [Gasgoo — WRC 2026 | RoboScience REX G1 Wheeled Humanoid Debuts](https://autonews.gasgoo.com/articles/news/wrc-2026-roboscience-rex-g1-wheeled-humanoid-general-purpose-robot-debuts-2090696947894865921)
- [Interesting Engineering — REX G1: 22 degrees of freedom and 5-second battery swap](https://interestingengineering.com/ai-robotics/chinas-humanoid-robot-packs-freedom)
