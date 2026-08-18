---
title: "A $550 Wrist Rig That Lets You Feel a LEAP Hand Grab"
description: "Tohoku’s ViHaTeleop is 0.7 kg of SLAM, a fisheye, and three LRA rings. Haptics raised success on every contact task they tried."
pubDate: 2026-08-18
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/vihateleop.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most cheap teleop kits are eyes-only. The ones that push force back at you usually cost more than **$10k** and weigh like a gym bag. Tohoku University’s **ViHaTeleop**, accepted to **IROS 2026**, sits in the gap: **$550**, **0.7 kg**, and three finger rings that buzz when the robot touches something.

The stack is an HTC Vive Ultimate tracker for the wrist, an **$11** 160° fisheye for the hand, **$1.4** linear resonant actuators on thumb, index, and middle, and a wrist PCB. The robot side is a **Franka FR3**, a **LEAP Hand**, and **9DTact** fingertips. Control runs at **20 Hz**.

<figure>
  <img src="/images/heroes/vihateleop.jpg" alt="Operator wearing ViHaTeleop wrist trackers and LRA rings, mapped to a LEAP Hand" loading="lazy" />
  <figcaption>Wearable overview and mapping onto Franka + LEAP + 9DTact. Source: Zhu et al., arXiv:2608.16572 / project page.</figcaption>
</figure>

## What they changed besides the price

The camera rides on the wrist with a short lever arm so it does not torque your forearm. A ring of LEDs keeps MediaPipe happy. In a 160-trial lighting check, LEDs cut landmark jitter **39.6%** under glare and **21.3%** in low light.

Retargeting starts from DexPilot, then adds a fingertip-parallelism term so flat tactile pads actually kiss the object instead of poking it with an edge. That constraint is optional: on for pinches, off for power grasps.

<figure>
  <img src="/images/heroes/vihateleop-2.jpg" alt="ViHaTeleop hardware modules: tracker, fisheye, LEDs, and LRA rings" loading="lazy" />
  <figcaption>Snap-fit modules. Source: Zhu et al., arXiv:2608.16572.</figcaption>
</figure>

## Nine people, six contact-critical tasks

Nine volunteers (ages 22–31) did egg transfer and chip transfer on the real robot, plus peg-in-hole, cube stacking, fruit pick-and-place, and a bimanual bottle handover in Isaac Sim. Each task: five trials with haptics, five without, randomized.

Haptics raised success on **all six** tasks, **+2.2 to +15.6** percentage points. The biggest jumps were sim handover (+15.6) and real egg transfer (+13.3). Times got faster on egg and peg-in-hole and slower on the multi-stage tasks. Contact-clarity and grasp-confidence Likert scores improved in both sim and real (Wilcoxon, p < 0.05). Ease did not move much on the real robot.

Downstream, about **50** demos trained an extended 3D-ViTac policy. Visual-tactile beat vision-only on peg-in-hole (**10% → 27%**, +17 points) and stacking (**27% → 36%**). Fruit placement did not.

<figure>
  <img src="/images/heroes/vihateleop-3.jpg" alt="ViHaTeleop task suite: egg, chip, peg-in-hole, stacking, fruit, handover" loading="lazy" />
  <figcaption>Real and simulated contact-critical tasks. Source: Zhu et al., arXiv:2608.16572.</figcaption>
</figure>

Code is promised open: [github.com/idombanker/ViHaTeleop](https://github.com/idombanker/ViHaTeleop). Sample is nine people. No outside tracker ground truth.

## A Human's Take

A price and a weight I can argue about over coffee. That is the right shape. The study is small, and the buzz is PWM on three rings, not a force-feedback glove. Still: if you are collecting contact data and you do not have a SenseGlove budget, this is the first $550 kit I have seen that bothered to measure whether the buzz did anything.

## Sources

- [arXiv:2608.16572 — ViHaTeleop](https://arxiv.org/abs/2608.16572)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.16572v1)
- [Project page](https://laiyanhou.github.io/ViHaTeleop-website/)
- [GitHub — ViHaTeleop](https://github.com/idombanker/ViHaTeleop)
