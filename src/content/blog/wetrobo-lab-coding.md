---
title: "WetRobo Lets a Coding Agent Open Incubators Instead of Training a VLA"
description: "UTokyo and NYU ship a Piper-arm wet-lab kit where Codex writes the motion code and beats a lab-tuned π0.5 on bottle caps."
pubDate: 2026-09-19
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/wetrobo-lab-coding.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A lot of lab-robot papers assume you will collect teleop in *this* room, fine-tune a VLA, and hope the next bench looks the same. **WetRobo** takes the other fork: ship a kit, write an `AGENTS.md`, and let a coding agent look at the cameras and emit Python.

The paper is [arXiv:2609.18435](https://arxiv.org/abs/2609.18435), dated **16 September 2026**. Authors span the **University of Tokyo**, **RIKEN**, **NYU**, **Google DeepMind**, and **NIMS**. Code and demos sit at [github.com/tsudalab/WetRobo](https://github.com/tsudalab/WetRobo). They ran **OpenAI Codex** on **gpt-5.6-sol**.

<figure>
  <img src="/images/heroes/wetrobo-lab-coding.jpg" alt="Blue Piper gripper holding a Petri dish lid on a lab bench" loading="lazy" />
  <figcaption>Wrist-camera view of a lifted Petri lid. Source: Oikawa et al., arXiv:2609.18435.</figcaption>
</figure>

## What is in the box

The kit is one **AgileX Piper** 6-DoF arm (right arm in every trial), head and wrist cameras (iPhone RGB-D through Record3D), and three pieces of gear the authors actually tested:

- **EYELA LTI-300** incubator with a recessed horizontal handle
- **500 mL** Nacalai D-PBS(−) bottle with a white screw cap
- **TPP 93100** Petri dish and lid

Fifteen Quest teleop demonstrations per task ship with the repo. The agent does not have to use them. On the cap task, it did not.

The skill file tells the agent to keep jaws level around open containers, pause for an image check before contact, and measure home poses in the local lab instead of copying another room’s lighting.

## Three tasks, two labs, one VLA that did not travel

Codex lifted a Petri lid, unscrewed a bottle cap, and opened the incubator door on real benches.

The useful comparison is the cap. Lab X and Lab Y differed in gripper (NYU string-driven Dynamixel vs Piper native), camera count, bench color, and lighting. The coding agent succeeded in both. A **π0.5** VLA fine-tuned **100k** steps on **25** Lab X videos succeeded in Lab X and failed in Lab Y.

Token burn was not free. Lab X used **41.4 million** tokens and **1 h 02 min** to first grasp. Lab Y used **23.0 million** tokens and **48 min 43 s**. After the Lab X door program existed, a repeat opening in the same setting took **3 min 27 s**.

<figure>
  <img src="/images/heroes/wetrobo-lab-coding-2.jpg" alt="Wrist-camera strip of a gripper approaching, grasping, and pulling an incubator door open" loading="lazy" />
  <figcaption>Lab X door sequence from the wrist camera. Source: Oikawa et al., arXiv:2609.18435.</figcaption>
</figure>

On the door, the agent stopped trusting shadows, fit a RANSAC plane to RGB-D, and used a **5 mm** proof pull plus aperture checks to tell an empty close (~**0.005**) from a handle hold (**0.3–0.4**). Lab Y’s door trial stopped after a bad head-camera alignment and went home with the door still shut.

The authors are clear about what they did not show: one agent, one model, successive attempts rather than independent replications, lid lift not dish transport, and a lot of tokens.

## A Human's Take

I like this because the failure mode is readable. When the VLA eats a new bench, you get a shrug. When Codex misses the cap, you get a file that tried optical flow, then a wrist-hold, then an effort reading of **−1.05 N·m** against an empty close of **−0.1 to −0.2**. That is a lab notebook, not a checkpoint. The bill is the million-token first grasp. If `AGENTS.md` actually accumulates across labs, this becomes a kit. If every install burns another 40 million tokens, it is a demo with a GitHub URL.

## Sources

- [arXiv:2609.18435 — WetRobo: A Reproducible Robot Kit for Coding Agents in Biological Laboratories](https://arxiv.org/abs/2609.18435)
- [arXiv HTML — full paper and figures](https://arxiv.org/html/2609.18435v1)
- [GitHub — tsudalab/WetRobo](https://github.com/tsudalab/WetRobo)
