---
title: "DexTouch-WM Trains Robot Touch on 100 Hours of Human Gloves"
description: "HKUST GZ and Xspark AI put the same 320-taxel pads on people and a Wuji hand, then scale human data while freezing 5 hours of robot time."
pubDate: 2026-09-18
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/dextouch-wm.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Collecting tactile data on a real dexterous hand is slow and locked to that sensor. **DexTouch-WM**, posted 17 September, tries a cheat: put the **same piezoresistive layout** on a human glove and on a robot hand, retarget the person’s motion into the robot’s action space, and let hours of human contact supervise the world model you will later run on metal.

The paper is from HKUST (GZ), Xspark AI, THU, PKU, and HKU. It is accepted as a lightning talk at the IROS 2026 RoBoWoMo workshop.

<figure>
  <img src="/images/heroes/dextouch-wm.jpg" alt="Human wearing tactile gloves holding a phone next to a robot hand with matching fingertip pads" loading="lazy" />
  <figcaption>Shared 320-taxel layout on human gloves and a Wuji hand. Source: Qin, Chen et al., arXiv:2609.20649, Figure 1.</figcaption>
</figure>

## Same pads, same 67-D pose

Each side keeps **320 taxels**: five 4×4 fingertip pads and one 15×16 palm (the gloves record 360; 40 unused). The same 320 go on a **20-DoF Wuji** hand on a Tianji arm. Human wrists come from HTC Vive, fingers from Manus MetaGloves, plus wrist and head cameras. After IK retargeting, both domains share a **67-D** pose: two wrists, two 20-DoF hands, head camera.

The model pairs a pretrained **Wan2.2-TI2V-5B** video expert with a lightweight tactile expert through Mixture-of-Transformers blocks. Tactile tokens are split by anatomy (fingertips vs palm) instead of being smashed onto one fake image grid. The tactile stream predicts **residuals** from the first frame’s pressure, so the network spends capacity on contact change, not the empty palm.

## Freeze the robot hours, add human hours

World-model pretraining uses about **100 hours** of human bimanual tasks (50 everyday tasks) and **5 hours** of robot interaction on six tasks. Human and robot task sets are disjoint.

Holding the 5-hour robot set fixed and adding 10, 50, then 100 hours of human data, held-out robot prediction improves. From robot-only to +100 h human, the paper reports visual PSNR **23.47 → 27.10**, trajectory accuracy **0.89 → 0.96**, geometry error **0.13 → 0.10**, tactile PSNR **24.81 → 29.18**, Contact-IoU **0.42 → 0.59**, Contact-F1 **0.55 → 0.71**. Ten extra human hours barely move tactile metrics; the jump shows up at 50–100 h.

<figure>
  <img src="/images/heroes/dextouch-wm-2.jpg" alt="Grid of real vs world-model rollouts for placing a phone, stacking bowls, packing shoes, standing a bottle" loading="lazy" />
  <figcaption>Generated visuo-tactile demos vs held-out real episodes. Source: arXiv:2609.20649, Figure 5.</figcaption>
</figure>

They also try the world model as a **policy evaluator** and as a **synthetic-demo factory**. Mixing 100 robot + 100 human adaptation trajectories (WM-Mix) raises mean Pearson correlation with real-world policy scores versus a robot-only adapted model (**0.844 vs 0.646**). Using imagined trajectories to *train* policies is messier: FTP-1 mostly holds, π0.5 and X-VLA drop, including a zero on “stand bottle” in one mix setting. Evaluator agreement is not a free lunch for policy data.

## A Human's Take

I like the experiment design more than the acronym. Five hours of robot time, then ask whether 100 hours of sweaty gloves actually help *robot* contact prediction on tasks the robot never practiced. The Contact-F1 climb is the receipt. I would not ship a policy on half-imagined stand-bottle data until that zero goes away.

## Sources

- [Qin, Chen et al. — DexTouch-WM (arXiv:2609.20649)](https://arxiv.org/abs/2609.20649)
- [Paper HTML with figures](https://arxiv.org/html/2609.20649v1)
