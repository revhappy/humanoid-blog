---
title: "LifelongCrossNav Keeps a 3D Map Across Floors and Goals"
description: "New framework stores sparse 3D semantic memory so robots can chain multi-object searches across stairs—plus the HM3D-MFMON benchmark."
pubDate: 2026-08-10
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/lifelongcrossnav-multi-floor.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most object-goal bots either remember a flat map or climb stairs once for a single target. Real apartments ask for both: find the TV, then the bed, then the toilet—and maybe take the stairs between them.

**LifelongCrossNav** (arXiv:2608.07079, Aug 7, 2026) is a framework for **sequential multi-object ObjectNav in unknown multi-floor indoor scenes**. It keeps a shared sparse **3D semantic voxel memory** across goals inside one episode, instead of rebuilding the world every time a new object name appears.

Project page: [flageval-baai.github.io/LifelongCrossNavPage](https://flageval-baai.github.io/LifelongCrossNavPage).

<figure>
  <img src="/images/heroes/lifelongcrossnav-multi-floor.jpg" alt="Cutaway multi-floor home with robot paths to three sequential goals" loading="lazy" />
  <figcaption>Sequential multi-object ObjectNav across floors: Start → Goal 1 → Goal 2 → Goal 3 with stair transitions. Source: arXiv:2608.07079.</figcaption>
</figure>

## What is new

- **Persistent 3D memory** — geometry, traversability, and vision-language features accumulate while goals change.
- **Stairs as first-class structure** — support-aware voxel types (Occupied / Traversable / Stair / Unsupported), stair-specific perception, direction-aware stair frontiers.
- **Unified policy** — same-floor frontiers, stair frontiers, History POIs (re-query stored features with new goal text), Live POIs (YOLO / YOLO-World + MobileSAM).
- **HM3D-MFMON benchmark** — **927** three-goal episodes from **36** multi-floor HM3D scenes, including **288 Cross-Floor-Required** episodes that need at least one floor change.

“Lifelong” here means **within-episode** persistence across sequential goals, not lifelong learning across days.

<figure>
  <img src="/images/heroes/lifelongcrossnav-multi-floor-2.png" alt="LifelongCrossNav system framework diagram" loading="lazy" />
  <figcaption>Framework: support-aware 3D map + persistent VL memory + mode-aware 3D planning. Source: arXiv:2608.07079.</figcaption>
</figure>

## Results (vs planar OneMap baseline)

On all **927** episodes (paper Table 1; rows ordered as OneMap / w/o History-POI / full method in the HTML text):

- Sequence **SR** rises from the planar baseline’s mid-teens toward roughly **29%** for LifelongCrossNav variants
- Progress rate (**PR**) approaches ~**48%**
- History POIs mainly lift **SPL / PPL** (later goals reuse memory instead of re-exploring)

On the **288 Cross-Floor-Required** episodes, the planar baseline completes **0%** full sequences; LifelongCrossNav reaches nonzero sequence success (~**8%** SR class) with higher partial progress—planar semantic maps alone cannot finish tasks that require stairs.

Single-object HM3D ObjectNav remains competitive (**59.7% SR**, **28.0% SPL**) without online LLM reasoning.

## A Human's Take

Stairs plus memory is how service robots stop looking lost between “find the remote” and “find the charging cable upstairs.” The Cross-Floor-Required zero for planar maps is the clearest receipt. I’m curious how History POIs behave when detection confuses beds and sofas—the authors already flag that as a real failure mode, which is the right kind of honesty.

## Sources

- [arXiv:2608.07079 — LifelongCrossNav](https://arxiv.org/abs/2608.07079)
- [arXiv HTML full text](https://arxiv.org/html/2608.07079v1)
- [Project page](https://flageval-baai.github.io/LifelongCrossNavPage)
