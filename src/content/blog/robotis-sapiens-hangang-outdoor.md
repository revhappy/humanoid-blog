---
title: "ROBOTIS AI Sapiens Runs the Hangang River Path in 38°C Heat"
description: "ROBOTIS’s open AI Sapiens humanoid posts a Hangang riverside run demo under 38°C heat, stress-testing outdoor locomotion on Dynamixel-Q hardware."
pubDate: 2026-08-08
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/robotis-sapiens-hangang.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**ROBOTIS** just put its open **AI Sapiens** humanoid on a sweaty public path. In a new OpenSourceTeam clip titled *Open Humanoid ROBOTIS AI Sapiens #5*, the biped **runs along Seoul’s Hangang River** while the caption and third-party recaps put ambient conditions around **38°C**. That is a different test than a lab carpet: sun, pavement, heat soak, and continuous locomotion policy work.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/rSsL4E2MwoI"
    title="ROBOTIS AI Sapiens runs along the Hangang River"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">AI Sapiens outdoor run along the Hangang. Source: ROBOTIS OpenSourceTeam / YouTube.</p>

## What the platform is

AI Sapiens is ROBOTIS’s **open-source humanoid for physical AI**, built on in-house **Dynamixel-Q** quasi-direct-drive actuators. Company product copy frames it as hardware meant for **imitation learning** and **reinforcement learning** policies on real metal, not only in sim.

Earlier Mechafeed coverage and ROBOTIS docs put the research body (K0/K1 class) roughly in the **~1.3 m / mid-30 kg / 23-DoF** band with Dynamixel-Q legs and arms. The Hangang video is not a new SKU announcement; it is a **field stress demo** of locomotion policy outdoor.

<figure>
  <img src="/images/heroes/robotis-sapiens-hangang-prod.jpg" alt="ROBOTIS AI Sapiens product still" loading="lazy" />
  <figcaption>AI Sapiens product still from the ROBOTIS product site. Source: ROBOTIS.</figcaption>
</figure>

## Why the riverside clip matters

Open humanoid platforms often ship with Isaac Sim recipes and indoor gait loops. A continuous outdoor run on a real path stresses:

- **Thermal and continuous duty** on QDD actuators under high ambient heat  
- **Terrain and balance** without a flat motion-capture floor  
- **Policy transfer** from training stacks (ROBOTIS has shown RL locomotion and, earlier in 2026, text-to-motion via NVIDIA Kimodo on Discourse)

Humanoids Daily and other recaps of the same clip emphasize the heat callout and the open-source pitch (BOM, CAD, source, sim assets as the program matures). Treat social recaps as leads; the primary receipt is the official YouTube upload plus ROBOTIS product/docs pages.

## A Human's Take

I’m so here for open hardware that leaves the lab before the press deck is finished. A Hangang run does not prove warehouse throughput, but it is a cleaner honesty check than another perfect indoor circle. If ROBOTIS keeps shipping CAD, firmware, and RL configs with demos like this, small labs actually get a path. What I want next: distance, fall rate, and whether the same policy still works when the river path is wet.

## Sources

- [YouTube — Open Humanoid ROBOTIS AI Sapiens #5: Runs Along the Hangang River](https://www.youtube.com/watch?v=rSsL4E2MwoI)
- [ROBOTIS — AI Sapiens product page](https://www.robotis.com/en/product/ecosystem-aisapiens.php)
- [ROBOTIS Docs — AI Sapiens / platform docs hub](https://docs.robotis.com/)
- [Open Robotics Discourse — AI Sapiens progress (Kimodo text-to-motion, DYNAMIXEL-Q)](https://discourse.openrobotics.org/t/open-humanoid-ai-sapiens-with-ros-2-text-generated-motion-with-nvidia-kimodo/55194)
