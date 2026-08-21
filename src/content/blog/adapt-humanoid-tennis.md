---
title: "AdaPT Teaches G1 and Dobot Atom Pro Tennis Styles From Broadcast Tape"
description: "A new paper trains humanoid tennis serve and rally styles from Nadal, Federer, and Djokovic video, then serves in the wild on a 1.7 m Atom."
pubDate: 2026-08-21
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/adapt-humanoid-tennis.jpg"
readTime: "5 min read"
featured: false
draft: false
---

A team from **Noitom Robotics**, **Shanghai AI Lab**, **Shanghai Jiao Tong University**, and **Dobot Robotics** posted **AdaPT**, a planner-plus-tracker stack that copies professional tennis styles onto humanoids. The paper went up on arXiv August 20. The project site has the footage.

The robots are a **Unitree G1** in a motion-capture gym and a full-size **Dobot Atom** at about **1.7 m**, which they take outdoors to serve without mocap.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/mEF-YTn-ksU"
    title="AdaPT humanoid tennis demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">AdaPT rally and serve clips on G1 and Atom. Source: project video / YouTube.</p>

## Styles from TV, not just mocap

AdaPT learns serve and rally styles from broadcast clips of **Rafael Nadal**, **Roger Federer**, and **Novak Djokovic**, plus a mocap athlete the authors call Mr. Black. The project page totals **21.5 hours** of motion across **six** athlete styles and **seven** stroke and serve types.

The paper’s table of video data is even larger than that highlight reel: Nadal **267 minutes** (5,664 clips), Federer **179 minutes**, Djokovic **189 minutes**, Mr. Black mocap **219 minutes**. Clips run about two seconds and cover a full stroke plus footwork.

The stack is split on purpose. A high-level planner emits stylistic kinematics. A low-level tracker tries to execute them. In simulation that looks clean. On metal, tracking slips, the planner compounds the error, and noisy ball perception makes it worse. AdaPT’s fix is to train the tracker on **randomized execution speeds**, then let the planner pick a speed so it does not outrun the body.

<figure>
  <img src="/images/heroes/adapt-humanoid-tennis.jpg" alt="Humanoid in tennis kit holding a racket" loading="lazy" />
  <figcaption>Project-page still of a dressed humanoid in a tennis stance. Source: AdaPT project site.</figcaption>
</figure>

## What they measured on G1

Lab work ran in an about **20 m × 8 m** mocap volume with **35** Noitom MCC-400 cameras. Court size follows Tennis 10s, roughly **18 × 6.5 m**, which the authors say matches G1’s **1.35 m** height. The racket is a **23-inch** junior frame, wrist-mounted at a **25-degree** offset.

Rally tests used an Acemate ball machine, **25** repeats per region, one ball every **4.5 s**. On the real G1, AdaPT’s hit rates versus a Vid2Player3D baseline were:

- **Nadal style**: 91.5% vs 82.6%  
- **Federer**: 96.3% vs 81.5%  
- **Djokovic**: 92.3% vs 83.2%  

Net clearance also rose. Ablations that drop either the adaptive tracker or the adaptive planner lose those gains.

For serving they used a Synria Gloria-D parallel gripper, **15** trials per model. A Unitree Dex-3 hand was too heavy for G1 to balance under the professional serve motions, so that hand only ran simpler amateur motions.

<figure>
  <img src="/images/heroes/adapt-humanoid-tennis-3.jpg" alt="Indoor tennis court with G1, ball machines, and mocap" loading="lazy" />
  <figcaption>G1 rally setup with Acemate feeders and mocap. Source: arXiv:2608.20087.</figcaption>
</figure>

## Out of the cage

The same policies go onto Atom for in-the-wild serving. Balls are found with a **YOLO**-based stereo detector. Robot pose comes from **HTC VIVE Ultimate Trackers** instead of the 35-camera cage. The paper is frank that post-bounce trajectory noise is the rally killer, and that a standing policy has to take over when no ball is in play so the motion generator does not drift.

Code is on GitHub under noitom-robotics/AdaPT.

## A Human's Take

Copying Federer’s swing is catnip. The useful bit is the speed adapter: the planner has to know how late the body is. I want the Atom serve clip without the mocap hall more than I want another FID table. If the 1.7 m machine can toss, see the ball, and hit a box on a real court, that is a sports robot. If it only works while 35 cameras babysit the G1, it is still a paper.

## Sources

- [arXiv:2608.20087 — Towards Professional Tennis Styles for Humanoid Robots](https://arxiv.org/abs/2608.20087)
- [AdaPT project site](https://humanoidtennis.github.io/AdaPT/)
- [YouTube — AdaPT demo](https://www.youtube.com/watch?v=mEF-YTn-ksU)
- [arXiv HTML — paper figures and tables](https://arxiv.org/html/2608.20087)
