---
title: "Noitom Drops 617.5 Hours of High-Precision Human Motion for Humanoids"
description: "HiPHI is public on Hugging Face: 132 performers, 90 Hz optical MoCap, and G1 policies that run, crawl, carry, and pull a suitcase."
pubDate: 2026-08-19
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/noitom-hiphi.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Noitom Robotics** released **HiPHI** at the World Robot Conference in Beijing: **617.5 hours** of high-precision optical motion capture from **132 performers**, captured at **90 Hz** with sub-millimeter marker tracking. The dataset is on Hugging Face now, free for research under the ModalityNet Open Research License.

The company calls it the first public drop of its **World Compiler** approach: make the physical world learnable for machines. The paper is [arXiv:2608.16222](https://arxiv.org/abs/2608.16222).

<figure>
  <img src="/images/heroes/noitom-hiphi.jpg" alt="HiPHI teaser with humanoid figures spelling HiPHI and dataset stats" loading="lazy" />
  <figcaption>HiPHI teaser from the public release. Source: Noitom Robotics / GlobeNewswire.</figcaption>
</figure>

## What is in the box

GlobeNewswire and the project page agree on the split:

- **617.5 hours** released, including left-right mirrored counterparts
- **371.8 hours** of whole-body human motion
- **245.7 hours** of human-object interaction, with each object’s trajectory and mesh recorded in sync
- **308.7 hours** of original capture and **200.1 million** frames at **90 Hz**
- **40** real-world objects across **12** categories, masses from **0.45–6.25 kg**
- Organized around **FrameNet** motion units: **22** frames, **214** Frame–LU labels

Policies trained on HiPHI run on a physical **Unitree G1**: running, sitting, crawling, carrying a box, and pulling a suitcase, according to the press release.

<figure>
  <img src="/images/heroes/noitom-hiphi-5.jpg" alt="HiPHI motion-space coverage compared with BONES-SEED and other datasets" loading="lazy" />
  <figcaption>Coverage comparison: HiPHI occupies 1,620 cells on the reported 55×55 grid. Source: Noitom Robotics / GlobeNewswire.</figcaption>
</figure>

## Why they opened it

> “The bottleneck in physical AI is not how much data exists, but how much of it a machine can actually learn from,” said Dr. Tristan Ruoli Dai, Founder and CEO of Noitom Robotics.

Internet video is huge and physically sloppy. Lab MoCap is precise and usually tiny, and companies sit on it. Noitom says HiPHI is among the largest high-precision human-motion sets ever made public. Dr. Lei Han, chief of R&D, said the infrastructure produces more than **100,000 hours a year** for partners, and that HiPHI is a faithful sample of that pipeline.

The project page reports **1,620** occupied cells and a **14.1%** rare-cell long-tail share, versus **10.7%** for the closest baseline they highlight. Tracking error keeps falling as they scale unmirrored training from **3 to 300 hours**.

<figure>
  <img src="/images/heroes/noitom-hiphi-4.jpg" alt="FrameNet to HiPHI pipeline from lexical frames to motion-space coverage" loading="lazy" />
  <figcaption>FrameNet frames become motion seeds, then controlled expansion. Source: HiPHI project page / Noitom Robotics.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/noitom-hiphi-6.jpg" alt="HiPHI tracking success and failure-rate curves versus other motion datasets" loading="lazy" />
  <figcaption>Matched-budget tracking: HiPHI stays near the top of the success chart. Source: Noitom Robotics / GlobeNewswire.</figcaption>
</figure>

Commercial licensing is through **modalitynet.com**. Noitom says it will keep launching at RO-MAN 2026 in Fukuoka (Aug. 24–28) and plans an omni-modality interaction corpus later this year, plus SMPL and SOMA formats.

## A Human's Take

I like a company that publishes the thing it usually hoards. 617 hours of optical MoCap with object meshes is a gift to anyone training whole-body policies, and the G1 clips (run, crawl, carry, suitcase) are the receipt that matters.

I still want to see the failure cases, not just the coverage maps. If the long tail is real, the next public drop should be the ugly hours: slips, recoveries, and the motions that make a G1 look confused.

## Sources

- [GlobeNewswire — Noitom Robotics Releases HiPHI](https://www.globenewswire.com/news-release/2026/08/19/3347363/0/en/noitom-robotics-releases-hiphi-one-of-the-largest-high-precision-human-motion-datasets-ever-made-public-at-the-world-robot-conference.html)
- [HiPHI project page](https://noitom-robotics.github.io/hiphi/)
- [arXiv:2608.16222 — HiPHI: A Large-Scale Benchmark for High-Precision Human Motion and Object-Interaction](https://arxiv.org/abs/2608.16222)
- [Hugging Face — noitomrobotics/HiPHI](https://huggingface.co/datasets/noitomrobotics/HiPHI)
- [GitHub — noitom-robotics/hiphi](https://github.com/noitom-robotics/hiphi)
