---
title: "Two Helix Cables Recreate Elephant-Trunk S-Bends"
description: "NUS and A*STAR show that helix angle and opposite-hand phase, not a stack of segments, can draw elephant-like trunk postures."
pubDate: 2026-09-17
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/dual-helicity-elephant-trunk.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Elephant trunks look like they need a control channel per muscle fascicle. A National University of Singapore and A*STAR team argues a lot of the posture library is cheaper than that: couple two opposite-handed helical “muscles,” then twist two knobs.

**Huishi Huang**, **Danlu Chen**, **Matteo Lo Preti**, **Jun Liu**, **Marcelo H. Ang Jr.**, and **Cecilia Laschi** posted the paper on 16 September. The knobs are helix angle **α** (obliquity of the cables relative to the axis) and phase span **β** (angular offset between the left- and right-handed pairs). A cable-driven continuum prototype, not a hydrostat, is the testbed.

<figure>
  <img src="/images/heroes/dual-helicity-elephant-trunk.jpg" alt="Top row of elephant trunk postures; bottom row of a segmented cable robot matching curls, S-bends, and wraps around a cylinder" loading="lazy" />
  <figcaption>Field/literature trunk shapes (top) and the prototype (bottom) at listed (α, β). Source: Huang et al., arXiv:2609.18050, Figure 1.</figcaption>
</figure>

## Two parameters, a posture family

The authors point at S-bends — curvature that changes sign along the trunk — as the interesting case. Segmented continuum arms usually add a module every time curvature has to reverse. Here, raising **α** tends to add sign-change nodes; sweeping **β** moves those nodes along the length.

A MuJoCo sweep steps **α** from 5° to 20° and **β** from 45° to 315°. Force on the cables (normalized 0.2–0.5, from 50 N per cable) only deepens existing bends. It does not mint new nodes. Table I in the paper counts sign-changes: at 20° helix they report up to four nodes depending on phase.

The prototype reproduces distal curls, hooks, twist-and-bend, single-node S-shapes, and multi-node reverse bends, including wraps around a cylinder. A 10 cm scale bar is in the hardware panel. The robot’s base orientation is set to match photographed head poses; the paper says that does not change the intrinsic curvature profile.

<figure>
  <img src="/images/heroes/dual-helicity-elephant-trunk-2.jpg" alt="Grid of simulated trunk postures as helix angle and phase span vary" loading="lazy" />
  <figcaption>α down the rows, β across the columns. Source: arXiv:2609.18050, Figure 2.</figcaption>
</figure>

## What it is not

The authors are blunt. The robot has no muscular hydrostat, no constant-volume constraint, and no live elongation, so it cannot retune **α** the way a trunk might by stretching. Oblique muscles in the animal are discrete bands, approximated here as continuous helical cables. Gravity sag, tendon friction, and contact forces will move the mapping. The claim is a geometric coupling law, not a biomechanical replica.

They sketch a dual-layer picture: a global helical field sets the backbone of the pose; local segmental activation still does contact force, “pseudo-joints,” and the fine tip. Predictions for biology include correlating regional fiber angle with node count, and comparing body displacement on S-bend reaches versus single-curve reaches.

## A Human's Take

I have watched too many continuum arms grow a new motor every time someone wants an S. Two cables that draw a reverse bend because of how they cross is the kind of morphological cheat I want on a field arm. Treat it as a prior, not a finished trunk. The paper already says the next layer is local residual control when the cylinder actually pushes back.

## Sources

- [Huang et al. — Dual-helicity trunk postures (arXiv:2609.18050)](https://arxiv.org/abs/2609.18050)
- [Paper HTML with figures](https://arxiv.org/html/2609.18050)
