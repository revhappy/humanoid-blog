---
title: "ContactIPM Pushes the Box Without Being Told When to Touch It"
description: "A new solver treats contact as complementarity and still uses a Riccati recursion. Closed-loop Push Box hits 50/50 with a 2.08 ms median solve."
pubDate: 2026-08-16
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/contactipm.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Contact-implicit planners do not get a script of when the hand should hit the box. They get complementarity: force and gap cannot both be nonzero. That math makes generic solvers choke. **ContactIPM** (**arXiv:2608.11731**, 12 August 2026, Yucheng Chen) keeps a primal-dual interior-point loop *and* the stagewise Riccati factorization optimal-control people already trust.

Code is posted anonymized at **anonymous.4open.science/r/ContactIPM-0C58**.

<figure>
  <img src="/images/heroes/contactipm.jpg" alt="Closed-loop Push Box plots: paths, error, solve-time CDF, complementarity" loading="lazy" />
  <figcaption>Fig. 2 from the paper: closed-loop Push Box paths, errors, latency, complementarity. Source: arXiv:2608.11731.</figcaption>
</figure>

## What it does differently

CRISP (RSS 2025) solves a stack of convex primal subproblems. IMPACT (RSS 2026) alternates trajectory steps with closed-form complementarity updates. ContactIPM instead marks complementary pairs, adds elastic slacks, ties the product residual to the same barrier **μ** as the rest of the interior-point path, eliminates slacks locally, and Riccati-solves the reduced Newton system.

Success is not “the solver returned.” A run counts only if dynamics defects stay under **10⁻⁵**, one-sided violations under **10⁻⁸**, and the *unrelaxed* physical product **max |a·b|** stays under **10⁻⁵**, plus the task goal.

## The scoreboard

Versus **CRISP**, on 20 paired timed runs: **2.17–8.87×** faster (Push Box through Cartpole). Robustness: **24/25** Push Box vs **19/25**; **50/50** Push-T vs **27/50** once complementarity is required (CRISP hit the task gate on 43/50 but many failed the physical product check).

Versus **IMPACT**: faster on Push T (**2.96×**) and Cart Transport (**4.91×**), **slower** on Push Box (**4.46×**). Robustness: **150/150** vs **147/150**.

An **acados** baseline that imposed exact complementarity (`a≥0`, `b≥0`, `ab≤0`) often converged to a physically valid *zero-contact* plan. On 50 Push Box cases: ContactIPM **50/50** accepted; acados **0/50** reached the goal.

<figure>
  <img src="/images/heroes/contactipm-2.jpg" alt="Close crop of Push Box path and error panels from ContactIPM Fig. 2" loading="lazy" />
  <figcaption>Path and target-error panels from the same closed-loop figure. Source: arXiv:2608.11731.</figcaption>
</figure>

Closed loop, **19**-stage Push Box, **0.1 s** control: **50/50** rollouts succeed (nominal, pose error, mass/friction mismatch, resets, combined). Median solve **2.08 ms** over **1,104** MPC steps; **99.37%** beat the **100 ms** deadline. Nominal finish is **19** steps (~**1.9 s**). Combined disturbance worst finals: **11.9 mm**, **2.15 mrad**.

## A Human's Take

A solver that “succeeds” by never touching the box is a museum piece. Gating on the physical product is the adult move. 2 ms on Push Box is fast enough to argue about. I want the same gate on a walking humanoid, not just a planar box.

## Sources

- [arXiv:2608.11731 — ContactIPM HTML](https://arxiv.org/html/2608.11731)
- [arXiv:2608.11731 — PDF](https://arxiv.org/pdf/2608.11731)
- [Anonymous code drop](https://anonymous.4open.science/r/ContactIPM-0C58)
