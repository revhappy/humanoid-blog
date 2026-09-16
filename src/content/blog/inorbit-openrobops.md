---
title: "InOrbit Opens OpenRobOps as an ISO 21423 Fleet Manager"
description: "InOrbit released Apache 2.0 OpenRobOps on 15 September, a reference implementation of the coming ISO 21423 mobile-robot interoperability spec."
pubDate: 2026-09-16
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/inorbit-openrobops.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**InOrbit.AI** shipped **OpenRobOps** (ORO) on **15 September**: open-source robot operations and fleet-management software under **Apache 2.0**. The Mountain View company, founded in 2017, says it is the first reference implementation of **ISO 21423**, a standard still “under publication” for how industrial mobile robots talk to fleet managers.

CEO **Florian Pestoni** sat on the ISO working group as an ANSI representative. He told **The Robot Report** the package “applies to any robot — it doesn’t really matter if it has wheels, two legs, four legs, etc.”

<figure>
  <img src="/images/heroes/inorbit-openrobops.jpg" alt="OpenRobOps dashboard showing robot health, battery chart, and action buttons for picker-2" loading="lazy" />
  <figcaption>OpenRobOps robot-health console. Source: InOrbit / The Robot Report.</figcaption>
</figure>

## What you actually get

InOrbit’s blog and The Robot Report list the same core:

- high-throughput telemetry ingest over cellular or Wi-Fi
- live maps with pose, laser scans, costmaps, and camera snapshots
- remote waypoints, teleop, and a lock so two operators cannot fight over one robot
- a rules engine for anomaly detection, on-robot recovery, or human escalation
- configuration as code for metrics, alerts, and dashboards
- native **Open-RMF** adapters
- on-prem, air-gapped, or cloud-bridged deploy

ISO 21423 covers communication between industrial autonomous mobile robots and fleet managers. It excludes safety requirements and public-road machines. ISO’s own page still lists the document as under publication, with final production steps of up to seven weeks.

InOrbit first floated OpenRobOps in February. At **Automate 2026** in Chicago it ran a multi-vendor orchestration demo on **InOrbit Space Intelligence**, which Pestoni calls the first public use of ISO 21423. Ten companies took part, according to The Robot Report. OpenRobOps is the piece they are giving away. Space Intelligence stays a paid product that can orchestrate ORO-compliant robots.

<figure>
  <img src="/images/heroes/inorbit-openrobops-2.jpg" alt="OpenRobOps navigation map with picker-1 and picker-2 plus a live camera view of warehouse racks" loading="lazy" />
  <figcaption>Navigation view with a live warehouse camera. Source: InOrbit / The Robot Report.</figcaption>
</figure>

**Steve Cousins**, executive director of the Stanford Robotics Center, InOrbit board member, and former Willow Garage CEO, compared the drop to ROS: stop rewriting basic fleet plumbing. **Geoffrey Biggs** (Open Robotics CTO) and **Brian Gerkey** (Intrinsic CTO, Open Robotics board chair) are named as community supporters in InOrbit’s post.

The software lives at [openrobops.org](https://openrobops.org).

## A Human's Take

Open-sourcing the fleet manager is the right layer to give away. Everyone’s custom dashboard is a tax. The test is whether a Unitree or a quadruped OEM actually ships ORO instead of another one-off, and whether ISO 21423 lands in the coming weeks as promised. Until then this is a serious reference implementation with a standard that is still in the printer.

## Sources

- [InOrbit — Escaping the Robotics Build Trap with OpenRobOps](https://www.inorbit.ai/blog/openrobops-release)
- [The Robot Report — InOrbit.AI releases OpenRobOps ISO 21423 reference implementation](https://www.therobotreport.com/inorbit-ai-releases-openrobops-iso-21423-reference-implementation/)
---
