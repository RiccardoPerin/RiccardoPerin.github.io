---
page_id: fetal-health
layout: page
title: Fetal health classification from CTG
description: Interpretable tree-based models on cardiotocography data, in Python and R
importance: 2
category: ml
---

**Tools:** Python (scikit-learn, pandas, seaborn) · R (caret, rpart, randomForest, gbm) <br>
**Code:** [RiccardoPerin/FetalHealth](https://github.com/RiccardoPerin/FetalHealth) <br>

### The problem

Cardiotocography (CTG) monitors the fetal heart rate and uterine contractions during pregnancy, and is one of the main tools for spotting fetal distress. Reading CTG traces is time-consuming and varies between clinicians, so a reliable automatic screen could help flag the cases that need attention first.

### Data

2,126 CTG recordings described by 21 features (baseline heart rate, accelerations, decelerations, short- and long-term variability, histogram statistics), each labelled by obstetricians as **Normal**, **Suspect** or **Pathological**. The classes are strongly imbalanced: about 78% Normal, 14% Suspect and 8% Pathological.

### Approach

I built the same end-to-end pipeline twice, in **Python** and in **R**, to compare the two ecosystems:

- **Decision tree**, depth-limited (Python) or pruned by cost-complexity (R), as an interpretable baseline
- **Random forest**, tuned with 5-fold cross-validation over the number of trees and features per split
- **Gradient boosting**, tuned with 5-fold cross-validation over learning rate, depth, number of trees and leaf size
- Stratified train/test split, annotated confusion matrices and feature-importance analysis

### Results (Python, held-out test set)

| Model             | Accuracy | Macro F1 | Recall Suspect | Recall Pathological |
| ----------------- | -------- | -------- | -------------- | ------------------- |
| Decision tree     | 0.89     | 0.80     | 0.56           | 0.86                |
| Random forest     | 0.94     | 0.88     | 0.71           | 0.89                |
| Gradient boosting | **0.94** | **0.88** | **0.73**       | **0.91**            |

The R implementation gives consistent results (accuracy 0.92, 0.94 and 0.95). Overall accuracy is dominated by the Normal class, so per-class recall is the more honest measure: the ensembles catch about 9 in 10 pathological cases, while the **Suspect** class, which sits between the other two by definition, remains the hardest.

### What I'd do next

Class weighting or cost-sensitive learning to raise Suspect recall, probability calibration, and SHAP explanations for individual recordings.
