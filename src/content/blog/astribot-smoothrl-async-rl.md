---
title: "Astribot’s SmoothRL Fine-Tunes a VLA While the Robot Is Still Moving"
description: "SmoothRL only backprops through the action chunk the Astribot S1 actually executed, lifting throw success from 39% to 94%."
pubDate: 2026-09-04
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/smoothrl-teaser.png"
readTime: "4 min read"
featured: false
draft: false
---

Big robot policies spit out a chunk of future actions, then take tens to hundreds of milliseconds to think about the next one. If you wait, a throw dies mid-swing. If you keep moving, the chunk you trained on is not the chunk the arm ran. **Astribot**’s **SmoothRL** paper, posted **30 August**, is the attempt to do online RL inside that overlap.

The teaser figure is the part I care about. On a real throwing rollout, RMS acceleration and jerk at the right end-effector drop **52%** and **47%** versus the base policy.

<figure>
  <img src="/images/heroes/smoothrl-teaser.png" alt="Astribot S1 tossing objects into a hoop, cup, hand, teacup, and vase, with velocity, acceleration, and jerk plots" loading="lazy" />
  <figcaption>Throwing stills plus the smoothness plots. Source: Astribot, arXiv:2608.29768.</figcaption>
</figure>

## Only the frames that hit the motors

Each generated chunk is split by frame index:

- **Committed**: already issued by the last inference cycle
- **Execution**: the new frames the robot actually runs
- **Discarded**: superseded before they ever leave the buffer

Value gradients go only through the execution region. The critic still sees the committed prefix, because the in-flight chunk is part of the state. Training rollouts use the same asynchronous loop as deployment, so the replay buffer is not a sync-trained lie.

The implementation freezes a task-tuned **π0.5** and hangs a TD3-style residual actor on an RL token, following the RLT skeleton. NetEase Intelligent, writing **4 September**, says the S1 runs actions at **30 Hz** and requests inference at **5 Hz** (a new chunk every **200 ms**). The base policy predicts **32** frames; under a fixed latency budget, committed plus execution cover **12** frames, **6** of them in the execution region.

<figure>
  <img src="/images/heroes/smoothrl-tasks.png" alt="Three SmoothRL tasks: tossing a toy into a bin, capping a pen, and cutting open a cardboard box" loading="lazy" />
  <figcaption>The three S1 tasks in the paper. Source: Astribot, arXiv:2608.29768.</figcaption>
</figure>

## Three tasks, three systematic bugs

NetEase, citing the paper’s hardware results on the cable-driven **Astribot S1**:

- **Dynamic throwing**: **39% → 94%** over **250** rollout episodes
- **Pen capping**: **8% → 83%**, with relative pose error held around **5 mm**
- **Parcel opening**: **30% → 90%**, sliding a **1 mm** blade into a **2–3 mm** lid seam

The write-up says the failures were systematic: release speed on the throw, a left bias on the blade, capping motions that looked too alike. Online RL was there to push those biases back using what the robot actually did.

A failure grid in the paper puts the residual policy next to the frozen VLA: the VLA misses the bin, leaves the cap cocked, and plants the blade off the seam. The residual hits the bin, seats the cap, and tracks the tape line.

<figure>
  <img src="/images/heroes/smoothrl-failures.png" alt="Side-by-side RL versus VLA failures on tossing, pen capping, and box opening" loading="lazy" />
  <figcaption>Same three tasks, residual versus base VLA. Source: Astribot, arXiv:2608.29768.</figcaption>
</figure>

Human interventions land in the same raw action space, so a demonstrated chunk is a behavior-cloning target and a critic transition without latent inversion. Absolute VR takeover and residual stick offsets are both supported.

The company page for the report is [astribot.com/research/SmoothRL](https://www.astribot.com/research/SmoothRL).

## A Human's Take

If your VLA is slow enough to need async chunks, training it as if the whole chunk ran is a bookkeeping error. SmoothRL’s move is petty in a good way: mark the frames, throw away the rest of the gradient. I want to see the **250** throw episodes without a human hovering on the switch. Until then, the 52% jerk cut is the number I will repeat, because you can hear that in a video.

## Sources

- [arXiv — SmoothRL: Online Reinforcement Learning During Asynchronous Execution](https://arxiv.org/abs/2608.29768)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2608.29768v1)
- [Astribot — SmoothRL project page](https://www.astribot.com/research/SmoothRL)
- [NetEase Intelligent — SmoothRL hardware results (4 Sep 2026)](https://www.163.com/tech/article/L5VOFTLG00098IEO.html)
