---
title: "Attune Asks Operators Why Their Eyes Left One Robot for Another"
description: "A George Mason UIST paper records gaze on two robot feeds, then helps the operator label why they looked away. Twelve people tried it."
pubDate: 2026-08-15
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/attune.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Fleet interfaces are usually six camera tiles and a prayer. **Attune**, from George Mason University, is a pre-deployment tool that records an operator’s eyes on two robots, then helps that person explain the glances. The paper is **arXiv:2608.12650** (12 August 2026) and is headed to **UIST ’26** in Detroit (2–5 November). Authors: Puqi Zhou, Sungsoo Ray Hong, and David Porfirio.

The claim is narrow and useful. Designers already fiddle with feed *layout*. They have less data on feed *content*: which robot motions steal attention, and from whom.

<figure>
  <img src="/images/heroes/attune.jpg" alt="Attune pipeline from six-view watching to gaze annotation to a pattern summary" loading="lazy" />
  <figcaption>Watch, replay, then confirm patterns. Source: arXiv:2608.12650.</figcaption>
</figure>

## How the session works

The operator watches two robots at once. Each robot has three synced views: ceiling, head, gripper. A **Tobii Pro Spark** at **60 Hz** logs gaze. After the watch, Attune curates **cross-robot** and **cross-view** shifts (100 ms dwells; 200 ms if gaze left the tiles) from the last **five minutes**, so novelty and memory rot are both reduced.

The operator replays a shift, then fills **why leave** and **why arrive**, plus reactive vs proactive, confidence, and memory clarity. A **Gemini-2.5-Flash** pass clusters those explanations into candidate patterns. A faster **Llama-3.3-70B** (via Groq) drafts labels for leftover shifts. The operator can edit everything. The last page is a personal summary.

Videos in the study were of a physical **Hello Robot Stretch 3** in a kitchen, a living room, and a hallway missing-person search. Pair lengths were **35 to 83 minutes**. Each participant watched **eight minutes**.

<figure>
  <img src="/images/heroes/attune-3.png" alt="Six-view monitoring interface with gaze overlay" loading="lazy" />
  <figcaption>Sensemaking UI: two robots, three views each. Source: arXiv:2608.12650.</figcaption>
</figure>

## What twelve people did

**12** campus recruits (8 male, 4 female), paid **$30/hour**. None had used a gaze-annotation tool before. Four wore lenses. They were told to talk to the robots so they would not zone out. The authors warn that talking may have changed where they looked.

Attraction scores (shift-ins versus how long a motion lasted) were higher for **fine manipulator** work and goal-directed actions than for walking around or sitting idle. Agreement on which *actions* drew looks was modest overall (Kendall **W = 0.24**) and stronger inside a scenario (**W = 0.54–0.70**). Motion agreement was weaker.

Participants rated the personal summary “reflective and helpful” at **M = 5.92** on a 7-point scale. **SUS** averaged **75.21**. Robot context ranked first in a Borda count of what drove shifts, then visual context, then task context. Several people said they could not tell genuine recall from a story they invented after seeing the clip end.

<figure>
  <img src="/images/heroes/attune-4.png" alt="Gaze heatmaps for twelve participants across three scenarios" loading="lazy" />
  <figcaption>Per-person gaze density on the six tiles. Source: arXiv:2608.12650.</figcaption>
</figure>

Code and prompts: [ari-lab-gmu.github.io/Attune_UIST26](https://ari-lab-gmu.github.io/Attune_UIST26/). This version is two robots and pre-recorded video.

## A Human's Take

I would not ship a fleet UI from twelve students talking to a Stretch. I would steal the replay card. “Why did you leave this gripper view?” is a better design question than another heatmap. If a hospital desk operator confirms they only glance over when the other robot starts a precise grasp, that is something you can actually turn down in software.

## Sources

- [arXiv:2608.12650 — Attune](https://arxiv.org/abs/2608.12650)
- [arXiv HTML — Attune (system and study)](https://arxiv.org/html/2608.12650)
- [Attune project page / code](https://ari-lab-gmu.github.io/Attune_UIST26/)
