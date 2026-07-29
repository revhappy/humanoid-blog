---
title: "Sunday’s ACT-2: Memo Hits 99.1% Laundry Folds in Unseen Homes"
description: "Sunday Robotics says ACT-2 folded laundry at 99.1% success across 785 zero-shot attempts in homes Memo had never seen — beta still fall 2026."
pubDate: 2026-07-28
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/sunday-yt.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Sunday Robotics** just published the kind of number home-robot demos usually dodge. In its **ACT-2 Preview** (July 17, 2026), the company says **Memo** achieved **99.1% ±0.3%** success on **laundry folding** across **785 autonomous attempts** in **unseen homes** — same model checkpoint, **zero per-home fine-tuning**.

**Business Insider** interviewed CEO **Tony Zhao**: Memo folded successfully more than 99% of the time in unfamiliar homes and on garments it was not specifically trained to handle. The company wants that reliability branded as a **“Solve”** — performance + declared scope + stated adaptation cost — instead of another one-off video.

<figure>
  <img src="/humanoid-blog/images/heroes/sunday-yt.jpg" alt="Sunday Robotics ACT-2 Memo laundry folding preview" loading="lazy" />
  <figcaption>Still from Sunday’s ACT-2 Preview film. Source: Sunday Robotics / YouTube.</figcaption>
</figure>

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/d7I1wj0Gkik"
    title="Sunday Robotics ACT-2 Preview"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">ACT-2 Preview: Memo folding in homes it has never seen. Source: Sunday Robotics / YouTube.</p>

## The Numbers They Put on the Table

From Sunday’s technical blog (self-reported evaluation):

- **778** successful folds of **785** attempts (**99.1%**)
- **9** garment types (T-shirts, pants, shorts, leggings, blouses, etc.; socks/underwear excluded from the fold metric)
- Mean fold quality **4.72 / 5**; **98.3%** rated 4★ or better
- Median completion **2 min 13 sec** per successful fold
- Stress cases they highlight: inside-out pants, lighting extremes, mid-fold disturbances, 8XL vs baby clothes, even a child nearby

<figure>
  <img src="/humanoid-blog/images/heroes/sunday-act2-blog.png" alt="Sunday ACT-2 blog hero imagery" loading="lazy" />
  <figcaption>Hero art from Sunday’s ACT-2 Preview post. Source: Sunday Robotics.</figcaption>
</figure>

## How ACT-2 Is Trained (Their Recipe)

Sunday says the unlock is a strong pretrained base plus sample-efficient post-training:

- Pretraining on high-diversity human manipulation data from **Skill Capture Gloves** (~**$200** to make; BI notes glove form matches Memo’s hands)
- **Memory Developers** collecting “memories” across many homes (humanoid.guide cites 2,000+ glove users / ~500 homes in secondary coverage)
- Claim: a **single fine-tuning example** can teach a new behavior that generalizes to unseen environments
- In-house fleet hill-climbs edge cases; gains supposedly transfer “to the wild”

Memo is **wheeled**, with a telescoping spine — not a biped. BI reports Sunday raised **$165M** earlier this year at a **$1.15B** valuation. Company site: beta late **2026**; hand-built units cost ~**$20k** today, retail TBD after beta.

## A Human's Take

I love that they published error bars and a garment table. That’s still **self-graded homework** — but it’s more honest than a silent success reel. Fall beta is when the claim meets other people’s laundry piles. If those numbers hold outside Sunday-selected homes, the wheeled home-robot lane just got a real yardstick.

## Sources

- [Sunday Robotics — ACT-2 Preview](https://www.sunday.ai/blog/act-2-preview)
- [Business Insider — 99% laundry success / Zhao interview](https://www.businessinsider.com/sunday-robotics-memo-home-robot-fold-laundry-99-success-2026-7)
- [humanoid.guide — ACT-2 numbers summary](https://humanoid.guide/sunday-act-2-memo-laundry-solve/)
- [YouTube — ACT-2 Preview film](https://www.youtube.com/watch?v=d7I1wj0Gkik)
- [Sunday Robotics — product site](https://www.sunday.ai/)
