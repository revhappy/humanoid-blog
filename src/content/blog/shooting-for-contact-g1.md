---
title: "Caltech DSMS Retargets Contact-Rich Motions to Unitree G1 Crawl and Jump-Turn"
description: "Shooting for Contact uses contact-implicit multiple shooting so RL policies transfer zero-shot to G1 crawling and a 180° jump-turn."
pubDate: 2026-08-05
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/shooting-for-contact.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Kinematically pretty motion references often break when you ask a humanoid to crawl, roll, or jump. **Shooting for Contact** (arXiv:2608.03116, submitted Aug 4, 2026) from Caltech’s AMBER Lab and collaborators turns those references into **dynamically feasible whole-body trajectories**, then trains motion-imitation policies that transfer **zero-shot** to a **Unitree G1**.

<figure>
  <img src="/images/heroes/shooting-for-contact.jpg" alt="Unitree G1 sim-to-real: crawling on grass and 180-degree jump-turn" loading="lazy" />
  <figcaption>Sim references (left) and real G1 crawls and jump-turns (right). Source: arXiv:2608.03116 HTML / project page.</figcaption>
</figure>

## What DSMS does

The method is **contact-implicit, direct simulation-based multiple shooting (DSMS)**. A differentiable simulator sits inside a nonlinear program. Contact, friction, impacts, self-collision, and joint limits are resolved **inside the simulator** — not as an explicit contact schedule or force decision variables.

The authors report that, versus prior retargeting, DSMS **accelerates motion-imitation RL** and yields policies with high success rates and low tracking error. The same formulation is morphology-agnostic enough to retarget a jump-turn onto a quadruped in the paper’s demos.

## Hardware that matters

On the G1, the project page and abstract highlight:

- **Command-conditioned contact-rich crawling** (hands, elbows, knees, feet; sticking and sliding), including under height constraints, forwards/backwards steering, outdoor grass slopes, and cluttered lab runs with operator twist commands only.
- A **highly dynamic 180° jump-turn** from a reduced-order reference resolved into a whole-body feasible track.

<figure>
  <img src="/images/heroes/shooting-for-contact-2.jpg" alt="Unitree G1 crawling under a low wooden platform" loading="lazy" />
  <figcaption>G1 crawling under a height-constrained board. Source: arXiv HTML Figures/crawl_under.png.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/shooting-for-contact-3.jpg" alt="Unitree G1 crawling uphill on outdoor grass" loading="lazy" />
  <figcaption>Outdoor uphill crawl on grass. Source: arXiv HTML Figures/crawl_hill.png.</figcaption>
</figure>

Code is listed on the project site ([GitHub: sesteban951/shooting-for-contact](https://github.com/sesteban951/shooting-for-contact)).

## A Human's Take

I'm less interested in another flip video than in whether the **reference the policy tracks could physically exist** on the hardware. DSMS’s bet — put the contact mess inside the simulator, then imitate — is exactly the unit-economics of demo-to-shift: if training targets are infeasible, sim-to-real is theater. Crawl under a board on grass with twist commands and no fine-tuning is the kind of receipts I want more of.

## Sources

- [arXiv:2608.03116 — Shooting for Contact abstract](https://arxiv.org/abs/2608.03116)
- [Project page — Shooting for Contact](https://shooting-for-contact.github.io/)
- [arXiv HTML full text with figures](https://arxiv.org/html/2608.03116v1)
