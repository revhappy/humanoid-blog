---
title: "UPenn Turns Generated Contact Sound Into Force on a Franka"
description: "Dreaming the Sound of Contact maps Seedance audio loudness to force, lifting zero-shot success from 8/40 to 36/40."
pubDate: 2026-09-19
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/dreaming-contact-sound.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Video generators can now invent a robot wiping a board. Pull the gripper path out of those frames and you still do not know how hard to press. **Guanhua Ji**, **Tianyu Li**, and colleagues at the University of Pennsylvania’s **GRASP Lab** add the missing channel: the **sound** the generator makes when the tool hits.

[arXiv:2609.19137](https://arxiv.org/abs/2609.19137) landed **16 September 2026** (v2 **17 September**). The project page is [dreamingcontactsound.github.io](https://dreamingcontactsound.github.io/). They run the result on a **Franka Panda**.

<figure>
  <img src="/images/heroes/dreaming-contact-sound.jpg" alt="Diagram of generated video and audio driving a yellow gripper peeling a carrot on a Franka" loading="lazy" />
  <figcaption>Generated video for motion, generated audio for force. Source: Ji, Li et al., arXiv:2609.19137.</figcaption>
</figure>

## Loudness in, newtons out

**Seedance 2.0** gets one RGB frame and a prompt that asks for a still camera and contact sound, not room noise. **MolmoPoint**, **SAM 2**, and **TAPIP3D** recover the gripper trajectory. **SAM-Audio** isolates contact. Loudness in LUFS is mapped into a bounded force profile with **Fmax = 15 N** (Franka’s default collision threshold is **20 N**) and **Fmin = 0.25 Fmax**. A 1 kHz impedance controller (**k = 2000 N/m**) tracks pose; a 50 Hz regulator tracks force by moving a virtual target.

They do not claim the generated clip will sound like the real robot. Loudness is a relative shape, not a microphone on the wrist.

## Four tasks, one kinematic baseline that mostly misses

Ten generated videos per task, same trajectories with and without force:

| Task | Kinematic only | Force-aware |
| --- | ---: | ---: |
| Whiteboard wipe | 0/10 | 10/10 |
| Carrot peel | 5/10 | 9/10 |
| Box stack | 3/10 | 9/10 |
| Lamp button | 0/10 | 8/10 |
| **Total** | **8/40** | **36/40** |

Kinematic failures are the obvious ones: the eraser flies a few millimeters above the board, or the peeler slams the carrot. Chocolate-box stacking needed extra screening: **10 of 20** generated videos used a side grasp their parallel gripper cannot do.

On wipe and peel, a constant **15 N** step at first contact overshoots toward the 20 N stop (**2/10** wipe success). The audio-shaped profile ramps in. A hammer-strike prompt test kept the requested 5 N vs 20 N loudness order in **18/20** clips. That tests the generator’s following of a prompt, not a calibrated force sensor.

<figure>
  <img src="/images/heroes/dreaming-contact-sound-2.jpg" alt="Grid of generated wiping frames versus real Franka wiping, peeling, lamp pressing, and box stacking" loading="lazy" />
  <figcaption>Generated wiping (blue) versus real force-aware rollouts. Source: Ji, Li et al., arXiv:2609.19137.</figcaption>
</figure>

## Then they trained on the rollouts

Fifty successful force-aware demos per task trained a **Diffusion Policy**. At test time there is **no** force regulator; contact comes from how deep the policy learned to push. Without force input: **29/40**. With measured force as an extra observation: **34/40**. Peeling is the odd one out: the force-input policy presses harder than the demos (peak **10.20 N** vs **6.76 N**) and goes **10/10**.

The paper’s own limits: SAM-Audio can keep the wrong sounds, generation is slow enough that the scene must sit still, and a tuned constant force can look similar on a long wipe.

## A Human's Take

Using a made-up scraping noise as a force schedule is a weird idea that happens to beat “just replay the pixels.” The 8/40 to 36/40 gap is the result. I would not ship a peeler whose first contact is a 15 N step. I also would not pretend LUFS is a load cell. The useful product here is a data engine that labels force without a kinesthetic teaching session, as long as you keep a 20 N watchdog on the real arm.

## Sources

- [arXiv:2609.19137 — Dreaming the Sound of Contact](https://arxiv.org/abs/2609.19137)
- [Project page — videos, pipeline, and dataset notes](https://dreamingcontactsound.github.io/)
