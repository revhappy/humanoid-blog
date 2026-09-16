---
title: "ETH Puts Legs on a Hand, Then Makes It Type"
description: "An 818 g WUJI hand crawls untethered on 14 surfaces, recovers from falls, and presses keys while holding itself up."
pubDate: 2026-09-16
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/fingers-as-legs.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A walking robotic hand has to do three jobs with the same fingers: move, hold itself up, and poke the world. **Amirhossein Kazemipour**, **Hehui Zheng**, and **Robert Katzschmann** at ETH Zurich’s Soft Robotics Lab posted a paper on 15 September showing that an off-the-shelf **WUJI** right hand can learn those skills without a new finger design or a custom position controller.

The finished robot weighs **818 g**. The stock hand is **738 g**. A dorsal pack adds a Raspberry Pi Zero 2 W, a BNO085 IMU, and a four-cell battery. Onboard power and compute make the platform untethered.

<figure>
  <img src="/images/heroes/fingers-as-legs.jpg" alt="Photo grid of a black anthropomorphic hand crawling on fourteen surfaces and pressing a keyboard" loading="lazy" />
  <figcaption>Fourteen crawl surfaces, then keyboard presses and a cube push. Source: Kazemipour et al., arXiv:2609.17172, Figure 1.</figcaption>
</figure>

## Fingers as legs

The hand has **20** actuated joints, four per finger, and they are not backdrivable. Firmware low-pass-filters position commands at **3 Hz**. Each joint is limited to **1.0 A** during the experiments.

Policies run at **50 Hz** on the Pi as a 32-bit ONNX model. A 500 Hz serial driver talks to the motors. Crawl commands come in over a dedicated 2.4 GHz gamepad link. Wi-Fi stays out of the locomotion loop.

The researchers keep the unequal fingers and opposed thumb. They do not mirror the hand into a hexapod. A stance-calibrated control frame levels the palm’s natural tilt, and a footprint reward pulls each fingertip toward its own nominal stance. Fore-aft steps are cheaper than sideways or vertical drift, so the policy can choose when a finger lifts.

<figure>
  <img src="/images/heroes/fingers-as-legs-2.jpg" alt="Hardware photo of the WUJI hand with dorsal compute pack next to its Isaac Sim model" loading="lazy" />
  <figcaption>Hardware versus the Isaac Sim model, with the stance-calibrated control frame. Source: arXiv:2609.17172, Figure 2.</figcaption>
</figure>

In simulation, that reward moved the hand faster than quadruped rewards adapted to the same body. On hardware, the crawl policy crossed **14** surfaces: rubber, carpet, hardwood, tile, diamond plate, metal grating, a hard court, asphalt, concrete, cut stone, weathered stone, artificial turf, grass, and gravel.

Steering is lopsided. Without a yaw command the hand drifts right at about **6°/s**. A constant correction straightens it. Across **21** trajectories, mean path speed was **0.093 m/s**. Closed-loop IMU heading worked for ±15° steps and a 30° right turn; 30° left turns ran into the command limit.

## Typing while standing on itself

A separate recovery policy started from fallen poses. The hand righted itself in **21 of 25** hardware trials (**84%**): 11 of 14 thumb-side falls and 10 of 11 wrist-side falls. Four stalls came from fingers catching on each other.

Keyboard pressing is the party trick. The hand supports its own weight, then hits arrow keys without vision. In a 32-command sequence it scored **29** correct presses over **72.5 s**, with a maximum tilt of **7.7°**. Median command-to-keystroke latency on hits was **0.25 s**. All three misses were Up commands that clipped Right Shift. The same interface completed 9- and 12-move Sokoban solutions.

<figure>
  <img src="/images/heroes/fingers-as-legs-3.jpg" alt="Four close-ups of a robotic hand pressing Down, Left, Right, and Up keys, plus a latency plot" loading="lazy" />
  <figcaption>29 of 32 key presses hit. Median hit latency 0.25 s. Source: arXiv:2609.17172, Figure 8.</figcaption>
</figure>

With an overhead camera, one policy approached a **40 mm**, **41.4 g** PLA cube and pushed it to targets **10–40 cm** away. Across **15** deliveries, final target error averaged **17 mm**.

<figure>
  <img src="/images/heroes/fingers-as-legs-4.jpg" alt="Sequence of a robotic hand approaching and pushing a cube to a marked target" loading="lazy" />
  <figcaption>One policy, approach through delivery. Source: arXiv:2609.17172, Figure 9.</figcaption>
</figure>

## A Human's Take

I’m so here for a hand that crawls onto a keyboard and finishes a puzzle while holding its own weight. The useful idea is not “Thing from the Addams Family.” It is a compact manipulator you could drop near a tight opening, let it walk the last meter, and retrieve later. The heading bias and the four recovery stalls are the honest part: five unequal fingers are a terrible chassis, and they still made it work a shift on gravel.

## Sources

- [Kazemipour, Zheng, Katzschmann — Fingers as Legs (arXiv:2609.17172)](https://arxiv.org/abs/2609.17172)
- [Paper HTML with figures](https://arxiv.org/html/2609.17172)
