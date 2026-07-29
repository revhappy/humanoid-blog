---
title: "Interlatent Opens a Low-Latency VR Teleop Stack (QUIC + Browser IK)"
description: "Interlatent’s open-source robotics SDK puts VR teleoperation on a QUIC path with in-browser IK, a safety gate on the robot, and free hosted control."
pubDate: 2026-07-29
category: "AI"
author: "Shar Hendrix"
heroImage: "images/heroes/interlatent-teleop.jpg"
readTime: "5 min read"
featured: false
draft: false
---

**Interlatent** posted a technical blueprint for **low-latency VR teleoperation** on July 29, 2026: inverse kinematics in the **browser**, **QUIC-based** data streaming, and a **safety-first command bus** on the robot — plus a claim that teams can use the company’s **hosted teleoperation engine to control any supported robot for free**. The company linked a technical blog and an **Apache-2.0** open-source SDK on GitHub.

This is not a biped product launch. It is infrastructure for the thing every embodied-AI team actually does first: **put a human in the loop long enough to get usable demos and datasets**.

<figure>
  <img src="/images/heroes/interlatent-teleop.jpg" alt="Interlatent low-latency VR teleoperation architecture diagram" loading="lazy" />
  <figcaption>Architecture diagram from Interlatent’s July 29 teleoperation post. Source: Interlatent / X.</figcaption>
</figure>

## What They Claimed on X

From the company account (@interlatent):

- Blueprint for **low-latency VR teleoperation**
- **IK calculation on the browser**
- **QUIC-based** data streaming
- **Safety-first command bus**
- Hosted teleoperation engine to **control any robot for free** (per their wording)
- Links: technical blog at `interlatent.com/blog/interlatent-remote-teleoperation` and open-source SDK at [github.com/Interlatent/Interlatent](https://github.com/Interlatent/Interlatent)

We verified the architecture details against the open **docs/teleop.md** in that repository (fetched this session). The public blog page itself returned little crawlable body text; the GitHub docs are the primary technical source used below.

## Architecture (From the Open Docs)

Interlatent’s teleop design splits compute carefully:

**Off the robot (browser / platform):**

- WebXR VR overlay (e.g. Meta Quest browser — no custom install beyond the headset browser)
- Pose → joint targets via **hosted IK** (WebSocket path) **or** **in-browser IK** over **QUIC/WebTransport** (`QuicTeleopChannel`)
- Browser builds its IK solver from a **kinematic spec the node serves** from installed robot data

**On the robot (node):**

- Thin receiver only — the node does **not** run IK
- All motion converges on one path: absolute joint target → **`SafetyGate`** → `send_action`
- Same interface for human teleop and policy actions

<figure>
  <img src="/images/heroes/interlatent-teleop-2.jpg" alt="Interlatent sequence diagram for VR teleop and safety gate" loading="lazy" />
  <figcaption>Sequence-style diagram from the same Interlatent teleoperation post. Source: Interlatent / X.</figcaption>
</figure>

## Safety Model

The docs are explicit that **teleop safety lives next to the motors**, not in the browser:

- **Workspace clamp** from the robot’s joint profile
- **Velocity clamp** anchored to the last commanded pose
- **Deadman / clutch** — grip button engages tracking; release holds pose (soft hand-back, no snap)
- **Staleness freeze** — frames older than ~**250 ms** stop driving motion
- **Per-tick delta clamp** on the adapter for every action, human or policy
- **E-stop** latched sticky at decode time; clearing requires ending the session (not automatic)

That is the right paranoia level for anyone who has watched a teleop link glitch mid-pour.

## Why QUIC

Recordings use the **QUIC transport only** (no WebSocket fallback for recording sessions). The low-latency path runs aioquic WebTransport in a **dedicated child process** so Python GIL pressure from high-rate robot drivers cannot starve QUIC timers. Control rides unreliable datagrams (latest-wins); preview video uses short unidirectional streams per JPEG frame.

Interlatent’s README positions the project as **one open interface across robots** — connect, get observation, send joint actions — with adapters for arms including **SO-101**, **I2RT YAM**, and beta **Nori** / **Almond Axol** kinds. Cloud inference (DRTC action chunks, managed GPUs) is the hosted upsell; the SDK itself is open.

## A Human's Take

I’m here for anyone who treats teleop as **instrumented data collection**, not a party trick.

Browser IK + QUIC + a motor-side safety gate is the kind of boring stack that decides whether remote demos are usable or nauseating. Free hosted teleop is a smart growth loop — if it stays reliable under real uplink chaos.

What I’ll watch: how many robot kinds ship full `RobotProfile` + kinematic data (no profile, no human-driven motion, by design), whether glass-to-motor latency holds outside lab Wi-Fi, and whether labs actually publish datasets collected on this path. Open control surfaces are how small teams stop reinventing joint sockets every quarter.

## Sources

- [Interlatent — X post: low-latency VR teleoperation blueprint](https://x.com/interlatent/status/2082576789294244221)
- [GitHub — Interlatent/Interlatent (open-source SDK, Apache-2.0)](https://github.com/Interlatent/Interlatent)
- [GitHub — docs/teleop.md (VR teleop, QUIC, SafetyGate)](https://github.com/Interlatent/Interlatent/blob/main/docs/teleop.md)
- [Interlatent — product site](https://interlatent.com/)
- [Interlatent — technical blog URL linked from X](https://interlatent.com/blog/interlatent-remote-teleoperation)
