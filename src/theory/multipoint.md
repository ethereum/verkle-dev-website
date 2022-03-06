# IPA Multipoint

## Introduction

This document explains how to open multiple polynomials at multiple different points. Ultimately, we use one IPA proof, 1 commitment and 1 scalar. This is the batched setting.

## Statement

Given $m$ IPA commitments $C_0 = [f_0(X)] ... C_{m-1} = [f_{m-1}(X)]$, prove evaluations:

$$ 
    f_0(z_0) = y_0 \\\vdots \\f_{m-1}(z_{m-1}) = y_{m-1} 
$$

where $z_i \in \{0,...,d-1\}$

## Proof

1. Let $r \leftarrow H(C_0,...C_{m-1}, z_0, ..., z_{m-1}, y_0, ..., y_{m-1})$

$$
g(X) =  r^0 \frac{f_0(X) - y_0}{X-z_0} + r^1 \frac{f_1(X) - y_1}{X-z_1} + \ldots +r^{m-1} \frac{f_{m-1}(X) - y_{m-1}}{X-z_{m-1}}
$$

The prover starts off by committing to $g(X)$, we denote this by $D$ or $[g(X)]$.

The provers job is to now convince the verifier that $D$ is a commitment to $g(X)$. We do this by evaluating $g(X)$ at some random point $t$

We split the evaluation into two parts $g_1(t)$ and $g_2(t)$, $g_2(t)$ can be computed by the verifier, while $g_1(t)$ cannot, because it involves random evaluations at the polynomials $f_i(X)$. 


> - The verifier is able to compute the $g_2(t)$.
> - The prover will compute $g_1(t)$ and send a proof of it's correctness.

$$
g_1(t) = r^i \frac{f_i(t)}{t-z_i}
$$

$$
g_2(t) = r^i \frac{y_i}{t-z_i}
$$

2. Let $t \leftarrow H(r,D)$

We note that $g_1(X) = r^i \frac{f_i(X)}{X-z_i}$, however, we specify it as $r^i \frac{f_i(X)}{t-z_i}$ because the latter is also able to prove an opening for $g_1(t)$ **and** the verifier is able to compute the commitment for it.

Now we form two IPA proofs:

- One for $g_1(X)$ at $t$. We call this $\pi$ 
- One for $g(X)$ at $t$. We call this $\rho$

The prover now computes $y = g_1(t)$

The proof consists of $D, (\pi, y), \rho$

> In this non-aggregated variation, the prover does not need to add $[g_1(X)]$ to the transcript.

## Verification

The Verifier ultimately wants to verify that $D$ is the commitment to the polynomial $g(x)$.

The verifier computes $r$ and $t$.

The verifier also computes $g_2(t)$, we mentioned above that they can do this by themselves.

### Computing $g(t)$

The verifier now needs to compute $g(t)$:

$g(t) = g_1(t) - g_2(t)$

- We know that $g_1(t)$ was supplied in the proof as $y$. 
- $g_2(t)$ can be computed by the verifier.

Hence the verifier can compute $g(t)$. 

**Note however, that they cannot be sure that $g_1(t)$ is the correct computation by the prover. They need to build $[g_1(X)]$ themselves and verify it against $g_1(t)$**

#### Computing $[g_1(X)]$

This is $g_1(X)$:

$$
g_1(X) = r^i \frac{f_i(X)}{t-z_i}
$$

Hence $[g_1(X)]$ is:

$$
[g_1(X)] = \frac{r_i}{t-z_i}C_i
$$

The verifier is able to compute this themselves, and so is able to verify that $g_1(t)$ was computed correctly using IPA_VERIFY.

We can now call IPA_VERIFY using
- $[g_1(X)]$ 
- $g_1(t)$
- $\pi$

#### Is $g(t)$ correct?

Note now that since $g_1(t)$ was verified to be correct and $g_2(t)$ was computed by the verifier, we can be sure that $g(t)$ is correct.

## Verify $g(x)$ at $t$

We now call IPA_VERIFY using:

- $D = [g(X)]$ *
- $g(t)$
- $\rho$

*In actuality, it's not $D$ but an augmented $D$, but  this works at a higher level and does not ruin the explanation.

## Complexity

The communication complexity of this protocol is two IPA proofs, 1 scalar and 1 commitment. We can get a better protocol by aggregating things together!

## Aggregation

We now present a protocol to aggregate the two IPA proofs together, only requiring one IPA proof.


## Prover 

2. Let $q \leftarrow H(t, [g_1(X)])$

The prover no longer computes an IPA proof for $g_1(X)$ and $g(X)$ instead they combine them using $q$.

$g_3(X) = g_1(X) + q \cdot g(X)$

Now we form an IPA Proof for $g_3(X)$ at $t$. Lets call this $\sigma$.

The prover still computes $y = g_1(t)$

The proof consists of $D, \sigma, y$

## Verifier


In the previous step, the verifier called $[g_1(X)]$ ,$g_1(t)$ with $\pi$, we delay this verification and instead compute:

- $[g_3(X)] = [g_1(X)] + q \cdot [g(X)]$
- $g_3(t) = g_1(t) + q \cdot g(t)$

We now call IPA_VERIFY using:

- $[g_3(X)]$ 
- $g_3(t)$
- $\sigma$

> With overwhelming probability over $q$ this will only return true iff $[g_1(X)]$ and $[g(X)]$ opened at $t$ are $g_1(t)$ and $g(t)$ respectively, from the equation.

## Complexity

The communication complexity of the protocol is 1 IPA Proof, 1 commitment and 1 scalar.

## Do we need to add $[g_1(X)]$ to the transcript?

> In the KZG document, this is $h(X)$

If we were able to avoid this, then we could save a lot on prover time, as they could evaluate each $f_i$ at $t$, then do $\frac{r^i \cdot f_i(t)}{t - z_i}$ instead of needing to first compute $\frac{r^i \cdot f_i(X)}{t - z_i}$. (In the non-batched version)

However, we do need to do this because the challenge $q$ is aggregating $[g_1(X)]$ and $[g(X)]$, we need to bind $[g_1(X)]$ to the challenge $q$.

There may be an argument to say that since $g_1(X)$ uses $t$ and simply using $q = H(t)$ is enough to bind $g_1(X)$ to $q$. We can restate this problem as:

>
>Given two polynomials : $f(X, Y)$ and $g(X)$ 
>
>I generate a completely random variable $t$.
>
>If I want to add together $f(X, t)$ and $g(x)$
>
>Is it enough to generate randomness based on $g(X)$ and $t$ alone?

> The answer is no because the prover has free reign over $X$ and can change it without affecting $q$

