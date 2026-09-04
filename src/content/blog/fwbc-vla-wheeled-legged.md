---
title: "FWBC-VLA Wipes a Board and Opens a Loaded Door Without a Force Sensor"
description: "A Deep Robotics M20S estimates contact from residual torque, then a VLA and whole-body compensator share that signal for wiping and door work."
pubDate: 2026-09-04
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/fwbc-real.png"
readTime: "4 min read"
featured: false
draft: false
---

A wheeled-legged quadruped with an arm can lean into a whiteboard or a door closer. The VLA that picks the next pose usually has no idea how hard that lean is. **FWBC-VLA**, posted **3 September** by a team spanning Zhejiang University, Shanghai AI Lab, Tsinghua, Zhongguancun Academy, **Deep Robotics**, and others, estimates that load from joint torque residuals instead of bolting on a force/torque sensor.

The hardware is a **Deep Robotics M20S** with a **CM1 6-DoF** arm, a **1-DoF** gripper, and three RealSense **D435i** cameras (base, hand, third person). The contact-rich tests are whiteboard wiping and door opening, including a closer the paper pegs at **50 N** at the handle.

<figure>
  <img src="/images/heroes/fwbc-real.png" alt="Deep Robotics M20S failing and succeeding at whiteboard wiping and door opening" loading="lazy" />
  <figcaption>Baseline failures on top; FWBC-VLA rollouts on the bottom. Source: Zhang et al., arXiv:2609.03889.</figcaption>
</figure>

## Residual torque in, two loops out

**HSR-Force** is a pair of LSTMs running at **200 Hz**. One watches torque-and-motion history; the other watches current arm, leg, base, and IMU state without torque history so sustained contact is not swallowed as “normal dynamics.” A fixed gate mixes them. The residual is summarized as strength plus its one-step change, then packed into force tokens for the VLA action expert.

The backbone is pretrained **π0.5**, fully fine-tuned on a **WL&Arm** teleop set the authors say they will release: more than **5,000** episodes at **15 Hz** for loco-manipulation, **200 Hz** joints for estimation. Task mix: bottle pick-and-place **41%**, whiteboard wiping **25%**, door opening **21%**. Calibration loads are **0.36 kg** and **0.72 kg** on a force gauge.

A second path takes the same residual, projects it through Jacobians into end-effector and body wrenches, and emits a bounded base-velocity correction for the whole-body controller.

<figure>
  <img src="/images/heroes/fwbc-wipe.png" alt="Whiteboard wiping with and without force conditioning" loading="lazy" />
  <figcaption>Uneven contact when force tokens are dropped. Source: Zhang et al., arXiv:2609.03889.</figcaption>
</figure>

## What the contact stages actually do

On four contact-critical stages, the paper’s ablation table is blunt. No force: **12.0%** average. Force tokens only: **35.0%**. Full FWBC-VLA (force interface plus body compensation): **65%**. Pushing a door **with** the closer goes from **0%** without compensation to **52%**. Board cleaned goes from **8%** / **32%** to **76%**.

The authors also run OpenVLA, StarVLA, π0.5, GR00T N1.6, ACP, ForceVLA, and a ground-truth force variant. They say FWBC-VLA leads every reported stage on both tasks, and that the estimator version sits close to the real F/T-sensor control.

Limits they list: they have not fully mapped how estimator error hits task success, and the stack is still a VLA sitting on top of a separate WBC, not a single whole-body policy.

## A Human's Take

I am here for “we refused to buy the wrist sensor.” Residual torque is a messy proxy, and they treat it as one. The number that sold me is the door closer: force tokens get you to the handle, and the body compensator is what keeps the chassis from walking away while you lean **50 N** into a spring. If the 5,000-episode dump actually ships, this is a useful recipe for every wheeled-leg arm that was never designed for a mini F/T cell.

## Sources

- [arXiv — FWBC-VLA: Force-Aware Whole-Body Compensation for Contact-Rich Loco-Manipulation](https://arxiv.org/abs/2609.03889)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2609.03889v1)
