---
title: "ProxiDex Reads Hand-to-Object Distance Instead of Skin"
description: "A CoRL 2026 policy reconstructs proximity from point clouds, then twists caps and pinches toys on a Realman arm with a Wuji hand."
pubDate: 2026-09-16
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/proxidex.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Vision occludes the exact moment a fingertip kisses an object. Real tactile skins are a calibration headache. **Yushan Bai**, **Boyu Zheng**, and colleagues at the Chinese Academy of Sciences treat **geometric proximity** as the interaction state instead. **ProxiDex**, accepted at CoRL 2026, reconstructs a hand–object point cloud, turns distances into region-level cues, and uses those cues to steer a diffusion policy.

The hardware is a **Realman RM75B** 7-DoF arm, a RealSense L515, a **CasBot-P1L** (6 active DoF) for tabletop work, and a **20-DoF Wuji Hand V1** for contact-rich tasks.

<figure>
  <img src="/images/heroes/proxidex.jpg" alt="Composite of VR teleoperation with proximity heatmaps and real-robot pick, pinch, and tool tasks" loading="lazy" />
  <figcaption>VR teleop on the left, real pick/pinch/sweep and unseen objects on the right. Source: Bai et al., arXiv:2609.16586, Figure 1.</figcaption>
</figure>

## Distance as a stand-in for touch

Demonstrations come from VR arm-hand teleoperation. Grounded-SAM and SAM 3D rebuild the object from one image; FoundationPose++ tracks it. Hand and object surface points land in the robot base frame. Local distances collapse into a proximity vector per hand region. Palm response also labels the trajectory as approach versus contact.

A VAE compresses those proximity vectors. A DiT forward model predicts future observation latents from actions. An inverse module reads proximity changes out of latent differences. During policy learning the global point-cloud feature stays visible, while proximity tokens are causally masked and gated so they matter more once the hand is close.

If live vision disagrees with the forward model past a threshold, the system switches to what the paper calls **dynamics-dream mode** and rolls latents forward until the cameras make sense again. On the authors’ machine, pose tracking runs about **10 Hz**, the policy about **28 Hz**, and the forward model about **20 Hz**.

## Caps, clutter, and a banana pinch

In simulation, ten tasks across Adroit, DexArt, and custom Isaac Lab scenes, ProxiDex’s average success is **83.9%**. That is **12.1** points over DP3, **9.7** over ManiFlow, **7.0** over AFRO, and **2.9** over CordViP, which already uses interaction point clouds.

On the real arm, 50 demonstrations per tabletop task, success counts from the paper’s Table 2:

- **In distribution:** pick 19/20, pinch 15/20, sweep 18/20
- **Unseen objects:** 32/40, 24/40, 29/40
- **Perturbation:** 22/30, 23/30, 22/30
- **Contact-rich (Wuji Hand V1):** twist cap **10/20**, flip cap **11/20**
- **Overall average: 72.6%**, versus 62.9% for CordViP and 40.0% for DP3

<figure>
  <img src="/images/heroes/proxidex-3.jpg" alt="Wuji Hand V1 twisting a bottle cap and flipping a cap onto a red cube, with interaction point clouds overlaid" loading="lazy" />
  <figcaption>Twist cap and flip cap on the 20-DoF Wuji Hand V1. Source: arXiv:2609.16586, Figure 8.</figcaption>
</figure>

A 2×4 tactile array on the P1L fingertips is the sanity check. Proximity does not replace force. It does track how the hand-object gap shrinks before contact, which is enough for several of these tasks to stay competitive with the instrumented skin.

The authors list the failure modes themselves: the method needs decent object reconstruction, dream-mode drifts if occlusion lasts, and geometry still cannot measure real contact force.

## A Human's Take

I’m so here for a policy that paints the gap between finger and bottle instead of waiting on a new tactile bus. The Wuji cap-twist stills are the receipt: you can see the reconstructed cloud hug the bottle while the hand actually turns it. Just don’t call it touch. It is a well-instrumented guess about distance, and it still only flips a cap 11 times in 20. That’s honest enough to keep watching.

## Sources

- [Bai et al. — ProxiDex (arXiv:2609.16586)](https://arxiv.org/abs/2609.16586)
- [ProxiDex project page](https://proxidex.github.io/)
- [Paper HTML with figures](https://arxiv.org/html/2609.16586)
