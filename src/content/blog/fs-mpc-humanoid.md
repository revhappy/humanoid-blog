---
title: "FS-MPC: Sampled Control That Doesn’t Fall Over on a Unitree H1"
description: "CMU and MIT post Feedback Sampling MPC, a hybrid sampler that keeps MPPI stable on contact-rich humanoid walk and pick-and-place."
pubDate: 2026-08-21
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/fs-mpc-humanoid.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Sampling-based model-predictive control is easy to throw on a GPU and hard to trust on a machine that can fall down. **Chaoyi Pan**, **Guanya Shi**, and colleagues at Carnegie Mellon, with **Zachary Manchester**’s group at MIT, posted **FS-MPC** (Feedback Sampling MPC) on arXiv August 19. The claim is simple: if you sample through a feedback policy instead of open-loop noise, the rollouts stop exploding.

They put it on a real **Unitree H1** for walking a room and stuffing a cylinder into a cart.

<figure>
  <img src="/images/heroes/fs-mpc-humanoid.jpg" alt="FS-MPC vs MPPI diagrams above H1 walking and placing a cylinder" loading="lazy" />
  <figcaption>FS-MPC teaser: sampled-cost comparison and H1 hardware. Source: arXiv:2608.19443.</figcaption>
</figure>

## The problem they are actually solving

Standard **MPPI** draws control sequences from a Gaussian, rolls them open-loop, and softmaxes the cheap ones. On a car or a quasi-static arm that is fine. On an unstable humanoid, almost every sample diverges as the horizon grows. The paper proves that for an unstable linear system, the number of samples you need grows exponentially with horizon.

FS-MPC’s trick is a duality: for linear-quadratic problems, the best sampling covariance is the same as injecting noise into the optimal **iLQR** feedback. You do not sample a giant correlated sequence. You sample locally, apply feedback, and the joint distribution comes out right.

On nonlinear and contact-rich systems they mix two proposals. Some samples use the local feedback (or a learned **PPO** stabilizer when the dynamics are not differentiable). The rest stay isotropic for global search. The mix ratio depends on how many samples you can afford.

In simulation they report **43.4%** lower cumulative cost than standard MPPI when the feedback controller itself is suboptimal. Tables cover acrobot, quadrotor, a quadruped on a hill, **H1-2** pick-and-place, and an Allegro in-hand reorient. FS-MPC beats both MPPI and iLQR on the contact-rich end.

<figure>
  <img src="/images/heroes/fs-mpc-humanoid-2.jpg" alt="Side-by-side H1 walking and pick-and-place, MPPI vs FS-MPC" loading="lazy" />
  <figcaption>H1 walking and cylinder-to-cart under MPPI vs FS-MPC. Source: arXiv:2608.19443.</figcaption>
</figure>

## On the H1

Hardware uses proprioception plus a **Vicon** mocap stream, fed into a **MuJoCo MPC** stack, then joint-position commands. MPPI failed to keep the robot up. FS-MPC walked the room. Tracking error versus iLQR was only a modest improvement; the authors blame mocap delay and weak contact sensing. For the cart task, MPPI produced noisy motion that crashed. FS-MPC placed the cylinder.

Runtime settings they actually used: **8** local samples, **24** global, softmax temperature **1.0**. NSF and several Carnegie fellowships funded the work. Shi notes a concurrent Amazon Scholar appointment; the paper says the research was done at CMU, not Amazon.

## A Human's Take

I have watched too many “sampling MPC on a humanoid” clips that work until the horizon gets honest. Feedback in the sampler is the right diagnosis. The H1 cart task is the receipt I care about: contact, balance, a moving target. I still want onboard state, not Vicon. If this only flies in a mocap cage, it is a methods paper. If it holds with the robot’s own estimators, it is a controller.

## Sources

- [arXiv:2608.19443 — Hybrid Feedback Sampling for Sample-Efficient MPC](https://arxiv.org/abs/2608.19443)
- [arXiv HTML — figures, theorems, and H1 experiments](https://arxiv.org/html/2608.19443)
