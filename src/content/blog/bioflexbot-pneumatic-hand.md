---
title: "BioflexBot Does Hand Work With a Spring and Two Air Lines"
description: "A coiled-spring pneumatic gripper pinches, rotates, hooks, and grasps without copying finger anatomy."
pubDate: 2026-08-14
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/bioflexbot.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A team in Shenzhen and Nanjing published **BioflexBot** in *Advanced Science* on **August 13**: a soft gripper that pinches, rotates, hooks, and grasps with a coiled spring, a constraining shell, and **two pneumatic inputs**. It does not try to look like a hand.

The Robot Report and a Wiley/EurekAlert briefing picked the paper up the same day. Senior authors are **Yingtian Li** (Chinese University of Hong Kong, Shenzhen / SIAT) and **Yang Yang** (Nanjing University of Information Science and Technology).

<figure>
  <img src="/images/heroes/bioflexbot.jpg" alt="BioflexBot inspecting an aeroengine blade mockup and grasping objects on a humanoid" loading="lazy" />
  <figcaption>Figure 7 from the paper as reprinted by The Robot Report: aeroengine-blade inspection, humanoid grasping, and obstacle-avoiding reach. Source: Advanced Science / The Robot Report.</figcaption>
</figure>

## Functions, not fingers

Most dexterous hands stack joints, tendons, and motors until the controller is as hard as the mechanism. BioflexBot goes the other way. Dual air chambers plus flexible coiled springs give three primitive motions: **extension**, **expansion**, and **contraction**. Those three are enough, the authors argue, for four human-hand modes: finger pinch, rotate, hook, and finger-palm grasp.

> "Unlike most robotic hands that replicate the human form, at high hardware and control costs, our approach focuses solely on mimicking the functions, not the shape," said Yang.

The paper’s headline stretch number is a **7:1** extension-to-contraction ratio, about **3.5 times** a human hand. Wiley’s abstract says the gripper can handle objects **12.9 times** larger than comparable systems with a similar actuator count, and that graspable scale spans **more than 2,300 times** the minimum.

EurekAlert lists the lab checks: an acupuncture needle, a pipette transfer, a bottle cap rotated almost four times farther than a human wrist, plus hooks on a toolbox and goggles.

<figure>
  <img src="/images/heroes/bioflexbot-2.jpg" alt="Humanoid robot using BioflexBot to grasp fruit and a flashlight" loading="lazy" />
  <figcaption>Humanoid integration: direct grasps (fruit, flashlight) and an obstacle-avoiding pick. Source: Advanced Science figure via The Robot Report.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/bioflexbot-3.jpg" alt="BioflexBot reaching around an obstacle in a narrow channel" loading="lazy" />
  <figcaption>Tool-hand integration in a confined channel: approach, then deform around an obstacle. Source: Advanced Science figure via The Robot Report.</figcaption>
</figure>

## Where they put it

The authors show three use cases rather than a product SKU: in-situ inspection of a 3D-printed aeroengine blade array (340 mm endoscope length on the figure), everyday picks mounted on a humanoid, and a chemistry-bench demo. Future work, they say, is a fully automated platform. It is still a prototype.

## A Human's Take

I’m here for any hand that admits it does not need 20 actuators to pick up a flashlight. Two air lines and a spring is a bet I want more labs to take. The stretch ratio is the part I will keep poking: a 7:1 grow-and-shrink limb is a real trick for blade roots and cabinet backs, but only if the same structure still pinches a needle when you put a payload on it. Show me a closed-loop version that chooses the motion without a human on the valves.

## Sources

- [Advanced Science — A Bio-Functional Mimetic Robot for Versatile Tasks from Cross-Scale Manipulation to Limb-Tool Integration](https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.76527)
- [EurekAlert — Could this simple robot outmaneuver a human hand?](https://www.eurekalert.org/news-releases/1139242)
- [The Robot Report — BioflexBot robot hand aims to replicate key human hand motions](https://www.therobotreport.com/bioflexbot-robot-hand-aims-to-replicate-key-human-hand-motions/)
- [Interesting Engineering — China’s BioflexBot stretches 3.5 times more than human hands](https://interestingengineering.com/ai-robotics/china-robotic-gripper-human-hand)
