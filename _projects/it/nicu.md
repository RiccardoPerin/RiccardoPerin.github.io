---
page_id: nicu
layout: page
title: Previsione del ricovero in TIN
description: "Tesi triennale: machine learning su dati clinici perinatali"
importance: 3
category: research
related_publications: true
---

**Contesto:** tesi triennale in Ingegneria Biomedica, Università di Padova (voto finale 110/110)
**Strumenti:** Python · scikit-learn · pandas
<!-- **Codice:** [RiccardoPerin/REPO-NAME](https://github.com/RiccardoPerin/REPO-NAME) -->

### Il problema

Prevedere quali neonati avranno bisogno di un ricovero in **Terapia Intensiva Neonatale (TIN)** aiuta gli ospedali a pianificare le risorse e a preparare l'équipe prima del parto.

### Metodo

- Pulizia e codifica di variabili materne, ostetriche e perinatali eterogenee
- Classificatore **Random Forest** con gestione dello sbilanciamento tra classi
- Analisi dell'importanza delle feature per individuare i predittori clinici più forti
- L'analisi è stata poi rifattorizzata in un notebook pulito e riproducibile

### Risultati

| Metrica  | Valore   |
| -------- | -------- |
| ROC AUC  | **0,80** |
| F1-score | **0,66** |

### Prossimi passi

Calibrazione delle probabilità, validazione esterna su una coorte di un altro ospedale e spiegazioni SHAP per le singole previsioni.
