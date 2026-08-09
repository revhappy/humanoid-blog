---
title: "Robots Learn Human-Like Handwriting From 3,142 Alphabet Demos"
description: "A Bristol-led LfD study collects 3,142 touchscreen handwriting demos, extends GMM/GMR with force and time, and scores 71.5 human-likeness with open datasets."
pubDate: 2026-08-09
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/handwritten-alphabet-lfd.jpg"
readTime: "4 min read"
featured: false
draft: false
---

If a robot’s motion looks robotic, people trust it less. That is the HRI claim behind a new learning-from-demonstration paper on handwriting trajectories.

**arXiv:[2608.06221](https://arxiv.org/abs/2608.06221)** (submitted Aug 6, 2026; accepted at **ICDL 2026**, Kyoto) from Alperen Kenan, Paul Bremner, and Manuel Giuliani presents a full pipeline: collect demos, learn multi-segment probabilistic trajectories, evaluate human-likeness with people, and **open-source the datasets**.

<figure>
  <img src="/images/heroes/handwritten-alphabet-lfd.jpg" alt="Three-step pipeline: tablet human input, robot learning algorithm, manipulator trajectory implementation" loading="lazy" />
  <figcaption>Framework overview: collect on a tablet, learn trajectories, execute on a manipulator. Source: arXiv:2608.06221.</figcaption>
</figure>

## Dataset and method

- **3,142** handwriting demonstrations from **22** participants
- All **52** Latin alphabet character-case combinations
- Captured via a **touchscreen teleoperation** interface: planar position, **contact force**, and timing
- Builds on **Gaussian Mixture Model / Gaussian Mixture Regression** (GMM/GMR), extended with force and normalized time so dynamics are not just XY scribbles
- Adapted for **non-continuous, multi-segment** strokes (letters with pen lifts)

<figure>
  <img src="/images/heroes/handwritten-alphabet-lfd-3.jpg" alt="Tablet demo collection: stylus tracing letter g with robot arm visible on screen" loading="lazy" />
  <figcaption>Touchscreen demo collection for character trajectories. Source: arXiv:2608.06221 PDF.</figcaption>
</figure>

## Human-likeness study

**21** participants rated generated trajectories on a continuous scale from robotic to human-like, normalized to **0–100** (50 = neutral midpoint).

- Overall score: **71.50** (SD **22.56**) — majority read as more human-like than robotic
- Raters said **geometric positioning** and **trajectory sequence** mattered most
- Attitudes toward human-like robot motion were positive in the reported survey

The paper frames the open datasets as a reproducible benchmark for human-like motion methods, not just a one-off alphabet demo.

## A Human's Take

Handwriting is a controlled stress test: contact force, multi-stroke order, and a human eye that knows when a letter looks wrong. A 71.5 human-likeness score is useful only if the same force-aware GMR recipe transfers to wiping or swabbing — the tasks that pay. The open data is the real handoff for other labs.

## Sources

- [arXiv:2608.06221 — Handwritten alphabet trajectories and human-likeness](https://arxiv.org/abs/2608.06221)
- [arXiv PDF](https://arxiv.org/pdf/2608.06221)
