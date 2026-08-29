---
title: "RAI’s AthenaZero Learns Five Juggling Patterns in Minutes"
description: "A bimanual robot with three-fingered hands learns cascade, tennis, half-shower, shower, and box juggling in under five minutes on hardware."
pubDate: 2026-08-29
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/rai-athena-juggling.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Researchers at the **Robotics and AI Institute** in Cambridge posted a paper on **27 August 2026** showing a bimanual robot, **AthenaZero**, learning five three-ball juggling patterns on the real machine: cascade, tennis, half-shower, shower, and box. The prior model could not complete a single cycle of any pattern. With regularized memory-based learning and a precomputed **mutually reachable set**, the robot reaches those patterns in **less than five minutes** of real-world interaction, not counting the time a human spends picking up dropped balls.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/tAPvN-tQpX0"
    title="AthenaZero juggling five three-ball patterns"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Five patterns on AthenaZero with onboard vision and multi-fingered hands. Source: paper / YouTube.</p>

## Hands, balls, cameras

AthenaZero is a custom low-inertia bimanual platform. Each hand is a three-fingered gripper; each underactuated two-DoF finger is driven by a remote actuator through a Bowden cable, with a full open/close cycle in about **80 ms**. The balls are Higgins Brothers HB #1003 beanbags, **130 g**, **63.5 mm**. A Lucid Helios2 Wide time-of-flight camera and a Lucid Triton RGB camera sit on the torso, synced at **30 Hz**. End-to-end tracking latency is about **0.1 s**.

The authors’ lesson is that a bad model is still useful. They keep the global prior for extrapolation where memory is thin, and fit a local model from accumulated throws where experience is dense. Learning starts immediately. There is no random-exploration warmup.

Cascade learning, excluding manual resets, takes **53 seconds** of physical interaction on average. A tennis → half-shower → cascade sequence averages **75 seconds**. Shower and box plateau around **30 s** and **60 s** of interaction. Across five from-scratch cascade trials, the robot consistently juggled by the **8th** attempt and then repeated the performance three times, about **five minutes** of wall-clock time including resets.

<figure>
  <img src="/images/heroes/rai-athena-juggling-2.jpg" alt="System diagram of AthenaZero’s orchestrator, memory-based learner, and three-fingered bimanual torso" loading="lazy" />
  <figcaption>Skill orchestrator, memory learner, and the hardware. Source: arXiv:2608.26800.</figcaption>
</figure>

## Safety as a reachable set

Juggling near joint limits is where robots break themselves. A throw can be legal on its own and still leave an arm unable to catch without slamming a stop. The **mutually reachable set (MRS)** is a conservative inner approximation: any two states inside it can be connected in either direction under the robot’s position, velocity, acceleration, and jerk limits, using Ruckig for time-optimal trajectories.

A retrospective ablation over **7,578** planner queries found **89.0%** of unconstrained solutions unsafe (unreachable, non-viable, or both). With MRS on, every solution stayed inside the set. Cascade and tennis sequences mostly failed as reachable-but-not-viable. Box failed the other way: viable but not reachable from the previous state.

Co-authors include **Christopher G. Atkeson** and **Alfred A. Rizzi**, names that go back to the paddle-juggling literature the paper cites.

## A Human's Take

Five patterns in minutes is a control result, not a circus act. The prior could not juggle at all, which is the honest baseline. What I like is the safety set: they measured how often a legal throw would have been a bad next catch, and it was most of the time. Dust and humidity still force the robot to re-learn. That is the real sentence for anyone shipping contact-rich hands.

## Sources

- [arXiv:2608.26800 — Rapid On-Robot Learning for Dynamic Manipulation Skills: Robot Juggling](https://arxiv.org/abs/2608.26800)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2608.26800v1)
- [YouTube — five juggling patterns](https://www.youtube.com/watch?v=tAPvN-tQpX0)
