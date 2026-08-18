---
title: "ViTaR Lets a Frozen VLA Feel Contact Without Rewriting It"
description: "A residual layer on OpenVLA-OFT uses touch only to pick and scale a small correction. UniVTAC success jumps 30.6 points."
pubDate: 2026-08-18
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/vitar-vla.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Foundation VLAs are pretty good at “pick up the bottle” and pretty blind once the bottle starts to slip. Most fixes either stuff tactile tokens into the backbone (and risk forgetting the pretrain) or run RL at the moment of contact. **ViTaR**, posted August 16, does neither.

It freezes **OpenVLA-OFT** and treats touch as an execution knob: keep the base action, or add a bounded 7-D residual, then scale that residual from the current tactile image. The VLA still picks the direction.

<figure>
  <img src="/images/heroes/vitar-vla.jpg" alt="ViTaR teaser: frozen VLA plus residual tactile modulation and UniVTAC tasks" loading="lazy" />
  <figcaption>Tactile as a modulator, not a second policy. Source: Wang et al., arXiv:2608.15816.</figcaption>
</figure>

## Two stages

**Effect-Guided Modeling** restores a contact state, rolls a few short branches (base action vs candidate residuals), and learns a within-state ranking from those outcomes. No global reward that has to work across every contact mess.

**Residual Action Modulation** turns that ranking into two decisions: which option to run, and how hard. Marker motion on GelSight-style images helps choose; a tactile-image summary only scales the gain. If nothing looks better than the base action, the residual stays zero.

<figure>
  <img src="/images/heroes/vitar-vla-3.jpg" alt="ViTaR overview: frozen VLA, EGM ranking, RAM residual scale" loading="lazy" />
  <figcaption>EGM ranks, RAM scales. Source: Wang et al., arXiv:2608.15816.</figcaption>
</figure>

## UniVTAC and a real arm

On **UniVTAC**’s seven contact-rich tasks (100 episodes each), ViTaR averages **61.3%** success. Frozen OpenVLA-OFT is **30.7%**. That is **+30.6** points. It also beats the authors’ Tactile-VLA adaptation (**40.0%**) and π0.5 (**48.3%**). It does not win every column: π0.5 is better on Lift Can (70% vs 44%), and Tactile-VLA wins Lift Bottle (97% vs 88%).

Hardware is a **6-DoF RealMan RM-65B**, a custom gripper with **9DTact**, and ExUMI VR teaching. Twenty trials each on Insert Hole, Lift Bottle, and Wiping the Board. ViTaR averages **48.3%**, **+30.0** points over the same frozen base, **+15.0** over Tactile-VLA.

An ablation that swaps the selector for residual RL (PPO or SAC) under the same bounds drops average success to **36.0%** and **32.0%**, with more unsafe/early stops.

<figure>
  <img src="/images/heroes/vitar-vla-2.jpg" alt="UniVTAC and physical contact-rich task sequences" loading="lazy" />
  <figcaption>Sim insertions and real board-wipe / hole insert. Source: Wang et al., arXiv:2608.15816.</figcaption>
</figure>

The authors note they could not reproduce several recent tactile-VLA papers on the same interface, so those stay in related work.

## A Human's Take

I like the constraint. Touch is allowed to say “a little more” or “not that,” not “forget the language and invent a new reach.” That is how I want a pretrained policy to grow up.

48% on the real three-task set is not a product number. It is a frozen base plus a small residual that did not blow up. If they can keep that habit when the residual set is a multi-finger hand instead of a 7-D gripper, this becomes a pattern other labs can steal.

## Sources

- [arXiv:2608.15816 — ViTaR](https://arxiv.org/abs/2608.15816)
- [arXiv HTML — full paper and UniVTAC table](https://arxiv.org/html/2608.15816v1)
