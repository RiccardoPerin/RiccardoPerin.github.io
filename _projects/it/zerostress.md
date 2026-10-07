---
page_id: zerostress
layout: page
title: ZeroStress
description: App Flutter per il monitoraggio di stress e recupero con sensori indossabili
importance: 2
category: software
---

**Strumenti:** Flutter · Dart · Provider · REST API · Bluetooth Low Energy
<!-- **Codice:** [RiccardoPerin/REPO-NAME](https://github.com/RiccardoPerin/REPO-NAME) -->

Un'app mobile che trasforma i dati di frequenza cardiaca dei dispositivi **Polar** in indicatori di stress e recupero, integrata con **IMPACT**, la piattaforma di ricerca sui dispositivi indossabili dell'Università di Padova.

### Punti chiave

- **Motore di scoring su base fisiologica** con la formula di Tanaka per la frequenza cardiaca massima e la riserva cardiaca di Karvonen
- **Soglie personalizzate:** ho sostituito una soglia fissa di frequenza cardiaca con una **soglia basata su %HRR** secondo la metodologia ACSM/AHA, così gli avvisi si adattano al livello di allenamento di ciascun utente
- Connessione BLE ai dispositivi Polar e integrazione REST con IMPACT
- Esercizi di respirazione guidata e notifiche locali programmate
