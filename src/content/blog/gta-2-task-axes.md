---
title: "GTA-2 Builds Robot Skills From Axes, Not End-to-End Actions"
description: "CMU and Bosch VLMs compose task-axis controllers on a UR5e. Zero-shot success is 73.9% across 14 tasks; one round of feedback lifts that to 90.7%."
pubDate: 2026-09-10
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/gta-2-task-axes.jpg"
readTime: "4 min read"
featured: false
draft: false
---

End-to-end VLAs hide the plan. Code-as-Policies dumps a whole program in one shot. **GTA-2** (Grounded Task Axes v2), from Carnegie Mellon’s Robotics Institute and Bosch Research, splits the difference: four vision-language agents write an inspectable skill, then a UR5e runs it.

The paper (arXiv:2609.09808, submitted **September 9, 2026**) reports **73.9%** average zero-shot success on **14** real manipulation tasks, **31.4** points above the strongest baseline. After targeted human feedback on a failed stage, that average rises to **90.7%**. No task demos, no policy training, no fine-tuning.

<figure>
  <img src="/images/heroes/gta-2-task-axes.jpg" alt="UR5e erasing a red scribble and pouring from a mug, with GTA-2 controller overlays" loading="lazy" />
  <figcaption>Erase and pour as composed controllers, then re-grounded in new scenes. Source: GTA-2 paper, Figure 1.</figcaption>
</figure>

## Four agents, one controller library

Hardware is a **UR5e**, a Robotiq **2F-85** gripper, and a calibrated ZED **2i**. All four agents use **Gemini 3.1 Pro**, differing only in prompts and structured outputs:

1. **Task Decomposer** — ordered subtasks from the instruction.
2. **Skill Generator** — keypoints, axes, and controller recipes per subtask.
3. **Parameter Setter** — numbers: offsets, forces, angles.
4. **Vision Module** — metric 3D features from RGB-D.

Controllers include position and axis alignment, waypoints, constant force, gripper state, and a learned spiral DMP. Lower-priority commands sit in the null space of higher ones. If the pour height is wrong, you poke the Parameter Setter and keep the rest.

<figure>
  <img src="/images/heroes/gta-2-task-axes-2.jpg" alt="GTA-2 four-agent pipeline from task prompt to grounded robot script" loading="lazy" />
  <figcaption>Decompose, compose, set parameters, ground in RGB-D. Source: GTA-2 project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/gta-2-task-axes-4.jpg" alt="Fourteen UR5e tabletop tasks including microwave, dustpan, ironing, and pouring" loading="lazy" />
  <figcaption>The 14-task suite, from ball-in-basket to iron-the-tie. Source: GTA-2 paper, Figure 3.</figcaption>
</figure>

## Numbers against π0.5 and two code baselines

Each generalization cell is **20** physical trials. Zero-shot GTA-2 averages **73.9%**. **CaP-Primitive** (Code-as-Policies with Cartesian motion, gripper, and contact force) is the best baseline at **42.5%**. **π0.5** (DROID-finetuned, run on a Franka for that baseline) and **CaP-TAC** (same task-axis library, one generated script) trail further. CaP-TAC does beat primitives on pouring, cutting, and sweeping, where contact geometry matters.

Plan generation is a separate study: **15** runs per task, **210** total. Zero-shot execution succeeds in **154/210 (73.3%)**. One feedback round reaches **181/210 (86.2%)**, two rounds **208/210 (99.0%)**, all **210** within three. First-round edits mostly hit the Skill Generator; later edits shift to vision grounding.

The authors are clear about the box they built. Features are grounded once, not tracked online. Slip or a moved object needs a new cycle. The controller library has to already express the objective. Tests are one tabletop arm.

## A Human's Take

I smiled at “fix the typo” rearranging letters into TEACH. That is a system that followed the words, not a hidden demo script. The useful part is the edit loop: you do not regenerate a 400-line policy because the spiral radius was 2 cm too small. I still want to see this on a second arm and a moving object. Until the vision module updates while the cup is pouring, it is a very smart first take, not a shift worker.

## Sources

- [arXiv:2609.09808 — GTA-2](https://arxiv.org/abs/2609.09808)
- [GTA-2 project page](https://gta2-project.github.io/)
- [GTA-2 paper HTML](https://arxiv.org/html/2609.09808v1)
