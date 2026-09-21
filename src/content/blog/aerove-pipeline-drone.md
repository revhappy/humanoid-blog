---
title: "AeRove Rolls on Its Prop Guards, Then Hops the Obstacle"
description: "NJIT's AeRove uses propeller guards as wheels, flips between drive and flight in 200 ms, and inspects a steel pipe."
pubDate: 2026-09-21
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/aerove-pipeline.png"
readTime: "3 min read"
featured: false
draft: false
---

AeRove is a small drone that lands on a pipe and keeps going on its propeller guards. Caleb Polillio and Petras Swissler at the New Jersey Institute of Technology built it for close-in pipeline inspection, where hovering wastes power and the prop wash messes with a gas sensor. The paper was submitted to arXiv on September 17, 2026, and is marked as submitted to ICRA 2027.

The trick is a spring-loaded bistable mechanism. It snaps between flight and ground mode in 200 milliseconds, and it does not need a motor holding torque to stay in either shape. In flight the guards are ducts around the props. On the pipe those same guards are the wheels. Rolling is the default. Flight is for hopping an obstacle.

<figure>
  <img src="/images/heroes/aerove-pipeline-2.png" alt="AeRove shown in flight configuration and with guards down as wheels" loading="lazy" />
  <figcaption>AeRove without its battery, in flight and on its guards. Source: arXiv:2609.20965.</figcaption>
</figure>

The power claim is the one that matters for a long pipe. The authors say rolling draws 0.7 A against 10 A in continuous flight, a 14-times cut, and that the estimated travel distance goes from 144 meters to 2,057 meters if the robot stays on the surface and only flies when it has to.

They ran autonomous trials on a 51 cm steel pipe: straight sections, curves, obstacle jumps, and detection of simulated leak markers. Separate carbon-dioxide tests compared perched sensing with hovering. Perched, the concentration response was substantially larger. In flight, an intake under the body that uses prop wash beat an extended probe on speed and strength of the gas reading. Code and designs are released under CC-BY.

The paper is explicit about why a normal quad struggles here. Small drones have less thrust margin and less inertia, so a gust near a pipe is a collision risk, and the same airflow that keeps the craft up also stirs the gas you came to measure.

## A Human's Take

Using the thing that usually wastes energy as the wheel is the kind of hardware joke I want more of. Two amps of story, not twenty. The 2,057 meter figure is an estimate from the current draw, not a pipe they already drove end to end, so I would not put it on a spec sheet yet.

What I would put on the sheet is the 200 ms snap and the perched gas reading. If the robot can sit still on the metal and sniff, it is doing the inspection job. Flying the whole way was always the expensive way to stare at a pipe.

## Sources

- [arXiv — AeRove abstract](https://arxiv.org/abs/2609.20965)
- [arXiv HTML — AeRove paper with hardware figures](https://arxiv.org/html/2609.20965v1)
