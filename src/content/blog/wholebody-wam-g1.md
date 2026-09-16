---
title: "WholeBodyWAM Puts a Tabletop World Model on G1’s Legs"
description: "A G1 with BrainCo hands hits 91.9% in sim and 81.3% on eight real loco-manipulation tasks by grounding a pre-trained world-action model."
pubDate: 2026-09-16
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/wholebody-wam-3.jpg"
readTime: "5 min read"
featured: false
draft: false
---

World-action models already know how to push a mug around a table. Getting that prior onto a walking humanoid is messier: the legs, waist, and whole-body controller all speak different command languages. **Zhuo Li**, **Yiming Yao**, **Jim Tan**, **Mengjie Jing**, **Zhipeng Dong**, and **Fei Chen** posted **WholeBodyWAM** on 15 September as a way to keep the tabletop brain and teach it when the body has to help.

The real-robot tests run on a **Unitree G1** with two **BrainCo Revo 2** hands, a head camera, and two wrist RealSense D435i units.

<figure>
  <img src="/images/heroes/wholebody-wam-3.jpg" alt="Unitree G1 humanoid pushing a serving cart toward a person on a sofa" loading="lazy" />
  <figcaption>CartServe: push the cart, pick a snack, set it on the side table. Source: WholeBodyWAM project page.</figcaption>
</figure>

## Keep the hands, add a whole-body stream

The model starts from a pre-trained **14B** world-action backbone. A shared diffusion transformer jointly predicts future video, arm-and-finger actions, and a 56-dimensional **Unified Whole-Body Controller** vector: 46 shared slots for base velocity, heading, pelvis height, torso orientation, and lower-body joints, plus 10 residual slots for controller-specific flags.

**CASA** (coordination-aware self-attention) watches task-directional arm manipulability. When either arm’s capability along the task direction drops, a gate strengthens attention from the manipulation stream into the whole-body stream so the pelvis and steps can make up the difference.

The team collected **15,000** loco-manipulation demonstrations in the SIMPLE simulator with a PICO 4 Ultra headset, retargeted them to G1 with GMR, and post-trained with LoRA (rank 4) for 50,000 steps.

## Eight chores, not a dance reel

Simulation covers six SIMPLE tasks at three perturbation levels. WholeBodyWAM’s overall success is **91.9%**, against **86.4%** for Cosmos-3, **82.2%** for Ψ0, and **65.0%** for DreamZero. The bigger gaps sit on coordination-heavy PickBetweenTables and MoveBendPick.

Across three whole-body controllers — SONIC, AMO, and GEAR WBC — mean success is **89.2%** with a variance of **10.5** squared percentage points, versus **80.2%** and **35.0** for Cosmos-3. Each controller is fine-tuned separately.

<figure>
  <img src="/images/heroes/wholebody-wam-2.jpg" alt="Photo grid of a G1 humanoid doing towel place, basket carry, teapot pour, box transfer, cart serve, door entry, table cleanup, and plant watering" loading="lazy" />
  <figcaption>Eight real tasks, from towel bins to watering a plant. Source: arXiv:2609.16644, Figure 6.</figcaption>
</figure>

On hardware, 20 trials per task:

- **In distribution:** WholeBodyWAM **81.3%** mean success versus DreamZero **57.5%**. Table cleanup is close (90 vs 85). Basket carry, door entry, and box transfer jump 35 to 40 points.
- **Out of distribution** (moved objects, rewritten instructions): **68.8%** versus **40.0%**.

One OOD clip is the one I’ll remember. Shift the towel support **10 cm** farther away, miss the first grasp, then step forward, rotate the torso, and grab it. The authors say that recovery is not in the demonstrations.

<figure>
  <img src="/images/heroes/wholebody-wam-4.jpg" alt="G1 humanoid reaching for a door handle in an office hallway" loading="lazy" />
  <figcaption>DoorEntry: turn the handle, push, walk through. Source: WholeBodyWAM project page.</figcaption>
</figure>

Ablations drop overall sim success to **86.9%** without CASA, **84.7%** without the unified controller interface, and **80.8%** if manipulation and whole-body tokens are mashed into one stream.

Affiliations on the paper are CUHK, the University of Hong Kong, Peking University, and Φ-Institute.

## A Human's Take

I’m so here for a G1 that waters a plant and then opens a door without swapping the entire stack. The useful claim is not “we trained a humanoid world model from scratch.” It is that the tabletop prior can stay, if you give the legs a shared command language and a gate that says *now the body has to move*. Watch whether that 10 cm towel recovery shows up on someone else’s G1, and whether the 70% variance cut across WBCs holds when the downstream controller is not one of the three they fine-tuned.

## Sources

- [Li et al. — WholeBodyWAM (arXiv:2609.16644)](https://arxiv.org/abs/2609.16644)
- [WholeBodyWAM project page](https://wholebodywam.github.io/)
- [Paper HTML with figures](https://arxiv.org/html/2609.16644)
