---
title: "TEMPO Splits VLA RL: Freeze Semantics, Train Actions Fast"
description: "TEMPO freezes the VLA backbone and runs two-timescale RL on a semantic projection layer and action expert, beating uniform RL post-training on CALVIN and real arms."
pubDate: 2026-08-10
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/tempo-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most teams post-train a vision-language-action model the same way: one RL loop, same step size, every weight fair game. That is simple. It is also a good way to scramble the semantics that made the pretrained model useful.

**TEMPO** (arXiv:2608.07314, submitted Aug 7, 2026) is a semantic-action decoupled, two-timescale RL post-training framework for VLAs. Authors Ziheng Liu and Quantao Yang freeze the pretrained vision-language backbone and only adapt two pieces: a **semantic projection layer** (updated infrequently) and a **low-level action expert** (updated frequently).

<figure>
  <img src="/images/heroes/tempo-vla.jpg" alt="TEMPO overview of semantic-action decoupled RL for VLA models" loading="lazy" />
  <figcaption>TEMPO overview: freeze the backbone, train projection and action expert on different timescales. Source: arXiv:2608.07314.</figcaption>
</figure>

## Why the split

The paper's diagnosis is functional, not fashion:

- **SFT** drifts when the deployment distribution leaves the demo set.
- **Uniform online RL** applies the same update strategy to every component, even though language grounding and low-level control are not the same job.

TEMPO's answer: keep general semantic representations fixed. Let the projection layer move slowly so latent actions stay stable. Let the action expert take the high-rate feedback from online interaction.

<figure>
  <img src="/images/heroes/tempo-vla-2.jpg" alt="TEMPO framework diagram with two RL loops" loading="lazy" />
  <figcaption>Framework: two dedicated RL optimization loops at different rates. Source: arXiv:2608.07314.</figcaption>
</figure>

## Results

On the **CALVIN** benchmark and two real-world manipulation tasks, the paper reports that TEMPO consistently outperforms both pretrained state-of-the-art VLA baselines and a uniform RL post-training baseline, while reaching and maintaining higher evaluation rewards on the real tasks.

The authors frame the contribution as training discipline rather than a new architecture brand: same model family, different update schedule and freeze policy.

<figure>
  <img src="/images/heroes/tempo-vla-3.jpg" alt="Real-world TEMPO task comparison rollouts" loading="lazy" />
  <figcaption>Real-world comparison rollouts from the paper. Source: arXiv:2608.07314.</figcaption>
</figure>

## A Human's Take

Here's what I care about: whether the backbone is still a generalist after a weekend of on-policy thrashing. Fast control updates and slow semantic updates is how a lot of industrial control stacks already think, just without the transformer marketing. If TEMPO's two-timescale split keeps holding when the action expert is wrong for longer than a lab session, post-training VLAs for a new cell gets less of a "hope we didn't break language" exercise.

## Sources

- [arXiv:2608.07314 — TEMPO: Semantic-Action Decoupled RL Post-Training for Vision-Language-Action Models](https://arxiv.org/abs/2608.07314)
- [arXiv HTML full text](https://arxiv.org/html/2608.07314v1)
