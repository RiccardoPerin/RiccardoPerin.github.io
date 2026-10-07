---
page_id: brain-mri
layout: page
title: Classificazione di tumori cerebrali da RM
description: CAE vs ResNet-50 vs ViT-B/16, con un paper in formato IEEE
importance: 1
category: ml
related_publications: true
---

**Contesto:** corso di Neural Networks, Università di Padova · team di tre, con Giovanni Zatti e Marcello Pennino
**Il mio ruolo:** responsabile della parte ResNet-50, refactoring della pipeline, coautore del paper
**Strumenti:** Python · PyTorch · Google Colab · LaTeX
**Codice:** [RiccardoPerin/MRI_Tumor_Classification](https://github.com/RiccardoPerin/MRI_Tumor_Classification)
**Paper:** [PDF] (assets/pdf/it/Brain_Tumor_MRI_Classification_Without_Synthetic_Data_Augmentation__A_Comparative_Study_of_a_Frozen_Autoencoder__ResNet_50__and_ViT_B_16__7_.pdf)

### La domanda

Lavori recenti riportano accuratezze quasi perfette nella classificazione di tumori cerebrali da RM usando pipeline complesse che combinano dati sintetici da GAN, autoencoder e transformer. Ci siamo posti una domanda più semplice: **quanto contano, da sole, la scelta dell'architettura e il fine-tuning**, senza data augmentation sintetica?

### Dati e protocollo

Il dataset Kaggle Brain Tumor MRI a 4 classi (glioma, meningioma, tumore ipofisario, nessun tumore). La cartella di test ufficiale è tenuta come insieme di test indipendente e il resto è diviso in training e validation, così tutti i modelli vengono confrontati con lo stesso identico protocollo.

### Modelli

- **Autoencoder convoluzionale (CAE)** con encoder congelato, con una testa lineare (ablazione) e una testa MLP
- **ResNet-50** pre-addestrata su ImageNet con fine-tuning (la mia parte), più un'ablazione addestrata da zero
- **ViT-B/16** con fine-tuning completo

### Risultati (accuratezza sul test set)

| Modello                    | Accuratezza |
| -------------------------- | ----------- |
| CAE + testa MLP            | 83,8%       |
| ResNet-50 da zero          | 93,7%       |
| ViT-B/16 (fine-tuning)     | 95,1%       |
| ResNet-50 (pre-addestrata) | **95,3%**   |

ResNet-50 pre-addestrata e ViT-B/16 ottengono risultati quasi identici, e il **glioma** è la classe più difficile per tutte le architetture.

### Aspetti di ingegneria

Ho rifattorizzato il notebook condiviso del team in funzioni riutilizzabili con flag `FORCE_RETRAIN` per ogni fase, così ogni passaggio (training, valutazione, grafici) può essere riusato o riaddestrato in modo indipendente con le risorse limitate di Colab.
