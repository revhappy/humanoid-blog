---
title: "SocioGesture Teaches a G1 When Not to Walk Over"
description: "OpenMind’s onboard G1 stack maps wave, stop, and ‘I’m on a phone’ to conservative greeter behaviors in 25 ms on Jetson Thor, no cloud in the loop."
pubDate: 2026-09-08
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/sociogesture.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A Unitree **G1** that waves back when you wave, and stays put when you put a palm up, is the demo. **SocioGesture**, posted **3 September 2026** as arXiv:2609.04545 by Wenjin Fu, Li-Fan Wu, Jerin Peter, Chip Huyen, Boyuan Chen, and Jan Liphardt at **OpenMind**, is the stack that decides.

The robot-mounted **Jetson Thor** runs the whole one-person loop in **25 ms**, inside a 30 FPS camera’s **33 ms** budget. No cloud inference in the live path.

<figure>
  <img src="/images/heroes/sociogesture.jpg" alt="G1 facing a person who is waving, plus six onboard gesture panels" loading="lazy" />
  <figcaption>G1 greeter plus onboard gesture classes. Faces are blurred in the paper. Source: arXiv:2609.04545.</figcaption>
</figure>

## What it recognizes

Seven training classes, mapped to conservative actions:

- **Come / wave** → approach (wave also waves back)
- **Stop** → halt
- **Phone call / occupied** → wait, keep distance
- **Idle facing / scratch head** → approach and engage (scratch head is a distractor for hand-to-head cues)

Below **0.7** confidence the robot holds position and saves the clip. After deployment, those uncertain segments get labeled offline and folded back in. The vocabulary grew from **7 to 10** with handshake, salute, and thumbs up.

On a held-out 5-subject 10-class test set, overall clip accuracy went **64.6% → 87.9%**. The original seven stayed at **98.5%**. The three new classes hit **67.6%**.

## Occlusion and the live G1

Hands vanish in robot-view pose estimates. Training with missing-hand and missing-arm skeletons lifts hand-occlusion accuracy from **31.8% to 84.9%** and arm-occlusion from **28.3% to 79.5%**, with clean accuracy basically unchanged (~96% leave-one-subject-out).

Live closed-loop on a G1, five people who appear nowhere in training, fine-tuning, or the offline test: **146 of 150** trials recognized correctly (**97.3%**). When the robot did act, the behavior was right **98.3%** of the time. No **stop** gesture produced an approach. Behavior success overall is **79.3%** because low-confidence trials stay still on purpose.

<figure>
  <img src="/images/heroes/sociogesture-2.jpg" alt="SocioGesture system diagram from RGB to conservative robot behaviors" loading="lazy" />
  <figcaption>Online path on the robot; uncertain clips go offline for labels. Source: arXiv:2609.04545.</figcaption>
</figure>

The recognizer is **1.3 M** parameters and **2.3 GFLOPs**, one forward pass. Full stack on Thor: YOLO11n 5 ms, BoT-SORT 1 ms, RTMW-l pose 8 ms, gesture model 11 ms. Three people in frame: **42 ms**.

<figure>
  <img src="/images/heroes/sociogesture-3.jpg" alt="Robot-view examples of wave, stop, occupied, handshake, salute, thumbs up, and multi-person scenes" loading="lazy" />
  <figcaption>Original gestures, post-adaptation classes, and multi-person frames. Source: arXiv:2609.04545.</figcaption>
</figure>

Offline labeling used **Gemini 2.5 Flash** on saved RGB, then human verification (67 of 71 clips kept). Dataset and eval code are promised on the project page; they were not linked at fetch time.

## A Human's Take

The useful part is the fail-safe: if the G1 is not sure, it does not walk at you. I will take a robot that waits over one that hallucinates a wave. New-class accuracy at 67.6% is still a shrug. Handshake in the wild will tell us if the offline loop is a product or a lab ritual.

## Sources

- [arXiv:2609.04545 — SocioGesture](https://arxiv.org/abs/2609.04545)
- [SocioGesture project page](https://wenjinfu.github.io/socioGesture/)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.04545)
