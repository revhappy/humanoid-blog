---
title: "STEMbot Climbs Plant Stems to Look Where Drones Cannot"
description: "Michigan’s ARM Lab built a compliant stem climber with PIN-SLAM and a 7–33 mm grip range. IEEE Spectrum featured it this week."
pubDate: 2026-08-15
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/stembot.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**STEMbot** is a miniature climbing robot from the University of Michigan ARM Lab that grips plant stems and drives under the canopy, where drones and ground rovers cannot see pests. The paper is on arXiv as **2607.07873** (8 July 2026) and is accepted to **IROS 2026**. IEEE Spectrum’s **14 August 2026** Video Friday roundup picked it up as “tiny” and “adorable,” which is fair, but the interesting bit is the grip and the map.

The project page says organic pest checks are expensive because many insects live on the **underside of leaves** or on **stems**. STEMbot is built for that gap.

<figure>
  <img src="/images/heroes/stembot.jpg" alt="Exploded STEMbot hardware with EcoFlex wheels and RealSense camera" loading="lazy" />
  <figcaption>Exploded hardware and three locomotion primitives. Source: STEMbot project page / University of Michigan ARM Lab.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/cSN0_EB2z4Y"
    title="STEMbot climbing a plant stem"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Lab short: STEMbot climbing a live stem. Source: umrobotics / YouTube.</p>

## How it holds on

Two motor pairs drive concave, high-friction **EcoFlex 00-45** wheels. A spring-loaded four-bar keeps contact as the stem diameter changes and leaves an open path so branches can pass through. Four **700:1** sub-micro planetary gearmotors provide three primitives: climb along the stem, yaw around it, and pitch. An **Intel RealSense D405** (D401 depth module) plus a **VL6180X** time-of-flight sensor close a **90 Hz** pitch loop.

Hardware extremes reported on the project page:

- **7–33 mm** demonstrated stem diameter
- **90°** branch traversal (a **120°** clip is shown as a fail)
- **50 mm** tightest demonstrated curvature radius
- **4 plants** in autonomous trials

<figure>
  <img src="/images/heroes/stembot-3.jpg" alt="STEMbot on a 33 mm tube, a 7 mm pen, a 50 mm curve, and a 90 degree branch" loading="lazy" />
  <figcaption>Hardware extremes: 33 mm, 7 mm, 50 mm radius, 90° branch. Source: STEMbot project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/stembot-2.jpg" alt="Labeled exploded view of STEMbot motors, wheels, and sensors" loading="lazy" />
  <figcaption>Component breakdown from the project page. Source: University of Michigan ARM Lab.</figcaption>
</figure>

## Mapping while hanging upside down

Perception is geometry-first. **PIN-SLAM** registers depth without leaning on repetitive plant texture. **SAM** proposes masks, **CLIP** labels them, and high-confidence depths land in a semantic OcTree. A manifold-constrained **A\*** planner walks that structure. Goals can be a pose on the stem or a **visibility** goal: stand where the camera can see a target without a leaf in the way.

On artificial plants the mean one-way Chamfer distance versus an offline photogrammetry baseline is **3.85 mm**. On live plants it rises to **13.36 mm**. The authors blame non-rigid stems, growth between scans, and one semantic miss on a Monstera.

<figure>
  <img src="/images/heroes/stembot-4.jpg" alt="Four plant trials with maps and Chamfer error heatmaps" loading="lazy" />
  <figcaption>Dracaena, Monstera, Ficus, and Olea trials. Source: STEMbot project page.</figcaption>
</figure>

The page is blunt about limits: the planner assumes a static plant, does not pick inspection targets by information gain, and the robot is still **tethered**. Authors: Zachary Charlick, Nilay Roy Choudhury, Haoyu Ma, Xiaonan Huang, and Dmitry Berenson. Funding listed includes ONR, NSF, and a USDA National Robotics Initiative award.

## A Human's Take

A robot that can hang inverted on a 7 mm stem and still run SLAM is the kind of weird hardware I want more of. The live-plant Chamfer jump is the receipt that the greenhouse is harder than the PLA fixture. Untether it, let the plant sway, and then tell me it can find the aphids.

## Sources

- [STEMbot project page — University of Michigan ARM Lab](https://um-arm-lab.github.io/stembot-site/)
- [arXiv:2607.07873 — STEMbot: A Compliant Robot for Under-Canopy Plant Navigation](https://arxiv.org/abs/2607.07873)
- [IEEE Spectrum — Video Friday: Lift Happens](https://spectrum.ieee.org/video-friday-darpa-heavy-lift-challenge)
- [umrobotics — STEMbot short](https://www.youtube.com/shorts/cSN0_EB2z4Y)
