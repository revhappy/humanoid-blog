---
title: "ReflexVLA Chases Moving Cubes Instead of Frozen Scenes"
description: "SJTU’s 1B ReflexVLA hits 50.4% on a new six-task latency benchmark and 16/20 on a real conveyor."
pubDate: 2026-08-17
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/reflexvla-reaction.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most VLA scores come from worlds that politely freeze while the model thinks. **Yuxuan Chen, Wanruo Zhang, and Xiao Li** at Shanghai Jiao Tong University built **ReflexBench** so the belt keeps moving.

The benchmark has six tasks: conveyor pick-and-place, ball catching, whack-a-mole, rolling-ball intercept, ball throw, and a rotating peg. The sim does not pause for inference. You can run **synchronous** or **asynchronous** control and inject a chosen delay, including one scaled from real wall-clock latency by the simulator’s real-time factor.

<figure>
  <img src="/images/heroes/reflexvla-reaction.jpg" alt="ReflexBench six dynamic tasks and ReflexVLA overview" loading="lazy" />
  <figcaption>ReflexBench’s six reaction-critical tasks. Source: arXiv:2608.14379 / reflexvla.github.io.</figcaption>
</figure>

## A 1B model that looks ahead

**ReflexVLA** sits on **VLA-Adapter**. Vision is DINOv2 + SigLIP at **224×224**. Language is **Qwen2.5-0.5B**. The whole stack is **1B** parameters.

Three add-ons:

- **Latent future prediction** against a frozen **DINOv3** feature, one token per step of the action chunk
- **Multi-frame temporal fusion** inside the vision backbone so the language model still sees one frame’s worth of tokens
- **Batched visual encode + CUDA Graph replay** so the GPU is not relaunching kernels every cycle

They train one policy on **200** demos per task, chunk size **8**, action horizon **2**, async inference, on an RTX 5880 Ada. Each score is **150** eval episodes × three seeds.

Average ReflexBench success:

| Model | Params | Avg. |
| --- | --- | --- |
| VLA-Adapter (backbone) | 1B | 30.3% |
| OpenVLA-OFT | 7B | 36.0% |
| π0.5 | 4B | 36.9% |
| PUMA | 4B | 50.2% |
| **ReflexVLA** | **1B** | **50.4%** |

Conveyor is the headline gap: **73.8%** versus **36.8%** for the backbone. Ball catching is still ugly for everyone (**7.3%**). On static **LIBERO** they hold **97.2%**, next to VLA-Adapter’s **97.3%**.

Ablations on conveyor: frozen future targets jump success from **36.8%** to **62.8%**; middle-layer temporal fusion reaches **71.7%**; the CUDA-Graph path finishes at **73.8%** and cuts latency from **125.1 ms** to **65.0 ms**.

<figure>
  <img src="/images/heroes/reflexvla-reaction-2.jpg" alt="ReflexVLA architecture with future prediction and temporal fusion" loading="lazy" />
  <figcaption>ReflexVLA architecture. Source: arXiv:2608.14379.</figcaption>
</figure>

## Real Piper arm

On an **AgileX Piper** they compare **20** trials each of conveyor pick, button mash, and ball catch:

- Conveyor: **16/20** (PUMA 13/20, SmolVLA 2/20)
- Buttons in 30 s: **22.5** (PUMA 20.8, SmolVLA 0.9)
- Balls of 10: **6.7** (PUMA 5.4, SmolVLA 3.8)

The authors flag two limits: the extras are fine-tunes, not pretraining, and they did not try fancier async schemes such as RTC.

<figure>
  <img src="/images/heroes/reflexvla-reaction-3.jpg" alt="Real-world ReflexVLA rollouts on conveyor, buttons, and ball catch" loading="lazy" />
  <figcaption>Real Piper rollouts. Source: arXiv:2608.14379.</figcaption>
</figure>

## A Human's Take

I have wanted a VLA scoreboard that punishes thinking time. This is that board. Matching a 4B dynamic specialist at 1B, and doing it with a 65 ms graph replay, is the part I will steal. Catching is still a coin flip. If your robot’s job is a moving belt, this paper is more useful than another frozen-kitchen leaderboard.

## Sources

- [arXiv:2608.14379 — Reflex abstract](https://arxiv.org/abs/2608.14379)
- [Reflex project page](https://reflexvla.github.io/)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.14379v1)
---
