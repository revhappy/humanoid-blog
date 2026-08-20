---
title: "LabDex Puts an XHand in a Real Chemistry Lab and Grades the Hierarchy"
description: "USTC’s LabDex benchmark trains Franka + XHand on pour, insert, and stir. π0.5 hits 0.57 on atomic skills; no model finishes the full workflow."
pubDate: 2026-08-20
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/labdex-chemistry-hands.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Lab robots usually get parallel-jaw grippers and a script. **LabDex**, from the University of Science and Technology of China with CUHK and iFLYTEK, puts a **Franka Research 3** and an **XHand** on real glassware and asks whether a policy can climb from a single pour to a full experiment.

The paper (arXiv:2608.18618) and project page split the work into three levels: **Atomic Skills**, **Compositional Skills**, and **Long-Horizon Laboratory Workflows**. Real and simulated platforms share the same task names.

<figure>
  <img src="/images/heroes/labdex-chemistry-hands.jpg" alt="LabDex overview: real Franka plus XHand, simulation twin, and three-level task hierarchy" loading="lazy" />
  <figcaption>Real bench, sim twin, and the three-level taxonomy. Source: Tang et al., arXiv:2608.18618 / LabDex project page.</figcaption>
</figure>

## What is in the kit

The real cell uses three **Intel RealSense D435i** cameras (wrist, left-front, head), a **Manus Quantum** glove for the hand, and a **VIVE Tracker** for the arm. Demos are recorded at **20 Hz**.

Atomic skills cover pick, place, insert, pour, press, shake, and stir on beakers, round-bottom flasks, graduated cylinders, test tubes, glass rods, funnels, and a weighing funnel. The paper instantiates more than **30** atomic skills on more than **20** objects, then groups them into more than **10** compositional skills and **one** long-horizon workflow: add NaCl from a weighing funnel into a round-bottom flask.

Default training uses **200** demonstrations per task. Evaluation is **50** trials each.

<figure>
  <img src="/images/heroes/labdex-chemistry-hands-2.jpg" alt="LabDex real-world teleop pipeline and simulation replay from key poses" loading="lazy" />
  <figcaption>Glove-and-tracker teleop on the real bench, key-pose replay in sim. Source: Tang et al., arXiv:2608.18618.</figcaption>
</figure>

## The scores

On atomic skills, **π0.5** averages **0.57** success, **ACT** **0.34**, **Diffusion Policy** **0.02**. Placement is the easy bin (**0.92** for π0.5). Pressing the heater is the hard one (**0.12**). The authors flag missing tactile sensing.

Compositional skills drop fast after the first grasp. π0.5 completes **0.73** atomic steps on average versus **0.52** for ACT. DP completes none. Putting a funnel onto a round-bottom flask is a typical cliff: the grasp works, the insert does not.

Nobody finishes the long-horizon NaCl workflow. π0.5’s average completed length is **0.62** atomic steps. The same insert after the funnel grasp is the bottleneck.

A 200 ml beaker pick that is **1.00** with no distractors falls to **0.00** when a similar 100 ml beaker is in view.

## A Human's Take

I am glad someone finally graded lab work as a stack instead of one “did the experiment succeed” bit. The message is blunt: foundation models can place a beaker and still cannot seat a funnel.

If you are selling an autonomous lab, start with the insert. The pour looks great in a GIF.

## Sources

- [arXiv:2608.18618 — LabDex](https://arxiv.org/abs/2608.18618)
- [arXiv HTML — paper and figures](https://arxiv.org/html/2608.18618v1)
- [LabDex project page](https://zhipeng-tang.github.io/LabDex/)
