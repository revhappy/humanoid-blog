---
title: "Figure Opens Index: 16 Million Human Videos for Helix"
description: "Figure AI comes out of stealth with Index, a creator app that has taken 16M videos and paid $15M toward Helix training."
pubDate: 2026-08-26
category: "AI"
author: "Robb Harlan"
heroImage: "images/heroes/figure-index-helix-data.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Figure AI is putting a name on the data pipeline it has been running in stealth. On August 25 the company launched **Index**, a consumer app on Google Play and the App Store that pays people to record real household and workplace tasks for Helix, its robot model.

The numbers on the company page are not small. While the app sat unlabeled, Figure says it crossed **264,000** downloads in **108** countries, more than **44,000** weekly active users, and **16 million** video uploads. The ingest rate is **30 minutes of video every second**, which Figure converts as **4.9 years** of human work uploaded per day. Creators have been paid **$15 million**. The company says it is now on a path to 100x that scale and is committed to spend over **$1 billion** on data and compute in the next 12 months.

<figure>
  <img src="/images/heroes/figure-index-helix-data.jpg" alt="A creator wearing a head-mounted camera making a bed for Figure’s Index dataset" loading="lazy" />
  <figcaption>A creator records a bed-making task with a headset camera. Source: Humanoids Daily / Figure Index launch.</figcaption>
</figure>

## What Index actually is

Figure tried buying data first. Vendors, it says, could not hit the throughput, diversity, or quality bar Helix needs, so it built its own collection system. Four months ago that system was an unlabeled app. Today it is Index.

Anyone can record chores at home or at work, or book a Creator through the app to come do the task on camera. The company lists cooking, cleaning, laundry, logistics centers, restaurants, factories, and offices, plus odd jobs like kitty litter, oil changes, and busing tables. Per **1,000 hours**, Figure claims **373** unique tasks, **1,146** unique objects, and **116** unique environments.

<figure>
  <img src="/images/heroes/figure-index-helix-data-2.jpg" alt="Three iPhone screens showing the Index app welcome screen and task list" loading="lazy" />
  <figcaption>Index on a phone: set a table, empty trash, fold clothes, tidy a room. Source: Humanoids Daily.</figcaption>
</figure>

Humanoids Daily, covering the same launch, ties Index to the earlier stealth effort **Project Go-Big** and notes Figure has already paid those $15 million and committed the $1 billion. Its write-up shows the headset capture and the app UI.

## How the footage becomes training data

Ingesting that stream, Figure says, looks more like a consumer app than a lab logger: 24/7 availability, continuous processing, and real-time feedback to users. The pipeline has five stages:

- **Filtering** for technical, visual, and semantic quality
- **Fraud review** by human analysts at the user level
- **Deduplication** by embedding similarity
- **Rebalancing** with task quotas and embedding clusters
- **Annotation** as hierarchical text captions on every accepted episode

The weekly-active-user chart on Figure’s page climbs from near zero in early May to **44,436** by the week of August 21.

<figure>
  <img src="/images/heroes/figure-index-helix-data-3.jpg" alt="Bar chart of Index weekly active users rising to 44,436 by August 21" loading="lazy" />
  <figcaption>Weekly active users on Figure’s Index page, through the week of August 21. Source: Figure AI.</figcaption>
</figure>

Figure’s close is explicit: Index is groundwork for ordering robots as a service. Today a person comes to clean; later, the company says, a robot will.

## A Human's Take

Paying thousands of people to film making a bed is a serious bet that human video, not more teleop hours on Figure’s own floor, is the scarce input. I want the follow-up they promised: does this footage actually move Helix on a shift, or is it a very expensive pile of chores? Until they show a robot doing the same rooms without a minder, treat the 16 million uploads as a data factory, not a finished skill.

## Sources

- [Figure AI — Introducing Index](https://www.figure.ai/news/introducing-index)
- [Humanoids Daily — Figure AI unveils Index](https://www.humanoidsdaily.com/news/figure-ai-unveils-index-crowdsourcing-real-world-human-video-to-train-helix)
