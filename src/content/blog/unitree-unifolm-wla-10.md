---
title: "Unitree Opens UnifoLM-WLA-1.0, One G1 Policy for 64 Tasks"
description: "A 6B whole-body VLA trained on ~2,500 hours of real-robot data, covering tabletop work and laundry-to-washer locomotion."
pubDate: 2026-09-10
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/unitree-unifolm-wla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Unitree put a **6-billion-parameter** whole-body foundation model on the table today and said it is fully open-sourcing it. **UnifoLM-WLA-1.0** is trained on about **2,500 hours** of real-robot data. One checkpoint, according to the project page, covers **64** G1 tasks that mix tabletop work with walking, bending, and carrying.

The demo still that matters is a G1 walking toward an open front-loader with green laundry in its left hand, stereo head and wrist feeds on the side, and policy logs sitting under **105 ms** inference. That is household motion, not a kung-fu clip.

## One checkpoint, two workspaces

Humanoids Daily splits the 64-task eval the way Unitree presents it:

- **10 whole-body tasks:** trash, clothes into a washer, bed-making, inventory on shelves
- **54 tabletop tasks:** towel folding, conveyor sorting, uncapping, plugging in cords

<figure>
  <img src="/images/heroes/unitree-unifolm-wla-2.jpg" alt="Unitree G1 dual-arm tabletop view placing a plate onto a dish rack" loading="lazy" />
  <figcaption>Head-camera view of a tabletop plate-rack task used in WLA training. Source: UnifoLM-WLA-1.0 project page.</figcaption>
</figure>

The same policy is supposed to drive two-finger grippers and more than one five-finger hand. Cross-end-effector transfer is the claim that will get stress-tested first. If swapping a clamp for a dexterous hand does not force a full data recapture, that is the useful part for anyone sitting on a pile of G1s.

The stack has three layers. **UnifoLM-ER-1-4B**, built on Qwen3-VL-4B, is the embodied reasoner, trained on more than **5 million** samples (points, boxes, multi-image QA, 2-D trajectories, 3-D detection) mixed with ordinary image-text data. On Unitree’s own 16-benchmark sheet, ER-1 posts **62.4** spatial understanding versus **47.7** for Qwen3-VL-4B. **UnifoLM-ER-Flow** then predicts future dynamic-region masks from optical flow, quantized through a VQ-VAE. An **MMDiT** action expert decodes continuous motion. Residual vector quantization splits the action space into end-effector, hand/gripper, and lower-body streams.

Training data includes Unitree’s open datasets and **BitRobot-HIW-500**. IT Home, citing the company, repeats the 64-task, cross-task, cross-end-effector pitch and the “SOTA among open models” line. Treat those leaderboard wins as Unitree’s own eval until independent numbers show up.

## Open, with a caveat

The project page still labels Code, Models, and Datasets as **coming soon**. The announcement is real. The download buttons are not live yet. That is the difference between a press drop and a repo you can `pip install` tonight.

## A Human's Take

I care about the washer clip more than the 6B count. A single policy that walks, stoops, and stuffs clothes is the shape of work people actually want from a G1. I also want the weights, not a landing page that says “coming soon.” Unitree already flooded the market with cheap bodies. If WLA-1.0 ships as promised, the interesting question is whether 2,500 hours is enough to survive a kitchen that is not in the training set.

## Sources

- [UnifoLM-WLA-1.0 project page](https://unigen-x.github.io/unifolm-wla.github.io/)
- [Humanoids Daily — Unitree Open-Sources UnifoLM-WLA-1.0](https://www.humanoidsdaily.com/news/unitree-open-sources-unifolm-wla-1-0-to-tackle-humanoid-generalization)
- [IT Home — UnifoLM-WLA-1.0 open-source announcement](https://www.ithome.com/1/000/837.htm)
- [BitRobot HIW-500 dataset](https://bitrobot-foundation.github.io/humanoids-in-the-wild-500-hours/)
- [Unitree Open Datasets on Hugging Face](https://huggingface.co/unitreerobotics/datasets)
