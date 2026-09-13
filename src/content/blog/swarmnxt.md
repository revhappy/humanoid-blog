---
title: "SwarmNxt Flies Six Open-Source Drones Without a Collision"
description: "EPFL and HKUST open-source a ROS 2 swarm stack on OmniNxt hardware, with a six-drone swap and a four-drone obstacle run."
pubDate: 2026-09-13
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/swarmnxt.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A six-drone swarm swapped places in an indoor arena and never hit. **SwarmNxt**, posted **10 September** on arXiv by **Charbel Toumieh**, **Niel Mistry**, and colleagues at **EPFL** and **HKUST**, is an open-source ROS 2 stack on the existing **OmniNxt** airframe: 360° fisheye cameras, an NVIDIA Orin NX, and PX4.

The paper’s point is not a new airframe. It is the missing middle: assembly docs, Ansible playbooks that update a whole fleet, and a multi-agent autonomy stack that actually flies.

<figure>
  <img src="/images/heroes/swarmnxt.jpg" alt="Six OmniNxt drones swapping positions in a motion-capture arena next to Foxglove trajectory traces" loading="lazy" />
  <figcaption>Six-drone position swap in a free arena, with Foxglove traces on the right. Source: Toumieh et al., arXiv:2609.11382.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/9aOr5EDLQEo"
    title="SwarmNxt six-drone and four-drone flight experiments"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Hardware flights: circle swap, roaming, and obstacle runs. Source: authors / YouTube.</p>

## What they flew

Two indoor experiments, both in an **8 × 8 × 4 m** motion-capture hall. Global position comes from OptiTrack. Perception, planning, and control run onboard.

- **Six drones, no obstacles.** Circle swap toward the center, then roaming on a **2.8 m** radius. About **2 hours** of cumulative flight. No collisions despite **0.2%** packet loss.
- **Four drones with obstacles.** Same roaming protocol, onboard stereo depth on. About **30 minutes** cumulative. No hits with pillars or neighbors.

Mean tracking error sits around **0.075 m**. Minimum inter-agent distance: **0.668 m** with vision, **0.652 m** without. Peak speed in the logs is about **5 m/s**.

The planner uses a **0.45 m** safety radius to cover the worst-case MPC tracking error (**0.301 m** in the four-drone run). Depth from **S2M2** (small variant, **26.5M** parameters, **256×160**) runs at about **7 Hz** and occupies **95%** of the GPU. The authors inflate obstacles by an extra margin because depth error is about **10 cm** at **2 m**.

<figure>
  <img src="/images/heroes/swarmnxt-2.jpg" alt="Four drones weaving around camouflage pillars with occupancy-grid overlay" loading="lazy" />
  <figcaption>Four-drone run with onboard depth: real trajectories and one drone’s occupancy grid. Source: arXiv:2609.11382, Figure 5.</figcaption>
</figure>

## The kit

Each vehicle is **0.27 m** diagonal and **660 g**, same as OmniNxt. The authors quote about **2,300 CHF** per drone and **five hours** of assembly with a video tutorial. Ansible playbooks handle hostname setup, parallel ROS 2 builds, a 20-second pre-flight check, and 30-second log pulls.

Limits they flag: motion capture is still required; current collaborative VIO is not accurate or fast enough for this agility; S2M2’s resolution struggles with small distant objects; the GPU is nearly full, so extra perception modules do not fit beside depth.

Code and docs: [github.com/lis-epfl/swarm-nxt](https://github.com/lis-epfl/swarm-nxt).

## A Human's Take

I like a paper that publishes the playbooks. Six drones swapping through each other’s wash is a real test; the obstacle run with noisy depth is the one I would actually reuse. The next interesting clip is the same stack outdoors, without the motion-capture hall doing the hard part.

## Sources

- [arXiv:2609.11382 — SwarmNxt: Open-source Software-Hardware Platform for Fast and Agile Aerial Swarms](https://arxiv.org/abs/2609.11382)
- [arXiv HTML — SwarmNxt paper with figures](https://arxiv.org/html/2609.11382v1)
- [GitHub — lis-epfl/swarm-nxt](https://github.com/lis-epfl/swarm-nxt)
- [YouTube — SwarmNxt experiment video](https://youtu.be/9aOr5EDLQEo)
