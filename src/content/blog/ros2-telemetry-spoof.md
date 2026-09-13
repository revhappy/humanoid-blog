---
title: "A One-Line ROS 2 Hook Can Fake What a Robot Is Doing"
description: "UCL and PolyU researchers spoof Franka telemetry through LD_PRELOAD, bypassing SROS 2 and beating an AI detector 87% of the time."
pubDate: 2026-09-13
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/ros2-telemetry-spoof.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Franka arm can be hijacked while its operator’s RViz still shows a clean pick-and-place. **Leming Shen**, **Shikai Geng**, **Yuanqing Zheng**, and **Chris Xiaoxuan Lu** (UCL and The Hong Kong Polytechnic University) posted the attack **8 September** on arXiv: *Seeing is Not Believing*.

The trick is not breaking encryption. It is intercepting the message **before** Secure ROS 2 ever sees it.

<figure>
  <img src="/images/heroes/ros2-telemetry-spoof.jpg" alt="Lab setup: operator watching RViz while a second station teleoperates a Franka arm through Isaac Sim" loading="lazy" />
  <figcaption>Victim station on top, attacker station below. The visualizer and the physical arm disagree. Source: Shen et al., arXiv:2609.08280, Figure 4.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/ExeiGqUrnhQ"
    title="ROS 2 telemetry spoofing demo on a Franka arm"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Hijack plus spoofed joint states and camera frames. Source: authors / YouTube.</p>

## The hole

Linux lets a process preload a shared library with `LD_PRELOAD`. The authors export a fake `rcl_publish`. When the robot app publishes joint states or camera frames, the hook sees the payload first, rewrites it, then calls the real function. Official ROS 2 binaries stay untouched. No root. No stolen SROS 2 keys.

SROS 2 still authenticates and encrypts whatever leaves `rcl_publish`. The verifier gets a signed, encrypted lie.

They crawled **4,429** ROS-related Docker images. Verified namespaces take most of the **74.7 million** pulls, but about **4,400** third-party images still account for **7.6 million** pulls (**10.2%**). That is the distribution path they worry about: a “helpful” container that silently drops `Hook.so`.

## What they measured

Hardware: Franka Emika arm, ROS 2 Humble, SROS 2 on. Attacker PC runs Isaac Sim as a digital twin.

- **100/100** hijack-and-spoof successes, with and without SROS 2.
- Injected telemetry delay stays under **3 ms**; drop rate **0%**.
- Four detectors: velocity bounds (**98%** bypass), position–velocity consistency (**100%**), cross-joint correlation (**95%**), autoregressive temporal model (**87%**).

The spoof is not Gaussian noise on each joint. They perturb the simulated trajectory with vibration, drift, and stick-slip, couple joints through the mass matrix, then derive position, velocity, and torque from that one motion so the channels stay physically consistent.

<figure>
  <img src="/images/heroes/ros2-telemetry-spoof-3.jpg" alt="White Franka arm on a lab table with a cup and block, other robots in the background" loading="lazy" />
  <figcaption>Physical Franka used in the attack evaluation. Source: arXiv:2609.08280.</figcaption>
</figure>

Camera spoofing in the paper is weaker: they forge a **final-state** image with a VLM, not a live multi-camera stream. The authors say live multi-view synthesis at warehouse scale is not practical for either side.

They disclosed to the ROS 2 team. The paper says the PMC acknowledged and discussed it. Their suggested fix is to sign payloads at the sensor, with a monotonic counter, so a user-space hook cannot mint them.

## A Human's Take

Encrypted telemetry that does not match the metal is a nasty class of bug. If your safety case is “the dashboard says it did the task,” this paper is the counterexample. Sign at the encoder, or stop treating RViz as a witness.

## Sources

- [arXiv:2609.08280 — Seeing is Not Believing](https://arxiv.org/abs/2609.08280)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.08280v1)
- [YouTube — attack demo](https://youtu.be/ExeiGqUrnhQ)
