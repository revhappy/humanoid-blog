---
title: "StableMimic: One G1 Policy for Dance Tracking and Getting Back Up"
description: "SUSTech’s StableMimic blends tracking and post-fall recovery on Unitree G1 with 100/100 push recoveries and real hardware demos."
pubDate: 2026-08-06
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/stablemimic-recovery.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most humanoid motion trackers look fine until they hit the floor. Then they either thrash after an unreachable reference or hand off to a separate stand-up controller. **StableMimic**, a SUSTech preprint posted **August 3, 2026** (arXiv:2608.02385), keeps **tracking and recovery in one deployable policy** on the **Unitree G1**.

<figure>
  <img src="/images/heroes/stablemimic-recovery.jpg" alt="StableMimic method overview with dual experts and proprioceptive gate" loading="lazy" />
  <figcaption>Method overview: tracking expert, recovery expert, and a proprioceptive soft gate. Source: arXiv:2608.02385 HTML.</figcaption>
</figure>

## The idea

Training expands beyond the normal tracking corridor by resetting into **perturbed get-up** states (prone, supine, off-balance). Two experts share the same observation interface: one for commanded motion, one for recovery. A gate that sees **proprioception only** blends their actions continuously — no hard recovery switch and no get-up reference at deploy time.

The authors train with hidden successor-state rewards shaped by human get-up references, then strip that library from the exported Actor. At runtime the policy still receives the live command and onboard proprioception; it does not receive recovery phase IDs or trajectory lookup.

## Numbers from the paper

On the full retargeted **LAFAN1 dance** subset, StableMimic reports the **lowest error on all four tracking metrics** among five compared methods (MPBPE **28.53 mm**, plus joint-angle, joint-velocity, and relative-acceleration terms).

For falls, every method faces the **same 100** pre-generated torso pushes (25 per direction, 525–575 N for 0.2 s). StableMimic **recovers in 100/100** and posts the best scores on **six of seven** post-fall motion and load measures (limb speed, limb travel, joint speed, workspace, torque, energy). Real G1 dance and standing-reference policies are shown recovering and resuming the command with bounded limb motion — qualitative hardware transfer, not a certified safety claim.

<figure>
  <img src="/images/heroes/stablemimic-recovery-2.jpg" alt="Simulation grid of Unitree G1 fall and get-up sequences" loading="lazy" />
  <figcaption>Matched simulation rollouts: fall, structured recovery, command reacquisition. Source: arXiv:2608.02385.</figcaption>
</figure>

## Why it matters next to pure trackers

A tracking-only baseline (BeyondMimic-style) does not recover under this protocol and shows the largest post-fall limb motion and actuator load — consistent with chasing an unreachable dance reference on the ground. Recovery-capable baselines (KungFuAthlete, BFM-Zero) recover more often, but StableMimic’s matched numbers favor lower workspace and load under the paper’s protocol.

<figure>
  <img src="/images/heroes/stablemimic-recovery-3.jpg" alt="Real Unitree G1 hardware sequences for dance and standing recovery" loading="lazy" />
  <figcaption>Real G1 deployment stills for dance tracking and standing-reference recovery. Source: arXiv:2608.02385.</figcaption>
</figure>

## A Human's Take

This is the right failure mode to study. Humanoids will fall; the question is whether the recovery is a thrash or a structured get-up that hands control back to the task. StableMimic’s “no get-up command at deploy” design is what you’d want on a teleop or dance stack. The 100-trial sim protocol is solid; next bar is outdoor field hours and third-party G1 replications.

## Sources

- [arXiv:2608.02385 — StableMimic abstract](https://arxiv.org/abs/2608.02385)
- [arXiv HTML — StableMimic full paper](https://arxiv.org/html/2608.02385v1)
