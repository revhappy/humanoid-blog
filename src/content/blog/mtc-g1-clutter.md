---
title: "A G1 Ducks and Crawls Through Clutter It Learned in VR"
description: "George Mason's MTC retargets VR demos onto a Unitree G1 that ducks, crawls, and side-steps real obstacles."
pubDate: 2026-09-21
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/mtc-g1-clutter.png"
readTime: "3 min read"
featured: false
draft: false
---

A Unitree G1 can duck a low opening, side-step a gap, and step over rocks after people showed the moves in a headset. The method is Moving Through Clutter, or MTC, from George Mason University's RobotiXX lab, with a co-author at New York University. The paper was submitted to arXiv on September 17, 2026.

The pitch is simple and a little sneaky. Building a physical junk pile for every demo is slow, so the team generates clutter in virtual reality and has a person walk through it at the robot's scale. A retargeting step, MTC-SAMR, turns that human path into a humanoid reference that keeps clearance between the robot body and the scene. Privileged teachers track those references. A student policy then has to do the job from sensors.

<figure>
  <img src="/images/heroes/mtc-g1-clutter-2.png" alt="Diagram of VR capture, retargeting through clutter, and a humanoid policy" loading="lazy" />
  <figcaption>MTC captures a person in procedural clutter, then retargets the motion onto a humanoid. Source: arXiv:2609.21107.</figcaption>
</figure>

On the authors' MTC-Challenge, the paper reports a 70.2% collision-free rate across diverse scenarios, including crawling through low openings and squeezing through narrow gaps. The same HTML breaks that out by task. In simulation, a generalist policy lands between 70.2% on a corridor and 97.7% on the side-step task they label Sidewalk. A scene-specific specialist is higher on most of those rows. A comparison policy they call CAT scores 0% on the crawl in that table.

Hardware is five trials per skill on a physical G1. The table lists 5/5 for ducking, 5/5 for the side-step, 3/5 for stepping over, and 3/5 for crawling. The corridor row has no hardware count. On the robot, onboard lidar is turned into a voxel grid with FAST-LIO2 so the policy sees the same kind of map it trained on.

The retargeting detail that shows up in their figure is the look-ahead window. A one-frame fit bends the G1 into the obstacle. A window of 80 frames keeps the body more upright and centered while it approaches the squeeze. That is the difference between reacting late and starting the duck early.

<figure>
  <img src="/images/heroes/mtc-g1-clutter-3.png" alt="Comparison of a human squeeze, a colliding one-frame retarget, and an upright 80-frame retarget on a Unitree model" loading="lazy" />
  <figcaption>One-frame retargeting hits the gap. A longer window stays clear. Source: arXiv:2609.21107.</figcaption>
</figure>

## A Human's Take

I like that the training world is fake and the test robot is not. Five-out-of-five ducks on a real G1 is a cleaner receipt than another sim montage. Three-out-of-five crawls is the number I would put on the whiteboard. Low clearance is where humanoid bodies stop being a costume and start being a geometry problem.

The VR shortcut only works if the retargeter refuses to cheat through the wall. Their clearance constraint is the whole story. If that holds up on a messier pile than foam blocks and a shoe, this is a useful way to teach awkward locomotion without building a disaster set.

## Sources

- [arXiv — Learning Scene-Aware Humanoid Locomotion through 3D Clutter](https://arxiv.org/abs/2609.21107)
- [arXiv HTML — MTC paper with figures and Table III](https://arxiv.org/html/2609.21107v1)
