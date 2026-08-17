---
title: "hint² Steers a Short-Horizon Policy With Two World Models"
description: "Purdue’s hint² uses high- and low-level world models to satisfy LTL on CALVIN and a real UR5e."
pubDate: 2026-08-17
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/hint2-ltl-guidance.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Language-conditioned policies are bad at “do A, then B, and never tilt the box.” **hint²**, from Moritz Zoellner, Anastasios Manganaris, Ahmed H. Qureshi, and Rohan Paleja at Purdue, leaves the policy alone and steers it at inference time with two world models and a temporal-logic spec.

The mismatch is simple. Modern diffusion policies emit a short action chunk and replan. Linear temporal logic is scored on the whole future. hint² splits the job.

<figure>
  <img src="/images/heroes/hint2-ltl-guidance.jpg" alt="2D toy-squares paths with and without hint2 low-level safety guidance" loading="lazy" />
  <figcaption>Toy-squares rollouts: without vs with hint² safety guidance. Source: arXiv:2608.13678.</figcaption>
</figure>

## High-level progress, low-level safety

The **high-level** model predicts the next distinct **atomic-proposition** labels an action chunk will cause, then walks the LTL automaton. That is how you get “eventually close the drawer, then flip the switch” without rolling a pixel world model for 30 seconds.

The **low-level** model predicts nearby states so **signal temporal logic** robustness can push the chunk away from a painted-off region or a bad gripper angle.

The policy itself stays an unconditioned diffusion policy. Guidance is a gradient on the chunk, not a new training set.

## What they actually ran

On a 2D colored-squares toy, hint² holds **100%** LTL satisfaction as the automaton distance grows. Full-trajectory baselines **LTLDoG** and **TeLoGraF**, trained on the same single-target demos, fall off. hint² only ever samples **8-step** chunks.

In **CALVIN**, they train on **six hours** of play data. For single-behavior selection (formulas like “eventually button on”), hint² averages **91%** and beats **DynaGuide** and **ITPS**. On longer specs (unordered, branched, cyclic, plus “keep the gripper open” or “hold 20 degrees”), the paper reports near-perfect success. **FLOWER**, a strong language VLA on the same suite, handles primitives and then stalls on long instructions unless an LLM planner is bolted on.

<figure>
  <img src="/images/heroes/hint2-ltl-guidance-3.jpg" alt="Unguided CALVIN diffusion policy executing an arbitrary tabletop behavior" loading="lazy" />
  <figcaption>The unguided CALVIN policy picks an arbitrary skill. Source: hint² project page.</figcaption>
</figure>

## Cheez-Its on a UR5e

The real setup is a **UR5e** and **130** demos of grab-pour-place with a Cheez-Its box. High-level labels are `box_grabbed`, `pour_left`, `pour_right`. hint² completes mode selection, keep-upright-until-near-bowl, avoid-region, and cyclic left/right pours. A short-horizon STL sampler (**STL-GPC**) helps a bit on mode pick and can lose to the base policy on safety, because one robustness number is trying to pick a bowl and keep the box upright at the same time.

<figure>
  <img src="/images/heroes/hint2-ltl-guidance-2.jpg" alt="Real UR5e with Cheez-Its box and two bowls" loading="lazy" />
  <figcaption>Real-world pour setup. Source: hint² project page.</figcaption>
</figure>

The authors say the high-level abstraction is exact for stutter-invariant LTL relative to the MDP. Broader formulas and learned discrete features are future work. Videos live at the anonymous project page.

## A Human's Take

This is the right split. Use the automaton for “what comes next” and the short dynamics model for “don’t dump the crackers.” I do not want another VLA retrained every time the safety rule changes. I do want to see those CALVIN numbers on a second lab’s play dataset before I treat 91% as a product feature.

## Sources

- [arXiv:2608.13678 — hint² abstract](https://arxiv.org/abs/2608.13678)
- [hint² project page](https://anonymous-hint2.github.io/)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.13678v1)
---
