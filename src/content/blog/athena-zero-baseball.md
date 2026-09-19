---
title: "AthenaZero Throws 69 mph and Plays Catch on the Science Robotics Cover"
description: "RAI’s low-inertia bimanual arm is the September 2026 Science Robotics cover, with 30.8 m/s throws and 82% batting contact."
pubDate: 2026-09-19
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/athena-zero-baseball.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**AthenaZero** is not a new robot. The **Robotics and AI Institute** in Cambridge has been using the same low-inertia bimanual platform for juggling. What is new this week is the cover of *Science Robotics* (**16 September 2026**, Vol. 11, Issue 118): a hardware paper on throwing, catching, and batting, with numbers the authors say beat any anthropomorphic arm they know of.

The arXiv copy is [2609.19194](https://arxiv.org/abs/2609.19194), submitted **15 September**. Corresponding author is **Andrew S. Morgan**. **Interesting Engineering** picked it up the next day. RAI’s own [design write-up](https://rai-inst.com/resources/blog/bimanual-robot-for-dynamic-manipulation/) and [demo video](https://www.youtube.com/watch?v=eIa9fKkxXAo) match the same baseball tasks.

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/eIa9fKkxXAo"
    title="AthenaZero throwing, catching, and batting"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Catch and batting practice, robot-to-robot and with a human. Source: RAI Institute / YouTube.</p>

## Low gear, low mass, no joint torque sensors

AthenaZero stands about **1.6 m** with a **1.8 m** wingspan. It has a 1-DoF torso, two 7-DoF arms, and two 6-DoF underactuated hands: **22 actuators** over **27 joints**. Most joints use **5:1** quasi-direct-drive actuators. Shoulder motors are **95 mm** with **90 Nm** peak. There are **no force-torque sensors**; torque is estimated from motor current.

The point of the gearing is effective mass. In a pendulum impact test, AthenaZero measured **0.83 kg** at the wrist versus **3.3 kg** on a Franka Research 3. Peak impact force was **124.1 N** against **208.3 N**. The paper’s model puts a human arm near **2.76 kg**. The tradeoff is the one you expect: the arm is not a cobot for welding. Unloaded end-effector error averaged about **3 mm**; with a **1.8 kg** load it rose to about **12 mm**. Motors trip software protection above **80°C**, and the authors say they do not want long static holds over **2 kg** at full extension.

<figure>
  <img src="/images/heroes/athena-zero-baseball-2.jpg" alt="AthenaZero throwing, catching a baseball in a glove, and swinging a blue bat" loading="lazy" />
  <figcaption>Throw, catch, and bat on the same platform. Source: Morgan et al., arXiv:2609.19194 / Science Robotics.</figcaption>
</figure>

## The baseball numbers

Two robots stood **7.3 m** apart. OptiTrack ran at **240 Hz**.

- **Throwing:** fastest tennis ball (**~57 g**) at **30.8 m/s** (about **69 mph**) one-armed. Accurate baseball (**~145 g**) throws at **21.4 m/s** into a **0.25 m × 0.25 m** window.
- **Catching:** baseballs up to **18.3 m/s** with **0.398 s** of reaction time. Reliable catch-and-return in the paper is quoted at **13.4 m/s**.
- **Batting:** tennis balls at **13.9 m/s** max in the skill table; **27 hits in 33 swings** (**>82%**) at about **13.4 m/s** into a **0.4 m × 0.7 m** strike zone. Timing window: **2 ms**.

Robot-to-robot catch volleyed up to **8** times with about **11 s** catch-to-throw. A human in the loop reached **12**. Batting practice ran about **3 minutes**. Failures on catch often came from a bad transfer out of the glove, which then sent the return throw wide. At the high end of catching speed, the ball left the palm before the fingers closed.

The mound-distance numbers in the paper (**46.1 m/s** catch, **35.0 m/s** bat at **18.4 m**) are **extrapolations that hold reaction time fixed**. They are not throws from a real mound.

## A Human's Take

I already believed AthenaZero could juggle. This paper is the one that tells you *why* the arm is built that way: if the endpoint mass is closer to a person than a cobot, you can take a baseball hit without the object bouncing off like it hit a wall. Sixty-nine miles an hour with a tennis ball is a real number. The thermal limit and the 12 mm sag under load are also real numbers. I would not put this on a weld cell. I would put it on any task where the first millisecond of contact decides whether you keep the object.

## Sources

- [Science Robotics — AthenaZero (DOI 10.1126/scirobotics.aee1868)](https://www.science.org/doi/10.1126/scirobotics.aee1868)
- [arXiv:2609.19194 — AthenaZero: A low-inertia, bimanual robot for dynamic manipulation](https://arxiv.org/abs/2609.19194)
- [RAI Institute — AthenaZero design blog](https://rai-inst.com/resources/blog/bimanual-robot-for-dynamic-manipulation/)
- [YouTube — A Dynamic Robot That Can Throw, Catch, and Hit a Baseball](https://www.youtube.com/watch?v=eIa9fKkxXAo)
- [Interesting Engineering — AthenaZero baseball coverage](https://interestingengineering.com/ai-robotics/athenazero-robot-baseball-dynamic-manipulation-study)
