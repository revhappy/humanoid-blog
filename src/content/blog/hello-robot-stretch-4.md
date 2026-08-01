---
title: "Hello Robot Stretch 4: Wheels, Not Legs, for Real Homes"
description: "Stretch 4 ships now at about $30K with omnidirectional base, richer sensing, and in-home pilots for people with mobility impairments."
pubDate: 2026-08-01
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/hello-stretch-4.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Hello Robot**’s **Stretch 4** is the opposite of the bipedal home-robot hype cycle: a tall wheeled mobile manipulator you can actually buy, with a published price and a design brief aimed at real apartments—not stage kitchens.

## Specs that matter

From Hello Robot’s product page and IEEE Spectrum’s hands-on coverage:

- **Price**: about **US $29,950–$30,000** (IEEE Spectrum / TechCrunch)
- **Reach**: **55 cm** arm + **6 cm** wrist; payload **2.5 kg** extended / **4 kg** retracted
- **Mass**: **46 kg** (about **33 kg** with ballast removed for transport)
- **Height / footprint**: **160 cm** tall, **~45 cm** diameter base
- **Runtime**: up to **8 hours** under light CPU load; self-charging
- **Software**: open-source **ROS 2** and Python SDK; ships calibrated with demos for autonomy and embodied AI

The big hardware upgrade from prior Stretch models is an **omnidirectional base** (translate without turning first), using wheelchair-class omni wheels. The head is no longer a cute pan-tilt: dual hemispherical lidars, Luxonis cameras, wrist depth, Intel NUC 15, and an NVIDIA Jetson Orin NX for researchers.

<figure>
  <img src="/images/heroes/hello-stretch-4-2.jpg" alt="Stretch 4 robot standing in Hello Robot office living-room set" loading="lazy" />
  <figcaption>Stretch 4 in Hello Robot’s office demo space. Source: TechCrunch / Hello Robot.</figcaption>
</figure>

## Built for pilots, not sci-fi butlers

CEO **Aaron Edsinger** and CTO **Charlie Kemp** tell IEEE Spectrum that Stretch 4 is the bridge from research platform to something deployable—especially in homes of people with severe mobility impairments. Baseline autonomy includes mapping, navigation, self-charging, and demo grasping; human-in-the-loop control remains intentional.

TechCrunch reports Edsinger expects **200–300** units from the Martinez, California manufacturing site, with the first run sold out. Customers span researchers, enterprise trials (including data centers), and assistive-tech partners. Board member **Keith Platt**, who uses Stretch at home, described cutting a protein-shake task from nearly two hours solo down to a few minutes with voice-plus-direct control.

Henry Evans, a long-time assistive robotics collaborator, argues legs add little for users whose homes already favor wheeled mobility—and that e-stop behavior is safer when a wheeled base freezes instead of collapsing.

## A Human's Take

I’m so here for the anti-hype product. Published price, UPS-shippable form factor, open SDK, and users who care about glasses and toothbrushes more than parkour. Stretch 4 will not fold laundry like a Super Bowl ad—and that is the point. If Stretch 5 is the mass-market assistive bot, the boring hardware lessons from this generation are the moat.

## Sources

- [Hello Robot — Stretch 4 product page](https://hello-robot.com/stretch-4/)
- [IEEE Spectrum — Stretch 4 home robot coverage](https://spectrum.ieee.org/stretch-4-home-robot)
- [TechCrunch — Hello Robot Stretch 4 in homes](https://techcrunch.com/2026/06/04/is-silicon-valley-ready-to-put-robots-in-peoples-homes-hello-robot-is/)
