---
title: "ZEST Puts Army Crawls and Breakdances on Atlas, Zero-Shot"
description: "RAI Institute and Boston Dynamics train one motion-imitation recipe from MoCap, video, and animation, then drop it on Atlas, G1, and Spot."
pubDate: 2026-08-18
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/zest-humanoid.jpg"
readTime: "5 min read"
featured: false
draft: false
---

RAI Institute and Boston Dynamics put a single motion-imitation recipe on three very different machines: electric **Atlas** (~1.8 m, 100 kg, 30 DoF), **Unitree G1** (~1.2 m, 35 kg, 29 DoF), and **Spot** (12 DoF, 33 kg). The paper, **ZEST** (Zero-shot Embodied Skill Transfer), is the cover story of the August 2026 *Science Robotics* humanoid issue. Policies train in simulation and run on hardware with no extra fine-tuning.

On Atlas, motion capture becomes army crawls, breakdancing, cartwheels, and forward rolls. Phone video becomes soccer kicks, dance snippets, and box climbs on Atlas and G1. Keyframe animation gives Spot a continuous backflip and a barrel roll.

<figure>
  <img src="/images/heroes/zest-humanoid.jpg" alt="Collage of Atlas, G1, and Spot performing crawls, cartwheels, box climbs, and backflips" loading="lazy" />
  <figcaption>Hardware stills from MoCap, video, and animation. Source: Sleiman et al., arXiv:2602.00401.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/CXyIXiT4zhA"
    title="ZEST hardware results across Atlas, G1, and Spot"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Summary of the ZEST pipeline and hardware skills. Source: Sleiman et al. / YouTube.</p>

## One recipe, three data pipes

ZEST trains a feedforward policy on the next-step reference plus current proprioception. It outputs residual joint targets for a PD controller. The authors skip contact labels, long observation histories, future-reference windows, and a state estimator.

Two training tricks do most of the work:

- **Adaptive sampling:** clips are split into bins; hard segments get more resets
- **Assistive wrench:** a model-based base wrench that starts strong on wild motions and anneals to zero

Each specialized policy took about **10 hours** (~7,000 iterations) on one NVIDIA L4. The paper also describes simplified models of Atlas’s parallel-linkage actuators so Isaac Lab can run those closed-chain joints without paying full closed-loop cost.

<figure>
  <img src="/images/heroes/zest-humanoid-3.jpg" alt="ZEST pipeline from MoCap, video, and animation through adaptive sampling to hardware" loading="lazy" />
  <figcaption>MoCap, video, and animation feed one MDP. Source: Sleiman et al., arXiv:2602.00401.</figcaption>
</figure>

## What actually ran

Interesting Engineering, covering the *Science Robotics* issue, repeats the hardware list: crawling, rolls, cartwheels, and breakdance on Atlas; dancing, soccer kicks, and box climbing from video; backflip and barrel roll on Spot from animation. The paper reports tracking errors per skill. Walk and jog on Atlas stay tighter than the multi-contact set. Box climb-up on G1 succeeded five times in a row at the 0.75 m training height and still worked with a 2 kg torso payload.

In simulation, a multi-skill Atlas policy beat Boston Dynamics’ whole-body MPC on jog and cartwheel. MPC could not run handstand invert, roll-on-all-fours, or a noisy dance clip because those contacts sit outside its foot-and-hand schedule.

Limits are stated plainly: flat, non-slippery terrain; no test of unseen motions; sim-to-real still depends on a decent actuator model.

## A Human's Take

The interesting part is not another backflip clip. It is that the same small MDP ran army crawl on a 100 kg Atlas and a video-to-box-climb on a G1 without a contact schedule. That is the thing model-based stacks still choke on.

I still want the unedited failure log. Ten hours per specialized skill is cheap by lab standards and expensive if you need a library of a hundred. If they can make the multi-skill policy as consistent as the single-skill ones, this starts looking like a real behavior factory.

## Sources

- [arXiv:2602.00401 — ZEST: Zero-shot Embodied Skill Transfer for Athletic Robot Control](https://arxiv.org/abs/2602.00401)
- [arXiv HTML — full paper, figures, and hardware table](https://arxiv.org/html/2602.00401v1)
- [Interesting Engineering — humanoids learn complex movements](https://interestingengineering.com/ai-robotics/humanoid-robot-master-complex-movements)
- [YouTube — ZEST hardware summary](https://www.youtube.com/watch?v=CXyIXiT4zhA)
