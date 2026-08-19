---
title: "EATR-Stereo Lets a Head-Cam Humanoid Keep the Other Eye"
description: "HIT and Honor route paired stereo into a frozen VLA on a 33-DoF humanoid, hitting 60% full-task and 100% grasp on 100-second jobs."
pubDate: 2026-08-19
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/eatr-stereo.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A humanoid’s head cameras bounce with every step. One view gets a hand in the way; the other still sees the bottle. **EATR-Stereo**, from Harbin Institute of Technology and Honor, is a token-routing add-on that keeps the pretrained primary view and only pulls in the paired stereo frame when the body says it would help.

On a **33-DoF HONOR Omega 1.0** with a **37-D** proprioceptive state (33 joints plus a 4-D base quaternion), the paper reports **60.0%** full-task success, **100.0%** grasp success, and **80.0%** stage success on search–approach–grasp–place–return jobs that last **more than 100 seconds**.

<figure>
  <img src="/images/heroes/eatr-stereo.jpg" alt="HONOR Omega humanoid with head-mounted stereo cameras and a bottle search-grasp-place task" loading="lazy" />
  <figcaption>Physical evaluation on Omega 1.0: stereo head cameras, a 100-second bottle task, and an occlusion test. Source: Wu et al., arXiv:2608.17453.</figcaption>
</figure>

## How the routing works

The authors freeze a **Cosmos** vision–language model inside **GR00T N1.7**. Primary-view tokens stay in the original pathway. The other camera becomes **Cross-View Auxiliary Tokens (CVATs)** by querying the synchronized auxiliary sequence. A body-segmented encoder (legs, arms, head, waist, pose) then gates those tokens token-by-token.

They trained nine configurations on **1,000** segmented-task demonstrations for **60,000** steps. Policies run at **10 Hz** on an RTX 4090 and emit **30-step** action chunks, stitched with a local cubic B-spline.

<figure>
  <img src="/images/heroes/eatr-stereo-2.jpg" alt="Diagram comparing a fixed-camera arm to a biped with head-mounted stereo and paired-view occlusion" loading="lazy" />
  <figcaption>Why stereo on a walking humanoid is not the same as a tripod arm camera. Source: Wu et al., arXiv:2608.17453.</figcaption>
</figure>

## What beat the baselines

Over **180** physical trials (20 per method, split in-distribution / unseen bottle positions):

- EATR-Stereo: **12/20** full-task (**60%**), **20/20** grasps  
- StereoPolicy on the same backbone: **45%** full-task, **85%** grasp  
- Default two-image GR00T: **35%** full-task  
- Monocular GR00T: **35%** full-task, **55%** grasp

Under severe asymmetric occlusion — bottle gone from the primary view, still partly visible in the auxiliary — recovery hits **80%** (8/10) in **22.4 s** mean, versus **30%** for CVAT without the body router.

Training cost stays close to frozen GR00T: **10.95 hours** versus **10.35 hours** on 16 H20 GPUs. An estimated-depth VLA that fine-tunes four VLM layers reached the same **80%** stage rate in **41.8 hours**.

In RoboCasa365 simulation (18 tasks, 360 trials, no wrist cameras), EATR-Stereo led at **43.33%** (156/360).

## A Human's Take

Stereo on a biped is mostly a self-occlusion problem. Hands, torso, and gait keep eating the primary frame. Routing the spare camera instead of fusing it into mush is the part I would steal.

One hundred percent grasp on twenty trials is a lab number, not a warehouse number. I want the same routing on a longer shift, with the bottle behind a moving coworker instead of a staged hand.

## Sources

- [arXiv:2608.17453 — EATR-Stereo HTML](https://arxiv.org/html/2608.17453v1)
- [arXiv:2608.17453 — abstract](https://arxiv.org/abs/2608.17453)
