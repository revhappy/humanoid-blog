---
title: "A Unitree G1 Learns Roofer Motions on a Pitched Lab Roof"
description: "Florida researchers ground VR roofing demos to a metric roof so a G1 can walk, hammer, and hold a nailgun on 9–25° slopes."
pubDate: 2026-09-18
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/g1-roofing-6.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Roofing is walking, kneeling, and putting a tool on a surface that wants to slide you off it. **Songyang Liu** and **Shuai Li** at the University of Florida posted a paper on 17 September that treats those motions as a humanoid control problem on a **Unitree G1**, not as a drone with a nailgun.

The hitch: a VR demo can look like roofing and still plant the robot’s feet through the shingles. Sparse Pico tracking tells you how the person moved. It does not give a metric registration to the roof.

<figure>
  <img src="/images/heroes/g1-roofing-6.jpg" alt="Time-lapse of a Unitree G1 on a blue sloped mat walking, hammering, and bending under a safety hoist" loading="lazy" />
  <figcaption>Physical G1 on the lab slope: walk, hammer, nailgun, bend. Source: Liu and Li, arXiv:2609.20558, hardware sequences.</figcaption>
</figure>

## Ground the demo to the roof, then learn

They collect whole-body demos on an angle-adjustable wooden platform at **9°, 17°, and 25°**, roughly 2:12 to 6:12 residential pitch. Kit: Pico headset, two hand controllers, ankle trackers. One 1.84 m lab researcher, not a professional roofer. The multi-slope library is nine motion types × three takes × three pitches (**81** sequences, about **23.5 minutes** after retargeting). A separate task-semantic set holds ten raw takes used for nailgun, hammer, push, bend, and kneel.

Motion is retargeted to the 29-DoF G1, then a trajectory optimizer ties inferred foot-support intervals and annotated work phases to a measured roof mesh. Target hand-center clearances: **25 cm** nailgun, **12 cm** hammer, **18.5 cm** push. Five sole points per foot get anchored so the ankle is not “on” the roof while a toe is in it. Phase-gated rewards then keep those relations when the tracking policy runs closed-loop in Isaac Lab.

<figure>
  <img src="/images/heroes/g1-roofing.jpg" alt="Side-by-side of a human on a pitched roof mockup and a G1 copying bend, hammer, and nailgun poses" loading="lazy" />
  <figcaption>Human demo vs G1: bend, hammer, nailgun. Source: arXiv:2609.20558, Figure 1.</figcaption>
</figure>

## What transferred

In simulation the method meets support, work-clearance, and nonpenetration checks across evaluated seeds. Across nailgun, hammering, and pushing they report work-clearance errors between **0.256 and 0.531 cm** and **3/3** successful evaluations per task.

On the physical G1, with a safety hoist, they reproduce uphill walking, nailgun, hammering, and bending with mean base-frame motion errors **below 80 mm**. That is tracking fidelity on a lab slope, not an autonomous roofing crew. The paper is explicit: this is a motion-centric subset of roofing, not access, materials, or inspection.

A five-way nailgun ablation (raw retarget, manual offset, support correction, reference-level task correction, execution-aware learning) is there to show that a uniform height bump is not enough. Feet and hands have to be adjusted independently against the same roof.

<figure>
  <img src="/images/heroes/g1-roofing-3.jpg" alt="Person in a Pico headset demonstrating roofing motions on an adjustable wooden slope" loading="lazy" />
  <figcaption>Demo capture on the adjustable roof platform. Source: arXiv:2609.20558, Figure 5.</figcaption>
</figure>

## A Human's Take

I care that they measured the roof and then argued with the retargeter until the hand was 12 cm from the deck, not that a humanoid “did construction.” Eighty millimeters of base error under a hoist is a lab receipt. The day I take this seriously on a real pitch is the day the hoist comes off and the nail actually goes in.

## Sources

- [Liu and Li — Learning Slope-Adaptive Whole-Body Locomotion for Humanoid Robots in Roofing Construction (arXiv:2609.20558)](https://arxiv.org/abs/2609.20558)
- [Paper HTML with figures](https://arxiv.org/html/2609.20558v1)
