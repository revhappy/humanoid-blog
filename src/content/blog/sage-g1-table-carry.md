---
title: "Two G1s and a Person Carry the Same Table"
description: "SAGE puts two Unitree G1s and a person on one carry. In simulation it reports 71% success and very few collision steps."
pubDate: 2026-09-21
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/sage-humanoids.jpg"
readTime: "3 min read"
featured: false
draft: false
---

Carrying a table with another person is a shared object, not two robots doing solo tricks beside each other. A paper dated September 17, 2026, puts two Unitree G1 humanoids and a human partner on that job and wraps the policy in a safety filter. The method is SAGE, safety-aligned gradient enforcement.

In nine simulation scenarios the authors report 71.0 percent success and 0.5 collision steps per thousand environment steps. On hardware, the same architecture shows up as the two G1s and a person moving a board and an octagonal table through a lab.

![Five photo strips of people and humanoid robots moving tables and boards through a lab](/images/heroes/sage-humanoids.jpg)

The safety piece is a control barrier function, a filter that changes a proposed action when that action would break a constraint. The paper's complaint is that the filter and the learner can disagree. The action the policy is graded on is not always the action the robot executes, and separate robots optimizing their own updates can drift from a team update.

SAGE tries to pull those back together. A shield-annealed layer keeps a differentiable penalty while the robot still executes the exact barrier quadratic program. A team-averaged update then corrects each robot's step so it stays on the safe side of a shared Lyapunov condition. The names in the paper are SAIL for the shield layer and TALO for the team update.

The ablation is the part worth reading slowly. Turning on the barrier filter directly cut collision frequency by 98.5 percent and also dropped success from 67.3 percent to 59.3 percent. SAIL cut proposal violations by 48.8 percent and cut the gap between proposed and executed actions by 85.2 percent. TALO cut the update-consistency gap by 50.8 percent.

<figure>
  <img src="/images/heroes/sage-humanoids-2.jpg" alt="Two Unitree G1 robots and people carrying a board, with trajectory plots" loading="lazy" />
  <figcaption>Outbound carry with two G1s and a human, plus Vicon paths from four trials. Source: SAGE paper, arXiv:2609.21130.</figcaption>
</figure>

The hardware section uses Vicon for those paths. One formation puts the person on the long edge and the G1s at the short ends. The return formation swaps who stands where. A separate photo set shows an octagonal table and rectangular payloads in tighter gaps. The paper treats those trials as a feasibility check, not as the nine-scenario score.

Authors are split across the University of Texas at Arlington and Carnegie Mellon, including Yisen Li, Hao Zhang, Ruize Geng, Yves Tseng, Ding Zhao, and H. Eric Tseng.

## A Human's Take

A filter that removes almost every collision and also loses success is the usual safety tax. I care more that they measured that tax than that they named the layers. Two G1s on a real board, with a person on the other edge, is the right kind of messy. The 71 percent figure is still the simulator.

What I want next is the hallway where the table does not fit the formation they practiced. If the shield only works on the route in the Vicon plot, it is a demo of coordination, not a carry you would trust with a heavier load.

## Sources

- [arXiv — SAGE: Safety-Aligned Gradient Enforcement for Human–Robot Collaboration](https://arxiv.org/abs/2609.21130)
- [arXiv HTML — SAGE](https://arxiv.org/html/2609.21130v1)
