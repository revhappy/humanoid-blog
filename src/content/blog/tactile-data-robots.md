---
title: "Tactile Data Is Finally Big Enough to Matter for Robot Hands"
description: "IEEE Spectrum surveys T-Rex’s 65% touch-reactive VLA, a 3,000-hour multi-sensor set, and NeoteAI’s 30,000-hour tactile world-action model."
pubDate: 2026-09-10
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/tactile-data-robots-3.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Vision-language-action models can fold laundry from a camera. They still fumble a USB plug. **IEEE Spectrum**’s **September 10, 2026** piece by Edd Gent is the cleanest survey yet of why: touch data has been tiny, and bolting it onto a VLA the naive way often makes things worse.

The through-line is scale plus architecture. Berkeley’s Trevor Darrell puts it plainly: most dexterous work humans do with their eyes closed. Force, slip, and a precise grasp are not jobs for a wrist camera.

<figure>
  <img src="/images/heroes/tactile-data-robots-3.jpg" alt="NeoteAI N0-TWAM teaser with robot contact photos and 30,000-plus hours of NeoData" loading="lazy" />
  <figcaption>NeoteAI’s N0-TWAM, trained on NeoData’s 30,000-plus hours of synced vision and touch. Source: NeoteAI research page.</figcaption>
</figure>

## T-Rex: two clocks, 65% average

**T-Rex** (arXiv:2606.17055) is the academic centerpiece Spectrum walks through. UC Berkeley, NVIDIA, Stanford, and collaborators open-source a **100-hour** tactile play set: **207** household objects, **22** motor primitives, a bimanual Dexmate Vega-1 with two **22-DoF Sharpa Wave** hands. A Mixture-of-Transformer splits a slow action expert from a tactile expert that runs **four times** faster. After ~**100** teleop demos per task, T-Rex averages **65%** success on **12** contact-rich jobs, about **30** points over EgoScale at **35%**. Screw in a bulb, split a paper cup, slide a card, move an egg. Nail a tactile stream onto π0.5 without that split and the score drops below vision-only π0.5.

<figure>
  <img src="/images/heroes/tactile-data-robots.jpg" alt="T-Rex architecture with toothpaste demo, tactile expert, and 5 Hz vs 20 Hz clocks" loading="lazy" />
  <figcaption>Low-rate visuomotor plan, high-rate tactile residual. Source: T-Rex project page.</figcaption>
</figure>

## Everyone else is racing the same gap

Tsinghua’s Chengbo Yuan aggregated more than **3,000 hours** from public sets covering **21** sensor types, mapped onto a template hand so the model is not stuck on one gel pad. An **80-institution** follow-on is collecting a standardized corpus.

Fudan and spin-out **NeoteAI** go bigger. Their **N0-TWAM** page says NeoData spans six embodiments and **450** tasks, “**30000+** hours” of vision-tactile clips. The 7.16B model jointly predicts future video, future touch, and action. Reported averages: **84.5%** on UniVTAC, **49.4%** on NeoSim, **46.3%** on eight real contact-rich tasks, versus **30.0%** for π0.5 on that real suite.

USC has a model, according to Spectrum, that infers pressure from vision after more than **2,700** handheld gripper demos, aimed at backfilling touch onto existing video sets. CAS’s Long Cheng, heading to **IROS 2026**, predicts expected touch from vision and amplifies the surprise; five contact-rich tasks average **62.8%** with that trick versus **28.2%** without. Lu at NeoteAI guesses on the order of **100,000** varied real-world hours before touch looks like language-scale pretraining.

Yuan’s caution is the right one: so far tactile training mostly makes robots more sample-efficient on jobs they could already attempt. The tasks that are actually impossible without touch may still need new algorithms, not just more gel-pad hours.

## A Human's Take

I am glad someone measured the failure mode where “add tactile” makes π0.5 worse. That is the difference between a sensor and a control loop. T-Rex’s two-clock split and NeoteAI’s predict-then-feel stack are the first designs that treat contact as a faster process than video, which is how hands actually work. I will start believing the 100,000-hour slogan when a USB insertion number shows up next to a factory cycle time, not a 16-trial lab average.

## Sources

- [IEEE Spectrum — Robots Are Learning to Feel](https://spectrum.ieee.org/tactile-data-robots)
- [T-Rex project page](https://tactile-reactive-dexterous.github.io/)
- [arXiv:2606.17055 — T-Rex](https://arxiv.org/abs/2606.17055)
- [NeoteAI — N0-TWAM](https://research.neoteai.com/n0-twam/)
