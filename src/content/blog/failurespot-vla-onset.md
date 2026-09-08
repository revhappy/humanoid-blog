---
title: "FailureSpot Marks the Instant a VLA Starts to Blow It"
description: "Wayne State’s FailureSpot times VLA failure onset on LIBERO-10. Weak labels from action chunks plus 15% dense annotation beat trajectory-wide alarms."
pubDate: 2026-09-08
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/failurespot.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A VLA can look fine for two seconds and then freeze, flail, or miss the can. Most failure detectors still stamp the **whole** unsuccessful rollout as bad, including the part that was still working. **FailureSpot**, arXiv:2609.04277 from Jie Ma, Zongxi Liu, and Yi Zhu at Wayne State University (**3 September 2026**), trains a timestamp-level detector instead.

<figure>
  <img src="/images/heroes/failurespot.jpg" alt="LIBERO robot sequence with FailureSpot vs SAFE failure-onset plots" loading="lazy" />
  <figcaption>SAFE alarms too early or too late; FailureSpot hugs the annotated onset. Source: arXiv:2609.04277.</figcaption>
</figure>

## Weak labels, then the hard 15%

Dense per-step labels are expensive. FailureSpot pretrains on unlabeled action chunks using three cheap signals: inconsistency between overlapping chunks, tiny (idle) magnitudes, and huge (flailing) magnitudes, plus exponential moving averages. Then it ranks trajectories by detector entropy and asks a human for timestamp labels on only the **top 15%**. Fine-tune. Alarms go through a conformal band fit on successful rollouts, same family of trick SAFE used.

They roll **50** trajectories on each of LIBERO-10’s **10** long-horizon tasks for three policies: **π0** (81.4% success, chunk H=50, execute K=5), **π0-FAST** (61.4%, H=10, K=5), and **OpenVLA** (53.8%, one action at a time). Three tasks are “seen”; seven are held out.

On unseen tasks, timestamp-level AUROC for FailureSpot-MLP hits **90.5** (π0), **85.8** (π0-FAST), and **63.0** (OpenVLA). Trajectory-level AUROC on π0 unseen is **81.8**, ahead of SAFE-MLP’s **67.7**. OpenVLA is the weak spot: no overlapping chunks, so the consistency signal has less to chew on.

<figure>
  <img src="/images/heroes/failurespot-3.jpg" alt="Three VLA failure modes: repeated grasps, swinging, and stagnation" loading="lazy" />
  <figcaption>π0 retries a dead grasp; π0-FAST swings the can; OpenVLA stalls. Source: arXiv:2609.04277.</figcaption>
</figure>

## What the failures look like

Inspecting failed rollouts, the authors name three modes: repeated useless grasps, gripper stagnation (magnitudes near zero), and large motion that does not advance the task. π0 tends to retry the grasp. π0-FAST swings. OpenVLA stalls. That split is why they kept both magnitude and consistency in the weak label.

<figure>
  <img src="/images/heroes/failurespot-2.jpg" alt="Failure score curves with conformal threshold and detected onset times" loading="lazy" />
  <figcaption>Score stays low in the normal phase, then crosses the conformal band near annotated onset. Source: arXiv:2609.04277.</figcaption>
</figure>

This is simulation on LIBERO, not a physical cell. The paper’s next sentence is using the onset time to interrupt and recover. That work is not in this PDF.

## A Human's Take

I have wanted a detector that says “it died at frame 173,” not “this episode failed.” Labeling 15% of the training set is a fair trade if the onset is actually early enough to stop a smash. OpenVLA still looking mushy is a reminder that chunked policies leak more signal than one-step transformers. Show me this on a real arm before I trust the conformal band.

## Sources

- [arXiv:2609.04277 — FailureSpot](https://arxiv.org/abs/2609.04277)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.04277)
