---
title: "A G1 and a Go2 Learn When a Penalty Kick Is Already Decided"
description: "CMU researchers pit a Unitree G1 shooter against a Go2 keeper. A better read lifted the save rate from 0.240 to 0.472."
pubDate: 2026-09-21
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/penalty-kick-3.jpg"
readTime: "3 min read"
featured: false
draft: false
---

A penalty kick is a strategy problem until the leg can no longer change the shot. A paper dated September 17, 2026, studies that handoff on a Unitree G1 shooter and a Unitree Go2 keeper. Game-level self-play policies command fixed soccer whole-body controllers. The G1's shooting skill starts from motion-capture the authors collected themselves. The Go2's saving skill is learned with reinforcement learning.

The authors call the analysis dynamics-induced commitment mapping. It asks when the body has lost a terminal option for good, and whether what is left is still a small zero-sum game. In their runs, that commitment lands about 0.29 seconds before the foot meets the ball.

![Unitree G1 kicking on a lab floor while a Go2 moves along the goal, with a simulation strip above](/images/heroes/penalty-kick-3.jpg)

The useful comparison is not "wait for a cleaner look." Across four keeper policies, swapping in a better estimator raised the save rate from 0.240 to 0.472. A similar gain in read accuracy that came from waiting longer only reached 0.246. Changing ball speed, and nothing else, moves how much of the kick the keeper can still defer.

The hardware captions match the names in the abstract. In one sequence the Go2 reads the G1's final side during the wind-up, starts the dive early, and blocks. In another the G1 changes direction immediately before contact, the Go2 commits the wrong way, and the shot goes in. A later figure shows a save that still works after a late change of target. The paper is explicit that some hardware frames are selected separately and are not time-synced between the two robots.

<figure>
  <img src="/images/heroes/penalty-kick-2.jpg" alt="Diagram of a 6 meter penalty and plots of commitment and probe accuracy versus time to contact" loading="lazy" />
  <figcaption>Commitment and read accuracy as contact gets closer. Source: penalty-kick paper, arXiv:2609.21100.</figcaption>
</figure>

The authors say the equilibrium comparison uses observational proxies for coverage, not a fully measured term, and they mark that analysis as posterior. The project page linked in the paper did not load in this session.

Affiliations on the paper put Ruize Geng, Hao E. Zhang, Yikai Wang, and Ding Zhao at Carnegie Mellon, with additional authors at the University of Texas at Arlington.

## A Human's Take

The fun part is two robots on a small pitch. The useful part is the timing. A better guess of the shot side almost doubled saves. Waiting for a slightly better picture barely moved the rate. Once the kicking leg is committed, extra looking does not buy the keeper a new body.

I would not treat 0.472 as a goalkeeping product. I would treat 0.29 seconds as a reminder that the policy and the limb run out of options on different clocks.

## Sources

- [arXiv — Dynamics-Induced Commitment in Learning-Based Robotic Penalty Kicks](https://arxiv.org/abs/2609.21100)
- [arXiv HTML — penalty-kick paper](https://arxiv.org/html/2609.21100v1)
