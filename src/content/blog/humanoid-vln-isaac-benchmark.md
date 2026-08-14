---
title: "HumanoidVLN Makes Bipedal Navigation a Physics Problem"
description: "VinMotion’s Isaac Sim benchmark walks G1 and H1 through 933 episodes instead of teleporting them."
pubDate: 2026-08-14
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/humanoid-vln.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most vision-language navigation (VLN) benchmarks slide an agent through a mesh. **HumanoidVLN**, posted to arXiv on **August 13** by **VinMotion** in Vietnam with **Quan Nguyen** at USC, treats that as cheating. The robot has to walk.

The platform sits on **NVIDIA Isaac Sim**. Four bipeds share the same scenes: **Unitree G1** (12 lower-body DoF, 1.32 m), **Unitree H1** (10 DoF, 1.80 m), plus two internal platforms at 1.61 m and 1.17 m. Camera heights run from 1.11 m to 1.72 m. A per-body RL locomotion policy commands joint torques; a PD or MPC tracker sits on top.

<figure>
  <img src="/images/heroes/humanoid-vln.jpg" alt="HumanoidVLN pipeline from four humanoid bodies through scene curation to VLN evaluation" loading="lazy" />
  <figcaption>Platform overview: four embodiments, navigability-filtered scenes, and a plug-in VLN interface. Source: HumanoidVLN project page.</figcaption>
</figure>

## Scenes a biped can actually cross

The authors filtered **87** indoor environments for more than **100 m²** of traversable floor, mixing artist-built GRScenes with 3D Gaussian Splatting reconstructions. Narrow dollhouse rooms that a wheeled agent can clip through get dropped.

Instructions are not a single-pass VLM dump. A generator-reviewer-paraphraser loop writes one fine-grained route plus three coarse styles (formal, natural, casual), then a human signs off. That yields **933** collision-aware episodes.

Plug-in models already on the bench: **NaVILA**, **DualVLN**, **StreamVLN**, and **JanusVLN**. Metrics include the usual success rate, SPL, and nDTW, plus **fall rate**, which wheeled VLN never had to report.

<figure>
  <img src="/images/heroes/humanoid-vln-3.jpg" alt="HumanoidVLN multi-agent instruction generation pipeline" loading="lazy" />
  <figcaption>Generator–reviewer–paraphraser loop that writes fine and coarse instructions from walking-camera video. Source: HumanoidVLN project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/humanoid-vln-4.jpg" alt="Artist-designed indoor scene used in the HumanoidVLN suite" loading="lazy" />
  <figcaption>An artist-designed GRScenes interior admitted after the 100 m² navigability check. Source: HumanoidVLN project page.</figcaption>
</figure>

## What the numbers say

Across four models and four bodies, **JanusVLN** posts the best mean success rate at **43.55%** and nDTW of **48.38**. A 20-episode sim-to-real check with DualVLN on a real G1 reports navigation-error correlation **r = 0.935**, mean absolute difference **0.68 m**, and trajectory similarity **0.782 ± 0.188** nDTW.

Code, benchmark, and data are promised on acceptance at the project page.

## A Human's Take

Teleportation VLN taught models to talk about hallways. It did not teach them to keep a 70-kilo biped upright while the head camera bounces. Fall rate on the scoreboard is the honest part of this paper. Forty-three percent success is not a product number, but a G1 that tracks the same errors in the lab as it does in Isaac is a better starting point than another Habitat leaderboard.

## Sources

- [arXiv:2608.12860 — HumanoidVLN](https://arxiv.org/abs/2608.12860)
- [HumanoidVLN HTML paper](https://arxiv.org/html/2608.12860v1)
- [HumanoidVLN project page](https://humanoid-vln.github.io/)
