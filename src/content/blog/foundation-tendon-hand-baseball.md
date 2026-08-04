---
title: "Foundation’s Tendon-Driven Hand Catches a Baseball Mid-Flight"
description: "Foundation Robotics demos a forearm-motor, tendon-driven hand that cups and catches a baseball, aimed at its Phantom humanoid platform."
pubDate: 2026-08-04
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/foundation-hand.jpg"
readTime: "3 min read"
featured: false
draft: false
---

San Francisco–based **Foundation Robotics** posted a demo of its latest **tendon-driven hand** cleanly catching a baseball in mid-air — a timing-and-grip stunt that showcases hardware more than open-field autonomy. Interesting Engineering covered the clip and the design notes behind it.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/Nhr7ZnFZYkA"
    title="Foundation robotic hand baseball catch demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Tendon-driven hand catching a baseball. Source: Foundation Robotics / YouTube.</p>

## What’s different about the hand

Motors sit in the **forearm**, not the fingers. Flexible tendons route flexion and extension to the joints, keeping the digits slim while still delivering fast close. IE reports a side-to-side finger mechanism so the hand can **cup** spheres or shift into a pinch without swapping end-effectors.

State estimation is hybrid: software predicts finger pose from motor rotation plus a geometric tendon model, while **tunnel magnetoresistance (TMR)** joint sensors refine angles at sub-degree precision and provide redundancy if a sensor drops out. Low-friction tendon routing is called out as critical so commanded motion matches actual closure before the ball rebounds.

<figure>
  <img src="/images/heroes/foundation-hand.jpg" alt="Close-up of Foundation tendon-driven robotic hand with blue tendons" loading="lazy" />
  <figcaption>Forearm-tendon hand hardware close-up. Source: Interesting Engineering / Foundation Robotics YouTube.</figcaption>
</figure>

The company positions the hand for its **Phantom** humanoid industrial platform — a step up from earlier gripper-style end-effectors toward independently actuated fingers. IE notes the throw in the demo is planned in advance; the value of the clip is mechanical bandwidth and grip adaptation, not outdoor baseball AI.

<figure>
  <img src="/images/heroes/foundation-hand-2.jpg" alt="Foundation robotic hand V2 product still" loading="lazy" />
  <figcaption>Foundation hand V2 product still from the demo video. Source: YouTube / Foundation Robotics.</figcaption>
</figure>

## A Human's Take

Catching a ball is a great stress test for tendon latency and contact compliance. I’m not updating my warehouse automation spreadsheet based on one planned throw — but independently actuated, sensor-redundant hands are exactly the hardware layer industrial humanoids keep underspecifying. Show me irregular parts on a moving line next.

## Sources

- [Interesting Engineering — Foundation's tendon-driven robotic hand nails baseball catch in demo](https://interestingengineering.com/ai-robotics/us-foundation-robotic-hand-baseball-catch)
- [YouTube — Foundation Robotics hand demo (Nhr7ZnFZYkA)](https://www.youtube.com/watch?v=Nhr7ZnFZYkA)
- [TechEBlog — Foundation’s Robotic Hand V2 Catches Baseballs Blind](https://www.techeblog.com/foundation-robotic-hand-v2/)
