---
title: "TwinDEX Matches a Wearable Hand to the Robot So Data Doesn’t Need Retargeting"
description: "X Square Robot’s TwinDEX pairs a 3-finger, 9-DoF wearable with a matching robot hand for robot-free dexterous data."
pubDate: 2026-09-03
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/x-square-twindex-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**X Square Robot** introduced **TwinDEX** on **2 September 2026**: a wearable three-finger exoskeleton and a robot hand that share the same **nine degrees of freedom**, seven of them active. The bet is that if collection hardware and deployment hardware look and move alike, you can train a policy without parking a robot in the capture booth.

The Shenzhen company posted a [project page](https://x2robot.com/en/pages/twindex) and a PR Newswire note the same day, plus a four-and-a-half-minute demo.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/rzmOoZ1qQVs"
    title="TwinDEX wearable-to-robot chemistry demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Wearable capture on the left, matched robot hand on the right. Source: X Square Robot / YouTube.</p>

## Same fingers, both sides

Both devices use a **thumb, index, and middle finger**. The project page says the team scored candidate morphologies on eight manipulation primitives and settled on **seven active + two passive** DoF as the cost/reliability trade: more fingers help, then the packaging and torque budget get ugly.

The page spells out the split:

- **Thumb**: four DoF, three active (CMC flexion/abduction, MCP flexion). IP is a passive four-bar off the MCP.
- **Index**: three active DoF (MCP flexion and abduction, PIP flexion).
- **Middle**: active MCP, passive PIP via another four-bar. The shell is wide enough that the operator’s middle, ring, and pinky share that finger so the worn rig still *looks* like the robot.

PR Newswire lists the same architecture and adds the alignment list: kinematic chains, joint axes, link proportions, contact geometry, surface materials, visual appearance, and sensor placement. Finger states are meant to map straight into robot joint space.

<figure>
  <img src="/images/heroes/x-square-twindex.jpg" alt="Operator wearing TwinDEX exoskeleton gloves beside a robot performing the same table task" loading="lazy" />
  <figcaption>Robot-free collection versus the matched end effector. Source: X Square Robot / YouTube.</figcaption>
</figure>

The capture stack records multi-view RGB, six-DoF wrist poses, joint angles, and fingertip tactile signals, with measured delays so training observations line up with deployment timing.

## Chemistry without on-robot demos

The headline demo is a **standardized chemistry experiment** run in one uncut take. PR Newswire counts **24** sub-actions (open and stabilize containers, thin scooper, rubber-bulb pipette, liquids and solids, a nearly transparent glass rod, pour, tool switches, two-handed work). The project page says **25** in one paragraph and **24** in another. I am treating it as a long, contact-rich lab sequence, not a precise 24-vs-25 score.

Both sources say the policy was trained **from scratch on a few hundred robot-free episodes, with no on-robot training data**. On a collection benchmark, TwinDEX reports **5.3×** effective throughput versus on-robot teleoperation, and “≈1:1” learning efficiency against the same number of on-robot demos.

Everyday eval tasks listed in the press note: cap twisting, broom-and-dustpan sweeping, sliding out and opening a book, toolbox latches, syringe work.

## A Human's Take

Matching the glove to the hand is the interesting hardware move. If the 5.3× collection number holds outside a staged lab, this is how you stop treating every dexterous demo as a scarce robot-hour. I still want to see the “few hundred episodes” count published as a table, and whether a new kitchen or a new bottle shape needs another hundred.

## Sources

- [X Square Robot — TwinDEX project page](https://x2robot.com/en/pages/twindex)
- [PR Newswire — TwinDEX robot-free data collection](https://www.prnewswire.com/news-releases/twindex-introduces-a-scalable-path-from-robot-free-data-collection-to-real-world-dexterous-manipulation-302867559.html)
- [YouTube — TwinDEX wearable-to-robot demo](https://www.youtube.com/watch?v=rzmOoZ1qQVs)
