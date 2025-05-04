# Contributing to distributions.ninja

Welcome! We're thrilled you're interested in contributing to `distributions.ninja`, a resource for understanding statistical distributions. Your contributions help make this site more accurate and comprehensive for everyone.

This document provides guidelines for contributing. Please read it carefully.

## Getting Started

* **Prerequisites:**
    * A GitHub account.
    * Familiarity with Git and the GitHub Fork & Pull Request workflow.
    * Basic understanding of Markdown syntax.
    * Working knowledge of the statistical distribution you plan to add/edit.
    * Familiarity with LaTeX syntax for mathematical formulas.
    * Basic familiarity with R and Python for code examples.
* **Setup:**
    1.  **Fork** the repository on GitHub.
    2.  **Clone** your forked repository locally: `git clone https://github.com/YOUR_USERNAME/distributions.ninja.git`
    3.  Create a **new branch** for your changes: `git checkout -b your-feature-branch-name`

## Types of Contributions

The primary way to contribute currently is by **adding new distribution pages** or **editing/improving existing ones** via Markdown files.

Code contributions (to the Next.js frontend or Python backend) may be possible later but require discussing with the maintainers first via GitHub Issues.

## Contribution Workflow (Markdown Content)

1.  **Choose/Create File:**
    * To add a new distribution, create a new file under the `content/distributions/` directory (e.g., `content/distributions/my-new-distribution.md`). Use a URL-friendly slug for the filename.
    * To edit an existing distribution, find its corresponding `.md` file.
2.  **Follow the Template:** Edit the file using the **Markdown Template** structure provided below. Ensure all required sections and metadata are included.
3.  **Write Content:** Fill in the sections with accurate, clear, and concise information. Pay special attention to mathematical formulas and code examples.
4.  **Commit Changes:** Make small, logical commits with clear messages: `git commit -m "feat: Add initial content for MyNewDistribution"`
5.  **Push Branch:** Push your changes to your fork: `git push origin your-feature-branch-name`
6.  **Open Pull Request (PR):** Go to the original `distributions.ninja` repository on GitHub and open a Pull Request from your branch to the `main` branch.
7.  **PR Description:** Clearly describe the changes you made in the PR description. If adding a new distribution, list the sources you consulted.
8.  **Review:** Maintainers will review your PR for accuracy, completeness, clarity, and adherence to the template/guidelines. Feedback may be provided, requiring further changes on your branch.
9.  **Merge:** Once approved, maintainers will merge your PR. Your contribution will be deployed automatically via Vercel.

## The Markdown Template

All distribution pages **MUST** follow this structure. Create a `.md` file (e.g., `content/distributions/distribution-slug.md`) and use this template:

