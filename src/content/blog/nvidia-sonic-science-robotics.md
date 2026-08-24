---
title: "NVIDIA’s SONIC Turns Motion Tracking Into a Humanoid Foundation Model"
description: "Science Robotics publishes SONIC: 42M parameters, 100M+ mocap frames, 21k GPU hours, one policy for VR, video, and VLA whole-body control."
pubDate: 2026-08-23
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/nvidia-sonic-science-robotics.png"
readTime: "5 min read"
featured: false
draft: false
---

NVIDIA researchers put **SONIC** — supersizing motion tracking for natural humanoid whole-body control — in *Science Robotics* **volume 11, issue 117** (12 August 2026). The arXiv version was revised **August 13**. AI Business covered the journal drop this week.

The claim is simple and large: language and vision models scaled; humanoid controllers did not. SONIC trains one motion-tracking policy on **more than 100 million frames** from **700 hours** of motion capture, with networks from **1.2 million to 42 million** parameters, using **21,000 GPU hours** (128 GPUs over 7 days in the paper). The hardware in the demos is a **Unitree G1**.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/2BWl2uAO5lc"
    title="SONIC: supersizing motion tracking for humanoid whole-body control"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Movie S1 from the paper. Source: NVIDIA / YouTube.</p>

## One token space, several steering wheels

The project page and paper describe a universal control policy. Specialized encoders pack robot motion, human motion, and hybrids into a shared token. Downstream that token can be driven by:

- a real-time **kinematic planner** (gamepad-style walking, running, stealth, injured, squat, kneel, crawl, boxing)
- **VR** with three trackers (head + hands) or full-body tracking
- **video** teleop via GEM pose estimation (kung fu, crawling)
- **text and music** through GEM-generated choreography
- a **VLA** (GR00T N1.5 in the project write-up) for autonomous loco-manipulation

Yuke Zhu, a NVIDIA director and distinguished research scientist, told AI Business the same policy can be driven by VR, video, or VLA models and still generalize past motions seen in training.

<figure>
  <img src="/images/heroes/nvidia-sonic-science-robotics.png" alt="Collage of a Unitree G1 taking out trash, dancing, mowing, raking, crawling, and manipulating objects" loading="lazy" />
  <figcaption>Figure 1 from the paper: one policy, many interfaces. Source: arXiv:2511.07820 / Science Robotics.</figcaption>
</figure>

The VLA clips on the project page are the ones that look like work: pick-and-place a drill, drop a soda in a can, handle a carrot, sponge, and apple. Those need coordinated hand and foot placement, not just a walk cycle.

<figure>
  <img src="/images/heroes/nvidia-sonic-science-robotics-2.png" alt="Time-lapse rows of a G1 doing loco-manipulation tasks from drill pickup to trash and table work" loading="lazy" />
  <figcaption>VLA-driven loco-manipulation sequences. Source: arXiv:2511.07820.</figcaption>
</figure>

Sim-to-real numbers in the paper: on **N = 124** motions, simulation succeeded **124/124** and the real G1 **123/124**. Against the OpenHomie specialist, survival was **197/200** runs versus **86/200**.

NVIDIA released a checkpoint in July on Hugging Face as **GEAR-SONIC**, plus code under GR00T Whole-Body Control. Zhu told AI Business the remaining pain is contact-rich and highly constrained motion, plus the usual sim-to-real gap. Next test: long-term robustness and production-grade safety.

<figure>
  <img src="/images/heroes/nvidia-sonic-science-robotics-3.png" alt="Block diagram of SONIC’s kinematic planner, VR toolkit, encoders, quantizer, and robot decoders" loading="lazy" />
  <figcaption>Method overview from the project page. Source: NVIDIA GEAR-SONIC.</figcaption>
</figure>

## A Human's Take

Scaling motion tracking is the least glamorous way to get a humanoid to crawl, and that is why I like it. Dense mocap supervision beats another hand-tuned reward for “look alive.” 123 out of 124 on the real G1 is a serious transfer number. The catch is still the one Zhu named: contacts and tight spaces. A policy that can mow a lawn in the parking lot still has to prove it can hold a drill for a shift.

## Sources

- [Science Robotics — SONIC (Vol. 11, Issue 117)](https://www.science.org/doi/10.1126/scirobotics.aed4592)
- [arXiv:2511.07820 — SONIC](https://arxiv.org/abs/2511.07820)
- [NVIDIA GEAR-SONIC project page](https://nvlabs.github.io/GEAR-SONIC/)
- [AI Business — Nvidia’s SONIC Teaches Humanoids to Move](https://aibusiness.com/robotics/nvidia-s-sonic-teaches-humanoids-move)
- [YouTube — SONIC Movie S1](https://www.youtube.com/watch?v=2BWl2uAO5lc)
