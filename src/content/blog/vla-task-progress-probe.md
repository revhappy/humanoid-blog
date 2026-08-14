---
title: "A Linear Probe Reads Task Progress Out of π0.5"
description: "Cornell shows leftover time in a trajectory is linearly decodable from PaliGemma activations, and useful as a stall detector."
pubDate: 2026-08-14
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/vla-task-progress.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Vision-language-action models are being treated like deployable workers. We still have almost no cheap way to ask one “how far along are you?” **Cornell** researchers probe **π0.5** and find that **task progress** — normalized time remaining in a successful trajectory — is linearly readable from the residual stream.

The paper landed on arXiv **August 13**. Lead authors Atiksh Bhardwaj and Edward Weiyi Duan share credit; Wei-Chiu Ma and Preston Culbertson are on the line.

<figure>
  <img src="/images/heroes/vla-task-progress.jpg" alt="Linear probe reading task progress from a VLA residual stream for OOD detection" loading="lazy" />
  <figcaption>A linear readout on backbone activations recovers remaining time and feeds three tests: OOD, language grounding, and steering. Source: Decoding Task Progress paper.</figcaption>
</figure>

## Readable, not steerable

They separate three claims people blur together:

- **Weak decodability**: a linear probe tracks progress on the training distribution
- **Strong decodability**: the same probe still tracks when you swap the language prompt
- **Steerability**: injecting the feature changes what the policy does

Progress clears the first two. It does **not** clear the third. You can read the clock. You cannot twist it.

The signal is already in the pretrained **PaliGemma** backbone, before any robot data (mean **R² = 0.700**, MAE **0.123** on the paper’s progress plot). After robot training it tightens: base **π0.5** hits **R² = 0.926**, fine-tuned **π0.5** **0.927**. A single probe trained on multi-prompt data generalizes to unseen tasks and moves under language counterfactuals. Fine-tuning still dulls language sensitivity, and the probe is used as a diagnostic for that fade.

<figure>
  <img src="/images/heroes/vla-task-progress-3.jpg" alt="Predicted versus true task progress curves on four rollouts" loading="lazy" />
  <figcaption>Predicted progress tracks remaining time on held-out rollouts. Source: Decoding Task Progress paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/vla-task-progress-2.jpg" alt="Qualitative out-of-distribution frames flagged by the progress probe" loading="lazy" />
  <figcaption>Progress probe on in-distribution vs OOD-injected rollouts. Source: Decoding Task Progress paper.</figcaption>
</figure>

## A stall detector you did not have to label

The practical use is a **label-free out-of-distribution detector**. If predicted progress stops moving, treat the rollout as stuck. The authors say that detector is competitive with supervised VLA monitors such as SAFE, including on held-out tasks and held-out perturbation modes.

They are honest about the definition: progress is normalized time on successful demonstrations, so it mixes “the clock ran out” with “the mug is in the sink.” That is a limit, not a footnote.

## A Human's Take

I want a cheap heartbeat on every deployed VLA, and leftover-time is a better heartbeat than “the softmax looks weird.” The no-steering result is the adult part of the paper. If you can read a feature and cannot write it, do not sell an activation-edit as a recovery button. Wire it as a monitor, abort the stall, and collect the failure.

## Sources

- [arXiv:2608.13474 — Decoding Task Progress from VLA Representations](https://arxiv.org/abs/2608.13474)
- [HTML paper](https://arxiv.org/html/2608.13474v1)
- [PDF](https://arxiv.org/pdf/2608.13474)
