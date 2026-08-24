---
title: "DECOWAM Splits Base, Arm, and Camera Motion on a Wheeled Quad"
description: "Tsinghua, Shanghai AI Lab, and DEEP Robotics freeze a FastWAM backbone, cut action MSE 21.7%, and ship the ARMDOG dataset."
pubDate: 2026-08-23
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/decowam-legged-mobile-manip.png"
readTime: "5 min read"
featured: false
draft: false
---

A team from **Tsinghua**, **Shanghai Artificial Intelligence Laboratory**, **Harbin Institute of Technology**, and **DEEP Robotics** posted **DECOWAM** on arXiv **August 20–21**: a decoupled whole-body world-action model for a wheeled quadruped with a 6-DoF arm.

Fixed-base world-action models treat the camera as nailed down. On a moving base the pixels mix scene change, arm motion, and ego-motion. DECOWAM’s bet is to stop stuffing all of that into one latent.

<figure>
  <img src="/images/heroes/decowam-legged-mobile-manip.png" alt="Wheeled quadruped with an arm, plus three rows of tabletop trials labeled Fail X-VLA, Fail FastWAM, Success DECOWAM" loading="lazy" />
  <figcaption>Closed-loop coordination on the real platform. Source: arXiv:2608.20114.</figcaption>
</figure>

## Freeze the giant, train the residuals

The backbone is **FastWAM** (Wan-2.2 video diffusion plus an ActionDiT action branch). Stage 1 adapts FastWAM to their data. Stage 2 **freezes** that checkpoint and trains only residual adapters, a future-information bottleneck, split base/arm latents, and a base-velocity token for the video expert.

Trainable parameters in that second stage: **25.95 million**, down from **6,020.75 million** in full FastWAM fine-tuning. The abstract says action MSE dropped **21.7%** versus FastWAM on a fixed replay protocol.

The action chunk is **48 steps × 14 dimensions**: arm joints, gripper, 3-D base velocity, plus loader padding. Video prediction is **eight** future RGB frames at **384×320**.

<figure>
  <img src="/images/heroes/decowam-legged-mobile-manip-2.png" alt="DECOWAM architecture diagram with frozen WAN backbone, future bottleneck, dual latents, and staged adaptation" loading="lazy" />
  <figcaption>Method overview: freeze, factor, then deploy causally. Source: arXiv:2608.20114.</figcaption>
</figure>

## ARMDOG, and 79 real trials

They also introduce **ARMDOG**, a synchronized real-robot set: RGB, whole-body state/action, and language. The converted world-action snapshot used in the paper has **217 episodes** from **27** task folders and **56,041** frames. After alignment and quality filtering, the full corpus is **1,487 episodes** and **343,550** RGB frames (~**321.3 minutes** at **15 Hz**). Bottle pick-and-place and place-block dominate.

On the physical robot, **79 trials per method**: DECOWAM completed **46** tasks (**58.2%**) with a mean time of **49 seconds**. The paper says it led approach and transport among the compared systems, carried **96.4%** of successful grasps into transport, and posted the highest whole-body coordination, base-displacement robustness, and autonomous-recovery rates. Task completion stayed comparable to the strongest baseline. The qualitative figure shows X-VLA and FastWAM drifting the base during a tabletop reach that should stay planted; DECOWAM holds.

Affiliations in the PDF: DEEP Robotics is Hangzhou Yunshenchu Technology.

## A Human's Take

Splitting “where the base goes” from “what the arm does” is the kind of unglamorous systems work that actually ships. 26 million trainable parameters beating a 6-billion-parameter fine-tune is the headline for anyone paying a GPU bill. Fifty-eight percent completion on 79 trials is not a warehouse yet. It is a quadruped that finally knows when to stand still.

## Sources

- [arXiv:2608.20114 — DECOWAM](https://arxiv.org/abs/2608.20114)
- [arXiv HTML — DECOWAM (v2)](https://arxiv.org/html/2608.20114v2)
