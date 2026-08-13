---
title: "HandEdit Turns Egocentric Human Video Into 26 Robot Hands"
description: "A 200-million-edit benchmark asks image models to swap a human hand for a URDF-specified dexterous robot, then scores 11 editors."
pubDate: 2026-08-13
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/handedit-human-to-robot.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**HandEdit** is a dataset and benchmark for a job robot people keep doing by hand: take an egocentric clip of a person grasping something, and paint a **dexterous robot hand** (or a hand plus arm) into the same frame. The paper posted on **August 12**. The project page and code dropped with it.

<figure>
  <img src="/images/heroes/handedit-human-to-robot.jpg" alt="HandEdit teaser with human-to-robot edits, 26 target embodiments, and 200 million editing instances" loading="lazy" />
  <figcaption>HandEdit covers 26 URDF embodiments and more than 200 million image-level edits. Source: HandEdit paper.</figcaption>
</figure>

## Why generic editors fail here

Egocentric human video is cheap. Teleoperation data is not. The catch is the embodiment gap: a human hand and a Shadow or Orca hand do not share appearance, articulation, or camera-relative geometry. Style-transfer and generic image editors can change textures. They do not respect a **URDF**.

HandEdit is built from five public hand-object sets: **EgoDex**, **ARCTIC**, **OakInk2**, **HOI4D**, and **HO-Cap**. From those it derives more than **200 million** image-level editing instances across **300K** clips, **600+** scenes, **1.1K** objects, and **400+** tasks. Target embodiments: **13** hand-only URDFs and **13** hand-arm stacks.

The pipeline segments the human hand, inpaints the background, retargets MANO / 3D pose through inverse kinematics, and composites a rendered robot hand or hand-arm back into the scene. The editor is supposed to keep object state, contact, viewpoint, and the rest of the room.

<figure>
  <img src="/images/heroes/handedit-human-to-robot-2.jpg" alt="HandEdit data pipeline from egocentric human grasp through segmentation, inpainting, and robot-hand compositing" loading="lazy" />
  <figcaption>How a human bottle grasp becomes a URDF-conditioned robot composite. Source: HandEdit paper.</figcaption>
</figure>

## Eleven editors, two tracks

The benchmark has **Hand-only** and **Hand-Arm** tracks and scores 11 commercial and open-source editors (GPT-Image-2 / 1.5, Nano Banana, FLUX, Seedream, Qwen-Image-Edit, OmniGen2, FireRed, Hunyuan, and the authors’ own baseline). Metrics mix LPIPS/FID on the hand region, VLM judgment, and embodiment-aware checks: did the human hand disappear, is the structure right, is the identity the requested URDF, did contact survive.

The project page’s qualitative grid is the honest picture. Some APIs nail a plausible robot hand. Others leave a human wrist, invent extra fingers, or lose the object. The authors’ conclusion on the site: **GPT-Image-2** is the strongest overall baseline, VLM scores are useful but not enough, and perceptual quality does not mean the edit is a usable robot demonstration.

<figure>
  <img src="/images/heroes/handedit-human-to-robot-3.jpg" alt="Qualitative grid comparing commercial and open-source editors on human-to-robot hand-arm edits" loading="lazy" />
  <figcaption>Same human frames, many robot hands. Source: HandEdit project page.</figcaption>
</figure>

Teams: Fudan, Inspire Robots, Shanghai Jiao Tong, the University of Hong Kong, NTU, and Shanghai AI Laboratory. Code, a Hugging Face dataset card, and the project page are public.

## A Human's Take

I wanted this benchmark last year. If we are going to train dexterous policies on kitchen video, someone has to say whether the “robot” in the frame is the URDF you asked for or a pretty hallucination. HandEdit is that ruler. I’m here for the 26-embodiment coverage and less excited by any single editor’s highlight reel. Show me a policy trained on these composites that still grasps when the real Orca or Shadow is on the table.

## Sources

- [arXiv:2608.12122 — HandEdit](https://arxiv.org/abs/2608.12122)
- [HandEdit project page](https://handedit.github.io/)
- [HandEdit HTML paper](https://arxiv.org/html/2608.12122v1)
- [HandEdit GitHub](https://github.com/HandEdit/HandEdit)
