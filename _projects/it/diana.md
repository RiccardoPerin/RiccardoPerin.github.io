---
page_id: diana
layout: page
title: DIANA — rilevamento dei pasti da CGM
description: Digital twin e AI per la gestione adattiva del diabete di tipo 1 pediatrico
importance: 1
category: research
---

<!-- Prima di aggiungere risultati, figure o codice, verifica con i responsabili di DIANA cosa può essere pubblico. -->

**Ruolo:** studente collaboratore di ricerca, Università di Padova <br>
**Stato:** in corso (fase esplorativa e di prototipazione) <br>
**Strumenti:** Python · pandas · scikit-learn · PyTorch <br>

### Il problema

I bambini con diabete di tipo 1 in terapia multi-iniettiva (MDI) dipendono da boli di insulina ben sincronizzati con i pasti, e i pasti dimenticati o non annunciati sono una delle principali cause di iperglicemia. **DIANA** sviluppa un *digital twin*, un modello personalizzato della dinamica glucosio–insulina, insieme a strumenti di AI per adattare la terapia a ciascun bambino. Il **rilevamento automatico dei pasti** è uno dei suoi tasselli.

### Il mio lavoro

Sto sviluppando un modello di machine learning che rileva i pasti dai segnali di **monitoraggio continuo del glucosio (CGM)**. Il lavoro comprende il preprocessing delle serie temporali CGM, feature che descrivono la dinamica glicemica e il confronto tra modelli candidati. La valutazione è orientata all'utilità clinica: quanto velocemente viene rilevato un pasto e quanti falsi allarmi vedrebbe un paziente al giorno, non solo l'accuratezza.

### Perché mi interessa

Il rilevamento dei pasti si trova proprio al confine tra **modelli data-driven e modelli fisiologici** della cinetica glucosio–insulina, lo stesso territorio della modellazione farmacometrica (PK/PD) dell'insulina. Combinare i due approcci, invece di sceglierne uno, è la direzione che vorrei continuare a esplorare.
