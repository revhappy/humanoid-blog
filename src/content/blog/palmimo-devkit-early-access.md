---
title: "Jizai Puts Palmimo DevKit on Sale: A Six-Legged Desk Robot You Drive in Python"
description: "Tokyo’s Jizai opens early access to Palmimo DevKit at ¥598,000, with a 21-DoF tabletop body, Raspberry Pi 5, and an open Python SDK."
pubDate: 2026-09-04
category: "Deals"
author: "Shar Hendrix"
heroImage: "images/heroes/palmimo-devkit-early-access-4.jpg"
readTime: "3 min read"
featured: false
draft: false
---

Jizai started early-access sales of **Palmimo DevKit** on **3 September**. It is a tabletop six-legged robot you drive with your own Python, priced at **¥598,000** excluding tax (the company lists about **$3,980** as a reference). No monthly fee. Thirty-day initial warranty.

The kit is aimed at Early Builders (developers and researchers) and Early Partners (companies and labs running a PoC). It ships assembled and tested. Jizai says you should be able to start coding the day it arrives.

<figure>
  <img src="/images/heroes/palmimo-devkit-early-access-4.jpg" alt="Palmimo DevKit on a white background, wood round table, six legs, round yellow face display" loading="lazy" />
  <figcaption>Palmimo DevKit: wood top, six three-joint legs, round face display. Source: Jizai / palmimo.dev.</figcaption>
</figure>

## What you actually get

The official site and the PR TIMES release agree on the hardware:

- **Size / mass**: 400 × 300 × 300 mm, about **2 kg**
- **Degrees of freedom**: **21** axes (3 per leg × 6, plus a 3-axis neck)
- **Actuators**: DYNAMIXEL **XC330-M288-T** × 21, 5 V
- **Compute**: Raspberry Pi **5** with **16 GB**, onboard
- **Sense / show**: 5 MP USB camera, ReSpeaker mic array, 3 W stereo speakers, **2.8-inch** round touch display (480 × 480)
- **Software**: Raspberry Pi OS 64-bit, **Python 3.12+**, `palmimo_sdk`

GitHub describes the gait as an anti-phase **tripod**: 18 leg servos walk, a servo neck aims the face, and a small expression engine draws HAPPY / ANGRY / SAD and friends on the round display. Motions include `forward`, `wave`, `bow`, `dance`, and `pushup`. The motion engine is pure gait plus inverse kinematics. Dry-run mode computes every motion with no hardware attached.

<figure>
  <img src="/images/heroes/palmimo-devkit-early-access.jpg" alt="Palmimo DevKit launch graphic with Japanese copy and the six-legged robot" loading="lazy" />
  <figcaption>Launch still from Jizai’s 3 September PR TIMES release.</figcaption>
</figure>

## Open software, closed metal

The [GitHub repo](https://github.com/Jizai-inc/palmimo-devkit) is Apache-2.0. Open now: the Python SDK and drivers, an agent layer that turns LLM tool calls into robot actions, an MCP server for Claude Code / OpenClaw / any MCP client, example agents, LeRobot plugins, and the docs. Hardware CAD is **not** in the repo. Jizai says manufacturing design stays unpublished for now; early buyers get hardware information ahead of later lots.

Palmimo used to be called **Mi-Mo**. It debuted at CES 2025. A DevKit is on exhibit at Miraikan’s Tokyo Mirai Park through **23 September 2026**.

<figure>
  <img src="/images/heroes/palmimo-devkit-early-access-2.jpg" alt="A person at a desk waving; Palmimo on the table faces them" loading="lazy" />
  <figcaption>Desk-scale interaction still from the PR TIMES release. Source: Jizai.</figcaption>
</figure>

## A Human's Take

I like a robot that looks like a lamp table and answers `robot.wave()`. The price is not hobby-kit cheap, but it is in the “one lab can buy it” band, and the software is actually public. The useful test is whether the MCP tools and the dry-run engine make a software person ship a behavior in an afternoon. If the metal stays closed while the Python stays open, that is a fair trade for a unit that arrives already walking.

## Sources

- [PR TIMES — Jizai launches early access sales of Palmimo DevKit (3 Sep 2026)](https://prtimes.jp/main/html/rd/p/000000021.000145251.html)
- [Jizai — Palmimo product page (specs and price)](https://jizai.ai/en/services/palmimo/)
- [Palmimo DevKit official site](https://palmimo.dev/en)
- [GitHub — Jizai-inc/palmimo-devkit (Apache-2.0 SDK, MCP, hardware notes)](https://github.com/Jizai-inc/palmimo-devkit)
- [Impress Watch via Yahoo News — Palmimo DevKit early sale (4 Sep 2026)](https://news.yahoo.co.jp/articles/a69fdbe5e76f3e62b8dba282c17be8e48df2cd53)
