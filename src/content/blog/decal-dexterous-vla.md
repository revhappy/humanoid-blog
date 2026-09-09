---
title: "DeCAL Lets a Dexterous VLA Feel Before It Commits"
description: "Peking and BAAI’s CoRL 2026 model gates tactile input on contact and hits 71% success on six real SharpaWave-hand tasks."
pubDate: 2026-09-09
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/decal-dexterous-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Vision-language-action models go blind the moment five fingers wrap an object. **DeCAL**, from Peking University and the Beijing Academy of Artificial Intelligence, is a CoRL 2026 attempt to stop guessing through that occlusion. The policy unifies understanding, imagination, and action, and it only turns the tactile channel up when the fingers actually touch something.

The hardware is two **6-DoF UR5** arms, two **22-DoF SharpaWave** hands, three RealSense D435 cameras, and a 320×240 vision-based tactile sensor in every fingertip. Each fingertip yields a raw image, a 6-DoF net force, and a deformation map.

<figure>
  <img src="/images/heroes/decal-dexterous-vla-4.jpg" alt="UR5 dual-arm rig with SharpaWave hands, RealSense cameras, and Manus Metagloves on the table" loading="lazy" />
  <figcaption>The real-world stack: UR5s, SharpaWave hands, RealSense D435s, Manus Metagloves Pro. Source: DeCAL project page.</figcaption>
</figure>

## Gate the touch, imagine the contact

DeCAL is a Mixture-of-Transformers with three experts. The understanding expert is **Qwen3-VL**. A generation expert predicts future visual and tactile latents. An action expert uses **factorized flow matching**: arm and hand start from separate noise, then coordinate. Information flows one way, understanding → generation → action.

The useful bit is the **contact-aware gate**. A global tactile token decides how much local fingertip evidence to add. When the hand is in free space the gate stays low and vision runs the show. On contact it jumps, and touch is allowed to move the action. Ablations on Assemble Parts and Twist Cap show dropping the gate costs **15** and **10** percentage points of success.

They also jointly imagine future vision and touch, including force, deform maps, and raw tactile images. Inference skips the pixel decoders and just uses the latents. Average latency is **0.27 s** per action chunk.

<figure>
  <img src="/images/heroes/decal-dexterous-vla-3.jpg" alt="Six real DeCAL tasks: wipe vase, erase whiteboard, assemble parts, twist cap, pipetting, screw light bulb" loading="lazy" />
  <figcaption>Six contact-rich tasks, 100 demos each, 20 eval trials. Source: DeCAL paper.</figcaption>
</figure>

## The scoreboard

Six tasks, **100** teleop demos each (MetaGlove Pro plus VIVE trackers), **20** trials per method:

| Task | DeCAL SR | Next-best named |
|------|----------|-----------------|
| Wipe vase | **100%** | DECO 90% |
| Erase whiteboard | **80%** | DECO 60% |
| Assemble parts | **65%** | InternVLA-A1t 45% |
| Twist cap | **80%** | DECO 70% |
| Pipetting | **60%** | GR00T N1.6 60% |
| Screw light bulb | **40%** | DECO 35% |

Average success is **71%**, progress success **83.4%**, **15** points over DECO, the strongest tactile specialist they ran. Out of distribution on Twist Cap: unseen background **60%**, clutter **70%**, unseen lighting **70%**, unseen object **75%**.

The paper is honest about the rest. Tactile sensors drift. The teleop rig does not give the operator fingertip force. There is no large-scale visuo-tactile pretraining.

## A Human's Take

A gate that shuts up until contact is how I would wire a hand if I had to ship it. Seventy-one percent across wipe, twist, pipette, and a light bulb is a lab average, not a shift. The 40% on the bulb is the number I would put on the slide, not the vase. If they scale tactile data without the operator flying blind on force, this stack gets interesting.

## Sources

- [arXiv:2609.09119 — DeCAL](https://arxiv.org/abs/2609.09119)
- [DeCAL project page](https://aureleopku.github.io/DeCAL)
- [DeCAL paper HTML](https://arxiv.org/html/2609.09119v1)
