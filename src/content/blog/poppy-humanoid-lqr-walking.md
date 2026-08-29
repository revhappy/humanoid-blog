---
title: "Syracuse Gets Stock Poppy Walking Without Holding Its Hands"
description: "A closed-loop LQR controller learned from open-loop falls lifts unassisted walking on the standard 3D-printed Poppy humanoid."
pubDate: 2026-08-29
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/poppy-lqr-walking.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Syracuse University researchers posted a paper on **27 August 2026** that does something the Poppy community has wanted for years: unassisted walking on the **standard** Poppy Humanoid, not a rebuilt cousin with extra ankle axes or extra sensors. The robot is about **83 cm** tall and **3.5 kg**, with 3D-printed limbs, **25** Dynamixel position servos, and an Odroid in the head. Off the shelf it has no foot pressure sensors and no IMU. Control on their hardware got choppy above **5 Hz** for commands, even though joint reads could run near **100 Hz**.

Past published Poppy walking, the authors say, either needed a person holding the robot’s hands or a non-standard body. This paper contributes a closed-loop **linear-quadratic regulator (LQR)** that tracks a nominal gait and a quadratic cost learned from open-loop hardware data.

<figure>
  <img src="/images/heroes/poppy-lqr-walking-2.jpg" alt="Poppy humanoid in a lab harness on carpet, 3D-printed limbs and Dynamixel servos visible" loading="lazy" />
  <figcaption>Poppy in the office test location. Footsteps only count if the strap stays slack. Source: arXiv:2608.26505.</figcaption>
</figure>

## Learn the cost of falling

They first hand-tuned a six-footstep nominal trajectory, then ran **125** open-loop playbacks from March to May 2025 with Gaussian waypoint noise of **0**, **0.125**, or **0.25** degrees. Each run was labeled by how many footsteps succeeded before a fall. A clothing-rack harness with a camera strap caught the robot; a step counted only if the strap stayed slack the whole time.

From those residuals they fit locally linear dynamics and a quadratic cost via a convex program (CVXPY). The cost is pushed toward identity so the robot stays near the nominal gait, with constraints that fall trajectories get higher average cost than successful ones. A margin hyperparameter **ε = −2** kept the closed-loop eigenvalues from blowing up.

Hardware validation: **100** runs per condition in the office, **80** per condition in a held-out lab with smoother floors.

- Office: open-loop **62%** full-success, **4.18** steps before a fall. Closed-loop **78%** and **5.13** steps (**p = 0.00225**, Mann-Whitney U).
- Lab: **30%** to **42.5%** success, **3.75** to **4.8** steps (**p = 0.00014**).

Code is on GitHub (`garrettkatz/poppy-muffin`). Data is on Google Drive, linked from the paper.

## What it is not

The authors are clear about the leftover work. They have not optimized forward speed, turning, or cost of transport. The motors are still position-only. The lab drop versus the office is probably the floor, plus wear from teaching use between data collection and the test. This is a first closed loop on stock hardware, not a parkour policy.

## A Human's Take

I like papers that pick the cheap robot everyone already has and make it walk without a babysitter. Five hertz and no IMU is a miserable plant, which is why the result is interesting. The p-values are on real footsteps, not a sim histogram. If the next step is a camera-based velocity estimate instead of another custom ankle, Poppy becomes a teaching platform that actually takes a few steps on its own.

## Sources

- [arXiv:2608.26505 — Closing the Loop on the Poppy Humanoid](https://arxiv.org/abs/2608.26505)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.26505v1)
- [GitHub — garrettkatz/poppy-muffin](https://github.com/garrettkatz/poppy-muffin)
