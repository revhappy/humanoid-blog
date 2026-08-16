---
title: "Molex MiniMix Puts Power and Ethernet Through a 5.65 mm Joint"
description: "Molex samples a hybrid connector that combines 15 A and 1 Gbps Ethernet for humanoid wrists, knees, and necks. Production is slated for late 2026."
pubDate: 2026-08-16
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/molex-minimix.jpg"
readTime: "3 min read"
featured: false
draft: false
---

**Molex** is sampling **MiniMix**, a hybrid power-and-signal connector aimed at humanoid joints. The 5 August 2026 PR from Lisle, Illinois, and a 6 August write-up in *Electronics Weekly* agree on the numbers: **15.0 A** plus **1 Gbps 1000BASE-T1** Ethernet in a **5.65 mm** routing profile.

That is a wiring part, not a robot. It exists because wrists and ankles are running out of hole.

<figure>
  <img src="/images/heroes/molex-minimix.jpg" alt="MiniMix hybrid connectors on green boards with red/blue and blue cable assemblies" loading="lazy" />
  <figcaption>MiniMix sample photo from Electronics Weekly. Source: Molex / Electronics Weekly.</figcaption>
</figure>

## The bottleneck they are selling against

The PR says multi-axis joints (wrists, elbows, knees, ankles, neck) have to carry both actuator power and high-speed control through “extremely tight channels.” Separate power and signal plugs are too fat, so builders hand-thread bare wire and solder at final assembly.

MiniMix is meant to replace that with a pre-terminated assembly that slides through those channels. Molex claims up to **50%** less routing area than “alternative options.” Vertical and right-angle mates are listed. The PR calls the mechanics vibration-resistant for continuous flex.

**Brian Hauge**, Molex president and SVP, Consumer and Commercial Solutions:

> “MiniMix replaces tedious manual assembly with an integrated solution for power and signal transmission, freeing robotics designers to build sleeker, lighter and more responsive autonomous systems at scale.”

<figure>
  <img src="/images/heroes/molex-minimix-2.jpg" alt="Molex MiniMix product graphic with labeled connectors" loading="lazy" />
  <figcaption>PR graphic for MiniMix Hybrid Power and Signal Connectors. Source: Molex / PR Newswire.</figcaption>
</figure>

## When you can buy it

Samples and evaluation assemblies are available now. **Commercial production is slated for late 2026**, according to both the PR and *Electronics Weekly*.

Molex also points at the rest of its robot catalog: **Mirror Mezz** for NVIDIA Jetson Thor-class compute, Quad-Row board-to-board, High-Speed FAKRA-Mini for cameras and LiDAR, plus Mega-Fit and EXTreme Ten60 for higher current. The PR cites a 2026 McKinsey supply-chain note (via Molex) that joint actuators can be **40% to 60%** of a humanoid bill of materials, and talks about “approximately **50**” articulated joint actuators per robot. Treat those as Molex’s framing, not a number I independently checked.

## A Human's Take

If your humanoid still needs a tech to solder a wrist harness, you do not have a factory. You have a prototype line. MiniMix is a boring part, which is why I trust it more than another backflip. I want a flex-cycle rating and a price break at 10,000 pieces before I call the joint problem solved.

## Sources

- [PR Newswire — Molex MiniMix announcement (5 Aug 2026)](https://www.prnewswire.com/news-releases/molex-introduces-minimix-hybrid-power-and-signal-connectors-to-accelerate-humanoid-robotics-mass-production-scaling-302843651.html)
- [Electronics Weekly — Integrated power and signal connectors (6 Aug 2026)](https://www.electronicsweekly.com/news/business/integrated-power-and-signal-connectors-for-humanoid-robots-2026-08/)
