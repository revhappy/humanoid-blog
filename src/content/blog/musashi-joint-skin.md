---
title: "Tokyo’s Musashi-W Gets a Joint Skin That Estimates Elbow Angle"
description: "A University of Tokyo IROS 2026 paper wraps Musashi-W’s elbow in layered silicone skin. Skin-only angle error is about 3 degrees."
pubDate: 2026-08-25
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/musashi-joint-skin.png"
readTime: "5 min read"
featured: false
draft: false
---

Musculoskeletal humanoids usually guess joint angle from muscle length and tension. A University of Tokyo group led by **Akihiro Miki** argues the covering around the joint should help. Their IROS 2026 paper, posted to arXiv on August 24, wraps the elbow of **Musashi-W** in a three-layer silicone skin with strain gauges and stretchy conductive mesh inside.

Skin alone estimates elbow angle with an average error of about **3 degrees**. Muscle length is still better (**1.70°** RMSE). Fuse muscle and skin with an encoder and the mean RMSE drops to **1.62°**.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/L9xU2wMkRRg"
    title="Biomimetic joint-covering skin on Musashi-W"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Authors’ hardware walkthrough. Source: paper / YouTube.</p>

## What they actually built

The skin copies epidermis / dermis / subcutaneous layering, not as a costume but as a place to hide sensors:

- **Epidermis:** Dragon Skin 30, about **0.2 mm**
- **Dermis:** Ecoflex Gel 2, about **2 mm**, with **32** Kyowa foil strain gauges (Merkel-like)
- **Subcutaneous:** Soma Foama 15 sponge, about **10 mm**, with **12** Recreus conductive Filaflex chainmail patches (Ruffini-like)

They mold the pair, wrap an open biomimetic elbow, and mount it on Musashi-W. The original joint pots come out. Motion-capture markers on the upper arm and forearm become ground truth. One hour of posing produced **615** samples over about **50°** on pitch, yaw, and roll.

<figure>
  <img src="/images/heroes/musashi-joint-skin.png" alt="Diagram and photos of tissue-structured skin mounted on the Musashi-W musculoskeletal humanoid" loading="lazy" />
  <figcaption>Skin concept and Musashi-W implementation. Source: Miki et al., arXiv:2608.23304.</figcaption>
</figure>

## The numbers they will quote

Single-modality elbow RMSE, 20 random seeds:

- Muscle length: **1.70°**
- Ruffini-like skin: **2.56°**
- Merkel-like skin: **2.69°**
- Muscle tension: **4.84°**

Encoder fusion of muscle plus skin is the only mix that beats muscle length. Poke the elbow with a stick or a hand and the skin estimates blow up (**~41–54°** RMSE). Muscle length degrades to **4.18°** but stays usable. The authors’ point is not that skin is a better encoder. It is that a big disagreement between skin and muscle is a contact flag you cannot get from tendons alone.

<figure>
  <img src="/images/heroes/musashi-joint-skin-2.png" alt="Fabrication steps for the biomimetic joint skin, from mold to mounted elbow" loading="lazy" />
  <figcaption>Mold, dermal gauges, chainmail, then the wrapped joint. Source: Miki et al.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/musashi-joint-skin-3.png" alt="Four frames of Musashi-W’s right arm moving through elbow poses in a lab" loading="lazy" />
  <figcaption>Data collection on the right arm. Source: Miki et al.</figcaption>
</figure>

Limits are in the paper: sensors are huge compared with real receptors, the set is quasi-static, silicone will drift, and they have not run fast motion.

## A Human's Take

I am glad someone is putting skin on the joint instead of another palm taxel array. Three degrees from a floppy elbow sleeve is not factory spec, but the disturbance split is the trick I would steal: if the cover screams and the tendons do not, something hit the joint. That is a useful bit for a robot that works next to people.

## Sources

- [arXiv:2608.23304 — biomimetic joint-covering skin on Musashi-W](https://arxiv.org/abs/2608.23304)
- [HTML paper with figures](https://arxiv.org/html/2608.23304v1)
- [YouTube — authors’ hardware video](https://www.youtube.com/watch?v=L9xU2wMkRRg)
