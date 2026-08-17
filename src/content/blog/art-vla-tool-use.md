---
title: "ART Lets a VLA Call Night-Vision Instead of Retraining"
description: "Astribot’s ART fine-tunes π-FAST with LoRA so the policy can invoke vision and camera tools on 30k trajectories."
pubDate: 2026-08-17
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/art-vla-tool-use.jpg"
readTime: "4 min read"
featured: false
draft: false
---

End-to-end VLAs hate a dark room and a new camera angle. Modular tool stacks hate dexterous action. **ART** (Agentic Robot with Tool-use), from **Astribot**, Tsinghua, Juxi, IntelliFusion, and CUHK, fine-tunes a VLA so it can flip on an off-the-shelf tool, then go back to emitting continuous actions.

The backbone is pre-trained **3B π-FAST**. A LoRA adapter does the tool reasoning. After the tools run, LoRA outputs are masked so the original action head is the one that moves the arm.

<figure>
  <img src="/images/heroes/art-vla-tool-use.jpg" alt="Comparison of end-to-end VLA, chain-of-thought, modular tools, and ART" loading="lazy" />
  <figcaption>ART versus vanilla VLA, CoT, and modular APIs. Source: arXiv:2608.14047.</figcaption>
</figure>

## 30k synthetic tool traces, not a new teleop farm

They start from existing VLA datasets and “degrade” them: add low light, noise, blur, jitter; rewrite language so the model must ask for depth or detection; shift viewpoint or arm start pose. A language model then writes the tool chain.

Tools come in three buckets:

- **Vision**: 10 enhancers (low-light, denoise, deblur, jitter fix)
- **Affordance**: depth estimation and object detection
- **Embodiment**: camera rotate/zoom and a body reset

The result is **AT**, which they call the first VLA set with long-trajectory tool reasoning. Fine-tune is **1 epoch** on **30k** tool trajectories, **8× A800**, batch **24**, LR **5×10⁻⁵**.

<figure>
  <img src="/images/heroes/art-vla-tool-use-2.jpg" alt="ART architecture with LoRA tool tokens and external vision, affordance, and embodiment tools" loading="lazy" />
  <figcaption>LoRA reasons about tools; the frozen VLA still outputs actions. Source: arXiv:2608.14047.</figcaption>
</figure>

## Dark LIBERO, then an Astribot S1

On a disturbed **LIBERO** split (lighting, noise, sloppy language, camera/body offsets):

| Model | Vision | Affordance | Embodiment | Avg. |
| --- | --- | --- | --- | --- |
| OpenVLA | 20% | 10% | 7% | 12% |
| π0 | 65% | 15% | 10% | 30% |
| π0-FAST | 60% | 12% | 45% | 39% |
| **ART-FAST** | **81%** | **62%** | **82%** | **75%** |

On a real **Astribot S1** humanoid (**16 DoF**, trained first on **16k** pick-and-place traces, **80** objects, **10** containers):

| Model | Avg. |
| --- | --- |
| OpenVLA | 6.7% |
| π0 | 37% |
| π0-FAST | 43% |
| **ART-FAST** | **62%** |

Same-compute post-training of FAST without tools lands **71 / 61 / 65%** on the three LIBERO axes. ART is **81 / 62 / 82%**. Against reason-only **ECoT** on affordance, ART holds **72%** with vision corruption versus ECoT’s **12%**.

The abstract’s “**20%** higher success” is the headline gap versus those mainstream baselines.

<figure>
  <img src="/images/heroes/art-vla-tool-use-3.jpg" alt="Low-light pick-and-place rollout comparing π-FAST and ART" loading="lazy" />
  <figcaption>Low-light pick-and-place: ART turns on enhancement; π-FAST does not. Source: arXiv:2608.14047.</figcaption>
</figure>

## A Human's Take

Calling a denoise module is less romantic than a 70B VLA, and that is why I like it. Keep the action head you already paid to train. Spend the LoRA budget on “it’s dark, turn on the lamp.” The S1 numbers are still one company’s robot and one 30k synthetic set. If the tool list is the new hyperparameter, someone will overfit that next.

## Sources

- [arXiv:2608.14047 — ART abstract](https://arxiv.org/abs/2608.14047)
- [arXiv HTML — full paper](https://arxiv.org/html/2608.14047v1)
---
