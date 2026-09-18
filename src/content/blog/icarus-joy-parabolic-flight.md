---
title: "Icarus Flies JOY Through 66 Parabolas Before an ISS Handover"
description: "Brooklyn startup Icarus tested its free-flying cargo robot in Canadian zero-G, the last major flight before a January NASA handoff."
pubDate: 2026-09-18
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/icarus-joy.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**JOY**, Icarus Robotics’ two-armed free flyer, spent four parabolic flights in Canada from **9–11 September** proving it can move, estimate its state, and run its arms in real microgravity. The Brooklyn team told *The Robot Report* this was the last major test before flight hardware goes to NASA in January for a **2027** ISS ride.

<figure>
  <img src="/images/heroes/icarus-joy.jpg" alt="Icarus team in a parabolic-flight cabin holding JOY, a dual-arm free-flying robot" loading="lazy" />
  <figcaption>JOY in the cabin during the NRC Canada campaign. Source: Icarus Robotics via The Robot Report.</figcaption>
</figure>

## 66 parabolas, three systems

*The Robot Report*’s 18 September piece, from interviews with CEO **Ethan Barajas** and CTO **Jaime Palmer**, puts the campaign at **66 parabolas** across four flights. Each parabola gives roughly **20 seconds** of weightlessness. Payload and *The Debrief*, citing the company, call that **22 minutes** of cumulative zero-G. TRR’s lede says “2 cumulative minutes,” which does not match 66 × ~20 seconds; the parabola count is the figure all three outlets share.

JOY is built to float through the pressurized ISS and do cargo work that eats astronaut time: bags, connectors, handoffs. Icarus makes the **7-DoF arms** in-house, with an adaptive pinch gripper. Palmer said about half the week was manipulation, “one of the biggest unknowns and one of the hardest things to model in the simulator.”

They could not teleoperate on the airplane the way they plan to from the ground on station. Instead they replayed pre-recorded teleop trajectories and set points collected in Brooklyn, then compared the same motions in microgravity.

State estimation held up when the team physically moved the robot by hand before closing the flight-control loop. Flight control was the fussy part: the airplane’s settling into each parabola is messier than ISS will be, so they ran the controller conservatively and had operators catch, restrain, and release the machine.

<figure>
  <img src="/images/heroes/icarus-joy-4.jpg" alt="Close-up of JOY with dual carbon-fiber arms, fans, cameras, and a white tank labeled AIR" loading="lazy" />
  <figcaption>JOY’s dual-arm free-flyer hardware, as shown on The Robot Report’s story. Source: Icarus Robotics via The Robot Report.</figcaption>
</figure>

## Canada, because the U.S. plane is grounded

The only U.S. parabolic operator is currently suspended, TRR reports, so Icarus flew with **NRC Canada**. Barajas said demand is piling onto foreign providers and timelines stretch. The photos show an NRC-CNRC aircraft (C-FIGD) and Icarus flight suits.

Next: software polish, no “major overhauls,” Palmer said. TRR’s dates: hand JOY to NASA on **25 January 2027**; NASA would send it up in **May**, subject to the agency’s schedule. The ISS mission is **Joyride-1**, under the Voyager Technologies agreement announced in March. Icarus raised a **$6.1 million** seed last year.

Barajas contrasted JOY with Astrobee: cell-phone compute vs an **NVIDIA Jetson Thor T5000**, and a platform built for manipulation, not just cameras and flight paths. Palmer called it “probably one of the most complex robots that’s ever been to microgravity.”

<figure>
  <img src="/images/heroes/icarus-joy-2.jpg" alt="Icarus Robotics team in flight suits in front of an NRC-CNRC parabolic aircraft" loading="lazy" />
  <figcaption>Icarus after the NRC Canada flights. Source: Icarus Robotics via The Robot Report.</figcaption>
</figure>

## A Human's Take

I am here for a robot whose first customer is a cargo bag, not a keynote. Sixty-six parabolas is a real systems test: arms, estimator, fans, catch-and-release. The receipt I want in 2027 is a bag that moved without an astronaut babysitting the whole shift.

## Sources

- [The Robot Report — Icarus Robotics flies ISS-bound robot in microgravity for the first time](https://www.therobotreport.com/icarus-robotics-flies-iss-bound-robot-in-microgravity-for-the-first-time/)
- [Payload — Icarus Robotics Completes Parabolic Flight Test Ahead of ISS Mission](https://payloadspace.com/icarus-robotics-completes-parabolic-flight-test-ahead-of-iss-mission/)
- [The Debrief — Icarus Robotics’ Microgravity Robot JOY Completes 22 Minutes of Successful Weightless Flight](https://thedebrief.org/icarus-robotics-microgravity-robot-joy-completes-22-minutes-of-successful-weightless-flight/)
