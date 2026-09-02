---
title: "Skild S1 Learns a 10-Minute Job From One Video"
description: "Skild AI’s S1 foundation model runs unseen tasks up to 10 minutes from a single video prompt, with no fine-tuning, the company and The Robot Report say."
pubDate: 2026-09-02
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/skild-s1.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Skild AI** is showing **S1**, a robot foundation model that takes one video of a person doing a job and then runs the same job on a robot, without changing the weights. The company blog, dated August 2026, frames this as in-context learning for manipulation: the demonstration sits in the prompt. *The Robot Report* covered the release on 31 August.

The tasks Skild is willing to put on a page last up to **10 minutes**. The four out-of-distribution examples are plant potting, pancake cooking, pour-over coffee, and kit assembly. Pathak told *The Robot Report* the team searched its “millions of hours of data” for any pancake-flip example and found none. The flip, he said, came from watching the spatula.

<figure>
  <img src="/images/heroes/skild-s1.jpg" alt="Dual robot arms at a skillet and hot plate labeled autonomous 4x, Skild AI logo" loading="lazy" />
  <figcaption>S1 pancake station, labeled autonomous. Source: Skild AI.</figcaption>
</figure>

## What the company measured

On Skild’s internal long-horizon suites, with both models trained on the same data, architecture (aside from the prompt embedding), and compute:

- **Seen tasks** at **100,000 hours** of pre-training: in-context learning reached **96%** cumulative per-step success. Language-conditioned VLAs started ahead at **1,000 hours** (**53%** vs **43%**) and then lost as scale grew.
- **Unseen tasks** at the same **100,000-hour** scale: **66%** for the in-context model vs **9%** for the language-prompted VLA.

A single in-context demo is plotted as roughly **380** post-training episodes for a VLA, which Skild estimates as **50–100 hours** of teleoperation on 4–10 minute tasks. A VLA that *is* post-trained still wins later: **86%** with **2,000** demonstrations.

The plant-potting clock is the part I keep. Soil, pot, watering can, and plant arrived at **8:54 p.m.** The human video was recorded at **9:22 p.m.** S1 started running the task on hardware at **9:27 p.m.** Eleven minutes from demo to autonomous execution, after furniture got moved.

<figure>
  <img src="/images/heroes/skild-s1-2.jpg" alt="Dual robot arms at a pour-over coffee setup with kettle, mug, and grounds" loading="lazy" />
  <figcaption>Pour-over coffee, labeled autonomous. Source: Skild AI.</figcaption>
</figure>

## Quotes, caveats, money

CEO **Deepak Pathak** told *The Robot Report*:

> “You just add a video of a human doing something in the prompt, also called the context of the model, and it can just follow it on the robot. The tasks we are showing are extremely complex and long horizon. They are not three-second, four-second tasks, not those tiny, simple tasks.”

The same interview says S1 is “omni-bodied”: quadruped, humanoid, or a static arm. Humanoid work is still on the to-do list. The company, founded in 2023, has raised nearly **$1.7 billion**, per *The Robot Report*. The blog says S1 is already with commercial partners. There are no public weights, no API, and no price on the pages I fetched.

<figure>
  <img src="/images/heroes/skild-s1-3.jpg" alt="Dual robot arms at a plant-potting station with soil bin, pots, and a leafy plant" loading="lazy" />
  <figcaption>Plant potting, the 11-minute demo-to-run example. Source: Skild AI.</figcaption>
</figure>

## A Human's Take

A 66% unseen-task number against a 9% language baseline is a real gap if the eval is honest. I still want the failure cases, not just the pancake that made the poster. Eleven minutes from a head-cam clip to a robot moving soil is the product claim. Until someone outside Pittsburgh can drop a video in and get a shift, this is a very expensive in-context demo with a $1.7 billion balance sheet behind it.

## Sources

- [Skild AI — Introducing S1: In-Context Learning for Robotics](https://www.skild.ai/blogs/s1)
- [The Robot Report — Skild AI unveils S1 flagship robot foundation model](https://www.therobotreport.com/skild-ai-unveils-s1-flagship-robot-foundation-model/)
