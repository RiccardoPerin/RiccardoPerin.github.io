---
page_id: scadenziario
layout: page
title: Scadenziario — expiry & compliance tracker
description: A management system used daily by a construction company, with a public demo
importance: 1
category: software
---

**Status:** in production since August 2026 · sole developer <br>
**Tools:** Flutter Web · Dart · PocketBase · nginx · Linux VPS · Docker <br>
**Live demo:** [riccardoperin.github.io/scadenziario-demo](https://riccardoperin.github.io/scadenziario-demo/) (login `demo@demo.it` / `demodemo`) <br>
**Code:** [RiccardoPerin/scadenziario-demo](https://github.com/RiccardoPerin/scadenziario-demo) <br>

### Why it exists

The company tracked job-site documentation (insurance certificates, machinery inspections, safety training records, first-aid kits) across spreadsheets and paper, with no reliable way to know what was about to expire. On a construction site a missed renewal is a compliance risk, not just an inconvenience. The app replaced that manual tracking, and a commercial alternative, with a custom self-hosted tool.

### What it does

- Tracks job sites, subcontractors and their employees, company staff, vehicles, machinery, fire extinguishers, first-aid kits and building systems, each with its own expiry dates
- **Versioned document uploads**, with expiry checks always resolved against the latest version
- **Configurable warning thresholds** per document type, and a "reserved" flag that silences alerts for items already being renewed
- **Daily email digests** routed by recipient: office staff get everything grouped by job site, each subcontractor only their own documents
- Two-factor authentication via email OTP, PDF export, Italian and English localisation

### Engineering

A Flutter Web frontend (Provider, go_router) on a self-hosted PocketBase backend, deployed on a VPS behind an nginx reverse proxy. Around 170 incremental schema migrations kept the data model traceable throughout development. The public demo runs the same codebase on a separate backend seeded with fictional data.
