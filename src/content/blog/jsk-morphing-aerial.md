---
title: "JSK’s Morphing Flyer Paints a Cylinder With a Floppy Arm That Also Lifts"
description: "A University of Tokyo aerial robot puts thrusters on flexible continuum links, then paints a 250 mm pipe and hauls 683 g."
pubDate: 2026-09-19
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/jsk-morphing-aerial.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Soft aerial arms can hug odd shapes. Distributed rotors can push hard. **Eri Sawada**, **Kazuki Sugihara**, **Ayano Miyamichi**, **Kunio Kojima**, and **Kei Okada** at the University of Tokyo’s **JSK** lab put both on one airframe: flexible continuum links with a thruster sitting on the floppy part.

[arXiv:2609.19328](https://arxiv.org/abs/2609.19328) is dated **16 September 2026**. They claim it is the first aerial manipulation with flexible links that have an integrated thruster.

<figure>
  <img src="/images/heroes/jsk-morphing-aerial.jpg" alt="Morphing aerial robot painting a cylinder, grasping objects, lifting boxes, and taking a pendulum hit" loading="lazy" />
  <figcaption>Painting, grasping, multi-object lift, and a 2.5 kg impact. Source: Sawada et al., arXiv:2609.19328.</figcaption>
</figure>

## A leaf spring that does not corkscrew

A flat 3D-printed PLA spring is light and bends the way you want, then twists in flight so the rotor no longer points up. A folded U-shaped spring kills torsion and then bounces vertically on takeoff. The composite they shipped slides the flat spring into a slit in the folded one: stiff in torsion and vertically, still soft in the morphing direction.

Two prototypes: a **loop-link** (four rigid Delta-style links plus two flexible, **4.6 kg**) and a **serial-link** (Hydrus-style, one flexible, **4.5 kg**). Flexible-link thrusters are **Cobra C-2217-12 KV1550** with 5-inch props, **20.2 N** max at **25.2 V**. Compute is a **Khadas VIM4**. State comes from IMU plus motion capture. Flexible-link thrusters do **not** vector; vectoring on a spring invites vibration.

## Stop the 3 Hz wobble, then paint

Thrust-minimizing allocation made commands chatter. Minimizing the **change** from the last command, and updating the wrench-allocation matrix at **≤20 Hz** while the pose loop runs **>200 Hz**, is what they fly.

On loop-link in-air morphing, peak thrust chatter on the flexible-link rotor dropped from **2.87 N** to **0.19 N**, and roll wobble from **0.051 rad** to **0.0085 rad**. Serial-link morphing cut roll amplitude about **87%** (**0.321 rad** to **0.042 rad**). Without the difference term, the serial robot had to land around **13 s**.

<figure>
  <img src="/images/heroes/jsk-morphing-aerial-3.jpg" alt="Four frames of the loop-link robot wrapping a 250 mm cylinder and painting it" loading="lazy" />
  <figcaption>Passive wrap around a 250 mm cylinder. Source: Sawada et al., arXiv:2609.19328.</figcaption>
</figure>

With brushes on the flexible link, the loop robot pressed an O-shape into an M-shape on a **250 mm** cylinder and kept flying while the link deformed up to **0.2 m**. Brush friction is not in the model; attitude drifted.

Grasps: a bag with a loose bottle, L-shapes, a box. Payload on the loop-link with the extra thruster: up to **683 g**. Without that thruster the same airframe saturates on climb and crashes. Multi-object grab of three boxes totaling **388 g** took off while holding them.

Impact: a **2.5 kg** pendulum from about **850 mm**, about **1.71 m/s**, while hovering near **550 mm**. Hit a rigid link and a belt-driven joint skipped **23.6 deg**. Hit the flexible link and it kept flying.

## A Human's Take

Putting a rotor on a spring sounds like a way to invent a new oscillation. They spent half the paper killing that oscillation, which is the right order of operations. Painting a known cylinder in a motion-capture room is still a lab trick. The crash without thrust-on-the-flex is the design lesson I will remember: if you let the arm wander away from the lift, you have to send lift with it.

## Sources

- [arXiv:2609.19328 — A Morphing Aerial Robot With Thruster-Integrated Flexible Continuum Links](https://arxiv.org/abs/2609.19328)
- [arXiv HTML — hardware, painting, and grasp figures](https://arxiv.org/html/2609.19328v1)
