---
title: "Context-Aware Motion Priors Teach Humanoids Which Reference Clips Matter"
description: "CMP adapts general motion priors to the current task context without skill labels, improving humanoid RL performance across five control tasks."
pubDate: 2026-08-05
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/cmp-context-motion-priors.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Motion priors make physics-based humanoids look less like crash-test dummies — until the prior starts “helping” with the wrong clip. **Context-Aware Motion Priors (CMP)** (arXiv:2608.03234, submitted Aug 4, 2026) adapts a general prior to the **current task context** without manual skill labels, dataset partitioning, or a separate skill-discovery stage.

<figure>
  <img src="/images/heroes/cmp-context-motion-priors.jpg" alt="Walk, dash, and turn contexts with different motion patterns toward a target flag" loading="lazy" />
  <figcaption>Task context changes which reference motions are relevant (walk vs dash vs turn). Source: CMP arXiv HTML figure.</figcaption>
</figure>

## The problem they name

Existing methods typically train one task-agnostic prior on the whole reference set and apply it uniformly during policy learning. That prior cannot tell whether a walking clip, a sprint, or a sharp turn is relevant right now — so it can inject **irrelevant or conflicting guidance**.

CMP’s answer, per the abstract:

- Learn **context–motion compatibility** from **high-advantage policy rollouts**.
- Keep a **demonstration-based objective** so relevance stays grounded in the reference distribution.
- Use relevance scores to **reweight reference supervision** for a lightweight **context-conditioned adapter**.

The authors instantiate CMP with both **Adversarial Motion Priors** and **Score-Matching Motion Priors**. Across **five humanoid control tasks**, they report better task performance and sample efficiency, meaningful context–motion alignment, and robustness to **imbalanced** reference distributions. Code is stated as forthcoming publicly.

<figure>
  <img src="/images/heroes/cmp-context-motion-priors-2.jpg" alt="CMP framework diagram relating policy context to motion prior reweighting" loading="lazy" />
  <figcaption>CMP system diagram from the paper HTML. Source: arXiv:2608.03234.</figcaption>
</figure>

## Why this is more than a training trick

Humanoid datasets are messy mixes: locomotion, sports, dance, failures. A frozen global prior is a blunt instrument. Context-conditioned reweighting is closer to how you’d coach a robot in the moment — “right now you need a dash, not a stroll.” The paper’s claim is that you can get that behavior without hand-labeling every clip.

## A Human's Take

I'm curious whether CMP still holds when the reference library is internet-scale and dirty, not a curated five-task suite. The “no skill labels” pitch is the part worth stealing for open stacks. If the public code lands with adapters that drop onto AMP and score-matching priors people already run, this becomes a practical upgrade rather than a paper-only idea.

## Sources

- [arXiv:2608.03234 — Learning Context-Aware Motion Priors for Humanoid Control](https://arxiv.org/abs/2608.03234)
- [arXiv HTML full text](https://arxiv.org/html/2608.03234v1)
