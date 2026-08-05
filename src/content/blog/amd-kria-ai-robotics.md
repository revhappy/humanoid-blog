---
title: "AMD Puts Ryzen AI Embedded X100 and Kria Robotics Dev Kit Against NVIDIA in Physical AI"
description: "At Advancing AI 2026, AMD launched Ryzen AI Embedded X100, Kria AI SOMs, and an open robotics developer platform combining CPU, GPU, NPU, and FPGA."
pubDate: 2026-08-05
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/amd-kria-ai-robotics.jpg"
readTime: "5 min read"
featured: false
draft: false
---

AMD is making a full-stack play for robot brains. At **Advancing AI 2026** on July 23, the company announced the **Ryzen AI Embedded X100** series, new **Kria AI system-on-modules**, and the **Kria AI Robotics Developer Platform** — pitched as the first open, turnkey integrated platform for autonomous robotics that combines CPU, GPU, NPU, and FPGA compute.

<figure>
  <img src="/images/heroes/amd-kria-ai-robotics.jpg" alt="Rear panel of the AMD Kria AI Robotics Developer Platform" loading="lazy" />
  <figcaption>AMD Kria AI Robotics Developer Platform I/O panel. Source: ServeTheHome.</figcaption>
</figure>

## What shipped in the announcement

AMD’s press release and secondary coverage spell out a three-layer product stack:

- **Ryzen AI Embedded X100** — high-end embedded SoCs based on Strix Halo silicon; planned SKUs include **X168**, **X188**, and top-bin **X199** (up to 16 Zen 5 cores and a large integrated GPU). Industrial qualification targets roughly **−40°C to 105°C** and firm real-time interrupt latency under Linux in the **sub-7 μs** class, per ServeTheHome’s reporting.
- **Kria AI SOM** — COM-HPC form-factor modules powered by X100, aimed at Jetson-class plug-in boards. AMD plans to certify ODM partners rather than only sell modules itself.
- **Kria AI Robotics Developer Platform** — a full dev kit with an X199-class SOM, carrier card, multi-gig networking, USB-C/USB4, camera and GPIO paths, and a **Spartan UltraScale+ FPGA** for real-time sensor fusion and control loops.

AMD’s own release calls the developer platform the first open, turnkey stack for autonomous robotics combining CPU, GPU, NPU, and FPGA. The company ties it to an expanded open software story (ROCm and ROS 2–oriented tooling) and positions it against single-vendor lock-in.

<figure>
  <img src="/images/heroes/amd-kria-ai-robotics-2.jpg" alt="Side view of AMD Kria AI system-on-module" loading="lazy" />
  <figcaption>Kria AI SOM side profile. Source: ServeTheHome.</figcaption>
</figure>

## Why robotics people care

ServeTheHome’s deep dive notes the Kria AI SOM explicitly targets NVIDIA’s Jetson embedded board market: similar size and power envelope, industry-standard COM-HPC instead of a proprietary module, and a push for deterministic control-loop closure. The Robot Report coverage of the same launch frames the pitch as unified memory plus real-time control for physical AI — perception and muscle-level loops on one open stack.

Availability through ODM partners is expected later in 2026 for modules; the robotics developer platform is the near-term way teams can evaluate the architecture without designing a custom carrier first.

<figure>
  <img src="/images/heroes/amd-kria-ai-robotics-3.jpg" alt="AMD slide of Kria AI Robotics Developer Platform architecture" loading="lazy" />
  <figcaption>Kria AI Robotics Developer Platform overview from AMD’s Advancing AI materials. Source: ServeTheHome / AMD AAI 2026.</figcaption>
</figure>

## A Human's Take

I care less about the marketing war with Jetson and more about whether this stack closes a real control loop on a biped without a second vendor’s black-box MCU board. Heterogeneous CPU/GPU/NPU plus FPGA is the right shape for robots; the open question is software maturity — Isaac-class sim tooling, motor-control examples, and fleet deployment stories. If ODMs ship X100 SOMs and someone runs a whole-body policy on the FPGA+x86 path in the field, this becomes more than a keynote slide.

## Sources

- [AMD — AAI 2026: Full-Stack Compute for the Agentic AI Era (press release)](https://ir.amd.com/news-events/press-releases/detail/1294/aai-2026-amd-delivers-full-stack-compute-for-the-agentic-ai-era)
- [ServeTheHome — AMD’s Physical AI Plans / Ryzen Embedded AI X100](https://www.servethehome.com/amds-physical-ai-plans-come-into-focus-as-company-launches-ryzen-embedded-ai-x100/)
- [The Robot Report — AMD unveils Kria module for real-time control](https://www.therobotreport.com/amd-unveils-kria-module-real-time-control-unified-memory-robots/)
