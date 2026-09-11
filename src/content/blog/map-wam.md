---
title: "MaP-WAM Remembers as a Plan, Not a Growing Video"
description: "HIT's memory-as-plans stack hits 83.3% on RMBench and 78% on a Franka that must recall covered buttons and numbers."
pubDate: 2026-09-11
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/map-wam-3.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Long-horizon robot memory usually means one of two messes: a language summary that forgets where the blue block was, or a video window that gets slower every second.

**MaP-WAM** (Memory as Plans, World-Action Modeling) splits the job. Planning sees the episodic history. Execution follows a compact plan with a **fixed** context length. The paper (arXiv:2609.11561, submitted **September 10, 2026**) reports **83.3%** on **RMBench** and **78.0%** on two real Franka tasks.

<figure>
  <img src="/images/heroes/map-wam-3.jpg" alt="Franka Find Button task with a BLUE whiteboard and covered cups, and Press Buttons with numbers 3 and 4" loading="lazy" />
  <figcaption>Find Button 88% and Press Buttons 68% over 50 trials each. Source: MaP-WAM paper, Figure 3.</figcaption>
</figure>

Authors are at **Harbin Institute of Technology**, **Nanyang Technological University**, and **Shandong University**.

## Plan, then act on a timer

Completed segments are stored as a language instruction plus **eight** sparsely sampled frames. A fine-tuned **Qwen3.5-4B** writes the next segment-level language plan. A causal world model, initialized from **WAN-2.2-5B**, draws a visual plan. A **World-Action-Progress** executor, a Mixture-of-Transformers on WAN-2.2, jointly predicts action chunks and how far through the segment it thinks it is.

When predicted progress crosses **τ=0.95**, it stops, writes real observations back into memory, and replans. Plan-observation alignment matches the live camera to nearby plan frames so progress does not drift on long sequences.

The executor caches a fixed plan prefix. Per-chunk latency stays about **827 ms** as history grows. A full-context variant OOMs past **1,700** frames.

<figure>
  <img src="/images/heroes/map-wam.jpg" alt="Diagram comparing language memory, growing-window memory, and MaP-WAM fixed-context execution" loading="lazy" />
  <figcaption>Language summaries lose pixels; growing windows get expensive. Source: MaP-WAM project page.</figcaption>
</figure>

## Memory tasks, not pick-and-place

RMBench needs information that is gone from the current frame. Training uses **50** official demos per task and **100** eval rollouts. MaP-WAM's **83.3%** average beats LingBot-VA at **77.1%**, Mem-0 at **42.0%**, and π0.5 at **10.4%**. **Swap T** and **Press Button** both hit **96%**. **Observe and Pick Up** is still hard: **19%**, up from **9%**.

Real robot: **Franka Research 3**, third-person and wrist **RealSense D435i**, **50** training trajectories per task, **50** test trials.

- **Find Button**: see button colors, covers go on, a whiteboard shows a color, open the matching cover. **88%**. π0.5: **26%**. FastWAM: **20%**.
- **Press Buttons**: read two numbers, press left and middle that many times, then confirm. **68%**. Both baselines: **0%**.

Average of those two is the paper's **78.0%**. Ablations: drop visual memory and the world model invents the wrong object. Drop progress conditioning and Press Button collapses. Drop calibration and long ranking tasks drift.

The method still assumes segment labels. Unsegmented demos are future work.

## A Human's Take

Remembering a covered color is the kind of dumb task that wrecks Markov policies and looks trivial to a person. If the executor can stay at 827 ms while the planner holds the history, that is a better split than stuffing 1,700 frames into the actor. I want to see this on a walking humanoid that has to recall which door it already opened.

## Sources

- [MaP-WAM project page](https://sizhezhao.github.io/projects/MaP-WAM/)
- [arXiv:2609.11561](https://arxiv.org/abs/2609.11561)
- [Paper HTML](https://arxiv.org/html/2609.11561)
