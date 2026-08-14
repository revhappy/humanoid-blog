---
title: "Temporal GRPO Stops Punishing the Good Part of a Failed Rollout"
description: "CAS researchers split VLA-RL credit by detectable task stage on RoboTwin 2.0 and LIBERO-Long."
pubDate: 2026-08-14
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/temporal-grpo.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Group Relative Policy Optimization (GRPO) is a popular way to post-train a vision-language-action model: sample a handful of full rollouts, score who finished the job, and smear that one number across every action. **Temporal GRPO**, from the Institute of Software at the Chinese Academy of Sciences (arXiv **August 13**), calls the smear **trajectory-level credit aliasing**.

A rollout that stacked the cup correctly and then dropped the place still gets the same failure weight on the stack. The paper’s fix is to detect ordered stages, compare only rollouts that actually entered the same stage, and write a separate advantage onto each interval.

<figure>
  <img src="/images/heroes/temporal-grpo.jpg" alt="Temporal GRPO diagram of stage construction, rollout alignment, and piecewise credit" loading="lazy" />
  <figcaption>One trajectory advantage becomes stage-wise credit. Failed later stages are masked instead of poisoning earlier ones. Source: Temporal GRPO paper.</figcaption>
</figure>

## Same policy, finer credit

Nothing about the VLA architecture changes. Rollouts are still complete. The objective is still final task success. Stages are an ordered list the authors can detect (near, grasp, move, place in the teaser). A rollout that never reaches “place” is left out of the place group instead of being treated as a place failure for everyone else.

On **RoboTwin 2.0**, Temporal GRPO reports a **75.8%** macro-average success rate, **7.0 points** above the strongest controlled baseline, with **6.2–8.3** point gains across task horizons. On **LIBERO-Long**, controlled updates keep shared prerequisite stages and concentrate the change at the first stage where rollouts diverge.

<figure>
  <img src="/images/heroes/temporal-grpo-2.jpg" alt="Detectable stage construction from a language instruction and first frame" loading="lazy" />
  <figcaption>A VLM planner turns the instruction into an ordered stage list. Source: Temporal GRPO paper.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/temporal-grpo-3.jpg" alt="Successful versus failed rollouts aligned by stage rather than wall-clock time" loading="lazy" />
  <figcaption>Alignment is by stage progress, not fixed time. Source: Temporal GRPO paper.</figcaption>
</figure>

## What they compared

SFT baselines in the writeup include **π0** and **RDT-1B**. The matched RL group uses the same OpenVLA-OFT checkpoint and budget: SimpleVLA-RL, TGRPO, a trajectory-level GRPO, a stage-reward GRPO that still broadcasts one number, and Temporal GRPO. Authors are Yao Zhou, Hang Gao, Fengge Wu, Changwen Zheng, and Wenwen Qiang.

## A Human's Take

Credit aliasing is the boring reason long-horizon RL looks drunk. If you punish the grasp that worked because the place failed, you teach the policy to forget the grasp. Stage groups are not magic, and they inherit whatever detector you used to name the stages. Still, a 7-point lift under a locked budget is the kind of bookkeeping I will copy before I reach for a bigger backbone.

## Sources

- [arXiv:2608.13026 — Temporal GRPO](https://arxiv.org/abs/2608.13026)
- [Temporal GRPO HTML paper](https://arxiv.org/html/2608.13026v1)
- [Temporal GRPO PDF](https://arxiv.org/pdf/2608.13026)
