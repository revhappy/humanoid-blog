---
title: "A Flying Humanoid Walks on a Ceiling, Four Steps at a Time"
description: "JSK’s IEEE RA-L paper shows thrust-rate whole-body MPC walking a flying humanoid 0.15 m along a lab ceiling."
pubDate: 2026-09-19
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/jsk-anti-gravity-walking-3.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most flying humanoids pick a lane: hover, or walk on the floor. **Kazuki Sugihara** and **Kei Okada** at the University of Tokyo’s **JSK** lab want a third option. Their IEEE *Robotics and Automation Letters* paper, posted on arXiv as [2609.07544](https://arxiv.org/abs/2609.07544), has a small biped with two vectorable thrusters walk along a ceiling.

Sugihara posted the IEEE version and a [YouTube clip](https://www.youtube.com/watch?v=wmGmubDY8n4) on **19 September 2026**. The hardware experiment is short: about **0.15 m** in **four steps**, **8.5 s**. The authors still call it the first hardware demo of a flying humanoid walking beyond the ground, and the first multi-contact whole-body MPC on a transformable aerial robot.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/wmGmubDY8n4"
    title="Anti-gravity walking by a flying humanoid"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Ceiling walking on the JSK flying humanoid. Source: JSK / YouTube.</p>

## Why thrust spikes kill ceiling walking

On a floor, gravity presses the feet down. On a ceiling, the rotors have to do that job. If the controller treats thrust as a raw input, a foot contact switch can demand a step change in rotor force. Real motors cannot follow a spike. The paper’s comparison in trajectory optimization shows about a **3 N** thrust jump and a **5 N** contact-force spike when thrust is the input.

The fix is to put thrust in the **state** and command **thrust-rate** instead. Thrust then integrates smoothly across nodes, and the sparse structure of the optimal control problem stays intact so a fast solver can still run. They extend **Crocoddyl** and use a **BoxFDDP** solver.

<figure>
  <img src="/images/heroes/jsk-anti-gravity-walking.jpg" alt="Flying humanoid hardware next to a ceiling-walking experiment and a thrust-rate MPC block diagram" loading="lazy" />
  <figcaption>Hardware plus the thrust-rate whole-body MPC. Source: Sugihara and Okada, arXiv:2609.07544.</figcaption>
</figure>

## Press the feet, then transfer the load

Thrust-rate alone is not enough. If the optimizer is also trying to keep thrust small, the normal force at a support foot can drop until a bump knocks the robot off. The authors add a lower bound on that normal force and **slide the bound from one foot to the other** during double support.

In MuJoCo, with a **5 N** minimum, commanded thrust moved smoothly between about **8 N** and **12 N**. Average MPC solve time was **6.69 ms**; **91.5%** of solves finished in **10 ms**. Set the bound to **0 N**, or go back to thrust-as-input, and the robot detaches.

## What the hardware actually did

The lab robot has two 6-DoF legs and two 1-DoF vectoring thrusters. Effective mass with tethers and wiring was **2.0 kg**. Joints ran in position control from the MPC trajectory. Extra thrust was added to stabilize roll and pitch. There are no foot wrench sensors, so contact force is inferred: each thruster sat near **12.5 N** in steady state, more than the **19.6 N** of the robot’s weight, with the extra aimed at the ceiling.

The paper is explicit about the limits. The walk is tethered, open-loop at the joints during swing, and **15 cm** long. Future work they name is wall-to-ceiling transitions and tying this gait to free flight.

## A Human's Take

I am here for robots that treat a ceiling as a floor. The thrust-rate trick is the kind of boring formulation change that lets hardware exist at all. Fifteen centimeters is not a factory crawl. It is a receipt that the contact math does not blow the rotors up when a foot comes off. Next clip I want is the same machine leaving the ceiling and flying, without a power tether writing the story.

## Sources

- [arXiv:2609.07544 — Anti-Gravity Walking by a Flying Humanoid Robot](https://arxiv.org/abs/2609.07544)
- [arXiv HTML — full paper with hardware figures](https://arxiv.org/html/2609.07544v1)
- [YouTube — Anti-gravity walking hardware video](https://www.youtube.com/watch?v=wmGmubDY8n4)
