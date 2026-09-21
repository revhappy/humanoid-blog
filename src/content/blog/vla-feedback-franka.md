---
title: "VLA-Feedback Corrects the Action Before the Chunk Finishes"
description: "VLA-Feedback fixes diffusion actions with a new camera frame. On a Franka, success rose from 51% to 73%."
pubDate: 2026-09-21
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/vla-feedback.jpg"
readTime: "3 min read"
featured: false
draft: false
---

Diffusion policies are good at writing a short string of moves, then bad at noticing the cup has already slid. A paper dated September 17, 2026, keeps the slow vision-language plan and spends the last denoising step on a fresh camera frame. Yiheng Ji and Xingru Zhou list the University of Texas at Austin. Mingyo Seo lists the University of Central Florida. Luis Sentis is a coauthor. They call it VLA-Feedback. The arXiv comment marks the work for the 10th Conference on Robot Learning (CoRL 2026) in Austin.

On static LIBERO tasks it matched GR00T. On dynamic simulation tasks, average success went from 27.5 percent to 85.0 percent. On a real Franka Emika Panda, average success went from 51 percent to 73 percent.

![A robot gripper picking bread, dropping a lemon into a moving cup, and catching a rolling can, beside a bar chart](/images/heroes/vla-feedback.jpg)

The usual pattern is to denoise a whole action chunk, then run it open-loop. If the object moves during that chunk, the arm is committed to a plan that is already stale. VLA-Feedback leaves the final denoising step as a small feedback interface. Each action can be corrected with the latest observation before it is sent, without rerunning the full vision-language diffusion model.

The real-robot set is three tasks, same start ranges and success rules for GR00T and for VLA-Feedback. Pick up bread: grasp and lift a stationary piece. Catch the rolling can: the can is pushed from the table edge at about 5 to 10 centimeters per second and then rolls free; success is grasp and lift. Drop the lemonade into the cup: the cup is pulled by a string at about the same speed; success is getting the lemonade in.

<figure>
  <img src="/images/heroes/vla-feedback-3.jpg" alt="Simulation frames of a robot arm closing a drawer and catching moving objects" loading="lazy" />
  <figcaption>Simulation sequences from the VLA-Feedback paper, separate from the Franka hardware trials. Source: arXiv:2609.21022.</figcaption>
</figure>

The project page shows the same idea on a toy that will not sit still: an open-loop chunk misses, and the feedback path updates while the toy moves. That page is a demo reel, not the trial log. The numbers above are from the paper.

## A Human's Take

Open-loop chunks are fine when the world waits. A cup on a string does not wait, and neither does a can that is already rolling. Spending the last denoising step on a new frame is a smaller change than retraining the whole model, which is why I like it.

Fifty-one to seventy-three percent on three Franka tasks is a lab delta, not a shift. I want the same trick on a hand that has already closed around the wrong object, not only on a gripper that still has time to re-aim.

## Sources

- [arXiv — Catch Me If You Can: Real-Time Feedback Denoising for Responsive VLAs](https://arxiv.org/abs/2609.21022)
- [arXiv HTML — VLA-Feedback](https://arxiv.org/html/2609.21022v1)
- [VLA-Feedback project page](https://vla-feedback.github.io/)
