---
title: "ManiGuard: Finishing the Task Is Not the Same as Doing It Safely"
description: "Northwestern’s ManiGuard-Bench finds 6–21% of successful VLA rollouts still violate a formal safety spec, then ships 8,000 annotated demos."
pubDate: 2026-08-19
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/maniguard.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A policy can put the mug on the tray and still knock the glass over on the way. **ManiGuard**, from Northwestern, Stanford, and William & Mary, is a benchmark that scores those as different outcomes. Safety is an LTLf formula checked by an automaton over physics predicates — not an LLM judge.

The suite has **200** locked household tasks in six families, each run in-distribution and under four single-axis shifts, for **1,000** scenarios. Across **more than 23,000** evaluation rollouts, **6–21%** of *successful* trials still violate the spec.

<figure>
  <img src="/images/heroes/maniguard.jpg" alt="ManiGuard-Bench six task families with an LTL runtime monitor and safety-annotated dataset" loading="lazy" />
  <figcaption>Six families, a compiled LTLf monitor, and 8,000 safe-success demos. Source: Peng et al., arXiv:2608.17386.</figcaption>
</figure>

## What the benchmark actually checks

Families sit on a skill × constraint grid: Clutter, Lid, Cabinet, Jar, Stack, Dusty. Spatial invariants (do not topple, do not spill) sit next to ordering rules (lid on before you carry; jar closed before you lift). OmniGibson / Isaac Sim supplies contact and fluid. The same specs are scored on a physical **Franka**.

A rollout is “engaged” at first whole-arm contact with a task object. Idle policies look safe because they never touch anything. ManiGuard reports that separately as vacuous-safe.

The authors release **8,000** safety-annotated demonstrations — **40** per base task — filtered by the same monitor. Generation is cuRobo planning from **1,547** grasps on **221** objects, plus GELLO / SO-101 teleop. Code is on GitHub; the dataset is on Hugging Face.

<figure>
  <img src="/images/heroes/maniguard-2.jpg" alt="Grid of ManiGuard tasks under appearance, background, location, and language shifts" loading="lazy" />
  <figcaption>One-axis OOD shifts; the safety formula stays fixed. Source: Peng et al., arXiv:2608.17386.</figcaption>
</figure>

## Fine-tuning helps. It does not finish the job.

Zero-shot **π0.5**, **π0**, and SmolVLA sit near **0%** safe-success. They look **78–83%** “safe” mostly by not engaging; among engaged rollouts they violate **30–54%** of the time.

Supervised fine-tuning on the suite raises safe task completion to **7.5–29.8%** and engaged-and-safe behavior to **51–72%**. Fine-tuned π0.5 goes from **41% → 84%** engagement while engaged violations fall **54% → 21%**. Two of six families stay **below 2%** safe-success for every policy. **21–42%** of engaged rollouts still violate. More of the same demos does not close that gap. The pattern holds under the OOD shifts and on the Franka.

<figure>
  <img src="/images/heroes/maniguard-4.jpg" alt="Collage of dozens of simulated household manipulation scenes used in ManiGuard-Bench" loading="lazy" />
  <figcaption>A slice of the 200 base tasks. Source: ManiGuard project page.</figcaption>
</figure>

## A Human's Take

Success rate as a single number has been lying to this field. If two policies tie on task success and differ by six points on violations, the leaderboard was scoring the wrong thing.

I want this monitor on hardware that can actually spill. The remaining 21–42% engaged-violation band is the real product requirement: not “can it do the task,” but “does it knock the jar over while doing it.”

## Sources

- [arXiv:2608.17386 — ManiGuard HTML](https://arxiv.org/html/2608.17386v1)
- [ManiGuard project page](https://nu-ideas-lab.github.io/ManiGuard)
- [ManiGuard GitHub](https://github.com/NU-IDEAS-Lab/ManiGuard)
