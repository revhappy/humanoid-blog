---
title: "Perceptron Opens Isaac 0.5, a 36B Robot Model"
description: "Ex-Meta FAIR researchers released Isaac 0.5: 36 billion parameters, 35 robot systems, open weights, and a scaling law that trades video for teleop."
pubDate: 2026-09-02
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/perceptron-isaac.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Perceptron AI** released **Isaac 0.5**, a **36-billion-parameter** sparse model that reads images, video, language, robot state, and previous actions, then answers questions, points at objects, estimates task progress, or outputs robot actions. The company blog is dated 26 August. Weights, a technical report, and LeRobot-side training and inference code are public.

The training mix, from the blog and Hugging Face model card: more than **35** robot systems, **100,000 hours** of robot experience, **1 million hours** of general video, and **3 trillion** multimodal tokens. Video understanding, spatial grounding, task progress, future-percept prediction, and control were co-trained on one backbone.

<figure>
  <img src="/images/heroes/perceptron-isaac.jpg" alt="Diagram of Isaac 0.5 from source families through mHarmony packing to a shared backbone and control interfaces" loading="lazy" />
  <figcaption>Isaac 0.5 architecture: shared backbone, FAST tokens, and a Flow expert. Source: Perceptron / Hugging Face.</figcaption>
</figure>

## The scaling law they want you to use

Holding an **80:30:30** mix of general video, egocentric video, and UMI data, Perceptron scaled pre-training and measured held-out action-prediction loss. To hit a calibrated loss of **2.50**:

- **1,000 hours** of general video needed about **5,900 hours** of teleoperation
- **1 million hours** of video needed about **28 hours** of teleop

That is the **210×** figure in the announcement. Cheap video, in this plot, buys down expensive robot time.

<figure>
  <img src="/images/heroes/perceptron-isaac-2.jpg" alt="Contour plot of general-video hours versus teleoperation hours with a 210x label at loss 2.50" loading="lazy" />
  <figcaption>Video hours vs teleop hours at a fixed action-loss target. Source: Perceptron / Hugging Face.</figcaption>
</figure>

The model card also lists two action interfaces off the same backbone: **FAST** tokens (2,048-token discrete vocabulary) and a **Flow** expert with a 36-block diffusion transformer for continuous chunks. Mixture-of-experts layers give each token access to **256** learned experts plus a null route.

## What other outlets added

TechCrunch’s 26 August piece names the founders: **Armen Aghajanyan** and **Akshat Shrivastava**, formerly of Meta FAIR. The company started in November 2024. PitchBook, via TechCrunch, puts a prior round at **$21 million** from Bessemer, Foundation Capital, and S32, with another round in process.

The AI Insider, citing Perceptron’s Business Wire announcement, reports a **97.2%** average on **LIBERO**, against **97.0%** for NVIDIA GR00T N1.7 and **96.9%** for π0.5 in Perceptron’s comparison table. After one epoch on a single expert chess-manipulation episode, Isaac’s loss dropped **7.0× to 10.5×**; π0.5 was **2.3× to 3.1×**. Those LIBERO numbers are the company’s table, not an independent bake-off I re-ran.

Aghajanyan, in that announcement:

> “Companies need a model that performs at the frontier, learns a new task quickly and adapts to their hardware. Isaac gives them a strong, open starting point, and our team is working alongside our customers to bring it into real operations.”

## A Human's Take

Open weights plus a data-mix plot is more useful than another closed VLA teaser. The 210× teleop claim is the one to stress-test: if a million hours of random video really collapses robot-hours that hard, labs with a camera budget just got a recipe. If LIBERO is saturating at 97% for everyone in the table, the interesting number is the one-demo chess drop, not the leaderboard. I’ll believe the industrial pitch when someone fine-tunes this on a warehouse arm that is not in the 35-system list.

## Sources

- [Perceptron — Introducing Isaac 0.5](https://www.perceptron.inc/blog/introducing-isaac-0-5)
- [Hugging Face — PerceptronAI/Isaac-0.5](https://huggingface.co/PerceptronAI/Isaac-0.5)
- [TechCrunch — Ex-Meta scientists want to bring visual AI to the factory floor](https://techcrunch.com/2026/08/26/ex-meta-scientists-want-to-bring-visual-ai-to-the-factory-floor/)
- [The AI Insider — Perceptron AI Launches Open-Weight Robotics Model Called Isaac 0.5](https://theaiinsider.tech/2026/08/31/perceptron-ai-launches-open-weight-robotics-model-called-isaac-0-5/)
- [GitHub — perceptron-ai-inc/isaac](https://github.com/perceptron-ai-inc/isaac)
