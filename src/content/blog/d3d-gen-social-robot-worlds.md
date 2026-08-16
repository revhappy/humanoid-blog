---
title: "D3D-GEN Builds Hospital Wards a Social Robot Can Actually Walk"
description: "An IROS 2026 paper generates Isaac Sim and Gazebo worlds from domain rules, including robot charging zones. The team made 450 layouts."
pubDate: 2026-08-16
category: "Research"
author: "Shar Hendrix"
heroImage: "images/heroes/d3d-gen.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Most indoor generators make pretty apartments. **D3D-GEN** is trying to make rooms a robot can charge in. The paper (**arXiv:2608.11876**, 12 August 2026, accepted at **IROS 2026**) comes from Singapore Management University, TU Berlin, MPI, and TU Braunschweig. Prompt it with a domain and a country, and it dumps a world that loads in **Isaac Sim** and **Gazebo**.

<figure>
  <img src="/images/heroes/d3d-gen.jpg" alt="D3D-GEN pipeline from user prompt to physics-aware simulator" loading="lazy" />
  <figcaption>Prompt to floorplan to Isaac/Gazebo scene. Source: arXiv:2608.11876.</figcaption>
</figure>

## How the worlds get their rules

A “domain agent” runs grounded web research on eight topics: room types, sizes, adjacencies, fire safety, accessibility, HVAC, furniture, and **robot placement / charging / circulation**. Those notes become a JSON database with source URLs and confidence tags.

At generation time the model only sees constraints that match the building type (residential, office, hospital). Robot-specific examples in the paper include a charging-dock clearance of **≥ 1.2 m**, a **2.5 m²** staging zone, and **≥ 1.8 m** corridors for two-way robot traffic. Those are retrieved examples, not a universal code.

Assets come from a **259**-model library (**139** office, **71** hospital, **49** residential) with bounding boxes, materials, and affordance tags. The pipeline writes a `world.yaml` of walls, doors, assets, and labeled zones.

## What they measured

They generated **450** worlds: **150** each of residential, office, and hospital, at requested room counts of **5**, **8**, and **10**. Room count always matched the request. Offices were the most cluttered (up to **8.9** objects per room in their summary). Hospitals had the most doors and walls.

On **18** residential prompts versus HouseDiffusion, Holodeck, ProcTHOR, and DiffuScene, D3D-GEN posted the highest object count (**54.56**), objects per room (**7.06**), object spacing (**9.19 m**), visual score, VQA accuracy (**0.400**), and scene rating (**8.63**). Layout-FID was competitive, not best.

<figure>
  <img src="/images/heroes/d3d-gen-2.jpg" alt="Side-by-side floorplans and asset placements versus HouseDiffusion, ProcTHOR, Holodeck, DiffuScene" loading="lazy" />
  <figcaption>Floorplan and placement comparison. Brown rooms are robot charging zones, which only D3D-GEN marked. Source: arXiv:2608.11876.</figcaption>
</figure>

The authors’ own limit: the asset library may not exist for a new domain. Future work is procedural assets plus letting users edit the domain database in language.

## A Human's Take

I smiled at the brown charging rooms. If you train a hospital robot in a ProcTHOR rectangle, of course it gets stuck at the meds trolley. I still want a real robot walking one of these wards, not just a Gemini score on the wallpaper.

## Sources

- [arXiv:2608.11876 — D3D-GEN HTML](https://arxiv.org/html/2608.11876)
- [arXiv:2608.11876 — abstract](https://arxiv.org/abs/2608.11876)
