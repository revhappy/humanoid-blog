---
title: "HuMI: Robot-Free Whole-Body Skills on Unitree G1"
description: "Tsinghua and Spirit.AI's HuMI collects backpack-portable demos without a robot present, claims 3× teleop throughput and ~70% success in unseen scenes."
pubDate: 2026-08-04
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/humi.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Teleoperating a humanoid for whole-body demos is slow and brittle. **HuMI** (Humanoid Manipulation Interface) from Tsinghua University, Shanghai Qi Zhi Institute, Spirit.AI, and Shanghai Jiao Tong University collects **robot-free** whole-body demonstrations with hardware that fits in a backpack, then trains a hierarchical stack that runs on a Unitree **G1**.

Paper: [arXiv:2602.06643](https://arxiv.org/abs/2602.06643). Project: [humanoid-manipulation-interface.github.io](https://humanoid-manipulation-interface.github.io/).

## Portable capture, full-body intent

HuMI extends UMI-style handheld grippers (wrist GoPros) with **HTC Vive Ultimate** trackers on grippers, waist, and feet — five operational frames including the pelvis base. Operators see a real-time **IK preview** of the G1 so they can adjust motions that would be unreachable or self-colliding if you naively scaled adult human trajectories onto a ~**130 cm** robot.

A high-level **Diffusion Policy** (~**5 Hz**) predicts receding-horizon task-space keypoint chunks. A manipulation-centric whole-body controller (~**50 Hz**) tracks them with adaptive end-effector rewards and variable-speed augmentation. Non-vision-grounded keypoints (pelvis/feet) use **relative** transforms inside the action chunk to limit open-loop drift.

<figure>
  <img src="/images/heroes/humi.jpg" alt="HuMI data collection system and challenges diagram" loading="lazy" />
  <figcaption>HuMI hardware, IK preview, and data pipeline. Source: arXiv:2602.06643 HTML figures.</figcaption>
</figure>

## Tasks and success rates

In-domain capability tasks on the paper’s G1 setup (20 trials where stated):

| Task | Success |
|------|---------|
| Marriage-proposal kneel + ring grasp | **17/20 (85%)** |
| Unsheathe sword (bimanual) | **17/20 (85%)**, **15.7 mm** avg EE tracking error |
| Dynamic toss into container | **15/20 (75%)** |
| Walk 1–2 m, clean table with lint roller | **15/20 (75%)** with EE+pelvis interface |

Ablations bite hard: drop human-in-the-loop kinematic preview on the proposal task **85% → 10%**; EE-only interface without whole-body keypoints fails the proposal task **0/10**; absolute pelvis tracking on walk-and-clean **75% → 0/10**.

## Generalization and throughput

For squat-and-pick bottles, authors collect **350** demos across **7** environments and **7** bottle instances. In unseen environments and objects they report **14/20 (70%)** success. Versus **TWIST2** teleop on the sword task in a **15-minute** session: HuMI **62** episodes (**96.7%** acceptance) vs **28** (**64.3%** acceptance) — abstract claims **3×** data-collection efficiency overall. Proposal kneeling: HuMI **50** demos in 15 minutes; TWIST2 **0** usable deep kneels in the same window.

<figure>
  <img src="/images/heroes/humi-2.jpg" alt="HuMI hierarchical control framework diagram" loading="lazy" />
  <figcaption>High-level diffusion policy plus low-level whole-body controller. Source: arXiv:2602.06643.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/humi-3.jpg" alt="HuMI data collection throughput comparison with TWIST2" loading="lazy" />
  <figcaption>Throughput vs TWIST2 teleop. Source: arXiv:2602.06643 HTML figures.</figcaption>
</figure>

## A Human's Take

Robot-free whole-body capture only works if the retarget stays honest about object geometry — HuMI’s no-scale + IK preview choice is the right engineering instinct. The TWIST2 comparison on deep kneeling is the money chart: teleop still cannot teach some postures you need for real work.

## Sources

- [arXiv:2602.06643 — HuMI abstract](https://arxiv.org/abs/2602.06643)
- [arXiv HTML — HuMI full paper](https://arxiv.org/html/2602.06643v2)
- [HuMI project website](https://humanoid-manipulation-interface.github.io/)
