---
title: "Odyssey-3 Runs Arms, Humanoids, Cars, and Games From One World Model"
description: "Odyssey-3 is a foundation world model that controls robots and Flexion humanoids with tens of hours of extra data."
pubDate: 2026-09-15
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/odyssey-3.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Odyssey** released **Odyssey-3** on September 15, calling it a foundation world model that can control robot arms, power humanoids, drive cars, pilot drones, train other AIs, and play video games. Co-founders **Oliver Cameron** and **Jeff Hawke** describe it as an autoregressive diffusion transformer trained on a large set of visual observations, then adapted to each machine with a learned action decoder and a few hours of that machine’s own experience.

The public release is still “in the coming weeks,” according to the post. What they are showing now is the recipe: freeze the pretrained world model, attach a small policy, and teach it the controls.

<figure>
  <img src="/images/heroes/odyssey-3.jpg" alt="Silver dual robot arms packing groceries into a blue tote on a wooden table" loading="lazy" />
  <figcaption>Odyssey-3 packing a tote. Source: Odyssey introducing Odyssey-3.</figcaption>
</figure>

## Arms first, then a humanoid stack

On robot arms, Odyssey says tens of hours of demonstrations are enough for tasks such as pouring cereal, boxing candy bags, closing a screwbox, pouring coffee, and wiping a plate. The post claims recovery behaviors that were not in the demos: reorienting after a missed grasp, fetching an object that dropped in an odd pose.

The humanoid piece is a collaboration with **Flexion**. Odyssey says Flexion built control policies on Odyssey-3 with only tens of hours of humanoid teleoperation data. In their evaluations, those policies kept working under lighting changes that broke the VLA baselines they tested.

> "What excites us about Odyssey-3 is the opportunity to build on physical knowledge acquired far beyond a robot’s own demonstrations," said Nikita Rudin, co-founder and CEO of Flexion.

Humanoid prompts in the post include opening a blue container and taking out a cardboard box, moving a plate and stacking a mug, placing a box against a wooden corner, and opening a cardboard box.

<figure>
  <img src="/images/heroes/odyssey-3-6.jpg" alt="White dual robot arms over a red bin and colored cloths on a black backdrop" loading="lazy" />
  <figcaption>Dual-arm setup from the Odyssey-3 page. Source: Odyssey.</figcaption>
</figure>

## Same backbone, other bodies

The same frozen backbone shows up in other experiments:

- **Driving**: 20 hours of simulated driving data, then closed-loop driving on streets in India. Policies trained only in simulation traveled about **77%** as far between safety-driver interventions as policies trained on real footage, on busy roads.
- **Drones**: tens of hours of simulated flight, indoor obstacle avoidance from camera observations plus motion state and a language prompt.
- **Games**: policies trained on GTA V footage. Odyssey reports movement transferring into Red Dead Redemption 2 and motorcycle riding in Sleeping Dogs without extra training on those titles. One mobility policy trained on about **two hours** of GTA footage produced horseback movement in RDR2.

Odyssey is also evaluating the arm policies with **Poke & Wiggle** across bodies, viewpoints, and controls.

<figure>
  <img src="/images/heroes/odyssey-3-4.jpg" alt="Diagram of Odyssey-3 world model feeding an action decoder that controls a humanoid, arm, car, drone, and game character" loading="lazy" />
  <figcaption>One world model, five embodiment classes. Source: Odyssey.</figcaption>
</figure>

## A Human's Take

I like the honesty of “tens of hours,” not “zero-shot magic.” If a world model really lets Flexion keep a humanoid working when the lights change, that is a useful kind of transfer. I still want to see the failure cases: how often the decoder dumps the mug, and whether India-road driving at 77% of the real-data baseline is a win or a warning. Public weights in a few weeks will tell us if this is a lab reel or something other teams can actually attach an action head to.

## Sources

- [Odyssey — Introducing Odyssey-3](https://odyssey.systems/introducing-odyssey-3)
- [Odyssey — homepage](https://odyssey.systems/)
