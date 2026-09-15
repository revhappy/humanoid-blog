---
title: "Agility’s Digit 5 Sits Down So It Can’t Fall on You"
description: "Digit 5 lifts 50 lb, charges in 9 minutes, and is built to work near people without cages. Early access is slated for 2027."
pubDate: 2026-09-15
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/agility-digit-5.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Agility** unveiled **Digit 5** on September 15 as its first humanoid built for “cooperatively safe” work at scale: close to people, without the cages that still surround most industrial robots. The Salem, Oregon company says the machine can repeatedly lift **50 lb (22.7 kg)**, run **90 minutes** and recharge in **9 minutes**, and reach **7.2 ft (2.2 m)** from a **5 ft 11 in (1.81 m)** stance.

Early access is expected in the first half of **2027**, with general availability by the end of that year. Agility also plans EU and UK deployments, with a CE mark described as expected rather than already in hand.

<figure>
  <img src="/images/heroes/agility-digit-5.jpg" alt="Front studio photo of Agility Digit 5, teal torso, black head, compact grippers" loading="lazy" />
  <figcaption>Digit 5 product hero. Source: Agility Robotics press release.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/oyq9BOwK5XI"
    title="Agility Digit 5 launch video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Launch clip of Digit 5 walking, squatting, and handling crates. Source: Agility / YouTube via Humanoids Daily.</p>

## What “cooperative safety” actually does

The safety stack has three named pieces: detect people, signal intent, and supervise motion independently.

- **Human detection**: proprietary AI plus multiple sensors, watching for nearby people.
- **Safety cues**: visual and auditory signals so a person can tell what the robot is about to do.
- **Safe motion control**: a separate controller that can avoid, stop, or put Digit into a seated pose.

IEEE Spectrum’s Evan Ackerman puts the sit-down in plain language: as a person approaches, Digit is supposed to set down its load and, if needed, sit so it is physically unable to fall onto anyone. It is not elegant. It is a verifiable answer to “what if the biped tips.”

Agility CTO **Pras Velagapudi** told Ars Technica the robot uses “a few different types of vision-based sensors” and NVIDIA **IGX Thor** plus **Halos for Robotics** as part of the safety case. Agility also lists itself as a contributor to ANSI/A3 TR R15.108 and ISO 25785-1, the draft humanoid safety standard.

> "The robot was designed with a complex safe motion system that can take a variety of different mitigations depending on exactly what sort of human presence is detected," Velagapudi told Ars.

<figure>
  <img src="/images/heroes/agility-digit-5-2.jpg" alt="Front and three-quarter views of Digit 5 with humanlike legs and compact grippers" loading="lazy" />
  <figcaption>Front and angled views. Source: IEEE Spectrum / Agility Robotics.</figcaption>
</figure>

## Hardware that is built for lifts, not bird-legs

The visible change is the legs. Earlier Digits inherited Cassie’s reverse-knee look. Spectrum notes that bird-like legs are better for dynamic gait, while human-style legs are better for squats and lifts. Digit 5’s new legs use Agility’s cycloidal actuators and are rated for repetitive 50 lb lifts, a **40%** payload bump that Agility says covers OSHA single-person lift tasks.

Other numbers from the announcement:

- **Weight**: 284 lb / 129 kg
- **Run-to-charge**: 10:1, up from Digit 4’s 2:1, which Agility says supports more than **20 hours** of work in a 24-hour day via repeated dock cycles, not one charge
- **Grippers**: swappable, ISO-standard flanges
- **Reach**: 7.2 ft, up from Digit 4’s 5.5 ft

Humanoids Daily flags the product-page disclaimer: specs are preliminary estimates from pre-production testing, and some safety features are still in development.

<figure>
  <img src="/images/heroes/agility-digit-5-3.jpg" alt="Digit 5 standing at a factory workbench with a blue crate of circular parts" loading="lazy" />
  <figcaption>Digit 5 at a workbench. Source: Agility Digit 5 product page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/agility-digit-5-4.jpg" alt="Digit 5 squatting in a warehouse aisle to lift a cardboard box labeled fragile" loading="lazy" />
  <figcaption>Squat to a low shelf. Source: Agility Digit 5 product page.</figcaption>
</figure>

Digit 4 has logged more than **65,000 hours** at sites including GXO, Schaeffler, Amazon, and Toyota Motor Manufacturing Canada. At GXO Flowery Branch near Atlanta, Digit 4 hit a cumulative **100,000-tote** mark at about **98%** on-task accuracy, according to Agility. Digit 5 is supposed to expand from tote handling into depalletizing, machine tending, kitting, sequencing, inspection, and outbound palletizing, coordinated through **Agility Arc**.

CEO **Peggy Johnson** said customers asked for this after three years of Digit 4 on their floors, and that as of May 2026 Agility had more than **$300 million** in multi-year Digit 5 orders subject to contractual milestones.

## A Human's Take

Sitting down so you cannot fall on someone is the first humanoid safety story I have read that I can actually picture on a warehouse floor. The rest of the pitch still has to survive 2027: early access is a year out, the specs are pre-production, and the $300 million backlog is milestone-gated, not cash in the door. If Digit 5 really runs 20 hours a day next to people without a cage, that is the product. Until a customer logs a shift like that, it is a well-photographed safety concept with a new squat.

## Sources

- [Agility — Digit 5 press release](https://www.agilityrobotics.com/content/agility-unveils-digit-5-humanoid-robot-built-for-cooperatively-safe-work-at-scale)
- [Agility — Digit 5 product page](https://www.agilityrobotics.com/solutions/digit-5)
- [IEEE Spectrum — Digit 5 May Be the First Humanoid Robot Worker That’s Truly Safe](https://spectrum.ieee.org/humanoid-robot-safety)
- [Ars Technica — Agility’s new humanoid robot will stop, squat to avoid harming human coworkers](https://arstechnica.com/ai/2026/09/agilitys-new-humanoid-robot-will-stop-squat-to-avoid-harming-human-coworkers/)
- [Humanoids Daily — Agility unveils Digit 5, designed to work closer to people](https://www.humanoidsdaily.com/news/agility-unveils-digit-5-designed-to-work-closer-to-people)
- [Agility Digit 5 launch video — YouTube](https://www.youtube.com/watch?v=oyq9BOwK5XI)
