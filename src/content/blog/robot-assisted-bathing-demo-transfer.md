---
title: "CMU Team Captures Real Clinician Bathing Demos for Soft-Hand Transfer"
description: "RSS 2026 paper: 128 captures, 257k frames, contact-driven reconstruction, and closed-loop soft hand on a mannequin."
pubDate: 2026-08-11
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/robot-assisted-bathing.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Bathing is one of the activities of daily living that decides independence, and caregiver supply is not keeping up. Robot-assisted bathing has been demoed before, but most stacks lean on idealized protocols or debris-cleanup metrics instead of how clinicians actually wipe, support, and re-position a person.

A Carnegie Mellon and University of Pittsburgh team (Lakshmipathy, King, Erickson, Pollard, and co-authors) posts **“High Fidelity Capture, Reconstruction, and Transfer of Human Demonstrations for Robot-Assisted Bathing”** to arXiv on Aug 10, 2026 (arXiv:2608.09127), accepted at **RSS 2026**. The contribution is a capture pipeline that treats **contact regions** as the core primitive, a clinician–subject dataset, and transfer onto a soft multi-finger hand on a robot arm.

<figure>
  <img src="/images/heroes/robot-assisted-bathing.jpg" alt="Capture, reconstruct, transfer, and deploy pipeline for robot-assisted bathing" loading="lazy" />
  <figcaption>From clinician demos to soft-hand deployment on a mannequin. Source: arXiv:2608.09127.</figcaption>
</figure>

## Dataset and reconstruction

Three trained clinicians and six able-bodied subjects produced **128 captures** and about **257,000 frames**. Subjects wore optical markers; clinicians wore commercial **tactile gloves** (65 taxels per hand) with protective grip material, tracked by a 20-camera Vicon Vantage-V16 volume. Captures span body parts (arms, legs, back, neck, face under limits), **limited vs full assistance**, and mild vs strong pressure.

Raw MoSh++ fits left finger contortions and hand–body gaps. The authors add a constrained hand skeleton pass and a **contact-match** optimization that pulls active taxels to the body surface. Median contact L2 distance drops from **1.714 cm** (MoSh++) to **0.536 cm** with their pipeline on a 10-demo sample.

## Soft hand and mannequin deployment

They design and control a tendon-driven soft **DexKit** hand from demonstration poses, mount it on a **UFACTORY xArm 7**, and retarget wrist motion via barycentric body contacts onto a mannequin fitted with SMPL-X. Open-loop playback often pressed too hard or lost contact. Closing the loop with the same tactile glove style — matching online pressure sum to the demonstration — reduced unsafe peaks and mannequin shake versus open loop, though absolute taxel distributions still differ from the human hand.

<figure>
  <img src="/images/heroes/robot-assisted-bathing-2.jpg" alt="xArm with DexKit soft hand and tactile glove on mannequin setup" loading="lazy" />
  <figcaption>Arm-mounted DexKit hand with tactile sensing glove in the lab setup. Source: arXiv:2608.09127.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/robot-assisted-bathing-3.jpg" alt="Back bathing retargeting from simulation to real mannequin" loading="lazy" />
  <figcaption>Contact-retargeted back bathing rolled out in sim and on the real mannequin. Source: arXiv:2608.09127.</figcaption>
</figure>

The authors state materials will be publicly released for pHRI research, and they are explicit that the system is **not ready for human subjects** yet: online whole-body pose estimation, shear forces, and material mismatch between soft robot hands and human taxel maps remain open.

## A Human's Take

This is the kind of dataset I want more of: messy, contact-rich, clinician-sourced, with the failure modes written down. Contact as a processing primitive is an elegant way around glove-vs-skin geometry fights. The closed-loop pressure matching is a practical safety patch, not a finished controller, and the paper does not pretend otherwise. When the code and captures drop, the useful test will be whether another lab can retarget a different soft hand without redoing the entire Vicon circus.

## Sources

- [arXiv:2608.09127 — High Fidelity Capture, Reconstruction, and Transfer of Human Demonstrations for Robot-Assisted Bathing](https://arxiv.org/abs/2608.09127)
- [arXiv HTML full text](https://arxiv.org/html/2608.09127v1)
- [RSS 2026 proceedings link (paper PDF)](https://www.roboticsproceedings.org/rss22/p094.pdf)
