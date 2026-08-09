---
title: "CoMuDi Coordinates Up to 9 Arms for Large-Scale Disassembly"
description: "CoMuDi plans multi-robot disassembly with ST-RRT* and temporal constraints, scaling to 49-piece assemblies and low idle times across six scenarios."
pubDate: 2026-08-09
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/comudi-disassembly.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Taking something *apart* with multiple arms is harder than packing boxes: dependency graphs, tight workspaces, and robots that must not collide while each waits on the next free bolt.

**CoMuDi** — coordinated multi-robot disassembly — is a planning method from Niklas Hargus, Andreas Orthey, and Marc Toussaint (arXiv:[2608.05830](https://arxiv.org/abs/2608.05830), Aug 6, 2026). Input: a robot team, an assembly of objects, and a dependency graph. Output: timed pick/place/exit motions with minimized **makespan**.

<figure>
  <img src="/images/heroes/comudi-disassembly.jpg" alt="Multiple robot arms surrounding a large cylindrical assembly part in simulation" loading="lazy" />
  <figcaption>Multi-arm disassembly scene with a large central assembly. Source: arXiv:2608.05830.</figcaption>
</figure>

## Method sketch

- Build **compound tasks** for pick, place, and exit
- **Propagate temporal constraints** so each robot starts and ends as early as possible while avoiding neighbors
- Integrate **space-time RRT\*** (**ST-RRT\***) so individual tasks minimize arrival time and the whole plan shrinks makespan
- Compared against RRT\* with varying time bounds: CoMuDi + ST-RRT\* reports higher success and lower makespan in the paper’s ablations

<figure>
  <img src="/images/heroes/comudi-disassembly-2.jpg" alt="CoMuDi multi-robot disassembly simulation figure" loading="lazy" />
  <figcaption>Additional CoMuDi multi-robot scene. Source: arXiv:2608.05830 PDF.</figcaption>
</figure>

## Scale

Evaluated on **six assemblies**:

- Up to **49 pieces**
- Up to **9 robots**
- Reported **low idle times** on returned paths — the practical signal that coordination is not just “serialize everything”

The work targets large-scale assemblies where manual sequencing of multi-arm teardown is a planning problem, not a single-arm pick demo.

## A Human's Take

Disassembly is the unglamorous twin of assembly lines, and it is where recycling and remanufacturing either pay or pile up. ST-RRT\* plus dependency graphs will not replace a fixture plan, but low idle time on nine arms is the metric I would take to a plant engineer. Next receipt: physical multi-arm cell, not only sim meshes.

## Sources

- [arXiv:2608.05830 — Coordinated multi-robot disassembly (CoMuDi)](https://arxiv.org/abs/2608.05830)
- [arXiv PDF](https://arxiv.org/pdf/2608.05830)
