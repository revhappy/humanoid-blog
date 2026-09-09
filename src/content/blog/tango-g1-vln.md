---
title: "TANGO Walks a G1 Through Clutter by Moving the Whole Body"
description: "A CoRL 2026 VLA predicts 29-DoF G1 actions from language and RGB, trained only in sim, then zero-shot through a 30-meter office."
pubDate: 2026-09-09
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/tango-g1-vln.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most vision-language navigators treat a robot like a wheeled dot on a floor plan. **TANGO** does not. The CoRL 2026 paper from Berkeley, Peking, Tsinghua, HKU, and Princeton trains a whole-body VLA that, given a language instruction and egocentric RGB, predicts **29-DoF** joint-space actions for a **Unitree G1**. Then it walks that policy onto hardware with **no** real-world navigation data.

The teaser is a 30-meter cluttered office route, plus sidestep, squat-under, and step-over clips. The authors call it the first whole-body vision-language navigation framework for language-conditioned humanoid traversal in clutter.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/67a-jjJpXKE"
    title="TANGO: humanoid navigation in cluttered environments"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">G1 long-horizon navigation, sidestep, squat, and stride. Source: TANGO project page / YouTube.</p>

## Plan, edit, then track

Training is all simulation. The team augments **578** indoor scenes from VLNVerse and SAGE-3D with three obstacle types: lateral (narrow passages), ground-level (step-over), and overhead (duck). A pipeline they name **PET** (Plan, Edit, Track) plans an A* path, edits whole-body motion for arm clearance, crouch, and step, then runs a **SONIC** tracker as an executability filter. Failures get dumped. Supervision comes from the edited references, not the tracked copies, so the gait stays human-like.

The resulting set is **64,633** trajectories. PET plus rendering took **211** GPU-hours on RTX PRO 6000 cards.

<figure>
  <img src="/images/heroes/tango-g1-vln-2.jpg" alt="TANGO architecture: PET motion pipeline plus Qwen2.5-VL and a flow-matching action expert" loading="lazy" />
  <figcaption>Plan-Edit-Track on top, Qwen2.5-VL plus flow-matching action expert below. Source: TANGO paper, Figure 2.</figcaption>
</figure>

The policy is a triple stack. **System-2** is **Qwen2.5VL-7B**, warm-started from InternVLA-N1. **System-1** is a flow-matching MM-DiT action expert trained with real-time chunking. **System-0** is an off-the-shelf SONIC tracker. Front and downward cameras stack into one frame. At deployment the VLA runs on a server GPU every **0.5 s**; the tracker runs onboard a Jetson Orin NX at about **200 Hz**. Camera and state stream with about **20 ms** latency.

## Numbers, with a caveat

On VLNVerse, TANGO is the only method evaluated under physical control rather than teleportation, and the paper still reports the highest success rate and lowest navigation error on seen and unseen splits. In cluttered augmented scenes it cuts collision rate from **15.81%** on the strongest modular baseline to **9.90%**, using RGB only while that baseline also gets LiDAR.

Real-world tests use three settings, three scenes each, five trials per scene (**15** trials per method per setting): short ~10 m, long ~30 m, and one hard 3D obstacle. TANGO posts the highest success and fewer collisions than fine-tuned InternVLA-N1 plus Unitree’s official controller. Ablations are blunt. Strip real-time chunking and success falls from **43.75%** to **10.94%**. Strip motion editing and collision rate jumps to **20.60%**. Swap SONIC for ScaleBFM and the scores stay within three points.

<figure>
  <img src="/images/heroes/tango-g1-vln-3.jpg" alt="Real G1 sequences for long-horizon navigation, sidestep, squat under an obstacle, and stepping over a floor obstacle" loading="lazy" />
  <figcaption>Language prompts and G1 stills for the four real-world behaviors. Source: TANGO paper, Figure 4.</figcaption>
</figure>

The authors flag the limits themselves: the tracker still struggles on stairs, and RGB-only vision is a poor substitute for depth or LiDAR in low light.

## A Human's Take

I like that they made the body part of the path, not a passenger on a 2D waypoint. A G1 that sidesteps a chair because the policy predicted 29 joints, not because someone wrote a dodge primitive, is the kind of demo that makes me replay the clip. The 0.5-second server hop and the stair caveat are the receipts. Zero-shot from sim is impressive. Walking up a real staircase is the next argument.

## Sources

- [arXiv:2609.09158 — TANGO](https://arxiv.org/abs/2609.09158)
- [TANGO project page](https://tango-vla.github.io/tango-vla.github.io)
- [TANGO paper HTML](https://arxiv.org/html/2609.09158v1)
- [TANGO demo — YouTube](https://www.youtube.com/watch?v=67a-jjJpXKE)
- [Hugging Face — TANGO paper card](https://huggingface.co/papers/2609.09158)