```markdown
---
# --- METADATA (YAML Frontmatter) ---
# Basic Info
title: "Distribution Name (e.g., Normal Distribution)"
slug: "normal-distribution" # URL-friendly identifier (matches filename)
keywords: ["keyword1", "keyword2", "e.g. bell curve", "continuous"] # For search
aliases: ["Gaussian Distribution"] # Optional alternative names for search/linking

# Graphing Configuration (CRUCIAL - Drives the interactive plot)
distribution_type: "continuous" # Options: "continuous" or "discrete"
dimensionality: "univariate" # Options: "univariate" or "bivariate"
plot_function_handler:
  type: "scipy" # Options: "scipy", "custom_python", "sympy" (rarer)
  identifier: "scipy.stats.norm" # Function known to backend (e.g., scipy.stats class) OR reference to custom code
parameters: # List ALL parameters needed for the distribution PDF/PMF
  # Example for Normal:
  - name: "mu"         # Internal name matching handler's expectation (e.g., scipy 'loc')
    label: "μ (Mean)"  # Display label for the slider UI
    min: -5            # Minimum slider value
    max: 5             # Maximum slider value
    step: 0.1          # Slider step increment
    default: 0         # Initial default value
  - name: "sigma"      # Internal name matching handler's expectation (e.g., scipy 'scale')
    label: "σ (Std Dev)"
    min: 0.1           # Min value (MUST respect parameter constraints, e.g., sigma > 0)
    max: 3
    step: 0.1
    default: 1
  # Add other parameters as needed for different distributions (e.g., n, p for Binomial; df for t-dist)

plot_range_hints: # Optional: Suggests default plot axis ranges to the backend calculator
  x_min_relative_to_mean: -4 # Example: plot from mu - 4*sigma
  x_max_relative_to_mean: 4 # Example: plot to mu + 4*sigma
  # For discrete, might specify integer range: x_min: 0, x_max: 20

# Relationships (Optional)
related_distributions: ["t-distribution", "log-normal-distribution"] # Slugs of related pages

# --- END OF METADATA ---

# --- CONTENT (Markdown) ---

## Introduction

### Overview
(Concise summary of the distribution.)

### History
(Origins, key figures, dates, publications.)

### Use Cases & Description
(What it models, common applications, intuitive explanation.)

## Statistical Properties

### Probability Density Function (PDF) / Probability Mass Function (PMF)
(Formal definition using LaTeX block math `$$...$$`.)
Example:
$$f(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{- \frac{(x-\mu)^2}{2\sigma^2}}$$

### Cumulative Distribution Function (CDF)
(CDF formula using LaTeX `$$...$$`.)

### Quantile Function
(Inverse CDF formula, if common, using LaTeX `$$...$$`.)

### Key Statistics
(Use bullet points and inline LaTeX `$..$` or block math `$$...$$`.)
* **Mean:** $E[X] = ...$
* **Variance:** $Var(X) = ...$
* **Skewness:** ...
* **Kurtosis:** ...

### Moment Generating Function (MGF) / Characteristic Function
(MGF/Characteristic Function formula using LaTeX `$$...$$`.)

### Other Properties / Relationships
(Parameter space, relationships to other distributions, important notes.)

## Parameter Estimation

### Likelihood Function
($L(\theta | \mathbf{x})$ using LaTeX `$$...$$`.)

### Log-Likelihood Function
($\ell(\theta | \mathbf{x})$ using LaTeX `$$...$$`.)

### Maximum Likelihood Estimator(s) (MLE)
(State MLE(s) $\hat{\theta}_{MLE} = ...$ using LaTeX. Include derivation sketch or reference if feasible.)

### (Optional) Other Estimation Methods
(Briefly mention Method of Moments, Bayesian priors, etc.)

## Code Examples

Provide practical, copy-paste ready code snippets for common tasks. Ensure code is correct and uses standard libraries.

### R Code Examples

Use R syntax highlighting by starting the block with ` ```R `.
```R
# library(stats) # Mention libraries

# Parameters (use descriptive names matching text)
param1_val <- ...
param2_val <- ...

# 1. Generate Random Samples
# Code here...

# 2. Calculate Density (PDF/PMF)
# Code here...

# 3. Calculate Cumulative Probability (CDF)
# Code here...

# 4. Calculate Quantiles (Inverse CDF)
# Code here...

# 5. Fit Distribution to Data (if applicable)
# Code here...
```

### Python Code Examples

Use Python syntax highlighting by starting the block with ` ```python `.
```python
# from scipy import stats # Mention libraries

# Parameters (use descriptive names matching text)
param1_val = ...
param2_val = ...

# 1. Generate Random Samples
# Code here...

# 2. Calculate Density (PDF/PMF)
# Code here...

# 3. Calculate Cumulative Probability (CDF)
# Code here...

# 4. Calculate Quantiles (Inverse CDF)
# Code here...

# 5. Fit Distribution to Data (if applicable)
# Code here...
```
```

## Code Style

* Follow standard coding practices for R and Python.
* Use clear variable names.
* Add comments where necessary.

## Reporting Issues

If you find bugs, inaccuracies, or areas for improvement, please open an issue on GitHub.

Thank you for contributing!
