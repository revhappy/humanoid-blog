---
title: "ULOHA Is ALOHA in a Tank, Bubbles and All"
description: "Osaka and Kobe’s underwater bimanual kit learns nine tank tasks with ACT, then watches bubbles cut sequential transfer from 10/10 to 3/10."
pubDate: 2026-09-19
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/uloha-underwater.jpg"
readTime: "4 min read"
featured: false
draft: false
---

ALOHA made bimanual imitation cheap in air. **ULOHA** is the same idea with the followers in water. **Masato Kobayashi** (Osaka / Kobe) and **Takeru Tsunoori** posted [arXiv:2609.19200](https://arxiv.org/abs/2609.19200) on **16 September 2026**, with a [project stub](https://mertcookimg.github.io/uloha/) the same day.

Two dry leader arms drive two waterproof followers. Three cameras watch. LeRobot does record, train, and rollout. The authors say they will release the hardware designs.

<figure>
  <img src="/images/heroes/uloha-underwater.jpg" alt="ULOHA tank with dry leader arms and underwater followers doing teleop and learned catch, lid, and sponge hand-over" loading="lazy" />
  <figcaption>Leaders in air, followers in the tank. Source: Kobayashi and Tsunoori, arXiv:2609.19200.</figcaption>
</figure>

## Waterproof cables are the design constraint

Leaders use **DYNAMIXEL XM430-W350**. Followers use **XW430-T333**, IP68 in fresh water to **1 m** for **24 h**. Each follower motor needs its own waterproof cable, so there is no daisy-chain. Custom 3D-printed structure leaves clearance at **J6** and a hard stop at **J4** so the connector does not get hit.

Costs in the paper: about **USD 2,600** per leader and **USD 7,000** per follower. The tank is **1.2 × 0.6 × 0.6 m**. Cameras are **TIER IV C1-120**, captured at **1920×1280** and resized to **480×320** at **30 fps**.

<figure>
  <img src="/images/heroes/uloha-underwater-2.jpg" alt="Labeled ULOHA leader and follower arms with joint numbers, cameras, and Dynamixel specs" loading="lazy" />
  <figcaption>Custom leader and follower hardware. Source: Kobayashi and Tsunoori, arXiv:2609.19200.</figcaption>
</figure>

## Nine underwater tasks

ACT is the workhorse. Ten demos on seven tasks, fifty on the two sponge tasks. Ten evaluation trials each:

| Task | ACT |
| --- | ---: |
| Block hand-over | 10/10 |
| Sequential transfer | 10/10 |
| Bimanual lifting | 10/10 |
| Block stacking | 9/10 |
| Cooperative insertion | 9/10 |
| Lid opening | 7/10 |
| Hand-over then place | 6/10 |
| Surface hand-over (sponge) | 4/10 |
| Release and catch (sponge) | 3/10 |
| **Total** | **68/90** |

On block hand-over, **ACT**, **Diffusion Policy**, and **SmolVLA** all hit **10/10** from the same ten demos.

Bubbles are the cheap robustness test. Two aerators in the workspace, same checkpoints: sequential transfer falls from **10/10** to **3/10**. Bimanual lifting stays **10/10**.

Release-and-catch cares about how many actions you commit. The same ACT checkpoint is **3/10** at a 100-step execute horizon, **6/10** at 30 steps, and **3/10** again at 15. SmolVLA with real-time chunking is **6/10** versus **4/10** synchronous.

A separate single-arm pick-and-place: train in air, test in water (or the reverse) is **0/10**. Mix five demos from each medium, keep the total at ten, and the same ACT policy is **10/10** in both. An unseen black rubber block underwater: **7/10**.

## A Human's Take

The sponge numbers are the honest part of the paper. A block hand-over at 10/10 is a tank toy. Catching a rising cellulose sponge at 3/10, then 6/10 when you stop replaying a three-second chunk, is the actual underwater problem: the object does not sit still after you let go. I would not call this OceanOne. I would call it the first ALOHA-shaped kit that lets you measure how badly bubbles wreck a policy you trained in clear water.

## Sources

- [arXiv:2609.19200 — ULOHA: An Underwater Bimanual Robot System for Robot Learning](https://arxiv.org/abs/2609.19200)
- [arXiv HTML — hardware and task figures](https://arxiv.org/html/2609.19200v1)
- [ULOHA project page](https://mertcookimg.github.io/uloha/)
