---
title: "A Stick Insect’s Few Steps Taught a Hexapod to Walk"
description: "Tohoku and VISTEC used inverse RL on a handful of stick-insect steps so VISTEC’s RedMirror hexapod learned walking, rough ground, and a missing leg."
pubDate: 2026-08-29
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/tohoku-stick-insect-hexapod.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Tohoku University and Thailand’s **VISTEC** trained a walking controller from a few steps of stick-insect data, then put it on a six-legged robot. Tohoku’s English press note is dated **27 August 2026**. The paper sits in *Bioinspiration & Biomimetics*: “From Insect Behavior to Transferable Robot Locomotion,” DOI **10.1088/1748-3190/ae901f**, authors Yuchen Wang, Chuthong Thirawat, Mitsuhiro Hayashibe, Poramate Manoonpong, and Dai Owaki.

The physical machine is VISTEC’s **RedMirror**: six legs, **18** joints. Interesting Engineering, working from the same press note on **28 August**, says the insect is *Medauroidea extradentata*, and that the AI saw flat-ground walking across those 18 joints rather than a hand-written gait.

<figure>
  <img src="/images/heroes/tohoku-stick-insect-hexapod.jpg" alt="RedMirror six-legged robot with red joint housings and VISTEC labels standing on a concrete floor" loading="lazy" />
  <figcaption>RedMirror, the VISTEC hexapod used in the study. Source: Tohoku University / Dai Owaki.</figcaption>
</figure>

## They did not tell it how to walk

Associate professor **Dai Owaki** put it this way in the Tohoku note: “We never told the robot how to walk. We asked what the insect was trying to achieve, and let the robot chase the same thing entirely on its own.”

The method is **adversarial inverse reinforcement learning (AIRL)** plus **PPO**. One network compares the robot’s motion to the insect; another learns a reward that makes insect-like coordination pay. The controller reads body orientation, joint angles, and foot contact, then commands all 18 joints.

Tohoku says walking on the robot came together in about an **hour**, and about **three times faster** than a standard reward. Interesting Engineering gives the transfer experiment in training steps: AIRL reward plus a forward-velocity term hit a usable walk in **70,000** steps, versus **200,000** with velocity shaping alone. Directly copying the original walking policy onto a second, physically different robot failed. Copying the learned reward, then retraining a policy, worked.

Owaki: “It’s remarkable that a few steps from a single stick insect were enough to find a principle that works on a machine five times its size.”

<figure>
  <img src="/images/heroes/tohoku-stick-insect-hexapod-2.jpg" alt="Grid of RedMirror walking in simulation and on the real floor, including a missing-leg sequence" loading="lazy" />
  <figcaption>Simulated walks (a, b) and the physical robot (c), including a damaged-leg case. Source: Tohoku University / Dai Owaki.</figcaption>
</figure>

## Rough ground and a missing leg

Trained only on flat-ground insect data, the controller still walked on uneven terrain, IE reports: more body motion, only a slight drop in forward speed, and a more wave-like timing. Disable one of six legs and it reorganized the remaining five instead of replaying the old pattern.

A preliminary test on the real RedMirror showed walking and coordination that looked, qualitatively, like the sim. Tohoku’s next step, they say, is adding memory so the robot can accumulate experience. Disaster-site hexapods are the application they wave at, not a claim that this unit is shipping to a collapsed building.

<figure>
  <img src="/images/heroes/tohoku-stick-insect-hexapod-4.jpg" alt="Diagram from insect joint data through AIRL and PPO to RedMirror robot control" loading="lazy" />
  <figcaption>How a few insect steps become a transferable reward, then a robot policy. Source: Tohoku University / Dai Owaki.</figcaption>
</figure>

## A Human's Take

Stealing the insect’s *objective* instead of its joint tape is the clever bit. The missing-leg test is the receipt I wanted: not a prettier walk on a flat floor, a re-coordination when the body is wrong. I still want hours, not an hour, and a second species in the teacher set before I call this a general locomotor principle. For now it is a clean idea on a messy, honest-looking hexapod.

## Sources

- [Tohoku University — Six-legged robot learns to walk from a stick insect](https://www.tohoku.ac.jp/en/press/%20six_legged_robot_learns_to_walk_from_insect.html)
- [Interesting Engineering — stick insect hexapod recap](https://interestingengineering.com/ai-robotics/new-six-legged-robot-mimics-stick-insect)
- [DOI 10.1088/1748-3190/ae901f — Bioinspiration & Biomimetics](https://doi.org/10.1088/1748-3190/ae901f)
