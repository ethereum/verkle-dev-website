# Verkle Trie Structure

Here we describe a high-level overview of the verkle trie without diving into the implementation details, or the mathematical and cryptographic operations.

## Comparison between the Merkle Patricia Trie and Verkle Trie

Starting from what we know, key similarities between the Merkle Patricia Trie and Verkle Trie include:
- Data elements are stored as key-value pairs
- Keys are encoded nibble-by-nibble into the path from the root to the node holding corresponding values.
- Each node has a cryptographic commitment, that commits the values and positions of its children nodes. 
- Node positions and cryptographic commitments depend only on data contents, and not on the order in which data contents were created and updated.

Some key differences are:
- A Verkle Trie involves a single flat trie structure, whereas the Merkle Patricia Trie involves a nested 'Merkle Patricia Tries in a Merkle Patricia Trie' scheme.
- The Pedersen commitment is used to create cryptographic commitments instead of the keccak256 hash function.

## Basic Overview

- We store data elements as key-value pairs, with the key and value both being 32-byte strings
- There are two types of nodes in the verkle trie: <b>Suffix nodes<sup>1</sup></b> and <b>inner nodes<sup>2</sup></b>.

The root node is a special inner node with no parents, and is the ancestor of every node in the verkle trie.

<br/>

1. This is named as `extension_and_suffix_tree` in the [EIP](https://notes.ethereum.org/@vbuterin/verkle_tree_eip)
2. This is named as `main_tree` in the [EIP](https://notes.ethereum.org/@vbuterin/verkle_tree_eip)

We have taken these names from the [Python specification](https://github.com/ethereum/research/blob/master/verkle_trie_eip/verkle_trie.py).


## Suffix nodes

![merkle_00](/img/suffix_node.png)
<p align="center">Figure 1. Suffix node</p>

Suffix nodes sit at the bottom of the verkle trie, and directly store values. Each suffix node is uniquely identified by a **31-byte stem**, and can store up to 256 values (one for each possible integer value of the single suffix byte). 32-byte keys can be split into a 31-byte stem and a 1-byte suffix. All keys that contain the identical 31-byte stem will have their values stored in the same suffix node. 

For example if we have three keys
1. `0xAA...AAAA`
2. `0xAA...AAAB`
3. `0xAA...ABAA`

Then keys 1 and 2 share an identical stem: `0xAA...AA` and their values are placed in the suffix node identified by this stem. Key 3 has a different stem and so its associated value is placed in the suffix node identified by stem `0xAA...AB`.

To obtain the cryptographic commitment for a suffix node, we first create two Pedersen commitments - `C1` and `C2`. `C1` is the Pedersen commitment of the first 128 values (key suffix 00 to 7F), and `C2` is the Pedersen commitment of the second 128 values (key suffix 80 to FF).

Finally to produce the suffix node commitment we create a Pedersen commitment of `C1`, `C2` and the stem.

## Inner nodes

Inner nodes are similar to branch nodes in the Merkle Patricia trie - they do not store values directly but form the pathway from the root to suffix nodes. An inner node stores 256 pointers to children nodes, which can either be another inner node, a suffix node, or a non-existent node. Inner nodes are uniquely identified by a prefix, which is the common substring for all descendant suffix nodes and by definition must be smaller than a 31-byte stem.

For example, two suffix nodes with stems `0xAAAA...AA` and `0xAABB...AA` share the prefix `0xAA`. Hence an inner node with this prefix will be an ancestor (higher up in the tree) to both suffix nodes.

![merkle_00](/img/inner_node.png)
<p align="center">Figure 2. Inner node</p>

To obtain the commitment of an inner node, we determine the Pedersen commitment of all its children's commitments. 

The Verkle Trie root is a special case of an inner node with no parents, and is the ancestor to every other node in the Verkle Trie.

## Simple example

Let's say we have a simple verkle trie with 5 keys:
- `0xAAAA..AAAA`
- `0xAAAA..AAAB`
- `0xAAAB..AAAA`
- `0xAAAB..AAAB`
- `0xBBBB..BBBB`

The verkle trie (omitting cryptographic commitments) will look like:

![merkle_00](/img/verkle_trie_0.png)
<p align="center">Figure 3. Verkle trie with 5 key-value pairs</p>

The keys `0xAAAA..AAAA` and `0xAAAA..AAAB` share the same 31-byte stem `0xAAAA..AA` so they will be contained in the same suffix node. Within this suffix node, the values will be stored in the 'slots' $v_{AA}$ and $v_{AB}$ defined by the suffix (last byte of the key). 

A similar situation occurs with the keys `0xAAAB..AAAA` and `0xAAAB..AAAB` which share the same suffix node with stem `0xAAAB..AA`. 

The last key `0xBBBB..BBBB` does not share a stem with any other existing key, so it is the sole element of the suffix node with stem `0xBBBB..BB`.

The root node is an inner node associated with an empty prefix. There are only two distinct 'first-byte nibbles' in our set of keys - `0xAA` and `0xBB` - hence these will be the only non-null pointers in the root node.
- The `0xBB` pointer will lead directly to the suffix node with stem `0xBBBB..BB` because there is currently only a single existing key stem with `0xBB` as the first-byte nibble.
- The `OxAA` pointer will eventually lead to all suffix nodes with a stem with the first-byte `0xAA`. There are two such suffix nodes in our example, hence we require an inner node to branch off into these two suffix nodes. Our pointer `0xAA` will directly lead to this inner node.
- The inner node will be associated with the common prefix shared amongst the two stems that it branches into. `0xAA` is the common prefix between the stems `0xAAAB..AAAA` and `0xAAAB..AAAB`.

