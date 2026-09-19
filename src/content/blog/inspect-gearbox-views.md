---
title: "INSPECT Learns Where to Look at a Gearbox From Smart-Glass Assistants"
description: "KIT’s INSPECT lifts gearbox verifiability from 34.8% to 41.7% by copying view habits from assembly assistants."
pubDate: 2026-09-18
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/inspect-gearbox-views.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A robot checking an assembly does not need a prettier picture. It needs the camera pose that makes a claim decidable: is that gear in the slot, or only nearby? **INSPECT**, from Karlsruhe Institute of Technology and Hunan University, trains that choice on records from a **smart-glasses** assistant, then transfers it to a robot that never sees candidate images at selection time.

The paper is [arXiv:2609.20615](https://arxiv.org/abs/2609.20615), submitted **17 September**. Code: [github.com/Kratos-Wen/INSPECT](https://github.com/Kratos-Wen/INSPECT).

<figure>
  <img src="/images/heroes/inspect-gearbox-views.jpg" alt="Diagram of smart-glass assistance transferring view selection to a robot arm inspecting a gearbox" loading="lazy" />
  <figcaption>Assistant traces in, robot view lattice out. Source: arXiv:2609.20615.</figcaption>
</figure>

## Claims, not camera mimicry

The assistant answers part queries and next-step questions. When the wearer confirms or corrects a state, the system logs the RGB, the claim, and the head motion. That is useful only if you split two events the paper is careful about:

- The **claim** got resolved because new evidence appeared.
- The **assembly itself** changed because the operator moved a part.

Only the first kind should teach a robot camera. **Presence-Invariant TwinSwap (PI-TwinSwap)** then trains a detector on paired images that swap part identity while holding placement and occlusion fixed. **Object-centered calibration** maps relative view preferences onto robot poses. Clause-level screening checks that the predicted view actually supplies the missing evidence role.

The robot picks a pose from known geometry and the current RGB. No candidate photos in the loop.

## Gearboxes and grinders

On images of **physical gearbox assemblies**, INSPECT posts the highest view utility among the non-oracle policies in the paper and lifts human-rated **full verifiability from 34.8% to 41.7%** versus keeping the current view.

On **IMPACT** commercial **angle-grinder** recordings, a transferred relative-view selector moves correct-decision rate from **50.6% to 54.3%** with a **frozen** perception head. Current-view baseline utility on that transfer table is **1.043** and **0.506**; the relative-view selector is **1.098** and **0.543**.

A supporting verifier diagnostic uses **1,315** annotated claim states from **37** videos. Single-frame support precision is **0.793**; a past-only temporal filter raises that to **0.903** while cutting false support from **0.053** to **0.017**. Against **Qwen3-VL** on a 60-frame matched set, the verifier finds **11 of 20** contradicted claims; both Qwen3-VL protocols find **none**.

PI-TwinSwap, on **304** images and **905** boxes, lifts correctly localized-and-identified objects from **88 to 190** versus real-image training.

<figure>
  <img src="/images/heroes/inspect-gearbox-views-2.jpg" alt="INSPECT pipeline from egocentric RGB through claim verification to a robot arm on a blue fixture" loading="lazy" />
  <figcaption>Assistant stack and fixed-lattice robot inspection. Source: arXiv:2609.20615.</figcaption>
</figure>

## A Human's Take

A seven-point bump in “I can actually see if the gear is seated” is small and specific, which is why I trust it more than a 90% demo. The method’s real claim is the split: don’t copy the operator’s hands, copy the camera move that revealed the answer. If that holds on a live cell instead of replayed assistant video, this is how inspection robots stop taking the pretty view and start taking the useful one.

## Sources

- [arXiv:2609.20615 — INSPECT: Learning Robot View Selection from Assistant Use](https://arxiv.org/abs/2609.20615)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.20615)
- [GitHub — Kratos-Wen/INSPECT](https://github.com/Kratos-Wen/INSPECT)
