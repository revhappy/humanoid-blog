---
title: "Ψ₀ (Psi-Zero): Open Foundation Model for Humanoid Loco-Manipulation"
description: "USC PSI Lab, NVIDIA, and WorldEngine open-source Ψ₀, a VLA for whole-body humanoid tasks trained on ~800h human video and ~30h robot data."
pubDate: 2026-08-01
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/psi0-tasks.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Ψ₀ (Psi-Zero)** is an open vision-language-action foundation model aimed at the hard middle of humanoid work: **loco-manipulation** — walking while carrying, handing off, pouring, wiping, and placing. The paper (arXiv:2603.12263) is from **USC’s Physical Superintelligence Lab** with co-authors at **NVIDIA** and **WorldEngine**, accepted to **RSS 2026**.

## The data bet

Most VLA pipelines dump human video and robot data into one co-training stew. Ψ₀ argues that is suboptimal: humans and humanoids do not share kinematics. The team stages learning instead:

1. **Pre-train a VLM backbone** on high-quality egocentric human video (**EgoDex**, about **829 hours** on the project page; the abstract rounds to **~800 hours**)
2. **Post-train a flow-based action expert** on real humanoid trajectories (**Humanoid Everyday**, about **31 hours** / **260 tasks** in **7** categories)
3. **Fine-tune** on a small amount of in-domain teleop for target tasks

Architecture is three systems: **Qwen3-VL-2B-Instruct** as the vision-language backbone (~2.5B-class stack with a ~**500M** MM-DiT action expert), plus an RL lower-body tracker (**AMO**) for the **8-DoF** lower-body chunk.

<figure>
  <img src="/images/heroes/psi0-architecture.jpg" alt="Psi-Zero three-system architecture diagram" loading="lazy" />
  <figcaption>Ψ₀ triple-system layout: VLM backbone, flow-based action expert, RL lower-body tracker. Source: PSI Lab project page.</figcaption>
</figure>

## Real-robot scoreboard (from the project page)

On eight long-horizon tasks, Ψ₀ beats listed baselines including **π0.5** and **GR00T N1.6**. Examples of success rates (out of 10 trials):

- Pick bottle, turn, pour into cup: **8/10** (GR00T N1.6: 4/10)
- Put toy in basket, hand to person: **9/10**
- Hold lunch bag, squat, place on table: **9/10**
- Pull tray and throw chip can: **5/10** (still ahead of most baselines at 0–1/10)

The abstract’s headline claim: best overall performance using about **800 hours** of human video and **30 hours** of robot data, outperforming baselines trained on **more than 10×** as much data by **over 40%** overall success rate across tasks.

<figure>
  <img src="/images/heroes/psi0-teleop.jpg" alt="Whole-body teleoperation setup for Psi-Zero data collection" loading="lazy" />
  <figcaption>Single-operator whole-body teleop used to collect in-domain fine-tune data. Source: PSI Lab.</figcaption>
</figure>

## What they are opening

The team says the full ecosystem is going open: data pipeline, foundation model weights, and a real-time action inference engine (with **training-time real-time chunking** to hide ~**160 ms** forward passes). Code is on GitHub under the Physical Superintelligence Lab org; models and data point to Hugging Face links on the project site.

## A Human's Take

I’m smiling at the data diet. Less “scrape the internet,” more “quality egocentric manipulation then a thin slice of real humanoid hours.” That is a friendlier recipe for labs that do not own a warehouse of robot teleoperators. The remaining question is the usual one: do the open weights reproduce the table outside the authors’ room layout?

## Sources

- [Ψ₀ project page — PSI Lab](https://psi-lab.ai/Psi0/)
- [arXiv:2603.12263 — Ψ₀ paper](https://arxiv.org/abs/2603.12263)
- [GitHub — physical-superintelligence-lab/Psi0](https://github.com/physical-superintelligence-lab/Psi0)
