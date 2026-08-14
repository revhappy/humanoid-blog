---
title: "HumanTracker Grades Humanoid Tracking the Way People See It"
description: "Galbot, Tsinghua, and partners post a 153-hour mocap benchmark and HumanScore, a preference metric that beats MPJPE."
pubDate: 2026-08-14
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/humantracker.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Most humanoid trackers get scored on **mean joint error**. **HumanTracker** (arXiv **August 13**, accepted to **ECCV 2026**) argues that number often disagrees with the video. A rollout can look fine on MPJPE and still skate, miss a foot plant, or wobble through a sit-down.

The paper, from **Nankai, Tsinghua, Galbot, SJTU, Peking, and Shanghai Qi Zhi**, pairs a large optical-mocap test bed with **HumanScore**, a trajectory reward trained on expert pairwise preferences.

<figure>
  <img src="/images/heroes/humantracker.jpg" alt="HumanTracker teaser showing HumanScore and four motion families" loading="lazy" />
  <figcaption>HumanScore on the left, four-family benchmark on the right. Source: HumanTracker project page.</figcaption>
</figure>

## 153 hours, four families

The released set is about **153 hours** and **25,000 clips** from **24 professional performers** — dance teachers, fitness coaches, tennis coaches, and mocap actors. Motions are retargeted with **GMR** onto a common **29-DoF** humanoid and cleaned for floating, ground penetration, and broken contacts.

The taxonomy is the useful part. Clips sit in four families so you can see *where* a tracker dies:

- **Daily**: **89 hours**, **9.7k** clips — walking, turning, leftover drift
- **Highly Dynamic**: **11 hours**, **2.7k** clips — jumps, kicks, fast footwork
- **Interaction**: **48 hours**, **10.9k** clips — hands and whole-body coordination
- **Ground**: **5 hours**, **1.6k** clips — kneel, sit, roll, get up

AMASS-style test suites the authors call out are much smaller. Their table lists AMASS at more than **40 hours** without category labels, versus HumanTracker’s **153** with four families and text tags. The split is **9:1** train/test, family-balanced.

<figure>
  <img src="/images/heroes/humantracker-2.jpg" alt="Grid of Daily, Highly Dynamic, Interaction, and Ground motion poses" loading="lazy" />
  <figcaption>The four-family motion grid used for diagnosis. Source: HumanTracker paper / project page.</figcaption>
</figure>

## HumanScore vs the usual numbers

Six doctoral annotators compared synchronized 5-second windows from **GMT, TWIST2, SONIC, and Humanoid-GPT**. The project page says **6,000** original pairs, doubled by mirroring to **12,000** records (the paper’s abstract says **12K** pairs / **24K** motions). A Transformer reads a **539-dimensional** per-frame state — reference, simulated pose, contacts, root motion — and is trained with a Bradley–Terry loss.

On a family-balanced test set, HumanScore’s align rate is **0.9083**. MPJPE sits at **0.8049**. Foot-contact accuracy is **0.7882**. Longer context helps: one second of window is weaker than five.

Zero-shot on the test split, **Humanoid-GPT** leads most cells. Daily success is **94.4%** with MPJPE **0.046 rad** and HumanScore **54.7**. Ground is the ugly one: Humanoid-GPT still only finishes **32.9%** of episodes; **GMT** and **TWIST2** hit **0.0%**. SONIC wins Ground HumanScore (**26.5** vs **24.9**) even though Humanoid-GPT completes more episodes. That is the paper’s point: finish rate and “does this look planted” are not the same number.

<figure>
  <img src="/images/heroes/humantracker-3.jpg" alt="HumanScore architecture with temporal Transformer and Bradley-Terry loss" loading="lazy" />
  <figcaption>Frame tokens in, scalar reward out. Source: HumanTracker project page.</figcaption>
</figure>

## A Human's Take

I like a metric that punishes skating more than a pretty average joint error. I also want the next version on metal. This whole comparison lives in MuJoCo with a standardized 29-DoF body. A score that agrees with six PhDs watching sim video is a start. A score that agrees with someone watching a G1 miss a stair is the product.

## Sources

- [arXiv:2608.13555 — HumanTracker](https://arxiv.org/abs/2608.13555)
- [HumanTracker HTML paper](https://arxiv.org/html/2608.13555v1)
- [HumanTracker project page](https://dairuliu.github.io/humantracker)
- [alphaXiv — HumanTracker](https://www.alphaxiv.org/abs/2608.13555)
