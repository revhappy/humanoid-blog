---
title: "SOLO Walks a Humanoid 1.5 km on One Chest Camera"
description: "A new perceptive locomotion stack completes a 1.5 km outdoor route and mixed indoor terrain using only chest depth and proprioception."
pubDate: 2026-08-29
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/solo-humanoid.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A paper posted to arXiv on **27 August 2026** describes **SOLO**, a perceptive humanoid locomotion stack that the authors deploy zero-shot with a single chest-mounted depth camera and proprioception. No motion capture, no external odometry, no external map. The same policy, running at **50 Hz** on **25** controlled joints, finishes a continuous **1.5-kilometer** outdoor route and an indoor mixed-terrain course.

The authors’ diagnosis is blunt. Dense terrain reconstructors smear the edges a foot actually needs, and copying a teacher at the current step does not punish actions that blow up later. SOLO splits the fix in two.

<figure>
  <img src="/images/heroes/solo-humanoid-2.jpg" alt="Height-map comparison of SOLO’s query reconstructor versus dense baselines on stairs and stepping stones" loading="lazy" />
  <figcaption>Query reconstruction keeps stair edges and sparse footholds that dense maps smear. Source: SOLO project page / arXiv:2608.26583.</figcaption>
</figure>

## Query maps and future blame

**Query Reconstructor (QR)** asks a Fourier-encoded query for every cell in a **16 × 32** height map and pulls evidence from a shared depth-plus-proprioception token memory. The paper says QR cuts height-map L1 error by **3.3–4.0×** versus dense reconstructors.

**Trajectory-Aware MSE (TA-MSE)** distillation adds next-state teacher–student disagreement to the PPO reward, so Generalized Advantage Estimation can push that penalty back onto earlier actions.

On stress-test terrains, SOLO reports **97.5%** mean traversal success and **96%** stepping-stone success. Dense-reconstructor variants sit at **75.0–75.6%** mean success and **0–3%** on stepping stones.

The project page lists the indoor course as stairs, sparse footholds, a gap, a descent, and a movable obstacle in one continuous run, plus a multi-flight fire-stair ascent.

## The same stack on Tiangong Omni

The authors say the locomotion technology in this work was also run on **Tiangong Omni** robots at the **2026 World Humanoid Robot Games** in Beijing: gold and bronze in the **400 m obstacle** course, silver in the **100 m obstacle** course. At **WRC 2026**, Omni walked stepping stones and stairs in front of a public audience. The still on the project page, credited to People.cn, is that WRC demo, not a lab mocap stage.

That is a competition result on a named platform, not a claim that SOLO itself took the medals. The paper’s own hardware claim is the chest-camera, 1.5 km route.

## A Human's Take

A kilometer and a half with one noisy chest camera is the sentence that matters. Obstacle-course medals are fun; compounding error on mixed ground is the actual job. I want to see the 1.5 km film without cuts, and I want to know what happens when the depth camera hits sun glare or rain. If QR really keeps stair edges that dense maps blur, that is a small geometric trick with a large walking bill.

## Sources

- [arXiv:2608.26583 — SOLO](https://arxiv.org/abs/2608.26583)
- [SOLO project page](https://sunpihai-up.github.io/solo/)
