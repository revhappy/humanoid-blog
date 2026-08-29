---
title: "iCub in a Crib: Science Robotics Tests How Infants Learn Cause and Effect"
description: "A Science Robotics paper puts CTU Prague’s iCub in a crib with a mobile, using prediction and curiosity to model how babies learn their limbs matter."
pubDate: 2026-08-29
category: "Research"
author: "Robb Harlan"
heroImage: "images/heroes/robot-in-crib.jpg"
readTime: "4 min read"
featured: false
draft: false
---

*Science Robotics* dated **26 August 2026** published “Robot in a crib: How a playing robot helps us understand sensorimotor contingency learning,” by **Josua Spisak, Sergiu Tcaci Popescu, Lukas Rustler, Stefan Wermter, J. Kevin O’Regan, and Matej Hoffmann**. The journal’s TOC abstract says experiments with a child-sized humanoid using **prediction and curiosity** show how infants learn that their movements change what they feel and see.

The hardware is **iCub**, the Italian Institute of Technology’s open research humanoid, in a crib at Czech Technical University in Prague. CTU FEE’s lab page, which I fetched for the experiment setup, describes the same Rovee-Collier “mobile paradigm”: a toy hangs above the infant; one limb is tethered; kicking moves the toy; the baby learns which limb did it.

<figure>
  <img src="/images/heroes/robot-in-crib.jpg" alt="iCub humanoid lying on its back in a wooden crib, limbs tethered with strings to hanging blocks" loading="lazy" />
  <figcaption>iCub on its back in the crib, strings to the mobile. Source: FEE CTU / Petr Neugebauer.</figcaption>
</figure>

## The experiment, in metal

Hoffmann’s group put iCub supine, one limb connected to a hanging toy. A neural net has to notice which limb moves the object and then use that limb more, the way a six-month-old does. CTU quotes Hoffmann: “We are interested in what an artificial brain must contain in order to behave similarly to a child’s brain.”

Developmental psychologist **Sergiu T. Popescu**, on the paper and the CTU page, calls it a chance to test theory on a fully instrumented body. **J. Kevin O’Regan** (Université Paris Cité), a co-author, describes the classic mobile: attach the toy to a foot, watch kick rate rise when the world answers.

iCub, per CTU, is just over **one metre** tall, roughly a four-year-old’s size, driven by **53** motors, with cameras, microphones, and thousands of tactile sensors in electronic skin. Hamburg (Wermter) is on the author list with Prague and Paris.

The journal abstract frames the scientific claim: learning **sensorimotor contingencies** — the link between an action and its sensory effect — is how a body, a sense of agency, and simple causality get built. The CTU page says the model includes a predictor and an exploration module that hunts surprising outcomes. Ablation studies there found that without prediction, motor noise, or enough “muscle commands,” the robot stops looking like a baby. They also report an **extinction burst**: a short spike of activity after the toy stops answering, another infant signature.

Science Robotics posted a clip of the crib work with the paper. The full article is paywalled; I am not inventing numbers from behind that wall. Setup, authors, and the prediction-plus-curiosity claim come from the TOC, the journal’s own post, and the lab page.

<figure>
  <img src="/images/heroes/robot-in-crib-3.jpg" alt="Close-up of iCub’s face and arms in the crib, a pink tether on one wrist, hanging blocks out of focus" loading="lazy" />
  <figcaption>Close-up of the tethered-limb setup. Source: FEE CTU / Petr Neugebauer.</figcaption>
</figure>

## Why put a robot in a crib

You cannot open a six-month-old’s policy network. You can open iCub’s. That is the whole bet: if the same prediction-and-surprise loop reproduces infant-like limb discovery, maybe those pieces are doing real cognitive work, not just cute robotics.

CTU is careful. The goal is not a better home robot. It is a controllable stand-in for early body learning. The Science Robotics special issue sits that paper next to BeyondMimic and binocular-head work; three different bets on what a humanoid body is *for*.

## A Human's Take

I like this more than another parkour G1. A robot that has to notice “this ankle moves the hanging thing” is closer to the problem of agency than a backflip is. The limit is honest: we have the crib photos, the author list, and the journal’s one-paragraph claim. We do not have the paywalled figures. If those ablations hold, prediction-plus-noise is doing a lot of the infant trick. If they do not, this is a beautiful experimental rig waiting on a stronger model.

## Sources

- [Science Robotics 11(117) — Robot in a crib, 26 Aug 2026](https://www.science.org/toc/scirobotics/11/117)
- [Science Robotics paper — doi:10.1126/scirobotics.aed4106](https://www.science.org/doi/10.1126/scirobotics.aed4106)
- [FEE CTU — iCub in a crib, experiment and quotes](https://fel.cvut.cz/en/what-s-on/news/81170-what-goes-on-in-a-child-s-mind-a-humanoid-robot-in-a-crib-is-helping-scientists-from-the-fee-ctu-in-prague-to-understand-early-cognitive-development)
- [X — Science Robotics on the crib study](https://x.com/SciRobotics/status/2092681572331737524)
