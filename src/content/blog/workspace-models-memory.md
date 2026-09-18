---
title: "MIT Workspace Tokens Remember the Cubes Without a VLM in the Loop"
description: "CoRL 2026 paper amortizes VLM saliency into a 49 ms workspace encoder so a Franka can count, recall drawers, and re-grasp a bar."
pubDate: 2026-09-18
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/workspace-models.jpg"
readTime: "4 min read"
featured: false
draft: false
---

If a robot has to remember that the fifth cube already went in the bowl, feeding it the entire video history is a good way to teach it the wrong shortcut. **Workspace models**, a CoRL 2026 paper from MIT (Dashora, Chen, Shenfeld, Marangola, Agrawal, Simchowitz), train a small latent instead: burn a VLM at *train* time to label what mattered, then deploy a token you can query in tens of milliseconds.

The paper went up 17 September.

<figure>
  <img src="/images/heroes/workspace-models.jpg" alt="Filmstrips of simulated cube-drop, bar balancing, drawer recall, and a real Franka packing cubes into two boxes" loading="lazy" />
  <figcaption>CubeDrop, BalanceBar, DrawerRecall in sim; HalfAndHalf on a real FR3. Source: Dashora et al., arXiv:2609.20820, Figure 5.</figcaption>
</figure>

## Saliency at train time, a token at test time

Qwen3-VL-8B flags frames that contain events worth remembering. MolmoPoint then points at objects. Those points become DinoV3 patches, capped at *m* patches per timestep: the **salient set**. A causal transformer encoder writes a **workspace token** each step. A DETR-style decoder has to reconstruct that set (Hungarian match + occupancy), so the token is forced to hold the patches, not a vibe.

Then they freeze the encoder and train a Diffusion Policy on a short history of workspace tokens plus proprioception. No VLM at deployment.

Latency on their stack (Table 1): vanilla Diffusion Policy **41.3 ms**; workspace with batching and KV cache **49.2 ms** (1.19×); a keyframe baseline that queries a VLM online **302 ms** (7.31×), or **199.5 ms** batched.

## Four memory chores

Simulation is ManiSkill3 on a Franka Research 3. Hardware is a Franka FR3 with an AgileX jaw and a D435.

- **CubeDrop:** put exactly five cubes in a bowl that hides them
- **HalfAndHalf (real):** split K∈{2,4} cubes into two occluding boxes
- **DrawerRecall:** another robot hides a cube in one of three drawers; the policy must open the right one
- **BalanceBar:** lift a bar with unknown center of mass, then regrasp at the CoM

Across those four, workspace averages **91.5% ± 2.2** success vs **66.8% ± 3.2** for the keyframe VLM-in-the-loop baseline (N=100 sim, N=20 real). The surprise is not only speed. Keyframe and full-history stacking pick the right *mode* and then miss the handle or freeze. The authors blame aliased frame stacks. Workspace tokens, they show, move smoothly in PCA and fire decoder slots a little early or late around the true event, which looks like regularization.

<figure>
  <img src="/images/heroes/workspace-models-3.jpg" alt="Real Franka dropping cubes into a divided box with a plot of workspace slot probabilities over time" loading="lazy" />
  <figcaption>Decoder slots lighting up as cubes go away, versus VLM event labels. Source: arXiv:2609.20820, Figure 8.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/workspace-models-2.jpg" alt="Diagram of workspace encoder training with set-reconstruction loss and a diffusion policy on workspace tokens" loading="lazy" />
  <figcaption>Train the token to reconstruct VLM-chosen patches, then freeze it under a diffusion policy. Source: arXiv:2609.20820, Figure 3.</figcaption>
</figure>

They are clear this is one instantiation: patches, not language traces, and a quadratic transformer that will hurt at very long horizons.

## A Human's Take

Paying Qwen once per demonstration and then running a 49 ms encoder is the kind of asymmetry robot labs can actually afford. Beating the live VLM on success, not just latency, is the twist. Next I want this token on a mobile manipulator that leaves the table, with the same “did it remember, or did it miss the grasp?” split.

## Sources

- [Dashora et al. — Workspace Models (arXiv:2609.20820)](https://arxiv.org/abs/2609.20820)
- [Paper HTML with figures](https://arxiv.org/html/2609.20820v1)
