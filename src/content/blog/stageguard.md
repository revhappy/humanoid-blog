---
title: "StageGuard Distills When to Stop a Skill Into a Tiny VLM"
description: "Huawei Noah’s Ark’s 0.8B monitor hits 96.23% transition completion on LIBERO and 18/20 on a UR5e drawer-and-plate stack, running at 2.2 Hz beside the VLA."
pubDate: 2026-09-20
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/stageguard-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Long-horizon stacks fail in the handoff. The pick worked. The place started too soon. **Jinbang Huang**, **Yingxue Zhang**, and colleagues at Huawei Noah’s Ark Lab posted **StageGuard** ([arXiv:2609.20791](https://arxiv.org/abs/2609.20791)) on **17 September 2026**: a small vision-language model whose job is to say **continue**, **advance**, or **skip**.

A cloud VLM can reason about a scene. It is slow, and its “done” threshold is not your subtask. StageGuard distills demonstration-grounded explanations into a student that can sit next to the controller.

<figure>
  <img src="/images/heroes/stageguard-2.jpg" alt="UR5e opening a drawer and placing a plate, Piper arm inserting a plate in a rack, plus pie charts of 18/20 and 16/20 successes" loading="lazy" />
  <figcaption>UR5e drawer stack and Piper plate insert. Source: Huang et al., arXiv:2609.20791, Fig. 2.</figcaption>
</figure>

## Teacher talks, student keeps the punchline

Teacher: **Qwen3.5-397B-A17B**. Student: **Qwen3.5-0.8B**. A three-layer agentic pass (state, task, decision) writes a long chain of thought against annotated transitions. The student rewrites that into a compact self-explanation. The teacher judges three candidates. Fine-tuning weights explanation tokens at **0.5** and the structured decision at **1.0**.

Training uses **10** trajectories per task. LIBERO-Logic covers short tabletop sequences. BEHAVIOR-1K is limited here to six household tasks (radio, trash, boxes, modem, cans, scanner).

On LIBERO, StageGuard reports **96.23%** transition completion (within ±3 s of the label), **97.50%** of trajectories reaching the last planned subtask, **89.81%** next-subtask accuracy, at **1.03 Hz**. Prompted VLMs and a ROVER-style progress reasoner sit far below that on the same protocol. On BEHAVIOR-1K the student still leads: **90.18%** transition completion, **81.67%** full trajectories, **57.23%** next-subtask, **1.74 Hz**.

Closed-loop on BEHAVIOR-1K, with a PDDL planner and π0.5 skills, StageGuard narrows the success-rate gap to an oracle that uses ground-truth transitions from **0.28** to **0.10**.

<figure>
  <img src="/images/heroes/stageguard.jpg" alt="Diagram of teacher multi-layer reasoning distilled into a compact student chain of thought" loading="lazy" />
  <figcaption>Learning by explanation, not by copying the whole teacher trace. Source: Huang et al., arXiv:2609.20791, Fig. 1.</figcaption>
</figure>

## Two real arms

**UR5e**: open drawer, move a plate from a rack into the cabinet, close the drawer. **18/20** (**90%**). One miss is the VLA. One miss is a late transition under partial observability.

**Piper**: pick a thin plate and insert it in a rack. **16/20** (**80%**). All four misses are grasp failures. None are blamed on StageGuard.

The monitor runs at **2.2 Hz** in parallel with the local VLA and does not block the loop, the authors say. Limits they list: you still need annotated demos, the teacher is expensive, and a small model cannot see around a bad camera angle.

## A Human's Take

I have watched too many “generalist” stacks stall because nobody owned the moment a skill was finished. A 0.8B monitor at 2 Hz is the right size for that job. The Piper result is the honest one: the hand still drops the plate. StageGuard cannot save a bad pinch. It can stop you from closing the drawer on the way in.

## Sources

- [arXiv:2609.20791 — StageGuard](https://arxiv.org/abs/2609.20791)
- [arXiv HTML — LIBERO and BEHAVIOR-1K tables, UR5e and Piper trials](https://arxiv.org/html/2609.20791v1)
