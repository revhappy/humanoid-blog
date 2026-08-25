---
title: "AgiBot’s G2 Wins Fire and Library Gold With a Wrist Hook and a Map"
description: "Spirit G2 took WHRG fire and library scenario golds. The extinguisher is 4.5–5 kg; AgiBot hung it from the wrist into a 20-degree bucket."
pubDate: 2026-08-25
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/agibot-spirit-g2-whrg.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**AgiBot**’s wheeled **Spirit G2** (精灵 G2) took gold in the new **fire-emergency** and **library** scenario events at the second World Humanoid Robot Games, IT Home and Securities Times both reported on August 23. After those two titles the company sat at **two gold, three silver, two bronze** on the scenario board and said it led the medal table.

The official AgiBot account later posted a broader tally as of August 24, 23:00: **8 gold, 5 silver, 6 bronze** across track, wushu, dexterous-hand, and scenario events.

<figure>
  <img src="/images/heroes/agibot-spirit-g2-whrg.jpg" alt="AgiBot G2 shelving books in a library scene and using a fire extinguisher on an outdoor burn barrel" loading="lazy" />
  <figcaption>G2 in the library workflow and at an outdoor burn pan. Source: AgiBot official WHRG recap.</figcaption>
</figure>

## The extinguisher is heavier than the gripper

IT Home and STCN describe the fire scene as three jobs: identify hazardous goods, shut abnormal valves, then grab an extinguisher and put the fire out. The extinguisher weighs **4.5 to 5 kilograms**, above what most humanoid grippers on the floor can hold.

AgiBot did not spec a custom claw for it. An unnamed company official told STCN they bolted a structure on the **wrist**, hooked the bottle, and dropped it into a **20-degree** bucket on the chassis so the base, not the fingers, carries the mass. The other arm pins the bottle so it does not swing.

The same official said the fire layout was unpublished, so the team treated it as zero prior scene data. Control was **VR teleoperation**: inverse-kinematics mapping from the operator, whole-body control, and force on key joints so the human does not have to dodge every bump.

IT Home lists G2 as a force-controlled harmonic-joint arm with a **5 kg** rated payload and an onboard controller it puts at **2070 TOP**, no external compute or network required for the run.

## Library is the opposite stack

The library gold was a joint team with **Tsinghua** and **Shanghai Jiao Tong**, IT Home says. Three linked stages: outbound and transport, shelving, then find and fix misshelved books. Fail one stage and the run dies.

That one was **fully autonomous**. STCN quotes AgiBot: a pre-built high-precision map, labeled waypoints, classic localization and path planning, and an **open-source vision model** on spine labels. No foundation-model flex in the quote. A map and a barcode reader, basically.

<figure>
  <img src="/images/heroes/agibot-spirit-g2-whrg-2.jpg" alt="AgiBot collage: X2 on an obstacle course, G2 at an indoor emergency desk, and a dexterous-hand station picking beans with tweezers" loading="lazy" />
  <figcaption>Middle panel: G2 on the indoor emergency scene. Bottom: tweezers/bean station that AgiBot also entered. Source: AgiBot official WHRG recap.</figcaption>
</figure>

Yicai, also on August 23, matches the two golds and the two-gold, three-silver, two-bronze scenario score.

## A Human's Take

I like the wrist hook more than the medal count. Five kilograms is a real extinguisher. Putting the load on the chassis is the kind of ugly mechanical cheat that actually ships. The library gold is the other half of the same idea: if the scene is structured, you do not need a giant VLA. You need a map that does not lie.

Watch whether that 20-degree bucket ever shows up on a customer floor, or only on a Games scoring sheet.

## Sources

- [IT Home — Spirit G2 fire and library golds](https://www.ithome.com/0/993/292.htm)
- [Securities Times — AgiBot fire-emergency gold, hardware and teleop details](https://stcn.com/article/detail/4104755.html)
- [Yicai — G2 fire and library golds](https://www.yicai.com/news/103329885.html)
- [AgiBot on X — medal tally as of Aug. 24](https://x.com/AGIBOTofficial/status/2092211447963213935)
