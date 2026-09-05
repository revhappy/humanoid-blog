---
title: "AdaRoboVLG Splits Grasp Physics From Language, Then Shares the Policy Across Hands"
description: "A new VLG stack keeps a hand-agnostic grasp policy and bolts on spatial, cognitive, and temporal priors. Real clutter: 83.3% over 510 trials."
pubDate: 2026-09-05
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/adarobovlg-cross-hand-grasp.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**AdaRoboVLG**, posted **3 September** ([arXiv:2609.04096](https://arxiv.org/abs/2609.04096)), is a vision-language-grasp stack that refuses to bake the hand into the language model. A shared base policy proposes physically feasible grasps. Separate foundation-model modules dump spatial, cognitive, and temporal priors into a structured interface. Swap the hand, keep the policy.

The project page’s hero is a dual-arm cell hovering over a pile of clothes and a slipper. That is the point: functional grasps in a mess, not a single trained pose on a cube.

<figure>
  <img src="/images/heroes/adarobovlg-cross-hand-grasp.jpg" alt="White dual-arm robot with a black two-finger gripper over a pile of clothes and a yellow slipper" loading="lazy" />
  <figcaption>Studio still of the dual-arm cell used to introduce AdaRoboVLG. Source: AdaRoboVLG project page.</figcaption>
</figure>

## One policy, three hands

The base policy maps object geometry and **contact grasp representations** into executable poses, then scores them with a hand-object interaction embedding that is supposed to be hand-agnostic. The paper trains that decision model jointly on **DH3** (3-finger), **Allegro** (4-finger), and **Inspire** (5-finger).

On **DexGraspNet 2.0**, the project page’s clutter-aware table lists AdaRoboVLG success at **91.2%** (DH3), **90.5%** (Allegro), and **92.7%** (Inspire) in the first reported column of the comparison. The authors say compact contact representations plus a human-inspired grasp taxonomy shrink the search, which is why clutter does not fall off a cliff as fast as the baselines they plot.

The three priors do different jobs:

- **Spatial**: scene-level contacts for collision-aware clutter
- **Cognitive**: language to functional part and grasp type (RAG + chain-of-thought; **0.94** part accuracy and **0.87** grasp-type accuracy on 125 open-set instructions / 57 tasks / 80 object categories)
- **Temporal**: object-motion updates for moving targets. On GraspNet-1Billion they report association **1.0** and the lowest translation error in their table (**0.22** on the seen split)

<figure>
  <img src="/images/heroes/adarobovlg-cross-hand-grasp-2.jpg" alt="Twelve real-world functional grasps across food, household, tool, toy, electronics, and textiles" loading="lazy" />
  <figcaption>Zero-shot functional grasps in static clutter, 102 objects. Source: AdaRoboVLG project page.</figcaption>
</figure>

## Clutter that moves

Static clutter is **102** everyday objects, **510** trials, **83.3%** overall success. Failure slices on the project page: 30% functional-part recognition, 22% pose estimation, 20% contact stability, 16% multi-object interference, 12% grasp-type error. Hardware shown includes KEENON XMAN-R1 + ROHand, TianJi Marvin + ROHand, and TianJi Marvin + Pika gripper.

Dynamic clutter is a conveyor at **2–5 cm/s** with 16 targets plus distractors. A separate disturbance set (out-of-view recovery, fast motion, occlusion, simultaneous translation and rotation) hits **89.7%** over 10 objects, five trials each. Grasp updates run at **5 Hz**.

They also bolt on extras without retraining the grasp policy: bimanual sorting via a task-allocation module, and transparent objects via depth completion.

<figure>
  <img src="/images/heroes/adarobovlg-cross-hand-grasp-3.jpg" alt="Diagram of spatial plus cognitive priors for static clutter and all three priors for a moving conveyor" loading="lazy" />
  <figcaption>How the three priors stack for static vs conveyor scenes. Source: AdaRoboVLG project page.</figcaption>
</figure>

## A Human's Take

Decoupling “what the sentence wants” from “whether this hand can close on it” is the part I want copied. Hands keep changing. If every new five-finger design forces you to retrain the whole VLA, nobody ships. Eighty-three percent in real clutter with 102 objects is a serious table. I still want to see the 16.7% that failed, especially the 20% that lost contact. That is the shift, not the studio hero.

## Sources

- [arXiv:2609.04096 — Adaptive Vision-Language Grasping](https://arxiv.org/abs/2609.04096)
- [AdaRoboVLG project page — method, DexGraspNet table, real-world 83.3%](https://adarobovlg.github.io/)
- [arXiv HTML — full paper](https://arxiv.org/html/2609.04096v1)
