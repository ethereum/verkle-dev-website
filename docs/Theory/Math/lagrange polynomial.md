# Lagrange Polynomial

Polynomial interpolation is the interpolation of a given data set by the polynomial of lowest possible degree that passes through the points of the dataset.
Lagrange interpolating polynomial is the unique polynomial of lowest degree that interpolates a given set of data.

## Definition

The Lagrange interpolating polynomial for nodes {y0, y1, ..., yk} is:

L(x) = 

lj(x) = 

As mentioned above the interpolating polynomial is unique. This characteristic allow uses in cryptography such as: Shamir's secret sharing scheme and KZC polynomial commitmens (Kate commitment)

## Uses

### Vector commitment and Verkle Tries

A commitment scheme allows one to commit to a chosen value (or statement) while keeping it hidden to others, with the ability to reveal the committed value later. (wiki) 
In Verkle Tree, the commitment method is called vector commitment (Ethereum). A vector commitment allows to commit to an ordered sequences of values in such a way that is later possible to open the commitment only with the reference to a specific position. (Catalano, Fiore).  
In practice, it is used a primitive more poweful, efficient and simplest than a vector commitment, called a polynomial commitment. Polynomial commitments let you hash and evalauted in any point the hashed polynomial (the polynomail can be found / defined with Lagrange interpolation), being the easiest to use KZG commitments and bulletprof-style commitments (Vitalik).  


#### KZG commitments


#### Pedersen vector commitment


