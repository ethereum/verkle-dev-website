# Merkle Patricia Trie

The Merkle Patricia Trie currently used in Ethereum is a modified fusion of the merkle tree and [patricia trie](https://en.wikipedia.org/wiki/Radix_tree) (also known as a radix tree or prefix tree).

It turns out that merkle trees are great for verifying a large list of static data elements, but not so great for storing the Ethereum world state which changes frequently. With a merkle tree, a single change requires rehashing the entire tree. For 1 million data elements in a simple binary merkle tree, this would require $\approx$ 1 million hash operations. In reality, the Ethereum world state consists of much more than 1 million data elements. 

On the other hand the patricia trie is more suited for a rapidly changing set of key-value pairs (i.e. the Ethereum world state). However it lacks the cryptographic guarantees of data integrity that the Merkle proof provides.

So by merging the merkle tree with the patricia trie, the Merkle Patricia Trie is able to achieve:
- Efficient lookup and updates of data elements stored as key-value pairs
- Efficient cryptographic proofs of data integrity  *(i.e. Merkle roots)*
- Efficient updates to the Merkle root<sup>1</sup>
- Merkle root depends only on the data contents, and not on the order they were added or changed<sup>2</sup>

1. *We do not need to rehash the entire tree in the Merkle Patricia trie, just the parent nodes upstream to changed leaf nodes.*
2. *In a merkle tree, swapping positions of data elements will change the Merkle root.*


## Performance Issues

For the sake of analyzing its performance bottlenecks, we can simplify the Merkle Patricia trie to a hexary (or 16-ary) Merkle tree. From our previous discussion on k-ary Merkle trees, we can appreciate that the proof size quickly becomes a burden. With 1,000,000 leaf nodes, we require $16 * \log_{16} 1000000 \approxeq 80$ inner nodes for a single proof. Practically this can mean an [18 MB proof size for a block](https://notes.ethereum.org/@vbuterin/verkle_tree_eip#Motivation). Verkles tries enable a ~15x reduction in proof size.

## More Reading

If you'd like to dive deeper into the Merkle Patricia Trie, check out:

- [Ethereum Merkle Patricia Trie Explained](https://medium.com/@chiqing/merkle-patricia-trie-explained-ae3ac6a7e123)
- [Blog post by Vitalik](https://blog.ethereum.org/2015/11/15/merkling-in-ethereum)
- [Ethereum documentation on Merkle Patricia Tries](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/#tries-in-ethereum)