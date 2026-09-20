---
title: "MIT’s Robot Arm Builds and Tunes a Laser in 30 Minutes"
description: "A 7-joint arm with QR-coded optic housings assembles a tabletop laser cavity in 50 moves, then restabilizes after someone bumps a part."
pubDate: 2026-09-20
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/mit-robotic-optics-lab.jpg"
readTime: "4 min read"
featured: false
draft: false
---

MIT researchers built a tabletop optics lab that a robot can assemble, align, and tear down. In the demo, the arm built a working **laser cavity** with **50** moves in **30 minutes**, starting from parts dropped on the table at random.

MIT News posted the work on **17 September 2026**. IEEE Spectrum’s Video Friday picked up the clip on **18 September**. The team presents the method at **IROS** later this month.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/AO1u9JoXLpk"
    title="MIT robotic optics lab builds and aligns a laser"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Arm placing QR-coded mirrors and lenses, then locking a red beam. Video sped 2×. Source: MIT News / YouTube.</p>

## How the bench is set up

The hardware is a **seven-joint** arm on a metal table. Each mirror, lens, or source sits in a 3D-printed housing with a magnetic base and a QR code that names the part and its size. A Wi-Fi “fine-adjustment tool” clips onto a standard mount and turns knobs by radio. Two overhead cameras watch the whole plate.

Software maps every step: which part it is, how to grab it without a crash, where it belongs. A simple UI lets a user drag a mirror icon; the arm does the pick-and-place.

<figure>
  <img src="/images/heroes/mit-robotic-optics-lab.jpg" alt="White seven-joint robot arm over QR-coded optical housings on an optical table" loading="lazy" />
  <figcaption>The arm over QR-coded housings. Source: MIT News, 17 September 2026.</figcaption>
</figure>

A laser cavity is two mirrors around a crystal. Light bounces until the escaped beam is intense enough to count as a laser. Postdoc **Sachin Vaidya** said:

> "We start with randomly placed components. At the end, we have a fully functioning laser that the robot has built."

When the team shoved a part, the system restacked alignment and held the beam. Graduate student **Seou Choi** called the demo something a new trainee would not finish in an afternoon.

## What they want next

The group is adding sensing and space, plus a cloud app so a remote user can queue a protocol. Physics professor **Marin Soljacic** wants a robot that will run boring alignments around the clock. First in-house job: shine specified light at carbon-capture materials and read how they take up CO₂.

The paper on the stack is *A Framework for Closed-Loop Robotic Assembly, Alignment and Self-Recovery of Precision Optical Systems*. MIT News links the PDF on arXiv.

<figure>
  <img src="/images/heroes/mit-robotic-optics-lab-2.jpg" alt="Left: robot arm over QR-coded optics. Right: Seou Choi and Sachin Vaidya holding custom optic housings" loading="lazy" />
  <figcaption>Lab bench, then Choi (left) and Vaidya with a housing and motorized tuner. Source: Jennifer Chu / MIT News.</figcaption>
</figure>

Funders listed on the MIT News page include the Korea Foundation for Advanced Studies, NSF, Army Research Office, Parviz Tayebati, UROP, MGAIC, and Shell.

## A Human's Take

Micron-scale knob turning is the part of optics nobody misses. If the arm can put a cavity together from a pile of QR boxes and then fix a bump, that is a real shift, not a demo of a pretty gripper. I want the same log on a second bench, with a different kit, without a human hovering on the UI.

## Sources

- [MIT News — Robotic lab sets up and runs optics experiments on demand](https://news.mit.edu/2026/robotic-lab-runs-optics-experiments-on-demand-0917)
- [IEEE Spectrum — Video Friday: Two Birotors Make a Quadrotor (MIT optics clip)](https://spectrum.ieee.org/video-friday-quadrotor-from-birotor)
- [YouTube — MIT robotic optics lab video](https://www.youtube.com/watch?v=AO1u9JoXLpk)
- [arXiv:2603.21496 — A Framework for Closed-Loop Robotic Assembly, Alignment and Self-Recovery of Precision Optical Systems](https://arxiv.org/abs/2603.21496)
