---
title: "Munro Tears Down the G1 Actuator: Planetary Gears and a Stator Heat Pipe"
description: "Munro Live’s G1 joint teardown finds ~15:1 planetary gearing, knee heat pipes, remote ankle motors, and CNC parts built for iteration."
pubDate: 2026-09-13
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/unitree-g1-actuator-teardown-3.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Munro Live opened a **Unitree G1** joint and showed the guts: a two-stage planetary gearbox, a copper heat pipe on the knee stator, and a pile of CNC aluminum. The dedicated actuator episode dropped **11 September**. [Humanoid.guide](https://humanoid.guide/unitree-g1-teardown-reveals-actuator-and-cooling-tradeoffs/) recapped the longer **38-minute** whole-robot teardown the same weekend.

The panel was Munro engineers, **Scott Walter** of Robo Strategy, and Schaeffler people. They were not grading parkour. They were asking how torque gets to the foot, where heat goes, and what would break on a long shift.

<figure>
  <img src="/images/heroes/unitree-g1-actuator-teardown-3.jpg" alt="Unitree G1 arm on a bench with planetary gears, stator windings, and a motor control board laid out" loading="lazy" />
  <figcaption>G1 limb and actuator internals from Munro Live’s 11 September episode. Source: Munro Live / YouTube.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/CSJydnLzBAo"
    title="Unitree G1 actuator teardown"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Motors, gearing, bearings, and the actuator control board. Source: Munro Live / YouTube.</p>

## Gearing and heat

Hips, knees, shoulders, and elbows share one rotary architecture at different sizes. Motor plus two-stage planetary, about **15:1**, according to the teardown write-up. That is the opposite of a strain-wave joint at **100:1** or more. Planetary is easier to back-drive, so motor current can stand in for output torque. The cost is backlash across two stages. The G1 measures output position to help live with that.

Thermal path is aluminum housings clamping the motor, plus anodized exteriors. High-duty joints such as the knees add a copper heat pipe against the stator: fluid boils at the hot end, condenses on cooler aluminum. The panel said they had not seen that trick applied directly to a motor stator before. Hips get two centrifugal fans through machined channels. Capacitor boards around the body soak DC-bus ripple when joints motor or regenerate.

<figure>
  <img src="/images/heroes/unitree-g1-actuator-teardown.jpg" alt="Unitree G1 standing behind an exploded layout of legs, actuators, and structural parts" loading="lazy" />
  <figcaption>Full G1 teardown layout from Munro Live. Source: Humanoid.guide recap of the Munro video.</figcaption>
</figure>

## Ankle and structure

Ankle motors sit higher on the leg. Two tie rods drive a universal joint: together they pitch, differentially they roll. Mass stays off the foot. Spherical joints are required because the rods leave plane, and the geometry makes it hard to split pitch torque from roll using current alone. The exposed, greased Cardan joint is the part the panel would boot like a CV joint if this robot lived in grit.

Many silver structural parts are machined from billet, not cast. Faster to change a part; more expensive if you ever hit real volume. Lots of small fasteners, reusable actuator families, capacitors stuffed where they fit. Munro reads that as a developer platform, not a finished production architecture.

## A Human's Take

A 15:1 planetary you can back-drive is a control choice, not a cheap-out. The heat pipe on the stator is the detail I did not expect. The Cardan ankle is the one I would not ship into a dusty aisle without a boot. This teardown is useful because it talks about fasteners and bus ripple instead of another walking clip.

## Sources

- [Humanoid.guide — Unitree G1 teardown reveals actuator and cooling tradeoffs](https://humanoid.guide/unitree-g1-teardown-reveals-actuator-and-cooling-tradeoffs/)
- [YouTube — Unitree G1 Actuator Teardown: How This Humanoid Robot Moves](https://www.youtube.com/watch?v=CSJydnLzBAo)
- [YouTube — Unitree G1 Humanoid Robot Teardown](https://www.youtube.com/watch?v=OXuqGuTgXGU)
