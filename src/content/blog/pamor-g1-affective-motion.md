---
title: "UCL’s PAMoR Makes a G1’s Whole-Body Motion Carry Valence and Arousal"
description: "PAMoR conditions real-time Unitree G1 motion on kinematics-measured valence and arousal. Raters hit 0.38 top-1, near acted human bodies at 0.44."
pubDate: 2026-09-05
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/pamor-g1-affective-motion.jpg"
readTime: "5 min read"
featured: false
draft: false
---

University College London researchers posted **PAMoR** on **28 August** ([arXiv:2608.28213](https://arxiv.org/abs/2608.28213)): real-time whole-body motion on a **29-DoF Unitree G1** where *what* the robot does is a text prompt and *how* it does it is a point on the valence–arousal plane. Yan Pan, Lingfan Bao, Tianhu Peng, and Chengxu Zhou have it under review at IEEE Robotics and Automation Letters.

Most “emotional robot” pipelines either copy a reference clip or stuff an emotion word into a prompt. PAMoR measures affect from the robot’s own kinematics, then uses that number as a generation condition. No human labels on the training motions.

<figure>
  <img src="/images/heroes/pamor-g1-affective-motion.jpg" alt="PAMoR framework diagram with a real G1 performing sad versus happy whole-body motion" loading="lazy" />
  <figcaption>Framework plus hardware: same action, sad to happy, on a physical G1. Source: Pan et al., arXiv:2608.28213.</figcaption>
</figure>

## Measure first, then generate

Valence comes from postural expansion: arm span, root height, trunk tilt. Arousal comes from movement energy: keypoint speed and acceleration. Both are z-normalized, summed, then clipped to **[−1, 1]**. That labels the whole corpus in closed form.

Three diffusion priors share a frozen motion VAE latent space. One prior is text (the action). Two are the affect scalars. At each denoising step their classifier-free guidance terms are summed, so you can turn valence without rewriting the punch. Motion rolls out **8 frames** at a time from **2** history frames. On an RTX 5090 the three-prior step is **78 ms** for **400 ms** of motion.

The corpus is **10,095** training chains and **2,406** held-out chains over **15** action classes, at **20 Hz** on the G1. Sources include BABEL-annotated AMASS, video reconstructions, and teleop, all filtered through NVIDIA’s SONIC tracker in simulation.

<figure>
  <img src="/images/heroes/pamor-g1-affective-motion-2.jpg" alt="Unitree G1 poses around a valence-arousal plane labeled tense, excited, happy, sad, bored, relaxed" loading="lazy" />
  <figcaption>The V-A plane on the robot: open vs collapsed, still vs energetic. Source: Pan et al., arXiv HTML.</figcaption>
</figure>

## Do people read it?

Commanded V-A, measured back on generated motion, tracks with rank correlation **0.95**. Cross-axis correlations stay below **0.06**.

The user study is the receipt. Twelve raters, **840** trials, seven actions crossed with Russell’s eight circumplex emotions. Clips are G1 only, no face. Chance is **0.125** top-1 and **0.375** top-3.

| Method | Top-1 | Top-3 | Weighted κ | Naturalness (1–5) |
| --- | --- | --- | --- | --- |
| Emotive text prompt (TextOp) | 0.125 | 0.423 | 0.060 | 3.40 |
| Style clip (SMooDi, retargeted) | 0.202 | 0.417 | 0.209 | 3.25 |
| **PAMoR** | **0.384** | **0.845** | **0.688** | **4.05** |

Acted human bodies in the Emilya database hit **0.44** top-1 on a similar protocol. PAMoR’s per-emotion range is **0.21** (relaxed) to **0.49** (excited). Ablation: a single prior jointly conditioned on text and V-A drops action accuracy from **0.748** to **0.478**. Composition is doing the work.

Limits they own: equal weights on the valence cues are a convention, the whole-body tracker is open-loop on affect, and executed V-A can drift.

## A Human's Take

I am so here for a humanoid that can punch “happily” without the prompt eating the punch. Measuring expansion and energy from kinematics is a cleaner trick than hiring annotators to argue about sad walks. The 0.38 recognition number is not magic, but it is in the same neighborhood as acted humans, on a robot with no face. Close the tracker loop next, or the affect you commanded is not the affect that hits the floor.

## Sources

- [arXiv:2608.28213 — PAMoR abstract](https://arxiv.org/abs/2608.28213)
- [arXiv HTML — full paper, user-study table, and G1 stills](https://arxiv.org/html/2608.28213v1)
