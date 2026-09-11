---
title: "CAP Walks a G1 When the Depth Camera Lies"
description: "Fudan and TARS train one G1 policy that denoises corrupted depth instead of switching to a blind controller. CoRL 2026."
pubDate: 2026-09-11
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/cap-g1-locomotion.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Depth cameras on humanoids fail the way cameras fail: blur, self-occlusion, a hand over the lens, sunlight on stairs. Most perceptive walkers treat that as a binary. Either the map is clean, or you dump to a blind policy.

**CAP**, accepted at **CoRL 2026**, keeps one policy. A world-model encoder is trained as a **learned denoiser**: reconstruct clean, horizon-aligned depth from a corrupted input. A proprioceptive VAE runs beside it at the control rate. The paper (arXiv:2609.11553, submitted **September 10, 2026**) deploys that stack zero-shot on a **Unitree G1**.

<figure>
  <img src="/images/heroes/cap-g1-locomotion.jpg" alt="G1 crossing stairs and a gap with camera covered then uncovered, plus outdoor grass and stairs" loading="lazy" />
  <figcaption>Cover-uncover on mixed terrain, partial occlusion, and outdoor deployment. Source: CAP paper, Figure 1.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/GE_GassSkYM"
    title="CAP: perception-robust G1 locomotion"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Indoor occlusion tests and outdoor grass and stairs. Source: CAP / YouTube.</p>

## Denoise, don't switch

The world model is a DreamerV3-style RSSM. Depth arrives at **10 Hz** (64×48). The policy runs at **50 Hz**. The decoder is not asked to rebuild the noisy input it just saw. It is asked to rebuild a **rotation-stabilized clean depth** target. That mismatch is the point.

Training pairs a **depth-noise curriculum** (Gaussian, salt-and-pepper, patch and edge occlusion, full-frame failure) with **world-model feature dropout** on the actor latent. Dropout can zero the percept, add noise, or swap in another environment's latent. The two pathways stay co-active. There is no gate that flips to a second controller.

In simulation, CAP reports **99.6%** average success with clean depth and **97.9%** under noisy depth, ahead of Hiking, PIE, and a RENet-style binary switch. As perception is swept through eight stages, CAP degrades smoothly. The switcher drops off when the gate picks the blind branch.

## Hardware is less polite

On the G1, **n=5** trials per cell:

| Perception | Stair | Platform | Gap | Mixed |
|---|---|---|---|---|
| Clean | 5/5 | 5/5 | 5/5 | 5/5 |
| Partial occlusion | 5/5 | 4/5 | 5/5 | 5/5 |
| Full cover | 5/5 | 0/5 | 0/5 | 0/5 |

That is **39/40** under clean and partial occlusion. Full cover still walks stairs. Platforms and gaps go to **0/5**. Proprioception cannot invent a ledge it never saw.

<figure>
  <img src="/images/heroes/cap-g1-locomotion-2.jpg" alt="G1 mixed-terrain sequence with camera cover, flash-corrupted depth, and outdoor grass and stairs" loading="lazy" />
  <figcaption>Cover-uncover, flash artifacts, outdoor grass and stairs. Source: CAP paper, Figure 4.</figcaption>
</figure>

Outdoor clips add vegetation artifacts the simulator never injected. Flash tests punch holes in raw depth; the world-model reconstruction still shows the traversable structure.

Limitations are stated plainly. Large camera-extrinsic drift can still poison the denoised percept. Complete perception loss on gap-class terrain is not a walk you should trust.

## A Human's Take

I am tired of "vision or proprioception" as a product slide. Cameras go bad in pieces. A policy that uses the leftover geometry instead of throwing the whole image away is the one I would actually put on a factory aisle. The zero on covered gaps is the honest part. If you cannot see the hole, do not step.

## Sources

- [CAP project page](https://hoshi-no-ai.github.io/CAP/)
- [arXiv:2609.11553 — CAP](https://arxiv.org/abs/2609.11553)
- [CAP paper HTML](https://arxiv.org/html/2609.11553)
- [CAP video](https://youtu.be/GE_GassSkYM)
