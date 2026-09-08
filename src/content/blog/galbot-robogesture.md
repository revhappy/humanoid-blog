---
title: "RoboGesture Makes a G1 Talk With Its Hands"
description: "Galbot and Tsinghua’s ECCV 2026 system generates co-speech gestures on a Unitree G1 with BrainCo hands at about 120 FPS, then filters collisions."
pubDate: 2026-09-08
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/galbot-robogesture.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Unitree **G1** with **BrainCo** hands that flashes an OK sign when it says “OK,” and pats its chest on “seize the chance,” is the demo. **RoboGesture**, from **Galbot**, **Tsinghua**, **Peking University**, and partners, is the stack. The paper is [arXiv:2608.28693](https://arxiv.org/abs/2608.28693), accepted at **ECCV 2026** (poster session 2, **10 September**, ExHall 178). Galbot posted the launch on **5 September**.

The robot does not retarget a human skeleton at runtime. It generates motion in its own **41-DoF** upper body: **17** torso and arm joints, **24** on the two hands.

<figure>
  <img src="/images/heroes/galbot-robogesture.jpg" alt="RoboGesture teaser: G1 co-speech gesture frames plus seated social interaction stills" loading="lazy" />
  <figcaption>G1 co-speech poses and seated interaction clips. Source: RoboGesture project page.</figcaption>
</figure>

## Listen, then move

Streaming audio is tokenized with the **Mimi** codec. A hierarchical aligner splits the job: shallow layers watch beats, deep layers classify among **300+** gesture categories. A diffusion transformer with conditional flow matching then writes the next motion chunk. The team calls the failure mode **modality eclipse**: the model keeps waving because last frame said wave, not because the speech still wants it. **Anti-Inertia CFG masking** drops historical motion **15%** of the time in training so the audio has to drive the pose.

Semantic gestures are timed to start **0.4 s** before the spoken keyword. An MPC safety filter, **5.6 ms** per frame, is a convex QP with collision constraints. The project page says it sits comfortably above a **30 Hz** control loop. On the BEAT set, self-collision frames drop from **4.16%** to **0.13%** with the filter; the paper’s BEAT collision rate for the full model is **0.88%**, **0.13%** on SemanticBEAT.

<figure>
  <img src="/images/heroes/galbot-robogesture-2.jpg" alt="RoboGesture pipeline from audio tokenizer through motion generator and MPC filter" loading="lazy" />
  <figcaption>Aligner, streaming generator, and deployment path. Source: RoboGesture project page.</figcaption>
</figure>

Motion generation itself is about **120 FPS**. Galbot’s advertised listen → respond → gesture loop is roughly **2 seconds**. Humanoids Daily, citing the paper’s per-module split, puts the bulk of that wait on ASR, a LoRA-tuned LLM, and TTS, not on the gesture net.

## Dataset and scores

The **RoboGesture** set has **300+** mocap categories, then a semi-synthetic pipeline that builds **1,000 hours** of robot-specific audio-motion pairs. On BEAT, Fréchet Gesture Distance is **0.8452** versus **2.2316** for DiffSHEG and **3.0147** for Semantic Gesticulator. Beat consistency is **0.1866**. Humanoids Daily reports **200** real G1 trials with **zero** falls and **zero** emergency stops. Lower-body balance stays with the G1’s standing controller. The current policy is stationary upper body, not walking-and-talking.

<figure>
  <img src="/images/heroes/galbot-robogesture-3.jpg" alt="Qualitative comparison of Unitree G1 co-speech gestures: Semantic Gesticulator, SemTalk, and RoboGesture" loading="lazy" />
  <figcaption>Baseline collisions versus RoboGesture’s OK and chest-pat. Source: RoboGesture project page.</figcaption>
</figure>

## A Human's Take

I like that they generate in robot joint space instead of hoping IK will forgive a human shrug. The 2-second loop is still a stage pause, not a hallway chat. If the MPC keeps hands off the chest at 5.6 ms, that is the part I would actually ship.

## Sources

- [RoboGesture project page](https://robogesture.github.io/)
- [arXiv:2608.28693 — RoboGesture](https://arxiv.org/abs/2608.28693)
- [Humanoids Daily — RoboGesture](https://www.humanoidsdaily.com/news/beyond-mechanical-chatbots-galbot-unveils-robogesture-to-tackle-real-time-nonverbal-communication)
- [Interesting Engineering — Galbot RoboGesture](https://interestingengineering.com/ai-robotics/robogesture-gives-humanoid-robots-real-time-gestures)
- [GitHub — GalaxyGeneralRobotics/RoboGesture](https://github.com/GalaxyGeneralRobotics/RoboGesture)
