---
title: "EGR Stops a VLA From Listening to the Wrong Camera"
description: "UNC and MERL add evidence-gated training so π0.5 ignores junk sensors. On Kinova arms, distractor success jumps from 30% to 85%."
pubDate: 2026-09-04
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/egr-vla-modality.png"
readTime: "3 min read"
featured: false
draft: false
---

A VLA with three cameras will happily bind a walk to the floor texture in a wrist view. **Yue Yang** (UNC Chapel Hill / MERL) and colleagues call that **modality entanglement**. Their paper, posted **2 September**, adds a training loss that asks, per frame, which sensor actually sees the task.

They name the loss **Evidence-Gated Regularization (EGR)**. It does not change the architecture and adds **zero** cost at inference. The backbone is **π0.5**.

<figure>
  <img src="/images/heroes/egr-vla-modality.png" alt="Four panels of a wheeled humanoid: wrist-camera distractors stall navigation; a shelf occludes the head camera" loading="lazy" />
  <figcaption>Two failure modes: junk in a useless wrist camera, and a policy that will not trust the remaining wrist view. Source: Yang et al., arXiv:2609.03142.</figcaption>
</figure>

## What EGR actually does

For each frame and each sensor, EGR builds an evidence score. Cameras get it from how much of the focal object is visible. GelSight gets it from contact. That score gates two consistency terms:

- **Invariance** on low-evidence sensors: corrupt them and the action should not move.
- **Sufficiency** on high-evidence sensors: keep only that sensor and the action should still match the full observation.

Random modality dropout is the obvious baseline. On their BEHAVIOR-1K skill set it does not fix the entanglement. EGR does, at least relative to vanilla π0.5.

Simulation, 47 rollout skills (11 nav + 36 manipulation), 20 rollouts each:

| Condition | vanilla π0.5 | EGR |
| --- | --- | --- |
| Manipulation, all sensors | **12.5%** | **16.4%** (+31%) |
| Corrupt the useless camera | **9.4%** | **16.5%** (+75%) |
| Keep only the useful camera | **2.8%** | **6.1%** (+120%) |
| Nav, single useful sensor | **15.5%** | **37.3%** (+141%) |

Clean nav stays about flat (42.3% → 40.9%). The gain is under corruption, which is the point.

## Two real robots

They then run the same loss on hardware that does not look alike.

<figure>
  <img src="/images/heroes/egr-vla-modality-2.png" alt="GelSight crack and serial-code tasks next to a dual Kinova setup closing a microwave and stacking bowls" loading="lazy" />
  <figcaption>Left: MELFA ASSISTA plus GelSight. Right: two Kinova arms, three RGB cameras. Source: Yang et al., arXiv:2609.03142.</figcaption>
</figure>

**Bi-manual Kinova**, three RGB cameras, four tasks × four conditions × 10 trials. Averaged across tasks, EGR takes RealDistractor success from **30% to 85%** (+183%). UsefulOnly (only the informative cameras survive) goes **25% → 72.5%**. Clean goes **70% → 80%**.

**MELFA ASSISTA** with one RGB camera and two GelSight sensors, two inspection-style tasks (board crack, pencil serial code). SingleUseful goes **40% → 90%**. RealDistractor goes **55% → 70%**. Clean is a wash within trial noise (**90% → 85%**).

<figure>
  <img src="/images/heroes/egr-vla-modality-3.png" alt="Bar charts of success rate for EGR versus baseline on bi-manual and vision-tactile platforms" loading="lazy" />
  <figcaption>Real-robot success rates. Source: Yang et al., arXiv:2609.03142.</figcaption>
</figure>

The authors are honest about the evidence function: it needs task structure you can name (visible objects, a crack signature). In-hand reorientation where the cue itself must be learned is future work.

## A Human's Take

I have watched too many wrist cameras train a policy to “see” a table leg that is not the job. EGR is a training-time scolding: if this camera is looking at the floor, stop using it. The Kinova distractor jump is the number I care about, because that is a physical object the policy never met. The sim success rates are still low in absolute terms. This is a robustness patch, not a new manipulator. Use it that way.

## Sources

- [arXiv — Sensing Which Modality Matters: Evidence-Gated Regularization (2609.03142)](https://arxiv.org/abs/2609.03142)
- [arXiv HTML — full paper with hardware figures](https://arxiv.org/html/2609.03142v1)
