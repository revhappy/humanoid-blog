---
title: "Collaborative Spray Painting: Robot Holds the Part, You Hold the Gun"
description: "Politecnico di Milano couples preference-based optimization with modified DMPs so a UR5e rotates workpieces to match the painter’s hand — RA-L 2026."
pubDate: 2026-08-09
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/adaptive-hrc-painting.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Spray painting awkward panels still needs a human wrist. The robot’s job should be holding the part so your shoulder does not do a full shift of overhead work.

A Politecnico di Milano team (arXiv:2608.01981, also IEEE RA-L 2026) describes a **human-centered collaborative painting** setup: a **UR5e** holds the workpiece while the operator sprays; the robot reorients the part online so small hand rotations become scaled, trackable piece motions. Preference-based optimization (**GLISp**) tunes three process knobs from qualitative feedback; modified **Dynamic Movement Primitives** execute the motion.

<figure>
  <img src="/images/heroes/adaptive-hrc-painting.jpg" alt="Diagram of collaborative painting with human spray gun and robot holding workpiece" loading="lazy" />
  <figcaption>Sketch of the collaborative painting approach. Source: arXiv:2608.01981.</figcaption>
</figure>

## How the assist works

The robot does not paint. It holds a large surface (~**1 m²** in their test piece) on a 3D-printed flange support and tracks the operator’s hand orientation via an **OAK-D Pro** camera at **30 Hz**. Modified DMP equations introduce:

- **Rotation amplification** (σ_r / k_m): small hand turns map to larger piece turns, so the painter stays in a smaller workspace
- **Responsiveness term** (γ_s / k_s): when hand–piece orientation error grows, damping drops so the robot catches up
- **Time scaling** (τ̄): preferred execution pace

**GLISp** then optimizes θ = [τ̄, k_s, k_m] from pairwise “better / same / worse” feedback after each trial (N = 15 preference iterations after N̄ = 6 initial samples).

<figure>
  <img src="/images/heroes/adaptive-hrc-painting-2.jpg" alt="Lab setup with human hand path and robot path around painted workpiece" loading="lazy" />
  <figcaption>Setup with human and robot trajectories overlaid. Source: arXiv:2608.01981.</figcaption>
</figure>

## User study numbers

**15 participants** (8 men, 7 women; mean age 25.2 ± 0.98; mean height 180.8 ± 11.26 cm) ran a static baseline (robot fixed at pose A) versus the optimized collaborative policy. Custom ergonomics metrics:

- **Lateral reach**: hand spread along X reduced for all participants (about **29–73%** depending on person; max at P10)
- **Overhead**: mean ~**31%** reduction in Z variability; most subjects kept hands below shoulder height after optimization

Food-safe colorant stood in for paint so coverage could be checked visually. A public experiment video is linked from the paper: [https://youtu.be/0POZMUFvQUE](https://youtu.be/0POZMUFvQUE).

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/0POZMUFvQUE"
    title="Collaborative painting experiments"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Participant painting trials with collaborative UR5e assist. Source: authors / YouTube.</p>

<figure>
  <img src="/images/heroes/adaptive-hrc-painting-3.jpg" alt="Demonstrated C-shaped robot trajectory and painting regions" loading="lazy" />
  <figcaption>Taught C-shaped trajectory and painting zones. Source: arXiv:2608.01981.</figcaption>
</figure>

## A Human's Take

This is the kind of HRC I actually want on a line: robot does the heavy hold and awkward reorientation; human keeps the spray quality judgment. Preference learning from “that felt better” is messier than a CAD cost function, but it is how people talk about assist robots. Watch whether the same three knobs transfer beyond a student cohort and a single ~1 m² panel — and whether factories will accept a 15-trial personalization loop per operator.

## Sources

- [arXiv:2608.01981 — Adaptive Human-Robot Collaborative Painting](https://arxiv.org/abs/2608.01981)
- [arXiv HTML full text](https://arxiv.org/html/2608.01981)
- [Experiment video on YouTube](https://youtu.be/0POZMUFvQUE)
