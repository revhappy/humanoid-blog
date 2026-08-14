---
title: "H2R-Bench: Pretty Robot Videos Still Fail the Transfer"
description: "SJTU and Shanghai AI Lab score 11 video models on whether a human demo becomes a usable robot tape."
pubDate: 2026-08-14
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/h2r-bench.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Egocentric human video is cheap. Robot tape is not. **H2R-Bench**, from Shanghai Jiao Tong University and Shanghai AI Lab (arXiv **August 13**), asks whether today’s video world models can turn one into the other.

Each case is a 5-second human clip, a target embodiment (parallel-jaw gripper or dexterous hand), and a prompt. The model must emit a robot video of the *same* task. Pose copy is not required. Keeping the goal, the actions, the functional contact, and the requested body *is*.

<figure>
  <img src="/images/heroes/h2r-bench.jpg" alt="H2R-Bench pipeline from egocentric human videos to scored robot generations" loading="lazy" />
  <figcaption>240 transfer cases, six manipulation families, five scoring axes. Source: H2R-Bench project page.</figcaption>
</figure>

## 240 cases, five scores

The bench uses **120** EgoDex clips, 20 in each of six families: rigid rearrangement, mechanism actuation, insertion, deformable configuration, bulk-material transfer, and surface change. Two embodiments make **240** cases.

Judges (Gemini 3.5 Flash, Qwen3.7-Plus, GPT-5.4) score 25 sampled frames on:

- **M1 Goal** (weight 0.15)
- **M2 Action events** (0.15)
- **M3 Functional contact** (0.30)
- **M4 Embodiment** (0.30)
- **M5 Video quality** (0.10)

**H2RCore** is 100 times the weighted sum. Contact and body type carry 60% of the grade on purpose.

Three human raters line up with the automated transfer scores (within-scene Spearman **ρ = 0.883**, aggregate Pearson **r = 0.930**).

<figure>
  <img src="/images/heroes/h2r-bench-2.jpg" alt="Qualitative human-to-robot video transfers on H2R-Bench" loading="lazy" />
  <figcaption>Qualitative transfers. A polished clip can still keep human hands or the wrong end-effector. Source: H2R-Bench project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/h2r-bench-3.jpg" alt="Scatter of video quality versus H2RCore across models" loading="lazy" />
  <figcaption>Video quality sits in a 0.73–0.81 band while H2RCore runs 30.0 to 84.6. Source: H2R-Bench project page.</figcaption>
</figure>

## Who actually transfers

Video-conditioned models sit on top. **Seedance 2.0** leads at **77.3** H2RCore on the gripper and **84.6** on the hand. **Wan2.7** is next (76.5 / 83.1), then **Kling-V3** (74.5 / 81.7).

Frame-conditioned systems drop hard on embodiment. **Veo 3.1** still recognizes the task (gripper goal **0.725**) but embodiment is **0.100 / 0.227**. **HunyuanVideo 1.5-I2V** wins raw quality (**0.806 / 0.808**) and finishes last on H2RCore (**30.0 / 30.7**). Across 22 model–embodiment pairs, quality and H2RCore barely rank together (Spearman **ρ = 0.14**).

The dexterous hand is the easier target for 9 of 11 models, by **+3.3** H2RCore on average. Giving Seedance nine frames instead of the full clip costs **27.6** gripper points and **41.4** hand points.

## A Human's Take

This is the right rude question. I do not want another “robot-looking” clip that still has human knuckles in it. If you are going to train a policy on generated tape, embodiment and contact are the whole product. H2RCore putting those two at 60% is the first scoring rule in this corner that matches how a robot actually fails.

## Sources

- [arXiv:2608.13049 — H2R-Bench](https://arxiv.org/abs/2608.13049)
- [H2R-Bench HTML paper](https://arxiv.org/html/2608.13049v1)
- [H2R-Bench project page](https://rongdingyi.github.io/H2R-Bench/)
