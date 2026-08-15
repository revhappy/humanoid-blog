---
title: "Hand2Bot Teaches a UR5e to Wait Until You Mean the Handover"
description: "NTU’s PassGen builds a 5,000-clip RGB-D handover set and an intention gate that cut false triggers from 25/30 to 2/30 on a real arm."
pubDate: 2026-08-15
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/hand2bot-passgen.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Nanyang Technological University**, **Zhejiang University**, and **Alibaba** posted **Hand2Bot** and **PassGen** on **August 13**. The problem they name: most handover datasets are either clean synthetic depth or a tight crop of a hand. A robot that only watches the fingers will grab when you are just waving a cup.

Authors: **Tianyu Sun**, **Zhoujie Fu**, **Zihui Gao**, **Bang Zhang**, **Guosheng Lin**.

<figure>
  <img src="/images/heroes/hand2bot-passgen.jpg" alt="Real noisy depth vs clean sim, and a UR5e taking a carton from a person" loading="lazy" />
  <figcaption>Fig. 1: L515 noise vs synthetic depth, plus a real UR5e handover. Source: Sun et al., arXiv:2608.13028.</figcaption>
</figure>

## A dataset with faces in the frame

**Hand2Bot** is **5,000** RGB-D pairs: **2,125** real, **2,875** generated. Real capture uses an **Intel RealSense L515** in **7** indoor scenes with **33** household objects. About **20%** of clips are negatives: the person moves the object but is not offering it.

They timestamp the “presentation period,” run **GraspNet** for 6-DoF parallel-gripper poses, and filter for near-vertical approaches that miss the human hand.

**PassGen** is the generator. **Stable Video Diffusion** plus a **Temporal Face Encoder** (ArcFace embeddings through temporal attention) keeps gaze and micro-expressions. A morphology pass then chews holes into the depth so it looks like an L515, not a perfect mesh.

<figure>
  <img src="/images/heroes/hand2bot-passgen-2.jpg" alt="PassGen vs Animate-X and StableAnimator on masked handover clips" loading="lazy" />
  <figcaption>Fig. 4: PassGen keeps the object; other animators smear or drop it. Faces are masked in the paper. Source: Sun et al., arXiv:2608.13028.</figcaption>
</figure>

On 250 real test clips, PassGen’s tabled image/video scores are **25.12 / 0.909**, above StableAnimator (**23.17 / 0.867**).

## The gate on a UR5e

Intention gating fuses gaze confidence and object approach speed, then latches (monotone). Threshold **τ = 0.80**. Full module: **90.0%** mean accuracy, **13.6%** false-positive rate. No gaze, no object term: **72.7%** acc, **95.5%** FPR.

On the arm, camera on the **UR5e** base, **1.5–2.2 m** out, tilted up. **10** objects (5 seen, 5 unseen). Intention success **54 / 60** with the gate. False triggers **2 / 30** with the gate, **25 / 30** without. ISR here means “the robot started the reach during presentation,” not that every grasp completed.

Adding the 2,875 synthetic clips to real-only training moved mean acc **87.5% → 90.0%** and FPR **22.8% → 13.6%**. Unseen-object ISR went **6/10 → 7/10**. The authors treat that as variance reduction, not a big generalization win.

<figure>
  <img src="/images/heroes/hand2bot-passgen-3.jpg" alt="PassGen pipeline with appearance encoder, temporal face encoder, and pose guidance" loading="lazy" />
  <figcaption>PassGen pipeline: appearance, pose, and face streams into SVD. Source: Sun et al., arXiv:2608.13028.</figcaption>
</figure>

## A Human's Take

The result I will remember is 25/30 false grabs without the gate. Gaze is doing real work there. I am less sold on generated faces as training fuel until someone shows the robot still waits when the lighting is ugly and the person is talking to someone else. The L515 hole pattern is the right kind of ugly to keep.

## Sources

- [arXiv:2608.13028 — RGB-D Video Generation for H2R Handover](https://arxiv.org/abs/2608.13028)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.13028v1)
