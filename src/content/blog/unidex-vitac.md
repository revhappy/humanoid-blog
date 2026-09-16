---
title: "UniDex-ViTac Turns 50 Human Videos Into a Grasping Policy"
description: "KIST trains a visuo-tactile ACT policy in simulation from DexYCB clips, then lifts seen and unseen objects on a Franka with no robot demos."
pubDate: 2026-09-16
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/unidex-vitac.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Human videos show how people pick things up. They do not give a robot joint targets or fingertip contact. **Hyesung Lee**, **Si-Hwan Heo**, and **Sungwook Yang** at KIST’s Center for Humanoid Research posted **UniDex-ViTac** on 15 September: annotate the videos, adapt them in simulation, then deploy a single policy that never saw a real-robot demonstration.

The hardware is a **Franka Emika Panda**, a **16-DoF** hand, barometric fingertip sensors, and an Intel RealSense L515.

<figure>
  <img src="/images/heroes/unidex-vitac.jpg" alt="Photo grid of a Franka arm and dexterous hand lifting YCB objects including a mustard bottle, power drill, and Pringles can" loading="lazy" />
  <figcaption>Seen objects on top, unseen on the bottom. Source: Lee, Heo, and Yang, arXiv:2609.16504, Figure 7.</figcaption>
</figure>

## Specialists first, then one generalist

They start from **DexYCB**. Five annotated grasp-and-lift clips each for ten objects — mustard bottle, power drill, bleach cleanser, mug, and six more — for **50** human demonstrations. MANO hands and object poses become a wrist-plus-four-fingertip reference.

Each object gets its own residual PPO specialist in Isaac Lab. The actor adds a bounded correction: **±0.1 m** on wrist translation, **±40°** on wrist orientation, **±0.05 m** on fingertip offsets. A trial counts as success if the robot lifts the object **20 cm** and holds it **3 s**. After five extra verification rollouts, they keep the trajectory. The offline set is **10,000** sequences, 1,000 per object.

Those rollouts train one ACT generalist. The observation is a 512-point cloud (508 camera points plus four forward-kinematics fingertips), 42-D proprioception, and four binary contact bits. Contact labels the fingertip points and also arrives as its own token. The transformer predicts a **30-step** chunk of wrist pose and fingertip targets. Arm IK and analytical hand IK track them at a nominal **20 Hz**.

<figure>
  <img src="/images/heroes/unidex-vitac-2.jpg" alt="Pipeline diagram from human video reconstruction through residual RL specialists to an ACT visuo-tactile generalist" loading="lazy" />
  <figcaption>Video in, residual specialists, then one generalist. Source: arXiv:2609.16504, Figure 1.</figcaption>
</figure>

## Contact bits actually move the needle

In simulation, 500 evaluation trials per object, the specialists sit at **94.3%** macro success. The sensory generalist lands at **68.3%**. Point-cloud-only ACT is **55.5%**. Adding the four contact bits as a token *or* as point labels barely helps on their own (**56.4%** and **56.8%**). Using both paths is what produces the full **12.8**-point jump.

On the bench, ten trials per object per policy, no extra fine-tuning:

- **Seen** (six objects): **42/60** with contact versus **33/60** without (**70.0%** vs **55.0%**)
- **Unseen** (five objects): **31/50** versus **27/50** (**62.0%** vs **54.0%**)
- **Overall:** **73/110** (**66.4%**) versus **60/110** (**54.5%**)

Pudding box, potted meat, and tomato soup can pick up the most from contact. Bleach cleanser and a plastic wine cup each lose one trial. A blue mug is still ugly: 2/10 with contact, 0/10 without.

<figure>
  <img src="/images/heroes/unidex-vitac-3.jpg" alt="Simulated fingertip pad versus a real 15-element tactile array, plus matching contact visualizations" loading="lazy" />
  <figcaption>Four bits per hand: 1.0 N in sim, calibrated barometers on the real pads. Source: arXiv:2609.16504, Figure 4.</figcaption>
</figure>

The real sensors are calibrated at a constant **1.0 N** for 10 s. Simulation uses the same 1.0 N pad-force threshold. The paper is blunt that the simulated pad and the physical sensing region do not match spatially.

## A Human's Take

Fifty clips in, a policy out, and no teleop on the Franka is the part that matters. The contact story is narrower than the name: four bits, no force magnitude, and a sim-to-real mismatch the authors already flag. I’d still take a 12-point lift on cans and boxes over another RGB-only ACT. Next receipt is a skill that is not just grasp-and-lift, and a mug that does not look like it wandered in from a different paper.

## Sources

- [Lee, Heo, Yang — UniDex-ViTac (arXiv:2609.16504)](https://arxiv.org/abs/2609.16504)
- [UniDex-ViTac project page](https://unidex-vitac.github.io/)
- [Paper HTML with figures](https://arxiv.org/html/2609.16504)
