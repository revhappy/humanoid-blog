---
title: "FootQuery Looks Up the Stair Step the G1 Can No Longer See"
description: "A Tsinghua policy predicts each G1 foot's next touchdown and pulls that patch from older depth frames."
pubDate: 2026-09-21
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/footquery-g1.jpg"
readTime: "3 min read"
featured: false
draft: false
---

A Unitree G1 walking stairs has a camera problem that shows up a step too late. The foothold it needs is often already out of the current depth frame, hidden by its own leg or simply behind the body. FootQuery, from Tao Dong, Chao Gao, Guyue Zhou, and colleagues at Tsinghua's Institute for AI Industry Research, with co-authors at the University of Science and Technology Beijing and Nanyang Technological University, queries older depth images at the place each foot is about to land. The paper was submitted to arXiv on September 18, 2026.

The policy predicts the next touchdown, and how unsure it is, from proprioception. Those distributions pick where to read in a stack of past depth frames. During training, the actual contacts are painted back onto the old images so the network learns to look where the foot really was visible. At run time it only needs proprioception and the onboard depth camera. No map built ahead of the walk.

<figure>
  <img src="/images/heroes/footquery-g1-2.png" alt="Humanoid on stairs beside depth images 0.02 and 0.42 seconds old, with the foothold marked only in the older frame" loading="lazy" />
  <figcaption>A future right-foot contact is outside the latest view and still visible 0.42 seconds earlier. Source: arXiv:2609.21447.</figcaption>
</figure>

In simulation, the full method beats its own ablations on the hardest stairs, gaps, and platforms they test. Two training tricks sit under that result. A force-assistance curriculum holds the pelvis up early so the robot can explore instead of falling on step one. A tread-midline reward pushes stair contacts toward the middle of the step, not the nose or the heel edge.

Outdoors, one policy carries a physical G1 through a route the paper's teaser marks as six scenes: outdoor stairs, paved walkways, a low platform, and gaps, plus indoor routes that mix stair ascent, descent, platforms, and gaps. The authors describe it as continuous traversal, not a separate controller per obstacle. Their figure of the visibility problem uses a concrete pair of frames: at 0.02 seconds of history the touchdown is gone from the region of interest, and at 0.42 seconds it is still in the depth image.

## A Human's Take

Most "perceptive locomotion" papers show the robot looking at the obstacle it is about to hit. The failure mode I actually see on stairs is the opposite. The camera already looked, then the leg blocked the view, then the foot committed. Storing a short depth history and indexing it by the predicted contact is a more honest use of a chest camera than pretending the current frame is enough.

I still want a failure reel. Continuous traversal on a sunny campus route is encouraging, and it is one policy, which matters. It is not a wet stairwell or a missing tread. If the query still finds the step when the old frame is dark or half-occluded, then the memory is doing the job. If it only works when the earlier view was clean, it is a good indexing trick with a short shelf life.

## Sources

- [arXiv — FootQuery abstract](https://arxiv.org/abs/2609.21447)
- [arXiv HTML — FootQuery figures and real-world G1 experiments](https://arxiv.org/html/2609.21447v1)
