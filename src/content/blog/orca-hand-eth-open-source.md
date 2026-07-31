---
title: "ETH’s ORCA Hand: 17-DoF Open Dexterity for Under 2,000 CHF"
description: "ETH Zurich Soft Robotics Lab’s ORCA hand is a tendon-driven, open-source anthropomorphic hand with tactile sensors, sub-8-hour assembly, and long-run demos."
pubDate: 2026-07-31
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/orca-hand.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Dexterous hands are still the expensive bottleneck for manipulation research. ETH Zurich’s Soft Robotics Lab built one you can actually finish assembling in a workday.

**ORCA** (open-source, reliable, cost-effective, anthropomorphic) is a **17-DoF** tendon-driven hand with integrated tactile sensors. The lab’s project page and [arXiv:2504.04259](https://arxiv.org/abs/2504.04259) put material cost **below 2,000 CHF**, full assembly in **under eight hours**, and design files plus software on the public site.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/kUbPSYMmOds"
    title="ORCA open-source robotic hand demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">ORCA hand assembly, reliability, and learning demos. Source: Soft Robotics Lab / YouTube.</p>

<figure>
  <img src="/images/heroes/orca-hand.jpg" alt="ORCA robotic hand on a robot arm grasping a blue cube while a person teleops with a glove" loading="lazy" />
  <figcaption>ORCA hand on an arm, teleoperated via glove while grasping a cube. Source: ETH Zurich Soft Robotics Lab (srl.ethz.ch/orcahand).</figcaption>
</figure>

## Hardware highlights (from the paper and lab page)

- **17 DoF**: 16 in the fingers + 1 wrist, anthropomorphic layout (MCP / PIP / ABD, opposable thumb)
- **Poppable joints**: joints designed to dislocate under excess load instead of breaking — faster repair, less scrap
- **Auto-calibration** and low-friction tendon routing through joint centers
- **Open stack**: STLs, control software, BOM, assembly guides (dashboard at orcahand.com); MIT / CC-style non-commercial-friendly licensing noted on the lab page
- **Durability claims**: continuous operation experiments past **10,000** cycles (~**20 hours**) without hardware failure as the limiting factor; a **2.5-hour** continuous grasp/wrist flex test (~**2,250** grasps) without shutdown; imitation-learning pick-and-place run for **7h 17min** (~**2,000** cycles) with no hardware intervention

<figure>
  <img src="/images/heroes/orca-hand-2.jpg" alt="ORCA branded robotic hand with white soft fingers against black background" loading="lazy" />
  <figcaption>ORCA hand product shot from the project’s official video. Source: ORCA / YouTube (kUbPSYMmOds).</figcaption>
</figure>

## Learning, not just hardware porn

The team benchmarks teleoperation, imitation learning, and **zero-shot sim-to-real RL**: train in-hand tennis-ball reorientation in IsaacGym-style parallel sim (~**4,096** agents, ~**1 hour** of training with domain randomization) and deploy on the physical hand. Tech Briefs’ write-up of the work hits the same beats — pop-in joints, sub-$2k class BOM, multi-hour autonomous pick-and-place.

There’s also a commercial path around **ORCA Dexterity** (orcahand.com) that advertises open-source hands and a control stack; the research platform remains the ETH Soft Robotics Lab page and the IROS 2025-accepted paper.

## A Human's Take

I’m so here for hands that fail *gracefully* and rebuild in hours. Pop joints and an 8-hour build beat a six-figure black box that needs a service contract. The receipts I care about next: multi-lab replication of those 7-hour unattended runs, and whether the open BOM stays honest as parts go out of stock. Reliability is the demo when the demo runs overnight.

## Sources

- [ETH Zurich Soft Robotics Lab — ORCA Hand](https://srl.ethz.ch/orcahand.html)
- [arXiv:2504.04259 — ORCA open-source anthropomorphic hand](https://arxiv.org/abs/2504.04259)
- [Tech Briefs — The Next Generation of Robotic Hands](https://www.techbriefs.com/component/content/article/54241-the-next-generation-of-robotic-hands)
- [ORCA Hand video on YouTube](https://youtu.be/kUbPSYMmOds)
