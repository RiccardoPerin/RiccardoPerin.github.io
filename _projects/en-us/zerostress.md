---
page_id: zerostress
layout: page
title: ZeroStress
description: Flutter app for stress and recovery monitoring with wearable sensors
importance: 2
category: software
---

**Tools:** Flutter · Dart · Provider · REST APIs · Bluetooth Low Energy
<!-- **Code:** [RiccardoPerin/REPO-NAME](https://github.com/RiccardoPerin/REPO-NAME) -->

A mobile app that turns heart-rate data from **Polar** wearables into stress and recovery insights, integrated with the University of Padova's **IMPACT** wearable research platform.

### Highlights

- **Physiology-based scoring engine** using the Tanaka formula for maximum heart rate and the Karvonen heart-rate reserve
- **Individualised thresholds:** I replaced a fixed absolute heart-rate threshold with a **%HRR-based threshold** following ACSM/AHA methodology, so alerts adapt to each user's fitness
- BLE connection to Polar devices and REST API integration with IMPACT
- Guided breathing exercises and scheduled local notifications
