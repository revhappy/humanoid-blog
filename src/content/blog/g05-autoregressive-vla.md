---
title: "Galaxea G0.5 Puts Reasoning and Action in One Token Stream"
description: "G0.5 is an autoregressive VLA that emits chain-of-thought and motor tokens together, beating π0.5 on R1 robots and BEHAVIOR."
pubDate: 2026-08-13
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/g05-autoregressive-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Galaxea’s **G0.5** is a pretrained vision-language-action model that keeps the language model as the actor. One transformer decoder writes reasoning tokens and action tokens under the same next-token loss, instead of handing a hidden state to a separate flow-matching expert. The paper landed on arXiv on **August 12**.

<figure>
  <img src="/images/heroes/g05-autoregressive-vla.jpg" alt="G0.5 teaser showing one autoregressive stream for reasoning and action on a drawer-and-walnut task" loading="lazy" />
  <figcaption>G0.5 conditions on multi-view images, an instruction, and proprioception, then emits chain-of-thought and compact action codes. Source: Galaxea G0.5 paper.</figcaption>
</figure>

## One stream, three pieces

Most recent VLAs treat the VLM as a context encoder. G0.5 argues that move hides the model’s chain-of-thought, in-context learning, and prompt steering behind a compressed bottleneck. The team’s fix is to stay autoregressive and shrink the action tokens.

- **ActionCodec**: a learned cross-embodiment tokenizer that maps heterogeneous robot actions into a shared discrete vocabulary. Idle control groups are dropped instead of padded.
- **Native CoT**: task decomposition, object grounding (bounding boxes), traces, and action hints sit in the same stream as the action codes.
- **Visual memory**: multi-second history is injected through the vision encoder rather than by stacking full frames at the decoder.

Because reasoning and action share weights, the paper says prompts can steer action granularity, task horizon, and out-of-distribution scene handling without extra training.

## Seven test beds

G0.5 is pretrained on a mix of robot datasets and VQA samples, then scored in seven separate regimes:

- **R1-Lite / R1-Pro** real-world fine-tuning: **76.7%** success versus **53.3%** for π0.5 and **24.4%** for GR00T-N1.7
- **2025 BEHAVIOR Challenge**, 50 long-horizon household mobile-manipulation tasks, one generalist policy: **31.4%** versus **26.3%** for π0.5 and **26.1%** for the challenge winner
- **DROID** post-training, then zero-shot to an unseen environment and objects: **82.5%**
- **LIBERO** **98.9%**, **RoboTwin 2.0** **93.3%**, **SimplerEnv-Bridge** **87.3%**

The hardware photos in the paper show an R1-Lite folding towels and an R1-Pro stacking crates. Those are specialist fine-tunes, not a claim that the pretrained checkpoint already folds laundry in a kitchen.

<figure>
  <img src="/images/heroes/g05-autoregressive-vla-2.jpg" alt="Galaxea R1-Lite dual-arm robot at a white table with a crate of towels" loading="lazy" />
  <figcaption>R1-Lite setup used for the real-world towel-folding fine-tune. Source: Galaxea G0.5 paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/g05-autoregressive-vla-3.jpg" alt="Galaxea R1-Pro humanoid upper body stacking gray crates on a table" loading="lazy" />
  <figcaption>R1-Pro after stacking boxes in the paper’s specialist suite. Source: Galaxea G0.5 paper.</figcaption>
</figure>

## A Human's Take

I’m glad someone is arguing that the VLM should stay the decision-maker. Flow-matching experts made high-frequency control cheap, and they also made the language model a feature extractor. G0.5’s numbers on R1 hardware and BEHAVIOR are the part I’ll watch: if a single decoder can hold 76.7% on those bimanual cells without a second action head, the “VLM-as-encoder” recipe has a real competitor. The thing I still want is an independent lab running the same R1 tasks with the released backbone, not only Galaxea’s fine-tune.

## Sources

- [arXiv:2608.11739 — G0.5: One Autoregressive Stream for Robot Reasoning and Action](https://arxiv.org/abs/2608.11739)
- [Galaxea G0.5 HTML paper](https://arxiv.org/html/2608.11739v1)
- [Galaxea G0.5 project page](https://opengalaxea.github.io/G05/)
- [alphaXiv — G0.5 abstract](https://www.alphaxiv.org/abs/2608.11739)
