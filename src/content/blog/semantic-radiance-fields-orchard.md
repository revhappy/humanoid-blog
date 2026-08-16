---
title: "A Radiance Field That Knows Which Blob Is the Apple"
description: "Leipzig and Polish Academy researchers lift SAM 3 labels into a NeRF so a robot can query apples, branches, and free space in a real orchard."
pubDate: 2026-08-16
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/semantic-radiance-fields.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Semantic Radiance Fields (SRF)** take a pile of posed photos, ask **SAM 3** what is an apple / branch / leaf, and bake those labels into a 3D radiance field. The paper (**arXiv:2608.13095**, 13 August 2026) is an oral at the **IJCAI 2026** Spatio-Temporal Reasoning and Learning workshop. Authors are at Leipzig University, the Systems Research Institute of the Polish Academy of Sciences, and Wrocław University of Economics.

The point is not a prettier NeRF. It is a simulator you can query: render a new camera, ask “is this point an apple?”, ask “is this point solid?”

<figure>
  <img src="/images/heroes/semantic-radiance-fields.jpg" alt="Orchard photo next to semantic render with red apples and green leaves" loading="lazy" />
  <figcaption>RGB render (left) and class blend (apple / branch / leaf). Source: arXiv:2608.13095.</figcaption>
</figure>

## What they actually built

They extend **FruitNeRF** from one semantic channel to **C** independent binary heads. A point can be apple *and* leaf. Semantics do not back-propagate into geometry, so the tree does not collapse onto class edges.

The example scene is FruitNeRF’s apple tree: **311** posed frames at **6000×4000**, downscaled **4×** for training. SAM 3 is prompted separately with “apple,” “branch,” and “leaf.” Training: **500,000** iterations, batch **4,096** rays, Adam, about **4 hours** on one **NVIDIA H100**.

A trained field exposes three calls:

- **Render(pose)** — RGB, semantic map, depth
- **Semantic(x)** — per-class probabilities at a 3D point
- **Occupancy(x)** — density for collisions

<figure>
  <img src="/images/heroes/semantic-radiance-fields-2.jpg" alt="Yellow quadruped with an arm in a blue grid simulator" loading="lazy" />
  <figcaption>Example agent the authors show for closing the loop with a physics engine. Source: arXiv:2608.13095.</figcaption>
</figure>

## The apple-reaching sketch

They outline (they do not run a full RL study) an orchard reaching task. **MuJoCo** would own rigid-body dynamics. The SRF would render the wrist camera and supply occupancy. Reward: get the gripper near a fruit. Collision with the **branch** class ends the episode.

The authors say the same lifting could move to **3D Gaussian Splatting** for faster rollouts, and that a time axis would make the field spatio-temporal.

<figure>
  <img src="/images/heroes/semantic-radiance-fields-3.jpg" alt="Close RGB novel-view render of the reconstructed apple tree" loading="lazy" />
  <figcaption>Radiance-field RGB of the reconstructed tree. Source: arXiv:2608.13095.</figcaption>
</figure>

## A Human's Take

Training a picker in a fake orchard is easy. Training it in a field you scanned last Tuesday is the trick. I like that they keep SAM 3 honest by not letting semantics rewrite the geometry. Now run the policy. A four-hour H100 bake is fine if the arm actually finds the fruit.

## Sources

- [arXiv:2608.13095 — Semantic Radiance Fields HTML](https://arxiv.org/html/2608.13095)
- [arXiv:2608.13095 — abstract](https://arxiv.org/abs/2608.13095)
