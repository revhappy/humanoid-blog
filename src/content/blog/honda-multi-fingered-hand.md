---
title: "Honda’s Four-Finger Hand Goes After Factory Assembly"
description: "Honda’s 16-DoF multi-fingered hand holds 50 N at a fingertip and is entering a RIKEN/NEDO Physical AI project aimed at harness work."
pubDate: 2026-08-24
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/honda-hand.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Honda is back in robotics with a **four-finger** hand, not another ASIMO. The company’s R&D page lists **16** actuated joints, **50 N** of continuous fingertip force it can hold for **150 seconds**, and more than **450,000** durability cycles, including **24,000** lifts of a **5 kg** weight.

Kyodo, writing in early August from the Wako lab, says Honda wants the hand in manufacturing in the **early 2030s**. Newswitch reported on **August 20** that RIKEN and Honda R&D have started a NEDO-backed Physical AI project around it.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/iQBme5yV1_Q"
    title="Honda multi-fingered hand demonstration"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Official clip on Honda R&D’s multi-fingered hand page. Source: Honda / YouTube.</p>

## The hardware Honda will talk about

Honda’s own spec sheet:

- **16 DoF**, finger–thumb opposition, max continuous joint speed **180 deg/s**
- **50 N** continuous fingertip force, **150 s** hold
- **288** tactile channels in the fingers and palm, plus six-axis force sensors at each fingertip
- impact handling: if a finger hits something at **1.23 m/s**, control switches to absorb the hit
- four fingers. No little finger.

Kyodo says the hand can pick up a **1.6 mm** screw between thumb and index, rotate it, and start it in a hole. Newswitch, quoting Honda, puts peak fingertip force at about **12 kgf**, described as twice a human, and drive-mechanism durability above **8 million** cycles. Honda’s public page is the more conservative **50 N / 450k** set. I am keeping both, labeled.

<figure>
  <img src="/images/heroes/honda-hand.jpg" alt="Honda four-finger robotic hand on a lab fixture reaching toward a metal workpiece" loading="lazy" />
  <figcaption>The four-finger hand on a lab stand in Wako. Source: Kyodo News, June 18, 2026.</figcaption>
</figure>

Takahide Yoshiike, executive chief engineer at Honda R&D, told Newswitch the hardware is already close to what they wanted. The missing piece is the intelligence that can run it:

> “The hardware itself is already becoming ideal. We need intelligence capable of handling this hand.”

ASSEMBLY magazine, in an August 11 factory-assembly write-up, quotes Honda researcher Kenichiro Sugiyama on a related point: a lot of market “hands” are still fancy grippers. Honda is trying to train hardware, control, and AI together. Sugiyama’s leftover problem is the “last millimeter” on deformable or slippery parts.

<figure>
  <img src="/images/heroes/honda-hand-3.jpg" alt="Close-up of Honda’s four-finger hand gripping a small metal bar in a lab fixture" loading="lazy" />
  <figcaption>Precision grasp on a lab workpiece. Source: Kyodo News.</figcaption>
</figure>

## What RIKEN is adding

RIKEN’s July 1 notice says METI/NEDO selected a joint proposal with Honda R&D: “development of multisensory physical intelligence and a multi-finger AI robot for autonomous unstructured dexterous manipulation.” The factory targets are **set-pack** (picking mixed incoming parts into kits) and **wire-harness** routing.

RIKEN owns the intelligence, flexible tactile sensors, and system integration. Honda owns hardware, control, and in-plant trials. Tatsuya Harada, who leads RIKEN AIP’s Physical Intelligence group, is the research lead on the RIKEN side.

Newswitch says the NEDO award is **¥100 billion over five years**, with most of that budget going to compute for a multisensory model. RIKEN’s own page does not print that number. I am using Newswitch for the yen figure.

<figure>
  <img src="/images/heroes/honda-hand-2.jpg" alt="Honda R&D engineer Takahide Yoshiike standing behind the multi-fingered hand on a lab table" loading="lazy" />
  <figcaption>Yoshiike with the hand in Wako. Source: Kyodo News, June 18, 2026.</figcaption>
</figure>

## A Human's Take

I like that Honda is not pretending this is a full humanoid relaunch. It is a forearm, four fingers, and a factory problem that still eats people: harnesses and kitting. The 450,000-cycle number is the one that made me stop. Most dexterous-hand demos never say how many times the tendons survived.

The RIKEN piece is the honest admission. The hand can hold 50 N. It still needs a brain that will not crush a harness or drop a 1.6 mm screw the first time the lighting changes. That is the actual project.

## Sources

- [Honda R&D — Multi-fingered Hand](https://global.honda/en/RandD/field/hgrx/honda-multi-fingered-hand/)
- [Kyodo News — Honda revives robotics ambitions after ASIMO](https://english.kyodonews.net/articles/-/81336)
- [RIKEN — dexterous-operation intelligent machines project](https://www.riken.jp/pr/news/2026/20260701_1/index.html)
- [Newswitch / Yahoo News — RIKEN and Honda ¥100 billion multi-finger project](https://news.yahoo.co.jp/articles/171cfd38a2707fbab117c6c3fee9068b2c720157)
- [ASSEMBLY — Honda advances dexterous robot hand for factory assembly](https://www.assemblymag.com/articles/100305-honda-advances-dexterous-robot-hand-for-factory-assembly)
- [Honda — multi-fingered hand demo (YouTube)](https://www.youtube.com/watch?v=iQBme5yV1_Q)
