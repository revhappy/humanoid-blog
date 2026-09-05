---
title: "AGC-VLN Lets a Drone Draw the Map a Ground Robot Actually Drives"
description: "A training-free UAV–UGV stack shares a bird’s-eye map. On 100 CARLA-Air episodes it hits 77% joint success, +27 points over the weaker agent."
pubDate: 2026-09-05
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/agc-vln-air-ground.jpg"
readTime: "4 min read"
featured: false
draft: false
---

HKUST (Guangzhou) and Nanjing University of Posts and Telecommunications posted **AGC-VLN** on **3 September** ([arXiv:2609.03483](https://arxiv.org/abs/2609.03483)): a training-free air–ground navigation stack where a UAV paints a bird’s-eye map and a UGV drives on it. No new weights. Frozen VLMs plus geometry.

A prior CARLA-Air study had already shown that five aerial VLA models do not cooperate. Text hints from the ground robot hurt. Bidirectional velocity coupling made it worse. AGC-VLN’s bet is that the interface should be a picture, not a chat.

<figure>
  <img src="/images/heroes/agc-vln-air-ground.jpg" alt="Diagram of UAV bird’s-eye mapping, shared CAR and GOAL markers, and UGV road-following with 77 percent joint success" loading="lazy" />
  <figcaption>The UAV’s “can see” becomes the UGV’s “can drive.” Source: Zhang et al., arXiv:2609.03483.</figcaption>
</figure>

## Shared map, two jobs

The UAV looks straight down. A frozen VLM marks the target truck in that image and also emits a height command: descend, hold, or ascend. That upgrade is **3D-SPF**, See-Point-Fly with a vertical search step of **10 m**. The UAV then stamps the map with a blue **CAR** (UGV pose), a red **GOAL**, distance labels, and a reference line.

The UGV never has to invent a city from a bumper camera. It asks a VLM for **10** road waypoints on that annotated image, inverse-projects them with the UAV’s pose, and tracks them with six driving primitives plus a reverse-escape if it stalls.

Success is either agent inside **5 m** of the target within **180 s**. Both sides run **gemini-3.7-flash** at temperature **0.1**, about one decision every **3 s**.

## 100 episodes, then a real floor

On **100** closed-loop runs in CARLA-Air’s Town10HD (50 spawn points, two each):

- Joint success **77.0%**
- UGV **75.0%**, UAV **50.0%**
- Collaboration gain **+27.0** points over the weaker agent
- **24.0** points above Travel UAV (**53.0%**), the strongest published single-agent baseline they cite
- SPL **62.0%**, navigation error **10.9 m**

UAV-only SPF on this air-ground search sits at **20.0%**. 3D-SPF alone is **60.0%**. UGV-only VLM is **12.0%**. The map is what moves the car: GOAL-only annotation gets **60%** UGV success; adding the CAR marker lifts that to **70%**, and the full overlay reaches **75%**.

Altitude matters. **60 m** is the sweet spot. At **30 m** the field of view collapses (joint **28%**). At **90–120 m** the UAV’s success is **0%**; the UGV still carries the joint rate.

Of **23** joint failures, **61%** are undrivable VLM paths (buildings, trees, map edge). **22%** die on the last meters. **17%** are UAV localization, including one mis-anchor onto the wrong truck.

<figure>
  <img src="/images/heroes/agc-vln-air-ground-2.jpg" alt="Real UAV and omnidirectional UGV in a lobby, top-down and third-person frames as both approach a goal couch" loading="lazy" />
  <figcaption>Same pipeline on hardware: Mid-360 + RealSense D435i quadrotor, omnidirectional UGV, LiDAR odometry instead of the simulator pose stream. Source: Zhang et al., arXiv HTML.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/agc-vln-air-ground-3.jpg" alt="Side-by-side CARLA episodes: successful UAV-UGV arrival versus VLM mis-anchoring on the wrong truck and a path that hits a tree" loading="lazy" />
  <figcaption>Success vs the two common misses: wrong truck, undrivable path. Source: Zhang et al., arXiv HTML.</figcaption>
</figure>

They also ran one real-robot case in a lobby. The stages match the sim. The UAV pose comes from LiDAR odometry instead of CARLA-Air’s synchronized stream.

## A Human's Take

I have watched too many “multi-agent VLA” papers glue two policies together and then act surprised when the errors multiply. Drawing CAR and GOAL on the overhead frame is almost rude in its simplicity, and it is why the collaboration gain is positive. Path planning is still the leak: 61% of the joint misses are a VLM that cannot stay on the road. Fix that, and this baseline is a tool, not just a CARLA score.

## Sources

- [arXiv:2609.03483 — AGC-VLN abstract](https://arxiv.org/abs/2609.03483)
- [arXiv HTML — full paper, tables, and real-robot figure](https://arxiv.org/html/2609.03483v1)
- [GitHub — AGC-VLN project page](https://github.com/ZSN2024/AGC-VLN)
