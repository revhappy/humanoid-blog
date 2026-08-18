---
title: "MISTac Is an 8 mm Tactile Finger Built to Fit a Surgical Trocar"
description: "TU Dresden and Stanford open-source a vision-based tactile probe that classified tissue at about 84% in an in-vivo trial."
pubDate: 2026-08-18
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/mistac-surgical-tactile.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Robin Koch**, **Roberto Calandra**, and collaborators at **TU Dresden**, **Stanford**, **KIT**, and Dresden’s surgical hospital posted **MISTac** on **August 14**: a vision-based tactile sensor whose replaceable tip is **8 mm** across, sized for the trocars used in minimally invasive surgery.

They open-sourced the CAD, BOM, and lighting firmware at [github.com/lasr-lab/mistac](https://github.com/lasr-lab/mistac). The build guide is still marked “coming soon.”

<figure>
  <img src="/images/heroes/mistac-surgical-tactile.jpg" alt="MISTac 8 mm tactile sensor tip and proximal optics overview" loading="lazy" />
  <figcaption>MISTac’s 8 mm gel tip and fiber bundle. Source: Koch et al. / GitHub lasr-lab/mistac.</figcaption>
</figure>

## DIGIT Pinki, shrunk for a port

MISTac borrows the DIGIT Pinki idea: keep the camera and LEDs at the proximal end, and pipe the image through a **coherent fiber bundle**. Pinki’s tip is **15 mm**. That is too fat for typical 8 mm surgical ports.

The new tip is an elliptical silicone gel, **12 mm** long, in a 3D-printed cartridge that screws onto the fiber with a nut. Swap it between procedures. The proximal case is four printed subassemblies: collimator, fiber holder, microscope holder, camera holder. An Adafruit NeoPixel ring plus an ESP32 can change RGB lighting in software.

Measured numbers from their bench:

- **Optical resolution:** 176.68 µm (USAF 1951)
- **Tactile resolution:** 250 µm on a milled aluminum block
- **Force RMSE:** 24.3 ± 0.9 mN with a ResNet-18, against a BotaSys sensor whose own noise is about 20 mN

<figure>
  <img src="/images/heroes/mistac-surgical-tactile-2.jpg" alt="MISTac schematic with distal gel tip and proximal microscope and camera" loading="lazy" />
  <figcaption>Modular printed housing around off-the-shelf optics. Source: Koch et al., arXiv:2608.14772.</figcaption>
</figure>

## They actually put it through a trocar

The medical test used an older camera (Arducam B0268) on **n=2** sedated pigs, under approval **TVV43/2023**. A surgeon palpated through one port while an assistant ran the endoscope through another. They recorded **40 minutes** at 30 fps.

A ResNet-18 plus a small causal Transformer then classified four tissues: liver, cauterized liver cut, spleen, and colon. Leave-one-out accuracy was **0.8434**, macro F1 **0.8473**. Liver and spleen were the pair that mixed most often.

That is a proof of concept, not a tumor finder. The authors say the sampled tissues were already easy to tell apart on the endoscope.

<figure>
  <img src="/images/heroes/mistac-surgical-tactile-3.jpg" alt="Endoscope view of MISTac on a liver cut with matching tactile images" loading="lazy" />
  <figcaption>MISTac on a cauterized liver cut, with raw tactile frames and heatmaps. Source: Koch et al., arXiv:2608.14772.</figcaption>
</figure>

## A Human's Take

An 8 mm, swappable, open-source tactile finger is the kind of hardware I want more labs to copy. The in-vivo clip matters more than another phantom nodule paper.

I would not call 84% on four obvious tissues a surgical tool. I would call it a reason to try lump and vessel detection next, which is what the authors already listed. If the fiber bundle gets a higher core count and a bendable tip, this starts looking like something a da Vinci port could actually swallow.

## Sources

- [arXiv:2608.14772 — MISTac: A Vision-Based Tactile Sensor for Minimally Invasive Surgery](https://arxiv.org/abs/2608.14772)
- [GitHub — lasr-lab/mistac](https://github.com/lasr-lab/mistac)
