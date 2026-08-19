---
title: "PRISM Puts Force and Tactile Into 5,000 Industrial Robot Trajectories"
description: "Peking University’s open PRISM dataset logs 45 hours of contact-rich factory skills across Franka, Realman, and LEJU platforms."
pubDate: 2026-08-19
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/prism-industrial.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Household robot datasets are full of pick-and-place. Factory work is plugs, bearings, and parts that jam if the force is off by a little. **PRISM**, from Peking University, Delta Intelligence, and partners, is an open multimodal set aimed at that gap: **more than 5,000** teleoperated robot trajectories, **about 45 hours**, across **more than 25** industrial tasks.

Each robot episode is paired with a human demonstration. The project page puts the image count at **~27 million** across vision and visuotactile streams.

<figure>
  <img src="/images/heroes/prism-industrial.jpg" alt="PRISM dataset overview with multi-robot platforms, multimodal sensing, and industrial tasks" loading="lazy" />
  <figcaption>PRISM overview: multi-robot, multi-view, force, and tactile coverage. Source: Yu et al., arXiv:2608.17962.</figcaption>
</figure>

## What is in the bag

The paper lists synchronized **multi-view RGB-D**, **six-axis force/torque**, robot state, and tactile on a subset. Hardware is mixed on purpose:

- **Franka** arms with tracker teleop, including a visuotactile gripper and a visuotactile dexterous hand  
- **Realman** RM75-6F bimanual torso (17 DoF with a 3-DoF waist) via exoskeleton  
- **LEJU** upper-body humanoid via VR, with a Robotiq-85

Eight volunteers collected the demos after standardized training, then filtered and scored their own episodes. Teleop modes are **exoskeleton, tracker, and VR**. Tasks include NIST Assembly Task Board work plus production-style jobs: electronic plug/unplug, vernier-caliper packaging, conveyor sorting, bearing install, automotive sorting.

<figure>
  <img src="/images/heroes/prism-industrial-2.jpg" alt="Three PRISM teleoperation setups: exoskeleton, tracker-based Franka, and VR on a LEJU humanoid" loading="lazy" />
  <figcaption>Collection platforms: exoskeleton, tracker, and VR. Source: Yu et al., arXiv:2608.17962.</figcaption>
</figure>

The authors package the logs in **LeRobot v3.0** format.

## Do the extra hours help?

They pretrain ACT, Diffusion Policy, and **π0** on the full 5,000-trajectory set, then fine-tune on 100 or 200 task demos and evaluate **20** real-robot episodes per setting on the Realman cell.

The prose result is blunt: more task demos help, and pretraining on the full set helps more. π0 trained on **200** exoskeleton demos is the strong case in their table — **80%** on caliper packaging and **75%** on conveyor sorting, versus much lower rates from VR-collected data on the same tasks. Electronic plug/unplug stays hard. Conveyor sorting fails on timing. Plug/unplug fails on force: jams, excess contact, micro-corrections that do not settle in the **30-second** cap.

VR operators, they write, see the scene mostly through 2D renders and produce noisier contact. Exoskeleton traces match the robot’s joints better.

<figure>
  <img src="/images/heroes/prism-industrial-3.jpg" alt="Realman bimanual robot at a workcell for plug/unplug and conveyor sorting" loading="lazy" />
  <figcaption>Real-world eval cell: plug/unplug and conveyor sorting. Source: Yu et al., arXiv:2608.17962.</figcaption>
</figure>

## A Human's Take

I am glad someone is logging wrench and tactile on factory-shaped tasks instead of another kitchen pick. The result I will remember is the teleop gap: same task, VR demos train a worse policy than an exoskeleton. If you are buying hours of industrial data, the interface is part of the dataset.

The policies still miss on the two things factories care about — timing on a moving belt and force on a tight insert. PRISM does not fix that. It just makes the miss measurable.

## Sources

- [arXiv:2608.17962 — PRISM HTML](https://arxiv.org/html/2608.17962v1)
- [PRISM project page](https://tengbo-yu.github.io/PRISM/)
