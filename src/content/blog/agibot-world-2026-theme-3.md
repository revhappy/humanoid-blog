---
title: "AGIBOT Opens 11,430 Real Trajectories That Include the Failures"
description: "WORLD 2026 Theme 3 gives researchers 14 tasks of expert demos, 1,024 successful rollouts, 1,369 failures, and human takeovers on G2."
pubDate: 2026-09-04
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/agibot-world-2026-theme-3.jpg"
readTime: "3 min read"
featured: false
draft: false
---

AGIBOT open-sourced **WORLD 2026 Theme 3**, a reinforcement-learning slice of its real-world robot dataset. The first drop is **11,430** trajectories across **14** industrial and household tasks. Interesting Engineering covered it on **4 September**. Securities Times traced the company announcement to **31 August**.

The point of this release is not another pile of perfect demos. Theme 3 keeps the misses.

<figure>
  <img src="/images/heroes/agibot-world-2026-theme-3.jpg" alt="AGIBOT G2 wheeled humanoid standing between a home interior and warehouse shelving" loading="lazy" />
  <figcaption>G2 in a mixed home/warehouse set. Source: AGIBOT via Interesting Engineering.</figcaption>
</figure>

## Three kinds of tape

Interesting Engineering, citing AGIBOT, splits the 11,430 trajectories into three buckets:

- **Expert demonstrations**: a human operator does the task in a real scene, so the robot has a reference of how the job is supposed to go.
- **Policy rollouts**: the learned policy runs on its own. The drop includes **1,024** successful rollouts and **1,369** failed ones.
- **Human-in-the-loop corrections**: the robot’s behavior before a takeover, the moment a person grabs control, and the recovery.

Securities Times adds that the 14 tasks include things like plugging a network cable and opening a door with a key, in industrial and home scenes. The same note says the dataset ships progress, error, success, disturbance, and human-takeover labels.

AGIBOT’s YouTube clip for Theme 3 repeats the same headline numbers: 14 tasks, 11,430 trajectories, labels for progress, mistakes, and interference, plus the human-correction tracks.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/WoxmDmvCKew"
    title="AGIBOT WORLD 2026 Theme 3: Reinforcement Learning"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Theme 3 overview: successes, failures, and corrections. Source: AGIBOT / YouTube.</p>

## Where to get it

The [AGIBOT WORLD](https://agibot-world.com/) site frames 2026 as a five-theme open dataset collected **100%** in real scenes on the **G2** platform. Hugging Face hosts [agibot-world/AgiBotWorld2026](https://huggingface.co/datasets/agibot-world/AgiBotWorld2026) in LeRobot v2.1 layout (parquet episodes, per-camera MP4s, CC BY-NC-SA 4.0). The viewer on that page was broken when I opened it; the files are still listed.

IE quotes the project site: researchers are invited to use WORLD 2026 to move robot intelligence “from the lab into the real world.”

<figure>
  <img src="/images/heroes/agibot-world-2026-theme-3-2.jpg" alt="Collage of AGIBOT G2 doing household and warehouse tasks, labeled AGIBOT WORLD 2026 Reinforcement Learning" loading="lazy" />
  <figcaption>YouTube thumbnail collage for the Theme 3 film. Source: AGIBOT / YouTube.</figcaption>
</figure>

## A Human's Take

Most public robot datasets still look like a highlight reel. Shipping 1,369 failed rollouts plus the human grab that saved the episode is the part I would actually train on. The license is non-commercial, so this is a research commons, not a product SDK. If those takeover labels are clean, this is how you teach a policy when to ask for help instead of pretending every G2 run ends in a tidy success frame.

## Sources

- [Interesting Engineering — AGIBOT WORLD 2026 Theme 3, 11,430 trajectories (4 Sep 2026)](https://interestingengineering.com/ai-robotics/video-chinese-firm-releases-11430-robot-trajectories-to-advance-research)
- [Securities Times — AGIBOT WORLD 2026 Theme 3 open-source note (31 Aug 2026)](https://www.stcn.com/article/detail/4166339.html)
- [AGIBOT WORLD project site](https://agibot-world.com/)
- [Hugging Face — agibot-world/AgiBotWorld2026](https://huggingface.co/datasets/agibot-world/AgiBotWorld2026)
- [YouTube — AGIBOT WORLD 2026 Theme 3: Reinforcement Learning](https://www.youtube.com/watch?v=WoxmDmvCKew)
