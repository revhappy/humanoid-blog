---
title: "OpenDexGrasp Picks Up a Pitcher by the Handle, Not the Body"
description: "PKU’s CoRL 2026 system maps language to a Sharpa Wave grasp, with 72% real-world success versus 59% for a DexGraspNet 2.0 baseline."
pubDate: 2026-09-20
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/opendexgrasp.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most grasp papers ask whether a hand can hold an object. **OpenDexGrasp** asks whether it holds it the way the task needs: kettle by the handle, knife away from the blade, spray bottle with the trigger free.

The Peking University team posted the CoRL 2026 paper as arXiv **2609.18117** (v2 on **17 September 2026**) and a project page with real-robot clips. Hardware is a **Sharpa Wave** hand on a **Franka Emika Panda**, with an Intel **RealSense D435** for pose.

<figure>
  <img src="/images/heroes/opendexgrasp.jpg" alt="OpenDexGrasp teaser with dataset panels and real-robot functional grasps" loading="lazy" />
  <figcaption>Teaser: OpenDexVerse data on the left, real functional grasps on the right. Source: OpenDexGrasp project page.</figcaption>
</figure>

## Coverage, then alignment

The data recipe is **C2A** (Coverage-to-Alignment). **OpenDex-Scale** is the wide net: **105** categories, **1.11k** instances, **1.24 million** automatic grasps, **557.18k** functional poses tagged by a VLM (**44.93%** functional). **OpenDex-Align** is the clean set: **95** categories, **2.77k** instances, **27.42k** teleop and transferred grasps, **68.02%** functional.

The model fuses multi-view RGB and language through a pretrained VLM (Qwen3-VL-4B in the appendix), a PointNet++ cloud, and a flow-matching action expert. Affordance is an auxiliary head on the same latent, not a separate map-then-search step at test time. Grasp pose is **31-D**: 3 translation, 6-D rotation, **22** joints.

## Numbers that matter

In simulation, functional success is **68.07%** on seen objects and **62.96%** on unseen, versus **50.88%** and **43.22%** for a DexGraspNet 2.0 baseline the authors retrained with CLIP on the same splits. Unseen penetration depth drops from **1.62 cm** to **0.48 cm**.

On the real hand, average success is **72.0%** versus **59.0%**. Per-object rates from the paper’s Table 4 include pitcher **80%** (baseline 50%), water bottle **100%** (70%), umbrella **90%** (80%), and bouquet **50%** (40%). The authors flag open-loop execution, no tactile loop, and a still-small Align set.

<figure>
  <img src="/images/heroes/opendexgrasp-2.jpg" alt="Franka arm with Sharpa Wave hand over labeled household objects on a table" loading="lazy" />
  <figcaption>Labeled hardware: Sharpa Wave, RealSense D435, Panda. Source: OpenDexGrasp project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/opendexgrasp-3.jpg" alt="Keyframe strips of the Sharpa Wave hand grasping brush, bouquet, rice paddle, umbrella, and other tools" loading="lazy" />
  <figcaption>Language-conditioned grasps on everyday tools. Source: OpenDexGrasp project page.</figcaption>
</figure>

## A Human's Take

“Grasp the pitcher to pour” is the right test. I like that they published the misses (bouquet at 50%) next to the pitcher win. The next receipt I want is closed-loop contact, not another million synthetic poses.

## Sources

- [arXiv:2609.18117 — OpenDexGrasp: Open-vocabulary Task-Oriented Dexterous Grasping](https://arxiv.org/abs/2609.18117)
- [arXiv HTML — full paper with tables](https://arxiv.org/html/2609.18117v2)
- [OpenDexGrasp project page](https://opendexgrasp.github.io/)
