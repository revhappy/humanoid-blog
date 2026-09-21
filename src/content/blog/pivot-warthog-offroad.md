---
title: "PIVOT Lets a Warthog Ask GPT-5 When the Map Says Stop"
description: "On a Clearpath Warthog, PIVOT calls GPT-5 only after geometry planning fails, and autonomy rose from 59.6% to 97%."
pubDate: 2026-09-21
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/pivot-offroad.jpg"
readTime: "3 min read"
featured: false
draft: false
---

A Clearpath Warthog spent five laps on a 1,277-meter mixed route, about 6.4 kilometers in all, with a planner that stays geometric until that planner gets stuck. The paper, dated September 17, 2026, calls the system PIVOT. When the geometry costmap has no path, a vision-language model looks at LiDAR and decides whether the blockage is tall grass or something the wheels should not touch.

Across those five closed-loop runs, on three different days, the authors say overall autonomy rose from 59.6 percent with geometry alone to 97.0 percent with PIVOT. Human interventions fell from 11 to 3. Mean distance between interventions went from 69.2 meters to 412.9 meters.

![A yellow Clearpath Warthog in grass and at a fallen branch, with geometry and semantic costmaps](/images/heroes/pivot-offroad.jpg)

The robot is an unmodified Clearpath Warthog with an Ouster 3D LiDAR, an IMU, battery telemetry, and an onboard computer. Localization and both the geometric map and the language-model view come from that LiDAR. The model in the prompt is GPT-5. It is asked for three scores from 0 to 1: expected power draw, vibration, and wheel slip. Higher means the patch looks worse. The prompt tells it not to write code or measure the image numerically, only to judge what it sees.

Those scores are not dropped in raw. The paper correlates the model's predicted energy, vibration, and slip with measurements from the same platform, then weights each channel by how well the prediction tracked the measurement. Geometry planning stays the normal mode. The language model is a fallback, using a curvilinear batch-informed-trees planner on the local costmap. A person is called only if the semantic replan also fails.

<figure>
  <img src="/images/heroes/pivot-offroad-2.jpg" alt="Satellite map of a 1277 meter Warthog route through building, grass, woods, and a parking lot" loading="lazy" />
  <figcaption>One full 1,277-meter loop, repeated five times. Stars mark language-model queries. Source: PIVOT paper, arXiv:2609.20983.</figcaption>
</figure>

The route splits into four pieces: 319 meters by buildings, 221 meters of grass, 356 meters of woods, and 381 meters of parking lot. The overview figure shows the difference the fallback is for. Between trees and tall grass, geometry finds no path and the semantic score says go. At rigid fallen branches, geometry also fails, and the semantic score says stop.

The paper's own video link in the figure caption is a placeholder, not a public clip, so there is no demo embed here.

## A Human's Take

Calling a language model on every frame is how you burn time and trust. Calling it when the geometric planner is already empty is a saner split. I care that they tied the scores to current, IMU shake, and slip, instead of treating a fluent explanation as a costmap.

Three interventions instead of eleven, on one 1,277-meter loop, is a real change. It is still one vehicle, one route, and three days. Wet grass or a different lidar mount would be the next receipt I want.

## Sources

- [arXiv — PIVOT: Physically Informed Vision-Language Off-Road Traversability](https://arxiv.org/abs/2609.20983)
- [arXiv HTML — PIVOT](https://arxiv.org/html/2609.20983v1)
