---
title: "Dyna-2 Trains a World-Action Model on 1M Hours of Human Video"
description: "Dyna Robotics says DYNA-2, trained on over a million hours of egocentric human video, hits 87% zero-shot customer quality vs 46% for Dyna-1."
pubDate: 2026-08-10
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/dyna-2-world-action-model.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Redwood City’s **Dyna Robotics** announced **DYNA-2** on August 10, 2026: a world-action model (WAM) pre-trained on more than one million hours of egocentric human video—about 170 years of continuous waking experience, per the company’s PR and research post.

The pitch is not another VLA badge. Dyna-2 is built to predict future video and future actions together on a video-diffusion backbone, then transfer that physical intuition onto robot hardware with only hours of local fine-tuning.

<figure>
  <img src="/images/heroes/dyna-2-world-action-model.jpg" alt="Dyna-2 one-step video generation diagram with dual-arm robot frames" loading="lazy" />
  <figcaption>Dyna-2 one-step distillation vs multi-step teacher video generation, with dual-arm workspace frames. Source: Dyna Robotics research post.</figcaption>
</figure>

## What they claim

According to the corrected PR Newswire release and the [dyna.co/dyna-2](https://www.dyna.co/dyna-2) technical write-up:

- Pre-training uses **1,000,000+ hours** of human egocentric manipulation video (nested 1k / 10k / 100k / 1M hour ladders for scaling curves).
- The company reports a **human-to-robot transfer scaling law**: more human hours improve offline prediction on held-out robot data the model never saw in pre-training (39 tasks on two bi-manual YAM platforms).
- After identical post-training, **zero-shot customer-site quality pass rate** is **87% for Dyna-2 vs 46% for Dyna-1**—a 41-point gap—while both pass near 100% in-house.
- Aggregate on-robot comparison: early WAM reaches about **1.55×** the VLA baseline’s customer-quality pass rate under matched training.
- Data efficiency example: roughly **13 minutes** of teleop to fine-tune two five-fingered hands to twist a bottle cap open.
- Post-training ladder on 14 internal tasks: mean normalized score climbs **20% → 28% → 45% → 53%** of attainable max as pre-training scale grows from 1k to 1M hours.

Dyna says prior DYNA-1 robots already run in hotels, restaurants, and laundromats. DYNA-2 is the flagship foundation model aimed at production quality on new sites without site-specific pre-training data.

<figure>
  <img src="/images/heroes/dyna-2-world-action-model-2.jpg" alt="Chopped celery tray from Dyna-2 WAM run" loading="lazy" />
  <figcaption>Celery cuts after a Dyna-2 (early WAM) chopping run—the paper’s quality case study vs the VLA baseline. Source: Dyna Robotics research post.</figcaption>
</figure>

## Architecture in plain terms

Dyna-2 is a **mixture of transformers** that denoises future video tokens and future action chunks with flow matching. Video co-training is the scaling lever they stress: action-only training does not produce the same cross-embodiment curve; adding unlabeled human video for world modeling does.

They also report one-step video distillation that drops generation from about **10,203 ms** (100-step teacher on one H100) to **110 ms** for a three-second, three-view manipulation clip.

## A Human's Take

I’m here for the operator-graded site pass rate, not the “170 years of experience” line. If 87% vs 46% holds under customer acceptance criteria with no site data in the pre-train set, that is a real deployment story. I’d still want third-party sites, long-horizon throughput, and failure recovery logs—not just demo tasks that recover under disco lights. Scaling human video is the right bet only if the quality bar survives a full shift.

## Sources

- [PR Newswire — Dyna Robotics unveils DYNA-2 World-Action Model (Aug 10, 2026)](https://www.prnewswire.com/news-releases/dyna-robotics-unveils-dyna-2-world-action-model-demonstrating-first-true-scaling-law-in-robotics-powered-entirely-by-human-data-302847114.html)
- [Dyna Robotics — Dyna-2 research post](https://www.dyna.co/dyna-2)
