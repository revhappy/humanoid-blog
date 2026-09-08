---
title: "ergoCub Won’t Drop the Box Until You Mean It"
description: "IIT fine-tunes GR00T N1.5 with a second of fingertip history plus compliance. Full system: 93% handover success, 9 of 10 people ranked it first."
pubDate: 2026-09-08
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/tactile-handover.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A humanoid holding a package has to know the difference between a real take and a bump. **Pasquale Marra, Stefano Berti, Gabriele M. Caddeo, and Lorenzo Natale** at the Italian Institute of Technology (with the University of Genoa) fine-tune **NVIDIA Isaac GR00T N1.5-3B** on that problem. The paper, arXiv:2609.05282, went up **4 September 2026**.

The robot is **ergoCub**. Both hands wear **Xela** fingertip taxels. The prompt is “Get the box and pass it to human.”

<figure>
  <img src="/images/heroes/tactile-handover.jpg" alt="ergoCub handing a brown box to a person, with force overlays in simulation" loading="lazy" />
  <figcaption>Release when the pull is toward the person; hold when the force is wrong-way. Source: arXiv:2609.05282.</figcaption>
</figure>

## Tactile history plus a soft arm

Vision alone cannot tell a sustained pull from a tap. The policy runs at **10 Hz**; the taxels run near **70 Hz**. The authors pack about **0.9 s** of three-axis fingertip forces into a 24-dimensional **Temporal Tactile Encoding (TTE)** instead of a single-frame force vector.

A compliance layer yields the hands along measured fingertip forces (Kp=50, Kd=40) before the torso-and-arms inverse-kinematics controller. GR00T still outputs 16-step Cartesian chunks; they execute the first 8.

Eight people gave 50 teleop demos each (25 with compliance, 25 without) on a Meta Quest 3. Then **10 new participants** ran 10 trials per policy: five release-expected, five hold-expected. Three policies:

- **P1**: TTE + compliance
- **P2**: compliance, no tactile
- **P3**: TTE, no compliance

<figure>
  <img src="/images/heroes/tactile-handover-2.jpg" alt="Sequence of a person pulling a box from ergoCub, brief pulls vs a sustained pull" loading="lazy" />
  <figcaption>Same peak force (~3.8 N); only the long pull opens the hands. Source: arXiv:2609.05282.</figcaption>
</figure>

## The scores

Over 300 scored trials:

| | P1 (full) | P2 (no tactile) | P3 (no compliance) |
| --- | --- | --- | --- |
| Success | **93%** | 54% | 82% |
| Success with 2.8 s release window | **92%** | 45% | 80% |
| Median release delay | **1.70 s** | 2.35 s | 2.00 s |
| Peak pull force | **4.07 N** | 4.67 N | 4.74 N |
| Satisfaction (1–7) | **6.2** | 3.3 | 4.7 |
| Ranked first / safest | **9 / 10** | 1 / 0 | 0 / 0 |

P3 dropped the box in **4%** of its trials — the only policy that did. Instantaneous force (an earlier ablation) false-opened **51** times on a held-out “challenging” set; TTE did it **3** times and never held a false opening longer than 1.5 s.

T9, short impulsive pulls at genuine-take magnitudes, is the hard case (P1 at 60%). Code and data are promised after acceptance.

## A Human's Take

Release timing is the whole job. Tactile history decides; compliance makes the hand-off feel less like a tug-of-war. 93% with naive users is the number I will remember. I still want this on an object that is not a cardboard box, and I want the thumbs in the sensor set. Four fingers per hand is a start.

## Sources

- [arXiv:2609.05282 — Temporal Tactile Encoding and Compliance for Handover](https://arxiv.org/abs/2609.05282)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.05282)
