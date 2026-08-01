---
title: "Figure F.03 Climbs a Ladder Fully Autonomous"
description: "CEO Brett Adcock says Figure 03 can climb a ladder end-to-end. Company posts already detail perception-conditioned stair control on the same stack."
pubDate: 2026-08-01
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/figure-f03-ladder.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Figure AI** CEO **Brett Adcock** posted that **F.03** can now climb a ladder fully autonomously — no teleop, no pre-mapped path. The clip landed on August 1 and is the clearest public claim yet that Figure’s biped is leaving flat-floor demos for vertical plant infrastructure.

## What Adcock showed

In the video, F.03 approaches a ladder, places feet rung by rung, and works its way up under on-robot control. Adcock’s caption is short: the climb is **fully autonomous**. That is an executive claim on the company’s primary product line, not third-party rumor.

It sits next to Figure’s own April 2026 manufacturing post, where the company said **Helix System 0** now takes head-camera RGB, lifts it into a 3D scene representation, and conditions whole-body control on that map. The same network weights trained on randomized staircases in simulation transfer **zero-shot** to real stairs — no real-world fine-tuning and no operator mode switches, according to Figure.

<figure>
  <img src="/images/heroes/figure-f03-ladder-2.jpg" alt="Rows of Figure 03 humanoid robots in a production hall" loading="lazy" />
  <figcaption>Figure 03 fleet in production-scale staging (BotQ production post open-graph still). Source: Figure AI.</figcaption>
</figure>

## Why a ladder is a different problem than a stair

Stairs are continuous slopes with wide treads. A ladder is sparse contact, narrow rungs, and a tall center-of-mass path with little room for recovery if a foot clips. Perception has to lock onto rung geometry; the whole-body policy has to plan grip and foot placement under continuous balance constraints.

Figure’s production write-up already framed perception-conditioned control as more than “climb stairs”: the architecture is **perception in, whole-body out**, trained in sim and deployed zero-shot. A ladder clip is a harder stress test of that stack in a form industrial sites still use every day.

## Fleet context (from Figure, not the ladder tweet)

On the manufacturing side, Figure says BotQ has delivered **over 350** third-generation robots and pushed cadence from one robot per day toward **one per hour**, with end-of-line first-pass yield **over 80%** and **over 9,000** actuators produced. Those fleet numbers matter for locomotion work: more hours on metal is how edge cases like rungs and handrails get found.

## A Human's Take

I’m less interested in the parkour vibe than in whether this survives a real mezzanine with grease on the rungs and a time clock. Autonomous ladder climbing is the kind of “boring vertical access” factories actually need. Show me ten climbs, different ladder angles, and a failed recovery that still doesn’t take a worker out — then I’ll stop treating it like a demo.

## Sources

- [Brett Adcock on X — F.03 climbs a ladder fully autonomous](https://x.com/adcock_brett/status/2083576071635820660)
- [Figure AI — Ramping Figure 03 Production (perception-conditioned stairs / S0)](https://www.figure.ai/news/ramping-figure-03-production)
