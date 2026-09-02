---
title: "IHMC’s Alex Opens Doors You Can Edit While It Walks"
description: "A 1 September paper from IHMC and UWF shows Alex and Unitree H1-2 running runtime-editable loco-manipulation: 34-second push doors, 45-second ball sorts."
pubDate: 2026-09-02
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/ihmc-alex-door.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Florida’s **Institute for Human and Machine Cognition** and the **University of West Florida** posted a 20-page paper on **1 September** arguing that the thing holding humanoids back on doors is not another policy, it is the behavior architecture. The stack is robot-local, the tree is editable at runtime, and the operator UI stays synchronized at **30 Hz**.

Lead author **Duncan Calvert**. Platforms: IHMC’s fully electric **Alex** (29 DoF, **PSYONIC Ability Hands**, two head stereo cameras) and **Unitree H1-2**. They have also run earlier versions on a DARPA Finals-era Atlas.

Headline demos from the abstract: a **push-door traversal in 34 seconds**, and **six balls sorted by color in 45 seconds** while a person disturbs the scene. A two-table variant in Figure 2 sorted **nine balls in 2 minutes 8 seconds**.

<figure>
  <img src="/images/heroes/ihmc-alex-door.jpg" alt="Black Alex humanoid walking through a wooden door frame in a lab, safety gantry overhead" loading="lazy" />
  <figcaption>Alex on a right-pull door. Source: Calvert et al., arXiv:2609.01518.</figcaption>
</figure>

## How it is put together

This is not a Behavior Tree in the textbook sense. The whole tree is one big sequence. Leaves run in depth-first order. A “next execution index” can be moved by the operator, a goto node, or a fallback. Concurrent actions are scheduled with “execute after” links so walking and an arm trajectory can overlap.

Perception stays on the robot: a **ZED X Mini** for stereo depth, **YOLO** for door panels and sports balls, plus CUDA “shape-contains” checks that count colored points inside a virtual sphere in under **10 ms**. Door-frame objects estimate hinge side, push vs pull, and opening angle from the point cloud. Table approach uses two vertical capsules swept forward until they hit the table edge, then plants a squared-up frame on the floor.

The operator does not own the tick. If the UI dies, the robot keeps the tree. CRDT-style last-writer fields keep footstep goals and node edits from fighting over the wire.

<figure>
  <img src="/images/heroes/ihmc-alex-door-2.jpg" alt="Operator UI showing a behavior tree, 3D twin, and camera view of tennis balls on a table" loading="lazy" />
  <figcaption>Runtime editor locked onto a sports ball. Source: Calvert et al., arXiv:2609.01518.</figcaption>
</figure>

## Speed, resilience, authoring time

The authors’ claim is threefold. Timed door runs sit among the fastest published humanoid numbers and look competitive with recent learned door policies on overlapping tasks. They did not re-run those baselines themselves. Timed authoring sessions, they write, take a novel door behavior from an empty sequence to first fully autonomous success in **under two hours** of active editing, with similar times to retarget an existing tree onto a new door.

Funding notes in the paper: ONR Fast Behaviors and SquadBot grants, plus a breaching collaborative agreement.

A supplementary YouTube playlist is listed: [PLJK5CTyotYqsfgfnXb-09YNFeBose6uEY](https://www.youtube.com/playlist?list=PLJK5CTyotYqsfgfnXb-09YNFeBose6uEY).

<figure>
  <img src="/images/heroes/ihmc-alex-door-5.jpg" alt="Alex operator UI overlaying door_panel and door_lever detections on a live camera view of a wooden door" loading="lazy" />
  <figcaption>Door-panel and lever detections in the operator view. Source: Calvert et al., arXiv:2609.01518.</figcaption>
</figure>

## A Human's Take

I have a soft spot for a tree you can patch while the robot is in the doorway. Thirty-four seconds through a spring closer is a number I can compare. The interesting claim is the two-hour authoring clock, because that is how you cover the next door without a retraining week. If the playlist shows the 45-second sort with a human yanking balls mid-run, that is the demo. If it only shows the clean take, we are back to architecture slides.

## Sources

- [arXiv:2609.01518 — A System for Fast, Resilient, and Adaptable Loco-Manipulation Behaviors on Humanoid Robots](https://arxiv.org/abs/2609.01518)
- [HTML paper with figures](https://arxiv.org/html/2609.01518)
- [Supplementary video playlist](https://www.youtube.com/playlist?list=PLJK5CTyotYqsfgfnXb-09YNFeBose6uEY)
