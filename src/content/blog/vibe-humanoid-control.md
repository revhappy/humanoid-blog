---
title: "ViBe Lets a Blind Humanoid Tracker See Curbs, Cubes, and Dodgeballs"
description: "USC post-trains a frozen SONIC tracker with LoRA and a visual extractor; a G1 parkours, reorients cubes, and dodges balls zero-shot from sim."
pubDate: 2026-09-10
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/vibe-humanoid-control-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most whole-body humanoid trackers are great mimics and terrible lookers. They copy a motion clip. They do not see the curb, the suitcase, or the ball. **ViBe**, from the University of Southern California, is a post-training recipe that grafts vision onto a frozen tracker without retraining the whole stack.

The paper (arXiv:2609.09918, submitted **September 9, 2026**) runs the same recipe on a **Unitree G1** across four tasks: perceptive walk and parkour, Repose Cube, omni-object loco-manipulation, and dodgeball. Policies trained in simulation transfer **zero-shot** to hardware.

<figure>
  <img src="/images/heroes/vibe-humanoid-control-2.jpg" alt="G1 parkour over a box, dodging a red ball, carrying a suitcase, and flipping a colored cube" loading="lazy" />
  <figcaption>One adaptation recipe, four perceptive jobs on a Unitree G1. Source: ViBe paper, Figure 1.</figcaption>
</figure>

## Keep the tracker, learn the glance

The base controller is **SONIC**, the Science Robotics motion tracker. ViBe freezes it. A frozen **Theia-Tiny** vision encoder turns the head camera into patch tokens. A small cross-attention extractor, queried by the global image token, proprioception, and an optional task command, collapses those patches into a **128-dimensional percept**. Rank-**16** LoRA adapters inject that percept into the tracker decoder.

Only the extractor and adapters get PPO updates. Adapters start at zero, so the policy begins as the original tracker. Control runs at **50 Hz**, matching a head-mounted RealSense **D435i**. Training in mjlab / MuJoCo Warp finishes in under two days on an RTX 3090, 5090, or L40S, using **112×63** images.

## What the G1 actually does

Hardware rollouts show the G1 adjusting foot placement on curbs, building speed for a parkour jump, flipping a large cube until a requested face is on top, walking a suitcase or trash can, and ducking a thrown ball. Blind SONIC, given the same clips, walks into the curb and never completes the jump.

<figure>
  <img src="/images/heroes/vibe-humanoid-control.jpg" alt="G1 hardware strips: cube reorientation, suitcase carry, trash-can carry, and dodgeball" loading="lazy" />
  <figcaption>Uninterrupted hardware sequences for cube, suitcase, trash can, and dodgeball. Source: ViBe paper, Figure 3.</figcaption>
</figure>

Direct visual training reaches **89.6%**, **95.5%**, **90.3%**, and **94.7%** of a privileged-observation expert on walk, parkour, loco-manipulation, and dodgeball. No teacher-student distillation. On Repose Cube, the full extractor hits **93.1%** success at 50k updates; dropping the CLS or proprioception query costs about **15** points. Pretrained backbones (Theia, DINOv3-S+, SigLIP2-B) cluster within a **2.8%** standard deviation and beat a CNN trained from scratch.

A deliberately dumb planner solves Repose Cube by repeating a fixed flip routine while ViBe handles contact and recovery.

<figure>
  <img src="/images/heroes/vibe-humanoid-control-3.jpg" alt="G1 walking outdoors in sunlight and flipping a cube in low light and colored illumination" loading="lazy" />
  <figcaption>Outdoor sun, low light, and moving colored lights. Source: ViBe paper, Figure 6.</figcaption>
</figure>

Outdoor sunlight, low light, and colored disco lighting still work. Dynamic distractors do not: in dodgeball the policy sometimes dodges the thrower's head.

## A Human's Take

I like that they refused to train yet another task-specific student. A tracker that already walks like a person, plus a cheap visual bypass, is a much nicer research object than a one-off parkour net. The head-as-ball dodge is the honest limit. If the next version can tell a basketball from a face without another two days of domain randomization, then this recipe is ready to live under a real planner.

## Sources

- [arXiv:2609.09918 — ViBe](https://arxiv.org/abs/2609.09918)
- [ViBe project page](https://lok-i.github.io/vibe-control/)
- [ViBe paper HTML](https://arxiv.org/html/2609.09918v1)
