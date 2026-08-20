---
title: "RoboEdit Turns Human Hand Videos Into 14 Million Robot Frames"
description: "A UCLA-linked team edits human manipulation clips into seven robot hands, then drives a real Franka from the decoded 3D states."
pubDate: 2026-08-20
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/roboedit-human-to-robot-video.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Human videos are cheap. Robot hand videos are not. **RoboEdit** tries to edit one into the other without throwing away the table, the camera, or the object.

The paper (arXiv:2608.18948) is a three-part suite: **RoboEdit-ADC** builds paired clips automatically, **RoboEdit-14M** is the resulting dataset, and **RoboEdit-Trans** is the editor that paints a robot hand into the human footage and decodes 3D joint states from the result.

<figure>
  <img src="/images/heroes/roboedit-human-to-robot-video.jpg" alt="Grid of everyday manipulation clips with robot hands composited over human scenes" loading="lazy" />
  <figcaption>RoboEdit-14M spans seven embodiments in real and synthetic scenes. Source: Guo et al., arXiv:2608.18948.</figcaption>
</figure>

## The dataset

ADC reconstructs a 3D hand-object interaction from RGB (HaMeR, SAM 2, TRELLIS, FoundationPose, VGGT), retargets it with a physics-guided objective, inpaints the human, and composites the rendered robot.

The release is **174,547** aligned pairs, more than **14.1 million** frames, from **24,197** human clips. Seven embodiments: **Inspire**, **XHand**, **Ability**, **SCHUNK SVH**, **Allegro**, **Unitree Dex3**, and a **Franka Panda** gripper. Sources include DexYCB, HOT3D, H2O, GigaHands, and TACO. **145,459** pairs stay in real scenes; **29,088** are synthetic composites.

<figure>
  <img src="/images/heroes/roboedit-human-to-robot-video-2.jpg" alt="Qualitative comparison of RoboEdit-Trans against VACE and other video editors" loading="lazy" />
  <figcaption>Human clip, robot target, then RoboEdit versus other editors. Source: Guo et al., arXiv:2608.18948.</figcaption>
</figure>

## The editor, then the arm

RoboEdit-Trans fine-tunes a NovaEdit / Wan2.1-VACE-1.3B backbone, then adds LoRA and residual adapters per robot. A 3D Robot-State Decoder reads the edited video and returns camera-space hand states.

On a 300-case editing benchmark the authors report state-of-the-art reconstruction and local-edit scores against VACE, UniVideo, and several other video editors. Ablations show LoRA plus the residual adapter together beat either alone.

Those decoded trajectories are not just for pretty pictures. A residual PPO tracker in Genesis hits **71%** trajectory-reproduction success with the Panda gripper and **62%** with XHand across 512 randomized sim environments. The same controller then runs on a real **7-DoF Franka Panda** on YCB objects.

<figure>
  <img src="/images/heroes/roboedit-human-to-robot-video-3.jpg" alt="Real Franka Panda executing YCB pick-and-place from decoded 3D hand trajectories" loading="lazy" />
  <figcaption>Real-robot rollouts from states decoded out of edited video. Source: Guo et al., arXiv:2608.18948.</figcaption>
</figure>

## A Human's Take

Editing the human out and the robot in is a cleaner idea than hoping a VLA “just understands” YouTube. Fourteen million paired frames across seven hands is a serious pile of supervision.

The real Franka clips are still tabletop YCB. That is the right first test. I will care more when the edited hand matches contact timing on a tool the original person actually used.

## Sources

- [arXiv:2608.18948 — RoboEdit](https://arxiv.org/abs/2608.18948)
- [arXiv HTML — paper and figures](https://arxiv.org/html/2608.18948v1)
