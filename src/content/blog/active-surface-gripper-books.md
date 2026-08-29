---
title: "A Belt-Thumb Gripper Pulls Books Off Desks and Shelves"
description: "Zhejiang University’s RSS 2026 gripper uses an active belt and two underactuated fingers to grasp books, paper, and film without finger gaiting."
pubDate: 2026-08-29
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/active-surface-gripper.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A Zhejiang University Grasp Lab paper, accepted at **RSS 2026** and posted to arXiv on **27 August 2026**, describes a three-finger gripper that treats thin objects as a belt problem instead of a finger-gait problem. The thumb is a silicone-coated belt. The other two fingers are underactuated, wedge-tipped, and can reconfigure from a parallel grasp into a shelf-separation pose. Three motors run the whole thing: reconfigure, open/close, belt.

The test objects are books on a desk and books packed vertically on a shelf, plus A4 paper, plastic film, fabric, and a mouse pad. A prototype on a **UR5e** does the trials.

<figure>
  <img src="/images/heroes/active-surface-gripper-3.jpg" alt="Sequence of the gripper pulling a book off a desk and extracting a book from a packed shelf" loading="lazy" />
  <figcaption>Desk scoop versus shelf extract, same gripper. Source: arXiv:2608.26883.</figcaption>
</figure>

## Why a belt

Most thin-object grasps need a precise scoop or pry, then force closure while the contact point slides. This design parks the belt on the book, rolls the book into the palm, then closes. The rolling contact stays fixed in the gripper frame, so the arm does not have to dance.

Desk mode: fingers passively fold against the table on springs; the belt pulls; fingers close. Shelf mode: wedge tips go into the gaps beside the target book so neighbors do not come out with it; the belt contacts the top edge; then the gripper reconfigures and pulls.

Belt speed in the tests is **0.036 m/s** (motor 3 at **166 rpm**), slow on purpose so the move stays quasi-static. Control is sequential, not coupled: set pose, press, roll, close.

Beam-model tuning picked a **20°** fingertip wedge and a larger finger opening, about **40 mm**, so the book does not demand so much belt friction that the thumb slips.

## Success counts

Table II in the paper, 20 trials each:

| Object | Desk | Shelf |
|--------|------|-------|
| Book 1 | 20/20 | 18/20 |
| Book 2 | 20/20 | 17/20 |
| Book 3 | 20/20 | 18/20 |
| Book 4 (thickest) | 18/20 | 16/20 |
| A4 paper, plastic film, mouse pad, fabric | 20/20 desk | — |

The thickest book is **14 mm** with bending stiffness **7.7×10⁻³ N·m²**. Failures on that book happened as it first hit the fingers. Shelf misses were mostly open-loop insertion errors, not belt slips after the fingers were in. From the unbound side of the book, desk success was **20/20** on all four books.

The same belt run in reverse can park a book on a shelf without opening the fingers, which the authors argue is the hard part for a parallel gripper in a packed row. Plastic film in the tests goes down to **0.08 mm**.

Authors are **Ziyi Zheng, Keqi Zhu, Hao Wu, Yanzhe Wang**, and **Huixu Dong** (Grasp Lab, Zhejiang University, and Torch Kernel Co., Ltd.).

## A Human's Take

A library is a meaner manipulation bench than a cube. Pages separate, spines bind, shelves leave no room for a fat palm. A belt thumb that only needs three motors is the kind of ugly hardware I root for. Twenty trials is not a warehouse SKU study, and the shelf misses are still a vision problem. If they close the insertion loop, this is a gripper I would actually put on a mobile base in a stacks aisle.

## Sources

- [arXiv:2608.26883 — Active Surface-Driven Reconfigurable Gripper](https://arxiv.org/abs/2608.26883)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.26883v1)
