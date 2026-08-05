---
title: "Light-Loco-Parkour: One Depth Policy for Walk, Climb, Vault, and Outdoor Stairs"
description: "LLP grows sparse parkour seeds into terrain-paired skills and deploys a single onboard depth policy on a 90 cm humanoid without runtime skill labels."
pubDate: 2026-08-05
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/light-loco-parkour-body.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most humanoid controllers either track flashy whole-body clips on flat floors or do boring walking with perception. **Light-Loco-Parkour (LLP)** (arXiv:2608.02653) tries to close that gap with **one deployable policy**: conditioned only on **onboard depth** and a **velocity command**, it decides when to walk, climb, step down, or vault — no reference stream, skill label, or runtime motion graph.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/96Rfm7OmHjY"
    title="Light-Loco-Parkour demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Whole-body parkour and outdoor stairs from a single depth policy. Source: LightParkour project / YouTube.</p>

## Real2Sim2Real, not a motion library dump

The project page frames the hard problem clearly: a parkour motion without its obstacle is only half a demonstration. LLP’s pipeline:

1. Recovers interaction intent from a **short real seed** (e.g. speed vault, reverse vault, climb).
2. Grounds it in simulation with obstacle geometry and actuator limits, then **expands obstacle height** (example cited: a **45 cm** seed grown through **75 cm** — about **0.83×** the **90 cm** robot’s standing height).
3. Distills privileged teachers into **one recurrent depth student** running at **50 Hz**.

Training uses multi-expert distillation plus **reward-only transition learning** so the policy times skill handoffs from depth and command alone.

<figure>
  <img src="/images/heroes/light-loco-parkour-body.jpg" alt="Lightbot 0 climbing, vaulting, balancing on planks and outdoor stairs" loading="lazy" />
  <figcaption>Hardware montage: box climbs, vaults, narrow plank, stepping stones, and outdoor stairs. Source: arXiv HTML / Light-Loco-Parkour paper figures.</figcaption>
</figure>

## Hardware and results (as claimed)

**Lightbot 0** is described as a custom **90 cm, 18.9 kg** humanoid with **21** actuated joints. A single recurrent policy runs onboard from a chest depth camera, proprioception, and velocity command — zero-shot transfer in indoor and outdoor hardware clips, per the abstract and project site.

Simulation tables on the project page show high success on core skills for the full system, large drops when recurrent memory is removed, and a steep cliff at the **75 cm** frontier for the deployable policy versus privileged teachers. Transition training lifts end-to-end handoff success from **33%** (isolated skills) to **98%** in their 100-trial setup.

<figure>
  <img src="/images/heroes/light-loco-parkour-3.jpg" alt="LightParkour training pipeline diagram" loading="lazy" />
  <figcaption>Training system overview: seed expansion, multi-expert distillation, transition learning, depth student. Source: arXiv HTML / project paper figures.</figcaption>
</figure>

## A Human's Take

Parkour is still a stress test, not a product roadmap — but “one policy, depth only, decides the handoff” is the right product shape if you want robots in human geometry. The height-curriculum idea is honest engineering: stop pretending one mocap clip is an operating envelope. I’d want field hours on wet outdoor stairs and true multi-obstacle courses before calling this deployment-ready.

## Sources

- [arXiv:2608.02653 — Light-Loco-Parkour abstract](https://arxiv.org/abs/2608.02653)
- [Light-Loco-Parkour project page](https://light-loco-parkour.github.io/)
- [Demo video on YouTube](https://youtu.be/96Rfm7OmHjY)
