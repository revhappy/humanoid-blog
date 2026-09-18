---
title: "Agile-WAM Inserts Plugs at 11.9 ms Without a Giant Video Backbone"
description: "UC Davis and Analog Devices jointly predict touch, vision, and actions on a Flexiv arm, with a 29.4% relative success bump on five contact tasks."
pubDate: 2026-09-18
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/agile-wam.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most tactile world-action models bolt touch onto a huge pretrained video generator and then wait. **Agile-WAM**, from UC Davis and Analog Devices, trains a small flow-matching backbone from scratch and still claims a **29.4%** relative gain in overall success on five real contact-rich tasks, at **11.9 ms** inference.

The paper landed 17 September. Hardware is a **Flexiv Rizon 4** with a wrist RealSense D405 and an Analog Devices **32×32** piezoresistive pad on the gripper.

<figure>
  <img src="/images/heroes/agile-wam.jpg" alt="Gripper performing gear assembly, peg insertion, Ethernet plug, unplug, and power-plug insertion" loading="lazy" />
  <figcaption>Five real tasks: gears, peg, Ethernet in/out, power plug. Source: Zhou et al., arXiv:2609.20761, Figure 3.</figcaption>
</figure>

## Vision is slow, touch is jumpy

The design bet is temporal mismatch. Adjacent camera frames look almost the same. Tactile force fields spike the instant you hit a lip. So Agile-WAM supervises **future vision at a longer offset** (the executed action length) and **tactile at the next frame**. Same horizon for both, they argue, either wastes the visual loss or smears contact.

Observations (RGB, TacFF, proprioception) fuse into a latent that is the *source* of a flow, not a cross-attention condition injected every ODE step. The flow’s target is a packed latent: action chunk, future visual latent, future tactile latent. Six Euler steps at inference. Action chunk **H=16**, execute **h=8**.

Simulation uses ManiFeel’s Franka + **10×14×3** TacFF. Real-world: 50 Quest 3 teleop demos per task, 20 eval episodes.

## What they measured

Each real task gets **50** Quest 3 demos and **20** eval episodes. Across the five tasks the paper reports a **29.4%** relative gain in overall success versus the strongest baseline, at **11.9 ms** latency. Table II breaks out per-task counts (gear, peg, power plug, Ethernet in, Ethernet out); Ethernet insertion is the weak one in that table. The clips that matter are recoveries: the peg slides along the plate when the wrist camera is occluded; the middle gear twists until teeth mesh. VITA (vision-only) and VITA-VT (same fusion, no joint future modeling) miss those corrections more often, the authors say.

<figure>
  <img src="/images/heroes/agile-wam-2.jpg" alt="Sequences of gear, Ethernet, and peg insertions with red boxes on the recovery frames" loading="lazy" />
  <figcaption>Corrective slides and twists after a missed first contact. Source: arXiv:2609.20761, Figure 4.</figcaption>
</figure>

On a 4090, Table III lists **10.35 ± 0.14 ms** end-to-end vs **9.71 ms** for VITA and **408 ms** for Diffusion Policy at 100 denoising steps. The abstract’s **11.9 ms** is the number they put in the highlight reel. Ablations say the gain is not just a bigger latent: turning off visual and tactile prediction losses while keeping the extra capacity hurts.

Project page: [hanchuzhou.github.io/TARO_project_page](https://hanchuzhou.github.io/TARO_project_page/).

## A Human's Take

Eleven milliseconds is the part I trust more than “world model.” If you can keep contact while the camera is looking at the back of a plug, you have a policy that belongs on a line, not a reel. Six of twenty Ethernet insertions is also a number. Ship the unplug trick; keep iterating the insert.

## Sources

- [Zhou et al. — Agile-WAM (arXiv:2609.20761)](https://arxiv.org/abs/2609.20761)
- [Paper HTML with figures](https://arxiv.org/html/2609.20761v1)
- [Agile-WAM project page](https://hanchuzhou.github.io/TARO_project_page/)
