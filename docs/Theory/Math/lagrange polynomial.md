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

As mentioned above the interpolating polynomial is unique. This characteristic allow uses in cryptography such as: Shamir's secret sharing scheme and KZC polynomial commitmens (Kate commitment)

## Uses

### Vector commitment and Verkle Tries

A commitment scheme allows one to commit to a chosen value (or statement) while keeping it hidden to others, with the ability to reveal the committed value later (wiki).
In Verkle Tree, the commitment method is called vector commitment (Ethereum).
A vector commitment allows to commit to an ordered sequences of values in such a way that is later possible to open the commitment only with the reference to a specific position. (Catalano, Fiore).  
In practice, it is used a more poweful, efficient and simplest method than a vector commitment, called polynomial commitment. Polynomial commitments let you hash and evalaute in any point the hashed polynomial (the polynomail can be found-defined with Lagrange interpolation). The easiest commitments to be used: KZG and bulletprof-style commitments (Vitalik).  


#### KZG commitments


#### Pedersen vector commitment


