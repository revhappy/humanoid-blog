---
title: "DreamMimic Distills Privileged Teachers Into a Vision Humanoid"
description: "An IROS 2026 paper uses a world model to distill loco-manipulation into a vision student. On OMOMO it hits 92.2% success in simulation."
pubDate: 2026-08-25
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/dreammimic-world-model.png"
readTime: "5 min read"
featured: false
draft: false
---

**DreamMimic**, from Jie Yin and Tsinghua’s Xingyu Lai, is an IROS 2026 paper on teaching a humanoid to walk-and-carry from **depth and segmentation**, not from simulator cheat codes. The trick is a Dreamer-style world model used as a teacher’s aide, not as a planner.

On the **OMOMO** human-object set, their vision student posts **92.2%** success, **184.18** average steps, **5.4 cm** robot tracking error, and **8.8 cm** object error. A ResNet-18 student with DAgger+RL sits at **72.6%**. A single-stage Dreamer trained from pixels, no teacher, is **0%**.

<figure>
  <img src="/images/heroes/dreammimic-world-model.png" alt="Simulated humanoids carrying boxes and chairs under depth and segmentation, plus G1 morphology variants" loading="lazy" />
  <figcaption>Teaser: visuomotor carry skills, G1 transfer, long-horizon contact. Source: Yin and Lai, arXiv:2608.22278.</figcaption>
</figure>

## Teacher has the answers. Student gets a weather report.

Specialist teachers train with full simulator state: object pose, interaction graph, contacts. Those get merged into one privileged generalist, InterMimic-style. The student never sees those labels online. It gets proprioception, a short goal (object pose plus a bit of future trajectory), and world-model features predicted from depth, segmentation, and history.

The RSSM is not rolling out imagined games for planning. It predicts a few steps of latent dynamics so the student’s action and the teacher’s action are judged on what they would *do* to the world, not only on the next torque. Horizon **H = 3** in the main runs. Extra heads guess reward, contact, object state, and the privileged vector during training.

**Performance-Conditioned Guidance** sets how many environments the teacher still drives. If the student reward catches the teacher, they turn the teacher down. If the student is lost, the teacher stays. On **BEHAVE**, PCG matches naive annealing on success (**72.7%**) but tracks longer and cleaner.

<figure>
  <img src="/images/heroes/dreammimic-world-model-3.png" alt="Side-by-side: DreamMimic carries a table and a container; the baseline falls" loading="lazy" />
  <figcaption>OMOMO table carry and BEHAVE container drag versus a vision baseline that loses contact and falls. Source: DreamMimic paper.</figcaption>
</figure>

## What they did not claim

Qualitative clips show a **42-DoF Unitree G1** in Isaac Gym and a Gym-to-Isaac-Lab transfer. The paper says that is not hardware. Failures they list: occlusion, G1 hands that push heavy objects instead of lifting them after motion retargeting, and ground-truth depth/segmentation rather than a real camera stack.

Code is marked coming soon. Project page: [dreammimic.github.io](https://dreammimic.github.io/).

## A Human's Take

92% in a tracking benchmark with perfect depth is not a factory robot. It is a clean argument that world models might be better glue for distillation than another ResNet on the camera. The 0% single-stage Dreamer number is the one I will repeat: pixels plus imagination still cannot find contact on a high-DoF humanoid without a privileged teacher in the loop.

## Sources

- [arXiv:2608.22278 — DreamMimic](https://arxiv.org/abs/2608.22278)
- [HTML paper](https://arxiv.org/html/2608.22278v1)
- [Project page](https://dreammimic.github.io/)
- [GitHub (code coming soon)](https://github.com/DreamMimic/DreamMimic)
