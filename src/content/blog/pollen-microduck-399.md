---
title: "Pollen’s $399 Microduck Is a Desk Biped You Can Retrain"
description: "Hugging Face’s Pollen Robotics opened $399 Microduck pre-orders: a 25 cm open-source-software biped that walks, skates, and trains in sim."
pubDate: 2026-08-29
category: "Deals"
author: "Shar Hendrix"
heroImage: "images/heroes/pollen-microduck.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Pollen Robotics**, Hugging Face’s Bordeaux robotics team, opened pre-orders on **27 August 2026** for **Microduck**, a 25-centimeter biped priced at **$399** before taxes and shipping. The official blog and press kit put first deliveries before Christmas 2026 in North America, Europe, and the UK. Four shells ship at launch: Cream, Graphite, Lavender, and Sky.

The store page now carries a different shipping note. After the first rush of orders, Pollen says it cannot promise Christmas for new carts, and it currently estimates **4–6 months** for those later orders, first-ordered first-shipped.

Hugging Face co-founder **Thomas Wolf** wrote on X that the team ended the first 24 hours with more than **$2.6 million** of Microducks ordered.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/RAtzEyGBGFU"
    title="Pollen Robotics Microduck launch film"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Official launch film: walk, fall recovery, roller-skate, and beak grasp. Source: Pollen Robotics / YouTube.</p>

## What is in the duck

The press kit and store page agree on the hardware:

- **15 motors** across legs, head, and neck
- **25 cm** tall, **14 cm** wide, **under 800 g** (the store lists **780 g**)
- Front camera with a dedicated “REC” indicator, **8×8** time-of-flight LiDAR, two IMUs
- Articulated grasping beak, mics, speaker, NFC in head and beak
- **Rockchip RK3566** plus an onboard AI accelerator, **1 GB RAM**, **32 GB** storage
- Removable **NP-F550** camera battery, **2,600 mAh**, about an hour of runtime
- Game controller in the box

Out of the box it walks with a waddle, sits, crouches, roller-skates, picks things up, and stands itself up after common falls. The onboard policy loop runs at **50 Hz**. Each unit gets a generated voice the first time it wakes up.

<figure>
  <img src="/images/heroes/pollen-microduck-2.jpg" alt="Three Microduck bipeds on a turf pitch around a small ball, one held by a hand" loading="lazy" />
  <figcaption>Pollen’s launch shoot: a three-duck kickabout. Source: Pollen Robotics press kit.</figcaption>
</figure>

## Open software, closed shells

The press kit is blunt: “open source” here means the **software stack**, not CAD or electronics. Do not call it open-source hardware. GitHub already has `pollen-robotics/microduck` (SDK and robot software) and `microduck_rl` (simulation, PPO, sim-to-real). License on the main repo is **Apache-2.0**.

The pitch is the cheap failure loop. A bad policy dumps a 780-gram duck on the floor, not a lab humanoid. Train in MuJoCo, export ONNX, run it on the metal, tweak, share the policy. Hugging Face CEO **Clément Delangue** called it “an open-source robot you can teach new tricks with reinforcement learning,” per TechCrunch.

<figure>
  <img src="/images/heroes/pollen-microduck-3.jpg" alt="Cream-and-orange Microduck standing on a wooden desk in front of a monitor" loading="lazy" />
  <figcaption>Desk-scale biped with the camera-eye and orange feet. Source: Pollen Robotics press kit.</figcaption>
</figure>

Pollen’s last consumer robot, **Reachy Mini**, is a sit-still interaction platform. The launch post says more than **10,000** of those have shipped. Microduck is the mobility sibling: same company, opposite job.

Hackster notes the stack is meant to land on GitHub before the first robots ship. The company already put the repos up at launch.

## A Human's Take

Four hundred dollars for a walking policy loop you can actually brick-and-unbrick on a kitchen table is the part I care about. The $2.6 million first-day number is a demand signal, not a science result. Pollen already walked back Christmas for late orders, which is the honest hardware sentence. If the sim-to-real recipes work for people who are not on the Bordeaux team, this is a Raspberry Pi moment for legs. If they only waddle out of the box, it is a very cute paperweight with a GitHub repo.

## Sources

- [Pollen Robotics — Meet Microduck](https://pollen-robotics.com/microduck/blog/introducing-microduck/)
- [Pollen Robotics — Microduck press kit](https://pollen-robotics.com/microduck/press-kit/)
- [Pollen store — Microduck product page](https://store.pollen-robotics.com/products/microduck)
- [TechCrunch — Hugging Face is selling a cute $399 open source duck robot](https://techcrunch.com/2026/08/27/hugging-face-is-selling-a-cute-399-open-source-duck-robot-microduck/)
- [Hackster — Microduck wants to make physical AI easy](https://www.hackster.io/news/microduck-wants-to-make-physical-ai-easy-a10f0a915af1)
- [YouTube — We made a new robot. (Pollen Robotics)](https://www.youtube.com/watch?v=RAtzEyGBGFU)
- [GitHub — pollen-robotics/microduck](https://github.com/pollen-robotics/microduck)
- [X — Thomas Wolf on first-24-hour orders](https://x.com/Thom_Wolf/status/2093295950605279501)
