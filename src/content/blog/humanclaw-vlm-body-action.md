---
title: "HumanCLAW Asks: Can VLMs Act Through a Body?"
description: "Meta, NTU, and UW introduce HumanCLAW-Bench: 1,218 egocentric find-navigate-interact episodes. Best VLM sits on the target in only 16.8% of trials."
pubDate: 2026-08-04
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/humanclaw.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Vision-language models can describe a room. **HumanCLAW** asks whether they can *act through a body* inside a closed loop — decide what the body should do next, every half-second, after seeing the consequences of the last choice.

Authors from Meta, Nanyang Technological University, University of Washington, Brown, and Northwestern released the framework and benchmark as [arXiv:2607.27180](https://arxiv.org/abs/2607.27180) (submitted July 29, 2026), with a project site at [human-claw.github.io](https://human-claw.github.io/).

## Decoupling decision from motor failure

When a robot fails a task, it is hard to tell whether the VLM chose poorly or the motor controller fell over. HumanCLAW factors motor tracking and balance failures out of the score. At each **0.5 s** step, a frozen off-the-shelf VLM proposes an atomic skill; a verifier can reject unsafe proposals; a skill-conditioned motion generator produces a full-body motion chunk; a half-physics simulator applies gravity, collisions, and object reactions and feeds the next egocentric view back into the VLM.

<figure>
  <img src="/images/heroes/humanclaw.jpg" alt="HumanCLAW pipeline: VLM skill harness, motion generation, half-physics simulator" loading="lazy" />
  <figcaption>HumanCLAW closed-loop pipeline. Source: HumanCLAW project page.</figcaption>
</figure>

## The benchmark

**HumanCLAW-Bench** runs a progressive **find → navigate → interact** task: find a target object, walk within **20 cm**, then sit with pelvis contact. Scenes come from **HSSD**: **41** validation houses, **1,218** episodes, six target categories (chair, bed, couch, potted plant, toilet, TV). Success metrics include FindSR, NavSR, and InteractSR, plus collision and motion-jerk scores.

## What the leaderboard says

Nine state-of-the-art VLMs were tested frozen. None solves the suite. Headline numbers from the project page:

- Best high-level success: **Gemini-3.1 at 64.9%**
- Best full sit success among findings: only **16.8%** of episodes (and four of nine models sit in at most **0.2%**)
- Of episodes where the agent finds the target, **68%** still fail navigation — mostly egocentric self-localization errors
- Collisions concentrate on unwatched body parts: legs/feet **28–45%** of steps, arms/hands **20–35%**, head under **7%**

Authors summarize the shared deficit as missing **embodied self-awareness**: models reason about the scene but lose track of where their own body is, whether they arrived, or whether they hit an obstacle.

<figure>
  <img src="/images/heroes/humanclaw-2.jpg" alt="HumanCLAW VLM skill harness flow diagram" loading="lazy" />
  <figcaption>VLM skill harness: perceive, mid-level plan, low-level skill proposal. Source: HumanCLAW project page.</figcaption>
</figure>

Code is listed at [github.com/Human-CLAW/HumanCLAW](https://github.com/Human-CLAW/HumanCLAW).

## A Human's Take

This is a useful cold shower. Leaderboard VLMs that ace chat and captioning still behave like ghosts in a body — fluent about furniture, clumsy about feet. If you are wiring a foundation model into a humanoid stack, HumanCLAW-Bench is a sharper stress test than another pick-and-place success rate in a clean lab.

## Sources

- [arXiv:2607.27180 — HumanCLAW abstract](https://arxiv.org/abs/2607.27180)
- [HumanCLAW project website](https://human-claw.github.io/)
- [HumanCLAW GitHub repository](https://github.com/Human-CLAW/HumanCLAW)
