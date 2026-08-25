---
title: "IIT Kanpur Teaches a G1 to Stand Up Without Demos"
description: "A PPO sit-to-stand policy on a simulated Unitree G1 hits over 97% success across eight chair heights, no motion capture required."
pubDate: 2026-08-24
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/sit-to-stand.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Standing up from a chair looks trivial until you write the controller. **Meet Pal Singh**, **Vyankatesh Ashtekar**, and **Ashish Dutta** at **IIT Kanpur** put a paper on arXiv on **August 21** that trains sit-to-stand from scratch on a simulated **29-DoF Unitree G1**. No demonstrations. No reference trajectories.

On a deterministic, force-free evaluator the policy clears **more than 97%** balanced-standing success across **eight** chair heights, including seats the authors call substantially deeper than prior work.

<figure>
  <img src="/images/heroes/sit-to-stand.jpg" alt="Four-frame simulation of a Unitree G1 rising from a brown chair to standing" loading="lazy" />
  <figcaption>Stop-motion of the learned sit-to-stand. Source: arXiv:2608.20823.</figcaption>
</figure>

## The trick is the curriculum, not a motion clip

The robot is G1 in **MuJoCo**. The policy is **PPO**, **50 Hz**, episodes up to **40 seconds**. Observations are proprioceptive (97-D): gravity in the torso frame, IMU, joint positions and velocities, last action, and an action-bound scaler.

Three pieces do the work:

1. **Assisted exploration that decays.** A vertical pelvis-assist force starts high and drops. New, taller chairs unlock only as that force comes down. The table in the paper starts with force above **100 N** on the lowest chair only, and does not open all eight lanes until force is in the **20–40 N** band.
2. **A huge pose library.** Inverse kinematics, not joint noise, randomizes seated and standing poses. **29,260** seated states over eight heights. Head rise from sit to stand is **0.24–0.34 m**, largest on the lowest chair.
3. **Stage rewards from biomechanics.** A rise-fraction **ρ** based on head height picks among sit, mid-rise, and stand rewards so the same thresholds work on every chair. Center-of-pressure shaping and angular-momentum terms cover seat-off.

The authors’ complaint about earlier RL sit-to-stand: either the robot is barely sitting (most of the weight already on the feet) or the stand-up is abrupt. They want a deep sit and a smooth rise.

<figure>
  <img src="/images/heroes/sit-to-stand-2.jpg" alt="Simulated Unitree G1 seated on a chair with arrows showing randomized torso, hip, and foot pose ranges" loading="lazy" />
  <figcaption>IK pose randomization used at episode start. Source: arXiv:2608.20823.</figcaption>
</figure>

## What this is not

This is simulation. The paper describes the motion as “amenable to physical implementation.” It does not report a real G1 standing up from a chair. Jiang et al., which they cite, did show a shallow sit-to-stand on hardware and lost **40–60%** success outside a favorable sitting zone. That is the bar this method still has to clear on metal.

<figure>
  <img src="/images/heroes/sit-to-stand-3.jpg" alt="Plot of center-of-pressure locus during sit-to-stand" loading="lazy" />
  <figcaption>COP locus used to keep the support region honest during seat-off. Source: arXiv:2608.20823.</figcaption>
</figure>

## A Human's Take

I like that they refused to cheat with a mocap clip. Sit-to-stand is exactly the kind of contact-rich, one-off motion that imitation learning papers hide inside a skill library. Training it from a decaying pull-up force is closer to how you would actually boot a robot that sat down and now has to leave.

The honest next frame is a real chair, a real G1, and the same 97% after the carpet compresses. Until then, it is a very clean sim result from a small lab, and those still belong in the feed.

## Sources

- [arXiv:2608.20823 — Natural Sit-to-Stand Motion Synthesis For Humanoids](https://arxiv.org/abs/2608.20823)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2608.20823v1)
