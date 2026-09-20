---
title: "TraceFlow Turns Failed Packing Runs Into the Next Grasp"
description: "HKU’s frozen-VLA guide uses one success/fail bit per rollout. Ordered fruit packing goes from 21/50 to 47/50 after one stack, with no weight update."
pubDate: 2026-09-20
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/traceflow.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A frozen vision-language-action policy cannot change today’s action chunk because yesterday’s grasp failed. **TraceFlow** gives it that input with nothing but a terminal success/fail bit.

Jiaxuan Zhang, Ruizhe Liu, Yu Zhang, and Yanchao Yang at the University of Hong Kong posted arXiv **2609.20646** on **17 September 2026**. The hardware is an **ARX AC-One** dual-arm cell. The frozen backbone is **π0.5**.

<figure>
  <img src="/images/heroes/traceflow.jpg" alt="Four-panel real-robot suite: relocation, hammer, ordered fruit packing, and drawer sequence" loading="lazy" />
  <figcaption>Real tasks T1–T3, including ordered three-fruit packing (c). Source: TraceFlow paper, Fig. 2.</figcaption>
</figure>

## A bank of traces, not a new network

TraceBank stores time-ordered state–action records plus that one bit. A frozen retrieval head matches the current VLM state. A similarity gate pulls the top successful and failed windows. A bounded field then nudges early flow-matching steps toward success actions and away from failure actions, then drops to zero so the base expert finishes contact.

No critic, verifier, or dynamics model. No weight update. After a round, new rollouts can enter the bank.

## Where it moved the number

On ordered three-fruit packing (T2), the frozen baseline completed **21 of 50** trials in order, with **20** wrong-sequence episodes. TraceFlow hit **39 of 50** with **2** wrong-sequence runs. After one stacking round of the robot’s own traces, still with frozen weights, the score was **47 of 50** and **0** wrong-sequence.

T1 (tape then hammer) went from **8/50** to **16/50**. T3 (six-stage drawers) is **1/10** complete versus **0/10**, on ten trials; the paper calls that descriptive.

Simulation is picky. With per-suite settings, RoboMemArena Sequence rises from **78.92%** to **91.50%** task success. Transferring goes from **54.41%** to **62.00%** at stacking round 2. The 26-task aggregate is flat (**34.92** to **34.99**). Counting and Occlusion drop by **1.12** and **1.42** points. LIBERO-Plus (Long) is **+1.27** points (*p* = 0.0733). Every stacking branch in the ten-round study peaked before round ten.

<figure>
  <img src="/images/heroes/traceflow-2.jpg" alt="TraceFlow diagram: frozen VLM, TraceBank of success and failure traces, bounded guidance, robot packing fruit" loading="lazy" />
  <figcaption>Method: frozen VLM and expert, growing TraceBank. Source: TraceFlow paper, Fig. 1.</figcaption>
</figure>

The authors do not run a head-to-head against other test-time guides. The only baseline is the same checkpoint with the field off.

## A Human's Take

21 to 47 on a packing order, with the weights locked, is the kind of result I will actually argue about. The same method hurting Counting and Occlusion is the other half of the story. If your failure is “wrong drawer, same motion,” a fail bit helps. If the policy never saw the event, the bank cannot invent it.

## Sources

- [arXiv:2609.20646 — TraceFlow: Guiding Frozen Flow-Matching Robot Policies with Success and Failure Traces](https://arxiv.org/abs/2609.20646)
- [arXiv HTML — full paper with Table II hardware results](https://arxiv.org/html/2609.20646v1)
