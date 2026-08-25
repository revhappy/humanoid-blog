---
title: "RAI’s Koala Gripper: Dual-Thumb Hands for Humans and Robots"
description: "The Robotics and AI Institute’s Koala pair matches a handheld data gripper to a backdrivable robot hand for tool-use learning."
pubDate: 2026-08-24
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/koala-gripper.jpg"
readTime: "4 min read"
featured: false
draft: false
---

The **Robotics and AI Institute** put a paper on arXiv on **August 20** for **Koala**, a gripper that exists in two bodies at once: a handheld **capture device** a person can run, and a motorized **robot device** that is supposed to copy it.

The point is not another five-finger humanoid hand. It is a **dual thumb** (the koala joke) plus two underactuated fingers, **three** controllable degrees of freedom, built so the camera view and the kinematics match from demo to replay.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/ZoygFCWAVhg"
    title="Koala Gripper paper video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Paper video linked from arXiv:2608.20546. Source: RAI Institute / YouTube.</p>

## Why co-design, not a bolt-on handle

Most handheld data tools start from an existing robot gripper and add a handle. RAI’s May 12 lab blog says that path failed on ergonomics and wrecked data quality. Koala was drawn as one mechanism, then split into a hand-powered trigger version and a motorized version.

From the paper and the project page:

- two **1-DoF** preshaping underactuated fingers opposite a **1-DoF** pivoting dual thumb
- a **9-bar** finger linkage, one actuated DoF and one underactuated
- robot fingers described as backdrivable, with effective mass “on the order of tens of grams”
- three standard sizes and padded grips on the capture device
- the robot side uses a frameless motor and a high-pitch ballscrew for low reflected inertia

The blog is blunt about parallel jaws: practiced operators still struggled to run a ratchet, turn a screwdriver, or hold a nail while the other hand hammered. Koala is aimed at power grasps, pinch grasps, and human tools.

<figure>
  <img src="/images/heroes/koala-gripper.jpg" alt="Handheld Koala gripper and robot-mounted Koala gripper both driving a cordless drill on a bolt" loading="lazy" />
  <figcaption>Figure 1 in the paper: capture device (a) and robot device (b) on the same drill-and-bolt task. Source: arXiv:2608.20546.</figcaption>
</figure>

## What they showed it doing

The project page lists grasps parallel jaws tend to lose: nails, keys, pencil pinches, cards, plates, bowls, cups. The paper’s abstract adds secure grasps on a wide object set, forceful tool use, and precise singulation, then an end-to-end imitation-learning pipeline from those demos.

I am not inventing success rates. The abstract does not print a percentage. The claim on the page is qualitative plus the hardware photos.

<figure>
  <img src="/images/heroes/koala-gripper-5.jpg" alt="Motorized Koala robot gripper on a wooden table, two fingers and a dual thumb visible" loading="lazy" />
  <figcaption>Actuated robot device. Source: RAI Institute blog, May 12, 2026.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/koala-gripper-6.jpg" alt="Handheld Koala capture gripper with trigger and dual thumb on a wooden table" loading="lazy" />
  <figcaption>Handheld capture device. Source: RAI Institute blog.</figcaption>
</figure>

## A Human's Take

I am here for the boring matching problem. If the camera on the human handle does not see what the robot camera will see, the policy is guessing. Koala treats that as a mechanical design job, not a dataset job.

Three controllable DoFs will not fold laundry. It might run a drill without teaching a 20-DoF tendon hand first. That is a reasonable trade, if the imitation pipeline actually transfers. The paper says it does. I want the failure cases next.

## Sources

- [arXiv:2608.20546 — Koala Gripper](https://arxiv.org/abs/2608.20546)
- [Koala Gripper project page](https://koalagripper.rai-inst.com/)
- [RAI Institute — Getting a Grip on Robotic Data Collection](https://rai-inst.com/resources/blog/handheld-robotic-data-collection/)
- [Koala Gripper paper video (YouTube)](https://www.youtube.com/watch?v=ZoygFCWAVhg)
