---
title: "MILD Walks an EngineAI Biped Across Foam, Grass, and Sand"
description: "HKU, BIT, and Tokyo model foot-by-foot granular contact and train a biped that identifies stiffness online, including 1.2 m/s foam trials."
pubDate: 2026-08-21
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/mild-bipedal-deformable.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most biped controllers train on rigid boxes. Real dirt is not a box. **MILD**, from the University of Hong Kong’s ArcLab, Beijing Institute of Technology, and the University of Tokyo, is a discrete-element foot-terrain model plus an RL walker that is supposed to feel when the ground gives. The paper landed on arXiv August 20 and is listed as IEEE Robotics and Automation Letters (2025).

Hardware is an **EngineAI SA01**: **12** DoF, **6** per leg. They walked it on rubber tile, **60d / 45d / 28d** polyurethane foam, grass, and sand.

<figure>
  <img src="/images/heroes/mild-bipedal-deformable.jpg" alt="EngineAI biped and foot close-ups on rubber, foam, grass, and sand" loading="lazy" />
  <figcaption>SA01 and foot-terrain contact across stiffness grades. Source: arXiv:2608.19955.</figcaption>
</figure>

## Why a new contact model

Biped feet are big. Treating the whole plate as one spring, the way many quadruped papers do, ignores the fact that the heel and toe sink differently. MILD chops the sole into **154** elements (about **0.0195 m** each). Every element grows its own granular “cone,” with added mass from packed grains, then a solver enforces friction cones and kinematic continuity so the foot does not tear itself apart in simulation.

They train **4096** agents in Isaac Gym for **20,000** episodes, about **42.4 hours** on an RTX 4080. Commands: forward **0–1.2 m/s**, yaw **±1.5 rad/s**. A VAE estimates base and foot motion from proprioception. A modulation net then affine-transforms a terrain latent using estimated foot velocity, so the policy can change gait when the ground goes soft.

<figure>
  <img src="/images/heroes/mild-bipedal-deformable-2.jpg" alt="SA01 stepping from tile onto yellow foam, with latent t-SNE plots" loading="lazy" />
  <figcaption>Tile-to-foam transition and latent-space shift. Source: arXiv:2608.19955.</figcaption>
</figure>

## What happened on metal

They report **10** forward and backward walking cycles at **1.2 m/s** on each of seven surfaces, including rigid, with **no failures**. On a sudden rubber-to-foam-to-rubber change the robot had never seen in training, stride length increased on the soft patch. t-SNE plots of the modulated latent cluster by stiffness.

Compared with HT-2 and Clock, two history-based walkers trained without an explicit soft-contact model, MILD posted lower cost of transport and lower peak torque at **0.3, 0.6, 0.9, and 1.2 m/s** on hardware. On 45d foam, the baseline-model walkers lifted the swing foot too little and hit joint limits or fell.

PD tracking on the real robot runs at **100 Hz**, with Kp **[50, 50, 70, 70, 20, 20]** and Kd **[5.0, 5.0, 7.0, 7.0, 0.2, 0.2]** per leg.

The authors are careful: this is walking, not running or jumping, and they want vision of the deforming ground next.

## A Human's Take

Labeled foam densities are the right kind of test. “It walked on sand” is a vibe; 28d versus 60d is a knob. The 1.2 m/s no-fail claim is only as good as those ten cycles, so I want a longer shift and a log of how often the latent is wrong. Still: a biped that lengthens stride when the yellow foam shows up is more useful than another rigid-terrain parkour clip.

## Sources

- [arXiv:2608.19955 — MILD](https://arxiv.org/abs/2608.19955)
- [arXiv HTML — model, hardware, and foam trials](https://arxiv.org/html/2608.19955)
