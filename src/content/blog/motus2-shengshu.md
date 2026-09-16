---
title: "Motus2 Screws in a Bulb, Then Grades Its Own Future"
description: "ShengShu’s world model hits 84% on five real dexterous tasks by coupling a policy, a video simulator, and a value head on Wuji and Sharpa hands."
pubDate: 2026-09-16
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/motus2-2.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A world model that only dreams the next frame is a screensaver. **Motus2** tries to close the loop: propose an action, imagine the video, score whether the task moved forward, then update the policy. **Yihang Luo**, ShengShu Technology’s co-founder and CEO, unveiled it on 10 September at the Inclusion Conference on the Bund. The company posted a press release on 14 September.

The research team sits at ShengShu’s GensPI lab and Tsinghua. Hardware partners named on the project page are **WuJi**, **Sharpa**, and **Tianji**.

<figure>
  <img src="/images/heroes/motus2-2.jpg" alt="Beige dual-arm robot wearing a cap and Wuji Hand 2 gloves at a white table" loading="lazy" />
  <figcaption>Wuji Hand 2 on a Tianji Gento Luna torso. Source: Motus2 project page.</figcaption>
</figure>

## One backbone, three jobs

Motus2 is a shared-parameter video-action model with three interfaces:

- a **policy** that emits action chunks
- a **simulator** that predicts the visual future of those chunks
- an **evaluator** that scores predicted progress

At test time, Best-of-N planning samples several chunks, ranks them, and executes the winner. After each chunk the robot takes a real observation and plans again. During post-training, model-based RL (DiffusionNFT in the paper) uses the same value signal to shift the policy. Prediction and evaluation weights stay frozen; only action-related parameters move.

Data is a pyramid: about **130,000** hours of raw egocentric recordings, from monocular web video up to synchronized stereo, then more than **100** hours of robot trajectories plus human-robot alignment. Under the same target-task fine-tuning, human-only pretraining averages **51%** on five primary real-robot tasks. Adding robot-domain mid-training raises that to **84%**.

Those five tasks, 20 trials each, are placing a ball, multi-finger manipulation, attaching an eraser, screwing in a light bulb, and placing a phone.

A separate study on phone placement and multi-finger work puts the base policy at **65%**. Planning alone reaches 67.5%. MBRL alone reaches 72.5%. Both together hit **75%**.

A lightweight tactile expert refines each short sub-chunk from the latest contact window. On pulling a paper cup and tearing paper, adding it lifts average success from **60%** to **72.5%** (cup 65→75, paper 55→70).

<figure>
  <img src="/images/heroes/motus2.jpg" alt="Headless dual-arm torso in a green jacket with black Wuji hands over a pan of toast" loading="lazy" />
  <figcaption>Wuji hands on Tianji Marvin arms during kitchen-style data collection. Source: Motus2 project page.</figcaption>
</figure>

## The bodies

The project page shows three bimanual setups used for collection and post-training: Wuji hands on Tianji Marvin arms, **Wuji Hand 2** on Tianji Gento Luna, and **Sharpa Wave** hands on the same Luna torso. Alignment capture uses Wuji Human Gloves without commanding a robot.

Released demos include screwing a bulb, tearing paper with both hands, turning pages, opening a can, and finding a hidden object.

<figure>
  <img src="/images/heroes/motus2-3.jpg" alt="Same Luna torso with silver Sharpa Wave dexterous hands on a table" loading="lazy" />
  <figcaption>Sharpa Wave hands on Tianji Gento Luna. Source: Motus2 project page.</figcaption>
</figure>

ShengShu frames Motus2 as L3 (“acting in the world”) on its five-level general-world-model roadmap, with a look toward L4 autonomous agents. The press release is clear that long-horizon open-world learning is still future work. The arXiv paper is **2608.30237**, revised 10 September.

## A Human's Take

Screwing in a bulb at 84% after you add robot hours is the number I care about, not the 130,000-hour pyramid. Human video buys you priors; the mid-training is what makes the hands stop missing the socket. Best-of-N planning plus a frozen evaluator is a grown-up way to spend extra inference, as long as nobody confuses “self-evolving” with a robot that trains itself on your kitchen overnight. Watch whether those 20-trial task sets survive a second lab with a different Sharpa or Wuji unit.

## Sources

- [ShengShu — Motus2 press release](https://www.prnewswire.com/news-releases/shengshu-technology-unveils-motus2-a-self-evolving-general-world-model-for-dexterous-manipulation-302877367.html)
- [Motus2 project page](https://motus-robotics.github.io/motus2/)
- [Bi et al. — Motus2 (arXiv:2608.30237)](https://arxiv.org/abs/2608.30237)
