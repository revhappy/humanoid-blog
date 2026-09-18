---
title: "Figure’s Helix 2.5 Does Chores in 30 Homes It Never Trained In"
description: "Index-pretrained Helix 2.5 hits 56% full-task success across 30 unseen Bay Area homes, vs 9% from scratch."
pubDate: 2026-09-18
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/figure-helix-25-2.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Figure rented **30 Bay Area homes** and sent Figure 03 in to make beds, fold towels, and tidy living rooms with no data collected in those houses and no extra training on the objects it touched. The company calls the policy **Helix 2.5**. On its own scorecard, Index pretraining is what moved full-task success from **9% to 56%**.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/lJpM_2a1zrE"
    title="Helix 2.5 30-home generalization"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Figure 03 in rented homes: tidy, fold, make the bed. Source: Figure / YouTube.</p>

## What “zero-shot” actually means here

Figure’s [17 September write-up](https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization) is careful on one point: the **homes and objects** were unseen. The three chores were specified with fine-tuning data collected somewhere else. Each task used one frozen checkpoint across all 30 houses. No local data, no weight updates, no picking the checkpoint from evaluation rollouts.

Success required finishing the whole job. No partial credit:

- **Living-room tidy:** all 13–15 toys in the basket
- **Towels:** every towel folded and in the basket
- **Bed:** both pillows and comforter corners at the top of the bed, comforter pulled smooth

Humanoids Daily, reading Figure’s chart plus [Startup Fortune](https://startupfortune.com/figure-ais-helix-25-robot-made-beds-in-30-homes-it-had-never-seen/), puts the Index-pretrained policies at **237 of 420** trials, about **56%**. Split by chore: bed making **94/140 (67%)**, towel folding **87/140 (62%)**, toy tidy **56/140 (40%)**. The from-scratch twin, same task data and architecture, is **35/420** on the chart (~8.3%); Figure’s prose rounds that baseline to **9%**.

<figure>
  <img src="/images/heroes/figure-helix-25.jpg" alt="Brett Adcock standing beside Figure 03 folding a towel on a kitchen island" loading="lazy" />
  <figcaption>Figure 03 folding a towel in the Helix 2.5 announcement. Source: Humanoids Daily screenshot of Figure’s video.</figcaption>
</figure>

## Index is doing the heavy lifting

Helix 2.5 was pretrained from random weights entirely on **Index**, Figure’s human-behavior dataset, then adapted to the three chores. Helix 02, by contrast, started from a pretrained vision-language model and learned in the rooms where it later worked.

Holding task data, architecture, training, and evaluation fixed, Index is the only variable in the 9% vs 56% gap. Figure says no single evaluation task is more than **1.90%** of Index. It also claims Helix 2.5 matched a representative Helix 02 success rate with **half** the task-specific adaptation data, then ran that behavior across 30 unseen homes.

A separate scaling run trained four models on nested Index subsets spanning an **8×** increase in pretraining data. Downstream robot-action prediction loss fell smoothly enough that, using only the smaller runs, Figure says it forecast the largest run’s test loss to four decimal places. Forecasting error was **0.54%** of the variation across that 8× range. That metric is action-prediction loss, not chore completion.

Index, Figure says, now adds about **35 minutes of human experience per second**. The company has committed **$3.5 billion** of compute to Helix with Nscale. Director of AI Corey Lynch, in the announcement video as reported by Humanoids Daily, puts weekly Index contributors above **90,000**.

<figure>
  <img src="/images/heroes/figure-helix-25-3.jpg" alt="Bar chart of zero-shot success in 30 homes with and without Index pretraining" loading="lazy" />
  <figcaption>Company chart: Index pretraining vs training from scratch on the same task data. Source: Figure, Helix 2.5 post.</figcaption>
</figure>

## A Human's Take

Fifty-six percent with no credit for a half-made bed is a real transfer result, not a trailer. It is also not a housekeeper. Toy tidy at 40% is the number I would tape to the fridge. If Index is the scarce input, the next demo I want is the same rubric after another doubling of data, in houses Figure did not rent and reset.

## Sources

- [Figure — Helix 2.5: Zero-Shot 30-Home Generalization](https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization)
- [Figure — Helix 2.5 30-Home Generalization (YouTube)](https://www.youtube.com/watch?v=lJpM_2a1zrE)
- [Humanoids Daily — Figure’s Helix 2.5 Takes on Chores in 30 Unseen Homes](https://www.humanoidsdaily.com/news/figure-helix-2-5-30-unseen-homes)
- [Humanoid.guide — Helix 2.5 tested across 30 unseen Bay Area homes](https://humanoid.guide/figure-unveils-helix-2-5-after-tests-in-30-unseen-homes/)
- [Startup Fortune — Figure AI's Helix 2.5 Robot Made Beds in 30 Homes It Had Never Seen](https://startupfortune.com/figure-ais-helix-25-robot-made-beds-in-30-homes-it-had-never-seen/)
