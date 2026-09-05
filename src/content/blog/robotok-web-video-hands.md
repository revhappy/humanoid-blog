---
title: "RoboTok Indexes Web Video by 3D Hand Trajectories, Not How the Kitchen Looks"
description: "Rice and NVIDIA retrieve human demos from internet video using actor-centered 3D hand motion. Downstream dexterous PPO jumps on harder VTDexManip tasks."
pubDate: 2026-09-05
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/robotok-web-video-hands-3.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**RoboTok**, from Rice University with NVIDIA on the author list, went up **2 September** ([arXiv:2609.03199](https://arxiv.org/abs/2609.03199)). Give it a query clip of a person doing a dexterous task. It searches web video for other clips whose **hands move the same way**, even when the kitchen, camera, and shirt are different.

That is the whole bet. Visual similarity is a trap. Two videos can look like “someone in a kitchen” and have nothing in common at the fingers.

<figure>
  <img src="/images/heroes/robotok-web-video-hands-3.jpg" alt="Simulated dexterous hand turning a bottle cap, screwing a faucet, and sliding a lever" loading="lazy" />
  <figcaption>Harder VTDexManip tasks used to test policies guided by retrieved demos. Source: Qian et al., arXiv:2609.03199.</figcaption>
</figure>

## How the index works

Clips come from **Action100M**, then get filtered to 4–8 seconds, a near-static camera, and at most one left and one right hand. Hands are lifted to metric 3D (WiLoR, MoGe-2, HaWoR infill). A small torso-frame estimator, trained only on wrist frames, puts those hands in an actor-centered frame so the body does not even have to be visible.

Similarity is Dynamic Time Warping on the 21-joint trajectories. DTW is too slow to scan the web at query time, so they distill it into a compact embedding and do cosine search. Training uses 100,000 clips. New clips can be indexed with one forward pass. No semantic labels.

On a 10,000-query holdout against that DTW oracle, RoboTok hits **mAP@20 0.353** and **Recall@20 0.996**. STRAP, the strongest baseline they report, is **0.007** mAP@20. Mean DTW cost of RoboTok’s top-20 is **1.333 m** vs **1.145 m** for true neighbors and **4.776 m** for random. On **AssemblyHands** (831 two-hand clips, sensor-grade 3D), mAP@5 is **0.261** vs **0.133** for STRAP.

<figure>
  <img src="/images/heroes/robotok-web-video-hands-2.jpg" alt="Knife-cutting query compared with Flow, HAND, STRAP, and RoboTok retrievals labeled related or unrelated" loading="lazy" />
  <figcaption>Same cutting query: appearance-based methods wander; RoboTok stays on the cut. Source: Qian et al., arXiv:2609.03199.</figcaption>
</figure>

## Does the retrieval help a robot?

They train PPO from scratch on **VTDexManip**. Retrieved clips enter only as a reward for staying near retargeted hand poses. No robot action labels.

On the original benchmark, RoboTok-guided policies beat the paper’s best reported pretrained baseline on five of six tasks (about +7.45% seen / +5.83% unseen on average). On a harder formulation that restores full 3D wrist motion and strips dense rewards, the gaps get loud:

- BottleCap turning, seen: **77.3%** vs **59.5%** HAND
- Faucet screwing, seen: **44.8%** vs **6.8%** HAND
- Lever sliding, seen: **79.3%** vs **19.5%** HAND

The encoder is intentionally small. The 3D trajectory already did the viewpoint work.

<figure>
  <img src="/images/heroes/robotok-web-video-hands.jpg" alt="t-SNE of RoboTok embeddings with example hand-keypoint trajectories from web clips" loading="lazy" />
  <figcaption>Latent motion space of web-scale hand trajectories. Source: Qian et al., arXiv:2609.03199.</figcaption>
</figure>

## A Human's Take

I have watched too many “we trained on YouTube” papers retrieve the same cutting board because the wood grain matched. RoboTok is the first one in this pile that argues with the fingers. The harder VTDexManip numbers are the receipt. Moving-camera video is still future work, which is most of the internet, so this is a static-shot engine for now. For humanoid hands, a growing index of how people actually move is still the dataset I want.

## Sources

- [arXiv:2609.03199 — RoboTok abstract](https://arxiv.org/abs/2609.03199)
- [arXiv HTML — retrieval tables and VTDexManip results](https://arxiv.org/html/2609.03199v1)
- [RoboTok project site](https://rice-robotpi-lab.github.io/RoboTok/)
