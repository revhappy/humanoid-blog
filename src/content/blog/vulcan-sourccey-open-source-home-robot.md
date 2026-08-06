---
title: "Vulcan’s Sourccey: Open-Source Home Robot for $1,999 and LeRobot Workflows"
description: "Vulcan Robotics’ Sourccey is a 1.03 m wheeled dual-arm platform with open hardware, Pi 5 compute, and an August–September 2026 ship path."
pubDate: 2026-08-06
category: "Deals"
author: "Shar Hendrix"
heroImage: "images/heroes/vulcan-sourccey.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Vulcan Robotics** is putting a price and a parts list on a personal home robot aimed at builders, not demo stages. **Sourccey** is a wheeled dual-arm platform the company bills as open-source for physical AI development, with public launch timing set for August 2026 and first ships planned for September.

<figure>
  <img src="/images/heroes/vulcan-sourccey.jpg" alt="Sourccey black and green wheeled dual-arm robot on a rooftop terrace" loading="lazy" />
  <figcaption>Sourccey on a rooftop: dual arms, wheeled base, camera head. Source: Vulcan Robotics product specs.</figcaption>
</figure>

## What ships on the spec sheet

The company site and specs page list a concrete stack:

- **Height / mass**: about **1030 mm** tall, **15.88 kg**, footprint about **414 mm** diameter
- **Mobility**: four **mecanum** wheels (omnidirectional), **60 rpm** max, open-loop PWM
- **Arms**: **5 DoF + gripper** per arm (six revolute joints), Feetech smart serial servos
- **Compute**: **Raspberry Pi 5**, 7-inch touchscreen, 120° FOV cameras, 2D LiDAR
- **Power**: **12V 10Ah LiFePO4** battery (company notes up to ~5000 cycles)

Public GitHub repos cover hardware, electrical, desktop software, and a **LeRobot-compatible** fork (`lerobot-vulcan`). The roadmap on vulcanrobotics.ai sequences open-source launch in **August 2026**, initial shipping in **September 2026**, SLAM tooling later in 2026, autonomous integrations in **early 2027**, and a **2028** target for full autonomy on core household tasks.

<figure>
  <img src="/images/heroes/vulcan-sourccey-2.jpg" alt="Sourccey side view showing arm reach and wheeled chassis dimensions" loading="lazy" />
  <figcaption>Physical layout and arm reach notes from the specs page. Source: Vulcan Robotics.</figcaption>
</figure>

## Price and what it is (and is not)

Secondary coverage summarizing the launch (RoboIndex, Aug 6) puts the platform at **$1,999**, with arm payloads described as low-torque work around **1–3 kg**. That framing matches how Vulcan presents Sourccey: a **data-collection and teleop platform** for laundry, table setting, and cleaning experiments — not a finished housekeeper.

Teleoperation uses dedicated Feetech arm hardware or Oculus Quest IK mapping. Training data is stored as video plus parquet motor logs with JSON metadata. The company lists starter AI micromodels for folding common garments (T-shirts, shorts, jeans/pants, long shirts) under an “XVLA” stack, with heavier training intended to run on a host machine rather than only on-robot.

<figure>
  <img src="/images/heroes/vulcan-sourccey-3.jpg" alt="Sourccey vision system diagram with head and wrist cameras" loading="lazy" />
  <figcaption>Vision layout: fixed head cameras and end-effector mounts. Source: Vulcan Robotics specs.</figcaption>
</figure>

## A Human's Take

I’m so here for a sub-$2k dual-arm base with public STLs and replaceable servos. That is how you get more hands collecting home data. Just keep the roadmap honest: open CAD and LeRobot hooks are real today; “full autonomy by 2028” is a target, not a receipt. If the first batch ships in September with working teleop and open parts, Sourccey earns its place next to the hobby bipeds — as a home manipulation workbench, not a butler.

## Sources

- [Vulcan Robotics — Sourccey home page](https://vulcanrobotics.ai/)
- [Vulcan Robotics — Sourccey specifications](https://vulcanrobotics.ai/specs)
- [Vulcan Forge — Sourccey desktop (GitHub)](https://github.com/vulcan-forge/sourccey-desktop)
- [Vulcan Forge — LeRobot-Vulcan fork (GitHub)](https://github.com/vulcan-forge/lerobot-vulcan)
