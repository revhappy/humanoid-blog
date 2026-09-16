---
title: "XPACE Lets XPeng’s IRON Practice Recoveries in Its Own Simulator"
description: "A 15 September paper trains a shared video backbone as both IRON policy and world simulator, then fine-tunes on self-generated recoveries."
pubDate: 2026-09-16
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/xpace-iron.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**XPACE** is a world model that also has to drive the robot. Posted 15 September, the paper from **Jiacheng Wei**, **Jerry Bai**, **Xiaoyu Yue**, and colleagues trains one video backbone two ways: as a **world action model** that predicts IRON’s next moves plus future video, and as a **world simulator** that shows what a prescribed skeleton motion will look like.

The hardware is **XPeng’s IRON**, evaluated as **IRON-R01-1.11**. The authors report closed-loop control with streaming visual encoding and overlapping action plans published at about **10 Hz**.

<figure>
  <img src="/images/heroes/xpace-iron.jpg" alt="Diagram of human video, teleop, simulation, and an IRON-like humanoid used to train a joint world-action model" loading="lazy" />
  <figcaption>Human video, robot teleop, and a learned simulator feeding the same model. Source: Wei et al., arXiv:2609.17372, Figure 1.</figcaption>
</figure>

## A four-layer data pile

They organize **5,000 hours** of embodied video into a pyramid:

- **L1**: in-the-wild egocentric video, no action labels
- **L2**: human video with hand and wrist poses
- **L3**: task- and appearance-aligned “bridge” clips that look more like the robot workspace
- **L4**: IRON teleoperation with native robot actions

A separate failure set trains the simulator only, so it sees unsuccessful motions instead of always predicting a clean success. Human and robot arms share a kinematic schema: end-effector poses, hand articulation, torso and camera. Embodiment-specific linear projections sit at the action Transformer’s edges.

Training is staged. Stage I is video prediction. Stage II jointly trains policy and simulation, shifting the mixture toward robot data while keeping some human replay. Then the authors split the checkpoint.

<figure>
  <img src="/images/heroes/xpace-iron-2.jpg" alt="Architecture diagram of a shared causal video transformer feeding an action model and a world simulator" loading="lazy" />
  <figcaption>Shared video backbone, separate policy and simulator heads. Source: arXiv:2609.17372, Figure 4.</figcaption>
</figure>

## Recoveries the model invents

Stage III-sim adapts the simulator to its own generated context with self-gradient forcing, so rollouts do not only see clean recorded history. That simulator then renders deviation–recovery clips around expert demonstrations: nudge an arm off the expert path for 8 or 16 frames, bring it back, stitch the original expert tail on the end.

They filter those clips with DINOv3 similarity, PSNR, and SSIM so the recovery actually returns toward the expert pivot. The keepers become **8%** of a DAgger-style fine-tune. The policy copy starts from the Stage II checkpoint, not from the adapted simulator. Real-robot tests use **20** trials per task per method under matched resets.

The paper’s headline results, in the authors’ words: heterogeneous training improves robustness and transfers human-observed skills onto tasks that were absent from robot demonstrations. Recovery data from the model’s own simulator further improves real-world task completion.

## A Human's Take

I like that they refuse to train the simulator only on pretty successes. A world model that cannot show a bad motion is useless the first time a policy misses a grasp. The 8% DAgger mix is a small, testable knob. What I still want is the per-task table on IRON, not just “improved.” Until those numbers sit next to a baseline, this is a strong recipe with a robot attached.

## Sources

- [Wei et al. — XPACE (arXiv:2609.17372)](https://arxiv.org/abs/2609.17372)
- [Paper HTML with figures](https://arxiv.org/html/2609.17372)
---
