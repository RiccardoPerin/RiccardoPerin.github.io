---
page_id: fetal-health
layout: page
title: Classificazione della salute fetale da CTG
description: Modelli ad albero interpretabili su dati di cardiotocografia, in Python e R
importance: 2
category: ml
---

**Strumenti:** Python (scikit-learn, pandas, seaborn) · R (caret, rpart, randomForest, gbm)
**Codice:** [RiccardoPerin/FetalHealth](https://github.com/RiccardoPerin/FetalHealth)

### Il problema

La cardiotocografia (CTG) registra la frequenza cardiaca fetale e le contrazioni uterine durante la gravidanza ed è uno degli strumenti principali per individuare la sofferenza fetale. L'interpretazione dei tracciati richiede tempo e varia da clinico a clinico: uno screening automatico affidabile potrebbe aiutare a segnalare prima i casi che richiedono attenzione.

### Dati

2.126 registrazioni CTG descritte da 21 feature (frequenza cardiaca di base, accelerazioni, decelerazioni, variabilità a breve e lungo termine, statistiche dell'istogramma), ciascuna classificata da ostetrici come **Normale**, **Sospetta** o **Patologica**. Le classi sono fortemente sbilanciate: circa 78% Normale, 14% Sospetta e 8% Patologica.

### Metodo

Ho sviluppato la stessa pipeline end-to-end due volte, in **Python** e in **R**, per confrontare i due ecosistemi:

- **Albero decisionale**, con profondità limitata (Python) o potato con cost-complexity (R), come baseline interpretabile
- **Random forest**, ottimizzata con cross-validation a 5 fold su numero di alberi e feature per split
- **Gradient boosting**, ottimizzato con cross-validation a 5 fold su learning rate, profondità, numero di alberi e dimensione delle foglie
- Split train/test stratificato, matrici di confusione annotate e analisi dell'importanza delle feature

### Risultati (Python, test set)

| Modello             | Accuratezza | Macro F1 | Recall Sospetta | Recall Patologica |
| ------------------- | ----------- | -------- | --------------- | ----------------- |
| Albero decisionale  | 0,89        | 0,80     | 0,56            | 0,86              |
| Random forest       | 0,94        | 0,88     | 0,71            | 0,89              |
| Gradient boosting   | **0,94**    | **0,88** | **0,73**        | **0,91**          |

L'implementazione in R dà risultati coerenti (accuratezza 0,92, 0,94 e 0,95). L'accuratezza complessiva è dominata dalla classe Normale, quindi il recall per classe è la misura più onesta: gli ensemble individuano circa 9 casi patologici su 10, mentre la classe **Sospetta**, per definizione a metà tra le altre due, resta la più difficile.

### Prossimi passi

Pesi di classe o apprendimento cost-sensitive per aumentare il recall della classe Sospetta, calibrazione delle probabilità e spiegazioni SHAP per le singole registrazioni.
