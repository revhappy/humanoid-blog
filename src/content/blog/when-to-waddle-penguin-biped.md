---
title: "This Biped Waddles Faster When the Floor Gets Slippery"
description: "A 54 cm, five-motor biped from CMU walks faster on slippery plastic when its torso rolls over the stance leg."
pubDate: 2026-09-21
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/when-to-waddle.jpg"
readTime: "3 min read"
featured: false
draft: false
---

On a slippery sheet, a small biped walks faster if it rolls its torso over the stance leg, the way a penguin shifts its body. On a grippier rubber floor, that waddle stops helping speed, and a lower center of mass wins instead. The robot is Pengu, from Naomi Oke, Ben Gu, and Aaron M. Johnson at Carnegie Mellon, with co-authors at New York University. The paper was submitted to arXiv on September 18, 2026.

The machine is 54 cm tall, with a 15 cm hip height, five actuators, and a mass of 2.29 kg once the torso weights are in. The motors are Dynamixel XM430-W350-T units. Two drive crank-sliders that extend the legs about 4 cm. Two run the hips. One rolls the torso. The feet are curved ellipses. A printed penguin shell shows up in the hardware photo for looks. The paper says that shell was not on the robot during the experiments and is not in the dynamics.

<figure>
  <img src="/images/heroes/when-to-waddle-2.png" alt="Grid of six biped poses comparing upright and rolling torso gaits at three center-of-mass ratios" loading="lazy" />
  <figcaption>Upright gait versus torso-over-stance-leg, at three center-of-mass heights. Source: arXiv:2609.21185.</figcaption>
</figure>

They compare two gaits. Gait U holds the torso upright. Gait R aims the torso over the leg that is on the ground. Center of mass is set by stacking titanium and steel in the torso. The ratios they care about are 1.05, roughly human-like, and 1.31, closer to a macaroni penguin. A 1.20 sits between them in simulation.

Hardware ran on UHMW polyethylene at friction coefficient 0.12 and on rubber at 0.45, with motion capture and an external power supply. At 0.12, the high-mass rolling gait (their C6) is the best of the four they measured: forward speed 0.261 ± 0.019 m/s, cost of transport 3.56 ± 0.45, and the lowest sideways foot speed of the set, 0.032 ± 0.015 m/s. The upright low-mass gait on the same sheet does 0.145 ± 0.007 m/s with a cost of transport of 6.41 ± 0.70.

At 0.45 the ranking flips. The two low-mass gaits both sit near 0.107 to 0.108 m/s. The high-mass gaits drop to about 0.044 and 0.043 m/s, and their cost of transport jumps into the mid-20s. Rolling still cuts sideways foot motion. It just does not buy forward speed once the floor has grip. Simulation at friction 0.1 agrees on the direction: more successful controllers, and higher speed, when the torso rolls.

## A Human's Take

The useful sentence is not "penguins are efficient." It is that the same body wants a different gait when mu changes from 0.12 to 0.45. High torso mass and a roll over the stance foot help on plastic. On rubber they mostly make an expensive, slow walk. That is a design rule, not a mascot.

I would not ship the shell. I would ship the result: if your floor is unknown, a fixed upright gait is a bet on friction you may not have. This robot is open-loop sinusoids on a bench, so the next question is whether a controller can notice the slip and switch, instead of a person swapping the gait between sheets.

## Sources

- [arXiv — When to Waddle abstract](https://arxiv.org/abs/2609.21185)
- [arXiv HTML — When to Waddle hardware and results](https://arxiv.org/html/2609.21185v1)
