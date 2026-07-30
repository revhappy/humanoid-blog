---
title: "Gemini Robotics 2: Whole-Body Control From Feet to Fingertips"
description: "DeepMind’s Gemini Robotics 2 stack adds whole-body humanoid control, multi-robot teamwork, and on-device adaptation — with ER 2 open in AI Studio."
pubDate: 2026-07-30
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/gemini-robotics-2-neowin.webp"
readTime: "6 min read"
featured: false
draft: false
---

**Google DeepMind** published **Gemini Robotics 2** on **July 30, 2026** — a three-model stack aimed at physical AI rather than another tabletop pick-and-place clip. The headline claim is whole-body humanoid control: walk, crouch, reach, and manipulate under one vision-language-action system, plus multi-robot handoffs and a lighter model that can retarget to a new bi-arm body in a few hours of data.

<figure>
  <img src="/images/heroes/gemini-robotics-2-neowin.webp" alt="Apptronik Apollo and Franka Duo labeled under Gemini Robotics ER 2" loading="lazy" />
  <figcaption>Apollo humanoid and Duo arms in DeepMind’s Gemini Robotics ER 2 materials. Source: Google / Neowin coverage of the launch.</figcaption>
</figure>

## Three models, one stack

DeepMind’s [product page](https://deepmind.google/models/gemini-robotics/) and [main research post](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots) describe:

- **Gemini Robotics 2** — vision-language-action (VLA) model that turns vision + language into motor commands. DeepMind says it can drive full humanoids “from feet to fingertips” and bi-arm platforms, including multi-finger hands and parallel grippers.
- **Gemini Robotics ER 2** — embodied reasoning “high-level brain.” Plans multi-step tasks lasting several minutes, talks to humans, watches continuous video to track progress, and hands execution to a VLA or robotics API. Public via **Gemini API**, **Google AI Studio**, and private preview on **Gemini Enterprise Agent Platform** ([developer blog](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/)).
- **Gemini Robotics On-Device 2** — efficient VLA for local inference. DeepMind claims adaptation to new bi-arm embodiments in a few hours, typically under **200** examples, including platforms with different shapes and DoF (Dexmate, SO101, Trossen called out).

VLA and On-Device models stay early-access / trusted-tester for now. ER 2 is the piece most developers can poke today.

## What they showed on hardware

DeepMind demos lean on research partners **Apptronik** (Apollo 2), **Boston Dynamics** (Spot API orchestration), and **Agile Robots**, plus a **Franka F3 Duo**.

On Apollo 2, the company shows whole-body sequences such as: walk to a table, pick a watering can, walk to shelves, place it on a bottom shelf. Kitchen-style fine motor work and multi-robot garage tidy-up clips went out on DeepMind’s X account the same day.

Self-reported skill charts in the research post (not independent audits) include:

- **Whole-body manipulation** (Apollo + Inspire hands): pick-up success rates DeepMind plots around **45–76%** depending on table / floor / shelf
- **Multi-finger dexterity** (Apollo + SharpaWave, **22-DoF** hand): e.g. unscrew bulb high (~**92%** on their chart), screw bulb much lower (~**36%**); trash-bag tie, dustpan, ziplock also plotted mid-range
- **Gripper dexterity** (Franka Duo): pick-and-place / tool kitting / insertion rates DeepMind puts in the **70–90%** band

DeepMind itself notes multi-finger work remains hard and movement speed still needs work.

<figure>
  <img src="/images/heroes/gemini-robotics-2-apollo.jpg" alt="Apollo 2 humanoid packing a paddle into a tote bag" loading="lazy" />
  <figcaption>Apollo 2 under Gemini Robotics 2 in a cluttered storage space. Source: Google DeepMind.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/gemini-robotics-2-hero.jpg" alt="Close-up of white humanoid head and chest camera" loading="lazy" />
  <figcaption>Apollo-class humanoid still from DeepMind’s Gemini Robotics materials. Source: Google DeepMind.</figcaption>
</figure>

## ER 2: progress tracking and teamwork

The [Google Keyword post](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/) is the densest ER 2 write-up:

- Continuous **progress classification** (frame-level buckets 0–100%): DeepMind reports **57.4%** accuracy on its evals
- **Moment finding** (when a critical event happens, e.g. stop pouring): **91.3%** accuracy, **0.96 s** mean absolute distance; they emphasize sub-second latency for physical control
- Integration with **Gemini Live API** bidirectional streaming so the agent can plan the next step while the robot is still moving
- **Multi-robot collaboration**: shared semantic handoff between different bodies (Apollo 2 + Franka Duo in the garage demo)
- Spot demo: ER 2 orchestrates Boston Dynamics **Spot APIs** (nav + arm) to fetch an object from natural language; sample code on [GitHub robotics-samples](https://github.com/google-gemini/robotics-samples)
- Safety: human-proximity stop/resume claims; new **ASIMOV-Agentic** benchmark on Hugging Face; [safety technical report PDF](https://storage.googleapis.com/deepmind-media/gemini-robotics/Gemini-Robotics-2-Safety.pdf)

Neowin’s same-day write-up repeats the public availability of ER 2 and the multi-robot angle without adding independent field tests.

## A Human's Take

Whole-body + continuous video progress is the part I care about. Tabletop VLAs already flood timelines; getting a biped to walk a can to a bottom shelf without a human on a stick is a different problem class. I’ll treat the bar charts as company homework until someone outside Mountain View reruns them. For labs and integrators, ER 2 in AI Studio is the immediate experiment — the VLA that actually ships on customer floors is still gated.

## Sources

- [Google DeepMind — Gemini Robotics 2 whole-body intelligence](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots)
- [Google DeepMind — Gemini Robotics product page](https://deepmind.google/models/gemini-robotics/)
- [Google Keyword — Introducing Gemini Robotics ER 2](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/)
- [Neowin — Gemini Robotics ER 2 multi-robot coverage](https://www.neowin.net/news/googles-gemini-robotics-er-2-allows-multiple-robots-to-work-together/)
- [Google DeepMind on X — launch thread / demos](https://x.com/GoogleDeepMind/status/2082844162928381956)
- [GitHub — google-gemini/robotics-samples](https://github.com/google-gemini/robotics-samples)
