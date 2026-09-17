---
title: "Digit Teams Pinch Boxes Together With No Radio Chat"
description: "Oregon State’s decMHT lets one to ten Digit V3 humanoids pick up shared loads by pinching, then hands boxes off on real hardware."
pubDate: 2026-09-17
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/decmht-digit-transport.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A lot of humanoid papers stop at one robot hugging a box. **Bikram Pandit**, **Mohitvishnu S. Gadde**, **Aayam Kumar Shrestha**, and **Alan Fern** at Oregon State’s DRAIL lab posted **decMHT** (decentralized multi-humanoid transport) on 16 September: the same local policy, no inter-robot radio, from a solo pickup up to **ten** simulated Digits around a pallet.

The hardware cut is two **Agility Digit V3** robots pinching a cardboard box, carrying it, and handing it off. An external motion-capture sensor supplies each robot’s attachment-frame pose. There is no extra real-world fine-tune.

<figure>
  <img src="/images/heroes/decmht-digit-transport.jpg" alt="Composite of Digit humanoids pinching boxes in simulation and two real Digit V3 robots carrying and handing off a cardboard box" loading="lazy" />
  <figcaption>Policy sketch, sim payloads, and Digit V3 hardware. Source: Pandit et al., arXiv:2609.17824, Figure 1.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/YqETuE8lRc8"
    title="decMHT multi-humanoid pickup and transport"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Project video: sim teams and Digit V3 hardware. Source: DRAIL / YouTube.</p>

## Attachment specs, not a group chat

Each robot gets a local **attachment spec** once per episode: where on the object to pinch, how wide the two contact points are, and how much frontal clearance to leave. A high-level command then asks for the object’s planar velocity, yaw rate, and height. That command is rewritten into each robot’s local frame with a fixed rigid offset. A binary flag puts a robot in `track` or `idle`. Handover is just flipping those flags: receiver goes to `track`, giver goes to `idle` once both are holding.

The hands are not grippers. Digit V3 here uses rigid, flat, rubberized pads that tolerate a little in-plane rotation. The robot pinches.

A frozen low-level locomotion policy takes velocity, yaw, and height. A high-level LSTM (two layers, 128-wide) outputs arm joint targets plus those locomotion commands at **50 Hz**. Training is IPPO in Isaac Lab: 4096 parallel environments for single-robot work (~140 GPU-hours on an RTX 4090), then 2048 environments for two-robot fine-tuning (~60 GPU-hours more). The policy never trains with three or more robots. Evaluation still goes to ten.

## The numbers that matter

On a pallet whose mass scales from 1 kg (one robot) to 10 kg (ten robots), pickup success stays above **97%** at every team size over 1000 randomized episodes. Linear tracking error falls as the team grows. RMS tilt drops from **8.04°** with one robot to **1.21°** with ten.

A mass sweep with fixed 10–50 kg payloads shows extra robots expanding what can be lifted, zero-shot, even though training used 0.5–1.5 kg boxes. Unseen geometries in sim include a cabinet, fridge, log, bed, and concrete slab. The bed is the hard one: **85.2%** pickup for the two-robot-trained policy versus **44.1%** for the single-robot-only ablation.

Handover tests cover static, moving, and cross-level (different floor heights). The two-robot-trained policy finishes stage 3 (receiver holds alone) at **100%** static, **96.5%** dynamic, and **99%** cross-level.

<figure>
  <img src="/images/heroes/decmht-digit-transport-2.jpg" alt="Top-view diagrams of one to ten Digit humanoids arranged around pallet-sized payloads" loading="lazy" />
  <figcaption>Team layouts for N = 1 to 10. Source: arXiv:2609.17824, Figure 2.</figcaption>
</figure>

Limits are in the paper: mocap instead of onboard vision, no grippers, and no distinct leader/follower roles.

## A Human's Take

The trick I will steal is the attachment spec. You tell each robot “pinch here,” not “stand at this world pose.” That is why a two-robot trainer can walk a ten-robot pallet in sim. The hardware still needs an external pose sensor, so this is not a warehouse shift yet. It is a clean interface for when two Digits have to share a load without a radio.

## Sources

- [Pandit et al. — decMHT (arXiv:2609.17824)](https://arxiv.org/abs/2609.17824)
- [Paper HTML with figures](https://arxiv.org/html/2609.17824)
- [decMHT project page](https://decmht.github.io/)
- [Project video (YouTube)](https://youtu.be/YqETuE8lRc8)
