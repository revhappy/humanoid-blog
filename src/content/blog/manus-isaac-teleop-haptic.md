---
title: "Isaac Teleop Can Now Buzz a MANUS Glove Finger by Finger"
description: "NVIDIA’s Isaac Teleop MANUS plugin reads haptic commands and drives five finger motors, closing the loop on sim teleop."
pubDate: 2026-09-02
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/manus-isaac-teleop-haptic.jpg"
readTime: "4 min read"
featured: false
draft: false
---

NVIDIA’s **Isaac Teleop** docs now treat **MANUS** gloves as a two-way device, not just a skeleton source. The Linux plugin still injects **26 OpenXR hand joints** from the MANUS SDK. It also **reads `HapticCommand`** on collection `manus_glove_haptic` and drives **five finger motors** through the same SDK.

That is the missing half of a sim teleop loop: the robot (or the simulated hand) can tap the operator back. MANUS listed the haptic Isaac Teleop / Isaac Lab note on its blog index with an **26 August 2026** date. The robotics page already called the gloves an official Isaac Teleop input.

<figure>
  <img src="/images/heroes/manus-isaac-teleop-haptic.jpg" alt="MANUS Metagloves Pro Haptic glove with fingertip pads and a detachable top module" loading="lazy" />
  <figcaption>Metagloves Pro Haptic, the vibration glove the plugin is built to drive. Source: MANUS product page.</figcaption>
</figure>

## What the plugin actually ships

The NVIDIA documentation is blunt about the split:

- **Human path**: raw MANUS skeleton → 26 OpenXR joints → any downstream retargeter.
- **Sensors path**: if a glove reports at least five flex sensors, tip poses go out as a 35-joint `JointStateOutput`.
- **Haptic path**: inbound vibration commands, five motors, via `isaacteleop.haptic_devices.glove.haptic_glove_device`.

Default launch enables all three. You can restrict them with `--datasets=human,sensors,haptic`. Linux only, tested on Ubuntu **22.04 / 24.04**. The install script pulls **MANUS SDK v3.1.1**. Wrist pose can come from Quest 3 controllers on the universal mount, or from the headset’s optical hand tracking when `XR_MNDX_xdev_space` is present.

MANUS’s own robotics page fills in the glove side: **25 degrees of freedom**, millimeter-level tracking, no occlusion, no drift. **Metagloves Pro Haptic** add real-time vibrotactile feedback on contact. The company says the gloves are integrated with **50+** robotic hand models over C++, Python, and ROS 2.

<figure>
  <img src="/images/heroes/manus-isaac-teleop-haptic-2.jpg" alt="Flowchart from MANUS gloves through Isaac Teleop, imitation learning, ROS 2, and robot deployment" loading="lazy" />
  <figcaption>MANUS’s Isaac Teleop data path, glove to deployed robot. Source: MANUS robotics page.</figcaption>
</figure>

## Hands on the same page

The robotics page shows the retargeting targets sitting next to the glove: **Tesollo DG-5F**, **Sharpa Wave**, Robotera XHAND 1 Pro, Agibot OmniHand, PSYONIC Ability Hand, and others. Those are product stills for the hands the SDK already talks to, not a claim that every one of them is now haptic-closed in Isaac Lab.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/U2xLh_AeCko"
    title="Tesollo DG-5F first look, linked from MANUS robotics"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Tesollo DG-5F clip hosted on the MANUS robotics page. Source: Tesollo / YouTube via MANUS.</p>

<figure>
  <img src="/images/heroes/manus-isaac-teleop-haptic-3.jpg" alt="Tesollo DG-5F five-finger robot hand" loading="lazy" />
  <figcaption>Tesollo DG-5F, one of the hands listed on the MANUS robotics page. Source: MANUS.</figcaption>
</figure>

## A Human's Take

Finger tracking without touch is how a lot of “dexterous” datasets still get collected, and you can see it in the ginger grasps. A five-motor buzz is not a fingertip taxel map, but it is a channel the operator can feel at sim rate. The test is whether people actually record better demos once the glove pokes back, or whether this stays a checkbox in the Isaac Teleop README. I will be more convinced when a public Isaac Lab task uses that `HapticCommand` tensor on a contact-rich insert, not just a skeleton overlay.

## Sources

- [NVIDIA Isaac Teleop — MANUS Gloves plugin docs](https://nvidia.github.io/IsaacTeleop/main/device/manus.html)
- [MANUS — robotics / Isaac Teleop page](https://www.manus-meta.com/robotics)
- [MANUS — Metagloves Pro Haptic](https://www.manus-meta.com/products/metagloves-pro-haptic)
- [MANUS — blog index (haptic Isaac Teleop listing)](https://www.manus-meta.com/blog)
- [YouTube — Tesollo DG-5F first look](https://www.youtube.com/watch?v=U2xLh_AeCko)
