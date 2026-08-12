---
title: "Surgical WAM Turns Unlabeled Endoscopy Video Into Closed-Loop Control"
description: "A Cosmos Policy WAM lifts SurRoL success from 63.5% to 77.8% after action-free video pretraining on a fixed label budget."
pubDate: 2026-08-12
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/surgical-wam-data-efficient.png"
readTime: "4 min read"
featured: false
draft: false
---

Labeled dVRK trajectories are scarce. Endoscopic video is not. **Surgical WAM** (arXiv:2608.11204, posted **August 11**) asks a clean question: if you freeze the action-label budget, does action-free video pretraining improve closed-loop surgical manipulation? On four SurRoL tasks, the answer in their tables is yes: average success moves from **63.5%** to **77.8%**.

<figure>
  <img src="/images/heroes/surgical-wam-data-efficient.png" alt="Nine-frame peg-transfer sequence next to a success-rate chart for pretrained vs unpretrained WAM" loading="lazy" />
  <figcaption>Closed-loop PegTransfer plus fine-tuning curves with and without video pretraining. Source: Bao et al., arXiv:2608.11204.</figcaption>
</figure>

## One model, two stages

The team (Wenrui Bao, Tianyun Jiang, Zhiben Chen, Ser-Nam Lim, Peter D. Peng, Yuzhang Shang) builds on **Cosmos Policy**. The model jointly predicts future endoscopic frames and an action chunk, then runs as a receding-horizon controller: predict a chunk of length **Hc = 16**, execute **He = 4** steps, replan.

Stage 1 trains only the world-model slots on unlabeled surgical video (they instantiate this with the Cosmos-H-Surgical / SurgWorld video backbone). Action tokens are masked. Stage 2 fine-tunes the full WAM on a fixed set of **10,000** SurRoL demonstrations. All methods in the paper share that labeled set.

<figure>
  <img src="/images/heroes/surgical-wam-data-efficient-2.png" alt="Surgical WAM architecture and two-stage video-then-action training diagram" loading="lazy" />
  <figcaption>Shared video-action diffusion transformer, then video-only pretrain and joint fine-tune. Source: Bao et al., arXiv:2608.11204.</figcaption>
</figure>

At test time the action is an absolute Cartesian target per dVRK patient-side manipulator: position, orientation, gripper open/close.

## Where the points land

Tasks: Needle Pick, Peg Transfer, Needle Regrasp, BiPeg Transfer (the last two are bimanual). Evaluation is **100** closed-loop episodes per result.

Video pretraining lifts PegTransfer from **66%** to **86%** (+20 points). The paper says gains are largest on contact-rich and bimanual work. Fine-tuning ablations: the pretrained model peaks at **86%** after **80k** steps; without pretraining it needs **160k** steps to reach **79%**. Generalist policies transferred poorly: ALOHA **14%** on PegTransfer, Diffusion Policy **2%**, and **π0.5** averaged **22.3%** across the four tasks after the same fine-tune. Surgical WAM with pretraining hit **64%** on BiPegTransfer versus **33%** for π0.5.

<figure>
  <img src="/images/heroes/surgical-wam-data-efficient-3.png" alt="Real dVRK endoscopic frames of knot tying and suturing from JIGSAWS" loading="lazy" />
  <figcaption>JIGSAWS dVRK sequences used to check that the video prior is not a simulator artifact. Source: Bao et al. / JIGSAWS frames in the paper.</figcaption>
</figure>

On real **JIGSAWS** dVRK video (knot tying, suturing) they report the same qualitative trend: video-pretrained init beats from-scratch. That is not a closed-loop OR result. It is a real-video transfer check.

## A Human's Take

This is the right bottleneck to attack. OR kinematics cost a specialist and a console; endoscopy already exists by the terabyte. I care that they measured closed-loop task success instead of “the predicted video looks surgical.” I also care that the whole closed-loop number is still in SurRoL. JIGSAWS only shows the prior is not fake pixels. Nobody should book an OR slot on 77.8% in sim.

## Sources

- [arXiv:2608.11204 — Surgical WAM](https://arxiv.org/abs/2608.11204)
- [arXiv HTML — Surgical WAM paper](https://arxiv.org/html/2608.11204v1)
- [alphaXiv — Surgical WAM](https://www.alphaxiv.org/abs/2608.11204)
