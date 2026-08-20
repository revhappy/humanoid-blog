---
title: "CompCPZ Stops Robots From Parking Between ‘This or That’"
description: "TUM’s CompCPZ keeps the ‘or’ in robot commands, winning 1,900/1,918 sim trials and 12/12 Go2 runs where convex goals miss."
pubDate: 2026-08-20
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/compcpz-go2-or.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Tell a robot “put it near the red plate **or** the blue plate,” and a lot of planners aim for the gap. The arm looks successful. The cup is in empty air.

**CompCPZ**, from **Technical University of Munich** (**Zhen Zhang**, **Ahmad Hafez**, **Peng Xie**, **Yanliang Huang**, **Wenyuan Wu**, **Amr Alanwar**), treats that as a representation bug, not a tuning bug. The paper, [arXiv:2608.17717](https://arxiv.org/abs/2608.17717), posted **August 18**, wraps language-conditioned systems with constrained polynomial zonotopes so a disjunction stays as separate feasible blobs.

<figure>
  <img src="/images/heroes/compcpz-go2-or.jpg" alt="Unitree Go2 standing over a box marked as a valid goal, with a blue trajectory inset" loading="lazy" />
  <figcaption>Go2 on a true mode. Blue inset: CompCPZ path into a valid goal. Source: CompCPZ paper.</figcaption>
</figure>

## The silent miss

The authors call it a **silent semantic failure**: geometry says you arrived, the instruction says you did not. They prove a lower bound: any sound encoding with fewer connected components than the instruction has modes misses the true set by at least half the gap between modes. A planner that commits to one point before it sees which mode is free has worst-case success **1/k** under a symmetric **k**-mode instruction.

CompCPZ parses the sentence into a small grammar (`near`, `avoid`, `between`, negation), builds a two-sided enclosure per clause, then composes with intersection, union, and complement. Coverage is split-conformal. Runtime on composition is under **0.25 ms** at depth 4, under **1.1 ms** at a worst-case depth 7.

Parser is GPT-4o with chain-of-thought. Detector in the closed-loop tests is a fine-tuned **YOLOv8n** (200 synthetic frames, about **33 minutes** on one GPU). Off-the-shelf Grounding-DINO+SAM2 sat at **0.20** in-GT-mode; the in-domain detector hit **1.00** in their ablation.

## Sim table, then a dog

On a 18-family ManiSkill3 closed-loop Franka servo (200 seeds each), both CompCPZ and a convex AABB baseline reach the commanded point at **≥0.99** geometric success. Only CompCPZ lands inside an analytic ground-truth mode. Pooled: **1.00** vs **0.13** in-GT-mode, **1,900 / 1,918** paired wins. On clean disjunctions such as “red ∨ blue,” convex scores **0.00**. OpenVLA-7B, run zero-shot on the multi-modal families, hit **30.8%** in-GT-mode.

The same compiler, untuned, ran on a **Unitree Go2** under **~100 Hz NOKOV** motion capture. Four planar scenarios, 36 trials. CompCPZ was in a true mode **12/12**. The convex hull was **0/12**, and on the negation scene it put the dog on the forbidden rug **3/3**. A single-clause planner that commits to the first disjunct failed the blocked-mode scene **0/3**.

<figure>
  <img src="/images/heroes/compcpz-go2-or-2.jpg" alt="Go2 at a box on the left of the arena with a blue mocap path inset" loading="lazy" />
  <figcaption>Another CompCPZ run into a GT mode. Source: CompCPZ paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/compcpz-go2-or-3.jpg" alt="Go2 standing in a white rectangle between boxes, red path inset showing a gap landing" loading="lazy" />
  <figcaption>Convex baseline: the dog stops in the gap, which is not a valid “or.” Source: CompCPZ paper.</figcaption>
</figure>

Limits they state: depth-independent stability is proved for axis-aligned grammars; the real robot is planar locomotion, not contact-rich Franka hardware.

## A Human's Take

“Or” is a child’s word and a planner’s trap. I like a paper that treats the gap between two plates as a failure, not a compromise.

The Go2 photos are the receipt: same room, same boxes, one path into a mode, one path onto the rug. That is the demo I want on every VLA that claims it follows instructions.

## Sources

- [arXiv:2608.17717 — CompCPZ: Preserving Multi-Modal Intent in Language-Guided Robot Manipulation](https://arxiv.org/abs/2608.17717)
- [arXiv HTML — full paper with Go2 figures](https://arxiv.org/html/2608.17717)
