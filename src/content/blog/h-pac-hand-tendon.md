---
title: "H-PAC Is a 15-DoF Tendon Hand That Models Stretch Instead of Adding Sensors"
description: "HKUST-GZ’s underactuated hand uses six servos and a spring-stretch model to get sub-degree joint predictions without extra sensing."
pubDate: 2026-08-18
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/h-pac-hand-tendon.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Researchers at **HKUST (Guangzhou)** and **Southeast University** posted **H-PAC** on **August 17**: a human-scale tendon hand with **6 actuators** and **15 joint degrees of freedom**. The trick is not another fingertip sensor. It is a model of how the tendons stretch when the return springs pull back.

The name is Hybrid Precision-Augmented Compliance. The hardware is simpler than that.

<figure>
  <img src="/images/heroes/h-pac-hand-tendon.jpg" alt="H-PAC tendon-driven hand next to a labeled human-hand DOF diagram" loading="lazy" />
  <figcaption>Fifteen joints, six servos. Four long fingers share a figure-eight tendon. Source: Yan et al., arXiv:2608.16712.</figcaption>
</figure>

## Six motors, a spring return, and an ESP32

Servos 2–5 each drive one long finger through **figure-eight** routing across MCP, PIP, and DIP. Pulley radii are set to **5:4:5**, so the ideal joint-angle ratio is **4:5:4**. The thumb gets two motors: coupled IP/MP flexion, plus a directly driven CMC for abduction.

When tension drops, a cable-spring path pulls the fingers back to extension. That same spring is why distal joints drift. Flexion loads the tendon, the tendon elongates, and the DIP never quite reaches the geometric prediction.

A host computer does posture mapping and compensation. An **ESP32** fires synchronized position commands. No extra joint or force sensing sits in the loop. The same parameters run every demo.

<figure>
  <img src="/images/heroes/h-pac-hand-tendon-3.jpg" alt="Figure-eight tendon routing on an H-PAC finger from extension to flexion" loading="lazy" />
  <figcaption>Figure-eight routing plus the green spring-return path. Source: Yan et al., arXiv:2608.16712.</figcaption>
</figure>

## The compensation actually moves the error

On a separate monotonic servo sweep (not the one used to set workspace limits), they compared the geometric model with the stretch model.

**Index DIP mean absolute error** fell from **1.15°** to **0.18°**. All **nine** evaluated IP/PIP/DIP joints landed under **0.23°** MAE after compensation. Uncompensated residuals could approach **2°**.

Then they ran the same stack on 13 static postures (thumb opposition, multi-finger shapes, digits 1–8) and 16 grasps covering enveloping, lateral, and tip pinches, plus tools like scissors and tweezers. Those grasps are qualitative. The paper says so.

<figure>
  <img src="/images/heroes/h-pac-hand-tendon-2.jpg" alt="H-PAC hand postures and a grid of grasps on tools and objects" loading="lazy" />
  <figcaption>Same controller, no extra sensors: opposition, digit poses, and 16 grasps. Source: Yan et al., arXiv:2608.16712.</figcaption>
</figure>

Limits are honest. They only report quasi-static, one-direction sweeps. Reverse motion, trial-to-trial scatter, and dynamic tracking are not in this preprint.

## A Human's Take

I like a hand that admits the cable is a spring. Most underactuated designs either live with sloppy fingertips or bolt on another encoder. H-PAC did the third thing: write the stretch into the command.

Sub-degree on a sweep is not a factory spec. It is still the right direction for a compact, cheap hand that has to repeat a pose. If they publish bidirectional numbers next, this becomes a kit I would actually build.

## Sources

- [arXiv:2608.16712 — H-PAC Hand: Control-Oriented Modeling and Tendon-Elasticity Compensation](https://arxiv.org/abs/2608.16712)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2608.16712v1)
