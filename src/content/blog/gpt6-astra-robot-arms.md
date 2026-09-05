---
title: "GPT-6 Astra Drops a Block in a Bowl 19 Times in 20. The Puzzle Still Stalls"
description: "RoboCurve ran OpenAI’s GPT-6 Astra on dual I2RT YAM arms. Gross pick-and-place is cheap and fast. Millimeter insertion is still 2 of 20."
pubDate: 2026-09-05
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/gpt6-astra-robot-arms-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**RoboCurve** posted hardware numbers for **GPT-6 Astra** on **4 September**. Same agent policy, same two tasks, dual **I2RT YAM** arms: put a red block in a bowl, and seat a round puzzle piece by its knob into a matching groove.

The bowl is the headline. Astra finished **19 of 20**. Anthropic’s **Claude Fable 5.1** was **8 of 20**. **Fable 5** was **1 of 20**. Mean time **2.5 minutes** vs **6.8** and **8.2**. Estimated list-price cost **$0.94** per run vs **$2.12** and **$2.69**. Output tokens **2.1k** vs **12.9k** and **19.2k**.

The puzzle is the hangover. Astra **2 of 20**. Fable 5.1 **2 of 20**. Fable 5 **0 of 20**. Astra still gets there faster and cheaper (**3.4 min**, **$1.36**), then dies at the last press.

<figure>
  <img src="/images/heroes/gpt6-astra-robot-arms-2.jpg" alt="Cost-vs-success scatter next to overhead and wrist views of YAM arms moving a red letter block toward a white bowl" loading="lazy" />
  <figcaption>Bowl-task comparison still from RoboCurve’s Astra vs Fable 5.1 video. Source: RoboCurve.</figcaption>
</figure>

## How the bench is wired

The [RoboCurve write-up](https://openai.robocurve.org/gpt-6-astra/) is specific:

- **Embodiment**: bimanual I2RT YAM, 6-DoF per arm, parallel-jaw grippers
- **Command**: absolute end-effector poses (`move_to`) plus gripper; onboard IK
- **Observation**: top camera, left wrist, right wrist, proprioception
- **Policy**: Inspect Robots `agent`, medium thinking, 20 LLM-call budget, 25% speed cap
- **Scoring**: human grader, stages 0–4 (no approach through seated)

Astra’s mean stage on the bowl is **3.95**. On the puzzle it is **2.00**. The write-up says it consistently reaches the groove (stage 3) and then hesitates or misaligns the press.

[Humanoids Daily](https://www.humanoidsdaily.com/news/openai-s-gpt-6-astra-hits-95-on-physical-manipulation-benchmark-but-precision-tasks-expose-familiar-bottlenecks) repeats those counts and notes Inspect Robots as the open harness (GitHub: robocurve/inspect-robots).

<figure>
  <img src="/images/heroes/gpt6-astra-robot-arms.jpg" alt="Scatter of completion rate versus API cost beside robot-arm video feeds of the block-in-bowl task" loading="lazy" />
  <figcaption>Humanoids Daily’s composite of the RoboCurve bowl comparison. Source: Humanoids Daily / RoboCurve.</figcaption>
</figure>

## Caveats they printed themselves

RoboCurve lists the holes. Puzzle trials shared **rig-4**. Bowl trials did not: Fable ran on **rig-3**, Astra on **rig-1** because rig-3 was down. Astra’s runs were **two days later**, not interleaved. Graders knew the model. Costs are list price; OpenAI cached about a fifth of Astra’s input, so Astra’s dollar figure is, if anything, high.

That is enough to keep me from treating 95% as a factory number. It is still a clean gap on the easy task and a clean tie on the hard one.

## A Human's Take

Gross pick-and-place is becoming a language-model parlor trick. The groove is not. If your policy cannot feel the last millimeter, it will look brilliant on a bowl and helpless on a peg. I would run this bench again interleaved, on one rig, with a tactile channel in the loop. Until then, Astra is a fast, cheap kinematic clerk. It is not a fitter.

## Sources

- [RoboCurve — GPT-6 Astra on robotic manipulation (4 Sep 2026)](https://openai.robocurve.org/gpt-6-astra/)
- [Humanoids Daily — Astra 95% bowl, 10% puzzle](https://www.humanoidsdaily.com/news/openai-s-gpt-6-astra-hits-95-on-physical-manipulation-benchmark-but-precision-tasks-expose-familiar-bottlenecks)
- [GitHub — robocurve/inspect-robots](https://github.com/robocurve/inspect-robots)
