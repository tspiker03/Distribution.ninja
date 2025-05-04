---
# --- METADATA (YAML Frontmatter) ---
# Basic Info
title: "Normal Distribution"
slug: "normal-distribution" # URL-friendly identifier (matches filename)
keywords: ["Gaussian", "bell curve", "continuous", "probability", "statistics", "error distribution", "central limit theorem"]
aliases: ["Gaussian Distribution"] # Optional alternative names for search/linking

# Graphing Configuration (CRUCIAL - Drives the interactive plot)
distribution_type: "continuous" # Options: "continuous" or "discrete"
dimensionality: "univariate" # Options: "univariate" or "bivariate"
plot_function_handler:
  type: "scipy" # Options: "scipy", "custom_python", "sympy" (rarer)
  identifier: "scipy.stats.norm" # Function known to backend (e.g., scipy.stats class)
parameters: # List ALL parameters needed for the distribution PDF/PMF
  # Example for Normal:
  - name: "mu"         # Internal name matching handler's expectation (scipy 'loc')
    label: "μ (Mean)"  # Display label for the slider UI
    min: -5            # Minimum slider value
    max: 5             # Maximum slider value
    step: 0.1          # Slider step increment
    default: 0         # Initial default value
  - name: "sigma"      # Internal name matching handler's expectation (scipy 'scale')
    label: "σ (Std Dev)"
    min: 0.1           # Min value (MUST respect parameter constraints, e.g., sigma > 0)
    max: 3
    step: 0.1
    default: 1
  # Add other parameters as needed for different distributions

plot_range_hints: # Optional: Suggests default plot axis ranges to the backend calculator
  x_min_relative_to_mean: -4 # Example: plot from mu - 4*sigma
  x_max_relative_to_mean: 4 # Example: plot to mu + 4*sigma

# Relationships (Optional)
related_distributions: ["t-distribution", "log-normal-distribution", "chi-squared-distribution", "cauchy-distribution"] # Slugs of related pages

# --- END OF METADATA ---
---


## Introduction

### Overview
The Normal distribution, also known as the Gaussian distribution or the bell curve, is arguably the most important probability distribution in statistics. It is a continuous probability distribution characterized by its symmetric, bell-like shape. Its familiarity arises from its frequent appearance in nature and its central role in statistical theory, particularly the Central Limit Theorem.

### History
While its discovery is often attributed to Carl Friedrich Gauss, who used it extensively in the early 19th century (1809) to analyze astronomical data, its origins trace back further. Abraham de Moivre, in 1733, used the normal distribution to approximate binomial distribution probabilities for large numbers of trials (a special case of the Central Limit Theorem). Pierre-Simon Laplace also made significant contributions through his work on the Central Limit Theorem published in 1812. Gauss's detailed development and application solidified its importance, leading to the common name "Gaussian distribution".

### Use Cases & Description
The Normal distribution is used to model a vast array of phenomena, including:
* **Measurement Errors:** Errors in scientific measurements often follow a normal distribution.
* **Natural Phenomena:** Biological characteristics like height, weight, and blood pressure are often approximately normally distributed within populations.
* **Statistical Inference:** It forms the basis for many hypothesis tests and confidence intervals (e.g., Z-tests, t-tests for large samples).
* **Central Limit Theorem:** States that the sum (or average) of a large number of independent, identically distributed random variables will be approximately normally distributed, regardless of the original variable's distribution.
* **Financial Modeling:** Often used (though sometimes criticized) to model asset returns or price movements.
* **Noise Modeling:** Random noise in signals or processes is frequently modeled as Gaussian noise.

The distribution is fully defined by two parameters: the mean ($\mu$), which determines the center (location) of the peak, and the standard deviation ($\sigma$), which determines the spread or width of the bell curve. The variance ($\sigma^2$) is the square of the standard deviation.

## Statistical Properties

