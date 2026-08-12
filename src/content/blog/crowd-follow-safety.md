---
title: "A Follower Robot That Lets You Dial ‘Don’t Hit People’ vs ‘Don’t Lose Them’"
description: "An IROS 2026 paper splits crowd-following into cost constraints and deploys it zero-shot on a ROSMASTER X3."
pubDate: 2026-08-12
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/crowd-follow-safety.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Following one person through a crowd is two jobs that fight: stay close, and do not clip anyone. Pack both into one dense reward and you get a slider nobody can tune. An **IROS 2026** paper from Penn, UC Riverside, Stanford, NVIDIA Research, and Georgia Tech splits the job into a sparse task reward plus independent cost constraints, then trains with **PPO-Lagrangian**.

First author Shiting Gong and Jianpeng Yao share the lead. Marco Pavone and Jiachen Li are on the author list. The project page and code went up with the August 10 arXiv posting.

<figure>
  <img src="/images/heroes/crowd-follow-safety.jpg" alt="Top-down crowd-following episodes with uncertainty buffers around pedestrians" loading="lazy" />
  <figcaption>In-distribution and out-of-distribution CrowdNav episodes. Light-blue rings are uncertainty buffers. Source: Gong et al. / project page.</figcaption>
</figure>

## Cost thresholds you can name

The policy sees occupancy maps, predicted human trajectories, and a prediction-uncertainty term they fold into the costs. Four critics share one actor. Instead of “double the human-collision weight and hope,” they expose thresholds **δF** (following) and **δH** (human safety).

On their in-distribution CrowdNav-with-obstacles suite:

| Method | Success | Collision | Target lost |
| --- | --- | --- | --- |
| Classic social-force / ORCA / MPC baselines | 1.8–31% | 43–82% | high |
| Dense-reward RL | 68.00% | 24.08% | 15.76% |
| RL + ACI | 71.60% | 20.72% | 12.80% |
| **Theirs (balanced δ=3.6 / 3.6)** | **78.08%** | **16.16%** | **10.72%** |

Dialing the thresholds actually moves the robot. Safety-leaning (δF=4.0, δH=3.2) drops target-lost rate to **8.80%**. Following-leaning (δF=3.2, δH=4.0) cuts average following-distance error to **3.20%**. Doubling a reward weight on the RL+ACI baseline does not give the same clean trade.

Out of distribution: **89.76%** success in a narrow corridor (vs 82.96% RL+ACI), **70.56%** with 15% rushing pedestrians, **64.32%** under a social-force pedestrian model, **59.68%** against walking groups.

<figure>
  <img src="/images/heroes/crowd-follow-safety-2.jpg" alt="Policy diagram: occupancy maps, trajectory prediction, uncertainty, actor and four critics" loading="lazy" />
  <figcaption>One actor, four critics, PPO-Lagrangian. Uncertainty feeds the cost, not just the observation. Source: Gong et al. / project page.</figcaption>
</figure>

## Zero-shot on a small wheeled robot

They deployed the same policy, no extra fine-tune mentioned, on a **ROSMASTER X3** under ROS 2, following a person past pedestrians and static obstacles. The project page points at a supplementary video for those runs. Code is listed at github.com/tasl-lab/nav-ps-balance.

This is not a humanoid paper. It is a follower that has to live in the same hallway as people, which is the setting a lot of service humanoids will inherit whether they like it or not.

## A Human's Take

I have watched too many “social navigation” demos that look fine until someone sprints. Giving the operator two named knobs, proximity and collision, is more useful than another blended reward. The X3 deployment is a start, not a factory aisle. I want those same thresholds on a platform that can actually hurt someone, logged over a week, not a lab clip.

## Sources

- [arXiv:2608.10056 — Navigating the Proximity-Safety Balance](https://arxiv.org/abs/2608.10056)
- [Project page — tables, qualitative figures, real-robot note](https://nav-ps-balance.github.io/)
- [Code — tasl-lab/nav-ps-balance](https://github.com/tasl-lab/nav-ps-balance)
