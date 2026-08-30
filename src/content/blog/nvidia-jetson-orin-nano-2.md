---
title: "Jetson Orin Nano 2: 78 TOPS, Same Board, Ships 2027"
description: "NVIDIA’s Jetson Orin Nano 2 doubles entry-level edge inference to 78 TOPS and cuts 15 W power 40%. Module and kit are due first half 2027."
pubDate: 2026-08-29
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/nvidia-jetson-orin-nano-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**NVIDIA** announced **Jetson Orin Nano 2** on **25 August 2026**: an entry-level robotics computer it says doubles inference versus **Jetson Orin Nano Super** in the same module size. The press release puts AI compute at **78 TOPS**, memory at **8 GB**, and the CPU at **eight Arm cores**. In **15-watt** mode it claims **40 percent** less power for the same performance as the predecessor.

The module and developer kit are due in the **first half of 2027**. That is not a ship-this-quarter part.

<figure>
  <img src="/images/heroes/nvidia-jetson-orin-nano-2.jpg" alt="NVIDIA Jetson Orin Nano 2 developer kit on a desk next to a small robot arm and a laptop running a manipulation assistant" loading="lazy" />
  <figcaption>NVIDIA’s Orin Nano 2 press still. Source: NVIDIA Newsroom.</figcaption>
</figure>

## What NVIDIA says it runs

The newsroom post lists memory-efficient edge models: **NVIDIA Cosmos**, **NVIDIA Nemotron**, **Gemma 4**, and **Qwen 3**, plus Jetson agent skills. Early names: **Cognex**, **Doosan Bobcat**, and **Matic**. **Wing**, Alphabet’s drone-delivery unit, is evaluating the board for perception on its fleet after using Orin Nano Super.

**Deepu Talla**, vice president of robotics and edge AI, in the release:

> “Today’s small and medium frontier models have reached the accuracy of last year’s largest frontier models, unlocking real-time intelligence for edge devices.”

AI Business, covering a media briefing, quotes Talla calling robotics a **three-computer** problem: train, test/eval, then the robot brain. He said Nemotron **3.5 Lightning** can run around **115 tokens per second** on Jetson. **Navneet Dalal**, Matic’s cofounder and CEO, said in the NVIDIA release that home robots need on-device language, gesture, mapping, and cleaning, and that Orin Nano 2 is how Matic wants to run those models in a compact platform.

**Dinuka Abeywardena**, head of perception at Wing, said drone delivery depends on fast understanding of the real world and that Nano 2 is a path to more responsive, energy-efficient aircraft.

<figure>
  <img src="/images/heroes/nvidia-jetson-orin-nano-2-modfam.jpg" alt="Family of NVIDIA Jetson Orin modules and developer kits on a black background" loading="lazy" />
  <figcaption>Jetson Orin module family. Source: NVIDIA, via AI Business.</figcaption>
</figure>

## The caveat in the same week’s coverage

AI Business quotes **Alexander Harrowell** at Omdia: small multimodal transformers are showing up in robots, but what counts as “small” has moved toward **3 to 8 billion** parameters. Looking at Nano 2’s specs, he said the limiting factor is **memory capacity**. **8 GB** is the number NVIDIA published. That is the constraint to design against, not a footnote.

Partner pages named in the release include ADLINK, Advantech, Seeed Studio, Aptiv, Connect Tech, and others building carrier boards. None of that changes the 2027 availability window.

## A Human's Take

Doubling TOPS in the same envelope is the kind of boring spec I want on a robot that cannot carry a 300-watt brick. I also want the kit in a cart, not a slide. First half 2027 is a long wait for a board announced this week. If 8 GB is the ceiling, the interesting work is which distilled VLMs actually close a loop at 15 watts, not which logo is on the carrier.

## Sources

- [NVIDIA Newsroom — Jetson Orin Nano 2 announcement](https://nvidianews.nvidia.com/news/nvidia-announces-jetson-orin-nano-2-robotics-computer-to-redefine-entry-level-edge-ai)
- [AI Business — Nvidia Targets Physical AI With New Jetson Edge Platform](https://aibusiness.com/robotics/nvidia-targets-physical-ai-new-jetson-edge-platform)
- [SiliconANGLE — Nvidia doubles compute for entry-level edge robotics](https://siliconangle.com/2026/08/25/nvidia-doubles-compute-for-entry-level-edge-robotics-with-jetson-orin-nano-2/)
