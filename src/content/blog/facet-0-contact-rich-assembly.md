---
title: "Facet-0 Puts Force in the VLA — 82% on Sub-Millimeter PC Assembly"
description: "NTU’s Facet-0 predicts wrist wrench with each action chunk and hits 82% on five computer-assembly tasks versus 15% for the best baseline."
pubDate: 2026-09-02
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/facet-0-contact-rich-assembly.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**PINE Lab at Nanyang Technological University** posted **Facet-0** on arXiv on **1 September 2026**: a robot foundation model that does not just output a motion. For each action chunk it also predicts the **wrist wrench** that motion should cause, then scores that pair with a critic trained on real rollouts.

On five sub-millimeter computer-assembly tasks, the full system reaches **82%** mean success against **15%** for the strongest matched baseline (a π₀.₅ + RECAP-style run on the same data). Placement accuracy is **0.5 mm**. Command latency is **50 ms**.

<figure>
  <img src="/images/heroes/facet-0-contact-rich-assembly.jpg" alt="Facet-0 teaser of GPU, RAM, disk, CPU, and CPU-lever assembly inside a PC chassis" loading="lazy" />
  <figcaption>Five contact-rich PC tasks from the evaluation suite. Source: Deng et al., arXiv:2609.01596.</figcaption>
</figure>

## ManuFacet-1K, then a critic

The representation is trained on **ManuFacet-1K**, about **1,000 hours** of force-synchronized demos and closed-loop rollouts across **three** arms (the project page names **UR7e**, **xArm**, and **Franka**). Every frame stores pose, gripper opening, and six-axis wrench. Action resolution is **0.5 mm**. The paper’s task mix is CPU **37.3%**, RAM **21.9%**, Disk **23.4%**, GPU **17.3%**.

The policy starts from a **PaliGemma** vision-language backbone plus a flow-matching action expert. It fuses three RGB views, the instruction, kinematics, and a **K=10** wrench history, then samples a horizon-**50** joint proposal: Cartesian actions plus the wrenches those actions are expected to produce. Only the action is executed. Wrench stays a prediction.

A distributional **Action–Wrench Critic** then ranks proposals that look similar in pose but differ in contact. Contact-selective credit upweights the scarce frames where the insert actually happens. A small bounded actor can adapt on the robot while freezing most of the network (**6.6%** of parameters in the few-shot transfer test).

<figure>
  <img src="/images/heroes/facet-0-contact-rich-assembly-2.jpg" alt="Parallel gripper holding a CPU over a fixture next to an open PC chassis" loading="lazy" />
  <figcaption>Wrist-level CPU pick during collection. Source: Facet-0 project page.</figcaption>
</figure>

## Where the 82% comes from

The suite is five host-computer jobs on one chassis fixture, **23** sub-goals, **20** trials per cell, no re-runs. Clearances on the contact-critical steps are **0.10–0.30 mm**. Controlled Facet-0 variants tell the story in one line: **16%** with semantic-contact alignment, **38%** after value-guided RL, **82%** with local adaptation.

Failures sit at contact. Free-space *pick* is high for everyone. RAM and GPU *align* are **10%** for π₀.₅ and **95% / 85%** for Facet-0. The two-press **LEVER** task, with no free-space sub-goal, is the hard one: Facet-0 still only hits **50%** there.

On Disk post-training against matched advantage-weighted behavior cloning, success goes **20% → 65%**, recovery **44% → 81%**, and human intervention **47% → 24%**. Ten demos and three hours on an unseen RAM module: Facet-0 **45%**, strongest baseline **5%**.

The project page also shows uncut four-task runs on a **Dell Precision** workstation and says **72%** of episodes used a T5810, **28%** a T1700. The paper is the source for the success table; the site is the source for those chassis splits.

<figure>
  <img src="/images/heroes/facet-0-contact-rich-assembly-3.jpg" alt="Grid of RAM, GPU, disk, CPU, and lever sub-goals from pick through press" loading="lazy" />
  <figcaption>Sub-goal vocabulary for the five-task suite. Source: Deng et al., arXiv:2609.01596.</figcaption>
</figure>

## A Human's Take

Most VLAs still treat force as an extra token they can ignore until the DIMM jams. Predicting the wrench *with* the action, then paying the critic for a clean insert instead of a successful-looking shove, is the right objective for electronics. 82% on a 20-trial lab suite is not a line rate. The LEVER result is the tell: when every step is contact, the model is only halfway there. If they can hold 0.5 mm on a second chassis family without a week of residual RL, this becomes a manufacturing paper. If not, it is a very good force ablation.

## Sources

- [arXiv:2609.01596 — Facet-0 paper](https://arxiv.org/abs/2609.01596)
- [arXiv HTML — methods and tables](https://arxiv.org/html/2609.01596v1)
- [PINE Lab — Facet-0 project page](https://pine-lab-ntu.github.io/facet-0/)
