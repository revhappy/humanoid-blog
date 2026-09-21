---
title: "ForeTac-VLA Guesses the Next Touch Before the Gripper Commits"
description: "A Texas A&M model forecasts tactile frames and reaches 95% on peg, chip, cap, and wiping tasks."
pubDate: 2026-09-21
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/foretac-vla.jpg"
readTime: "3 min read"
featured: false
draft: false
---

ForeTac-VLA tries to feel a contact before it finishes happening. Zhengyu Tao, Xin Li, and Xin Wang at Texas A&M train a vision-language-action model that also forecasts the next tactile images, then uses those forecasts when it picks the motion. The paper was submitted to arXiv on September 17, 2026. Videos are on the project page.

The hardware in their setup figure is a UR7e with a tactile parallel gripper, a wrist camera, and a fixed external camera. The four tasks are peg insertion, moving a chip onto a plate, unscrewing a bottle cap, and wiping a board with an eraser. Each is the kind of job where the picture can look fine while the part is jammed, cracked, or slipping.

<figure>
  <img src="/images/heroes/foretac-vla-2.png" alt="Photo grid of a robot arm inserting a peg, moving a chip, unscrewing a cap, and wiping a board" loading="lazy" />
  <figcaption>The four real tasks used to test ForeTac-VLA. Source: arXiv:2609.20980.</figcaption>
</figure>

On those tasks, 20 trials each, the paper reports a 95% average success rate. A fine-tuned vision-language-action model without the tactile forecast sits at 58.75%. Two tactile baselines, one using FiLM fusion and one using concat-and-gating, land at 71.25% and 72.5%. ForeTac-VLA is ahead of the fine-tuned model by 36.25 percentage points, and ahead of those tactile baselines by more than 22 points. The authors say it is the best of the set on every task.

The forecast looks a short distance ahead. Their figure compares predicted and measured tactile change at about 83, 167, 250, and 333 milliseconds. Training starts on ground-truth future touch and later switches to the model's own predictions, so early bad guesses do not run the policy off the rails. They also retest in dim light and with extra junk on the table, and say the model still holds up. The failure cases they show for the baselines are the ones you would expect: a peg that misses the hole, a broken chip, a cap that slips, a wipe that grabs wrong.

## A Human's Take

Vision policies fail in the half-second when the fingers are already on the part and the camera still thinks everything is aligned. Forecasting the tactile image is a concrete way to admit that. Ninety-five percent on twenty trials a task is a lab number, not a shift, but the gap versus the vision-only fine-tune is large enough that I believe the touch stream is doing work.

I want the same test with the lights already bad and the chip already fragile as the main table, not the appendix. If the forecast still saves the grasp there, this is a real knob on contact-rich arms. If it only helps on a clean bench, it is another fusion paper.

## Sources

- [arXiv — ForeTac-VLA abstract](https://arxiv.org/abs/2609.20980)
- [arXiv HTML — ForeTac-VLA figures and results](https://arxiv.org/html/2609.20980v1)
- [ForeTac-VLA project page](https://foretac-vla.github.io/)
