---
title: "LIBERO-Recover Asks If the Arm Can Get Up After It Drops the Bowl"
description: "A 2,178-scenario benchmark built from real VLA failures. Near-perfect LIBERO scores fall more than 50% when the policy has to recover."
pubDate: 2026-09-08
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/libero-recover.jpg"
readTime: "5 min read"
featured: false
draft: false
---

LIBERO scores near **100%** have been the victory lap for vision-language-action models. **LIBERO-Recover**, posted **4 September** as [arXiv:2609.05178](https://arxiv.org/abs/2609.05178), is the hangover. The authors collect failures that actually happened during SOTA rollouts, then ask whether the policy can finish the original task from that mess.

The project page counts **2,178** recovery scenarios across **130** subtasks in four LIBERO suites, plus **3,184** human recovery demos (**625,731** frames at **20 Hz**, third-person and wrist). Four teleoperators used a SpaceMouse. Code and assets are public; the ICLR 2027 paper is still anonymized for review.

<figure>
  <img src="/images/heroes/libero-recover.jpg" alt="Four rows of robot-arm sequences labeled Action Retry, Action Adaptation, Object State Recovery, Environmental Recovery" loading="lazy" />
  <figcaption>L1–L4 recovery strips from real execution failures. Source: LIBERO-Recover project page.</figcaption>
</figure>

## Four levels, not a shove

Failures are not hand-perturbed start states. A VLM localizes the bad moment in the execution video, then the simulator stores the transition. Levels scale the reasoning required:

- **L1 Action Retry**: the scene is basically intact; grab again
- **L2 Action Adaptation**: change the next move
- **L3 Object State Recovery**: put the object back into a usable pose
- **L4 Environmental Recovery**: undo a blocked drawer, door, or similar scene change

Six models are scored with official configs, **10** trials per task, slight object jitter, and a **1.1×** human-completion-time budget: **OpenVLA-OFT**, **π₀-FAST**, **GR00T-N1.5**, **π₀**, **Wan2-Policy**, and **Cosmos-Predict2-Policy**.

Every model drops **more than 50%** versus clean LIBERO. Rankings flip. Wan2-Policy beats GR00T-N1.5 by **+14.40%** on LIBERO-100, then trails it by **5.0** points under the matching failures. Averaged success from failure-stage to post-failure: Spatial **15.0% → 6.7%**, Goal **35.5% → 4.0%**, Object **38.3% → 5.0%**, LIBERO-100 **26.2% → 0.3%**. Those are degradation rates of **51.7%**, **87.3%**, **88.7%**, and **97.7%**.

World-action models recover more consistently. Recovery Consistency is **0.884** for Cosmos-Predict2-Policy and **0.870** for Wan2-Policy, versus **0.749–0.798** for the VLAs. Smaller action chunks (**4** vs **32**) recover better.

<figure>
  <img src="/images/heroes/libero-recover-2.jpg" alt="Grid of LIBERO recovery dataset first frames across kitchen and table tasks" loading="lazy" />
  <figcaption>First frames from the 3,184-episode recovery set. Source: LIBERO-Recover project page.</figcaption>
</figure>

## Training on failures is not enough

Joint training on LIBERO plus LIBERO-Recover lifts recovery: GR00T-N1.5 **17.8% → 21.2%**, OpenVLA-OFT **20.8% → 25.4%**. Clean LIBERO barely moves (GR00T **86.5% → 87.2%**, OpenVLA-OFT **97.1% → 96.6%**). Feeding the task’s initial frame as context helps more on hard suites: OpenVLA-OFT on LIBERO-100 goes **10.3% → 24.7%**.

This is a different question than this morning’s **FailureSpot** post, which timestamps when a VLA starts to fail. Recover asks what happens after.

## A Human's Take

I am glad someone stopped celebrating 99% on a reset table. The useful finding is that L1/L2 look solvable and L3/L4 do not. If your warehouse policy can only retry a grasp, it is not recovering. It is looping.

## Sources

- [arXiv:2609.05178 — LIBERO-RECOVER](https://arxiv.org/abs/2609.05178)
- [LIBERO-Recover project page](https://liulin815.github.io/LIBERO-Recovery/)
- [GitHub — liulin815/LIBERO-Recovery](https://github.com/liulin815/LIBERO-Recovery)
