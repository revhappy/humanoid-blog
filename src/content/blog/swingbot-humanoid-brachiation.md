---
title: "SwingBot Teaches a Humanoid to Brachiate, Hooks and All"
description: "Fudan’s CoRL 2026 paper puts a 20-DoF humanoid on overhead bars with passive wrist hooks and a residual-keyframe RL stack."
pubDate: 2026-09-12
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/swingbot-humanoid-brachiation.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most learned locomotion still wants a floor. **SwingBot**, from **Yujie Xiong**, **Peng Zhai**, and colleagues at **Fudan University**, is a CoRL 2026 paper that trains a high-DoF humanoid to move by hanging: release, swing, capture, repeat.

The hardware is a **Mini Pi plus** with **22** actuated joints. They lock the two head motors and control **20** DoF (12 leg, 8 arm). Passive ABS-printed hooks sit at the wrists. The robot weighs **10.15 kg**. Arm joints are limited to **10 Nm**.

<figure>
  <img src="/images/heroes/swingbot-humanoid-brachiation.jpg" alt="Gibbon brachiation stills above a humanoid swinging on overhead bars" loading="lazy" />
  <figcaption>Primate swing phases mapped onto a hook-handed humanoid. Source: Xiong et al., arXiv:2609.10283 / SwingBot project page.</figcaption>
</figure>

## Why plain RL stalls

The paper’s diagnosis is blunt. Random PPO almost never finds the long-horizon **release–swing–capture** sequence. The deployed actor also does not get reliable measurements of how far the body has moved along the current bar segment, or whether a hook is actually in contact.

SwingBot splits that into two pieces:

- **Residual keyframe guidance.** Sparse left- and right-leading postures, taken from gibbon video, bias early rollouts. A blend coefficient anneals over **2,000** epochs until the policy owns the joints.
- **Privileged RSSM.** A recurrent world model reconstructs segment-relative displacement and left/right hook contact from proprioception. The actor sees a **64-D** latent at **50 Hz**. True privileged variables stay in the critic.

Training runs in **Isaac Lab**. Successful terminal states seed the opposite leading hand so consecutive swings actually connect.

<figure>
  <img src="/images/heroes/swingbot-humanoid-brachiation-2.jpg" alt="Timed photo strip of a humanoid releasing, swinging, and recapturing a bar" loading="lazy" />
  <figcaption>Left- and right-hand sequences on the physical bar. Source: SwingBot paper HTML, Figure 4.</figcaption>
</figure>

## What transferred

On hardware, command switches were triggered by a remote for safety. A swing counted if the robot handed off, stayed supported, and captured the next bar within **1.5 s**. Five continuous trials per condition, planned for eight swings:

| Condition | Single-swing | All-8 completion |
|---|---|---|
| Nominal | 26/28 (92.86%) | 3/5 (60%) |
| Payload (hanging plate) | 22/25 (88.00%) | 2/5 (40%) |
| External disturbance | 26/29 (89.66%) | 2/5 (40%) |
| Bar-spacing variation | 32/34 (94.12%) | 3/5 (60%) |

The robustness strip shows pushes, pulls, a hanging plate, and bars marked **22 cm** and **28 cm**. Failures in long runs mostly showed up after several transitions, when shoulder motors heated and the robot could hang but not complete the next capture.

Simulation ablations across 20 seeds: without residual keyframes, the all-8 protocol fails. With keyframes, adding the RSSM latent lifts all-8 success from **57.28%** to **61.27%** at a 1.5 s switch, and from **43.12%** to **48.86%** at 1.0 s.

<figure>
  <img src="/images/heroes/swingbot-humanoid-brachiation-3.jpg" alt="Humanoid recovering from pushes, pulls, a hanging plate, and two bar spacings" loading="lazy" />
  <figcaption>Push, pull, payload, and spacing tests. Source: SwingBot paper HTML, Figure 5.</figcaption>
</figure>

The authors call this the first real-robot brachiation on a high-DoF humanoid. Limits they list: no external perception, so bars have to stay in the trained spacing range; passive hooks, not hands; and motor heating on long traversals.

## A Human's Take

I am here for a robot that treats monkey bars as a locomotion mode, not a party trick. The receipts I care about are the closed-loop handoffs and the fact that the legs are doing work, not just the hooks. Heating after a handful of swings is the honest next boss. If they swap the hooks for grippers and add vision, this stops being a bar course and starts looking like a way through a pipe rack.

## Sources

- [SwingBot project page](https://ttbray.github.io/SwingBot/)
- [arXiv:2609.10283 — SwingBot: Learning Whole-Body Brachiation for Humanoid Robots](https://arxiv.org/abs/2609.10283)
