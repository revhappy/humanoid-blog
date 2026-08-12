---
title: "A Custom Gripper and Four Wrist Cameras Won WBCD’s T-Shirt Track"
description: "TermiTech’s RMC2 team loaded 25 shirts in ~23 seconds each at ICRA’s deformable-manipulation challenge."
pubDate: 2026-08-12
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/tcam-wbcd-tshirt.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**RMC2**, a TermiTech team out of Shenzhen, took first place in Track 4 of the 2026 What Bimanuals Can Do (WBCD) challenge with a fully autonomous T-shirt loader. Their technical report, posted to arXiv on August 11, says the dual-arm **ARX X5** cell loaded **25** shirts at about **23 seconds** per attempt and put **22** of them in the required smoothness band.

WBCD ran at ICRA 2026 in Vienna (June 1–5), with remote sites in Shanghai and Silicon Valley. Track 4 is a print-shop job: pick one shirt from a stack, drop it on a pallet, line up the collar, and flatten the print area.

<figure>
  <img src="/images/heroes/tcam-wbcd-tshirt.jpg" alt="Orange 3D-printed gripper with Velcro on the fingertip, viewed from below" loading="lazy" />
  <figcaption>Bottom-up view of the custom gripper, with hook-side Velcro on the fingertip. Source: RMC2 / arXiv:2608.10718.</figcaption>
</figure>

## Hardware first, then the policy

The paper’s argument is that hardware, cameras, and data should shrink the contact mess the policy has to learn. The 3D-printed gripper has three tricks:

- **Hard fingertips** instead of soft pads, so the top layer actually lifts
- **Hook-side Velcro** on one face to peel that layer open
- **Inward-angled jaws** that close tighter and hold fabric during the carry

They also taped the pallet’s rough wood edges, added a 3D-printed cover over protruding screws, and put high-contrast tape plus a patterned tablecloth under the white shirts so the cameras could see a hem.

<figure>
  <img src="/images/heroes/tcam-wbcd-tshirt-2.jpg" alt="Wrist assembly with an upper fisheye camera and a lower close-range RGB camera on the custom gripper" loading="lazy" />
  <figcaption>Each wrist carries a wide fisheye for context and a low RGB camera aimed at gripper-cloth contact. Source: RMC2 / arXiv:2608.10718.</figcaption>
</figure>

## Four views, mixed demos, 30-step chunks

Each arm has two wrist cameras: a 1920×1080 fisheye up top and a 320×240 RGB camera looking at the pinch. All four streams are resized to 224×224 before the policy. The lower pair is there so the model can see whether it grabbed one layer or two.

They mixed **600** portable UMI-style episodes with **500** real-robot episodes collected by dragging the ARX arms in force-compensation mode. After filtering, training used about **200** UMI and **400** real-robot episodes. UMI episodes only have the fisheye views. Competition inference used a four-view prompt.

**TCAM** (TermiBrain Causal Action Model) is their closed loop: run, tag why a shirt failed (missed edge, double-pick, slip, wrinkle, over-smoothing), stash that in a trajectory memory, then recollect and retrain. The policy emits **30-step** end-effector delta-pose chunks for both arms.

WBCD scoring pays +5 for pick-and-load, +2.5 for collar alignment, +2.5 for a smooth print area, and multiplies by **×4** for full autonomy. Double-picks and human hands in the loop cost −5. The team ran the policy without teleop during each cycle, but a human still aborted hopeless attempts to save time. Alignment-specific demos were thin; few attempts scored full alignment.

<figure>
  <img src="/images/heroes/tcam-wbcd-tshirt-3.jpg" alt="CAD rendering of the custom inward-angled gripper with Velcro face" loading="lazy" />
  <figcaption>CAD of the inward-angled gripper. Source: RMC2 / arXiv:2608.10718.</figcaption>
</figure>

## A Human's Take

I like that they treated the gripper as part of the learning problem. Velcro and a cheap camera aimed at the pinch are not glamorous, and they are why 22 of 25 shirts were flat enough to print. The leftover confession is honest: alignment data was short, and a person still decided when to quit. That is a win on a timed factory-ish task. It is not yet a cell that can babysit itself through a bad wrinkle.

## Sources

- [arXiv:2608.10718 — TCAM for Autonomous Deformable Manipulation](https://arxiv.org/abs/2608.10718)
- [arXiv HTML — full technical report with figures](https://arxiv.org/html/2608.10718v1)
- [WBCD 2026 — official competition site, Track 4](https://wbcdcompetition.github.io/)
- [WBCD Track 4 task rules on GitHub](https://github.com/wbcdcompetition/wbcd_tasks/tree/main/track-4-deformable-manipulation)
