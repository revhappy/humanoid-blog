---
title: "ARTiS Jams a Soft Palm Around Screwdrivers, Drills, and Hammers"
description: "AIST and Osaka’s 7-DoF gripper mixes a vacuum jamming palm with Fin-Ray fingertips and is accepted to IEEE TASE."
pubDate: 2026-09-04
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/artis-abstract.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Holding a tool while you use it is a different problem from picking a block. **Roman Mykhailyshyn**, **Yukiyasu Domae**, and **Kensuke Harada** (AIST Embodied AI and the University of Osaka) posted **ARTiS** on **3 September**, an adaptive gripper aimed at assembly and disassembly. The paper is accepted at *IEEE Transactions on Automation Science and Engineering*.

The trick is a **jamming palm** plus **Fin-Ray** fingertips. The palm is a latex membrane; at **400 kPa** supply pressure it reaches vacuum in **0.7 s**. Fingers use Dynamixel **MX-64R** (**6 N·m** limit) and **MX-28R** (**2.5 N·m**). One finger has **2 DoF**, the other two have **3 DoF**, **7** in total. Two fingers can swing **0–70°** around the gripper axis; each fingertip yaws **±90°**.

<figure>
  <img src="/images/heroes/artis-abstract.jpg" alt="Human hand holding a screwdriver next to the ARTiS gripper with a jamming palm and adaptive fingertips" loading="lazy" />
  <figcaption>Human grasp versus ARTiS on a screwdriver. Source: Mykhailyshyn et al. / ARTiS project page.</figcaption>
</figure>

## Two tips, then the tools

**Tip 1** is a power-sphere: four TPU-95A Fin-Ray petals on a rigid holder, tied with a rubber ring. **Tip 2** is a power-wrap: opposing small Fin-Rays under a **0.3 mm** ellipse. Robustness tests press objects at **0–50°** and repeat **30** times.

The tool set is ordinary shop junk: **nine** screwdrivers (**0.056–0.148 kg**), **two** drills (**0.284 kg** and **1.040 kg**), **two** hammers (**0.230 kg** and **0.742 kg**). Precise grasp: open fingers, mash the palm onto the handle, suck air, lift, close Tip 1 on the shaft. Power grasp uses Tip 2 on the table instead of a holder.

They bolt ARTiS to a **UR-5e** at **45°** to the bench. Scoring is not just “did it lift.” The sequence is grasp, reorient or use, then put the tool back. Some handles fail: cheap smooth ABS on screwdriver **#3** and **#8**, and the bulky **Drill #1**.

<figure>
  <img src="/images/heroes/artis-cad.jpg" alt="CAD cutaway of ARTiS showing jamming cavity, Dynamixel motors, and Fin-Ray tips" loading="lazy" />
  <figcaption>CAD: jamming cavity, MX-64R/MX-28R, Tip 1 and Tip 2. Source: ARTiS project page.</figcaption>
</figure>

<figure>
  <img src="/images/heroes/artis-tools.jpg" alt="Grid of ARTiS holding screwdrivers, a drill, and hammers in sphere and wrap grasps" loading="lazy" />
  <figcaption>Sphere and wrap holds across the study tools. Source: ARTiS project page.</figcaption>
</figure>

## Collaboration, not just pick-and-place

A collaborative sequence has the gripper pin a part so a person can unscrew it: palm down, finger pose, jam, clamp. Other stills show wedging a screwdriver into a car air-conditioner joint, driving a nail, and YCB objects for a generalization check. Hardware tutorial, purchase list, CAD, and code are on the [project site](https://romanmykhailyshyn.github.io/artis/). Support listed: NEDO Exploratory Research and Denso Robotics.

Air use stays under **20 L/min**, which the authors say a lab compressor can feed. They did not measure how much faster the palm sets above **400 kPa**.

## A Human's Take

A gripper that is allowed to look like a hand *and* a suction bag is the right answer for a screwdriver you still have to hit with a hammer. I care that they scored reorient-and-return, not a lift-and-smile. If the CAD is actually buildable from the purchase list, this is a weekend project for a UR cell. If Drill #1 still slips, that is the receipt, not a footnote.

## Sources

- [arXiv — ARTiS: An Adaptive Robotic Gripper for Enhanced Tool Manipulation in Disassembly Applications](https://arxiv.org/abs/2609.03362)
- [Project page — hardware, CAD, code](https://romanmykhailyshyn.github.io/artis/)
- [IEEE TASE — DOI 10.1109/TASE.2026.3731571](https://doi.org/10.1109/TASE.2026.3731571)
