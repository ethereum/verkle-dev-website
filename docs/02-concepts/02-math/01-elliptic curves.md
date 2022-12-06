# Elliptic Curves

Elliptic curves are a core foundation of modern cryptography techniques and is used extensively in web browsers, digital security products and blockchain protocols. Here we summarise the elliptic curve knowledge required for implementing verkle tries. If elliptic curves are an unfamiliar topic to you, we would suggest diving into [More Reading](#more-reading)

## Elliptic curve points as a group

Using a [carefully designed addition (+) operation](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/#group-law), we can form an [abelian group](./00-group.md/#abelian-group) out of the points of an elliptic curve. 

## Scalar multiplication

We can extend the addition operation for elliptic curve points to define scalar multiplication:

$m*P = \underbrace{P + P + \cdots + P}_{m\ \text{times}}$, where $m$ is an integer > 0 and $P$ is an elliptic curve point.

The above expression suggests that scalar multiplication in linear time operation. However we can use the [double-and-add algorithm](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/#scalar-multiplication) to execute scalar multiplication in $O(\log{N})$ time.

## Multiscalar multiplication

Multiscalar multiplication is when we 'add together' several scalar multiplication results, e.g.

$m*P + n*Q = \underbrace{P + P + \cdots + P}_{m\ \text{times}} + \underbrace{Q + Q + \cdots + Q}_{n\ \text{times}}$

## Elliptic curves over a finite field

We can restrict an elliptic curve such that the x and y coordinates of each point is an element of [$\mathbb{F}_p$](./00-group.md/#integers-modulo-prime---fp), rather than a real number $\mathbb{R}$. More formally, the continuous elliptic curve defined by

$y^2 = x^3 + ax + b$, where $x, y, a, b \in \mathbb{R}$

is restricted to 

$y^2 = x^3 + ax + b\>(mod\>p)$, where $x, y, a, b \in \mathbb{F}_p$ and $p$ is a prime number

This transforms the graph from a continuous curve to a discrete set of points.

![merkle_00](/img/elliptic_curve_0.png)
**Figure 1.** Elliptic curve defined by $y^2 = x^3 + 2x + 3$ transformed from being defined over $\mathbb{R}$ to $\mathbb{F}_{29}$

The important mathematical result here is that elliptic curve points over a finite field still form an [abelian group](./00-group.md/#abelian-group).

## Elliptic curve discrete logarithm problem (ECDLP)

For the scalar multiplication $Q = n*P$ 

Where $P$ is an elliptic curve point over $\mathbb{F}_p$, $n$ is a scalar $\in \mathbb{F}_p$ and $Q$ is the scalar multiplication result (also an elliptic curve point over $\mathbb{F}_p$ by the group property of [closure](./00-group.md/#group-definition)).

- Given $n$ and $P$, it is 'easy' to find $Q$ => Scalar multiplication, known $O(\log{N})$ algorithm
- Given $Q$ and $P$, it is 'hard' to find $n$ => Discrete logarithm problem, exponential time algorithms for the general case

This mathematical result forms a [trapdoor function](https://cryptography.fandom.com/wiki/Trapdoor_function), and is a core security assumption of applications using elliptic curve cryptography. 

The ECDLP is a 'harder' problem than the general discrete logarithm problem (DLP) in the sense that the [fastest known general-purpose algorithm for the ECDLP has an exponential time complexity, whereas the fastest known general-purpose algorithm for the DLP has a subexponential time complexity](https://link.springer.com/chapter/10.1007/978-3-662-49387-8_1#Abs1). Hence cryptographic keys based on ECDLP can be significantly smaller than keys based on DLP, and still be more secure.

## Elliptic curve forms

Elliptic curves can be mathematically expressed in [multiple forms](https://www.cosic.esat.kuleuven.be/bcrypt/lecture%20slides/wouter.pdf) - Weierstrass, Montgomery and Edwards forms are commonly used. The $y^2 = x^3 + ax + b$ where $a, b \in \mathbb{F}_p$ expression we have previously referred to represents the Weierstrass form. An elliptic curve in Weierstrass form can be converted into Montgomery and Edwards forms.

Edwards form is frequently preferred in software implementations because addition and scalar multiplication operations are [more efficient](https://en.wikipedia.org/wiki/Table_of_costs_of_operations_in_elliptic_curves), and Weierstrass form implementations suffer from [vulnerability to side-channel attacks](https://link.springer.com/chapter/10.1007/3-540-45664-3_24).

## More Reading

- [Elliptic Curve Cryptography: a gentle introduction](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)
- [A (Relatively Easy To Understand) Primer on Elliptic Curve Cryptography - Cloudflare](https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/)
- [An Introduction to the Theory of Elliptic Curves - University of Wyoming](https://www.math.brown.edu/johsilve/Presentations/WyomingEllipticCurve.pdf)
