# Pedersen Commitments

The Pedersen commitment is a [commitment scheme](./00-commitment_scheme.md) based on elliptic curve cryptography. The commitment itself is a point on a selected elliptic curve. The [classic Pedersen commitment](https://link.springer.com/chapter/10.1007/3-540-46766-1_9) creates a commitment to a single value. 

## Pedersen Hash

In the verkle trie implementation we use Pedersen hashes rather than Pedersen commitments. The difference is that Pedersen hashes are used as a [vector commitment](https://eprint.iacr.org/2011/495.pdf) to an ordered set of values - 256 values $(v_0, v_1, ..., v_{255})$ in verkle tries. The resulting digest is still an elliptic curve point - the [Bandersnatch curve](https://ethresear.ch/t/introducing-bandersnatch-a-fast-elliptic-curve-built-over-the-bls12-381-scalar-field/9957) is specified in the [verkle trie EIP](https://notes.ethereum.org/@vbuterin/verkle_tree_eip). The Pedersen hash in the verkle trie implementation is defined as a [multiscalar multiplication](./../02-math/01-elliptic%20curves.md/#multiscalar-multiplication): 

$C = v_0 * G_0 + v_1 * G_1 + ... + v_{255} * G_{255}$

- C is the Pedersen hash, and is a Bandersnatch curve point
- $(G_0, G_1, ..., G_{255})$ are the basis or pregenerated Bandersnatch curve points for use in computing Pedersen hashes
- $(v_0, v_1, ..., v_{255})$ are scalar values $\in \mathbb{F}_p$

*p = 13108968793781547619861935127046491459309155893440570251786403306729687672801, a 253-bit prime. Hence $v_i \in \mathbb{F}_p$ must be a 252-bit number to avoid overflow and/or truncation.*

## Additive homomorphism

A special property that Pedersen commitments and hashes have, that keccak256 hashes do not, is additive homomorphism. Additive homomorphism means that for two Pedersen hashes $C_0$ for value set $S_0 = (v_0, ..., v_{255})$, and $C_1$ for value set $S_1 = (w_0, ..., w_{255})$.

<br/>

$C_0 + C_1$

$=Pedersen\>hash(S_0) + Pedersen\>hash(S_1)$

$=(v_0 * G_0 + v_1 * G_1 + ... + v_{255} * G_{255}) + (w_0 * G_0 + w_1 * G_1 + ... + w_{255} * G_{255})$

$=( (v_0 + w_0) * G_0 + (v_1 + w_1) * G_1 + ... + (v_{255} + w_{255}) * G_{255} )$

$= Pedersen\>hash(S_0 + S_1)$

<br/>

We are able to add two or more Pedersen hashes together, and the result will be same as if we had generated a single Pedersen hash from the sum of committed values.

This is not true for keccak256 hashes: $keccak256(v_0) + keccak256(v_1) \neq keccak256(v_0 + v_1)$

Additive homomorphism enables multiple optimisations in verkle tries that are not possible in the Merkle Patricia trie, which we will point out in later sections.