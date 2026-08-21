---
title: "HiTac-WAM Predicts Touch Before the Grasp, Then Checks It Live"
description: "CAS and ImprintX train a hierarchical tactile world model that lifts chip, eraser, and USB success from 31% to 72% on a real arm."
pubDate: 2026-08-21
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/hitac-wam-tactile.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Vision can look like a good grasp while the fingertips have already missed. **HiTac-WAM**, from the Institute of Automation at the Chinese Academy of Sciences, **ImprintX Robotics**, and BAAI, is a world-action model that forecasts **contact, 3D deformation, and slip risk** for each candidate action chunk *before* it runs. arXiv posted it August 20.

On a real **IMETA-Y1** arm with bilateral **DM-Tac W2** sensors, that forecast-and-check loop moved average success from **31.1%** to **72.2%** across three contact-rich tasks.

<figure>
  <img src="/images/heroes/hitac-wam-tactile.jpg" alt="HiTac-WAM overview with chip, eraser, and USB tasks and success bars" loading="lazy" />
  <figcaption>HiTac-WAM overview and real-robot success bars. Source: arXiv:2608.19574.</figcaption>
</figure>

## Hierarchy, not another tactile image

Most tactile-aware world models dump future touch into an image or a latent. HiTac-WAM splits the forecast into three physically ordered heads:

1. **Contact state** (are we touching?)  
2. **3D deformation field** (how is the skin moving?)  
3. **Slip risk** (are we about to lose it?)  

Deformation is gated on contact. Slip is gated on contact plus deformation. Stop-gradient keeps the downstream losses from rewriting the upstream heads. A directed attention mask lets tactile queries see the predicted video and action, but not the other way around, so the vision-action backbone does not get to cheat on touch.

They train per task for **10,000** steps on **8** H100s, batch **64**, from **200** episodes per task split **160 / 20 / 20**. Streams run at **30 Hz**. Tactile history uses offsets **−12, −6, −2, 0**; they predict **24** future tactile steps.

Mean contact **F1 is 0.921**. Onset and release timing errors average **2.1** and **2.3** frames (~60–87 ms). Under matched budgets, the hierarchy cuts 3D displacement L2 error **17.6%** versus a deformation-only predictor and lifts slip **AUPRC 60.4%** versus slip-only. Slip events are only **1.39%** of frames, so they treat that head as a ranker, not a calibrated alarm.

<figure>
  <img src="/images/heroes/hitac-wam-tactile-2.jpg" alt="IMETA-Y1 arm, RealSense cameras, and DM-Tac sensors over a table of objects" loading="lazy" />
  <figcaption>IMETA-Y1 platform with DM-Tac W2 sensors. Source: arXiv:2608.19574.</figcaption>
</figure>

## Does the forecast change the action?

**DreamZero** (one sampled chunk, no tactile path) averages **31.1%**. Ranking four candidates with the hierarchical forecast hits **61.1%**. Ranking on visual task progress alone, same budget, is **35.6%**, and the confidence intervals do not overlap. Adding online verification, where a mismatch against the retained forecast for three consecutive steps aborts and replans, reaches **72.2%**.

Task-wise, full system, 30 trials each: chip grasping **76.7%**, blackboard erasing **90.0%**, USB insertion **50.0%**. USB is still the dog. Success rules are strict: chip must sit 3 s, erase must clear **>80%**, USB must seat and light the LED.

Post-hoc, verification fired in **18** of **90** full-system trials; **16** lined up with real anomalies and **12** of those recovered.

## A Human's Take

Predicting slip *before* you commit the chunk is the right argument. The USB number tells you the method is not magic: a connector still jams. I want this on a five-finger hand, not just a parallel jaw, and I want the slip head calibrated so it can stop a drop instead of only reranking a batch of four. Until then, 72% versus 31% on the same three chores is a real delta.

## Sources

- [arXiv:2608.19574 — HiTac-WAM](https://arxiv.org/abs/2608.19574)
- [arXiv HTML — method, tables, and platform photos](https://arxiv.org/html/2608.19574)
