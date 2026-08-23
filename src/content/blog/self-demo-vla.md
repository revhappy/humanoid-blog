---
title: "Illinois Fine-Tunes π0.5 With the Robot’s Own Failed Rollouts"
description: "UIUC’s self-demonstrated VLA method keeps instruction following on ALOHA: 90% cube pick success with 14 minutes of expert teleop."
pubDate: 2026-08-23
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/self-demo-vla.jpg"
readTime: "5 min read"
featured: false
draft: false
---

When you drop **π0.5** onto a new **ALOHA** pair, UIUC researchers found a familiar mess. Zero-shot, the policy walks toward the right object and then misses the grasp. Fine-tune on expert “pick up” demos and the grasp comes back, but the robot starts grabbing the wrong cube and forgets how to place.

Prachi Garg, Steve Xing, Prahit Yaugand, Saurabh Gupta, and Derek Hoiem posted a fix on arXiv August 19: roll out the *frozen* base policy on the target robot, keep those (often failed) trajectories, and train on them next to a small expert set. They call it self-supervised generative control. No access to π0.5’s original pretraining mix required.

<figure>
  <img src="/images/heroes/self-demo-vla.jpg" alt="Three-column comparison of zero-shot, expert-only, and expert plus self-supervised pick and place on an ALOHA table" loading="lazy" />
  <figcaption>Left: zero-shot reaches. Center: expert-only forgets place. Right: joint training. Source: Garg et al., arXiv:2608.19490.</figcaption>
</figure>

## Fourteen minutes of teleop

On the real ALOHA, expert data is **14 minutes** of teleop for “pick up.” Self-demos cover pick-and-place, including laundry into a basket. Table 2 in the paper (20 trials unless noted):

- Expert cubes: instruction-following **100%**, success **90%** (expert-only was 65% success)
- Novel objects: **55%** success
- Pick-and-place: post-grasp instruction-following **90%** and **55%** success. Expert-only was **0%** on both place metrics
- Laundry: **40%** partial success vs 10% for expert-only

A contact-rich caterpillar gear-insertion task, which the authors say sits outside π0.5’s pretraining, went from **30%** success with expert-only to **90%** with the mix, and hit **100%** pre-grasp instruction-following on unseen gear colors.

<figure>
  <img src="/images/heroes/self-demo-vla-2.jpg" alt="Method diagram showing frozen π0.5 rollouts mixed with human teleop into one training set" loading="lazy" />
  <figcaption>Self-demos are on-robot rollouts of the frozen teacher. Source: Garg et al., arXiv:2608.19490.</figcaption>
</figure>

## Sim check, then a held-out push

In RoboTwin they first mid-train on 10 planner tasks (**90.8%**). Fine-tune on new stacking with expert data only, and old-task success falls to **16.6%**. Add self-demos of the old tasks and it recovers to **70.6%**, while new-task success rises from **93%** to **98%**.

The mean part is Table 7. They test **“push objects,”** a skill in neither fine-tune mix. Expert-on-everything pushes on **10%** of rollouts and often picks instead. The self-demo policy pushes on **70%** and succeeds **60%**. Instruction-following is tied at **85%**. Extra expert data on every trained task overwrote the prior. Failed self-rollouts left it intact.

The authors filter unsafe self-demos by hand. They also note a stop-timing bug: because neither dataset shows the scene *after* a successful place, the policy sometimes hovers and repeats.

## A Human's Take

Training on failures sounds sloppy until you remember the alternative is re-collecting every pretrained skill on your specific cameras. Fourteen minutes of teleop plus the robot’s own bad habits is a practical recipe. I would not ship a policy that does not know when to stop placing. I would ship the idea.

## Sources

- [arXiv:2608.19490 — Fine-Tuning VLAs with Self-Demonstrated Generative Control](https://arxiv.org/abs/2608.19490)
- [Project page — self-supervised-control.pages.dev](https://self-supervised-control.pages.dev/)
