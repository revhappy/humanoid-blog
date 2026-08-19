---
title: "HODAgent Lets a G1 Take a New Order Mid-Stride"
description: "A System-2 service agent on Unitree G1 hits 92% on atomic skills and 63.3% on full tasks, and beats ReAct by up to 18.9 points in sim."
pubDate: 2026-08-19
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/hodagent-on-demand-3.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most service demos assume the goal is frozen before the robot moves. **HODAgent**, posted to arXiv on Aug. 18, is built for the opposite: a new request while the body is already walking.

The authors, corresponding at **chenj81@xiaopeng.com**, call it a System-2 embodied agent. In **164** interactive simulation cases it reaches **84.8%** and **91.5%** Joint Success under two Qwen backbones, beating a shared-protocol ReAct baseline by **9.8** and **18.9** points. On a physical **Unitree G1**, pass rates are **92%** atomic, **72%** composite, and **63.3%** for complete tasks.

<figure>
  <img src="/images/heroes/hodagent-on-demand-3.jpg" alt="Unitree G1 progressive tests: talk and turn, move then wave, find a person in green and high-five" loading="lazy" />
  <figcaption>Progressive G1 tests: one skill, then a sequence, then a full help episode. Source: Chen et al., arXiv:2608.17584.</figcaption>
</figure>

## What “on demand” means here

The paper’s example: a user asks for directions, then changes the destination while the robot is navigating. The agent has to keep the valid progress, drop the rest of the old plan, and check the new outcome before it says it is done.

Four modules share one episode: **Env-Interactor**, **Planner**, **Executor**, and hierarchical **Memory**. Interaction stays live during motion. Planning fires at decision points. Execution can overlap the next plan near the end of a trajectory.

They keep System-2 above reusable skills (System-1) and hardware control (System-0). The same high-level contract talks to **Isaac Sim** and to the G1 through a GR00T/SONIC stack. The paper also lists **XPeng IRON** as a physical platform the shared mechanisms are designed to cover. Privileged sim tricks such as teleport resets are not offered on the real robot.

<figure>
  <img src="/images/heroes/hodagent-on-demand.jpg" alt="Timeline of a user changing destination while HODAgent cancels navigation and replans" loading="lazy" />
  <figcaption>The user changes the goal mid-navigation. The agent cancels, keeps context, and redirects. Source: Chen et al., arXiv:2608.17584.</figcaption>
</figure>

## How they scored it

Simulation uses a frozen workflow and a User Agent with four personas (novice-guided, time-limited, neutral-cooperative, evidence-cautious) across **22** indoor scenes from SAGE-3D. **15** of the **164** cases interrupt during navigation. Joint Success requires both a rule-based Task PASS and a Service Judge PASS on the same episode, so fluent talk cannot cover a missed walk.

On the G1 they escalate:

- Atomic: talk, walk, turn, wave, halt-and-stand (**46/50** combined)
- Composite: speak while moving, move-then-wave, take a correction during motion (**36/50**)
- Tasks: find a person in a specified color and high-five (**5/10**); walk up, wave, say hello (**8/10**); bypass an obstacle then greet (**6/10**)

A command receipt is not counted as success. Audio, video, and robot state have to show the outcome.

<figure>
  <img src="/images/heroes/hodagent-on-demand-2.jpg" alt="Diagram of HODAgent shared contract with Isaac Sim and physical G1 backends" loading="lazy" />
  <figcaption>One agent contract, two backends. Safety and admissibility stay below System-2. Source: Chen et al., arXiv:2608.17584.</figcaption>
</figure>

The authors are explicit about what this is not: no new low-level policy, no general VLA, no hard real-time full-duplex guarantee, and no claimed sim-to-real transfer of the service tasks themselves.

## A Human's Take

The useful idea is temporal: keep listening while the legs are busy, and do not declare victory from a tool return. The G1 numbers falling from 92% to 63% as the task gets longer is the honest slope.

I want the interruption cases on hardware, not just “move then wave.” If a guest changes the destination in a real lobby, that is the product. Until then, this is a clean System-2 wrapper with receipts, which is still rarer than it should be.

## Sources

- [arXiv:2608.17584 — HODAgent: Towards On-Demand, Responsive Humanoids for Physical World Human Interaction](https://arxiv.org/abs/2608.17584)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.17584v1)
