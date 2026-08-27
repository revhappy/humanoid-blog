---
title: "BeyondMimic Puts Cartwheels and Kick Combos on a Real G1"
description: "Berkeley and Stanford’s BeyondMimic, now in Science Robotics, tracks 2.5 hours of motion and deploys cartwheels and spin-kicks on Unitree hardware."
pubDate: 2026-08-27
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/beyondmimic-science-robotics.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**BeyondMimic** is a two-stage controller from UC Berkeley and Stanford that learns a pile of human motions with one reinforcement-learning recipe, then composes them at test time with a latent diffusion model. Science Robotics dated the paper **26 August 2026** in its humanoid special issue. The project page and arXiv:2508.08241 are the technical sources. Interesting Engineering ran a recap the same day.

The hardware is a **Unitree G1**. The first stage tracks walking, running, single-leg stands, jumps, dance, spin-kicks, and aerial cartwheels with shared hyperparameters instead of a new reward for every clip. The second stage is a diffusion policy you can steer with simple costs: joystick, waypoints, obstacle avoidance, even sparse keyframes that inpaint a cartwheel into a walk.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/mSPxRVTJW1I"
    title="BeyondMimic Unitree G1 motion tracking demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">G1 outdoor tracking clips used in the BeyondMimic coverage. Source: Unitree / YouTube via Interesting Engineering.</p>

## Numbers from the paper, not the press blurbs

The HTML paper says the team trained on about **2.5 hours** of diverse human motion, validated the set in high-fidelity sim, and deployed **30** representative clips totaling **15 minutes** on the physical robot. Interesting Engineering says **21** clips on hardware. I am keeping the paper’s 30 / 15 minutes as the primary count.

During an aerial cartwheel the paper reports peak acceleration of **31 m/s²** and pelvic angular velocity up to **20 rad/s** (mean **7.01 rad/s**). Interesting Engineering quotes **15.7 rad/s** for that pelvic number. When they disagree, use the paper.

A user study of **N = 77** compared walking and running clips with Unitree’s native controller. Participants picked BeyondMimic as more human-like in **70.8%** of choices versus **29.2%**. The paper also reports GRF shapes from force-sensing treadmills that look like human walking double peaks and running single peaks, with a caveat: no toe joint, so push-off is sharper than a human foot.

<figure>
  <img src="/images/heroes/beyondmimic-science-robotics-yt.jpg" alt="Unitree G1 humanoid kicking on an outdoor paved path beside a yellow fence" loading="lazy" />
  <figcaption>G1 outdoor kick from the demo used in the Science Robotics / IE coverage. Source: Unitree / YouTube.</figcaption>
</figure>

## What “versatile” means here

The diffusion half is the part that is not just mimicry. The paper says a single controller, with no task-specific training, does joystick walking, waypoint runs, obstacle detours via an SDF cost, and walk-into-cartwheel-into-walk from keyframes. It also claims a **50 m** continuous run on a track, and average velocity tracking error of **12.14%** walking and **13.65%** running in simulation.

The authors argue they did not need a kitchen-sink of domain randomization. They kept friction, restitution, default joint offsets, torso CoM, and random velocity kicks. Whether that transfers off Unitree’s G1 is the next question. They note the open-source tracker is already in MJLab and Unitree RL Lab.

## A Human's Take

Cartwheels on leaves and dirt are a better flex than another indoor walk. The 77-person preference study is also a real measurement, not a vibe. I still want to know how often the G1 needs a spotter after the landing. Diffusion that can splice a cartwheel into a walk is the useful idea. If the same recipe works on a robot that is not a G1, then it is a method. Until then it is a very good Unitree demo with a journal stamp.

## Sources

- [Project page — BeyondMimic](https://beyondmimic.github.io/)
- [arXiv:2508.08241 — BeyondMimic HTML](https://arxiv.org/html/2508.08241)
- [Science Robotics issue 117 — BeyondMimic listed 26 Aug 2026](https://www.science.org/toc/scirobotics/11/117)
- [Interesting Engineering — cartwheels and kicks recap](https://interestingengineering.com/ai-robotics/robot-system-lets-humanoids-learn-cartwheels)
- [YouTube — Unitree / BeyondMimic demo](https://www.youtube.com/watch?v=mSPxRVTJW1I)
