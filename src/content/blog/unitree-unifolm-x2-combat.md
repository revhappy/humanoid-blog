---
title: "Unitree’s G1 Spars Without a Teleoperator"
description: "Unitree demos UnifoLM-X2-1.0, a world-action model that lets a G1 punch, kick, and slip a padded human partner with no VR or gamepad in the loop."
pubDate: 2026-09-08
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/unitree-unifolm-x2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Unitree Robotics posted a G1 humanoid sparring a padded human partner with **no VR headset and no gamepad**. The model is **UnifoLM-X2-1.0**. The company dated the clip **7 September 2026** and billed it as the first real-time world-model-driven fully autonomous humanoid combat.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/qkIJELDgULA"
    title="Unitree UnifoLM-X2-1.0 autonomous humanoid combat"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">G1 in red gloves against a trainer in body and thigh pads. Source: Unitree Robotics / YouTube.</p>

## What the clip shows

The official YouTube description says UnifoLM-X2-1.0 is meant to break world-action models’ bottlenecks in instant planning, decision-making, and dynamic interactive execution: high dynamics, strong interaction, real-time prediction of the near future, then fully autonomous combat.

In the footage, the G1 adjusts stance and footwork, slips incoming strikes, and throws punches and kicks. Overlays labeled for predictive modeling show projected opponent motion before the joints commit. Humanoids Daily and Interesting Engineering both describe the same loop: perceive, predict how the scene will change, plan, act — instead of translating a human’s body or stick inputs.

This sits on Unitree’s UnifoLM family. Earlier public pieces in that line include factory-manipulation **UnifoLM-X1-0** and multimodal **UnifoLM-OminiA-0.3**. Interesting Engineering notes the open-source **UnifoLM-WMA-0** world-action work from 2025 as a precursor; X2-1.0 is the combat demo, not a new paper with latency tables.

<figure>
  <img src="/images/heroes/unitree-unifolm-x2-yt.jpg" alt="Unitree G1 kicking in a ring with world-model overlay graphics" loading="lazy" />
  <figcaption>Official video still with the world-model overlay. Source: Unitree Robotics / YouTube.</figcaption>
</figure>

## What the logs give away

Humanoids Daily and Interesting Engineering both flag console text in the video: `[PolicyServer] OBS/replan` and `EXEC env.step`. That reads as a client-server policy pipeline — observations off the robot, rollouts on a server, commands back. Unitree has not published onboard vs offboard compute, latency numbers, or a paper for X2-1.0.

The partner is a compliant trainer presenting pads, not an opponent trying to dump the robot. Unitree attached a safety note: keep a **2-to-3-meter** buffer and do not run unvetted experiments. AlphaSignal’s recap is blunt that open-sourcing of X2-1.0 is unconfirmed.

Unitree’s line is that if a world model can take contact and rebalance in a ring, the same predictive stack is a step toward unstructured work. That is a hypothesis, not a factory log.

## A Human's Take

I like that they cut the teleop tether in a contact sport instead of another tidy pick-and-place. I will like it more when the policy server is gone, the opponent is not cooperating, and someone publishes how many milliseconds sit between “I see a punch” and “I move a foot.” Until then this is a very good fight clip with a world-model overlay.

## Sources

- [Unitree Robotics — UnifoLM-X2-1.0 autonomous combat (YouTube)](https://www.youtube.com/watch?v=qkIJELDgULA)
- [Humanoids Daily — UnifoLM-X2 world model powers autonomous robot combat](https://www.humanoidsdaily.com/news/unitree-unveils-unifolm-x2-world-model-ai-powers-fully-autonomous-robot-combat)
- [Interesting Engineering — G1 spars autonomously with UnifoLM-X2-1.0](https://interestingengineering.com/ai-robotics/humanoid-robot-learns-to-fight-autonomously)
- [Unitree — announcement post on X](https://x.com/UnitreeRobotics/status/2096932273602048258)
