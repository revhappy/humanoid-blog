---
title: "Show-Harness Lets a VLM Play the Robot Like a Game"
description: "NUS Show Lab turns MV_LEFT into a Franka step. Gemini-3.1 Pro hits 89% zero-shot; a 2B Qwen fine-tune is close behind."
pubDate: 2026-09-10
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/show-harness.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most VLAs swallow a foundation model and spit joint deltas. **Show-Harness**, from NUS Show Lab (arXiv September 9), does the opposite. The VLM never sees a continuous action vector. It picks a named unit: `MV_FWD`, `MV_LEFT`, `GRASP`, `ROTATE_CW`. An embodiment-specific interpreter turns that symbol into a bounded Cartesian step.

The same vocabulary drives a **7-DoF Franka Research 3** and a dual-arm **AgileX**. Change the robot, change the interpreter, keep the model.

<figure>
  <img src="/images/heroes/show-harness.jpg" alt="Show-Harness real-robot tasks including erasing, folding cloth, cutting cake, and cup search, with a speed-vs-success chart" loading="lazy" />
  <figcaption>Real tasks plus zero-shot vs fine-tuned speed bands. Source: Show-Harness paper, Figure 1.</figcaption>
</figure>

## Keyboard, GUI, or Gemini

**GUMI** is the collection trick. Every unit is a labeled key. A person at a keyboard and a GUI agent looking at the same screen produce the same `(observation, action)` pairs. No exoskeleton. The paper logs **164** real episodes (**7.8K** steps): **101** on Franka, **63** on single-arm AgileX.

Two modes share the interface:

- **ZS:** Gemini-3.1 Pro, no fine-tune
- **FT:** Qwen3.5-2B with rank-64 LoRA on about **3%** of parameters

On the project page’s headline splits:

| Split | ZS / FT | Best named baseline |
|-------|---------|---------------------|
| Cross-task (10 tasks) | **89% / 86%** | 57% |
| Cross-environment (4 shifts) | **100% / 88%** | — |
| Cross-embodiment (Franka + AgileX) | **93% / 87%** | 52% |

ZS clears every environment shift at **20/20**, including teddy and chess held out of fine-tuning. FT trained only in sim still transfers to the real Franka at **13/20**. Both trainable VLA baselines in that cell score **0/20**.

A 1 cm interpreter step, no retraining, lifts ZS **60% → 80%** and FT **40% → 65%** on finer work. π0.5 needs a full extra fine-grained budget to reach 60% in that comparison. Ablating the action names is brutal: arbitrary symbols with no convention collapse to **5%** success, 19 of 20 timeouts.

<figure>
  <img src="/images/heroes/show-harness-2.jpg" alt="Franka Research 3 with RealSense cameras over a marked workspace with a block and a bin" loading="lazy" />
  <figcaption>Franka Research 3 eval rig. Source: Show-Harness paper, Figure 5.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/show-harness-3.jpg" alt="Show-Harness generalization strips: novel chess piece, background, lighting, clutter, spelling SHOW, and bimanual drawer" loading="lazy" />
  <figcaption>Held-out objects, lighting, clutter, and dual-arm drawer. Source: Show-Harness paper, Figure 11.</figcaption>
</figure>

Default plugins earn their keep. Drop multi-view guidance and you lose **38** points. Subtask planning is **36**. Proprioception **28**. Empty-grasp recovery **24**. Frontier VLMs follow instructions (≥98% valid units) and plan (≥97%). They miss on centimetres.

## A Human's Take

I grinned at GUMI. If a VLM can play a robot the way it plays a browser, the data problem gets less mystical. 89% zero-shot on pick-and-place is not a factory shift, and the paper says as much: grippers, not five-finger hands. Still, an interface that lets Gemini miss by a centimetre *and* lets a 2B model catch up after a few GPU-hours is the kind of boring infrastructure I will actually reuse.

## Sources

- [arXiv:2609.10522 — Show-Harness](https://arxiv.org/abs/2609.10522)
- [Show-Harness project page](https://showlab.github.io/Show-Harness)
- [Show-Harness paper HTML](https://arxiv.org/html/2609.10522v1)
- [Show-Harness GitHub](https://github.com/showlab/Show-Harness)
