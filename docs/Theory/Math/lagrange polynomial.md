# Lagrange Polynomial

Polynomial interpolation is the interpolation of a given data set by the polynomial of lowest possible degree that passes through the points of the dataset.
Lagrange interpolating polynomial is the unique polynomial of lowest degree that interpolates a given set of data.

## Definition

The Lagrange interpolating polynomial for nodes ${y_0, y_1, ..., y_k}$ is the linear combination:

$$\sum_{j=0}^{k} {y_j*l_j(x)}$$

Where $l_j(x)$ is Langrange basis (polynomial): 
 
$$
\mathcal{l_j}(x) = \prod_{m \neq j, m >= 0}\frac{x -x_m}{x_j - x_m}
$$

As mentioned above the interpolating polynomial is unique. This characteristic allows uses in cryptography such as: Shamir's secret sharing scheme and KZC polynomial commitmens (Kate commitment) *[https://en.m.wikipedia.org/wiki/Lagrange_polynomial]*

## Uses

### Vector commitment and Verkle Tries

A commitment scheme allows one to commit to a chosen value (or statement) while keeping it hidden to others, with the ability to reveal the committed value later *[https://en.m.wikipedia.org/wiki/Commitment_scheme]*.

In Verkle Tree, the commitment method is called vector commitment *[https://hackmd.io/@sin7y/rJZZy_mD9]*.

A vector commitment allows to commit to an ordered sequences of values in such a way that is later possible to open the commitment only with the reference to a specific position. *[https://eprint.iacr.org/2011/495.pdf], (Catalano, Fiore)*.

In practice, it is used a more poweful, efficient and simplest method than a vector commitment, called polynomial commitment. Polynomial commitments let you hash and evalaute in any point the hashed polynomial (the polynomail can be found-defined with Lagrange interpolation). The two polynomial commitment schemes easiest to be used are: **KZG and bulletprof-style commitments** *[https://vitalik.ca/general/2021/06/18/verkle.html]*.


##### KZG commitments

The Kate commitment scheme is designed as a polynomial commitment, where it also allows a vector commitment. A vector commitment commits to a vector $a_0,...,a_{n-1}$ and lets you prove that you committed to $a_i$ for some $i$. This could be reproduced using the Kate commitment scheme, which is a polynomial $p(X)$ where for all $i$, $p(i)= a_i$. This polynomial could be computed using Lagrange interpolation. *[https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html].*


##### Pedersen vector commitment

*"It is shown how to distribute a secret to n persons such that each person can verify that he has received correct information about the secret without talking with other persons. Any* $k$ *of these persons can later find the secret* $1<=k<=n$ , *whereas fewer than* $k$ *persons get no information about the secret."*
*[https://link.springer.com/content/pdf/10.1007/3-540-46766-1_9.pdf].*


Here you will find, that all verification of shares and the scheme are based in Lagrange Polynomial (section 4).







