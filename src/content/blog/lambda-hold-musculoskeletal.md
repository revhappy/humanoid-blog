---
title: "Lambda-Hold Learns a Human-Like Sprint From Velocity Alone"
description: "Seoul National University’s λ-hold controller trains a 90-muscle model to sprint in about an hour using a stretch-reflex command, not raw excitations."
pubDate: 2026-08-19
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/lambda-hold.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Muscle-level reinforcement learning is usually a mess. Ninety actuators, a many-to-one map to joints, and Gaussian noise that cancels itself. **Jun Hyuk Lee, Chihyeong Lee, and Jooeun Ahn** at Seoul National University change the command. The policy does not output excitations. It outputs a per-muscle equilibrium-point threshold **λ**, then a stretch-reflex law turns length and velocity into drive.

They hold each λ across a gait-phase interval so the policy is queried only at sparse ground-reaction events. On the **H2190** model — **21** mechanical DoF, **90** muscle–tendon units, simulated in SCONE/Hyfydy — that is enough to learn a coordinated sprint from a **forward-velocity reward** plus a small lateral penalty. No motion-capture imitation, no metabolic-cost term, no symmetry reward.

<figure>
  <img src="/images/heroes/lambda-hold.jpg" alt="Diagram of a sprinting musculoskeletal model with a stretch-reflex law holding lambda between policy queries" loading="lazy" />
  <figcaption>Policy sets λ at intermittent decisions; the stretch reflex fills the gaps. Source: Lee et al., arXiv:2608.17030.</figcaption>
</figure>

## An hour, not a week

The authors call this the first human-like sprint in a predictive musculoskeletal simulation under that minimal reward. On their workstation (RTX 5070, 24-thread Ultra 9), a sprint around **4.0 m/s** shows up in **about an hour** of wall-clock training. Peak speed reaches about **4.7 m/s**.

Decision points fire when vertical GRF on either foot crosses **0.05 body weight** (strike or toe-off), plus one sub-point in between, with holds clamped to **0.05–0.15 s**. Reflex gains are shared: tonic **50**, phasic **0.1**. λ is boxed to **[0.6, 1.2]**.

Against Plain SAC, excitation-hold, DEP-RL, and a 30-D synergy baseline, λ-hold pulls away within the first **10 million** simulation steps. Plain SAC and synergy stall after a step or two and a dive. DEP-RL later walks at about **2.6 m/s** with a forward lean. Excitation-hold, which repeats raw excitations on the same schedule, sits an order of magnitude below λ-hold on return. The extra lift is the threshold variable, not just holding.

<figure>
  <img src="/images/heroes/lambda-hold-2.jpg" alt="Hip, knee, ankle, and vertical GRF curves comparing simulated lambda-hold sprinting to human treadmill data" loading="lazy" />
  <figcaption>Speed-matched kinematics and vertical GRF versus human treadmill running. Source: Lee et al., arXiv:2608.17030.</figcaption>
</figure>

## How human-like

Sagittal angles and vertical GRF follow human treadmill shapes from Fukuchi et al. at **2.5, 3.5, and 4.5 m/s**. Hip and knee swing flexion lag the human as speed rises. Muscle activations versus **5.0 m/s** surface EMG average **r = +0.42**. Plantarflexors match well (soleus **0.80**, gastroc med **0.87**); tibialis anterior goes the wrong way in swing (**−0.44**).

Joint-velocity coverage finishes about **2.5×** DEP-RL and about **7×** Plain SAC. Code on the project page is still marked TBA; videos are up.

## A Human's Take

I like controllers that steal a spinal reflex instead of another reward term. If the skeleton couples the muscle lengths, you should not have to invent synergies by hand.

This is still a sim sprinter, not a robot. The useful transfer, if it comes, is to humanoids that are overactuated and slow to explore. An hour to a gait is the number I want other labs to try to beat.

## Sources

- [arXiv:2608.17030 — Lambda-Hold HTML](https://arxiv.org/html/2608.17030v1)
- [Lambda-Hold project page](https://lee-jun-hyuk-37.github.io/projects/lambda-hold/)
