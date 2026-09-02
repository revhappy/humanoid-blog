---
title: "KAIST’s Soft 3D-Printed Hand Lifts a Bottle and Holds an Egg"
description: "KAIST, KIST, and SeoulTech used machine learning to print a rubber-like DLP resin that stretches more than 6×, then built a pneumatic hand around it."
pubDate: 2026-09-02
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/kaist-soft-hand-ie.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**KAIST** announced on **1 September** a soft, 3D-printed robotic hand that can cradle a raw egg and lift a **1 kg** water bottle. The work is a collaboration with **KIST** (Dr. Jongbeom Na) and **Seoul National University of Science and Technology** (Professor Bumsoo Park). The paper landed in *Nature Communications* on **4 June**; the university is only now putting the demo in front of a general audience.

The material, not the finger count, is the story. Digital Light Processing printers like stretchy parts and hate viscous resin. Make the polymer network tough and the liquid will not flow into thin layers. Thin it for printing and the part tears. The team trained a model on formulations that print *and* on high-viscosity failures, then let it pick a recipe.

<figure>
  <img src="/images/heroes/kaist-soft-hand-ie.jpg" alt="Soft printed gripper lifting a water bottle, holding a raw egg, and gripping an egg carton" loading="lazy" />
  <figcaption>Grip tests: bottle, egg, carton. Source: Nature Communications via Interesting Engineering.</figcaption>
</figure>

## The recipe and the hand

KAIST’s English release says the AI-chosen material printed on a DLP machine and stretched to **more than six times** its original length without tearing. Interesting Engineering repeats that number. Pneumatic actuators printed from the resin inflate and curl like fingers. Combined into a hand, they held a computer mouse, an egg carton, slick glass bottles, fragile eggs, and that 1 kg bottle.

KAIST’s Figure 1 lists an example formulation by weight: **PUDA 50 / IBOA 30 / EHMA 16 / MAA 4**. I am not going to pretend I independently verified the chemistry beyond what the press figure shows.

Co-first authors are **Dr. Younghan Song** and **Professor Bumsoo Park**. **Professor Seungchul Lee**, KAIST mechanical engineering, said:

> “This research is significant as it shows that combining researchers’ experimental data with artificial intelligence can efficiently identify optimal material combinations that were previously difficult to find. We expect it to be used to more rapidly develop 3D-printing materials with the performance needed across a range of fields, including soft robots, wearable devices, and custom medical devices.”

<figure>
  <img src="/images/heroes/kaist-soft-hand-3.jpg" alt="Diagram of AI-based 3D-printing material design, from formulation space through DLP printing to a pneumatic hand" loading="lazy" />
  <figcaption>The design loop KAIST published with the announcement. Source: KAIST.</figcaption>
</figure>

DOI: [10.1038/s41467-026-73735-4](https://doi.org/10.1038/s41467-026-73735-4). Title: *Machine learning guided formulation design of digital light processing printable elastomers beyond viscosity stretchability tradeoff.*

<figure>
  <img src="/images/heroes/kaist-soft-hand-2.jpg" alt="Photo grid of the printed gripper lifting a bottle on a scale and holding an egg" loading="lazy" />
  <figcaption>Printed gripper on a scale and in pinch tests. Source: KAIST.</figcaption>
</figure>

## A Human's Take

A lab hand that does egg *and* kilogram-bottle is the right demo for a new elastomer. It is still a tethered pneumatic print, not a humanoid palm you can buy. The useful bit for me is the training set that included the resins that clogged the printer. That is how you get a recipe instead of another year of stirring beakers. If they open the formulation and the print files, this becomes a tool. If it stays a figure in *Nature Communications*, it is a nice stretch test.

## Sources

- [KAIST — Soft 3D-Printed Robotic Hand that Gently Grips Everything from Eggs to a 1 kg Water Bottle](https://www.kaist.ac.kr/newsen/html/news/?mode=V&mng_no=66490)
- [Interesting Engineering — New soft robotic hand grips eggs gently and lifts a full water bottle](https://interestingengineering.com/ai-robotics/soft-robotic-hand-grips-fragile-eggs)
- [Nature Communications — DOI 10.1038/s41467-026-73735-4](https://doi.org/10.1038/s41467-026-73735-4)
