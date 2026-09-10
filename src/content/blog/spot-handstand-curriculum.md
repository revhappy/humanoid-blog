---
title: "Stiffer Joints in Sim Teach Spot to Handstand"
description: "Saxion researchers anneal PD stiffness from 60 to 40 so a Boston Dynamics Spot can tip 90 degrees onto its front legs; 10 seeds transfer to hardware."
pubDate: 2026-09-10
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/spot-handstand-curriculum.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Boston Dynamics **Spot** that already walks is still a terrible explorer the moment you ask it to fall on purpose. **Actuator Dynamics Curricula**, a CoRL 2026 paper from Saxion University of Applied Sciences with Groningen and Twente, treats that as a training bug, not a hardware one.

The trick is simple: in Isaac Lab, start the simulated joints **stiffer** than the real robot, then anneal them back. The task is a **90°** pitch from four-leg stance onto the front legs, in about a second, through a mid-air slice where most random actions terminate the episode.

<figure>
  <img src="/images/heroes/spot-handstand-curriculum.jpg" alt="Blue Boston Dynamics Spot tipping from four legs into a front-leg handstand" loading="lazy" />
  <figcaption>Hardware handstand on a physical Spot. Source: actuator-dynamics curriculum paper, Figure 1b.</figcaption>
</figure>

## Raise the bandwidth, then give it back

System ID with CMA-ES puts identified stiffness at **K\* = 40**. Training at that value plateaus. Mean episode length sits around **400** steps after **10,000** PPO updates; the policy never finishes the transition.

The curriculum starts at **K0 = 60**, the smallest bump (steps of 5) that cleared a **98%** success screen over **1,000** sim episodes. Damping stays critically damped. As a running average of completed episode length grows, stiffness slides back to 40. Wall-clock training is about **1.5 hours** per seed on an RTX 5000 Ada. The policy is a small MLP: **45-D** proprioception in, **12** joint-position offsets out. Inference rides a Jetson Nano on the dog, talking Spot SDK.

With the curriculum, reward and episode length climb to the cap. Without it, they do not. Evaluated under identified hardware dynamics, the curriculum condition reports mean episode length **975 ± 12** and reward **−4.76 ± 0.83** across **10** seeds, **1,000** episodes each. Fixed-K\* and several one-knob ablations land much shorter.

<figure>
  <img src="/images/heroes/spot-handstand-curriculum-2.jpg" alt="Simulated yellow Spot sequence from stance into a handstand on a grid" loading="lazy" />
  <figcaption>Same transition in simulation before the hardware drop. Source: paper, Figure 1a.</figcaption>
</figure>

## It stands on carpet. Padding takes a retry.

All **10** curriculum seeds deployed to a physical Spot. Each made the transition and held the pose while the team prodded it with a pole. Carpet worked on the first try. Soft padding sometimes needed a second attempt, which the policy did as an emergent retry. A hard shove onto its back is still a fail; it cannot recover from that. Across about **20** recorded trials on carpet, padding, and hardwood, the authors say every transition succeeded. Hardware numbers are still qualitative. They say so.

A cart-pole proof sits underneath: higher closed-loop natural frequency enlarges the set of states that can avoid termination. The Spot result is the picture. Stiffer actuators in sim are a curriculum axis, like terrain height, not a lie about the motors you will ship.

## A Human's Take

I have watched a lot of quadruped “biped tricks” that needed a motion-capture oracle. This one needed a gain knob and a willingness to let the robot fall in sim until it stopped falling. That is the kind of ugly training detail I want more labs to publish. The honest leftover is the back-fall: a handstand you cannot get up from is still a circus act. Teach the get-up and then we can talk about inspection work on two legs.

## Sources

- [arXiv:2609.09492 — Actuator Dynamics Curricula](https://arxiv.org/abs/2609.09492)
- [Paper HTML](https://arxiv.org/html/2609.09492v1)
