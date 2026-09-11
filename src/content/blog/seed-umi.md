---
title: "Human and Robot Wear the Same Exoskeleton to Teach a 20-DoF Hand"
description: "SEED-UMI puts one 20-DoF glove on both a person and a Wuji hand; paired replay hits 70% success on five contact-rich tasks."
pubDate: 2026-09-11
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/seed-umi.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most wearable-exoskeleton demos record the human and then guess how that motion should land on a robot. **SEED-UMI**, a CoRL 2026 paper from Peking University and Delta Intelligence, skips the guess. The person and the robot wear the **same** outer shell.

Joint encoders become a shared measurement. Wrist cameras bolted to the exoskeleton see the same mechanism during collection and rollout. The paper (arXiv:2609.11753, submitted **September 10, 2026**) reports a **70.0%** mean success rate after paired fine-tuning across five contact-rich tasks.

<figure>
  <img src="/images/heroes/seed-umi.jpg" alt="Human wearing SEED-UMI driving a screwdriver, robot repeating the task, plus five dexterous skills" loading="lazy" />
  <figcaption>Human collection and robot execution share one exoskeleton. Source: SEED-UMI project page.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/dQXsx9unMac"
    title="SEED-UMI: shared exoskeleton for dexterous demonstration"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">From human demonstration to autonomous rollouts. Source: SEED-UMI / YouTube.</p>

## One glove, two bodies

The hardware is **20 independently measured joints** across five fingers, matched to a fully actuated **Wuji** hand on a **RealMan RX75** arm. A dorsal Intel **RealSense T265** tracks the wrist. A ventral fisheye camera covers about **150°**. A parallel four-bar linkage parks the magnetic encoders on the back of the hand so palms and sides stay free for contact.

<figure>
  <img src="/images/heroes/seed-umi-2.jpg" alt="Human hand and Wuji robot hand wearing the same SEED-UMI exoskeleton while holding a tennis ball" loading="lazy" />
  <figcaption>Shared hardware: encoders, wrist tracker, and observation camera. Source: SEED-UMI project page.</figcaption>
</figure>

Mapping is two-stage. First the robot wears the glove and **babbles** through joints to train an encoder-to-command map. Then human contact-rich motions are **replayed** on the robot; the gap between the two encoder traces is the supervision. Policies (**ACT**, **Diffusion Policy**, **π₀.₅**) train on raw wrist images and encoder states. No simulation, no RL, no hand segmentation, no inpainting.

## Five tasks, one number

Each task gets **100** human demonstrations and **20** autonomous rollouts. After paired fine-tuning, mean success is **70.0%**, **+12.7** points over babbling-only mapping. Teleoperation, trained on robot-side demos, sits at **71.7%**.

- **Screw driving**: align and hold axial pressure
- **AirPods case insertion**: index and middle on a small object
- **Ball basket throwing**: grasp-to-release timing
- **Table cleaning**: tissue, wipe, discard
- **Air freshener spray**: hold the can and start a downward press (full spray is not required)

On AirPods, the same operator collected **52** successful demos in **30 minutes** with SEED-UMI versus **18** with teleoperation, about **3×** throughput. That comparison excludes one-time paired-replay overhead.

<figure>
  <img src="/images/heroes/seed-umi-3.jpg" alt="Robot rollouts for screw driving, AirPods insertion, air freshener, ball throwing, and table cleaning" loading="lazy" />
  <figcaption>Autonomous sequences on the five-task suite. Source: SEED-UMI project page.</figcaption>
</figure>

The current glove is co-designed for one target hand. Other hands still need geometry and mapping changes. Air Freshener Spray counts a started press, not a full spray.

## A Human's Take

I like the stubborn hardware idea more than the leaderboard. If the camera and the encoder see the same metal on both sides, retargeting stops being a research problem and starts being a calibration. Seventy percent is not a factory shift. It is close enough to teleop that I would rather spend the extra collection minutes on more messy objects than on another open-loop mapper.

## Sources

- [SEED-UMI project page](https://tengbo-yu.github.io/SEED-UMI/)
- [arXiv:2609.11753 — SEED-UMI](https://arxiv.org/abs/2609.11753)
- [SEED-UMI paper HTML](https://arxiv.org/html/2609.11753)
- [SEED-UMI video](https://www.youtube.com/watch?v=dQXsx9unMac)
