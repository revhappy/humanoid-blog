---
title: "SkillMemo Stores Atomic Skills and Pulls Them Back at Runtime"
description: "Tsinghua’s SkillMemo segments demos with MoE experts, banks skill gating profiles, and lifts π0.5 to 98% average on LIBERO plus real UR5e gains."
pubDate: 2026-08-07
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/skillmemo.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Long-horizon manipulators often learn one blob of behavior per demo. When the strawberry moves from bowl to plate, the blob falls apart. **SkillMemo**, posted **August 6, 2026** (arXiv:2608.05970) from Tsinghua, NTU, and collaborators, with a project page, tries a different structure: **split trajectories into latent skills**, store them, and retrieve them when the next task needs a remix.

<figure>
  <img src="/images/heroes/skillmemo.jpg" alt="SkillMemo figure comparing skill memory composition vs monolithic model failure" loading="lazy" />
  <figcaption>Skill decomposition and memory reuse for compositional tasks. Source: arXiv:2608.05970 HTML.</figcaption>
</figure>

## Two pieces

**Expert-guided trajectory segmentation** puts a **Mixture-of-Experts** layer on the backbone. Gating coefficients over time act as soft skill boundaries — no hand-labeled primitives required. A PID-style synergy loss pushes experts to specialize without collapsing.

**Skill-level episodic memory** stores each segment as a key-value pair: a temporally aggregated latent key, and the full sequence of gating weights as the value. At inference, cosine similarity retrieves top matches; if average similarity clears a threshold δ, retrieved gates fuse with the live gate via a mix weight λ. A usage-based prune keeps the bank finite for lifelong runs.

Default expert count in ablations is **N = 5** (more helps a bit, then latency climbs).

## Where it moved the needle

On Diffusion Policy suites, SkillMemo averages **64.6%** success vs **61.2%** for plain DP (Push-T, BlockPush, Kitchen). On LIBERO with VLA backbones, **π₀.₅-SkillMemo** hits **98.0%** average vs **96.8%** for π₀.₅ alone (Goal **99.0**, Spatial **99.4**, Object **98.2**, Long **95.4**). UniAct and UniVLA also pick up points when SkillMemo is stacked on.

Real **UR5e** single-task rates over 40 trials improve across five tasks (e.g. Butter in Pot **62.5% → 75.0%**). On held-out object–receptacle recombinations, SkillMemo beats DP on every reported crossover (Strawberry on Plate **65.0% → 75.0%**).

<figure>
  <img src="/images/heroes/skillmemo-2.jpg" alt="SkillMemo pipeline diagram with EGTS and skill memory architecture" loading="lazy" />
  <figcaption>Pipeline: MoE segmentation into a skill-level memory bank. Source: arXiv:2608.05970 HTML.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/skillmemo-3.jpg" alt="Expert activation weights peaking during grasp and stove actions" loading="lazy" />
  <figcaption>Expert gating peaks align with semantic actions like grasp and stove control. Source: arXiv:2608.05970 HTML.</figcaption>
</figure>

## A Human's Take

A 1.2-point LIBERO bump over π₀.₅ is not a fireworks demo, but the real UR5e crossover tasks are the receipt that matters: same objects, new pairing, better score. If skill memory is just a fancy retrieval buffer, fine — as long as it keeps working when the chip bag is not on the training table.

## Sources

- [arXiv:2608.05970 — SkillMemo abstract](https://arxiv.org/abs/2608.05970)
- [arXiv HTML — SkillMemo full paper](https://arxiv.org/html/2608.05970v1)
- [SkillMemo project page](https://changyuanwang17.github.io/SkillMemo/)
