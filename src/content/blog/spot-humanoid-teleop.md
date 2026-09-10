---
title: "SPOT Lets You Look Around Without Steering the Humanoid"
description: "UMass and MIT decouple VR head motion from robot actuation, cutting drop-recovery time to 19.7 s across 10 operators."
pubDate: 2026-09-10
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/spot-humanoid-teleop.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Humanoid teleop papers usually obsess over retargeting. **SPOT**, from UMass Amherst and MIT (arXiv September 7), argues the bottleneck is whether the operator can still *see* the scene after the robot turns.

**SPOT** (Spatial Perception-Oriented Teleoperation) mounts a binocular fisheye on the robot, renders that stereo feed on a virtual hemisphere around the operator, and **does not** map head yaw to the robot’s neck, camera, or torso. Look around inside the wide image. The body keeps doing what the hands and joystick said. An IMU on the camera rig stabilizes the display when the robot itself rotates.

<figure>
  <img src="/images/heroes/spot-humanoid-teleop.jpg" alt="SPOT teaser: binocular fisheye view, decoupled looking, knot tying, ping-pong intercept, drop recovery, and large-workspace bimanual work" loading="lazy" />
  <figcaption>Wide stereo view, decoupled looking, and four perception-heavy tasks. Source: SPOT paper, Figure 1.</figcaption>
</figure>

## Same pipeline, different eyes

Control is otherwise familiar. OpenXR headset plus two controllers, **50–90 Hz** UDP, validated on Meta Quest and PICO. A small network estimates torso orientation from the three tracked poses so free-looking does not yank the chest. Cartesian retargeting follows ExtremControl: torso and two wrists, joystick locomotion, triggers on grippers. A sim-trained target-conditioned policy tracks those SE(3) targets.

The A/B is only the view. **Exocentric** is a third-person camera in the OmniH2O / TWIST / SONIC style. **Conventional egocentric** is a matched 110°×70° active viewport inspired by Open-Television / AMO / TWIST2, with HMD yaw/pitch rotating inside the fisheye, no extra delay, **160°** modeled rotation. Same robot, same tasks, same 10 operators (3 experienced, 7 novice), **20** trials per task per interface.

Mean completion times, successful trials:

| Task | Exocentric | Egocentric | **SPOT** |
|------|------------|------------|----------|
| Drop recovery | 25.73 ± 5.48 s | 32.12 ± 10.03 s | **19.69 ± 4.04 s** |
| Peripheral retrieval | 9.18 ± 2.68 s | 11.16 ± 2.04 s | **7.43 ± 1.49 s** |
| Bimanual retrieval | 13.64 ± 4.47 s | 15.45 ± 3.67 s | **9.76 ± 2.82 s** |
| Light switch | 16.86 ± 3.83 s | 18.15 ± 4.45 s | **11.54 ± 3.39 s** |

Ablations on bimanual retrieval and light switch: kill stereo, wide FoV, or stabilization and the times jump. Users scored SPOT highest on visual perception (**3.4/5**) and manipulation ease (**3.1**). Comfort still favors exocentric (**4.8** vs SPOT **4.0** vs ego **1.4**). Nobody wants a sick operator.

<figure>
  <img src="/images/heroes/spot-humanoid-teleop-3.jpg" alt="SPOT task strips: dropped-object recovery, peripheral cup, bimanual retrieval, and wall light switch" loading="lazy" />
  <figcaption>Four eval tasks. Source: SPOT paper, Figure 4.</figcaption>
</figure>

Limits they list: vision only, camera streaming latency, and no downstream policy-learning study yet.

## A Human's Take

Decoupling “look” from “turn” is the kind of interface fix that should have been obvious and somehow was not. The 19.7-second drop recovery is the number I will remember, because that is the moment teleop usually falls apart. Comfort still losing to a third-person camera is the other receipt. If SPOT’s demos do not train a better autonomous policy, it is a nicer cockpit, not a data engine.

## Sources

- [arXiv:2609.07933 — SPOT](https://arxiv.org/abs/2609.07933)
- [SPOT paper HTML](https://arxiv.org/html/2609.07933v1)
