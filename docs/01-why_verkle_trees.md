# Why Verkle Trees

Verkle trees are Merkle trees 2.0

They enable us to store, retrieve and verify data from the blockchain with an order of magnitude improvement in proof sizes. This empowers everyday users with low-cost hardware to participate as validators for the ever-growing Ethereum blockchain, without compromising the security and speed of the entire network.

Currently Ethereum depends on the Merkle tree, as do many blockchains and software systems (including Bitcoin, Git and IPFS). As part of scaling Ethereum to support exponential growth in users and validators, Merkle trees will be upgraded to Verkle trees within the Ethereum protocol in the near future.

## Comparison with Merkle trees
<br/>

|  | Merkle tree | Verkle tree |
|---|---|---|
| Year first published | [1979](https://link.springer.com/content/pdf/10.1007/0-387-34805-0_21.pdf) | [2018](https://math.mit.edu/research/highschool/primes/materials/2018/Kuszmaul.pdf) |
| Cryptography requirements | Collision-resistant hash function | Pedersen commitments <br/> Elliptic group operations |
| Proof size<sup>1, 2</sup> | $O(k \log_k n)$ <br/> | $O(1)$ |

1. $k$ is the branching factor of the merkle tree, it is 2 in a simple binary merkle tree and 16 in the hexary Merkle patricia tree used currently in Ethereum. $n$ is the number of leaf nodes. 
2. Kuszmaul's paper on verkle trees states $O(\log_k n)$ as the space complexity for verkle tree proofs, however we can compress it to O(1) by using [clever mathematical constructs](https://dankradfeist.de/ethereum/2021/06/18/pcs-multiproofs.html).