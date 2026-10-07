---
page_id: diana
layout: page
title: DIANA — meal detection from CGM
description: Digital twin and AI for adaptive management of paediatric Type 1 Diabetes
importance: 1
category: research
---

<!-- Before adding results, figures or code, check with the DIANA supervisors what can be public. -->

**Role:** student research collaborator, University of Padova <br>
**Status:** ongoing (exploratory and prototyping phase)<br>
**Tools:** Python · pandas · scikit-learn · PyTorch<br>

### The problem

Children with Type 1 Diabetes on multiple daily injections (MDI) depend on well-timed insulin boluses around meals, and missed or unannounced meals are a major cause of hyperglycaemia. **DIANA** develops a *digital twin*, a patient-specific model of glucose–insulin dynamics, together with AI tools to adapt therapy to each child. Automatic **meal detection** is one of its building blocks.

### My work

I'm developing a machine-learning model that detects meals from **continuous glucose monitoring (CGM)** signals. The work covers preprocessing of CGM time series, features describing glucose dynamics, and comparing candidate models. Evaluation is framed around clinical usefulness: how quickly a meal is detected and how many false alarms a patient would see per day, not only accuracy.

### Why it interests me

Meal detection sits right at the boundary between **data-driven models and physiological models** of glucose–insulin kinetics, the same territory as pharmacometric (PK/PD) modelling of insulin. Combining the two, rather than choosing one, is the direction I'd like to keep exploring.
