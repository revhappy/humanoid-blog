---
title: "ReactHuman Freezes the Scene and Asks the Model to Catch or Dodge"
description: "A 17-family, 1,000-scene benchmark puts MLLMs in a simulated humanoid and scores whether the catch actually meets the object."
pubDate: 2026-09-12
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/reacthuman-hazard-benchmark.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A slipping plate is not a multiple-choice question. **ReactHuman**, from **Yizhan Li**, **Bang Liu**, and collaborators at **Université de Montréal**, **Mila**, **McGill**, **McMaster**, and **Meta**, is a September 9 paper that treats a multimodal LLM as the brain of a simulated humanoid and then **runs the plan in physics**.

The protocol is freeze-and-predict. A household hazard plays for about **0.6 s**. Time stops. The model gets up to three camera views and must output a walking command plus hand keyframes. A rule then labels the motor plan as **Catch**, **Dodge**, or **No-Action**. Simulation resumes. A pre-trained RL walker on a simulated **Unitree G1** executes it.

<figure>
  <img src="/images/heroes/reacthuman-hazard-benchmark.jpg" alt="Simulated humanoid raising its arms as a chandelier lies on the floor" loading="lazy" />
  <figcaption>A ceiling-drop family scene after the committed reaction. Source: Li et al., arXiv:2609.10895, Figure 3.</figcaption>
</figure>

## 17 families, exact labels

The benchmark spans **17** sudden-event families and **over 1,000** bit-for-bit reproducible scenes, simulated in **Genesis** at **240 Hz**. Ground truth comes from simulator state, not annotators: action label, 3-D impact point, time-to-floor.

Families are built to split failure modes. A tabletop drop is mostly semantics (catch the apple, not the knife). A pendulum or bounce is mostly interception. Chain reactions start with a still object. **14** adversarial props — foam anvil, steel apple, lead-core tennis ball — look like the wrong physics.

The evaluated slice is **306** scenes, **18** per family. Seven models via OpenRouter: **Claude Opus 4.8**, **GPT-5.5**, **Gemini 2.5 Flash**, **Kimi K2.6**, **Qwen3-VL-235B**, **Qwen3-VL-30B**, **Gemma-3-27B**. That is **2,138** decisions (four lost to API errors). Labels split **141 / 156 / 9** Catch / Dodge / No-Action. Always-Dodge guessing would hit **51.0%**.

<figure>
  <img src="/images/heroes/reacthuman-hazard-benchmark-2.jpg" alt="ReactHuman pipeline from scene generation to MLLM brain, RL spine, and humanoid body" loading="lazy" />
  <figcaption>LLM semantics plus seeded physics, then a frozen decision executed on the G1. Source: ReactHuman paper, Figure 2.</figcaption>
</figure>

## What broke

The authors’ summary: models mishandle **roughly one hazard in three**. None of the named failure modes shrink with scale.

- On Dodge-labeled scenes, **35.9%** of decisions violate a safety rule (range **23–66%** by model). **253 of 392** mistakes are freezing in place.
- **GPT-5.5** leads semantic action accuracy at **63.7%**. **Gemma-3-27B** is second at **62.4%** and first on safety at **88.2%**. **Claude Opus 4.8** is the least safe in the table at **64.7%**, while catching well (**67%** on catch scenes) and engaging hazards it should avoid (**34%** on dodge scenes). Mean accuracy is **54.0%**.
- Even correct Catch plans miss: median hand-to-impact error **0.48 m**, **89%** short. In **49%** of those cases the robot is more than **0.8 m** away — farther than an arm reach — and does not step in.
- Slow hazards freeze twice as often (**42%** vs about **21%**). Across **280** adversarial-object decisions, **no model** questioned material or weight.

A majority vote of all seven scores **62.1%**, no better than the best single model.

The dataset is on Hugging Face as [Alan123/reacthuman-benchmark-scaled](https://huggingface.co/datasets/Alan123/reacthuman-benchmark-scaled). Limits they list: rigid-body sim, one open-loop decision, no real hardware.

<figure>
  <img src="/images/heroes/reacthuman-hazard-benchmark-4.jpg" alt="Simulated humanoid reaching toward a table after an object-drop event" loading="lazy" />
  <figcaption>Object-drop family, third-person view. Source: ReactHuman paper, Figure 3.</figcaption>
</figure>

## A Human's Take

I care that they execute the plan. A model that says “catch” while standing a meter short would ace a quiz and drop the plate. The Gemma vs Claude split is the other tell: bigger is not safer, and a fixed personality is not a policy. Until someone closes the loop on real metal, treat this as a diagnosis of the brain, not a warranty on the body.

## Sources

- [arXiv:2609.10895 — ReactHuman](https://arxiv.org/abs/2609.10895)
- [Hugging Face — reacthuman-benchmark-scaled](https://huggingface.co/datasets/Alan123/reacthuman-benchmark-scaled)
