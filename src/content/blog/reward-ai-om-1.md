---
title: "Reward AI’s OM-1 Learns From a Glove, Not From Robot Teleop"
description: "Stanford DexCap spinout Reward AI says OM-1 trains only on human mocap and runs zero-shot on arms and humanoids."
pubDate: 2026-09-15
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/reward-ai-om-1-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Reward AI** came out of stealth on September 14 with **OM-1**, a robot policy the company says is trained only on human manipulation data. No teleoperation. No on-robot experience. The same model is supposed to run on tabletop arms, industrial manipulators, and humanoids.

The hardware in the loop is **Omnibody Hand**, a wearable 7-DoF capture device built on the team’s Stanford **DexCap** work (RSS 2024, Chen Wang, C. Karen Liu, Li Fei-Fei and colleagues). People wear the glove and work at their own speed. OM-1 learns the motions and, Reward AI claims, picks up a new long-horizon task from less than **30 minutes** of that data.

<figure>
  <img src="/images/heroes/reward-ai-om-1-2.jpg" alt="Humanoid with Omnibody Hands sorting items on a conveyor table, labeled fully autonomous 1x speed" loading="lazy" />
  <figcaption>OM-1 on a biped, conveyor sort at 1x. Source: Humanoids Daily / Reward AI.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/IJvyS2aPsnA"
    title="Reward AI OM-1 introduction"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">OM-1 launch reel: glove capture, cross-embodiment arms, humanoid tasks. Source: Reward AI / YouTube.</p>

## A 7-DoF glove, not a 22-DoF copy

Omnibody Hand is built around functions, not a joint-for-joint human copy:

- Thumb and index flexion for pinch and in-hand reorient
- Middle, ring, and little fingers moving together at the MCP joints for power grasps
- A distal flexion mechanism so different finger lengths do not need per-user link tweaks

The data layer pairs high-frequency tactile arrays, proximity sensors, and global-shutter in-hand cameras with hybrid tracking. Visual-inertial pose is augmented with electromagnetic sensing. On a two-stop overshoot test at eight speeds, Reward AI reports a **60%** drop in mean overshoot at the highest speed, from **24.9 mm** to **9.5 mm**.

OM-1 eats those streams at each sensor’s native rate instead of downsampling everything to one clock, then outputs motion direction, speed, force, and grasp timing.

<figure>
  <img src="/images/heroes/reward-ai-om-1.jpg" alt="Diagram of OM-1 taking images, tactile, proximity, and poses from a wearer and outputting actions for humanoids and arms" loading="lazy" />
  <figcaption>One data interface into OM-1, actions out to many bodies. Source: Reward AI OM-1 blog.</figcaption>
</figure>

## Control on its own clock

Under the policy sits a high-frequency control layer trained with RL in simulation. Reward AI says it absorbs delays, backlash, and unexpected loads so the transformer does not have to finish the next chunk before the robot can keep moving. The fridge demo is the example: pulling a closed door without knowing how hard it will fight.

Demos on the blog and in Humanoids Daily’s write-up include RJ-45 unlatching, laundry folding, bartending, phone packaging, and a humanoid reaching into a refrigerator. Co-founder and CTO **Chen Wang** posted that the transfer across robots, without robot data or per-robot fine-tuning, is the part he cares about.

<figure>
  <img src="/images/heroes/reward-ai-om-1-3.jpg" alt="Humanoid reaching into an open refrigerator to grab a bottle from a door shelf" loading="lazy" />
  <figcaption>OM-1 humanoid at a fridge. Source: Humanoids Daily / Reward AI.</figcaption>
</figure>

## A Human's Take

Training only on people wearing a glove is a clean bet: if the mapping holds, you stop paying for teleop farms. I want to see the same Ethernet-tab unlatch on a robot that was not in the launch reel, timed against a human, with the misses left in. Thirty minutes per new task is a number I will remember. The control layer is the part that has to keep it from looking great at 1x on camera and jittery on a real shift.

## Sources

- [Reward AI — OM-1 blog](https://www.rewardai.com/blog/OM-1/)
- [Humanoids Daily — Reward AI Exits Stealth with OM-1](https://www.humanoidsdaily.com/news/reward-ai-exits-stealth-with-om-1-pitching-zero-shot-human-to-robot-manipulation)
- [Reward AI OM-1 — YouTube](https://www.youtube.com/watch?v=IJvyS2aPsnA)
