---
title: "KIT Turns CAD Into a Guess-and-Check Plan for Taking Stuff Apart"
description: "Karlsruhe researchers model end-of-life disassembly as a POMDP, then let arms unscrew, mill, or switch tools when a part is stuck."
pubDate: 2026-08-15
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/kit-disassembly.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Researchers at the **Karlsruhe Institute of Technology** (KIT) published a system that plans how to take a worn product apart when the CAD file is a lie. The paper, **From CAD to POMDP**, is on arXiv as **2511.23407** (28 November 2025) and is **accepted at ICRA 2026**. IEEE Spectrum covered the lab work on **10 August 2026**.

The point is simple. Assembly assumes the drawing is right. End-of-life parts are corroded, missing, or repaired in ways nobody wrote down. A deterministic unscrew-in-this-order plan wastes a shift the first time a fastener will not move.

<figure>
  <img src="/images/heroes/kit-disassembly.jpg" alt="Two Comau industrial arms in the KIT wbk lab" loading="lazy" />
  <figcaption>KIT wbk lab cell with Comau arms. Source: IEEE Spectrum / Amadeus Bramsiepe.</figcaption>
</figure>

## Disassembly as a POMDP

A **POMDP** is a planner that keeps a belief over hidden state instead of pretending it can see everything. Here the hidden variables are structural and physical properties of the used product. The team automatically builds that model from **CAD**, **robot capabilities**, and **inspection** results.

They approximate the full POMDP with reinforcement learning on stochastic action outcomes, then run a **Bayesian filter** while the arms work. Actions include **non-destructive** removal and **destructive** cuts. Destructive moves exist because corrosion can block every “legal” removal direction. The project page shows a rivet example: milling opens a new direction when the fastener will not come out.

<figure>
  <img src="/images/heroes/kit-disassembly-2.png" alt="System diagram and two Comau robot setups for screw, mill, and manipulate" loading="lazy" />
  <figcaption>CAD-to-POMDP stack and the two evaluated robot setups. Source: project page / Baumgärtner et al.</figcaption>
</figure>

IEEE Spectrum describes the loop on the physical cell: guess how the product is broken, nudge each part, update the guess, and change tools. In the Spectrum video, a researcher resticks a screw. When the system still sees it, it switches from unscrewing to **milling**.

**Jan Baumgärtner**, one of the designers, told Spectrum that building with new parts is easy because every step is specified. Taking something broken apart is not. “We can imagine 100 ways that something can go wrong.”

## What they ran

The abstract says they used **three products** on **two robotic systems**. The planner beat deterministic baselines on **average disassembly time** and **variance**, transferred across the two cells, and adapted to **missing or stuck** parts. Spectrum notes you can mark which parts must survive so the planner protects them.

The authors are Baumgärtner, Malte Hansjosten, David Hald, Adrian Hauptmannl, Alexander Puchta, and Jürgen Fleischer at KIT’s **wbk Institute of Production Science**. Funding: DFG **SFB-1574**. Spectrum also cites the IFR figure of **over 4 million** industrial robots in use, and a forecast (linked to ABI Research) that the installed base will grow to **over 16 million** by 2030.

<figure>
  <img src="/images/heroes/kit-disassembly-3.png" alt="Diagram of a rivet that blocks a disassembly direction" loading="lazy" />
  <figcaption>Rivet example: a blocked path that needs a destructive action. Source: project page.</figcaption>
</figure>

## A Human's Take

This is the rare recycling-robot story that starts from the failure mode instead of a glossy “circular economy” slide. If the CAD says the screw turns and the screw does not turn, the useful machine is the one that notices and grabs a mill. I care less about the 100-arm factory vision and more about whether this policy still works when the next product is a sealed consumer brick with no usable CAD.

## Sources

- [IEEE Spectrum — Robot Recycler Salvages Parts From Broken Machines](https://spectrum.ieee.org/recycling-robot)
- [arXiv:2511.23407 — From CAD to POMDP](https://arxiv.org/abs/2511.23407)
- [Project page — From CAD to POMDP](https://from-cad-to-pomdp.jan-baumgaertner.com/)
