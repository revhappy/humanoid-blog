---
title: "FA-RDP: Diffusion Policies That Switch Frequency When Contact Hits"
description: "Shanghai researchers’ FA-RDP adapts diffusion sampling rate for contact-rich manipulation—81.7% average success on box flip, switch, and button tasks."
pubDate: 2026-08-02
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/fa-rdp.png"
readTime: "4 min read"
featured: false
draft: false
---

Contact-rich robot tasks have a split personality. Before touch, several approach trajectories can be equally valid. After contact, force feedback has to be fast or the grasp fails. **FA-RDP** (Frequency-Adaptive Reactive Diffusion Policy) is a new method from Shanghai Jiao Tong University, Shanghai Innovation Institute, and Noematrix that lets one diffusion policy switch sampling rate mid-episode instead of picking one frequency forever.

<figure>
  <img src="/images/heroes/fa-rdp.png" alt="FA-RDP teaser showing multimodal pre-contact paths and high-frequency contact responses" loading="lazy" />
  <figcaption>FA-RDP teaser: multimodal approaches before contact, reactive force control after. Source: FA-RDP project page.</figcaption>
</figure>

## The tradeoff standard diffusion policies lose

The authors’ project page and arXiv abstract ([arXiv:2607.28596](https://arxiv.org/abs/2607.28596)) put the problem cleanly. Fixed low-frequency, multi-step diffusion sampling preserves diverse pre-contact modes but reacts slowly to force. High-frequency sampling improves reactivity but collapses distinct approach modes.

FA-RDP’s answer:

- A **shared multi-frequency visual-force Transformer** that can predict action chunks at low or high frequency  
- A **learned multimodality indicator** that selects multi-step low-frequency sampling before contact and one-step high-frequency sampling as ambiguity drops  
- **Manifold Consistency Distillation (MCD)** so the high-frequency path can run as a one-step sampler on the robot’s action manifold  

In their framing, low frequency runs around **10 Hz** for approach; high frequency around **30 Hz** once contact demands force response.

<figure>
  <img src="/images/heroes/fa-rdp-2.png" alt="FA-RDP multi-frequency visual-force Transformer architecture diagram" loading="lazy" />
  <figcaption>Multi-frequency Transformer with dense (30 Hz) and sparse (10 Hz) temporal grids. Source: FA-RDP project page.</figcaption>
</figure>

## Numbers on three contact-rich tasks

On box flipping, switch toggling, and button pressing (20 trials each), the project reports:

| Method | Avg. success |
|--------|----------------|
| Diffusion Policy (DP) | 10.0% |
| RDP | 35.0% |
| ImplicitRDP | 51.7% |
| Regression + force | 20.0% |
| **FA-RDP** | **81.7%** |

Indicator-guided switching lifts average success from **61.7%** (always high-frequency) to **81.7%**. The authors also show the low-frequency path covers multiple approach modes that a high-frequency-only policy collapses to one.

Code is listed as coming soon on the project site.

## A Human's Take

This is the kind of paper I want more of: not “diffusion, but bigger,” but “diffusion, but the control loop matches the physics phase.” Contact is where factories lose money and demos die.

I'll believe the 81.7% harder once the code lands and other labs rerun the three tasks. Until then, the core idea—slow and multimodal before touch, fast and distilled after—is already worth stealing.

## Sources

- [FA-RDP project page](https://fa-rdp.github.io)
- [arXiv:2607.28596 — FA-RDP abstract](https://arxiv.org/abs/2607.28596)
