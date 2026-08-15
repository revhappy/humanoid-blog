---
title: "EgoPHI Reads 3D Hand Force From a Single Head-Cam Frame"
description: "ETH Zürich’s ECCV 2026 paper estimates dense contact and 3D force on hands and objects from one egocentric RGB image plus a mesh."
pubDate: 2026-08-15
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/egophi.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**ETH Zürich**’s Sensing, Interaction & Perception Lab posted **EgoPHI** on **August 13** (accepted to **ECCV 2026**). It is, the authors say, the first method that jointly estimates **dense contact maps** and **3D force** on hand and object meshes from **one monocular RGB image** plus object geometry.

Authors: **Andela Ilic**, **Rachel Schuchert**, **Yijing Jiang**, **Christian Holz**. Code is listed at **github.com/eth-siplab/EgoPHI**.

<figure>
  <img src="/images/heroes/egophi.jpg" alt="EgoPHI pipeline from egocentric RGB to contact and force on hand and object meshes" loading="lazy" />
  <figcaption>Architecture: pose refinement, then graph-based force heads on left hand, right hand, and object. Source: Ilic et al., arXiv:2608.13014.</figcaption>
</figure>

## Contact is not force

Prior vision work (PressureVision, EgoPressure) mostly maps pressure on **flat** surfaces. EgoPHI targets **articulated, non-planar** objects. It registers estimated hand meshes, refines object pose in the camera frame, then predicts per-vertex contact and 3D force.

There is almost no scalable force ground truth, so they simulate it. Recorded hand–object meshes from **ARCTIC** go into **SOFA**. Soft virtual springs fire when vertices enter a contact zone; force is **−k d n** with **k = 10**. A contact mask then drops spurious non-contact forces.

## Numbers they report

Trained only on ARCTIC, EgoPHI beats a fine-tuned **HACO** baseline on force: hand MAE drops from **6.62 N** to **4.03 N** (RMSE **7.29 → 5.06**). On out-of-distribution **H2O**, it still produces object contact and force estimates; HACO does not. Iterative pose refinement cuts mean per-vertex pose error by more than **70%** (ARCTIC **64 → 19 cm**, H2O **48 → 10 cm**). Those centimeter errors tell you pose is still the weak link.

<figure>
  <img src="/images/heroes/egophi-2.jpg" alt="Ground-truth pose isolation experiment for EgoPHI force maps" loading="lazy" />
  <figcaption>ARCTIC and H2O objects: ground-truth force maps vs EgoPHI. Source: Ilic et al., arXiv:2608.13014.</figcaption>
</figure>

For sim-to-real, they built a **cube** and a **cylinder** from 8 mm acrylic with an LED strip and a fisheye camera underneath. Light leaking into a finger is their force proxy. **Eight** participants, about **2,000** synchronized egocentric/contact pairs. SOFA vs this FTIR setup: cylinder MAE **0.36 ± 0.18 N** (Spearman **0.760**), cube **0.25 ± 0.16 N** (**0.604**).

<figure>
  <img src="/images/heroes/egophi-3.jpg" alt="2D vs 3D force comparison of EgoPHI against PressureVision and HACO" loading="lazy" />
  <figcaption>Projected 2D force vs PressureVision, and 3D mesh force vs HACO. Source: Ilic et al., arXiv:2608.13014.</figcaption>
</figure>

They list the gaps: no temporal model, object mesh required, only **normal** forces, uniform stiffness, and the two real objects are still simple shapes.

## A Human's Take

If you can get a usable 3D force field from a GoPro-style view, robot learning-from-demo gets a lot less tactile-sensor-shaped. I would not hang a grasp policy on 4 N MAE yet. The useful result is the transfer: simulated springs that line up with an acrylic light trick. Next test is a mug or a pair of pliers, not another cube.

## Sources

- [arXiv:2608.13014 — EgoPHI](https://arxiv.org/abs/2608.13014)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.13014v1)
- [GitHub — eth-siplab/EgoPHI](https://github.com/eth-siplab/EgoPHI)
