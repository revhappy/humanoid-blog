---
title: "Bench2Dex Puts 12 Robot Hands on One Tactile Benchmark"
description: "A new Isaac Lab benchmark spans 12 dexterous hands, 26 bimanual tasks, and 1.3K demos with a shared simulated tactile map."
pubDate: 2026-09-15
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/bench2dex.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Bench2Dex** landed on arXiv on September 14 as a simulation benchmark for visuo-tactile bimanual work across **12** dexterous hands. The authors, including groups at Fudan and Shanghai AI Lab among a long list, built it in **Isaac Lab**. Code for training, inference, and teleop is open. The project page is [bench2dex.github.io](https://bench2dex.github.io/).

The point is not another 100-task table with one gripper. Most manipulation benches still lock you to one hand or skip touch. Dexterous hardware has not converged, so tactile signals from one fingertip do not mean the same thing on another. Bench2Dex fakes a shared image-like tactile map from contact geometry instead of pretending to clone GelSight or DIGIT.

<figure>
  <img src="/images/heroes/bench2dex.jpg" alt="Bench2Dex overview: eight data modalities, teleop system, 12 embodiments, 26 tasks" loading="lazy" />
  <figcaption>Benchmark overview. Source: Bench2Dex paper, Figure 1.</figcaption>
</figure>

## What is in the box

- **26** long-horizon bimanual tasks: tool use, articulated objects, multi-stage household work
- **~1.3K** human-teleoperated demos
- **Eight** synced modalities: RGB, depth, joints, object state, the shared tactile map, 2D/3D boxes, occupancy grids
- Teleop: **Manus** glove (25-node skeleton) plus **ARKit** wrists, DexPilot retargeting, Pinocchio IK

Hands in the eval table include Sharpa, DexHand021, Orca, Allegro, Revo2, Ability, LEAP, RH5DG2, RH56DFX, Shadow, Schunk, and Wuji, on arms such as IIWA7, Panda, xArm7, and UR5.

The tactile pipeline rebuilds a contact surface per fingertip, ray-casts inward, and writes an 8-bit **240×240** map. Near contact, each gray level is **0.005 mm**; farther out it stretches to **0.03 mm**, saturating near **5.15 mm**.

<figure>
  <img src="/images/heroes/bench2dex-2.jpg" alt="Pipeline from Sharpa, LEAP, and RH56DFX hands to a shared 240 by 240 tactile image" loading="lazy" />
  <figcaption>Shared tactile interface across hand meshes. Source: Bench2Dex paper, Figure 2.</figcaption>
</figure>

## The policies mostly lose when the scene moves

They ran **ACT**, **Diffusion Policy**, **π0.5**, and **GR00T N1.5** for **20,800** rollouts (26 settings × 4 channels × 50). Success is “reach and stop”: the terminal predicate has to hold for **0.5 s**, not a lucky frame.

On matched scenes (None), GR00T is ahead at **48.5%** stable success, then ACT **29.5%**, π0.5 **27.3%**, Diffusion Policy **12.9%**. Under the combined Full shift (new lighting, camera, clutter, *and* new object pose and table height), GR00T and π0.5 are basically tied at **19.8%** and **19.7%**. Three tasks — jigsaw assembly, fridge fruit sorting, soup serving — go to zero Full successes for every policy.

The paper splits robustness on purpose. Invariance factors (texture, lights, background, camera, distractors) should not change the right action. Equivariance factors (object pose, table height) should. Reporting those separately is the useful bit.

The authors are explicit that the tactile maps are not a substitute for real sensors, and the hands are not calibrated to matching hardware.

## A Human's Take

A shared fake GelSight across 12 hands is the experiment I wanted. The scores say the obvious thing: GR00T looks strong when the scene is the one it trained on, then the table moves and everyone is back under 20%. If you are shipping a tactile VLA, this is the bench that will embarrass the “we added touch” slide. Just do not confuse a 240×240 depth cartoon with a real fingertip.

## Sources

- [arXiv:2609.15726 — Bench2Dex](https://arxiv.org/abs/2609.15726)
- [Bench2Dex paper HTML](https://arxiv.org/html/2609.15726v1)
- [Bench2Dex project page](https://bench2dex.github.io/)
