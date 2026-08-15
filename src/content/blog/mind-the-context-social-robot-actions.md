---
title: "Mind the Context Teaches a Robot When Mopping Is Rude"
description: "Cambridge and Utrecht’s IROS 2026 paper splits a scene into room vs people so a social robot can keep learning which actions fit each space."
pubDate: 2026-08-15
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/mind-the-context.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Cambridge** and **Utrecht** posted **Mind the Context** on **August 13**, an extended version of a paper accepted at **IROS 2026**. The question is simple: the same cluster of people can mean “serve snacks” in a living room and “do not start a conversation” in a meeting.

Authors include **Rafal Robert Karpinski**, **Fethiye Irmak Dogan**, **Nikhil Churamani**, **Yiming Luo**, **Maartje M.A. de Graaf**, **Davide Dell’Anna**, and **Hatice Gunes**. Code is on **GitHub (Cambridge-AFAR/Mind-the-Context)**. Google funded part of the Cambridge side.

<figure>
  <img src="/images/heroes/mind-the-context.jpg" alt="Cartoon of a robot mopping in a living room vs interrupting an office meeting" loading="lazy" />
  <figcaption>Fig. 1: same social cluster, different room, different verdict on cleaning. Source: Karpinski et al., arXiv:2608.13448.</figcaption>
</figure>

## Split the picture, then replay

They call the method **EDD** (Explicit Disentanglement Dual-Branch). A panoptic segmenter (Grounded-SAM via Autodistill) cuts each frame into:

- an **environment** view with people boxed out
- a **social** view that keeps only agent silhouettes

Two **MobileNetV2** branches score nine actions: vacuuming, mopping, carrying warm/cold food, drinks, small/large objects, cleaning, starting a conversation. Scores are **1–5**. A replay buffer of **60** scenes (5% of the train set) is mixed in so older rooms are not forgotten.

The data is synthetic **MannersDB+** / **OfficeDB**: **Pepper** in a home plus five office spaces (1,000 home + 1,000 office scenes in the Pepper-only subset). Three human raters per image, then averaged.

<figure>
  <img src="/images/heroes/mind-the-context-2.jpg" alt="EDD dual-branch diagram: environment mask, social mask, fused scores" loading="lazy" />
  <figcaption>EDD pipeline: decompose, dual encode, fuse, regress nine scores. Source: Karpinski et al., arXiv:2608.13448.</figcaption>
</figure>

## What beat the baselines

EDD’s RMSE is **0.783** (SD 0.033), Pearson **0.552**, concordance **0.375**. That beats FedLGR, DUCA, DARE++, and zero-shot **Qwen2.5-VL**, **LLaVA-OneVision**, and **DeepSeek-VL**, which correlate poorly with the human scores even when error looks decent.

A single-branch control that sees the whole image does worse. Bounding-box splits beat silhouettes and robot close-ups. Domain order (home first vs hallway first vs high-contrast shuffles) only moves the needle a little.

<figure>
  <img src="/images/heroes/mind-the-context-3.jpg" alt="Synthetic office scene of Pepper among people used in the dataset" loading="lazy" />
  <figcaption>Office-domain scene used for the social branch. Source: Karpinski et al., arXiv:2608.13448.</figcaption>
</figure>

The authors flag the obvious next tests: more than one robot body, real cameras, and a segmenter that will be wrong in the wild.

## A Human's Take

I like that they treated “the room is part of the rule” as a modeling choice, not noise to be invariant to. Zero-shot VLMs scoring the scene and then missing the ranking is a useful slap. I still want this on a real Pepper in a real hallway before I trust the replay buffer. Synthetic living rooms are tidy. Tuesday morning offices are not.

## Sources

- [arXiv:2608.13448 — Mind the Context](https://arxiv.org/abs/2608.13448)
- [GitHub — Cambridge-AFAR/Mind-the-Context](https://github.com/Cambridge-AFAR/Mind-the-Context)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.13448v1)
