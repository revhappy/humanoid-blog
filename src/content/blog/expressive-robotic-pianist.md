---
title: "A Dexterous Hand Plays Grade 7 Piano, Then Duets"
description: "Zhejiang’s InReal hand uses Graph-Mimic and a key-velocity loudness model. Real F1 hits 0.80–0.95; untrained listeners don’t prefer the human."
pubDate: 2026-09-11
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/pianist.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Piano is a nasty dexterity test: contact, speed, and force, all at once, with an audience that can hear a stiff thumb. A Zhejiang University group (Center for X-Mechanics and the Hangzhou innovation center) put an **InReal** robotic hand on a real keyboard and trained it with reinforcement learning plus two extra rewards: **Graph-Mimic** for fingering, and a simplified acoustics model for loudness.

The paper (arXiv:2609.10844, submitted **September 9, 2026**) claims Grade **7** repertoire, including **Croatian Rhapsody**, and human–robot duets on that piece and **Für Elise**.

<figure>
  <img src="/images/heroes/pianist.jpg" alt="InReal robotic hand playing Croatian Rhapsody and Für Elise in a duet with a human pianist" loading="lazy" />
  <figcaption>Real InReal hand in duet with a human on Croatian Rhapsody and Für Elise. Source: paper, Figure 6.</figcaption>
</figure>

## Graph-Mimic, then hit the key

Graph-Mimic does not copy joint angles. It builds an **Action Frame Graph** from **21** landmarks: **20** phalangeal vectors and **4** inter-fingertip vectors, normalized by wrist-to-middle-fingertip length. Human landmarks come from YouTube piano videos via MediaPipe. That graph is what the reward matches.

The split matters:

- **Pre-press**: inter-fingertip vectors drive span, thumb-under, and finger-over, so the hand reaches instead of dragging the wrist.
- **Key-press**: phalangeal vectors set contact posture. Staccato uses a more vertical fingertip; legato uses pad contact and overlapping depressions.

The acoustics model maps key angular velocity to MIDI velocity (0–127) through hammer energy. Four loudness bins: p, mp, mf, f. On wide-dynamic pieces the authors report **85.7%** velocity-category accuracy; a baseline that just bangs keys falls toward zero as MIDI variance rises.

<figure>
  <img src="/images/heroes/pianist-2.jpg" alt="Robotic hand demonstrating thumb-under and finger-over fingering next to human references" loading="lazy" />
  <figcaption>Thumb-under and finger-over, with human vs robot pre-press frames. Source: paper, Figure 2.</figcaption>
</figure>

## What actually played

Sim-to-real is synchronized: the policy sees simulation observations and sends commands to the physical hand. Average simulated F1 across the evaluated set is **0.96**. Real-world F1, **10 trials per piece**, is **0.80–0.95**. *Ode to Joy* is shown as a near-clean pitch-time plot. *Twinkle Twinkle Little Star* real F1 is **0.92**.

Duet timing uses MIDI at **50 ms** resolution. Mean time gap vs the human part: **−44 ms** on Croatian Rhapsody, **−31 ms** on Für Elise, both inside that bin.

A perceptual test ranked four audio-only *Für Elise* excerpts (two human, expressive robot, baseline robot). **n=125**: 24 trained pianists, 64 with some piano education, **37** untrained. Friedman tests find overall differences in every group (all **p<0.01**). Untrained listeners show **no** statistically significant preference between the expressive robot and either human (**p>0.05**), and they do prefer it over the baseline robot (**p<0.001**). Trained pianists still rank humans first.

Limits are listed: four loudness bins, no arm weight transfer, song-specific policies, and privileged key-velocity observations from simulation at deployment.

## A Human's Take

A robot hand that can thumb-under a scale and then sit next to a person on Für Elise is the kind of demo I actually watch twice. Untrained ears tying the robot with a human is a fun result. I still want a policy that does not need sim key-velocity, and an arm that can lean into Liszt. Until then, this is a serious dexterity bench with a soundtrack.

## Sources

- [arXiv:2609.10844 — Expressive Robotic Pianist](https://arxiv.org/abs/2609.10844)
- [Paper HTML](https://arxiv.org/html/2609.10844)
