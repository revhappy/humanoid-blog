---
title: "AGIBOT’s GE-Act 2.0 Scales Zero-Shot Hands From 300 to 30,000 Hours"
description: "A native world-action model, trained from scratch, lifts G1-OP success from 17.1% to 44.1% across 100 unseen tasks. Code is coming."
pubDate: 2026-09-11
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/ge-act-20.jpg"
readTime: "5 min read"
featured: false
draft: false
---

AGIBOT just open-sourced the paper for **GE-Act 2.0**, a world-action model trained from scratch on manipulation data instead of a borrowed video generator. Humanoids Daily dated the release **September 11, 2026**, a day after Unitree’s UnifoLM-WLA-1.0 drop.

The test is blunt. No task-specific fine-tuning. New objects, scenes, lighting. **100 atomic tasks**, **20 skill groups**, two bodies: the biped **G1-OP** and the wheeled **G2-90D**.

<figure>
  <img src="/images/heroes/ge-act-20.jpg" alt="Zero-shot task wall and 30,000-hour robot rollouts for GE-Act 2.0" loading="lazy" />
  <figcaption>Four data scales, 100 tasks, and 30,000-hour rollouts. Source: GE-Act 2.0 paper, Figure on the project page / arXiv HTML.</figcaption>
</figure>

## What scaled

The project page and arXiv paper (2609.05588, submitted **September 4**) report four nested co-training pools. Same recipe, same pretrained parts:

| Co-training hours | G1-OP success | G2-90D success | G1-OP tasks with any success |
|---|---|---|---|
| 300 | 17.1% | 13.4% | 39 / 100 |
| 1,200 | 22.6% | 21.0% | 51 / 100 |
| 5,000 | 27.3% | 23.5% | 62 / 100 |
| **30,000** | **44.1%** | **31.1%** | **76 / 100** |

Gains cover **19/20** skill groups on G1-OP and **18/20** on G2-90D. G2-90D is under **2%** of the co-training mix and still picks up **17.7** points. Ten of its skill groups have fewer than five hours of G2 data; four have less than one.

The 30,000-hour checkpoint starts finishing skills that were dead at 300 hours: folding a towel, nesting paper cups, uncapping a pen, arranging flowers. Skill hours and zero-shot success correlate (Pearson **r=0.80**, Spearman **ρ=0.85**). Wiping (824 hours) hits **76.7%**. Broom sweeping (64 hours) sits near **3.3%**.

<figure>
  <img src="/images/heroes/ge-act-20-2.jpg" alt="G2-90D rollout montage of pick, stack, pour, and wipe tasks" loading="lazy" />
  <figcaption>G2-90D zero-shot rollouts: pick, stack, pour, wipe. Source: GE-Act 2.0 paper HTML.</figcaption>
</figure>

## How it is wired

GE-Act 2.0 is three pieces, all initialized on manipulation data:

- **CoAE**: a control-oriented autoencoder. Each 256×384 frame becomes **24** tokens (64× spatial downsampling). Caption-match probe: **97.95%**.
- **SVP**: a single-step visual planner. One MeanFlow pass, not a long denoising chain.
- **IDM**: inverse dynamics that turns the predicted future plus proprioception into an action chunk.

**KASO** (knowledge-aligned selective optimization) is the glue. The planner can imagine a valid left-side grasp while the demo went right. Training on that pair is the **validity gap**. KASO samples several futures and keeps the ones whose implied actions match the recording. On a G2-90D four-object ablation, pick success goes from **22.5%** to **37.5%**.

The full pipeline is **104 ms** per action chunk on one **RTX 5090**: **52** executable actions at **30 Hz** (~1.7 s of motion). Instruction grounding on object, color, shape, and position is at least **90%** of trials under the same OOD protocol. Stress tests swap “green cup” to “blue cup” mid-reach; the arm pauses about **1.5 s** and redirects. “Put the cup into the shoebox” does not default to packing the shoe.

Code on the project page is still **coming soon**. SVP pretraining uses **39,000** hours; IDM uses **32,000**. Those are separate from the 30,000-hour co-training ladder.

## A Human's Take

I like that they refused to let a fine-tune hide the pretrained model. 44% on a hundred held-out tasks is not a factory shift, and they say so. The scaling curve not flattening between 5,000 and 30,000 hours is the part I’ll watch. If the weights actually land, this is a real open stack to poke, not a teaser PDF.

## Sources

- [GE-Act 2.0 project page](https://ge-act-v2.github.io/)
- [arXiv:2609.05588 — GE-Act 2.0](https://arxiv.org/abs/2609.05588)
- [Humanoids Daily — AGIBOT open-sources GE-Act 2.0](https://www.humanoidsdaily.com/news/agibot-open-sources-ge-act-2-0-challenging-unitree-in-the-open-embodied-ai-race)
