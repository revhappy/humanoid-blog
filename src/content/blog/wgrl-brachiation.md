---
title: "A Life-Sized Dual-Arm Robot Brachiates Across Monkey Bars"
description: "University of Tokyo researchers train waypoint-guided RL on hook hands, then zero-shot a 19.6 kg upper body across four bars."
pubDate: 2026-08-19
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/wgrl-brachiation.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most learned locomotion still wants a floor. **Ayumu Iwata**, **Kento Kawaharazuka**, and colleagues at the **University of Tokyo** trained a life-sized dual-arm robot to swing from bar to bar instead.

The paper, accepted to **IROS 2026**, uses **Waypoint-Guided Reinforcement Learning (WGRL)** because they did not have imitation data that matched hook-shaped hands. On hardware, the robot completes three reaching phases across four **30 mm** bars spaced **400 mm** apart. The first hook often misses. Recovery shows up anyway, and the course finishes without a fall.

<figure>
  <img src="/images/heroes/wgrl-brachiation.jpg" alt="Life-sized dual-arm robot swinging across overhead bars in a lab" loading="lazy" />
  <figcaption>Brachiation across four bars. Source: Iwata et al., arXiv:2608.17320.</figcaption>
</figure>

## Hardware that can hang

The robot is based on open-source **MEVITA** hardware. It models an adult upper body: **1,093 mm** tall, **19.6 kg**, five degrees of freedom per arm (shoulder roll/pitch/yaw, elbow pitch, wrist pitch). Metal limbs, hook end-effectors. The hook arc is **60 mm** across a **30 mm** bar, with a **180°** central angle so it does not dump the robot on a graze.

Training runs in Legged Gym with **4,096** parallel environments. The actor sees IMU, gravity, joints, and a left/right phase bit. The critic gets privileged bar geometry, contacts, and histories. Policy at **50 Hz**, PD at **200 Hz**.

Five sagittal waypoints teach the reaching hand to unhook backward, pass under the support bar, then wrap the next bar from above. Early training holds a tight distance threshold, then relaxes it. A bar-count success reward and a mechanical-energy term (target **−72 J**, the dual-hang energy) push the robot to go forward without winding up into a wild pendulum.

<figure>
  <img src="/images/heroes/wgrl-brachiation-2.jpg" alt="Mechanical overview of the dual-arm brachiation robot and its hook hand" loading="lazy" />
  <figcaption>Upper-body layout and the hook. Source: Iwata et al., arXiv:2608.17320.</figcaption>
</figure>

## Sim, then the real bars

In MuJoCo, ten trials on even 400 mm spacing all clear more than **30** bars. With bar jitter (±20 mm spacing, ±40 mm vertical, ±0.2 rad yaw), it keeps going and retries after misses. On a **5°** incline: **28/30** reaches (**93.3%**). On a 36-bar circle: **91/100**. The actor never sees explicit bar positions.

Hardware is zero-shot. Logs show kinetic energy climbing while it retries on one hook, then decaying toward the energy target once both hands catch. Left-arm swings are shorter period and larger amplitude than the right; the authors say right-hand motion converged first in training and they did not add a symmetry constraint.

<figure>
  <img src="/images/heroes/wgrl-brachiation-3.jpg" alt="Time-stamped snapshots of right- and left-hand reaching during hardware brachiation" loading="lazy" />
  <figcaption>Hardware sequence: right, left, right. Source: Iwata et al., arXiv:2608.17320.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/wgrl-brachiation-4.jpg" alt="Hardware recovery after a missed hook, then a successful re-grasp" loading="lazy" />
  <figcaption>Miss, re-swing, catch. Source: Iwata et al., arXiv:2608.17320.</figcaption>
</figure>

They credit two things for robustness: the hook clearance, and the wrap-from-above trajectory that WGRL induced before the curriculum let go.

## A Human's Take

Monkey bars are a mean test. No feet, discontinuous contacts, and a fall ends the episode. Getting a 20 kg upper body to miss, re-swing, and still finish is the result I care about.

It is still a hook, not a hand, and the bars are in a lab gantry. I would not send this at a jungle gym full of kids. I would send it at any robot team that thinks “locomotion” only means walking.

## Sources

- [arXiv:2608.17320 — Robust Brachiation on a Life-Sized Dual-Arm Robot Using Waypoint-Guided Reinforcement Learning](https://arxiv.org/abs/2608.17320)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.17320v1)
