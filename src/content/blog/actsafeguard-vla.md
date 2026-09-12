---
title: "ActSafeGuard Puts Hard Joint Limits Inside Flow-Matching VLAs"
description: "SJTU’s ray-scaling layer hits 100% step safety on π0.5 and Fast-WAM, then keeps a real ALOHA arm on a magnetic-ball track."
pubDate: 2026-09-12
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/actsafeguard-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Flow-matching VLAs will happily emit a joint command that the arm cannot execute. **ActSafeGuard**, from **Jianming Ma**, **Yue Gao**, and colleagues at **Shanghai Jiao Tong University** and the **Shanghai Institute of Innovation**, is a parameter-free layer that rescales each discrete flow step so the next action stays inside a convex feasible set.

The paper, posted **10 September**, reports a **100%** step safety rate on **π0.5** and **Fast-WAM** while matching or beating other constrained methods on task success. The same operator runs at train time and at inference, so the policy is not trained unconstrained and then clipped at the last second.

<figure>
  <img src="/images/heroes/actsafeguard-vla.jpg" alt="Four-frame strip of a robot arm picking a green cube and placing it in a paper cup" loading="lazy" />
  <figcaption>Real AgileX ALOHA pick-and-place of a green cube into a cup. Source: Ma et al., arXiv:2609.11697.</figcaption>
</figure>

## How the ray-scaling works

The action head still predicts an unconstrained velocity. ActSafeGuard turns that into a direction and a scale in **[0, 1]**. If the full step would cross a joint or velocity bound, the scale shortens it exactly to the boundary. If the step is already feasible, the layer leaves it alone.

Because that scale is differentiable, gradients slide along the active facet instead of vanishing at a clip. An ablation that stop-gradients the scale still gets 100% safety at test time, but on *place shoe* under position-plus-velocity constraints, success collapses from **98.0%** to **3.0%**. The policy has to learn the moving boundary, not just survive a filter.

## Numbers in RoboTwin

Tests run in **RoboTwin** on a bimanual **ALOHA-Agilex** (two 6-DoF arms plus grippers, **14-D** action). Four tasks: lift pot, place shoe, hanging mug, place empty cup. Constraints are a static joint box, then the same box plus one-step velocity limits.

Training on feasible demos is not enough. The unconstrained **π0.5** baseline’s mean step safety rate is **51.42%** under position constraints and **48.09%** with velocity limits added. **Fast-WAM** drops to **22.99%** and **20.01%**.

With ActSafeGuard in the loop, constrained methods all hit **100%** step safety. Mean task success for ActSafeGuard:

| Backbone | PosCons | PosCons + VelCons |
|---|---|---|
| π0.5 | **80.25%** | **81.50%** |
| Fast-WAM | **82.00%** | **83.00%** |

On π0.5, that is above the unconstrained baseline’s **75.25%** mean success. GaugeFlow, a training-aware gauge map, cannot handle the time-varying velocity set and is marked N/A there.

<figure>
  <img src="/images/heroes/actsafeguard-vla-2.jpg" alt="Four-frame strip of a PIPER arm guiding a piece along a numbered wooden track" loading="lazy" />
  <figcaption>Guide-the-ball track on the real arm. Source: arXiv:2609.11697, Figure 4.</figcaption>
</figure>

## Real arm

On a physical AgileX ALOHA they fine-tune π0.5 on **50** demos per task and run **5** rollouts each.

- **Pick green cube:** both baseline and ActSafeGuard go **5/5**.
- **Guide the ball:** a magnetic wand has to stay in an L-shaped corridor. Baseline **4/5**, ActSafeGuard **5/5**. Trajectory plots show the unconstrained policy leaving the corridor.

The L-shaped corridor is non-convex. The authors say the same ray-scaling works if you can compute the boundary intersection.

Limits they list: constraints still have to be written down, and discovering them from perception is future work.

## A Human's Take

A VLA that is “usually” inside joint limits is not a product. The stop-gradient collapse on place shoe is the result I would put on a slide: safety at test time without boundary-aware training is a filter, not a policy. Five real rollouts is a thin field test, but the cube-in-cup strip and the track strip are at least on metal, not only in RoboTwin.

## Sources

- [arXiv:2609.11697 — ActSafeGuard: Differentiable and Training-Aligned Constraint Enforcement for Flow-Matching Policies](https://arxiv.org/abs/2609.11697)
- [arXiv HTML — ActSafeGuard paper with figures](https://arxiv.org/html/2609.11697)
