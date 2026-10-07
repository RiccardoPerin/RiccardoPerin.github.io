---
page_id: nicu
layout: page
title: NICU admission prediction
description: "BSc thesis: machine learning on perinatal clinical data"
importance: 3
category: research
related_publications: true
---

**Context:** BSc thesis in Biomedical Engineering, University of Padova (final grade 110/110)
**Tools:** Python · scikit-learn · pandas
**Code:** [RiccardoPerin/SCBU-Admission-Prediction](https://github.com/RiccardoPerin/SCBU-Admission-Prediction)

### The problem

Anticipating which newborns will need **Neonatal Intensive Care Unit (NICU)** admission helps hospitals plan resources and prepare the care team before delivery.

### Approach

- Cleaning and encoding of heterogeneous maternal, obstetric and perinatal variables
- **Random Forest** classifier with handling of class imbalance
- Feature-importance analysis to identify the strongest clinical predictors
- The analysis was later refactored into a clean, reproducible notebook

### Results

| Metric   | Value    |
| -------- | -------- |
| ROC AUC  | **0.80** |
| F1-score | **0.66** |

### What I'd do next

Probability calibration, external validation on a cohort from another hospital, and SHAP-based explanations for individual predictions.
