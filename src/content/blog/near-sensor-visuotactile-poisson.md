---
title: "Near-Sensor Tactile Depth in 0.211 ms Beats the Host PC"
description: "ShanghaiTech maps GelSight-style Poisson reconstruction onto an FPGA pipeline: fixed 0.211 ms latency, 28 ms protective reflex vs 170 ms host path."
pubDate: 2026-08-07
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/visuotactile.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Visuotactile fingers can see contact geometry, but most of them ship raw video to a host, run a Poisson solve in software, and wait on USB and the OS scheduler. **Near-sensor Computing for Rapid Visuotactile Perception**, posted **August 6, 2026** (arXiv:2608.05725) from ShanghaiTech, moves the whole **spectral Poisson** reconstruction onto the sensor node.

<figure>
  <img src="/images/heroes/visuotactile.jpg" alt="Near-sensor visuotactile architecture compared to biological reflex and host GPU path" loading="lazy" />
  <figcaption>Biological reflex analogy vs host path vs on-chip Poisson reconstructor. Source: arXiv:2608.05725 HTML.</figcaption>
</figure>

## The hardware claim

A GelSight-style sensor (up to **400 fps**) streams into a Xilinx Zynq UltraScale+ FPGA. Photometric stereo turns RGB into gradients; a fully streaming **spectral Poisson** core (DST-based, no iterative convergence) emits depth. At **166 MHz**, the first depth sample of each **128×128** frame appears after **35,107** cycles — a fixed **0.211 ms** latency, same every frame over 1,000 timed frames.

Core logic power is estimated at **347 mW** (FPGA PL simulation); a 45 nm ASIC estimate is **324 mW** including SRAM. Across **15** contact geometries, hardware depth differs from a double-precision reference by **0.17%** of peak contact depth after scale/offset alignment. Theoretical throughput at 166 MHz is about **10,133** frames/s for 128×128; measured DMA streaming hit **10,106** fps of correct output.

## Reflex that closes at the finger

A threshold on streaming depth asserts a GPIO that triggers the same servo stack used by a GelSight Mini + host baseline. High-speed camera timing: contact-to-motion **28.3 ± 4.9 ms** near-sensor (n=50) vs **169.9 ± 27.8 ms** host path (n=81) — about **6×** faster. Contact-to-command alone is **10.2 ± 3.2 ms** vs **148.6 ± 28.3 ms**. Servo mechanics eat most of the remaining near-sensor time (~18 ms). The paper notes human nociceptive withdrawal reports of **65–137 ms** as a biological reference band.

<figure>
  <img src="/images/heroes/visuotactile-2.jpg" alt="Latency distributions and power comparison across FPGA, CPU, GPU, Jetson" loading="lazy" />
  <figcaption>Fixed FPGA latency vs long-tailed host/GPU/Jetson distributions; power envelopes. Source: arXiv:2608.05725 HTML.</figcaption>
</figure>

## A Human's Take

This is the kind of systems paper I trust: fixed cycle counts, same actuator on both paths, camera-timed contact. If you care about slip reaction or contact-rich hands, deterministic sub-millisecond geometry on-chip is more useful than another soft-skin render. Scale limits above 256×256 are still memory-bound — but the reflex numbers already make the host USB path look slow.

## Sources

- [arXiv:2608.05725 — Near-sensor visuotactile abstract](https://arxiv.org/abs/2608.05725)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.05725v1)
