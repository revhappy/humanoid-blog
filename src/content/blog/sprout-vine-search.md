---
title: "MIT Lincoln Lab Open-Sources SPROUT, a Vine Robot for Rubble"
description: "SPROUT grows through 3.81 cm holes in steel plate, runs on firefighter air tanks, and ships CAD, PCBs, and ROS 2 under MIT license."
pubDate: 2026-09-17
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/sprout-vine-search.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Soft “vine” robots grow by turning themselves inside out. **SPROUT** (Soft Pathfinding Robotic Observation Unit) is MIT Lincoln Laboratory and the University of Notre Dame’s attempt to put one in a first-responder’s pack instead of a lab cart. The paper landed on arXiv on 17 September. CAD, a custom Arduino shield, a Jetson bootstrap, and a ROS 2 Humble stack are on GitHub under the MIT license.

<figure>
  <img src="/images/heroes/sprout-vine-search.jpg" alt="Two helmeted operators at a rubble pile with a yellow SCBA tank; inset shows a white fabric vine turning through a void" loading="lazy" />
  <figcaption>SPROUT at a USAR training pile, with the vine tip in a void. Source: Valdivia et al., arXiv:2609.17781, Figure 1.</figcaption>
</figure>

## Grow, then steer

The vine base is a pressurized cylinder with a motorized spool, derived from the open vine-robots.org design. Pressurize the chamber, unwind the tendon, and the fabric body everts out the outlet. Reverse the spool to pull it back. The team swapped hot-glued reel plates for heat-set inserts, added a groove so the tendon stays centered, and bolted 12.7 mm acrylic retainers so the caps do not pop at higher pressure.

The body is a 7.62 cm (3 in) TPU-coated nylon tube with three series pouch motors around the circumference. Heat-sealed pouches shorten when pressurized and bend the vine toward that side. Fabricated vines burst at **137 kPa (19.9 PSI)**. A single joystick sets steering, growth speed, and chamber pressure. The preferred stick is a Fort Robotics Wired Tactical controller (IP66); a PlayStation 5 pad is the cheap option.

Pneumatic power is meant to be a **Scott Industrial SCBA** tank, the kind already on a firefighter’s back, dropped through a regulator from 15.3 MPa to 207 kPa. That pack is rated for **one hour** of continuous running before a swap. A compressor is still an option on a quick-disconnect hose.

<figure>
  <img src="/images/heroes/sprout-vine-search-2.jpg" alt="Photo grid of a white vine robot growing through a culvert, a small hole in steel plate, rebar, and rubble voids" loading="lazy" />
  <figcaption>Field cuts: culvert, 3.81 cm torch-cut hole, rebar, cluttered entries, vertical drop, and a void. Source: arXiv:2609.17781, Figure 5.</figcaption>
</figure>

## What it did on the pile

The authors have been taking SPROUT to USAR training sites since 2024, including Massachusetts Task Force 1’s engineered rubble pile. For the tests in the paper they fitted a **4 m** body.

At **10.3 kPa (1.5 PSI)** chamber pressure the vine grew at **0.11 m/s**. It ran over flat ground, up slopes, through rebar, into a jagged entry, and vertically into a void. USAR crews drill **6.4 cm** camera holes. SPROUT went up a pile and into a hole that size. Then the team torch-cut smaller holes in 0.635 cm steel until the vine could not squeeze through. The smallest successful hole was **3.81 cm**, about half the inflated diameter.

After **five hours** on abrasive rubble the body had one minor puncture. Swap the sleeve on the same base and keep going.

The compute box is a NANUK 930 case on an 18 V Milwaukee M18 pack, with a Jetson Orin Nano, an Arduino Uno, ProportionAir QB3 regulators, and a Cytron MDD10A motor driver. Power-on launches ROS 2. The project page mirrors the repo: documentation, CAD, electronics, software.

<figure>
  <img src="/images/heroes/sprout-vine-search-3.jpg" alt="CAD exploded views of the SPROUT compute box and vine base with overall dimensions" loading="lazy" />
  <figcaption>Compute box and vine-base CAD. Source: arXiv:2609.17781, Figure 3.</figcaption>
</figure>

## A Human's Take

I want more robots that show up with a strap, a tank the crew already owns, and a GitHub link. Growing through a hole half your own width is the party trick. The puncture after five hours is the part that makes it a tool: you replace the fabric, not the robot.

## Sources

- [Valdivia et al. — SPROUT (arXiv:2609.17781)](https://arxiv.org/abs/2609.17781)
- [Paper HTML with figures](https://arxiv.org/html/2609.17781)
- [SPROUT project page](https://sprout-mitll.github.io/sprout/)
- [SPROUT GitHub repository](https://github.com/SPROUT-MITLL/sprout)
