---
title: "An Origami Arm Shakes a Box to Find the Hidden Weight"
description: "Virginia Tech's soft arm shakes a sealed object, reads the ringdown, and regrasps toward the hidden mass."
pubDate: 2026-09-21
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/shake-to-learn.png"
readTime: "3 min read"
featured: false
draft: false
---

A soft arm at Virginia Tech grabs a closed container, shakes the base once, and reads the wobble to find a weight it cannot see. Wen Sin Lor, Jun Wang, and Suyi Li call the trick shake-to-learn. The arm is origami-inspired and doubles as a physical reservoir computer: the shake is fixed, and the object's hidden mass changes how the arm rings down. A small linear readout turns that motion into a center-of-mass estimate. The paper was submitted to arXiv on September 17, 2026. Lor and Li are at Virginia Tech. Wang is at the University of Michigan.

The arm in their setup photo is a stack of blue folded modules with tendons, bending sensors, an MG996R servo up top, a smaller MG90S at the gripper, and a linear actuator. The payloads sit in 3D-printed crosses and bars so the mass can be parked in a known cell while the outside still looks the same.

<figure>
  <img src="/images/heroes/shake-to-learn-2.png" alt="Blue origami soft arm with sensors, servos, and the containers used to hide a payload" loading="lazy" />
  <figcaption>The arm, the hidden-mass containers, and the ringdown test. Source: arXiv:2609.20970.</figcaption>
</figure>

Three tasks get harder in order. First, which way the hidden center of mass points. With a 100 gram payload, camera tracking of markers gets 44 of 48 leave-one-out trials right. Embedded bending sensors get 78 of 80. Second, how far that mass sits from the grasp. Third, use the estimate on a second grasp. In the illustrated bar, the first grasp is at the geometric center and the bar sits at 43.15 degrees. The arm then bends toward the inferred mass and grasps again.

They also try a shorter "dynamic summary" of the ringdown, early window versus late window, and say it improves the distance prediction. A smaller follow-up, trained on some cells and tested on neighbors, hits 55% exact-cell accuracy against a 14.3% chance level on a seven-cell bar.

## A Human's Take

Kids already do this with a present. The interesting part is that the arm is the sensor. No wrist force-torque fairy, just the way the origami stack keeps moving after a scripted shake. Seventy-eight out of eighty on orientation, with sensors that live in the modules, is the number that makes me lean in.

The regrasp is still a lab bar with a known grid of hiding spots. I want the same shake on a box whose mass is a bag of screws, not a printed puck in cell +4. If the readout survives that, "pick it up and wobble it" becomes a real perception step instead of a demo of a pretty mechanism.

## Sources

- [arXiv — Shake to Learn abstract](https://arxiv.org/abs/2609.20970)
- [arXiv HTML — Shake to Learn figures and results](https://arxiv.org/html/2609.20970v1)
