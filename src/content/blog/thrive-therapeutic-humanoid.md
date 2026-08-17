---
title: "THRIVE Is a 50-Centimeter Therapist You Can Also Render"
description: "Ohio State, Georgia Tech, and Georgia State pair VR rehab games with a 270 g, 7-DoF robot coach for kids with CP."
pubDate: 2026-08-17
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/thrive-therapeutic-humanoid.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**THRIVE** (Therapeutic Humanoid Robot In Virtual Environment) is a home rehab stack for kids with upper-limb motor impairment, written up this week by **Jin Xu**, **Yu-Ping Chen**, and **Ayanna Howard** at Georgia Tech, Ohio State, and Georgia State.

The paper’s diagnosis is familiar: cerebral palsy hits about **1 in 345** U.S. children, most of them in the arms, and clinic-style repetition is hard to keep doing at the kitchen table. THRIVE’s answer is three parts that unplug from each other: VR games, a depth camera, and a small social robot that can also be a video or a sprite.

<figure>
  <img src="/images/heroes/thrive-therapeutic-humanoid.jpg" alt="Two yellow 3D-printed THRIVE therapist humanoids side by side" loading="lazy" />
  <figcaption>THRIVE therapist robots from the paper. Source: arXiv:2608.14462.</figcaption>
</figure>

## Four games, no Kinect

The games are a Super Pop VR remake after Microsoft killed the original camera. Targets can be bubbles, squares, or cartoon characters, with color, shape, and speed set per child.

- **Popping**: both arms, green bubbles good, red bubbles bad, timed
- **Hitting**: knock through a row of three to five
- **Catching**: one bubble drifting on both axes
- **Grabbing**: touch, carry, drop into a box

The motions they want are overhead, outward, and across midline, the ones kids with CP tend to skip. Tracking started on an **Azure Kinect DK** and moved to an **Orbbec Femto Bolt** after Azure Kinect was discontinued in **2023**.

## A 270-gram coach with three bodies

The physical robot was designed with startup **Hello Robotics** (hello-robo.com). It is **3D printed**, about **50 cm** tall, about **270 g**, **7 DoF**, **Raspberry Pi 5**, speakers, mics, and LED eyes. Green eyes mean idle. Blue means talking. The arms do a small orator wave while it speaks.

Scripts come from the older SuperPop-NAO study, then **GPT-4** writes variants so kids do not hear the same sentence every session. A canned intro in the paper: “Hello. My name is Thrive, and I will be playing SuperPop with you today…” Mid-game it can say “Move a little faster” or “Let us move at the exact same speed.” After a round: “Fantastic! Wow! Good game.”

If you cannot ship the plastic, they film the same behaviors and play them as a remote-presence therapist, or render a CAD-matched virtual agent inside the game so a regular PC is enough.

<figure>
  <img src="/images/heroes/thrive-therapeutic-humanoid-2.jpg" alt="Early prototype and production THRIVE humanoid robot" loading="lazy" />
  <figcaption>Desktop therapist robots shown in the THRIVE paper. Source: arXiv:2608.14462.</figcaption>
</figure>

## What this paper is not

It is a platform paper. Future work, they write, is a trial with children with CP on physical versus remote-presence setups, looking at engagement, adherence, and motor outcomes. Funding is NIDILRR award **90IFST0009**. Hello Robotics’ public site currently leads with **MAKI Pro**, a desktop Android; the paper cites that company as the hardware partner, not as a clinical-result source.

<figure>
  <img src="/images/heroes/thrive-therapeutic-humanoid-3.jpg" alt="Remote-presence THRIVE robot video setup" loading="lazy" />
  <figcaption>Yellow THRIVE robot on the left, popping-game session on the right. Source: arXiv:2608.14462.</figcaption>
</figure>

## A Human's Take

I like that they treated the robot as a coach you can swap, not as the therapy. A 270-gram 7-DoF print is the right size for a kid’s desk. The missing piece is the trial they have not run yet. Until someone measures reaching after eight weeks, this is a well-documented toy chest with a very polite yellow face.

## Sources

- [arXiv:2608.14462 — THRIVE abstract](https://arxiv.org/abs/2608.14462)
- [arXiv PDF — THRIVE full paper](https://arxiv.org/pdf/2608.14462)
- [Hello Robotics — company site cited in the paper](https://www.hello-robo.com/)
---
