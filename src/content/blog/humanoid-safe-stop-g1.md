---
title: "Safe-Stop Asks Whether a Humanoid Should Hit the Brakes at All"
description: "Berkeley, CMU, and Stanford train a G1 stop policy plus two stoppability critics, with 96.4% OOD stops and hardware clips that still fall."
pubDate: 2026-09-04
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/safestop-teaser.png"
readTime: "4 min read"
featured: false
draft: false
---

An e-stop on a wheeled AMR is “cut power.” On a humanoid, the same reflex can put the torso through the floor. **Junfeng Long** and advisors **Pieter Abbeel**, **Koushil Sreenath**, **Roberto Horowitz**, **Guanya Shi**, and **C. Karen Liu** posted **Safe-Stop** on **2 September**: a stop policy, two critics that guess whether a stop is still legal, and a rule that hands off to damping if they disagree.

The teaser is a Unitree **G1** in an orange vest. Top row: motion tracking, trigger, decelerate, stand. Bottom row: same trigger, then a fall the estimators had already flagged.

<figure>
  <img src="/images/heroes/safestop-teaser.png" alt="G1 humanoid stopping cleanly in one sequence and falling in another, with RA-value and stop-probability traces" loading="lazy" />
  <figcaption>Recoverable stop versus predicted fall. Source: Long et al., arXiv:2609.02358.</figcaption>
</figure>

## Two numbers have to agree

The stop actor sees a **93-D** proprioceptive vector: projected gravity, base angular rate, joint offsets, joint velocities, last action. No task command, no map, no base height or linear velocity. Estimators mask the **14** arm joints.

**P̂** is a discounted stop-success critic (γ **0.999999**). **V̂** is a Hamilton–Jacobi-style reach-avoid danger value from height, tilt, and speed. At runtime, the last **K=5** samples must all show **P̂ ≥ 0.95** and **V̂ ≤ −0.3** or the robot switches to a damping fall policy. Split-conformal calibration in the appendix picks **0.90 / −0.34**; the deployed triple is the hand-tuned one.

Training is in Isaac Lab on G1, **50 Hz**, **4,096** envs. A locomotion sampler runs **0.2–1.0 s**, then the stop policy takes the velocity command.

## Sim transfer, then the lab floor

On **179,650** out-of-distribution BONES-SEED initializations, the stop policy succeeds in **96.4%** (**173,259 / 179,650**). Success stays above **94%** below **2 m/s** and drops around **2–3 m/s**. Estimator AUCs: **0.971** (P̂), **0.969** (V̂), **0.972** combined. The windowed dual rule hits **3.89%** false-positive rate and **99.78%** precision on the in-distribution set, approving only **31** of **797** true failures.

A locomotion-trained model transferred to motion-tracking states at **1.31%** fall rate. The reverse transfer was worse (**7.99%**).

Hardware: five clips, **30** reps each (**150** trials), difficulty scores from **−0.56** to **1.10**. Failures: **3/30**, **1/30**, **1/30**, **15/30**, **28/30**. High-difficulty sim rates (**70%**, **100%**) roughly match real (**50%**, **93%**). Low-difficulty clips still show a **3–10** point hardware noise floor.

<figure>
  <img src="/images/heroes/safestop-speed.png" alt="Bar chart of stop success rate versus initial speed on out-of-distribution motions" loading="lazy" />
  <figcaption>OOD stop rate by speed. Source: Long et al., arXiv:2609.02358.</figcaption>
</figure>

Limits: the fall policy is damping, not a learned SafeFall, and the stack does not ask whether *continuing* the task would return the robot to a stoppable set. Project page: [junfeng-long.github.io/safestop](https://junfeng-long.github.io/safestop/).

## A Human's Take

I have watched too many “just zero the velocity command” clips end in a kneel. Asking “can I stop from here?” before you try is the grown-up e-stop. The hardware column is the one I will keep: at high RA value the G1 still eats the mat **28** times out of **30**. That is the point of the paper, not a failed demo.

## Sources

- [arXiv — Humanoid Safe Stop via Learned Stoppability Value](https://arxiv.org/abs/2609.02358)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2609.02358v1)
- [Project page — Safe-Stop](https://junfeng-long.github.io/safestop/)
