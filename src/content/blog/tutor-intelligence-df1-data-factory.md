---
title: "Tutor Intelligence’s DF1: 100 Semi-Humanoid Robots as a US Data Factory"
description: "MIT-spawned Tutor Intelligence runs Data Factory 1—100 Sonny robots plus remote tutors—to train Ti0 VLA policies for industrial bimanual work."
pubDate: 2026-08-03
category: "Robotics"
author: "Shar Hendrix"
heroImage: "images/heroes/tutor-df1-data-factory.jpg"
readTime: "4 min read"
featured: false
draft: false
---

Language models got the internet. Robots don’t have a Wikipedia. **Tutor Intelligence**, out of MIT CSAIL and based in Watertown, Massachusetts, is trying to build the data machine instead: **Data Factory 1 (DF1)**—a fleet of **100 “Sonny” semi-humanoid robots** the company calls the largest robot data factory in the United States.

Alongside DF1, Tutor introduced **Ti0**, its first vision-language-action model trained on DF1 data.

<figure>
  <img src="/images/heroes/tutor-df1-data-factory-2.jpg" alt="Tutor Intelligence leadership at the Digital Factory with AWS partner" loading="lazy" />
  <figcaption>Tutor CTO Alon Kosowsky-Sachs and CEO Josh Gruenstein with AWS Generative AI’s Alla Simoneau at Tutor’s Digital Factory. Source: The Robot Report / MassRobotics coverage (Eugene Demaitre).</figcaption>
</figure>

## How DF1 works

DF1 is not a sim farm. It is a real-world teleop and evaluation plant:

- **100 Sonny** bimanual / semi-humanoid units sharing hardware, sensors, electrical stack, and contract manufacturing with Tutor’s deployed **Cassie** mobile manipulator line.
- Remote **Tutors** (international teleoperators; reporting describes teams in Mexico and the Philippines plus on-site staff) use VR **proprioceptive teleoperation** to demonstrate tasks and recover errors.
- Policies improve from initial cloning **and** corrections after robots make mistakes—interventions at fleet scale.
- Tutor claims evaluating the same policy across 100 robots surfaces edge cases **~100× faster** (an issue that might take eight hours on one robot appears in about five minutes of DF1 time).
- Offline scoring minutes after rollouts provides reward-style feedback for post-training.
- **Velocity normalization** aligns demonstration speed profiles across different teleoperators.

Ti0 was trained on “only a small number of DF1 data hours,” the company says—early policies relative to what the factory can produce in a week.

## Commercial context

Tutor’s first deployed product line is **Cassie** (case picking / palletizing). Company and secondary reporting cite:

- Usage-based pricing around **$14–$18 per hour** for Cassie services.  
- Deployments that can come up in hours to days (customer quotes in MassRobotics / Robot Report coverage).  
- **$34M Series A** (December 2025, led by Union Square Ventures per company letter).  
- Goal of Sonny industrial pilots after DF1 bootstraps better policies.

Gruenstein’s line: DF1 is about getting the right data from people teaching robots, not only about publishing model architectures.

## A Human's Take

A hundred real robots in a mill building is a very different bet from another foundation-model press graphic. If edge cases truly show up 100× faster, the flywheel is operational, not theoretical. I’m watching whether Sonny ships into multi-shift customer sites with intervention rates that beat teleop economics—and whether velocity normalization plus tutor scoring is enough to keep fleet data clean as headcount scales. Cool machine, serious data ops. That’s the combo.

## Sources

- [Tutor Intelligence blog — Building a 100-Robot Data Factory](https://tutorintelligence.com/blog/building-a-100-robot-data-factory-toward-factory-ready-ai)
- [MassRobotics / The Robot Report — Tutor DF1 coverage](https://www.massrobotics.org/tutor-intelligence-builds-data-factory-to-train-robot-ai-in-the-real-world/)
- [Tutor Intelligence — company site](https://tutorintelligence.com/)
