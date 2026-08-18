---
title: "ReForce Makes Dexterous Retargeting Care About Newtons"
description: "UC San Diego trains a residual force tracker so an XHand can copy a human grasp without crushing a paper cup or missing contact."
pubDate: 2026-08-18
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/reforce.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Kinematic retargeting copies the pose. It does not copy the squeeze. UC San Diego’s **ReForce** (arXiv, August 16) treats that as the actual problem: predict a residual on top of the kinematic command so fingertip force matches what the human meant.

The robot is a **UFACTORY xArm** with a **12-DoF XHand**. The human side is a Quest (or AprilTag + RealSense L515) for the wrist, a Manus glove for the hand, and five fingertip FSRs, calibrated into the same Newton scale as the robot’s tactile pads.

<figure>
  <img src="/images/heroes/reforce.jpg" alt="XHand squeezing tongs and pinching a spring cup, with ReForce vs kinematic replay" loading="lazy" />
  <figcaption>Tongs and spring-pinch sequences. Source: Wu et al., arXiv:2608.15560 / project page.</figcaption>
</figure>

## A tracker, not another digital twin

Earlier force-aware retargeters optimize each demo in simulation against a known object mesh. ReForce trains one closed-loop tracker on large-scale randomized hand-object rollouts. The project page lists about **131k** simulated episodes and **68.2 million** augmented samples.

At run time the policy sees current joints, measured fingertip normals, the kinematic target, the force target, and the errors. It emits a clipped joint update (about **5°** per step). Same controller for live teleop and offline demo translation. An optional ACT-style chunker (30–40 demos per task, no vision) can supply the motion-and-force reference.

<figure>
  <img src="/images/heroes/reforce-2.jpg" alt="Manus glove, FSR fingertips, Quest headset, and xArm with XHand" loading="lazy" />
  <figcaption>Human sensing and robot execution. Source: Wu et al., arXiv:2608.15560.</figcaption>
</figure>

## Cups and tongs

On replayed paper-cup grasps (five trials each), mean absolute force error:

| Grasp | Replay | Admittance | ReForce |
| ----- | ------ | ---------- | ------- |
| Side | 0.309 N | 0.280 N | **0.247 N** |
| Top | 0.736 N | 0.619 N | **0.474 N** |

When the reference comes from the learned ACT policy (10 trials unless noted):

- **Paper cup** (1.0 N safety cap): ReForce **70%** force-safe success vs **30%** for the bare policy. Tracking error **0.124 N** vs **0.812 N**. Severe missing-contact (three or more fingers never touch): **0/10** vs **7/10**. Mean active fingers **2.61** vs **0.17**.
- **Tongs** (3.0 N cap): admittance wins force-safe success (**90%**) and tracking. ReForce still has the most active fingers (**1.62**) and fewer missing-contact failures than the bare policy, but **4/11** over-force trials hurt the score.

Limits they own: the ACT reference has no vision, and ReForce only sees normal force, not shear or slip.

<figure>
  <img src="/images/heroes/reforce-3.jpg" alt="Replay vs admittance vs ReForce contact behavior" loading="lazy" />
  <figcaption>Replay ignores contact error; admittance uses a fixed mapping. Source: Wu et al., arXiv:2608.15560.</figcaption>
</figure>

## A Human's Take

If your retargeter cannot tell a hold from a crush, it is a puppeteer, not a hand. ReForce is the first paper this week that treated Newtons as the thing to copy.

The tongs result is the honest one. Admittance still wins when the mapping is simple and the threshold is 3 N. I care that they published that instead of burying it. Next test I want is a cup that is not in the training set and a shear channel that can say “slipping” before the cup folds.

## Sources

- [arXiv:2608.15560 — ReForce](https://arxiv.org/abs/2608.15560)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.15560v1)
- [Project page](https://wuyuhang-eai.github.io/reforce/)
