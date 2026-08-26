---
title: "GVLA Stops Treating Every Gripper Like a Parallel Jaw"
description: "MiGA packs 103,000 demos across five gripper types. GVLA uses that to beat a π0.5 baseline by 7.62 points on mixed-gripper tasks."
pubDate: 2026-08-26
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/gripper-aware-vla.png"
readTime: "5 min read"
featured: false
draft: false
---

Most vision-language-action models learn as if the hand at the end of the arm does not matter. **Hanyi Zhang**, **Anh Nguyen**, **Baoru Huang**, and collaborators at Liverpool, IISc, Tokyo, ZHAW, Arkansas, Physical Intelligence, and HUST argue that a suction cup and a parallel jaw do not share a strategy space even when the instruction is the same.

The project page says the paper is accepted at **ECCV 2026**. Their August 25 arXiv paper ships two pieces: **MiGA**, a dataset of **103,000** demonstrations across **five** gripper types and **five** robots, and **GVLA**, a fine-tune that tokens the gripper and routes adapters by type. On their simulation suite, GVLA on a **π0.5** backbone averages **66.00%** success versus **58.38%** for vanilla π0.5 — the **7.62** point gap they quote. Project page: [airvlab.github.io/G-VLA](https://airvlab.github.io/G-VLA/).

<figure>
  <img src="/images/heroes/gripper-aware-vla.png" alt="Collage of robot arms with five gripper types and the MiGA / GVLA label" loading="lazy" />
  <figcaption>MiGA’s 103K trajectories and five gripper families. Source: Zhang et al., arXiv:2608.24603.</figcaption>
</figure>

## Why the same task is not the same motion

Their running example is a thin, flat box. A suction cup comes from above. A parallel jaw often has to slide the box to the table edge and grab the side. Datasets like Open X-Embodiment, DROID, and Bridge V2, they note, are almost all parallel jaws.

MiGA’s five types: Franka Panda and Robotiq 2F-85 jaws; Robotiq 3-Finger; an in-house soft two-finger; Cobot Pump and UR10 suction; Inspire five-finger hand. Sim is Isaac Lab on Franka and UR10. Real collection uses xArm7, Franka, and UR5, with wrist and third-person RGB-D. **36** tasks, each shown on at least **three** grippers, for **132** gripper-strategy pairs with language. About **5%** of the set is failures.

<figure>
  <img src="/images/heroes/gripper-aware-vla-2.png" alt="Robot arm picking a cracker box with a dexterous hand versus a soft gripper" loading="lazy" />
  <figcaption>Same “pick up the cracker box” instruction, different approach. Source: Zhang et al.</figcaption>
</figure>

## How GVLA conditions the policy

They freeze a VLA backbone (they like π0.5) and add:

- **Three-level soft prompts:** robot platform, gripper type, gripper instance
- **Dual mixture-of-adapters** at the last action-expert layer, gated by those tokens
- Extra losses for gripper classification and adapter load-balance

MLP, VQ-VAE, and language-prompt embeddings of “which gripper” do not cluster by type on their heatmaps. Their tokenizer does.

Category averages for GVLA (π0.5): flat **53%**, stacked **76%**, constrained **62.5%**, semantic **72.5%**. GraspVLA, trained on huge synthetic downward grasps, sits at **7.88%** average on this mix. On a real UR5 plus Robotiq 2F-85, they fine-tune **10** demos and **20k** steps on unseen tasks and report beating π0.5 across those tasks. Failures they show: type-correct but poorly aligned grasps, physical gripper limits, and kinematic dead-ends.

<figure>
  <img src="/images/heroes/gripper-aware-vla-3.png" alt="UR5 arm with a Robotiq gripper over a book, blocks, a bin of snacks, and a mug" loading="lazy" />
  <figcaption>Real-robot few-shot setup. Source: Zhang et al.</figcaption>
</figure>

## A Human's Take

Telling the policy which gripper is on the wrist should have been table stakes. 103k demos that actually change strategy with the hardware is the useful part. I will believe the 7.62 points in other people’s cells when someone else trains on MiGA. Until then, the lesson I would steal is simple: stop averaging suction and fingers into one “grasp” token.

## Sources

- [arXiv:2608.24603 — Gripper-aware Vision Language Action Models](https://arxiv.org/abs/2608.24603)
- [HTML paper with figures](https://arxiv.org/html/2608.24603v1)
- [GVLA project page](https://airvlab.github.io/G-VLA/)
