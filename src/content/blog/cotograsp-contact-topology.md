---
title: "CoToGrasp Makes Dexterous Grasps Match a Chosen Hand Pose"
description: "CEA-List’s CoToGrasp, headed to ECCV 2026, synthesizes Allegro grasps conditioned on contact topologies without object-specific training."
pubDate: 2026-08-23
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/cotograsp.jpg"
readTime: "4 min read"
featured: false
draft: false
---

A CEA-List team posted **CoToGrasp** on arXiv on August 20, with an ECCV 2026 slot. The paper’s complaint is familiar: most grasp planners optimize “will it stay in the hand,” not “is this the grasp you actually wanted.” Precision, power, and object-specific taxonomies usually need expensive labeled object sets. CoToGrasp tries to skip that.

The model is trained **object-agnostic**. Local gripper geometry gets projected into a canonical feature workspace. A CVAE then learns the gripper’s contact manifold, conditioned on a grasp-type embedding such as **M4**. At inference, an unseen object is warped into that gripper frame, a latent sample draws a contact map, and an energy-based step fits the joints.

<figure>
  <img src="/images/heroes/cotograsp.jpg" alt="CoToGrasp teaser showing precision, object-specific, and power grasp clusters around a latent manifold" loading="lazy" />
  <figcaption>Contact-topology priors on the left, generated grasps on the right. Source: CoToGrasp project page, CEA-List.</figcaption>
</figure>

## Filter, then close the fingers

The project page is blunt about the last mile. Predicted contacts go through **label-consistency** and **force-closure** checks before anyone trusts the pose. Invalid maps get dropped. What survives becomes a kinematic target for an Allegro-class hand.

They evaluate on **DexGraspNet** and say the method beats existing taxonomy-guided planners. Code is on GitHub under CEA-LIST. This is the same lab that posted **GOAG** last week; CoToGrasp is the sibling that cares which *kind* of grasp you asked for.

<figure>
  <img src="/images/heroes/cotograsp-3.jpg" alt="Grid of real Allegro Hand grasps on YCB objects including baseball, mustard, Cheez-It, and a drill" loading="lazy" />
  <figcaption>Hardware check on an Allegro Hand with YCB objects, labeled by grasp type. Source: CoToGrasp project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/cotograsp-2.jpg" alt="CoToGrasp method diagram from object-agnostic training through energy-based grasp optimization" loading="lazy" />
  <figcaption>Training in a gripper-centric workspace, then synthesis on a new object. Source: CoToGrasp project page.</figcaption>
</figure>

## A Human's Take

I like a grasp paper that treats “how” as a first-class input. A power wrap on a drill and a pinch on a marker are not the same skill with a different mesh. Zero-shot on DexGraspNet is the lab receipt. The Allegro grid is the one I will screenshot. If this transfers off YCB without a new object dataset, that is the useful trick.

## Sources

- [arXiv:2608.19776 — CoToGrasp](https://arxiv.org/abs/2608.19776)
- [CEA-List project page — CoToGrasp](https://cea-list.github.io/cotograspweb/)
- [GitHub — CEA-LIST/CoToGrasp](https://github.com/CEA-LIST/CoToGrasp)
