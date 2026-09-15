---
title: "PhysBrain 1.5 Turns a VLM Into a Physical Foundation Model"
description: "DeepCybo’s open 8B PhysBrain 1.5 scores 72.5 across 28 embodied benchmarks and predicts RGB, depth, and robot masks."
pubDate: 2026-09-15
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/physbrain-15.jpg"
readTime: "4 min read"
featured: false
draft: false
---

The **DeepCybo** team posted **PhysBrain 1.5** on September 14 ([arXiv:2609.14973](https://arxiv.org/abs/2609.14973)): an 8-billion-parameter model that treats language, end-effector motion, and future visual states as one token stream. It is built on **Qwen3-VL**. Weights are on Hugging Face. Code and an eval kit are on GitHub.

The claim is a closed loop: observe, reason, act, predict how the scene changes, then observe again. No extra task heads. Everything is next-token prediction.

<figure>
  <img src="/images/heroes/physbrain-15.jpg" alt="PhysBrain 1.5 architecture: context encoding, unified modeling, then language, action, and visual outputs" loading="lazy" />
  <figcaption>One backbone, three outputs. Source: PhysBrain 1.5 project page.</figcaption>
</figure>

## 72.5 on 28 benches

On the project page, PhysBrain 1.5-8B scores **72.5** overall across **28** embodied spatial and planning benchmarks. That is first among the open models they re-evaluated, and close to the proprietary numbers they list: **GPT-6-Astra at 73.3** and **Gemini 3.6 Flash at 73.0**. They report first place on **14** of those benches and second on **10**, among open-source models.

Pre-training uses only human interaction video, structured into task-centered episodes: egocentric, paired ego–exocentric, and panoramic. Fine-tuning mixes human demos, real-robot trajectories, and simulation.

Actions are **ActionPiece** tokens in a shared codebook, so one checkpoint is supposed to drive different arm setups. Future-state prediction emits aligned **RGB, depth, and robot masks**.

<figure>
  <img src="/images/heroes/physbrain-15-3.jpg" alt="Grid of robot-arm tasks with predicted end-effector trajectories overlaid" loading="lazy" />
  <figcaption>Action-trajectory examples. Source: PhysBrain 1.5 project page.</figcaption>
</figure>

A 2B checkpoint is also up. The eval kit notes that the 8B model was trained with FlashAttention 4, and that switching to FA2 at eval time can nudge scores a little.

<figure>
  <img src="/images/heroes/physbrain-15-5.jpg" alt="Four tasks showing input RGB versus predicted RGB, depth, and robot masks" loading="lazy" />
  <figcaption>Future-state rollouts: RGB, depth, robot mask. Source: PhysBrain 1.5 project page.</figcaption>
</figure>

## A Human's Take

Open weights plus a 28-bench table is the right way to ship a “physical foundation model.” 72.5 versus 73.3 on Astra is a rounding error until someone runs the same kit on hardware that was not in the fine-tune mix. I care whether ActionPiece stays coherent when the arm, the camera, and the table all change at once. The future-mask channel is the part I would actually steal first: if the model can sketch where the robot will be, you have a cheap way to catch a bad plan before it moves.

## Sources

- [arXiv:2609.14973 — PhysBrain 1.5](https://arxiv.org/abs/2609.14973)
- [PhysBrain 1.5 project page](https://deepcybo-physai.github.io/PhysBrain-1.5)
- [GitHub — PhysBrain-1.5](https://github.com/DeepCybo-PhysAI/PhysBrain-1.5)
- [Hugging Face — PhysBrain1.5-8B](https://huggingface.co/DeepCybo/PhysBrain1.5-8B)
