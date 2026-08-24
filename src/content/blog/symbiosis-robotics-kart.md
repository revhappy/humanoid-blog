---
title: "A Month-Old Startup Puts a Biped in a Go-Kart, One Take"
description: "Symbiosis Robotics’ Direct Perception Control demo has a Unitree-class humanoid climb in, steer, and throttle on a closed track."
pubDate: 2026-08-23
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/symbiosis-robotics-kart.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Symbiosis Robotics, a new embodied-AI shop founded by Zhejiang University and Westlake University doctoral graduate **Ding Pengxiang**, posted a bipedal humanoid driving a go-kart. The robot walks to the seat, puts both hands on the wheel and both feet on the pedals, then runs a closed indoor track. TMTPOST dates the first public drop to **August 17–18**. IT Home says the company website went live the same week.

The company is blunt about what this is not. Karting is not the product. It is a whole-body stress test: vision, multi-contact balance, hand–eye–foot timing, and force on the throttle in one continuous chain.

<figure>
  <img src="/images/heroes/symbiosis-robotics-kart.jpg" alt="A silver-and-white bipedal humanoid standing next to an empty go-kart" loading="lazy" />
  <figcaption>The robot beside the kart before it sits. Source: Symbiosis Robotics demo still circulated by The Humanoid Hub.</figcaption>
</figure>

## Direct Perception Control, not brain-plus-cerebellum

On its research page, Symbiosis names the stack **Direct Perception Control (DPC)**. Most whole-body systems still split a high-level “brain” that outputs a motion goal from a frozen low-level tracker that chases that goal. The company lists three failure modes of that split: the motion interface can drop control-relevant detail, the two stages train on different losses, and the tracker can only emit actions it already learned.

DPC deletes the intermediate motion token. One model maps vision, language, body state, action history, and execution feedback straight to joint and hand targets. **Symbiotic Attention** lets perception and control attend to each other under a shared action objective. **DriftDistill** then exposes the student to drifted states in closed-loop rollouts and distills recovery from a frozen teacher.

IT Home, citing the same report, says the kart run uses a **Unitree** humanoid: right foot on the throttle, a fast right turn before the corner exit.

<figure>
  <img src="/images/heroes/symbiosis-robotics-kart-body.jpg" alt="Overhead view of a humanoid seated in a go-kart on an indoor track, labeled single take" loading="lazy" />
  <figcaption>A later one-take clip, labeled as such in the overlay. Source: Symbiosis Robotics / The Humanoid Hub.</figcaption>
</figure>

## The data claim, and the limits

The DPC write-up converts mixed human and robot logs into **G1-executable, time-aligned joint trajectories**, then scales that set to **15,010 hours**: **6,781** hours of human ego video, **4,024** hours of armed-robot data, **3,660** hours of wheeled-humanoid data, and **545** hours of bipedal-humanoid data.

Qbitai notes the team includes people from BAAI, HKUST, Xiaomi, DAMO, Ant, and Tsinghua, and that Ding’s ReconVLA work won an **AAAI-26** outstanding paper award. The same piece says the kart clip is a stage check, not proof of general driving.

Planned follow-ups on the company page: mobile pick-and-place, constrained loco-manipulation, contact force control, and longer task chains.

## A Human's Take

I’m so here for a first demo that is sit-down-and-drive instead of another hallway walk. Climbing into a tight cockpit is the interesting part; the lap is the receipt. I still want a success rate, a speed, and whether the clip is 1×. Until those show up, treat this as a very cool lab exam, not a race team.

## Sources

- [Symbiosis Robotics — Direct Perception Control Model](https://symbiosis-robotics.com/research/dpc)
- [TMTPOST — Symbiosis Robotics Unveils Humanoid Robot Kart-Driving Demo](https://en.tmtpost.com/news/8107331)
- [IT Home — 机器人自己开卡丁车，共生知行发布人形机器人赛车 Demo](https://www.ithome.com/0/991/055.htm)
- [Qbitai — 共生知行发布人形机器人赛车Demo](https://www.qbitai.com/2026/08/474537.html)
- [The Humanoid Hub — WRC-week one-take kart clip](https://x.com/TheHumanoidHub/status/2091386008793411642)
