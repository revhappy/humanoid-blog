---
title: "FreqFM Conditions VLA Flow Matching on Action Frequency"
description: "AGIBOT and Xi’an Jiaotong’s DCT-conditioned expert gains 9.3 points on LIBERO-Plus and lifts six A2 humanoid tasks."
pubDate: 2026-09-12
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/freqfm-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Robot action chunks are not white noise. On **AGIBOT**’s real-robot logs, more than **99.9%** of the energy in a **30**-step horizon sits in the lowest three DCT bins, with more than **seven** orders of magnitude between the loudest and quietest frequencies. Standard flow-matching VLAs still generate those chunks in time.

**FreqFM**, from **Haochen Niu**, **Wang Chuang**, and colleagues at **AGIBOT** and **Xi’an Jiaotong University**, treats frequency as an explicit conditioning axis for the whole flow pipeline. The paper, posted **9 September**, plugs into existing **π0** and **π0.5** action experts without changing the VLA backbone.

<figure>
  <img src="/images/heroes/freqfm-vla.jpg" alt="AgiBot Expedition A2 humanoid plus six tabletop tasks including stacking, filing, and stamping" loading="lazy" />
  <figcaption>Six real tasks on an AgiBot Expedition A2. Source: Niu et al., arXiv:2609.10405.</figcaption>
</figure>

## Three stages, one spectrum

A discrete cosine transform along the action horizon exposes per-frequency power. FreqFM then:

- **Matches the source.** The Gaussian start of the flow is rescaled so each frequency has the same second-moment spectrum as the training actions, instead of a flat white prior.
- **Reweights the loss.** Coefficient-wise errors are PSD-normalized, then balanced with learned per-frequency scales so high-energy low frequencies do not own the gradient.
- **Budgets classifier-free guidance.** Extra CFG residuals are clipped in units of each frequency’s own transport scale, which is tightest on the quiet high-frequency bins that make jerky motion.

The authors freeze those statistics from the training set. They do not condition the spectrum on the current image or instruction.

## Benchmarks

Each FreqFM model is trained **20k** steps against a paired temporal flow-matching baseline with the same architecture, data, optimizer, and budget.

On **LIBERO**, both sides are near saturation; FreqFM’s gains are **+0.7** and **+1.2** points depending on backbone. The larger jump is **LIBERO-Plus**, a perturbation suite: **+5.5** on π0 and **+9.3** on π0.5. Camera, robot, and noise — the three perturbations where the temporal baseline is weakest — show the biggest lifts. Light and background, already above **87** points for the baseline, are the only two where π0 regresses.

**VLA-Arena** totals improve **+2.6** and **+4.2** points. The Extrapolation category regresses on both backbones, which the paper reads as the cost of a fixed training-set spectrum.

Ablations on LIBERO-Plus: a time-domain copy of the three stages helps much less than FreqFM. Removing the matched source costs **4.2** points. The transport budget changes success only **1.9** points, but it cuts mean absolute jerk of executed arm trajectories by **56%** on LIBERO (**0.442** to **0.193**) at a comparable success rate.

## Six tasks on an A2

The real robot is an **AgiBot Expedition A2**. Policies see one chest camera and two wrist cameras. Tasks: cup stacking, kitchen tidy, table cleanup, folder filing, toy storage, and stamp-and-handover. **30** trials each, **24** subtask stages in total.

Averaged across the six tasks, π0.5 sits at **57.8%** success / **70.6%** subtask success. FreqFM reaches **67.8%** / **79.0%**. Toy storage is already near ceiling and does not move. The gains concentrate on fine alignment: cup stacking **+23.3**, folder filing **+13.4**, stamp-and-handover **+13.3** points.

<figure>
  <img src="/images/heroes/freqfm-vla-3.jpg" alt="FreqFM pipeline diagram from DCT spectrum matching through budgeted classifier-free guidance" loading="lazy" />
  <figcaption>Spectrum-matched source, PSD-normalized loss, and transport-budgeted CFG. Source: arXiv:2609.10405, Figure 2.</figcaption>
</figure>

Limits: the source and the guidance budget are global, not observation-conditioned. Smooth action dimensions have to be designated per embodiment.

## A Human's Take

I like that they measured the spectrum on the robot they actually run, then went back to the A2 for cup stacks and a stamp. A 9.3-point LIBERO-Plus bump is the headline; the jerk cut is the part I would watch in a factory. If the next version estimates frequency stats from the current scene instead of the training corpus, the Extrapolation miss on VLA-Arena is the obvious place it should help.

## Sources

- [arXiv:2609.10405 — Frequency-Conditioned Flow Matching for Vision-Language-Action Models](https://arxiv.org/abs/2609.10405)
- [arXiv HTML — FreqFM paper with figures](https://arxiv.org/html/2609.10405)
