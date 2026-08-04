---
title: "CLIFT Fine-Tunes Closed Gemini Robotics On-Device into Near-Perfect Humanoid Skills"
description: "Berkeley-led CLIFT turns GROD’s managed SFT API into a closed-loop flywheel on Unitree G1, reaching 96–100% success without opening model weights."
pubDate: 2026-08-03
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/clift-gemini-robotics-teaser.png"
readTime: "5 min read"
featured: false
draft: false
---

The strongest robot foundation models are often closed-weight. You get a managed supervised fine-tuning (SFT) API: ship data, get a tuned policy, no gradients, no weights, no RL knobs. That setup is great for imitation—and a brick wall for classical on-robot reinforcement learning.

A team spanning UC Berkeley, Google DeepMind, and NVIDIA Research just posted **CLIFT** (Closed-Loop Iterative Fine-Tuning) on arXiv (2607.29172, 31 Jul 2026): a way to push closed **Gemini Robotics On-Device (GROD)** toward task mastery on a real Unitree G1 **without opening the model box**.

<figure>
  <img src="/images/heroes/clift-gemini-robotics.png" alt="CLIFT flywheel diagram for closed-weight Gemini Robotics" loading="lazy" />
  <figcaption>CLIFT turns deployment rollouts into API-compatible SFT data with advantage tokens. Source: arXiv:2607.29172 HTML figure.</figcaption>
</figure>

## The problem in one sentence

Demonstration-only SFT trains on human teleop; deployment runs under the policy’s own closed-loop distribution—especially ugly on humanoids where VLA actions couple tightly to a whole-body controller, latency, and contact.

## What CLIFT does

1. Bootstrap π₀ by SFT on teleoperated demos through the managed API.
2. Deploy the policy; score rollouts with a **preference-calibrated dense reward** (human pairwise prefs select VLM reward candidates, then distill into a reusable reward model).
3. Label action chunks with retrieval-based **positive/negative advantage tokens** (compare returns against chunks from visually similar states).
4. Submit the relabeled data back through the same SFT API; repeat for flywheel cycles.

No access to weights, losses, or action likelihoods. The reward signal lives entirely in the data you send.

## Hardware and tasks

- **Robot:** Unitree G1, dual arms, dexterous hands, head RGB cameras.
- **Control:** Hierarchical whole-body scheme (upper-body joint targets + lower-body planar velocity/yaw) tracked by an RL whole-body controller.
- **Tasks:** Box packing, cup insertion, bimanual plate handover—all contact-rich, with balance shifting the camera and contact geometry continuously.
- **Demos:** ~2 hours of whole-body VR teleop per task.

<figure>
  <img src="/images/heroes/clift-gemini-robotics-tasks.png" alt="Unitree G1 task suite: box packing, cup insertion, plate handover" loading="lazy" />
  <figcaption>Contact-rich G1 task suite used for CLIFT evaluation. Source: CLIFT project materials / arXiv HTML.</figcaption>
</figure>

## Results (authors’ reported success rates over 100 trials)

Dense advantage-conditioned CLIFT on GROD after two flywheel cycles:

| Task | Demo SFT → after CLIFT |
|------|-------------------------|
| Box packing | 93% → **100%** |
| Cup insertion | 70% → **98%** |
| Bimanual plate handover | 53% → **96%** |

Same pipeline on open-weight **π₀.₅** also improves (e.g. plate handover 5% → 30%), but absolute ceilings stay far below GROD. An invasive FiLM-style adaptation of π₀.₅ still trails API-only GROD on the hard tasks—evidence the authors use for “base model strength matters even under a narrow interface.”

The paper also reports **emergent behaviors** absent from demos: reorienting a box before grasp; retrying a failed cup insertion.

<figure>
  <img src="/images/heroes/clift-gemini-robotics-results.png" alt="Success rate charts across CLIFT flywheel cycles" loading="lazy" />
  <figcaption>CLIFT success rates across two flywheel cycles on GROD and π₀.₅. Source: CLIFT project results figure.</figcaption>
</figure>

## A Human's Take

Here’s what I care about: closed models are not a dead end if the API accepts the right training tuples. CLIFT is less “magic RL” than a careful cookbook for turning on-device rollouts into preference-shaped SFT. The G1 numbers are lab tasks with fixed eval layouts—not a shift on a factory line—but near-perfect success after two cycles, with retries that weren’t in the demos, is a real signal. Watch whether managed robot APIs start supporting this flywheel as a first-class workflow, and whether third parties can reproduce the GROD numbers on their own fleets.

## Sources

- [arXiv:2607.29172 — CLIFT paper](https://arxiv.org/abs/2607.29172)
- [arXiv HTML full text](https://arxiv.org/html/2607.29172v1)
- [CLIFT project site](https://thomaschen98.github.io/clift)
