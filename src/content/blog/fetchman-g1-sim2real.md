---
title: "FetchMan Walks a G1 to a Bowl With Zero Real Training Data"
description: "UCLA trains visual loco-manipulation in 150k simulated scenes, then deploys zero-shot on a Unitree G1 at 73.3% success."
pubDate: 2026-08-19
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/fetchman-g1-sim2real.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Omar Rayyan** and colleagues at **UCLA** (with **Ai2** and the **University of Washington**) trained a visual humanoid policy entirely in simulation and put it on a real **Unitree G1** with no real-world fine-tuning.

The single-object reach-and-pick policy walks to a target and grasps it across unseen scenes at **73.3%** success (**22/30** loco-manipulation trials). Behavior cloning alone sat at **56.7%** on hardware. They call the stack **FetchMan**. The paper landed on arXiv dated Aug. 17.

<figure>
  <img src="/images/heroes/fetchman-g1-sim2real.jpg" alt="FetchMan teaser: G1 walking to a bowl in a lab after simulation training" loading="lazy" />
  <figcaption>Zero-shot G1 rollouts after simulation-only training. Source: Rayyan et al., arXiv:2608.17027 / FetchMan project page.</figcaption>
</figure>

## Cloning hits a wall. RL walks through it.

They script a privileged controller in **MolmoSpaces** houses, collect about **150,000** bowl-pick demonstrations (~650 hours of robot experience, ~40 GPU-hours on one L40S), then clone a flow-matching policy that sees head fisheye, wrist RGB, and a small proprioceptive vector.

Scaling demonstrations from 5k to 50k lifts simulated loco-manipulation from **40%** to **67%**. Going to 150k does nothing. The scripted expert advances through hidden phases the policy cannot see, so more of the same data cannot teach the handoff.

**Flow-GRPO** on a single sparse reward (1 for a successful fetch, 0 otherwise) pushes simulated loco-manipulation from **67%** to **83%**. Manipulation-only barely moves. The gain is in walking up and then grasping, not in the grasp itself.

<figure>
  <img src="/images/heroes/fetchman-g1-sim2real-2.jpg" alt="Real G1 picking bowls: behavior cloning vs BC plus RL" loading="lazy" />
  <figcaption>Same lab, cloned policy versus the RL-refined one. Source: Rayyan et al., arXiv:2608.17027.</figcaption>
</figure>

Two choices carry the transfer. A frozen **DINOv3** encoder beats SigLIP; SigLIP drops to **0%** loco-manipulation on hardware. Delta-action targets beat absolute joints, which also go to **0%** on the full task. The G1 command is 15-D: base velocity and height through a pretrained **SONIC** lower-body controller, plus waist, right arm, and gripper.

A text-conditioned multi-object variant, trained on **350k** demonstrations, reaches **40%** after cloning and **62%** after GRPO in simulation. Real G1 runs are qualitative and less robust than the bowl specialist.

## What they are not claiming

The policy is stateless: one frame, no history. The legs stay on SONIC. The task is fetch, not a general household agent. They release **FetchMan-Bench** so other methods can use the same held-out scenes.

<figure>
  <img src="/images/heroes/fetchman-g1-sim2real-3.jpg" alt="Head fisheye and wrist camera views the FetchMan policy sees in simulation" loading="lazy" />
  <figcaption>The two streams the policy actually gets. Source: FetchMan project page.</figcaption>
</figure>

## A Human's Take

This is the locomotion recipe applied to “walk over and pick that up,” and the ablation is the story: more synthetic demos stop helping, a sparse RL pass on the handoff does help, and the wrong vision encoder zeros the real robot.

**73%** on a G1 with no real data is a strong zero-shot number for this task. It is still a bowl in a lab, with a frozen gait and a right arm. I will get excited when the multi-object model stops being the weaker cousin.

## Sources

- [arXiv:2608.17027 — FetchMan: Learning Visual Humanoid Loco-Manipulation Policies from Simulated Experiences](https://arxiv.org/abs/2608.17027)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.17027v1)
- [FetchMan project page](https://orayyan.com/fetchman)
