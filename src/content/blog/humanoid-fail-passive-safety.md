---
title: "Industrial Humanoids Hit the Fail-Passive Gap: E-Stop Logic That Assumes Legs Can Fall"
description: "A new study maps why ISO-style power-removal safety breaks for balancing bipeds and instruments the gap on a Unitree G1 EDU cell with Siemens fail-safe gear."
pubDate: 2026-08-05
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/humanoid-fail-passive-safety.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Industrial humanoids are constrained less by dancing demos than by **functional safety certification**. A new paper (arXiv:2608.02809, Aug 3, 2026) names the core mismatch: the **fail-passive gap**. On a fixed arm, removing power is a safe stop. On a **balancing biped**, removing power is often an **uncontrolled fall** — so classical de-energization is itself a hazard.

<figure>
  <img src="/images/heroes/humanoid-fail-passive-safety.jpg" alt="Unitree G1 in a Siemens light-curtain cell with fail-safe PLC diagram" loading="lazy" />
  <figcaption>Semi-enclosed G1 cell with light curtain and SIMATIC fail-safe stack. Source: arXiv:2608.02809 HTML figure.</figcaption>
</figure>

## What “fail-passive” assumes

Standards such as **ISO 13849-1 / EN 60204-1** are built around machines whose safe state is passive (springs, brakes, gravity). The authors argue a legged robot’s safe state is **actively controlled**. They use a **certified external safety chain** — light curtain, emergency stop, fail-safe inputs, fail-safe PLC, wireless **PROFIsafe** — as an instrument: the external chain is closed and quantifiable (PFH<sub>D</sub>, PL/SIL language), so residual uncertifiable risk sits in the **robot-side reaction chain**.

Using a **Siemens S7-1500** emergency-stop reference, they note the certifiable reaction is **contactor-based power removal (Stop Category 0)** — exactly what a balancing humanoid cannot treat as “safe.” They **deliberately do not claim** end-to-end certified **PL e / SIL 3** for the full humanoid system.

## Feasibility cell

Validation is on a **Unitree G1 EDU** pick-and-place cell in a **3 m × 1.5 m** semi-enclosed workspace. Contributions listed in the abstract include:

- Humanoid-specific analysis of the **active safe state** (fall-as-hazard, single-support stop bounds, balancing-policy residual risk, **ISO 13855** separation ideas).
- A provenance-labeled **timing budget**.
- Hosting an industrial **software-defined automation (SDA)** controller co-located with the balancing policy for PROFINET/PROFIsafe reception on an IEC 61131-3 interface — while stressing that the G1’s onboard compute is **not** safety-rated hardware, so the endpoint is **not** a certified safety runtime.

<figure>
  <img src="/images/heroes/humanoid-fail-passive-safety-2.jpg" alt="G1 pick-and-place task pickup phase in the safety cell" loading="lazy" />
  <figcaption>Pickup phase of the experimental pick-and-place cell. Source: arXiv HTML.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/humanoid-fail-passive-safety-3.jpg" alt="G1 transport phase in the industrial cell" loading="lazy" />
  <figcaption>Transport phase under the instrumented safety layout. Source: arXiv HTML.</figcaption>
</figure>

## A Human's Take

This is the article factory people should read before shipping bipeds next to humans. Demos sell; **Stop Category 0** kills the balance loop. Localizing the gap to the robot-side reaction — and refusing to claim full SIL on a non-safety-rated brain — is the kind of honesty that actually moves industrial deployment forward.

## Sources

- [arXiv:2608.02809 — Toward Certified Functional Safety for Industrial Humanoid Robots](https://arxiv.org/abs/2608.02809)
- [arXiv HTML full text](https://arxiv.org/html/2608.02809v1)
