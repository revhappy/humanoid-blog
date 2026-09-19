---
title: "SAM, a One-Motor Maple-Seed Flyer, Tracks Tighter Paths"
description: "SUTD’s SAM monocopter cuts tracking error up to 39.5% with predictive control and a single actuator."
pubDate: 2026-09-18
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/sam-maple-seed-monocopter-2.jpg"
readTime: "3 min read"
featured: false
draft: false
---

A flying robot with **one moving part** is easy to build and miserable to steer. Researchers at the Singapore University of Technology and Design put a predictive controller on **SAM** — Samara Seed-Inspired Single-Actuator Monocopter — and report tighter paths than their previous inversion-based stack.

[TechXplore](https://techxplore.com/news/2026-09-maple-seed-robot-flies-accurately.html) carried the work on **18 September**. The paper is in *IEEE Transactions on Robotics*: “Nonlinear Model Predictive Control of Single-Actuator Monocopters using Hybrid Rotational Dynamics and INDI,” [DOI 10.1109/tro.2026.3731495](https://dx.doi.org/10.1109/tro.2026.3731495). Lead author is **Emmanuel Tang**. **Foong Shaohui**, associate head of SUTD’s Engineering Product Development pillar, is quoted on the design brief.

<figure>
  <img src="/images/heroes/sam-maple-seed-monocopter-2.jpg" alt="SAM monocopter in flight, a wind-fan disturbance test, and light-trail figure-eight" loading="lazy" />
  <figcaption>Payload, wind, and a figure-eight light trail. Source: SUTD via TechXplore.</figcaption>
</figure>

## One actuator, a planning horizon

SAM spins like a falling maple seed. That spin makes lift. The same motor has to aim. There is no second rotor to cancel a mistake.

The new stack is **nonlinear model predictive control (NMPC)** plus **Incremental Nonlinear Dynamic Inversion (INDI)**. NMPC looks a few steps ahead. INDI patches disturbances. A hybrid rotational model is supposed to capture the coupling between fast spin and tilt.

They flew three airframes: **short-wing** and **long-wing** wood wrapped in yellow tape, and an **ultralight foam** wing. Short and long wings ran circles, figure-eights, and elevated circles, including paths that asked for more motor than the platform could give, plus fan-blown wind. The foam wing flew a circle and carried a **5 g** payload.

<figure>
  <img src="/images/heroes/sam-maple-seed-monocopter.jpg" alt="Three SAM wing variants: two yellow taped wood wings and a white foam wing with a blue propeller" loading="lazy" />
  <figcaption>Short, long, and ultralight SAM wings. Source: SUTD via TechXplore.</figcaption>
</figure>

## The error drops, the lab stays in the loop

Against a Differential Flatness-Based Controller with INDI:

- Long-wing positional RMSE down up to **39.5%**
- Short-wing positional RMSE down up to **37.2%**
- Ultralight velocity error down up to **43.5%**

Those are the authors’ numbers, via TechXplore. Flights were **indoors**, with **OptiTrack** motion capture and **offboard** compute. Tang’s quote in the same piece is the constraint: every motor command has to be timed, because there is only one.

Foong points at environmental sensing and climate monitoring as a longer-term use if the platform can leave the motion-capture hall. The article is explicit that it cannot yet.

## A Human's Take

I like one-motor flyers because they fail honestly. If the controller is late, the seed just walks off the circle. A 39% RMSE cut on the long wing is a real control result. It is also still a room with OptiTrack and a PC in the loop. The next demo that matters is the same figure-eight with the estimator on the wing, in wind that is not a desk fan.

## Sources

- [TechXplore — Maple-seed-inspired robot flies more accurately with predictive control](https://techxplore.com/news/2026-09-maple-seed-robot-flies-accurately.html)
- [IEEE T-RO — NMPC of single-actuator monocopters (DOI 10.1109/tro.2026.3731495)](https://dx.doi.org/10.1109/tro.2026.3731495)
- [SUTD — Foong Shaohui profile (AIR Lab / monocopter work)](https://www.sutd.edu.sg/profile/foong-shaohui/)
