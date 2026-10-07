---
page_id: brain-mri
layout: page
title: Brain tumour MRI classification
description: CAE vs ResNet-50 vs ViT-B/16, with an IEEE-format paper
importance: 1
category: ml
related_publications: true
---

**Context:** Neural Networks course, University of Padova · team of three, with Giovanni Zatti and Marcello Pennino
**My role:** ResNet-50 lead, pipeline refactoring, co-author of the paper
**Tools:** Python · PyTorch · Google Colab · LaTeX
**Code:** [RiccardoPerin/MRI_Tumor_Classification](https://github.com/RiccardoPerin/MRI_Tumor_Classification)

### Question

Recent work reports near-perfect accuracy on brain tumour MRI classification using complex pipelines that combine synthetic GAN data, autoencoders and transformers. We asked a simpler question: **how much do the choice of architecture and fine-tuning matter on their own**, without synthetic data augmentation?

### Data and protocol

The 4-class Kaggle Brain Tumor MRI dataset (glioma, meningioma, pituitary tumour, no tumour). The official test folder is kept as a held-out set and the training pool is split into training and validation, so all models are compared under exactly the same protocol.

### Models

- **Convolutional autoencoder (CAE)** with a frozen encoder, plus a linear head (ablation) and an MLP head
- **ResNet-50**, ImageNet-pretrained and fine-tuned (my part), plus a from-scratch ablation
- **ViT-B/16**, fully fine-tuned

### Results (test accuracy)

| Model                  | Accuracy  |
| ---------------------- | --------- |
| CAE + MLP head         | 83.8%     |
| ResNet-50 from scratch | 93.7%     |
| ViT-B/16 (fine-tuned)  | 95.1%     |
| ResNet-50 (pretrained) | **95.3%** |

Pretrained ResNet-50 and ViT-B/16 perform almost identically, and **glioma** is consistently the hardest class for every architecture.

### Engineering

I refactored the shared team notebook into reusable utility functions with per-stage `FORCE_RETRAIN` flags, so each stage (training, evaluation, plots) can be cached or retrained independently on limited Colab compute.
