---
title: "GALATEA Turns Generated Hand Videos Into Real Grasps"
description: "Berkeley and Sharpa ground 1,500+ Seedance clips in Isaac Gym, then run a Sharpa Wave hand at 27/40 on unseen plans."
pubDate: 2026-09-10
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/galatea-hero.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Generated videos are cheap. Executable finger contact is not. **GALATEA**, from UC Berkeley, Sharpa Robotics, and the University of Hong Kong (arXiv September 9), is a pipeline that reconstructs hand–object trajectories from prompted clips, trains tracking experts in **Isaac Gym**, and deploys a distilled controller on a **Sharpa Wave** hand on a **Franka Research 3**.

They start from a real first-frame RGB plus language, then generate with **Seedance 2.0**. Three motion types: grasp-and-move, push-and-pull, pose-adjust. Of **2,500** generated clips, **83%** pass reconstruction, about **2,000** usable references. More than **1,500** of those get grounded in simulation by expert controllers.

<figure>
  <img src="/images/heroes/galatea-hero.jpg" alt="Sharpa Wave hand on a Franka arm grasping, pushing, and reorienting yellow, red, and green objects" loading="lazy" />
  <figcaption>Real-world grasp-and-move, push-and-pull, and pose-adjust. Source: GALATEA paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/galatea-2.jpg" alt="GALATEA pipeline from generated videos through HOI reconstruction and RL grounding to a tracking controller" loading="lazy" />
  <figcaption>Generate, reconstruct, ground in sim, distill one tracker. Source: GALATEA paper.</figcaption>
</figure>

## Reconstruct, then track

Reconstruction is not a single network guess. Stereo depth from the first frame metric-aligns MoGe-2 depth. SAM2 masks, FoundationPose object motion, and WiLoR MANO hands go into a joint optimizer with contact frames from HOI-DETR. Human raters put this method first in **417 of 480** judgments (**87%**), mean rank **1.17**.

Simulation uses PhysX. The actor is a 29-D MLP (7 arm + 22 hand) at 30 Hz PD. SAPG splits parallel rollouts across PPO agents with different exploration. Expert policies on 42 training objects hit a **78.6%** macro mean. On a 10-object benchmark, experts lead at **77.4%** mean, more than **25** points over the paper’s tracking baselines during that training comparison. Distillation to one controller costs about **4.2** points on the training set and still does **54.2%** mean on five novel objects without retraining.

<figure>
  <img src="/images/heroes/galatea-3.jpg" alt="Side-by-side human and Sharpa Wave grasps: jar neck, top-down pinch, mug rim push, mug handle" loading="lazy" />
  <figcaption>Unseen video plans vs real execution: neck grasp, pinch, rim push, handle. Source: GALATEA paper.</figcaption>
</figure>

## 27 out of 40 on the bench

Closed-loop real eval: **40** unseen video plans, four tasks, **10** trials each. Overall **27/40**. The paper’s Table III flags pose-adjust at **6/10** in the excerpted row; the qualitative point is grasp *choice*. A jar-neck power grasp leaves the opening free. A top-down pinch grabs the rim. That distinction lives in the video plan, which is why they keep both hand and object motion instead of object-only tracks.

Failures they name: palm-friction lifts that a robot hand cannot copy, thin objects near the table, and contact transitions that dump the tracker off the reference. In-hand manipulation is mostly absent.

## A Human's Take

I will take 27/40 on unseen generated plans over another “the video model is the policy” demo that never closes the gripper. The useful engineering is the reconstruction yield: 83% usable versus the 4% reconstructable rate they cite from in-the-wild 100 Days of Hands. Prompted generation is a filter. It is still not a shift. When the reference is a little wrong, this controller does not magically recover. That is the next paper.

## Sources

- [arXiv:2609.10050 — Grounding Generated Video Plans](https://arxiv.org/abs/2609.10050)
- [GALATEA project page](https://boyuan-an.github.io/GALATEA/)
- [GALATEA paper HTML](https://arxiv.org/html/2609.10050v1)
