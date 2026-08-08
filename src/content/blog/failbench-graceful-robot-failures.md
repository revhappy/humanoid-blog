---
title: "FailBench Asks What Happens When the Robot Failure Is Inevitable"
description: "George Mason’s ICRA 2026 paper scores failure impact (probability × severity) and ships a MuJoCo injector for household drop and joint faults."
pubDate: 2026-08-08
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/failbench.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most robot “safety” papers try to **prevent** failures. **Failing Gracefully**, accepted to **ICRA 2026** and posted **August 5, 2026** as [arXiv:2608.05313](https://arxiv.org/abs/2608.05313) from **George Mason University’s RobotiXX Lab**, starts from the opposite premise: some crashes, freezes, and drops will still happen — so plan so the **damage is smaller**.

<figure>
  <img src="/images/heroes/failbench.jpg" alt="Hot water bottle carried close to a person versus farther away to reduce spill risk" loading="lazy" />
  <figcaption>Same task, different lateral offset: failure impact changes even if the task still succeeds. Source: arXiv:2608.05313 HTML.</figcaption>
</figure>

## Impact = probability × severity

They split the robot into hazardous components (body, carried object, contents) and the scene into entities (people, furniture, fragile goods). At each state they estimate:

- **Interaction probability** under an assumed failure (geometric overlap / swept volume style analysis for drop cases)
- **Severity** of that robot-component / entity pair (hot soup near a human scores worse than cold water near a wall)

The planner objective adds a weighted sum of expected impact to ordinary motion cost — so “shorter path” can lose to “if I drop this, it misses the person.”

## FailBench

**FailBench** is a **MuJoCo** harness with household scenes, planners (A\*, RRT-family, CHOMP/STOMP, DWA, etc.), and a **failure injector** covering actuators (shutdown, loose joint, stuck), sensors (noise, bias, dropout), grippers, and power faults with instant or gradual onset.

They validate the metric on four Franka pick-and-place trajectories with simulated object drops (**60** rollouts each, **25%** drop chance). Theoretical safety cost ranks do not always match observed contact cost — trajectory 2 is efficient on paper but harsher in sim — which is exactly why they want a public failure bench instead of vibes.

<figure>
  <img src="/images/heroes/failbench-2.jpg" alt="Four colored pick-and-place trajectories trading safety and path length" loading="lazy" />
  <figcaption>Four candidate trajectories with different motion vs safety trade-offs. Source: arXiv:2608.05313 HTML.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/failbench-3.jpg" alt="Contact forces visualized after shoulder joint shutdown failure" loading="lazy" />
  <figcaption>Contact visualization after a joint shutdown fault. Source: arXiv:2608.05313 HTML.</figcaption>
</figure>

## A Human's Take

Home robots will not be certified on “never fail.” They will be judged on **how ugly the failure looks**. Scoring drop geometry against hot liquid and pets is the right product question. The open work is automatic severity labels (they flag VLMs) and wiring this cost into a planner that still finishes dinner before the battery dies.

## Sources

- [arXiv:2608.05313 — Failing Gracefully abstract](https://arxiv.org/abs/2608.05313)
- [arXiv HTML — full paper (FailBench details)](https://arxiv.org/html/2608.05313v1)
