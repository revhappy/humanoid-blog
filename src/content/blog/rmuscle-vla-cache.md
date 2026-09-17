---
title: "rMuscle Caches VLA Muscle Memory for Faster Factory Inference"
description: "Shanghai Jiao Tong’s rMuscle reuses visual tokens and neuron masks across repeated robot jobs, up to 1.42× faster on Jetson Thor."
pubDate: 2026-09-17
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/rmuscle-vla-cache.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Vision-language-action models spend a lot of a factory cycle staring at the same bench. **Kaijun Zhou**, **Zhiyang Li**, **Le Chen**, and **Jinyu Gu** at Shanghai Jiao Tong University’s Institute of Parallel and Distributed Systems posted **rMuscle**, a cache that treats that repetition like muscle memory.

The paper, dated 17 September, reports **1.29–1.42×** end-to-end speedup on an RTX 4090 and a Jetson Thor versus a strong FlashRT baseline, with success rates matching dense (“vanilla”) execution on simulation suites and two physical cells.

<figure>
  <img src="/images/heroes/rmuscle-vla-cache.jpg" alt="Three overhead views of a dual-arm ALOHA picking green and red bottles into a clear bin" loading="lazy" />
  <figcaption>ALOHA cooperative bottle pick-and-place used in the physical eval. Source: Zhou et al., arXiv:2609.19104, Figure 13.</figcaption>
</figure>

## Two caches for two bottlenecks

On π0.5, FlashRT already cuts official PyTorch latency from **194.3 ms** to **46.0 ms**. The leftover split is ugly: VLM prefill MLPs are compute-heavy (arithmetic intensity 891 FLOP/B on a 4090), while action-denoising MLPs are memory-bound (34 FLOP/B). One trick does not fix both.

**Context Cache** ranks visual tokens by how much their FFN inputs drifted from a retrieved reference episode, recomputes the top fraction **ρp** (0.4 in the RoboTwin setting), and copies the rest. Selecting 40% of tokens captured about **80%** of FFN output change in their π0.5 probe.

**Action Cache** keeps a mask of “important” neurons from a similar past denoising step. Non-anchor steps load and update only those weights, then add the delta onto a dense anchor from the *current* call. Retaining **ρn = 0.5** of neurons captured **84.4%** of a contribution score. Same-task important-neuron overlap averaged **86%**; different-task overlap **71%**.

A sliding GPU window holds about **20** reconstructed entries (4 candidate episodes × current plus 4 lookahead positions). Reconstruction of expanded VLM states runs during the robot’s physical move, not on the inference critical path. If visual cosine similarity drops below **0.8**, the system falls back to dense execution for the rest of the episode.

<figure>
  <img src="/images/heroes/rmuscle-vla-cache-2.jpg" alt="Blue industrial arm packing boards into a cardboard box on a green conveyor" loading="lazy" />
  <figcaption>DOBOT/Franka furniture-board packing cell, 8 m/min conveyor. Source: arXiv:2609.19104, Figure 14.</figcaption>
</figure>

## What actually got faster

On an RTX 4090, rMuscle hits **28.1 / 51.0 / 35.7 Hz** for π0.5, GR00T N1.6, and X-VLA, or **1.29× / 1.20× / 1.50×** over the fastest exact engine. On Jetson Thor the rates are **13.4 / 17.5 / 19.7 Hz**, speedups **1.42× / 1.23× / 1.43×**. Scaling the Gemma pair from (2B, 0.3B) to (7B, 7B) raised the 4090 speedup from about **1.3×** to **1.6×**, and Thor from **1.4×** to **1.9×**.

Policy quality: LIBERO averages match vanilla. RoboTwin’s 50-task mean stays at vanilla’s **35.2%**, beating DP-Cache and NIRVANA. Two tasks (Handover Block, Place Empty Cup) trail vanilla by 2–3 points near the 0.8 similarity fence. Physical π0.5: **76%** on ALOHA bottle packing (50 trials) and **84%** on conveyor furniture packing, matching vanilla and beating the skip-step caches.

## A Human's Take

This is the unglamorous way you make a VLA keep up with a 30 Hz arm: remember the last time this station looked like this, recompute the patches that moved, and stop reloading every neuron. 1.4× on Thor is not a new policy. It is how you run the policy you already paid for without dropping chunks. Keep the 0.8 fallback. The two RoboTwin misses are the reminder that a cache is only as honest as its reference library.

## Sources

- [Zhou et al. — rMuscle (arXiv:2609.19104)](https://arxiv.org/abs/2609.19104)
- [Paper HTML with figures](https://arxiv.org/html/2609.19104)
