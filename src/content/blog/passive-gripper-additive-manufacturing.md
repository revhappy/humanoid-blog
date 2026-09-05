---
title: "Print the Gripper to the Object: A Passive Tool Pipeline With Robot Motion Built In"
description: "A Riyadh pipeline prints unactuated grippers from a mesh, pose, and six-axis robot. Four tools pass digital gates; physical tests pending."
pubDate: 2026-09-05
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/passive-gripper-additive-manufacturing.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Two independent researchers at QSS AI and Robotics Lab in Riyadh posted an end-to-end pipeline on **3 September** ([arXiv:2609.03761](https://arxiv.org/abs/2609.03761)) that takes an object mesh, a measured pose, and a six-axis robot and emits an **unactuated**, additively manufactured gripper plus an insertion program.

No extra motor on the tool. The robot’s motion has to insert, lock, carry, and release. That is why they refuse to treat grasp geometry, flange kinematics, and print structure as three separate homework problems.

<figure>
  <img src="/images/heroes/passive-gripper-additive-manufacturing.jpg" alt="Four object-specific passive grippers: CAD, pre-pick on a blue robot, and printed tools holding a rabbit, flange, boat, and bust" loading="lazy" />
  <figcaption>Four archived attempts, CAD through printed pickup. Photographs are qualitative. Source: Omaisan and Mohamed, arXiv:2609.03761.</figcaption>
</figure>

## Four objects, six capture families

The search picks among six passive mechanisms: rim cradle, topology freeform, C-wrench, insert/key, fork/hook, conformal cradle. Contacts start from 600 surface seeds and 1,200 three-seed sets, screened with a Coulomb cone (μ = 0.5) and a residual gate. Surviving anchors get expanded into conformal patches (0.18 mm clearance, 4 mm pad, at least 1 mm reserved for a liner).

The robot in the archive is a **DOBOT CR10A** with an ISO 9409-1 flange. Printer profile: **Creality K1 Max**, nominal PLA. Declared computational load: **0.20 kg**. Four finished dashboard attempts:

| Run | Object | Mechanism (plain) | Wide-pose keepers |
|-----|--------|-------------------|-------------------|
| A1 | Rabbit / bunny | Conformal body cradle | 134 / 160 |
| A2 | Camera flange | Waist wrap-and-lock | 31 / 160 |
| A3 | 3DBenchy | Keyed external-rim cradle | 81 / 160 |
| A4 | Faceted bust | Neck yoke + shoulder saddle | 29 / 160 |

The wide box is a stress check: **±3 mm, ±5°**. Nominal fit is tighter (±0.8 mm, ±1°), with a 95% retention target. All four still cleared a 233-frame runtime sweep, baseline and post-topology FEA, and watertight reconstruction.

<figure>
  <img src="/images/heroes/passive-gripper-additive-manufacturing-2.jpg" alt="Diagram from ranked contact anchors to wrench cone, conformal zones, and insert-rotate-lock motion" loading="lazy" />
  <figcaption>Attempt A4: contacts to insert–rotate–lock. Source: Omaisan and Mohamed, arXiv:2609.03761.</figcaption>
</figure>

## Structure, then (a little) less plastic

SIMP topology optimization runs only after fit surfaces, flange, motion corridor, and keep-outs are frozen. Protected regions include the mount, neck, contacts, stops, shell, and outer skin. Target density is **0.82**; exported FE material fractions landed at **92.0–97.6%** because those regions cannot go away. Peak von Mises after reconstruction is **0.501–1.647 MPa**, peak displacement **0.061–0.991 mm**, all under their nominal PLA allowables. The authors are blunt: this is a digital screen, not a coupon-calibrated strength claim.

They also prove three numerical properties in the paper: nodal load preservation, monotonic SIMP compliance, and voxel containment after post-processing.

<figure>
  <img src="/images/heroes/passive-gripper-additive-manufacturing-3.jpg" alt="Approved preform, SIMP density result, convergence plot, and structural re-analysis for attempt A4" loading="lazy" />
  <figcaption>Protected-domain topology on the faceted-bust tool. Source: Omaisan and Mohamed, arXiv:2609.03761.</figcaption>
</figure>

## A Human's Take

A printed, motor-free tool that only works if the robot can actually insert it is the right kind of stubborn. The photos of the blue prints holding a bunny and a 3DBenchy are fun. They are also labeled “not instrumented.” Until someone runs fit, 3× load, shake, and 100-cycle tests on coupon-calibrated PLA, these stay design records. I would still steal the idea of binding mesh, pose, flange, and trajectory under one hash. That is how you stop a pretty STL from becoming a smashed part.

## Sources

- [arXiv:2609.03761 — Robot Aware Computational Design of Object Specific Passive Grippers](https://arxiv.org/abs/2609.03761)
- [arXiv HTML — tables, FEA, and printed-assembly figure](https://arxiv.org/html/2609.03761v1)
