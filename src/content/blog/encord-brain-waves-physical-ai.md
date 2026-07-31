---
title: "Encord Is Tagging Brain Waves While Pilots Train Robot Arms"
description: "TechCrunch visits Encord’s San Leandro warehouse, where Zander Labs EEG headsets and muscle sensors join egocentric video for physical AI training data."
pubDate: 2026-07-31
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/encord-brainwaves.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Robot foundation models keep running into the same wall: there is not enough high-quality physical training data. One startup is manufacturing it — and strapping EEG to the pilots.

**TechCrunch** (26 July 2026) visited **Encord**’s warehouse in **San Leandro, California**, where “pilots” (robot trainers) run tasks while wearing camera headsets that also read **brain waves**. The EEG hardware comes from German neuroscience startup **Zander Labs**, aimed at signals tied to error, intent, and surprise.

<figure>
  <img src="/images/heroes/encord-brainwaves.jpg" alt="Robot pilot Sofia Infante operating a leader-follower dual-arm rig in Encord’s warehouse" loading="lazy" />
  <figcaption>Senior robot pilot Sofia Infante on a leader-follower rig at Encord. Source: Tim Fernholz / TechCrunch.</figcaption>
</figure>

## What’s actually new

<figure>
  <img src="/images/heroes/encord-brainwaves.jpg" alt="Encord warehouse teleop station with dual robotic arms and operator" loading="lazy" />
  <figcaption>Leader-follower rigs and warehouse props for household-style manipulation data. Source: TechCrunch / Tim Fernholz.</figcaption>
</figure>

Per TechCrunch’s on-site reporting:

- Encord started in vision-data annotation and evaluation; customers pushing end-to-end manipulation forced it to **produce** training data, not only label it
- **Vineeth Velmurugan**, head of robot learning (ex-OpenAI robot lab, Berkshire Grey), says “the data simply does not exist” at the fidelity frontier labs need
- Zander collaboration is a **trial**: build a brain-wave-tagged dataset, run it through customer robotics models, measure whether performance improves before scaling
- **Lukas Gehrke** (Zander) argues activity intensity during a task hints when models should spend high compute
- Parallel experiment: **forearm muscle sensors** to reconstruct hand pose when ego-video crops fingers out of frame
- Dense language annotations (“right hand tightens bolt”) — Velmurugan estimates ~**100×** training value vs “junky ego data” at roughly **20×** production cost
- Pilots also run **leader-follower** dual-arm rigs for coffee pours, poker-chip stacks, and ethernet plug/unplug work; racks hold household props for home-style tasks

Encord’s own press page lists the TechCrunch piece and prior coverage of a **$60M** raise to accelerate robot and drone data work.

## The economic punchline

TechCrunch frames the LLM comparison carefully: text scrapes were nearly free; physical demos are not. Velmurugan’s order-of-magnitude claim — a corpus on the order of **five times YouTube’s video library** to break through — is the company’s framing of how large the gap is, not an independent audit. Either way, data-generation is becoming a product category sitting between every unnamed “leading robotics firm” Encord says it serves.

## A Human's Take

Brain waves as training labels sound sci-fi until you notice the boring middle: denser supervision for hard moments in a task. I’m curious whether EEG buys more than better cameras and good teleop logs — the trial design (measure model lift before scale) is the adult move. If it works, the next bottleneck is still human pilots. If it doesn’t, at least someone stress-tested the hype with customer models instead of a keynote slide.

## Sources

- [TechCrunch — Are brain waves the next unlock for physical AI?](https://techcrunch.com/2026/07/26/are-brain-waves-the-next-unlock-for-physical-ai/)
- [Encord press / coverage index](https://encord.com/press/)
