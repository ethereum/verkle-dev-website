# Suffix Node Commitment

To generate the suffix node commitment, we use a nested Pedersen commitment (a Pedersen commitment of the Pedersen commitments $C1$ and $C2$).

![merkle_00](/img/suffix_node_1.png)
<p align="center">Figure 1. Suffix node</p>

We cannot use a single flat Pedersen commitment over all the suffix node values because the implementation specified in the [EIP](https://notes.ethereum.org/@vbuterin/verkle_tree_eip) is limited to committing 256 values of up to 253 bits in size. This is a mismatch with the suffix node storing 256 values of up to 256 bits (or 32 bytes) in size.

So to avoid losing 3 bits of information per key-value pair, we split each 32-byte/256-bit value into two 128-bit halves, resulting in 512 elements of 128-bits in size. $C1$ is the Pedersen commitment of the first batch of 256 of these 128-bit half-elements, and $C2$ is the Pedersen commitment of the second batch. 

![merkle_00](/img/suffix_node_2.png)
<p align="center">Figure 2. Suffix node values split into 128-bit halves</p>

Pedersen commitments can be converted to a 253-bit value (through the `group_to_field` method defined in the [EIP](https://notes.ethereum.org/@vbuterin/verkle_tree_eip)), so we can proceed to create a 'higher-order' Pedersen commitment of both $C1$ and $C2$. The suffix node commitment is defined as the Pedersen commitment of the 256-length array `[1, stem, C1, C2, 0, 0, ..., 0]`.

![merkle_00](/img/suffix_node_3.png)
<p align="center">Figure 3. Suffix node commitment</p>

The [EIP](https://notes.ethereum.org/@vbuterin/verkle_tree_eip) specifies that the Bandersnatch elliptic curve be used to generate Pedersen commitments, which is where the 253-bit size limit comes from. The Bandersnatch elliptic curve allows for more efficient zero-knowledge operations, and is used in verkle tries to facilitate zero-knowledge based optimizations in the future. In contrast the secp256k1 elliptic curve used in the original Ethereum protocol is less zero-knowledge friendly and hence less future-proof.