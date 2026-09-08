---
title: "Copying the Human Hand Does Not Automatically Make It Easier to Drive"
description: "A Budapest study splits Jacobian from tendons on the Shadow Hand and a biomechatronic copy. Anatomy helps the thumb’s kinematics and wrecks its actuation."
pubDate: 2026-09-08
category: "Robotics"
author: "Robb Harlan"
heroImage: "images/heroes/hand-morphology-2.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Build a hand that looks like yours, and control should get easier. [arXiv:2609.05206](https://arxiv.org/abs/2609.05206), posted **4 September** from **Pázmány Péter Catholic University** in Budapest, measures that claim instead of assuming it.

The two subjects sit at opposite ends of a four-part taxonomy: joint-axis geometry, actuator-to-DoF ratio, coupling, and how authority is spread across joints. **Shadow Dexterous Hand (SDH)** is orthogonal axes, slightly underactuated (**m/n = 0.82**), sparse coupling. The **Anatomically Correct, Biomechatronic Hand (ACBH)** is oblique axes, overactuated (**m/n = 1.50**), branching tendons.

<figure>
  <img src="/images/heroes/hand-morphology-2.jpg" alt="Simulated Shadow Dexterous Hand with five fingers and a cylindrical forearm housing" loading="lazy" />
  <figcaption>Shadow Dexterous Hand simulation model. Source: Tari et al., arXiv:2609.05206.</figcaption>
</figure>

## Where anatomy helps, and where it does not

They split the mapping. **J** is joint motion to fingertip. **A** is actuators to joints. **B = JA** is what a controller actually drives. Condition number **κ** near 1 is even; large **κ** means some directions eat disproportionate effort.

At a mid-range pose, long-finger **κ(J)** is **3.84** on SDH versus **5.77–9.55** on ACBH. Orthogonal axes win there. The thumb flips: ACBH **κ(J) = 4.76**, SDH **9.45**. Human-like CMC geometry covers opposition better.

Actuation is the other half. SDH’s PIP/DIP 1:1 coupler slightly worsens the index (**κ(B) = 4.25** vs **κ(J) = 3.84**). ACBH’s tendon web does the opposite on every long finger: **κ(B) < κ(J)**. Extra muscles spread authority. The thumb is the outlier. ACBH thumb **κ(A) ≈ 30.74** and **κ(B) = 20.03**, against SDH’s fully actuated **9.45**. All **11** thumb muscles hit the CMC yaw/pitch; the IP joint is left with **2**. That is opposition anatomy, not a modeling bug.

<figure>
  <img src="/images/heroes/hand-morphology.jpg" alt="ACBH simulated hand with tendon routing drawn as colored lines through the fingers" loading="lazy" />
  <figcaption>Anatomically Correct, Biomechatronic Hand with tendon network. Source: Tari et al., arXiv:2609.05206.</figcaption>
</figure>

## Does RL notice?

Reach with PPO: SDH hits **0.75** success around **11 million** steps (~6 h). ACBH hits **0.65** around **25 million** (~19.5 h). BlockRotateZ with DDPG+HER is a tie near **0.67–0.69** at **16 million** steps. Full **BlockRotateXYZ** with TQC+HER: SDH about **0.76** after ~**23 million** steps, ACBH about **0.25** in the same step budget (and more wall time). DDPG+HER on that task stays under **0.1** for both.

Parameters come from Shadow’s URDF and the ACBH MuJoCo model of Polcz et al. Numbers are at one mid-range pose plus some workspace sweeps, not a factory grip set.

<figure>
  <img src="/images/heroes/hand-morphology-3.jpg" alt="ACBH thumb fingertip velocity ellipsoids colored from well-conditioned green to ill-conditioned red" loading="lazy" />
  <figcaption>Thumb kinematic conditioning across poses. Source: Tari et al., arXiv:2609.05206.</figcaption>
</figure>

## A Human's Take

I have watched too many hand launches sell “human-like” as if that were a control spec. This paper’s useful sentence is that the ACBH thumb is kinematically nicer and actuator-ugly. If you copy thenar muscles, you inherit their favorites. Design the coupling you can afford to learn, not the one that photographs well.

## Sources

- [arXiv:2609.05206 — Morphology and actuation as inductive biases](https://arxiv.org/abs/2609.05206)
- [arXiv HTML — paper with figures](https://arxiv.org/html/2609.05206)
