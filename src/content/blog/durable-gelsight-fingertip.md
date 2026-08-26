---
title: "MIT’s New Tactile Fingertip Lasts Days Where GelSight Mini Lasts Minutes"
description: "Adelson’s lab posts a snap-on vision-based fingertip whose TPU skin survives hours of sanding and days of 39 N probes."
pubDate: 2026-08-26
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/durable-gelsight-fingertip.png"
readTime: "5 min read"
featured: false
draft: false
---

GelSight-style fingertips see contact in high resolution and then die on the job. **F. Richard Cottrell**, **Megha H. Tippur**, and **Edward H. Adelson** at MIT CSAIL posted an August 25 arXiv paper on a rounded, camera-in-finger sensor built so the worn part is a snap-on cartridge.

Under their sanding test, the new skin reaches a protective-film rupture after about **2–3 hours**. Commercial **GelSight Mini** and **DIGIT** specimens they bought in March 2026 ruptured in about **24–30 seconds**. On a repetitive probe at **39.2 N** (**4.0 kgf**) and **45** cycles a minute, all **nine** of their sensors were still usable when they stopped: seven after **5** days, one after **6**, one after **8**. Mini and DIGIT showed first film rupture in **25–35 minutes**.

<figure>
  <img src="/images/heroes/durable-gelsight-fingertip.png" alt="Two black rounded tactile robot fingers next to a US quarter for scale" loading="lazy" />
  <figcaption>Two sizes of the humanoid tactile finger. Source: Cottrell, Tippur, and Adelson, arXiv:2608.24242.</figcaption>
</figure>

## What is in the finger

The stack is a miniature color camera, RGB LED boards, a rigid housing, and a removable cartridge. The cartridge is an **~85 µm** thermoplastic-polyurethane film on **3 mm** of platinum-cured silicone (Shore A about **6.5**) bonded to a Septon 2104 snap-in body. The outer film is nonpigmented and textured so the camera sees contact geometry and nearby objects, not a painted blob.

They evaluated several cartridge recipes on the same housing. This paper focuses on the transparent textured one because it copies surface detail well and lets them judge the polyurethane without pigment or fiducials getting in the way.

<figure>
  <img src="/images/heroes/durable-gelsight-fingertip-2.png" alt="Disassembled tactile finger: camera, LED boards, housing, and clear sensor cap" loading="lazy" />
  <figcaption>Camera, LEDs, housing, and the snap-on sensing cap. Source: the same paper.</figcaption>
</figure>

## How they tried to kill it

Two lab protocols, not a factory shift:

- **Sanding:** 3-inch drum, 400-grit, 80 rpm. At a 200 g scale reading (~1.96 N), mean time to first TPU rupture was **180 minutes** (n=2). DIGIT **0.5 min**, Mini **0.4 min**.
- **Repetitive probe:** 6 mm probe, 20° face, 39.2 N peak, 0.3 s hold, 45 cycles/min. At load the probe sinks ~3.5 mm and slides ~1.1 mm sideways. After days, a circular imprint shows up. Tactile images of a BGA and a textile still read. A slower failure is a ~1 mm TPU–gel blister.

They are careful: this is an accelerated comparison, not a prediction of warehouse life. Mini and DIGIT also differ in geometry and intended use. The point they will argue is the combination — much longer lab life, damage that stays local, and a cartridge you swap with a plastic pry tool, no recabling or recalibration.

<figure>
  <img src="/images/heroes/durable-gelsight-fingertip-3.png" alt="Object photos next to tactile-camera images of a BGA, quarter, recycle mark, gauge, threads, and stitching" loading="lazy" />
  <figcaption>What the finger camera sees versus the object. Source: Cottrell et al.</figcaption>
</figure>

## A Human's Take

A fingertip that lasts eight days under a 4 kgf stamp is the kind of boring hardware I want on a hand that actually works. Swap-the-skin is the design I would copy even if the numbers shrink in a real cell. Next receipt: hours of picking, not hours of sandpaper.

## Sources

- [arXiv:2608.24242 — A Durable Vision-Based Tactile Fingertip](https://arxiv.org/abs/2608.24242)
- [HTML paper with figures](https://arxiv.org/html/2608.24242v1)
