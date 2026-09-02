---
title: "ROBOTIS OH! GYM! Puts Students on AI Sapiens K1"
description: "Four university teams spent a month teaching ROBOTIS’s open K1 humanoid obstacle runs, K-pop, taekwondo, and parkour. Cohort 1 wrapped 31 August."
pubDate: 2026-09-02
category: "Humanoids"
author: "Shar Hendrix"
heroImage: "images/heroes/robotis-oh-gym.jpg"
readTime: "4 min read"
featured: false
draft: false
---

**ROBOTIS** closed the first **OH! GYM!** cohort with a 31 August showcase at its Seoul Gangseo headquarters. **OH! GYM!** is Open Humanoid GYM: a month-long program (21 July–21 August on the company docs) that puts students on the open **AI Sapiens K1** and asks them to train full-body motions in simulation, then run them on the metal.

**58 teams** from **17 schools** applied. **Four** were selected: Gachon University (iRASC), Seoul National University (SHAPE), Yonsei University (RoboIN), and Seoul National University of Science and Technology (RnD).

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/_uav5s18CwQ"
    title="AI Sapiens #6: OH! GYM! Students Bring Humanoid Motions from Simulation to Reality"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>
<p class="embed-caption">Official ROBOTIS film of Cohort 1: obstacle work, dance, backflip, windmills. Source: ROBOTIS OpenSourceTeam / YouTube.</p>

## What each team trained

ROBOTIS’s project page lists the themes. KOREA WAVE’s 1 September report, via Yahoo News, adds what actually ran on stage:

- **Gachon / iRASC — Obstacle run.** Low crawl, one-leg stand, push-ups, burpees, and a limbo under **60–70 cm**. The YouTube still shows the K1 in a cap next to an orange ball.
- **Seoul National / SHAPE — K-pop.** Choreography to ATEEZ’s “BAD.”
- **Yonsei / RoboIN — Taekwondo.** Kick combinations; WAVE says the robot lost balance and fell during the demo.
- **SeoulTech / RnD — Parkour / acrobatics.** Figure-skating butterfly and a handstand. WAVE notes the handstand is hard because the legs outweigh the upper body.

All four teams used **NVIDIA Isaac Sim** and **Google MuJoCo** for reinforcement learning, WAVE reports: tens of kinds of motions, tens of thousands of simulated repeats, then friction and actuator-limit tweaks to shrink the sim-to-real gap. SeoulTech’s Chae Seungjun said a backflip only scored if the hands planted and the body rotated a full 360 degrees, so the policy could not cheat the reward.

<figure>
  <img src="/images/heroes/robotis-oh-gym-3.jpg" alt="OH! Seminar group photo with students, staff, and several AI Sapiens K1 humanoids" loading="lazy" />
  <figcaption>First OH! Seminar group, K1s in the line. Source: ROBOTIS docs.</figcaption>
</figure>

## The platform underneath

K1 is the same open research body ROBOTIS has been documenting: **1355 mm**, **35 kg**, **23 DoF**, DYNAMIXEL-Q actuators. The YouTube description says students went from simulation to hardware in a month. ROBOTIS already open-sourced motion code in early August; WAVE says mechanical CAD and electronics are planned next.

CEO **Kim Byungsoo** (WAVE’s spelling) compared the student motions to last year’s World Humanoid Robot Games entries and said that with cameras and better algorithms, Korea could compete with China by **2027**. That is his forecast, not a result.

<figure>
  <img src="/images/heroes/robotis-oh-gym-4.jpg" alt="Lecture room with OH! GYM! on the screen and a row of white humanoids along the back wall" loading="lazy" />
  <figcaption>Cohort briefing, K1s parked along the wall. Source: ROBOTIS docs.</figcaption>
</figure>

ROBOTIS gave all four teams plaques and prize money, per WAVE. Cohort 2 applications are already closed on the docs page. An **OH! Challenge!** is listed for 2027.

## A Human's Take

A month on a real 23-DoF humanoid is a better education than another year of watching Unitree clips. The fallen taekwondo kick is the honest frame. I care that they had to rewrite the backflip reward so the sim would stop awarding a shrug. If ROBOTIS actually ships the CAD next, this gym becomes a farm team. If it stays a branded seminar with four robots against the wall, it is still a good student film.

## Sources

- [ROBOTIS Docs — OH! GYM!](https://docs.robotis.com/docs/common/oh_project)
- [YouTube — AI Sapiens #6: OH! GYM!](https://www.youtube.com/watch?v=_uav5s18CwQ)
- [Yahoo News / KOREA WAVE — ROBOTIS student humanoid showcase](https://news.yahoo.co.jp/articles/e284e55a84cd5afb1072616fdafed6f257f2b465)
- [ROBOTIS Docs — AI Sapiens K1 hardware](https://docs.robotis.com/docs/systems/aisapiens/specifications/hardware)
