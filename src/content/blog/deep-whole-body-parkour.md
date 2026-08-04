---
title: "Deep Whole-Body Parkour Puts Perception Into G1 Motion Tracking"
description: "Tsinghua Project Instinct unifies perceptive locomotion and general motion tracking so a G1 can vault, dive-roll, and kneel-climb on uneven terrain."
pubDate: 2026-08-04
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/deep-parkour.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Humanoid control usually splits into two camps: **perceptive locomotion** that walks over terrain but sticks to pedal gaits, and **general motion tracking** that copies complex skills on flat floors. **Deep Whole-Body Parkour** from Tsinghua’s Project Instinct tries to fuse both — whole-body motion tracking with exteroceptive sensing so dynamic, multi-contact skills survive uneven ground.

Paper: [arXiv:2601.07701](https://arxiv.org/abs/2601.07701). Project: [project-instinct.github.io/deep-whole-body-parkour](https://project-instinct.github.io/deep-whole-body-parkour). Video: [YouTube](https://youtu.be/3s0Al0kxUuo).

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/3s0Al0kxUuo"
    title="Deep Whole-Body Parkour demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Vaults, dive-rolls, kneel climbs, and depth-based corrections on a humanoid. Source: Project Instinct / YouTube.</p>

## What they claim

The abstract describes a single policy trained to perform **multiple distinct motions** across varied terrestrial features, with depth sensing in the control loop. Demo sections on the project page highlight:

- **Kneel climb**
- **Dive roll**
- **Roll vault**
- **Jump sit**
- Auto **position-correction from depth sensing**
- Robustness under **distractors**

Authors argue this expands traversability beyond walking or running into multi-contact parkour-style behavior on unstructured terrain.

<figure>
  <img src="/images/heroes/deep-parkour.jpg" alt="Deep Whole-Body Parkour montage of vaults, dive-rolls, and outdoor climbs" loading="lazy" />
  <figcaption>Official demo montage for Deep Whole-Body Parkour. Source: Project Instinct YouTube (youtu.be/3s0Al0kxUuo).</figcaption>
</figure>

## Open pieces

The project lists open code for a related **shadowing** task in InstinctLab, motion-reference data for a **G1 29-DoF** torso-base model, and policy checkpoints. The broader Project Instinct site also ships InstinctLab, Instinct_RL, and Instinct Onboard repositories for whole-body control research.

Sibling work from the same group includes **Embrace Collisions** (CoRL 2025) and **Hiking in the Wild** (perceptive parkour framework, arXiv:2601.07718).

## A Human's Take

Parkour demos are the honesty test for whole-body policies: if the contact schedule only works on a flat mat, you do not have terrain intelligence. Depth-in-the-loop tracking is the piece worth watching — flat-floor acrobatics without perception already exists; surviving bad ground is the product problem.

## Sources

- [arXiv:2601.07701 — Deep Whole-Body Parkour abstract](https://arxiv.org/abs/2601.07701)
- [Deep Whole-Body Parkour project page](https://project-instinct.github.io/deep-whole-body-parkour)
- [Project Instinct demo video on YouTube](https://youtu.be/3s0Al0kxUuo)
- [Project Instinct hub](https://project-instinct.github.io/)
