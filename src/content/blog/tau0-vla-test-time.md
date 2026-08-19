---
title: "τ0-VLA Thinks About the Next Subtask Before It Commits"
description: "Agibot Finch’s hierarchical VLA searches subtasks with a world model, trained on 40,115 hours, and lifts long-horizon home-task success."
pubDate: 2026-08-19
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/tau0-vla.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Long-horizon robot work fails at the decision, not the wrist. **τ0-VLA**, from **Agibot Finch**, Shanghai Innovation Institute, and CUHK, treats the next subtask as something you can spend extra compute on: propose options, imagine the camera view each would produce, score them, then commit.

The low-level policy sits on **40,115 hours** of heterogeneous real-world robot data, plus multimodal co-training. A unified **40-dimensional** state/action space covers arms, grippers, waist, and a mobile base.

<figure>
  <img src="/images/heroes/tau0-vla.jpg" alt="τ0-VLA teaser showing subtask beam search for making milk tea and real-robot capability stills" loading="lazy" />
  <figcaption>High-level search over subtasks, then a low-level VLA executes the pick. Source: Cai et al., arXiv:2608.16885.</figcaption>
</figure>

## Two clocks

A high-level policy (Qwen3.5-9B class) keeps an execution memory and, when token confidence is low, runs world-model-guided beam search. A reflective model writes the subtask. The low-level policy (Qwen3.5-2B backbone plus a Mixture-of-Transformers action expert) then runs that subtask.

The project page puts the hierarchical “Plan Once” system at **45.0%** average success across four long-horizon physical tasks, versus **27.5%** when the same low-level policy is fed the full instruction with no high-level loop. Ten trials per task, on **AGIBOT G1**:

| Method | Clean Room | Prep Ingredients | Stir Fry | Milk Tea | Avg. |
| --- | --- | --- | --- | --- | --- |
| GR00T N1.7 | 0/10 | 1/10 | 0/10 | 0/10 | 2.5% |
| π0.5 | 4/10 | 2/10 | 0/10 | 3/10 | 22.5% |
| τ0-VLA (direct) | 4/10 | 2/10 | 0/10 | 5/10 | 27.5% |
| Hierarchical, Plan Once | 5/10 | 4/10 | 4/10 | 5/10 | 45.0% |

Episodes run up to about **12 minutes**. Clean Room is 25 steps; tomato-and-egg stir fry is 22; milk tea is 13.

<figure>
  <img src="/images/heroes/tau0-vla-2.jpg" alt="Photo grid of τ0-VLA robots cleaning a room, cooking, making milk tea, and collecting laundry" loading="lazy" />
  <figcaption>Physical tasks: clean room, ingredients, stir fry, milk tea, plus laundry and a Franka makeup table. Source: Cai et al., arXiv:2608.16885.</figcaption>
</figure>

## Extra compute, when it is unsure

Test-time computation (TTC) raises next-subtask accuracy **15–24 percentage points** on the project page’s summary. On unseen Book Organization layouts, TTC hits **74.0%** next-subtask accuracy versus **50.0%** for a single plan and **57.5%** for Best-of-N.

Closed-loop, with the low-level policy fixed: milk tea **7/10** vs **5/10**, Book Organization **9/10** vs **6/10**, Clean Room **7/10** vs **5/10**. Milk-tea progress moves to **95.38%**; leftover misses are lid and straw.

A correctable memory, trained by perturbing demo histories, adds **11.0** points of next-subtask accuracy. Direct execution on shorter tasks still works across bodies: **10/10** Collect Laundry on ARX AC One, and strong scores on a bimanual Franka makeup-table set.

<figure>
  <img src="/images/heroes/tau0-vla-3.jpg" alt="Architecture diagram of high-level policy, low-level MoT action expert, and world-model beam search" loading="lazy" />
  <figcaption>Propose, predict the camera frame, score, reflect, then execute. Source: Cai et al., arXiv:2608.16885.</figcaption>
</figure>

## A Human's Take

Searching in subtask language instead of joint space is the right grain for a 10-minute kitchen job. Salt that does not change the image is exactly the kind of step a memory has to own.

Forty thousand hours is a lot of metal. The number I care about is still 4/10 on stir-fry even with the hierarchy. Extra test-time compute helps the planner. The lid and the straw are still a contact problem.

## Sources

- [arXiv:2608.16885 — τ0-VLA HTML](https://arxiv.org/html/2608.16885v1)
- [τ0-VLA project page](https://tau0-vla.github.io/)
