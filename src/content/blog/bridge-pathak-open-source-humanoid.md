---
title: "CMU’s Bridge Is an 88 cm Open-Source Humanoid Co-Designed With Its Controller"
description: "Pathak, Gupta, and collaborators open-source Bridge: 21 DoF, about $1,500, trained by iterating morphology against human motion tracking."
pubDate: 2026-09-04
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/bridge-pathak-teaser.png"
readTime: "4 min read"
featured: false
draft: false
---

Most small humanoids get a body first and a walking policy later. **Jianren Wang**, **Abhinav Gupta**, **Deepak Pathak**, and collaborators at Carnegie Mellon, Huazhong University of Science and Technology, and JoyIn AI flip that order. Their paper, posted **3 September** on arXiv, treats joint layout and control as one loop, then ships the result as **Bridge**, an open-source platform they say stands **88 cm** tall.

The teaser figure in the paper lists **13 kg**. A comparison table in the same PDF lists **12.5 kg**, **21** active degrees of freedom, **6 TFLOPS** of onboard compute, open code, open design, and a **$1,500** price. I am keeping both mass numbers because the authors printed both.

<figure>
  <img src="/images/heroes/bridge-pathak-teaser.png" alt="Bridge humanoid co-design diagram above a backflip sequence on the real robot" loading="lazy" />
  <figcaption>Co-design loop on top; a real Bridge backflip on the bottom. Source: Wang et al., arXiv:2609.03497.</figcaption>
</figure>

## Design the body for the motion

The team starts from an SMPL human model, then compresses the waist until the robot stays under **90 cm** with room for a battery. Kinematic screening keeps a roll-plus-yaw waist; closed-loop tracking then picks a **one-DoF yaw** waist as the better dynamic match.

Actuators are not an afterthought. The loop starts with the smallest motor that fits, trains a tracker, and only upgrades a joint when torque or speed saturates and relaxing the limit actually saves the motion. The selected stack uses **10 N·m**-class motors in the arms, **55 N·m**-class motors at hip pitch and knee, and **25 N·m**-class motors elsewhere, including the parallel ankles.

They score a morphology with a human-likeness metric that splits kinematic retargeting error and dynamic tracking error **50/50**. On that score, Bridge beats **Bumi**, **Booster K1**, and **ToddlerBot**. Body-part scale versus SMPL is closest on Bridge (**1.021** mean) versus ToddlerBot **1.171**, K1 **1.344**, and Bumi **1.376**.

## What it does on the floor

In MuJoCo, SONIC tracking policies on a merged LaFAN1 / bones_seed set give Bridge a **94.83%** success rate and the lowest joint, velocity, root, and keypoint errors of the four platforms. Split by category, the paper reports **95.00%** on balance, **94.50%** on highly dynamic motion, and **94.99%** on daily motion. The biggest gap is the dynamic set, **4.70** points over K1.

<figure>
  <img src="/images/heroes/bridge-pathak-keyframes.png" alt="Grid of Bridge doing balance, Charleston dance, a backflip, and VR teleoperation" loading="lazy" />
  <figcaption>Hardware sequences: balance, Charleston, backflip, teleop. Source: Wang et al., arXiv:2609.03497.</figcaption>
</figure>

Real-robot stills show single-leg balance, a Charleston, a backflip, and a VR operator driving the small body around boxes. A subjective comparison figure in the paper puts Bridge next to Bumi, K1, and ToddlerBot on toe-touch, single-leg stand, and a low turn.

<figure>
  <img src="/images/heroes/bridge-pathak-compare.png" alt="Bridge compared with other small humanoids on toe-touch, single-leg stand, and turning motions" loading="lazy" />
  <figcaption>Subjective pose comparison across platforms. Source: Wang et al., arXiv:2609.03497.</figcaption>
</figure>

Videos and files sit on the [project site](https://sites.google.com/view/bridgerobot).

The authors flag two limits: rotary motors only, and a small workspace. Tendon routing and a larger body are future work.

## A Human's Take

I like a kit that costs less than a used K1 and comes with the policy that made the joints worth stacking. The useful claim is not “we open-sourced a humanoid.” It is that they threw out waist pitch because the tracker said so, then put the expensive motors only where saturation showed up. If the CAD and the SONIC checkpoint actually land, this is how you get more labs doing backflips instead of another 3D-printed torso with a borrowed walk.

## Sources

- [arXiv — BRIDGE: An Open-Source Humanoid Platform via Morphology-Control Co-Design for Physical AI](https://arxiv.org/abs/2609.03497)
- [arXiv HTML — full paper with figures](https://arxiv.org/html/2609.03497v1)
- [Project site — videos and open-source materials](https://sites.google.com/view/bridgerobot)
