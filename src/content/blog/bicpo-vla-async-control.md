---
title: "BICPO-VLA Smooths the Handoff When the Next Chunk Is Late"
description: "A Haar-split VLA ranks same-behavior action chunks so the robot does not jump when inference finishes mid-motion."
pubDate: 2026-08-17
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/bicpo-vla-async.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**BICPO-VLA** is a vision-language-action policy built for the ugly moment when the robot is still running the last action chunk and the next one is not ready. The paper is **arXiv:2608.13924**.

That gap has a name here: the **request-to-handoff** problem. The new chunk was asked for in one pose and takes over in another. A semantically correct plan can still snap the wrist.

<figure>
  <img src="/images/heroes/bicpo-vla-async.jpg" alt="BICPO-VLA overview comparing VLA paradigms and handoff-conditioned action fibers" loading="lazy" />
  <figcaption>Behavior identity, Haar coordinates, then a handoff pick. Source: Shang et al., arXiv:2608.13924.</figcaption>
</figure>

## Identify the behavior, then pick a continuation

The stack has three parts:

1. An **instruction-aware** encoder decides which behavior the command and current progress actually support, and freezes that identity.
2. A one-level **Haar** transform splits each action chunk into a pairwise **scaffold** and a **residual**. Both reconstruct exactly. Generation is two short flow stages instead of a long refine in raw action space.
3. **BICPO** rolls the outgoing commands to the real handoff state and uses **reference-relative Flow-DPO** to prefer the candidate with the smaller **jump** and **trend** mismatch.

The DPO piece is meant to be portable. The authors drop the same continuation objective onto **π0.5** flow matching, **Legato**, and **RTC** without attaching BICPO’s encoder or Haar head.

## Where the numbers moved

On **CALVIN ABC→D**, BICPO-VLA reaches **4.52** average completed length and **80.7%** five-subtask success, against **4.36** and **77.3%** for the strongest listed baseline.

On ten **RoboTwin 2.0 Hard** tasks, overall success goes from **60.4%** to **65.8%**, with **4–8** point gains on every task.

**LIBERO** is already near the ceiling, so they score the seam. DPO cuts jump cost **21.3%** and trend mismatch **20.7%**, while success only rises **0.3** points (**99.1%** vs **98.8%** without DPO). The same DPO on host policies trims jump **15.8–40.3%** and trend **11.5–21.2%**, with **0.1–0.2** point success bumps. Direct continuity supervised fine-tuning **hurts** success. On **π0.5**, chosen-only SFT drops success from **96.9%** to **49.1%**.

Delay robustness on LIBERO is flat across **k = 3, 4, 5** and random **k**: success **98.8–99.1%**, jump **2.37–2.50**.

<figure>
  <img src="/images/heroes/bicpo-vla-async-2.jpg" alt="Real-world BICPO-VLA rollouts placing milk and a paper ball versus pi0.5" loading="lazy" />
  <figcaption>Milk place and paper-ball toss, plus six-task real-world bars. Source: arXiv:2608.13924.</figcaption>
</figure>

Six limited-data **real-world** tasks average **69.3%** for BICPO-VLA, versus **60.2%** for B-VLA, **47.3%** for π0.5, and **33.3%** for OpenVLA-OFT. The paper says it leads every task by **7–11** points over the next-best listed method.

<figure>
  <img src="/images/heroes/bicpo-vla-async-3.jpg" alt="Simulation comparison of BICPO-VLA and pi0.5 on cabinet and button tasks" loading="lazy" />
  <figcaption>Sim cabinet store and button press, BICPO-VLA vs π0.5. Source: arXiv:2608.13924.</figcaption>
</figure>

## A Human's Take

Chunked VLAs fail in a very specific way: the next clip does not start where the last clip ended. Ranking two legal continuations is a nicer fix than telling the policy to move less. The LIBERO table is the tell. Smoothness SFT nuked π0.5. Preference did not. That is the result I will steal for other stacks.

## Sources

- [arXiv:2608.13924 — BICPO-VLA](https://arxiv.org/abs/2608.13924)
- [arXiv HTML — BICPO-VLA paper](https://arxiv.org/html/2608.13924v1)
