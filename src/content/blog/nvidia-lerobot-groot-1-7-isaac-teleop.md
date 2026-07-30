---
title: "NVIDIA GR00T 1.7 and Isaac Teleop Land in Hugging Face LeRobot"
description: "Open VLA GR00T 1.7 plus Isaac Teleop data collection now ship inside LeRobot — with LIBERO scores NVIDIA reports up to 96.5% average."
pubDate: 2026-07-30
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/lerobot-groot-header.png"
readTime: "5 min read"
featured: false
draft: false
---

**NVIDIA** and **Hugging Face** put a serious open stack in one place: **Isaac GR00T 1.7**, NVIDIA’s open vision-language-action model for general-purpose humanoids, and **Isaac Teleop** for demonstration capture, both wired into **LeRobot**. The [Hugging Face guide](https://huggingface.co/blog/nvidia/nvidia-isaac-teleop-and-gr00t17-in-lerobot) (July 7, 2026) walks install → teleop → train → rollout on a real **SO-101** arm. [NVIDIA’s blog](https://blogs.nvidia.com/blog/hugging-face-lerobot-models-frameworks-open-robotics/) frames the same drop for the open robotics community.

<figure>
  <img src="/images/heroes/lerobot-groot-header.png" alt="VR teleop, blue arm placing vials, silver humanoid holding an apple" loading="lazy" />
  <figcaption>Header collage from the LeRobot + GR00T 1.7 announcement: VR teleop, SO-style arm, humanoid grasp. Source: Hugging Face / NVIDIA.</figcaption>
</figure>

## What you get

From the HF post (and linked docs):

- **GR00T 1.7** open VLA weights on Hugging Face (`nvidia/GR00T-N1.7-3B` path in the train command). It **replaces GR00T N1.5** in LeRobot; N1.5 is no longer supported there.
- Same weights usable via LeRobot workflows or the broader [Isaac GR00T open development platform](https://developer.nvidia.com/isaac/gr00t), including NVIDIA’s open humanoid reference design.
- **Isaac Teleop**: collect real/sim demos (VR headset or SO-101 leader arm), write **LeRobot Dataset v3.0**, push to the Hub, then fine-tune.
- Example path: install LeRobot with `groot` extras → record a task like “pick up vial and put it into the rack” → `lerobot-train` with `policy.type=groot` → `lerobot-rollout` on the follower robot.

<figure>
  <img src="/images/heroes/lerobot-groot-2.png" alt="Diagram: collect with Isaac Teleop, store LeRobot dataset, train GR00T 1.7, deploy" loading="lazy" />
  <figcaption>Collect → store → train → deploy diagram from the LeRobot GR00T write-up. Source: Hugging Face / NVIDIA.</figcaption>
</figure>

## The LIBERO numbers they publish

On the **LIBERO** tabletop suite (language-annotated manipulation), the HF post reports LeRobot-hosted checkpoints:

| Suite | GR00T 1.5 (LeRobot) | GR00T 1.7 (LeRobot) |
|-------|---------------------|---------------------|
| Spatial | 82% | **95%** |
| Object | 99% | **100%** |
| Goal | — | **98%** |
| Long | 82% | **93%** |
| **Average** | **87%** | **96.5%** |

Those are NVIDIA/LeRobot-reported benchmark figures with linked checkpoints on the Hub — useful for comparing open models, not a claim about warehouse shifts.

NVIDIA also notes **Jetson Thor** integration with LeRobot’s **Reachy 2** path and planned **Cosmos 3** world-model hooks for open developers.

## A Human's Take

This is the kind of drop that changes weekend lab projects. One open VLA, one teleop path, one dataset format, and install commands that fit on a slide. I’m here for that more than another closed partner-only model card. Next thing I want to see is someone outside NVIDIA posting a messy SO-101 task that *isn’t* the vial rack — with failure clips included.

## Sources

- [Hugging Face — NVIDIA Isaac Teleop and GR00T 1.7 in LeRobot](https://huggingface.co/blog/nvidia/nvidia-isaac-teleop-and-gr00t17-in-lerobot)
- [NVIDIA Blog — models and frameworks for open robotics / LeRobot](https://blogs.nvidia.com/blog/hugging-face-lerobot-models-frameworks-open-robotics/)
- [NVIDIA Isaac GR00T developer portal](https://developer.nvidia.com/isaac/gr00t)
- [GitHub — NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)
- [Isaac Teleop docs](https://nvidia.github.io/IsaacTeleop/main/index.html)
