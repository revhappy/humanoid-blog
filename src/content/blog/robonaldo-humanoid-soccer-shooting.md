---
title: "RoboNaldo: Unitree G1 Scores Sub-Meter Humanoid Soccer Shots on Grass"
description: "OpenDriveLab’s RoboNaldo curriculum RL hits 0.73 m free-kick error from 3 m on a real G1, with 13.1 m/s ball speed and outdoor onboard perception."
pubDate: 2026-08-03
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/robonaldo-humanoid-soccer.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A humanoid that can put a soccer ball on target is a hard physics problem: whole-body balance, high-impulse contact, and accuracy under timing pressure. **RoboNaldo**, from researchers at the University of Hong Kong, CUHK, and Archon Robotics (OpenDriveLab), claims the first general-case humanoid shooting policy with less-than-one-meter average target error outdoors.

The paper is on arXiv (2606.11092); the project page and demo video show a Unitree G1 on grass with onboard sensing—no external motion-capture cage.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/BuHNzqebIqc"
    title="RoboNaldo humanoid soccer shooting"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Official RoboNaldo summary: free-kicks and moving-ball shots on a Unitree G1. Source: OpenDriveLab / YouTube.</p>

## The trick: one human kick, three RL stages

Pure motion-tracking RL is stable but stuck on a fixed reference. Pure task-reward RL struggles to discover a valid kick from scratch. RoboNaldo uses a **three-stage motion-guided curriculum** built on a single human kick:

1. **Motion tracking** — learn a stable whole-body kicking prior from the reference.
2. **Shooting adaptation** — RL fine-tunes deviations for stationary balls at varied positions (free-kick regime).
3. **Task generalization** — co-train with a kick-timing and locomotion planner so the same low-level policy can one-touch moving balls.

A high-level heuristic planner drives the kick trigger during training; other high-level controllers can reuse the low-level policy at inference.

<figure>
  <img src="/images/heroes/robonaldo-humanoid-soccer-3.png" alt="Three-stage RoboNaldo curriculum pipeline diagram" loading="lazy" />
  <figcaption>Three-stage motion-guided curriculum for humanoid soccer shooting. Source: RoboNaldo project / arXiv HTML.</figcaption>
</figure>

## Numbers that stick

From the authors’ abstract and project write-up (verified on the paper and project page):

- **Simulation:** free-kick shot error **48.6% lower** and shoot velocity **2.96×** vs prior baselines.
- **Real Unitree G1** (onboard perception, ~3 m range): average target error **0.73 m** (free-kick) and **0.86 m** (moving ball).
- **Best reported shot:** about **17 cm** from a 3 m target.
- **Post-contact ball speed:** **13.10 m/s** — described as **59–71%** of reported professional open-play shot speed.
- Terrain demos include artificial soccer/hockey fields and natural grass.

<figure>
  <img src="/images/heroes/robonaldo-humanoid-soccer-4.png" alt="Real-world shot dispersion and ball trajectories" loading="lazy" />
  <figcaption>Shot dispersion and trajectories from real-world free-kick and moving-ball tests. Source: RoboNaldo arXiv assets.</figcaption>
</figure>

## Why robot nerds should care

Soccer shooting is a stress test for high-impulse whole-body contact under egocentric vision. Getting sub-meter accuracy from three meters with a commercial G1 and onboard sensors is a stronger claim than a scripted kick in a lab cage. Code is listed on the project GitHub for the simulation training stack.

## A Human's Take

I’m so here for sports as a benchmark when the metrics are honest: mean error, ball speed, terrain. RoboNaldo isn’t “robots will replace strikers”—it’s proof that curriculum RL can keep a motion prior while still adapting to ball motion and timing. Next receipt I want is third-party replications on other G1 fleets, and whether the same stack generalizes to pass-and-shoot chains, not just one-touch set pieces.

## Sources

- [RoboNaldo project page — OpenDriveLab](https://opendrivelab.com/RoboNaldo/)
- [arXiv:2606.11092 — RoboNaldo paper](https://arxiv.org/abs/2606.11092)
- [YouTube — official RoboNaldo video](https://www.youtube.com/watch?v=BuHNzqebIqc)
- [GitHub — OpenDriveLab/RoboNaldo](https://github.com/OpenDriveLab/RoboNaldo)
