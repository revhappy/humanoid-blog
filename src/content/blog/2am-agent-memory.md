---
title: "2AM Keeps Task Memory in the Agent, Not the Robot Policy"
description: "KU Leuven and Meituan split a VLM agent from a stateless VLA. Grounded grasp/place/move hints lift LIBERO-Mem relaxed success to 63%."
pubDate: 2026-09-11
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/2am.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Long-horizon manipulation needs memory. **2AM** argues it does not have to live inside the motor policy. A multimodal **Agent** holds the episode. A single RGB **Action Model** executes a short chunk and then forgets the task.

The paper (arXiv:2609.11308, submitted **September 10, 2026**) is from **KU Leuven** and **Meituan**. The contract is strict: no depth, no online geometry, no planner-driven object motion. Every task-relevant movement goes through one episodically stateless VLA.

<figure>
  <img src="/images/heroes/2am.jpg" alt="2AM diagram: VLM agent with task memory steering a stateless VLA via grasp, place, and move hints" loading="lazy" />
  <figcaption>Agent remembers; Action Model does not. Source: 2AM paper, Figure 1.</figcaption>
</figure>

## The steering command

After each chunk, the Agent sees fresh agent-view RGB and a consolidated history (object, destination, count, stage). It emits:

- subtask language
- optional 2D **grasp_target**
- optional 2D **place_target**
- optional 2D **move_target**

Coordinates are in the current agent image, **[0, 1000]²**. A missing field is omitted, not faked. Grasp is for “which object” before contact. Place is the destination during transport. Move is a near-term progress cue, not a waypoint the gripper must hit.

The Action Model sees agent RGB, wrist RGB, robot state, and that command. No history. Implementation: **Qwen3-VL-4B** plus a flow-matching action expert, **16-step** chunks. The current Agent is **Qwen3.8-27B**.

Training recovers hints from demonstrations (boxes, contact, projected end-effector). Then it **drops** fields, adds spatial noise, and jitters the move window so the policy can stand a sloppy Agent.

<figure>
  <img src="/images/heroes/2am-2.jpg" alt="2AM training pipeline: expert trajectories, hint dropout, and steerable VLA" loading="lazy" />
  <figcaption>Offline hint recovery and robustness dropout. Source: 2AM paper, Figure 2.</figcaption>
</figure>

## LIBERO-Mem, with an honest baseline

LIBERO-Mem’s ten tasks change instance, destination, count, or stage while the local pick-and-place repeats. Published SlotSSM completion is **14.8%**. The authors’ own **π0** reproduction, same backbone and cameras, already reaches **70.79%** completion, **37.42%** relaxed success, **12.25%** strict success.

2AM: **76.29%** completion, **63.00%** relaxed success, **11.83%** strict success. Relaxed success (finish the ordered goal, ignore a later overshoot) jumps **25.58** points. Strict success does not. Language-only ablation, same Agent and motors, no 2D hints: **53.72%** completion, **19.42%** relaxed, **7.25%** strict. Adding grasp/place/move is the gain.

The 63% → 12% strict gap is the paper’s own warning: carrying remembered intent through the sequence is not the same as stopping when you are done. Real-robot closed-loop tests are listed as future work.

## A Human's Take

Stuffing more history into the VLA is the default move. 2AM’s bet is that the policy should be allowed to retry from a clean observation after the Agent rewrites the instruction. The 25-point relaxed-success jump is real. The missing stop button is also real. I would not ship this until someone measures the same contract on a physical arm that can overshoot a bowl onto the floor.

## Sources

- [arXiv:2609.11308 — 2AM](https://arxiv.org/abs/2609.11308)
- [Paper HTML](https://arxiv.org/html/2609.11308)
