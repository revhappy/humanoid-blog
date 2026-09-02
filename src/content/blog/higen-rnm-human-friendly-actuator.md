---
title: "HIGEN RNM Puts the Humanoid Bottleneck in the Joint"
description: "HIGEN RNM’s Human-Friendly Actuator Platform: six joints from 60 to 348 Nm, sub-100 ms local force response, CES 2027."
pubDate: 2026-09-02
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/higen-rnm-human-friendly-actuator.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**HIGEN RNM**, a Changwon motion-control shop, used a **31 August 2026** press release to argue that humanoid AI is outrunning the hardware that has to touch people. Its answer is a **Human-Friendly Actuator Platform**: six standardized joints from **60 Nm to 348 Nm**, with sensing and control inside the actuator so a bump does not have to round-trip through the torso computer.

CEO **Jae Hak Kim** put it this way in the release: “AI is making the robot’s brain dramatically smarter, but the point where that intelligence ultimately meets the physical world is the joint.”

<figure>
  <img src="/images/heroes/higen-rnm-human-friendly-actuator.jpg" alt="White humanoid torso facing a man across a row of six actuator sizes, plus exploded joint views" loading="lazy" />
  <figcaption>Six standardized actuators, from wrist-scale to hip-scale. Source: HIGEN RNM / PR Newswire via Bastille Post.</figcaption>
</figure>

## What is in the can

Each module stacks an **axial-flux permanent-magnet (AFPM)** motor, a **3K compound planetary** gearbox, **dual encoders**, and the drive electronics. Dual-encoder data plus motor current estimate external force. The company says that means no dedicated joint torque sensor.

Local response to a disturbance is **under 100 milliseconds**, per the release, without waiting on a central controller. Under HIGEN’s own reference-design conditions, the AFPM layout cuts actuator volume **30%** and raises torque density **30%**. The 3K gearbox has posted **backdriving torque below 1 Nm** in specified tests, which is the compliance number they want next to “safe around people.”

The six SKUs are meant to cover wrists and necks up through knees and hips, so a prototype team can buy a family instead of designing one joint per limb.

<figure>
  <img src="/images/heroes/higen-rnm-human-friendly-actuator-2.jpg" alt="Exploded view of a humanoid actuator: motor, gears, encoder, and housing" loading="lazy" />
  <figcaption>Exploded joint: motor, gearbox stages, sensing, housing. Source: HIGEN RNM / PR Newswire via Bastille Post.</figcaption>
</figure>

## Paperwork and a CES date

HIGEN says it has filed **three Korean patent applications** on sensing and adaptive force control, designed to **ISO 13849-1** functional safety, and is pursuing **CE** and **UL**. The company dates itself to **2008** and points buyers to higenrnm.com. The public demo slot is **CES 2027 in Las Vegas**, with performance data and application demos promised there, not in this release.

That last sentence is the honest limit. This is a parts announcement with lab reference numbers, not a named humanoid already walking on these actuators in a customer plant.

<figure>
  <img src="/images/heroes/higen-rnm-human-friendly-actuator-3.jpg" alt="Five actuator sizes lined up from small wrist units to a large hip unit" loading="lazy" />
  <figcaption>Size ladder for the standardized lineup. Source: HIGEN RNM / PR Newswire via Bastille Post.</figcaption>
</figure>

## A Human's Take

Standardized joints are how you stop every humanoid startup from reinventing a harmonic drive in a garage. Sub-100 ms local stiffness is the spec I will remember, because that is the difference between a VLA that “knows” a collision and a hip that actually yields. I will believe the 30% density claim when a named robot ships with the 348 Nm unit in the knee and a teardown, not a CES booth card. Until then, this is a supplier doing the unglamorous work the rest of the industry keeps papering over with bigger brains.

## Sources

- [PR Newswire — HIGEN RNM Human-Friendly Actuator Platform](https://www.prnewswire.com/news-releases/higen-rnm-targets-humanoid-robotics-next-bottleneck-the-actuator-302859629.html)
- [Bastille Post — same release with press art](https://www.bastillepost.com/global/article/6119790-higen-rnm-targets-humanoid-robotics-next-bottleneck-the-actuator)
- [HIGEN RNM — company site](http://www.higenrnm.com/)
