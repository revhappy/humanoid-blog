---
title: "Unitree G1 EDU: Root Over Bluetooth, Two CVE Chains"
description: "Olivier Laflamme disclosed two root RCE chains on Unitree’s G1 EDU, including a BLE path. The cloud key-recovery check is patched."
pubDate: 2026-08-29
category: "Humanoids"
author: "Robb Harlan"
heroImage: "images/heroes/unitree-g1-unibled-3.jpg"
readTime: "5 min read"
featured: false
draft: false
---

Security researcher **Olivier Laflamme** published **UniBLEed** on **27 August 2026**: two independent root remote-code-execution chains on **Unitree’s G1 EDU**, including one that starts over Bluetooth Low Energy. The write-up is on boschko.ca. The Hacker News covered it the next day.

The locomotion PC is the Linux box that moves the robot, talks to cameras, speakers, and voice. Root there is not an app bug. It is the machine.

<figure>
  <img src="/images/heroes/unitree-g1-unibled-3.jpg" alt="Unitree G1 humanoid standing in a studio pose" loading="lazy" />
  <figcaption>Unitree G1 product still. Source: Unitree Robotics.</figcaption>
</figure>

## What the two chains do

Laflamme tracks them as **CVE-2026-76639** and **CVE-2026-76640**.

**CVE-2026-76639** is a network-adjacent path. A path-traversal bug in the robot’s **chat_go** AI knowledge base writes a file into **bashrunner**’s whitelist directory. bashrunner then executes it as root on the locomotion PC. Laflamme’s timeline puts first root via this chain on **8–10 May 2026**, on firmware he had upgraded to **V1.5.2**.

**CVE-2026-76640** is the Bluetooth chain. GATT characteristic **0xFFE2** accepts writes without pairing. A cleartext bootstrap opcode returns an RSA-wrapped AES-128 key blob. Unitree’s cloud endpoint `/device/bindExtData` decrypted that blob for any logged-in (including free) Unitree account without checking that the account owned the serial number. With the key, Wi-Fi provisioning opcodes become available. A 121-byte PSK forces an unquoted heredoc in `wpa_connect.sh`, so the G1 joins the attacker’s hotspot. From there the chat_go chain leaks the PIE base of `btgatt-server`. A 1050-byte write through a 500-byte `wifi_ssid` buffer forges event-loop cleanup so `system()` runs as root.

Laflamme says he only tested worm-style spread on **two G1s in one room**. He also writes that Unitree’s July 2026 account-to-robot binding check on the cloud endpoint breaks that exact proof-of-concept flow.

The Hacker News, citing the same disclosure, says an exact fixed firmware release is not in any accessible Unitree guidance it reviewed. Unitree’s product page lists G1 and G1 EDU as separate SKUs. Broader applicability to other Unitree robots is unconfirmed.

## Money, timeline, and Unitree’s side

Laflamme’s timeline: the EDU unit arrived **29 April 2026**. Unitree verified RCE #1 on **14 May** and RCE #2 by **30 June**. The cloud ownership check went in **1 July–6 August**. On **6 August**, he writes, Unitree paid **$4,000** for the BLE chain and **$1,000** for chat_go.

He quotes Unitree security contacts as saying the company already knew some of the issues internally and had patches, some internal at publish time, for most or all of them. The post is framed as a point-in-time account, not a claim about today’s shipped firmware.

Unitree’s G1 product page lists the consumer G1 at **$13,500** before tax and shipping, **about 35 kg**, **1320 mm** tall, with Wi-Fi 6 and Bluetooth 5.2. EDU pricing is “contact sales.” Laflamme’s post describes the robot he tested as a **$20,000** humanoid.

<figure>
  <img src="/images/heroes/unitree-g1-unibled-2.jpg" alt="Unitree G1 crouched on a studio backdrop" loading="lazy" />
  <figcaption>G1 in a squat. Source: Unitree Robotics.</figcaption>
</figure>

Reports go to [security.unitree.com](https://security.unitree.com/). Laflamme’s earlier Go2 work is a separate set of CVEs; this post is G1 EDU.

## A Human's Take

A humanoid that walks, sees, and speaks is a moving Linux box with motors. If BLE setup plus a cloud decrypt-any-serial endpoint can get you root, the “nearby” threat is not theoretical in a lab full of G1 EDUs. I care that Unitree shipped a cloud binding fix and talked to the researcher. I also care that, as of The Hacker News’s 28 August check, owners still did not have a named firmware to point at. Until that number is public, treat an unpatched EDU as a machine you do not leave in Bluetooth range of strangers.

## Sources

- [Olivier Laflamme — UniBLEed technical disclosure](https://boschko.ca/g1-ble-rce/)
- [The Hacker News — Two Unitree G1 EDU flaws enable root RCE](https://thehackernews.com/2026/08/two-unitree-g1-edu-humanoid-robot-flaws.html)
- [Unitree — G1 / G1 EDU product page](https://www.unitree.com/g1/)
