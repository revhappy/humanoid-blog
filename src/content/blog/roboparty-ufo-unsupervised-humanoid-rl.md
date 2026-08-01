---
title: "RoboParty UFO: Open Unsupervised RL for Humanoid Control"
description: "Shanghai lab open-sources UFO, an unsupervised RL stack for humanoids with TeCH, multi-robot bring-up, and kick-recovery demos on Unitree G1."
pubDate: 2026-08-01
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/roboparty-ufo-yt.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**RoboParty Lab** open-sourced **UFO** — short for a **U**nsupervised reinforcement learning **F**ramework for humanoid c**O**ntrol. The pitch is blunt: tracking-based control still dominates humanoids, unsupervised RL could buy disturbance robustness and skill composition, and the field has been missing shared infrastructure.

## What UFO actually ships

From the project page and GitHub:

- **Faster Forward-Backward (FB) training**: the team reports cutting FB training from multi-day runs down to about **6–8 hours** with better performance
- **TeCH**: a contrastive temporal-distance representation learner so unsupervised RL is not locked to one algorithm family
- **Multi-robot path**: Unitree **G1** is the best-tested route; the gallery also shows **Unitree H1**, **AgiBot X2**, and RoboParty’s own **RP0/RP1**, with per-robot training in roughly **2–3 hours** once motion data is adapted
- **Real-world hooks**: motion tracking, goal reaching, robust teleoperation under external disturbance, and a separate **`deploy`** branch aimed at G1 hardware

The framework expects **RobotState** motion data already retargeted to the target body. It does **not** auto-retarget human mocap across morphologies, and checkpoints are not shared across robots with different action or observation dimensions.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/uJPcLdn9sNA"
    title="UFO unsupervised RL humanoid control demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">UFO project demo: training pipeline highlights and real-world disturbance recovery. Source: RoboParty / YouTube.</p>

<figure>
  <img src="/images/heroes/roboparty-ufo-tech.jpg" alt="TeCH temporal contrastive representation diagram from UFO paper" loading="lazy" />
  <figcaption>TeCH learns a latent space where distance tracks temporal reachability. Source: RoboParty UFO project page.</figcaption>
</figure>

## Why the kick videos matter (and what they don’t prove)

Viral clips show engineers shoving and kicking a Unitree G1 while the policy recovers — including mid-teleop. That is a vivid stress test of a **broad, connected behavior space** learned by unsupervised exploration, not proof of production reliability. The open stack is licensed **CC BY-NC 4.0** for non-commercial research use, so “open” here means researchers can fork it, not that factories can ship it without a commercial path.

Skill injection is a quieter claim that may age better: UFO’s multi-source data manifests can mix rare motions (the site shows a **cartwheel** case) without collapsing the base walking distribution — a common failure mode when teams fine-tune agile tricks.

## A Human's Take

I’m excited about the infrastructure angle more than the hazing reels. If unsupervised humanoid RL stays locked inside five labs with private stacks, the field stalls. UFO is messy in the right places — experimental robot bring-up, G1-first deploy, honest “not supported” rows in the docs. That is how smaller teams get a seat at the table.

## Sources

- [RoboParty UFO project page](https://roboparty.github.io/UFO/)
- [GitHub — Roboparty/UFO](https://github.com/Roboparty/UFO)
- [YouTube — UFO demo](https://www.youtube.com/watch?v=uJPcLdn9sNA)
