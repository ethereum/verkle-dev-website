# Group Theory

Groups, rings and fields in mathematics are collections of mathematical elements with strictly defined properties. It is useful to determine groups, rings and fields when dealing with more exotic mathematical objects such as elliptic curve points because:

i.) It enables us to apply rules and intuition from elementary mathematics that we learned in primary and secondary school. 

ii.) If we can prove that any set of mathematical objects is a group, ring or field, we can then stand on the shoulders of mathematicians and get further mathematical properties 'for free'.

## Groups

### Group definition

A group $G$ is a set of elements combined with a single operation - commonly written in additive notation $+$ - that can act on any two elements in the set. A group must satisfy the following properties:
1. **Closure** - if $x, y \in G$, then $x + y$ must also be an element of G
2. **Identity** - G contains an identity element $I$, such that $a + I = I + a = a$
3. **Inverse** - Every element $a \in G$ , has an inverse $a_{inv} \in G$, such that $a+a_{inv} = I$
4. **Associativity** - $a+(b+c) = (a+b)+c$

*In other words when the operation is applied twice to three elements $a, b, c \in G$, the order in which the operation is applied does not change the result.*

<br/>

A concrete example of a group is $(\mathbb{Z},+)$ or the set of integers under the addition operation:
- Closure - Any integer added to another integer, equals another integer
- Identity - $0$ is the identity integer under addition
- Inverse - Every integer $a$ has an inverse $a_{inv} = -a$ such that $a + (-a) = 0$
- Associativity - $a + b + c = (a + b) + c = a + (b + c)$, where $a$, $b$ and $c$ are integers

<br/>

Conversely $(\mathbb{Z},*)$ or the set of integers under the multiplication operation is not a group:
- $1$ is the identity element of $(\mathbb{Z},*)$
- For an integer $a$, there is no inverse integer $a_{inv}$ such that $a * a_{inv} = 1$. For example given the integer $a = 2$, we cannot find another integer $a_{inv}$ such that $2*a_{inv} = 1$, unless we break out of the set of integers and grab a rational number $a_{inv} = \frac{1}{2}$

<br/>

Note that there is a subtle difference between the addition operation and additive notation. The addition operation is what occurs in $1+1=2$, and is almost always written with additive notation $+$. However on the flip side, the use of additive notation does not neccesarily mean the arithmetic addition operation.

### Order

The **order** of a group is the number of elements in the group.

The order of $(\mathbb{Z},+)$ or the set of integers under the addition operation is infinite. Under the hood in verkle tries, we make use of finite order groups.

### Abelian group

An abelian group (also called commutative group) is a group with an additional property of **commutativity** - $a+b = b+a$, where the order in which the the group operation is applied to two group elements does not alter the result. In verkle tries we deal exclusively with abelian groups under the hood.

## Fields

### Field definition

A field F is a set of elements combined with two operations (commonly denoted as $+$ and $*$) that can act on any two elements in the set. A field must satisfy the following properties:
1. **Closure under both operations** - if $x, y \in F$, then $x + y$ and $x * y$ must also be elements of $F$
2. **Identity elements for both operations** - $F$ contains identity elements $I_+$ and $I_*$ such that $a+I_+ = I_++a = a$, and $a*I_* = I_**a = a$
3. **Inverse elements for both operations** - Every element $a \in F$, has inverses $a_+, a_* \in F$, such that $a+a_+ = I_+$ and $a*a_* = I_*$
4. **Associativity under both operation** - $a+(b+c) = (a+b)+c$ and $a*(b*c) = (a*b)*c$
5. **Commutativity under both operations** - $a+b = b+a$ and $a*b = b*a$
6. **The second operation is distributive over the first operation** - $a*(b+c) = a*b+a*c$.

Well known examples of fields are $(\mathbb{R}, +, *)$ - the set of real numbers under addition and multiplication, and $(\mathbb{Q}, +, *)$ - the set of rational numbers under addition and multiplication. Note that $(\mathbb{Z}, +, *)$ is not a field because there is no multiplicative inverse element.

### Finite field

A **finite field** (also called Galois field) is a field with a set containing a finite number of elements. An interesting mathematical result is that the number of elements (i.e. the order) in a finite field, must be a prime number $q$ or a prime power $q^n$ where $n$ is an integer.

### Integers modulo prime - Fp

The simplest type of finite fields are integers modulo a prime number, denoted as $\mathbb{F}_p$ or $\mathbb{Z}/p\mathbb{Z}$ or $GF(p)$ (Galois field of p). For example $\mathbb{F}_{11}$ is {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and represents the set of all $a \bmod{11}$, where $a$ is any integer.

A great advantage to using this kind of field, is that we can use the regular arithmetic addition and multiplication operations, followed by $mod\>p$.

E.g. given $\mathbb{F}_{11}$, then
- $8\bmod{11} + 10\bmod{11} = (8+10)\bmod{11} = 18 \bmod{11} = 7$
- $8\bmod{11} * 10\bmod{11} = (8*10)\bmod{11} = 80 \bmod{11} = 3$