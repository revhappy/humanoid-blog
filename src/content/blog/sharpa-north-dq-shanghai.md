---
title: "Sharpa North Starts Blizzard Shifts at a Shanghai Dairy Queen"
description: "Sharpa’s North humanoid opened at DQ’s Wujiang Road store on Aug 29, running a 55-step Blizzard on the shop’s existing gear."
pubDate: 2026-08-29
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/sharpa-north-dq.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**Sharpa** put its wheeled humanoid **North** behind the counter at Dairy Queen’s **Wujiang Road** store in Shanghai on **29 August 2026**. Securities Times reports the robot restaurant opened that day, with North running a **55-step** Blizzard sequence from order through pour. Sharpa’s own deployment page says each order is **50 to 60** consecutive manipulation steps, done end to end without cuts.

The point of the pilot is the kitchen, not a custom cell. The company says North uses the store’s existing equipment, ingredients, and process, unmodified. Hours are **10:00 to 22:00**. Vision, touch, and force feedback handle cup pickup, toppings, blending, and the signature upside-down flip, with the robot correcting itself when a step drifts.

<figure>
  <img src="/images/heroes/sharpa-north-dq-2.jpg" alt="Sharpa North at a Dairy Queen blender, holding a paper cup under the mix head" loading="lazy" />
  <figcaption>North blending a Blizzard on stock DQ hardware. Source: Sharpa.</figcaption>
</figure>

## What the shift actually asks for

Sharpa’s North-at-work page breaks the Blizzard into contact problems a gripper usually ducks:

- **Metal ring on a paper cup**: thumb and index hold the ring against the cup through the blend. Force feedback sets grip so the cup does not crush.
- **Cabinet handle**: a standard narrow handle, not retrofitted. The hand has to be close to human size and shape to open it.
- **Oreo toppings**: three scoops per the SOP. Each scoop looks the same, so the policy has to remember where it is in the sequence instead of waiting for the scene to change.
- **Upside-down flip**: tactile grip, not teleop. Sharpa says no teleoperation device it has can do this move; North has to run it autonomously.

The stack named on that page is a latent world model for next-state prediction, **CraftNet** as a vision-language-action controller, and a “System 0” reflex loop for contact-rich grasp force.

<figure>
  <img src="/images/heroes/sharpa-north-dq-4.jpg" alt="Sharpa North’s metal hand lifting a topping-bin lid at a Dairy Queen station" loading="lazy" />
  <figcaption>Hand on a stock topping lid. Source: Sharpa.</figcaption>
</figure>

## The company behind the apron

Securities Times, citing Sharpa’s 28 August disclosure, says the company has raised more than **4.5 billion yuan** in total, with Alibaba, Meituan, Tencent, JD.com, and Transsion among industrial backers, plus Sequoia China, Qiming, and Meituan Longzhu. TechFlow, citing LatePost, puts the post-money valuation at **22 billion yuan**. Sharpa was founded in late 2024 by Hesai CEO **Li Yifan**, CTO **Xiang Shaoqing**, and chief scientist **Sun Kai**. It is run separately from Hesai; Hesai’s interim report says it supplies power modules.

The first product was **SharpaWave**, a **22-DoF** tactile hand that Securities Times says entered mass production in October 2025. North is the wheeled whole-body robot. Li told the paper that commercialization means finishing complex work in an unmodified, live store, not a rebuilt kitchen.

> “The key to robot commercialization is completing complex work over the long term, fully autonomously, in a real environment with zero modification,” Li said, per Securities Times.

The same disclosure says the new capital is for core tech, hiring, and moving general-purpose robots from lab validation into the real world. Home use is framed as a later step, from **2028**.

## A Human's Take

A 55-step ice-cream SOP on stock Dairy Queen gear is a better test than another warehouse tote clip. Cups deform, mixers fight you, and the room is full of customers. If North can hold a paper cup through a blend and still flip the Blizzard, that is a real contact loop. I still want hours, drop rate, and what a human does when the line gets busy. The funding headline is loud. The blender is the part I am watching.

## Sources

- [Sharpa — North at Work](https://www.sharpa.com/pages/north-at-work)
- [Securities Times — internet platforms back Sharpa; DQ Wujiang Road store](https://www.stcn.com/article/detail/4161509.html)
- [TechFlow — Sharpa raises over 4.5 billion yuan](https://www.techflowpost.com/en-US/newsletter/133947)
- [Phemex News — Sharpa funding and 22 billion yuan valuation](https://phemex.com/news/article/sharpa-discloses-over-620-million-in-funding-at-22-billion-yuan-valuation-94835)
