---
title: "A Coding Agent Beats Diffusion Policy at Push-T, Then Does A–Z"
description: "Berkeley’s Goldberg lab lets Claude Code solve Push-T with no demos: 100% success, 46% fewer steps, then 99.4% on 26 letter shapes."
pubDate: 2026-08-20
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/pusht-agentic-goldberg.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Push-T** is the little T-block everyone uses to train pushing policies. **Shuangyu Xie**, **Kaiyuan Chen**, and **Ken Goldberg** at UC Berkeley asked a coding agent to write the controller instead of cloning 200 human demos.

The short paper (arXiv:2608.18227) uses **Claude Code with Fable 5**. The agent finds the gym simulator, fits a quasi-static contact model, and iterates. No demonstration dataset.

<figure>
  <img src="/images/heroes/pusht-agentic-goldberg.jpg" alt="Push A–Z grid of letter-shaped blocks, goal poses in green, pusher as a blue dot" loading="lazy" />
  <figcaption>The agent-written Push A–Z benchmark. Red tiles are early failures. Source: Xie, Chen, and Goldberg, arXiv:2608.18227.</figcaption>
</figure>

## Push-T, no humans in the loop

On `gym_pusht` over **200** seeds, the public **LeRobot Diffusion Policy** checkpoint (trained on 200 demos) hits **62.5%** success under the 95% coverage rule, **223.7** mean steps, **6.38** pushes.

The agent’s state controller hits **100%**, **120.1** steps, **3.72** pushes. That is **46%** fewer control steps than the learned policy. A later vision version, reading RGB instead of privileged pose, still reaches **97.2%**.

The first controller is a four-phase state machine: plan, approach, push, retreat, with a discrete contact library for translation versus rotation.

## Then the rest of the alphabet

They extend the block to A–Z. A v1 prompt gets **47.1%**. Overnight self-refinement reaches **73.1%**. After the agent reads failure logs and the sim source, it switches to MPC and finishes at **99.4%** success with privileged state (**650** episodes, 25 per letter). Vision MPC is **99.2%**.

A classical **Dubins pushing** baseline, with an agent-written adapter, reaches **97.2%**. The MPC still uses fewer than half as many pushes.

They port the vision MPC into simulated **Franka Panda** (**89.8%**) and **UR5e** (**98.5%**) arms without changing the contact reasoning.

<figure>
  <img src="/images/heroes/pusht-agentic-goldberg-2.jpg" alt="Franka Panda and UR5e simulated arms pushing T-shaped blocks" loading="lazy" />
  <figcaption>Same controller idea on two simulated arms. Source: Xie, Chen, and Goldberg, arXiv:2608.18227.</figcaption>
</figure>

The bill: about **9.5 million** output tokens, roughly **$1,500–$2,000**, and **221 hours** in Claude auto mode with a human in the loop. The authors note the agent may be exploiting the simulator, and that this is not a real-robot result.

<figure>
  <img src="/images/heroes/pusht-agentic-goldberg-3.jpg" alt="Self-generated curriculum plot of controller iterations climbing toward 99.4 percent" loading="lazy" />
  <figcaption>Fourteen v3 iterations, with exams on all 26 letters. Source: Xie, Chen, and Goldberg, arXiv:2608.18227.</figcaption>
</figure>

## A Human's Take

I will never get tired of a 2D T-block if the punchline is “the coding agent wrote a better pusher than the demo policy.” Geometry still works.

The honest line is in the limitations: the agent treated the gym as the world. Take that $2,000 controller to a real UR5e with a puck that chips, then we can argue.

## Sources

- [arXiv:2608.18227 — Revisiting Push-T with Agentic Robotics](https://arxiv.org/abs/2608.18227)
- [arXiv HTML — paper and figures](https://arxiv.org/html/2608.18227v1)
