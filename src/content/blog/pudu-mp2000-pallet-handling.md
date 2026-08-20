---
title: "Pudu’s MP2000 Forks 2,000 kg Pallets in 20 Seconds"
description: "Pudu launches the MP2000 pallet robot: 2,000 kg payload, 20-second fork-in, 3D LiDAR-SLAM, and no site rebuild."
pubDate: 2026-08-20
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/pudu-mp2000-pallet.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Pudu Robotics** put a pallet jack with a brain on the product page.

The **MP2000** is an “AI-native” pallet handler with a **2,000 kg** (4,409 lb) payload. Pudu’s August 18 launch post and product spec sheet say fork insertion finishes in **20 seconds**, with travel up to **1.6 m/s** empty and **1.2 m/s** loaded. **The Robot Report**, via **Industrial Briefs**, dated the unveiling **August 19**.

<figure>
  <img src="/images/heroes/pudu-mp2000-pallet.jpg" alt="Two Pudu MP2000 pallet-handling robots in a warehouse render" loading="lazy" />
  <figcaption>Pudu’s MP2000 launch art: two units in a warehouse aisle. Source: Pudu Robotics.</figcaption>
</figure>

## Specs that fit a pallet, not a slide

Pudu lists two SKUs, both **1,585 × 910 × 1,870 mm**:

- **MPID01-M** (standard): fork outer width **620 mm**
- **MPID01-N** (narrow fork): **550 mm**

Lift height is **200 ± 5 mm**. Lowered forks sit at **80 ± 5 mm**. Navigation is **3D LiDAR-SLAM** plus **VSLAM**. Battery life is **12 hours** empty and **6 hours** at max load. Charge time is about **2 hours** on 200–240 Vac, or **3.2 hours** on 100–120 Vac.

The interesting mechanical claims sit in the aisle:

- **90°** pallet pickup in aisles as narrow as **2 m**
- pallet spacing down to **15 cm**
- offsets up to **15 cm** and **15°** on a manually placed pallet
- thresholds up to **10 mm**, gaps up to **35 mm**
- gradeability **3°** loaded, **8°** empty

Industrial Briefs, summarizing The Robot Report, adds that the fleet manager can keep assigning work during a network outage, and a manual override turns the unit into a powered forklift.

<figure>
  <img src="/images/heroes/pudu-mp2000-pallet-2.jpg" alt="Pudu MP2000 in a warehouse with a sensor ring drawn on the floor" loading="lazy" />
  <figcaption>MP2000 in a warehouse aisle, with Pudu’s sensing overlay. Source: Pudu Robotics product page.</figcaption>
</figure>

## What “no site rebuild” actually means

Pudu’s pitch is plug-and-play: no floor magnets, no rebuilt racks. The product page says the stack can recognize three-runner and perimeter-base pallets and learn non-standard carriers. It also claims occupancy detection so the robot picks a free slot without a human confirmation tap.

Tasks can come from **PUDU Link**, APIs, voice, or a button. Optional hooks cover elevators and automatic doors. Dual mode lets an operator grab the tiller.

That is a lot of “can.” Pudu did not publish a customer site or a measured picks-per-hour from a live warehouse in the pages I fetched. The 20-second fork-in is a cycle claim on a spec sheet.

<figure>
  <img src="/images/heroes/pudu-mp2000-pallet-3.jpg" alt="Side view of the MP2000 with forks extended toward a pallet of boxes" loading="lazy" />
  <figcaption>Side view: forks out, pallet ahead. Source: Pudu Robotics product page.</figcaption>
</figure>

## A Human's Take

A 2-tonne pallet jack that maps itself and takes a 15 cm miss is the kind of warehouse machine I actually want to watch for a shift. The face on the mast is optional.

What I need next is a timed aisle at a named site, not another render with a glowing ring on the floor. Until then, treat 20 seconds as a fork-in spec, not a throughput guarantee.

## Sources

- [Pudu Robotics — MP2000 product page](https://www.pudurobotics.com/en/products/mp2000)
- [Pudu Robotics — MP2000 launch post](https://www.pudurobotics.com/news/pudu-mp2000-autonomous-pallet-handling)
- [Industrial Briefs — Pudu MP2000, citing The Robot Report](https://www.industrialbriefs.com/pudu-robotics-mp2000-autonomous-forklift/)