### Probability Density Function (PDF)
The Probability Density Function (PDF) defines the likelihood of a random variable taking on a given value. For the Normal distribution, it is:
$$f(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{ - \frac{(x-\mu)^2}{2\sigma^2} }$$
where $x \in (-\infty, \infty)$, $\mu$ is the mean, and $\sigma^2$ is the variance ($\sigma > 0$).

### Cumulative Distribution Function (CDF)
The Cumulative Distribution Function (CDF) gives the probability that the random variable is less than or equal to a specific value $x$. There is no closed-form elementary function for the Normal CDF. It is typically expressed using the error function (erf) or the CDF of the Standard Normal distribution ($\Phi(z)$ where $z = (x-\mu)/\sigma$):
$$F(x | \mu, \sigma^2) = P(X \le x) = \frac{1}{2} \left[ 1 + \text{erf}\left( \frac{x-\mu}{\sigma\sqrt{2}} \right) \right] = \Phi\left(\frac{x-\mu}{\sigma}\right)$$

### Quantile Function
The Quantile Function (Inverse CDF) gives the value $x$ such that $P(X \le x) = p$ for a given probability $p$. It is expressed using the inverse of the Standard Normal CDF ($\Phi^{-1}(p)$):
$$x_p = F^{-1}(p | \mu, \sigma^2) = \mu + \sigma \Phi^{-1}(p)$$

### Key Statistics
* **Mean:** $E[X] = \mu$
* **Median:** $Median(X) = \mu$
* **Mode:** $Mode(X) = \mu$
* **Variance:** $Var(X) = \sigma^2$
* **Standard Deviation:** $StdDev(X) = \sigma$
* **Skewness:** $Skew(X) = 0$ (The distribution is perfectly symmetric)
* **Kurtosis:** $Kurt(X) = 3$
* **Excess Kurtosis:** $Kurt(X) - 3 = 0$ (Mesokurtic)

### Moment Generating Function (MGF) / Characteristic Function
The Moment Generating Function (MGF) for the Normal distribution is:
$$M_X(t) = E[e^{tX}] = e^{\mu t + \frac{1}{2}\sigma^2 t^2}$$
The Characteristic Function is $\phi_X(t) = E[e^{itX}] = e^{i\mu t - \frac{1}{2}\sigma^2 t^2}$.

### Other Properties / Relationships
* **Linear Transformation:** If $X \sim N(\mu, \sigma^2)$, then $aX+b \sim N(a\mu+b, a^2\sigma^2)$.
* **Standard Normal:** A Normal distribution with $\mu=0$ and $\sigma^2=1$ is called the Standard Normal distribution, often denoted by $Z$. Any Normal variable $X$ can be standardized: $Z = (X-\mu)/\sigma \sim N(0, 1)$.
* **Sum of Independent Normals:** If $X_1 \sim N(\mu_1, \sigma_1^2)$ and $X_2 \sim N(\mu_2, \sigma_2^2)$ are independent, then $X_1+X_2 \sim N(\mu_1+\mu_2, \sigma_1^2+\sigma_2^2)$.
* **Central Limit Theorem:** The Normal distribution arises as the limit of sums/averages of many other distributions.
* **Related Distributions:** The square of a Standard Normal variable follows a Chi-squared distribution with 1 degree of freedom ($\chi^2(1)$). The ratio of a Standard Normal variable to the square root of an independent $\chi^2(k)/k$ variable follows a t-distribution with $k$ degrees of freedom. The ratio of two independent $\chi^2$ variables (scaled by their df) follows an F-distribution. If $X \sim N(\mu, \sigma^2)$, then $e^X$ follows a Log-Normal distribution.

## Parameter Estimation

Given $n$ independent and identically distributed (i.i.d.) samples $x_1, x_2, ..., x_n$ from a Normal distribution $N(\mu, \sigma^2)$.

### Likelihood Function
The Likelihood function $L(\mu, \sigma^2 | \mathbf{x})$ is the joint probability density of observing the data given the parameters:
$$L(\mu, \sigma^2 | \mathbf{x}) = \prod_{i=1}^n f(x_i | \mu, \sigma^2) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} e^{ - \frac{(x_i-\mu)^2}{2\sigma^2} }$$
$$L(\mu, \sigma^2 | \mathbf{x}) = (2\pi\sigma^2)^{-n/2} \exp\left( - \frac{1}{2\sigma^2} \sum_{i=1}^n (x_i-\mu)^2 \right)$$

### Log-Likelihood Function
Taking the natural logarithm simplifies maximization: $\ell(\mu, \sigma^2 | \mathbf{x}) = \ln L(\mu, \sigma^2 | \mathbf{x})$
$$\ell(\mu, \sigma^2 | \mathbf{x}) = -\frac{n}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^n (x_i-\mu)^2$$
$$\ell(\mu, \sigma^2 | \mathbf{x}) = -\frac{n}{2} \ln(2\pi) - \frac{n}{2} \ln(\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^n (x_i-\mu)^2$$

### Maximum Likelihood Estimator(s) (MLE)
To find the values of $\mu$ and $\sigma^2$ that maximize the (log-)likelihood function, we take partial derivatives with respect to each parameter, set them to zero, and solve. The MLEs are:
* **Mean:** $\hat{\mu}_{MLE} = \bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$ (The sample mean)
* **Variance:** $\hat{\sigma}^2_{MLE} = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2$ (The sample variance using $n$ in the denominator, which is slightly biased)

The MLE for the standard deviation is $\hat{\sigma}_{MLE} = \sqrt{\hat{\sigma}^2_{MLE}}$.

## Code Examples

Provide practical, copy-paste ready code snippets.

### R Code Examples

```R
# Ensure necessary libraries are mentioned, e.g., library(stats)
# library(MASS) # For fitdistr

# Parameters
mu_param <- 0
sigma_param <- 1

# 1. Generate Random Samples
n_samples <- 100
random_samples <- rnorm(n_samples, mean = mu_param, sd = sigma_param)
# print(head(random_samples))

# 2. Calculate Density (PDF) at a point
x_value <- 0
density_at_x <- dnorm(x_value, mean = mu_param, sd = sigma_param)
# print(paste("Density at x=0:", density_at_x))

# 3. Calculate Cumulative Probability (CDF) up to a point
prob_less_than_x <- pnorm(x_value, mean = mu_param, sd = sigma_param)
# print(paste("P(X <= 0):", prob_less_than_x))

# 4. Calculate Quantiles (Inverse CDF) for a probability
probability <- 0.95
quantile_value <- qnorm(probability, mean = mu_param, sd = sigma_param)
# print(paste("95th percentile:", quantile_value))

# 5. Fit Distribution to Data using MLE
# Generate some example data
set.seed(123)
some_data <- rnorm(200, mean = 2, sd = 1.5)
# Fit using MASS::fitdistr
# mle_fit <- MASS::fitdistr(some_data, "normal")
# print(mle_fit)
# Or calculate MLEs directly
# fitted_mu_mle <- mean(some_data)
# fitted_sigma2_mle <- mean((some_data - fitted_mu_mle)^2)
# print(paste("MLE Mean:", fitted_mu_mle))
# print(paste("MLE Variance:", fitted_sigma2_mle))
# print(paste("MLE Std Dev:", sqrt(fitted_sigma2_mle)))
