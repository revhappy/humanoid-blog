---
title: "Weave Teaches a G1 to Walk Up and Carry the Chair"
description: "One policy on a Unitree G1 plus Inspire hands hits 92.5% on trained carry tasks in simulation, 65% on unseen clips."
pubDate: 2026-09-16
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/weave-loco-manip.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most humanoid “pick up the chair” clips hide a split: a walking controller, then a grasping controller, then hope the object does not yank the torso over. **Weave**, posted 15 September by **Liu Cao**, **Xingze Wu**, **Jingzhi Cui**, **Botian Xu**, **Mingzhi Pei**, **Ruoqu Chen**, and **Mengdi Xu** (Tsinghua IIIS, Tsinghua College AI, Dalian University of Technology, CUHK, with work partly at CocoMatrix), trains one policy for both.

The robot is a **Unitree G1** with **29** actuated body degrees of freedom and two **Inspire** hands with **12** actuated finger joints. The policy commands the body plus the proximal finger joints. Distal joints follow fixed mimic couplings.

<figure>
  <img src="/images/heroes/weave-loco-manip.jpg" alt="Many simulated Unitree-style humanoids carrying chairs, tables, boxes, and lamps on a black grid" loading="lazy" />
  <figcaption>Parallel simulation rollouts across nine everyday objects. Source: Cao et al., arXiv:2609.16683, Figure 1.</figcaption>
</figure>

## From a human clip to a robot carry

Captured human–object motion arrives as SMPL-X bodies plus object trajectories. Weave retargets that to the G1 with whole-body inverse kinematics, then refines the hands so fingertips sit on the object and a force-closure term can actually hold it. **Kimodo** fills in the missing walk-up, sampling different approach directions so one captured carry becomes several complete references.

A unified PPO policy then tracks those references across all objects at once. Rewards mix pelvis and body tracking, object pose, a hand-opposition term, and contact matching. Episodes die if the pelvis drifts more than **0.25 m**, the object more than **0.30 m**, or expected hand contacts vanish for ten control steps.

Training uses **7,869** reference trajectories (**19.56 hours**) over nine objects: tripod, two chairs, clothes stand, small table, floor lamp, large box, large table, small box. A held-out split has **1,605** trajectories (**3.67 hours**).

<figure>
  <img src="/images/heroes/weave-loco-manip-2.jpg" alt="Pipeline diagram from human demonstration through retargeting, approach completion, and policy rollout" loading="lazy" />
  <figcaption>Contact-aware retargeting, approach prefixes, then one policy. Source: arXiv:2609.16683, Figure 2.</figcaption>
</figure>

At **100k** iterations the multi-object policy reaches **92.5%** success and **96.3%** progress on the training split. Object rotation error falls to **7.18°** and object position error to **4.27 cm**. Without extra training it scores **65.0%** success and **84.5%** progress on unseen sequences of the same objects.

Joint training helps completion more than specialist tracking. One policy trained on all nine objects for **27k** iterations hits **95.3%** pooled success on the test split, against **91.5%** for nine specialists given the same aggregate budget. Specialists often track a little tighter and finish fewer carries.

The authors also release about **9,000** physically executed simulation rollouts, roughly **23 hours**, with contact annotations.

## What this is not

The paper is clear: evaluation is entirely in simulation. The policy sees ground-truth odometry and object pose. Real-world use would need onboard estimation or a perception student. Heavy or highly articulated objects sit outside the randomized set. The policy is reference-conditioned. It executes a supplied interaction; it does not pick the next object on its own.

## A Human's Take

A 65% transfer number on unseen carries is the interesting bit, not the 92% on clips it trained on. I care whether a G1 can walk up, close fingers that actually load the object, and keep the pelvis inside a quarter meter. Until that runs on metal with a depth camera, it is a very good simulator argument. The 23-hour rollout dump is the part other labs can actually use.

## Sources

- [Cao et al. — Weave (arXiv:2609.16683)](https://arxiv.org/abs/2609.16683)
- [Weave project page](https://xiaohu-art.github.io/Weave/)
---
