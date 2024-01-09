"use strict";(self.webpackChunkverkle_dev=self.webpackChunkverkle_dev||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Why Verkle Trees","href":"/docs/why_verkle_trees","docId":"why_verkle_trees"},{"type":"category","label":"Core Concepts","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Data Structures","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Merkle Trees","href":"/docs/concepts/data_structures/merkle_trees","docId":"concepts/data_structures/merkle_trees"},{"type":"link","label":"Merkle Patricia Trie","href":"/docs/concepts/data_structures/merkle_patricia_trie","docId":"concepts/data_structures/merkle_patricia_trie"}]},{"type":"category","label":"Maths","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Group Theory","href":"/docs/concepts/math/group","docId":"concepts/math/group"},{"type":"link","label":"Elliptic Curves","href":"/docs/concepts/math/elliptic curves","docId":"concepts/math/elliptic curves"},{"type":"link","label":"Lagrange Polynomial","href":"/docs/concepts/math/lagrange polynomial","docId":"concepts/math/lagrange polynomial"},{"type":"link","label":"Dividing In Lagrange basis when one of the points is zero - Generalised","href":"/docs/concepts/math/dividing_on_zero","docId":"concepts/math/dividing_on_zero"},{"type":"link","label":"IPA Multipoint","href":"/docs/concepts/math/multipoint","docId":"concepts/math/multipoint"},{"type":"link","label":"Fast Fourier Transform","href":"/docs/concepts/math/fourier","docId":"concepts/math/fourier"}]},{"type":"category","label":"Cryptography","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Commitment Scheme","href":"/docs/concepts/cryptography/commitment_scheme","docId":"concepts/cryptography/commitment_scheme"},{"type":"link","label":"Pedersen Commitments","href":"/docs/concepts/cryptography/pedersen_commitments","docId":"concepts/cryptography/pedersen_commitments"}]}]},{"type":"category","label":"Implementation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Verkle Trie Structure","href":"/docs/implementation/verkle trie structure","docId":"implementation/verkle trie structure"},{"type":"link","label":"Suffix Node Commitment","href":"/docs/implementation/suffix node commitment","docId":"implementation/suffix node commitment"},{"type":"link","label":"Generating the CRS","href":"/docs/implementation/crs","docId":"implementation/crs"}]},{"type":"link","label":"Repos","href":"/docs/repos","docId":"repos"},{"type":"link","label":"Further reading","href":"/docs/further_reading","docId":"further_reading"}]},"docs":{"concepts/cryptography/commitment_scheme":{"id":"concepts/cryptography/commitment_scheme","title":"Commitment Scheme","description":"Binding and hiding qualities","sidebar":"tutorialSidebar"},"concepts/cryptography/pedersen_commitments":{"id":"concepts/cryptography/pedersen_commitments","title":"Pedersen Commitments","description":"The Pedersen commitment is a commitment scheme based on elliptic curve cryptography. The commitment itself is a point on a selected elliptic curve. The classic Pedersen commitment creates a commitment to a single value.","sidebar":"tutorialSidebar"},"concepts/data_structures/merkle_patricia_trie":{"id":"concepts/data_structures/merkle_patricia_trie","title":"Merkle Patricia Trie","description":"The Merkle Patricia Trie currently used in Ethereum is a modified fusion of the merkle tree and patricia trie (also known as a radix tree or prefix tree).","sidebar":"tutorialSidebar"},"concepts/data_structures/merkle_trees":{"id":"concepts/data_structures/merkle_trees","title":"Merkle Trees","description":"Feel free to skip this section if you are well versed with Merkle trees.","sidebar":"tutorialSidebar"},"concepts/math/dividing_on_zero":{"id":"concepts/math/dividing_on_zero","title":"Dividing In Lagrange basis when one of the points is zero - Generalised","description":"Problem","sidebar":"tutorialSidebar"},"concepts/math/elliptic curves":{"id":"concepts/math/elliptic curves","title":"Elliptic Curves","description":"Elliptic curves are a core foundation of modern cryptography techniques and is used extensively in web browsers, digital security products and blockchain protocols. Here we summarise the elliptic curve knowledge required for implementing verkle tries. If elliptic curves are an unfamiliar topic to you, we would suggest diving into More Reading","sidebar":"tutorialSidebar"},"concepts/math/fourier":{"id":"concepts/math/fourier","title":"Fast Fourier Transform","description":"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.","sidebar":"tutorialSidebar"},"concepts/math/group":{"id":"concepts/math/group","title":"Group Theory","description":"Groups, rings and fields in mathematics are collections of mathematical elements with strictly defined properties. It is useful to determine groups, rings and fields when dealing with more exotic mathematical objects such as elliptic curve points because:","sidebar":"tutorialSidebar"},"concepts/math/lagrange polynomial":{"id":"concepts/math/lagrange polynomial","title":"Lagrange Polynomial","description":"Polynomial interpolation is the interpolation of a given data set by the polynomial of lowest possible degree that passes through the points of the dataset.","sidebar":"tutorialSidebar"},"concepts/math/multipoint":{"id":"concepts/math/multipoint","title":"IPA Multipoint","description":"Introduction","sidebar":"tutorialSidebar"},"further_reading":{"id":"further_reading","title":"Further reading","description":"- Original paper on Verkle trees","sidebar":"tutorialSidebar"},"implementation/crs":{"id":"implementation/crs","title":"Generating the CRS","description":"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.","sidebar":"tutorialSidebar"},"implementation/suffix node commitment":{"id":"implementation/suffix node commitment","title":"Suffix Node Commitment","description":"To generate the suffix node commitment, we use a nested Pedersen commitment (a Pedersen commitment of the Pedersen commitments $C1$ and $C2$).","sidebar":"tutorialSidebar"},"implementation/verkle trie structure":{"id":"implementation/verkle trie structure","title":"Verkle Trie Structure","description":"Here we describe a high-level overview of the verkle trie without diving into the implementation details, or the mathematical and cryptographic operations.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"This documentation leans more towards the technical side and does make a a few assumptions on pre-requisite knowledge. The author will endeavour to make these assumptions apparent, no promises.","sidebar":"tutorialSidebar"},"repos":{"id":"repos","title":"Repos","description":"Specs","sidebar":"tutorialSidebar"},"why_verkle_trees":{"id":"why_verkle_trees","title":"Why Verkle Trees","description":"Verkle trees are Merkle trees 2.0","sidebar":"tutorialSidebar"}}}')}}]);