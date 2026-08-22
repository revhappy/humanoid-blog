---
title: "A Booster T1 Learns to Hunt the Ball With Its Eyes, Then Kick"
description: "Science Robotics cover work on a 1.2 m Booster T1 ties onboard vision to locomotion, with ~90% frontfield kicks and RoboCup use."
pubDate: 2026-08-21
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/booster-t1-soccer.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Tsinghua-led team put a vision-driven soccer controller on a **Booster T1** and got the cover of *Science Robotics*’ humanoid special issue. The paper, dated 19 August 2026, trains the whole skill in simulation, then runs it on a physical biped using only onboard vision: find the ball, chase it, and kick from more than one direction.

The platform is about **1.2 m** tall and **30 kg**. Booster Robotics supplied the hardware and the lab time. Co-authors sit at Tsinghua, China Agricultural University, and ByteDance Seed.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/BN3o7TicfZs"
    title="Vision-driven humanoid soccer skills on a Booster T1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Outdoor kicks, RoboCup matches, and the encoder-decoder controller. Source: project video / YouTube.</p>

## What they measured

Compared with a rule-based baseline, the controller cuts ball-position error by **46%** and time-to-kick by up to **64%**. Frontfield kicking success sits around **90%**.

dpa, carried by *Süddeutsche Zeitung*, adds a 140-shot grid: ten trials at each of 14 spots. Frontfield conversion is about **80–90%**, backfield **60–70%**. That grid does not mention a goalkeeper.

In a separate interactive setup against a human keeper, the study (as dpa quotes it) says the robot kept tracking the ball, adjusted its steps, and took shots, and that it occasionally beat the human defense. dpa notes the paper does not give a save-or-score count for those keeper trials.

<figure>
  <img src="/images/heroes/booster-t1-soccer-2.jpg" alt="Booster T1 humanoids in RoboCup jerseys on an indoor soccer pitch" loading="lazy" />
  <figcaption>T1-class robots in a RoboCup match, from the Science Robotics video still. Source: Science Robotics / X.</figcaption>
</figure>

## How the eyes stay in the loop

Most soccer stacks split perception from walking. This one does not. An encoder-decoder plus a virtual camera during training injects noise and missed detections so the policy has to keep moving when the ball blinks out.

On the real robot, the onboard camera feeds detected ball positions straight into the policy. An odometer estimates the goal from longer-horizon information. Adversarial motion priors are there to keep the gait from looking like a video-game cheat.

## It already played for points

Tsinghua Hephaestus used the controller as a module at **RoboCup 2025** (adult-size humanoid) and at the **2025 World Humanoid Robot Games**. The paper says the team won both, scoring **76** and conceding **11**, with robots running fully autonomously on onboard compute and sensing. Extra sensors such as lidar or multi-camera rigs were not allowed.

The authors are clear about the limit: this policy does not model teammates or opponents, so it cannot plan passes or a defensive shape.

## A Human's Take

I like a kick that has to survive motion blur and a missing detection, not a kick that only works when the lab lights are perfect. The RoboCup scoreline is a receipt. The next one I want is a pass that was not in the training set.

## Sources

- [Science Robotics — Learning vision-driven reactive soccer skills for humanoid robots](https://www.science.org/doi/10.1126/scirobotics.aed1152)
- [arXiv:2511.03996 — paper (v2, 20 Aug 2026)](https://arxiv.org/abs/2511.03996)
- [Project page — videos and method](https://humanoid-kick.github.io/)
- [Süddeutsche Zeitung / dpa — robot scores against a human keeper](https://www.sueddeutsche.de/wissen/roboterfussball-studie-roboter-schiesst-tore-gegen-menschlichen-torwart-dpa.urn-newsml-dpa-com-20090101-260821-930-560818)
- [YouTube — project video](https://www.youtube.com/watch?v=BN3o7TicfZs)
- [Science Robotics on X — RoboCup still from the paper video](https://x.com/SciRobotics/status/2090148403208413692)
