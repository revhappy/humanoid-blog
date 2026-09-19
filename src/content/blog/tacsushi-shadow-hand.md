---
title: "A Shadow Hand Makes Sushi by Feel, Then Throws the Crystal Ball Away"
description: "MERL and USC train TacSushi on 340 good trials and 50 failures. Gated fingertip touch plus training-only futures beat concat-and-hope on rice, nori, and toppings."
pubDate: 2026-09-19
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/tacsushi-shadow-hand.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Sticky rice, a sheet of nori, and a topping that will crush if you squeeze it. **Haodi Hu**, **Kaen Kogashi**, and **Toshiaki Koike-Akino** (USC and Mitsubishi Electric Research Laboratories) posted [arXiv:2609.19613](https://arxiv.org/abs/2609.19613) on **17 September 2026** with a policy that treats sushi as a contact problem, not a photo problem.

The robot is a four-finger **Shadow Dexterous Hand Lite** with a **Shadow Tactile Fingertip** on each digit, including the thumb. That is **17** three-axis taxels per fingertip, **68** taxels and **204** raw channels. The hand has **13** actuators and **16** observed joints. The policy predicts **16-step** actuator chunks; a guarded controller commits **12** of them, then looks again.

<figure>
  <img src="/images/heroes/tacsushi-shadow-hand.jpg" alt="Time-lapse of a Shadow Hand shaping rice balls, wrapping seaweed, and placing surf clam, black rice, and salmon" loading="lazy" />
  <figcaption>Five food conditions, including two held-out ingredients. Source: Hu, Kogashi, and Koike-Akino, arXiv:2609.19613.</figcaption>
</figure>

## Touch now, consequences later

**TacSushi** sits on a **Cosmos3-Nano** backbone. Current RGB, language, and joint state go in. A learned gate mixes fingertip features into the action latent. During training, a second decoder sees the demonstrated action chunk and has to predict future RGB, task progress, relative contact risk, and a tactile summary. That decoder is deleted at deployment.

Failed teleop is not thrown out. **50** failed trials keep their visual and contact labels so the model can see what a mess looks like. Their actuator commands are masked out of imitation. Successful data: **114** rice-ball, **113** seaweed, **113** surf-clam trials, **340** in total.

An operator drives the hand with a RealSense view and MediaPipe landmarks. No glove. Workspace cameras sit front and top; the operator camera is not a policy input.

<figure>
  <img src="/images/heroes/tacsushi-shadow-hand-2.jpg" alt="Labeled lab setup with Shadow Hand, three cameras, green screen, sushi samples, and a person teleoperating" loading="lazy" />
  <figcaption>Bare-hand teleop into a tactile Shadow Hand. Source: Hu, Kogashi, and Koike-Akino, arXiv:2609.19613.</figcaption>
</figure>

## 600 rollouts, a five-point sushi score

They compare six methods on three in-distribution tasks (rice-ball shaping, seaweed wrapping, surf-clam placement) and two held-out ingredients (black rice, salmon). **20** trials per method–task cell, **600** rollouts that are not in the training set.

A geometric threshold would punish a lumpy rice oval that a diner would still eat. Fifty people and three VLMs (GPT-5.6, Claude Opus 4.8, Gemini 3.5) score terminal photos on a 1–5 scale. Five human ratings and three model ratings are averaged equally; success is composite **≥ 3**.

Full TacSushi hits **75% / 60% / 70%** on rice, seaweed, and clam (**68.3%** ID average) and **35% / 40%** on black rice and salmon (**37.5%** OOD). Drop the future-consequence loss and keep the same gated touch path: **36.7% / 10.0%**. Concatenate touch instead of gating it, keep the futures: **25.0% / 17.5%**. GR00T plus tactile, the strongest outside baseline, sits at **48.3%** ID and **15.0%** OOD in the same protocol.

## A Human's Take

I am so here for a paper that admits sushi success is a photo, not a millimeter. The useful split is the training-only decoder: you get to learn from ruined rice without asking the deployed policy to hallucinate the next frame. The OOD drop to the high 30s is the honest number. If you cannot feel a salmon slice you never trained on, you are still just a very expensive nigiri press.

## Sources

- [arXiv:2609.19613 — TacSushi: Tactile-Grounded World-Action Modeling for Dexterous Sushi Manipulation](https://arxiv.org/abs/2609.19613)
- [arXiv HTML — platform, tasks, and 600-rollout tables](https://arxiv.org/html/2609.19613v1)
