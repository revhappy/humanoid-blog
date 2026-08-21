---
title: "Unitree’s R1 Arm: 7 Axes, 5.5 kg, From $1,650"
description: "Unitree lists a desktop 7-axis R1 arm at $1,650 / 9,900 yuan, 2 kg payload, 650 mm reach, with force feedback and open interfaces."
pubDate: 2026-08-21
category: "Deals"
author: "Shar Hendrix"
heroImage: "images/heroes/unitree-r1-arm.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Unitree put a **bionic 7-axis arm** on the shop floor. The English product page prices the **R1 Robotic Arm** from **$1,650**. IT Home, writing August 20, lists the China price at **9,900 yuan** and calls the model R1.

This is an arm, not a new humanoid. Desktop class, **5.5 kg**, plug-and-play, aimed at labs, teaching benches, and small cells.

<figure>
  <img src="/images/heroes/unitree-r1-arm.jpg" alt="Unitree R1 seven-axis arm picking a circuit board over a conveyor" loading="lazy" />
  <figcaption>R1 arm on a bench cell in Unitree’s product imagery. Source: Unitree Robotics.</figcaption>
</figure>

## What the spec sheet says

Unitree’s product page lists:

- **DoF**: 7-axis  
- **Payload**: 2 kg  
- **Max reach**: 650 mm with a dexterous hand  
- **Mass**: 5.5 kg  
- **Power**: 24–60 V  
- **Interfaces**: XT30 + CAN/485  
- **OS**: Ubuntu  
- **Control**: position / force, with force feedback and collision detection  
- **Joint max speed**: more than 180°/s on every axis  

IT Home, citing Unitree materials, adds **repeat positioning accuracy of about 0.1 mm**. That number is not on the English spec table I fetched.

The page is unusually honest about stiffness. Because the joints use a relatively low reduction ratio, positional-control stiffness is limited. Without a well-tuned controller, Unitree says you can get position error and oscillation. That is a real constraint, not brochure fog.

Unitree also says control programs and interfaces will be **open-sourced iteratively**, and that end effectors swap at the tip.

<figure>
  <img src="/images/heroes/unitree-r1-arm-2.jpg" alt="Unitree R1 arm on a desk next to a laptop" loading="lazy" />
  <figcaption>Desktop R1 with a gripper. Source: Unitree Robotics.</figcaption>
</figure>

## Where Unitree wants it

The English page sketches three uses: dual-arm sorting and assembly, self-maintenance moves on a robot body, and household-task mockups for service-robot research. IT Home maps four buckets: lab automation (pipetting, sorting), industrial dual-arm assembly, mobile-platform chores like opening a door, and service-robot demos such as coffee.

Both sources treat this as a civilian product. Unitree asks users not to make dangerous modifications.

## A Human's Take

A seven-axis arm under two thousand dollars with force control and an open-interface promise is the kind of SKU labs actually buy. The interesting line on the page is the stiffness warning. If the gearbox is that light, the software has to carry the path. I care less about the coffee mockup than whether 0.1 mm shows up on a dial indicator after an hour of 2 kg picks.

## Sources

- [Unitree — Bionic 7-Axis Dexterous Robotic Arm](https://www.unitree.com/R1-ARM)
- [IT Home — Unitree launches bionic 7-axis dexterous arm from 9,900 yuan](https://www.ithome.com/0/992/067.htm)
