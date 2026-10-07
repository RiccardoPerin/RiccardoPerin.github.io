---
page_id: scadenziario
layout: page
title: Scadenziario — gestione scadenze e conformità
description: Un gestionale usato ogni giorno da un'impresa edile, con una demo pubblica
importance: 1
category: software
---

**Stato:** in produzione da agosto 2026 · unico sviluppatore <br>
**Strumenti:** Flutter Web · Dart · PocketBase · nginx · VPS Linux · Docker <br>
**Demo:** [riccardoperin.github.io/scadenziario-demo](https://riccardoperin.github.io/scadenziario-demo/) (accesso `demo@demo.it` / `demodemo`) <br>
**Codice:** [RiccardoPerin/scadenziario-demo](https://github.com/RiccardoPerin/scadenziario-demo) <br>

### Perché esiste

L'azienda gestiva la documentazione di cantiere (certificati assicurativi, verifiche dei macchinari, formazione sulla sicurezza, cassette di primo soccorso) tra fogli di calcolo e carta, senza un modo affidabile per sapere cosa stesse per scadere. In cantiere un rinnovo dimenticato è un rischio di conformità, non solo un fastidio. L'app ha sostituito questa gestione manuale, e un'alternativa commerciale, con uno strumento su misura e in self-hosting.

### Cosa fa

- Gestisce cantieri, subappaltatori e loro dipendenti, personale interno, veicoli, macchinari, estintori, cassette di primo soccorso e impianti, ciascuno con le proprie scadenze
- **Caricamento documenti con versioning**, con il controllo delle scadenze sempre sull'ultima versione
- **Soglie di preavviso configurabili** per tipo di documento, e un flag "riservato" che silenzia gli avvisi per gli elementi già in rinnovo
- **Riepiloghi email giornalieri** differenziati per destinatario: l'ufficio riceve tutto raggruppato per cantiere, ogni subappaltatore solo i propri documenti
- Autenticazione a due fattori con OTP via email, esportazione PDF, localizzazione italiano e inglese

### Architettura

Frontend in Flutter Web (Provider, go_router) su backend PocketBase in self-hosting, su un VPS dietro un reverse proxy nginx. Circa 170 migrazioni incrementali dello schema hanno mantenuto tracciabile il modello dati durante tutto lo sviluppo. La demo pubblica usa lo stesso codice con un backend separato popolato da dati fittizi.
