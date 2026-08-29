---
title: "Meta Is Testing Cable-Swapping Arms in Its Data Centers"
description: "WIRED reports Meta is piloting Watney, Kinova Gen3, and ABB robots for cabling, power cycling, and reseating inside live AI data halls."
pubDate: 2026-08-29
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/meta-data-center-kinova.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**WIRED**, in a **28 August 2026** report by Paresh Dave, says **Meta** is testing robots that plug cables, reset servers, and handle other technician work inside its data centers. The story, previously unreported, names three vendors: **Watney Robotics** (San Francisco), **Kinova** (Quebec), and **ABB**. Kinova and ABB declined to comment. Watney did not respond. Meta declined to comment on the specific trials.

The hardware is not a humanoid fleet. It is arms, wheeled lifts, and at least one device that is basically a stick.

<figure>
  <img src="/images/heroes/meta-data-center-robots.jpg" alt="Editorial collage of yellow robot arms over a data-center building" loading="lazy" />
  <figcaption>WIRED’s story art for the Meta data-center robot report. Source: WIRED / Paresh Dave.</figcaption>
</figure>

## What is actually on the floor

According to current and former workers who spoke to WIRED:

- A **Kinova Gen3** arm is being evaluated for power cycling, cutting electricity to servers.
- A separate robot is under test for swapping networking cables. One worker estimated that if it worked, it could cover up to **80%** of some people’s workloads. That is the worker’s number, not Meta’s.
- At some sites, a finger-like or stick-like robot presses the power button on a Mac Mini or similar box when a remote human sends the command.
- Since last June, a pair of dual-armed **Watney** robots have been trying cabling work in one Altoona, Iowa building, under human supervision, still slower than people.
- At the **Prometheus** campus in New Albany, Ohio, four-wheel **ABB** machines with a scissor-lift riser and a six-axis arm are being used to reseat parts.

Kinova’s current Gen3 spec sheet lists **6 or 7** degrees of freedom, **2 kg** full-range continuous payload (**4 kg** mid-range), **7.2 / 8.2 kg** mass, **891 / 902 mm** reach, **50 cm/s** Cartesian speed, **36 W** average, **IP33**, and **1 kHz** control.

WIRED also recaps older Meta automation already in Iowa and Virginia: a self-driving tugger for server racks and a wheeled barcode inventory bot, shown in a 2023 Meta video. Workers say the inventory bot’s camera is grayscale, so it cannot tell green from red status lights, and it struggles with corners and floor cables. Someone with a remote still has to walk it between buildings.

## Limits the company already admits

Robots are not yet doing Nvidia **GB300** cabling, workers say Meta has acknowledged internally. Battery recharge time is a complaint. Earlier industry trials crushed servers. Altoona is the usual prototype site; Mayor Dean O’Connor told WIRED that what Meta proves there tends to spread.

Spokesperson **Francis Brennan** said the U.S. is in its biggest infrastructure boom since World War II and Meta needs more skilled workers, not fewer. The company launched a no-cost electrical, mechanical, and plumbing training program this year with guaranteed jobs in some states.

**Eric Xu**, Meta’s senior manager for robotics, said at a conference last year that long-term goals include robots in data centers for incident response, environmental monitoring, and preventative maintenance.

Microsoft’s Ashley Llorens told WIRED that replacing a faulty server rack is “absolutely something we’re looking into.” Helen Oleynikova of Exclaim Robotics, which is building similar prototypes, said there have been “a lot of pilots and demos, but no provable working solution.”

## A Human's Take

A Kinova arm stabbing a power button is not the humanoid future. It is the version that might actually ship, because the aisle is a known geometry and the task is repetitive. The 80% figure is one unnamed tech, not a production metric. GB300 cabling still wants human hands. If Meta redesigns racks for robots instead of people, that is the real tell. Until then this is a supervised pilot with a recharge schedule.

## Sources

- [WIRED — Inside Meta’s Push to Put Robots to Work in Data Centers](https://www.wired.com/story/inside-metas-experiments-with-data-center-robots/)
- [Kinova — Gen3 robotic arm product page](https://www.kinovarobotics.com/product/gen3-robots)
- [Kinova — Gen3 2026 specifications one-pager (PDF)](https://www.kinovarobotics.com/uploads/Kinova_Onepager_Gen3_2026_EN.pdf)
- [Decrypt — Meta tests robots to handle data center work](https://decrypt.co/376843/meta-tests-robots-data-center)
