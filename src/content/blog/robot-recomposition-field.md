---
title: "UT Austin Lets Field Crews Plug New Payloads Into Spot in Minutes"
description: "A runtime recomposition stack on Spot, a Panther, and a Turtlebot swaps cameras and compute without a developer, including a reactor demo."
pubDate: 2026-08-13
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/robot-recomposition-field.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most field robots ship as a sealed stack. A University of Texas at Austin team wants the opposite: plug in a USB drive and a camera the robot has never seen, and have it plan with that gear in **minutes**. The paper, “Deployment Is Not Destiny,” posted to arXiv on **August 11**. The project page has the two demo videos.

<figure>
  <img src="/images/heroes/robot-recomposition-field.jpg" alt="Boston Dynamics Spot swapping RGB-D, thermal, and Compton-camera payloads during a reactor localization demo" loading="lazy" />
  <figcaption>Demo 1 on Spot: follow me, follow me in the dark, then point at the source. Recomposition times are 1:33, 2:16, and 3:19. Source: Swanbeck et al. / UT Austin.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/5ekKI51q1Sk"
    title="UT Austin radioactive source localization recomposition demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Spot follows a teammate, swaps to thermal in a blackout, then points a laser at a hidden source. Source: UT Nuclear Robotics / YouTube.</p>

## Payloads the robot did not know at ship time

The authors call new modules **nondum visum** payloads: software, hardware, or compute that did not exist in the robot’s original configuration. Each software payload is a container plus a database of behaviors and PDDL fragments. Hardware rides USB on a rail mount. Extra compute joins over Ethernet or Wi-Fi, swaps databases, and lets a weak robot use a remote GPU.

A **Component Manager** watches udev events, new device nodes, and peer discovery. A system-level behavior tree rebuilds a task plan from whatever is plugged in. The teammate talks to it: speech-to-text in, text-to-speech out, a local LLM mapping language to a PDDL goal.

<figure>
  <img src="/images/heroes/robot-recomposition-field-3.jpg" alt="Host robots Spot, Panther, and Turtlebot with USB software payloads and USB hardware cameras" loading="lazy" />
  <figcaption>Three hosts and the plug-in kit: RGB-D, thermal, Compton camera, pan-tilt laser, speaker, Jetson. Source: Swanbeck et al. / UT Austin.</figcaption>
</figure>

## Two disaster-style runs

**Demo 1** is a mock blackout at an operational nuclear reactor. Real radioactive material is hidden off the obvious line of sight. A **Boston Dynamics Spot** (Jetson AGX Orin, 64 GB, 1 TB) starts with a speaker, mic, and battery.

1. Plug RGB-D + YOLO + tracker. Goal: “follow me through the facility.” **1 min 33 s** to recompose.
2. Lights die. Swap to thermal + monocular depth. Same goal. **2 min 16 s**.
3. In the room, swap to a Compton camera and a pan-tilt laser. Goal: “point at the radiation source.” **3 min 19 s**.

**Demo 2** is a thermal person search. A **Husarion Panther** (i9-13900, no GPU) uses a borrowed Jetson over Ethernet outdoors. It cannot fit a small opening, so a **Robotis Turtlebot** (Raspberry Pi 4, 2 GB RAM) takes the thermal camera and the same remote compute over Wi-Fi. Recomposition: **7 min 22 s** then **5 min 39 s**. The Turtlebot enters the dark interior and calls out a person.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/N3qjZZuVBNE"
    title="UT Austin thermal-guided person search recomposition demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Panther surveys outside; Turtlebot inherits the thermal camera and remote Jetson to go indoors. Source: UT Nuclear Robotics / YouTube.</p>

<figure>
  <img src="/images/heroes/robot-recomposition-field-2.jpg" alt="Panther and Turtlebot sharing a Jetson and thermal camera during a dark-building person search" loading="lazy" />
  <figcaption>Demo 2: same payloads, two bodies. Source: Swanbeck et al. / UT Austin.</figcaption>
</figure>

The teammate still picks which payload to mount. Mounts are not proprioceptive. Plans are classical PDDL, not a reactive behavior-tree synthesizer. Funding note on the paper: U.S. Army Futures Command contract **W911NF-24-C-0067**. Open-source software is promised at camera-ready.

## A Human's Take

Minutes versus a developer weekend is the claim that matters, and they put clocks on the figures. I care that the same thermal pack moved from a Spot follow, to a Panther survey, to a Pi-class Turtlebot without rewriting launch files. I also care that a human still has to know which dongle to grab. That is fine. I would rather have a field tech with a labeled USB kit than a 200-pound “generalist” that cannot take a new camera.

## Sources

- [arXiv:2608.11063 — Deployment Is Not Destiny](https://arxiv.org/abs/2608.11063)
- [UT Nuclear Robotics project page](https://utnuclearrobotics.github.io/deployment_is_not_destiny/)
- [YouTube — radioactive source localization demo](https://www.youtube.com/watch?v=5ekKI51q1Sk)
- [YouTube — thermal-guided person search](https://www.youtube.com/watch?v=N3qjZZuVBNE)
