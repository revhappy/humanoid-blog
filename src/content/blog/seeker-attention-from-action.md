---
title: "Seeker Learns Where to Look From the Action Stream"
description: "KTH and Freiburg train a DINOv3 ROI readout with no gaze labels and lift real-robot success from 48% to 77%."
pubDate: 2026-08-14
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/seeker-roi.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most “look here” modules for robot policies want extra labels: gaze, object boxes, VLM crops. **Seeker**, from KTH, Freiburg, and Universität Hamburg (arXiv **August 13**), trains the crop from the action stream alone.

A task- and state-conditioned query walks over frozen **DINOv3** patch tokens, gathers evidence, and updates itself. The readout becomes a mask and a box. Downstream you can crop RGB, hide the background, or filter a point cloud. Code and a MimicGen checkpoint are on GitHub.

<figure>
  <img src="/images/heroes/seeker-roi.jpg" alt="Seeker real-robot coffee, cleanup, and board-assembly start and goal frames" loading="lazy" />
  <figcaption>Real tasks used in the paper: coffee scoop, cleanup, board assembly. Source: Seeker paper.</figcaption>
</figure>

## Attention as a search, not a keyframe

Action-derived crops usually lock onto the gripper at a motion stop. That fails when the cue is a lid across the table or a slot the fingers have not reached yet. Seeker does not pick a proxy point. Multiple readout heads are gated by the current query, so the focus can move from object to contact to spatial relation as the task proceeds.

The readout is trained with a diffusion action-prediction loss. That head is only there to supervise “where to look.” A separate policy then consumes the focused view.

<figure>
  <img src="/images/heroes/seeker-roi-3.jpg" alt="Seeker-predicted crops on third-person and wrist cameras" loading="lazy" />
  <figcaption>Predicted ROIs on agent-view and eye-in-hand cameras. Source: Seeker paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/seeker-roi-4.jpg" alt="Seeker architecture: iterative query over DINOv3 patches producing an ROI" loading="lazy" />
  <figcaption>Iterative gated readout over frozen DINOv3 patches. Source: Seeker paper.</figcaption>
</figure>

## The lift

Under the same RGB stack, Seeker raises average simulation success from **42.6%** to **62.6%**. On real robots, in-domain success goes from the best baseline’s **48.3%** to **76.7%**. Under lighting and background shifts it goes from **20.0%** to **60.0%**.

The released `seeker.mimicgen.pth` was trained jointly on six MimicGen tasks: coffee preparation, pick-and-place, square, stack-three, threading, and three-piece assembly. The repo also documents a guided background-swap protocol that paints new textures outside the predicted mask.

## A Human's Take

I like that nobody had to wear an eye tracker. If the action already knows where the demonstrator was looking, you should be able to recover that map. The 20-to-60 jump under lighting changes is the number I will quote: a crop that still finds the mug when the tablecloth changes is more useful than a 2-point sim bump. I want to see the same readout on a humanoid wrist cam, where the background is a kitchen, not a MimicGen table.

## Sources

- [arXiv:2608.13422 — Attention from Action, for Action](https://arxiv.org/abs/2608.13422)
- [Seeker HTML paper](https://arxiv.org/html/2608.13422v1)
- [Seeker GitHub repository](https://github.com/zheyu-zhuang/seeker)
