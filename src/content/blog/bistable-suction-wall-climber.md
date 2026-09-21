---
title: "Bistable Suction Cups Let a Small Robot Tow 7.9 kg Up the Wall"
description: "A University of Michigan climber sticks with passive bistable cups and tows 7.940 kg on glass, wood, metal, and paint."
pubDate: 2026-09-21
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/wall-climb-bistable.jpg"
readTime: "3 min read"
featured: false
draft: false
---

A tracked robot from the University of Michigan climbs glass, wood, steel, and painted drywall, moves sideways across a whiteboard, and drives on the underside of a lab bench. Andrew Nguyen, Mingyuan Li, and Daniel Bruder get the stick from passive bistable suction cups that do not have to be mashed flat against the wall to seal. The paper, noted as ICRA 2026 work, was submitted to arXiv on September 18. A project page hosts the clip.

The cups have two stable shapes, popped in and popped out. Flipping into the sealed shape takes a shove. Staying sealed does not take power. A track on the robot engages each cup, holds it, then breaks the seal and flips it back as the tread comes around. The robot itself is 524 by 200 by 161 mm and weighs 3.532 kg. Climbing speed in their spec table is 11.5 cm/s. The drive is a 12 V motor on an external 12 V supply, so this prototype is still on a tether for power.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/xeWG5IHMbxI"
    title="University of Michigan bistable suction-cup wall climber"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">The climber on vertical and inverted surfaces. Source: project page / YouTube.</p>

<figure>
  <img src="/images/heroes/wall-climb-bistable-3.jpg" alt="Purple bistable suction cup on a test stand at two application distances" loading="lazy" />
  <figcaption>Pull-off tests compare the bistable cup with a standard PVC cup as the gap to the wall changes. Source: arXiv:2609.21584.</figcaption>
</figure>

The payload line is the one they lead with. The robot tows 7.940 kg, a payload-to-weight ratio of 2.25. Their photo set shows that load on a steel door, plus the upside-down pass under the bench and a sideways wipe on a whiteboard. In the cup comparison, a standard clear PVC cup loses pull-off force once the application distance passes 6 mm, because it no longer reaches the surface. The deeper bistable cup is built to seal without that full squash.

## A Human's Take

Passive grip is the right argument against a vacuum pump that has to stay on just so the robot does not fall off. A 2.25 payload ratio on a 3.5 kg machine is a real mechanical result, and the upside-down bench shot is the one I trust more than a spec table.

The external 12 V lead is the part I will not talk past. A climber that still drags a power cable is a mechanism demo, not a window washer. Cut the tether, keep the cups, and then tell me the hang time. Until then, the interesting object is the cup, not the track.

## Sources

- [arXiv — High-payload wall-climbing robot abstract](https://arxiv.org/abs/2609.21584)
- [arXiv HTML — wall climber specifications and figures](https://arxiv.org/html/2609.21584v1)
- [Project page — bistable suction-cup wall climber](https://bistable-suction-cup-wall-climbing.github.io/)
- [YouTube — climber demo linked from the project page](https://www.youtube.com/watch?v=xeWG5IHMbxI)
