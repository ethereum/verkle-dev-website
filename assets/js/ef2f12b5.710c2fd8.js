"use strict";(self.webpackChunkverkle_dev=self.webpackChunkverkle_dev||[]).push([[411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(n),c=i,k=h["".concat(o,".").concat(c)]||h[c]||d[c]||r;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={},s="Verkle Trie Structure",l={unversionedId:"implementation/verkle trie structure",id:"implementation/verkle trie structure",title:"Verkle Trie Structure",description:"Here we describe a high-level overview of the verkle trie without diving into the implementation details, or the mathematical and cryptographic operations.",source:"@site/docs/03-implementation/00-verkle trie structure.md",sourceDirName:"03-implementation",slug:"/implementation/verkle trie structure",permalink:"/docs/implementation/verkle trie structure",draft:!1,editUrl:"https://github.com/ethereum/verkle-dev-website/blob/master/docs/03-implementation/00-verkle trie structure.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pedersen Commitments",permalink:"/docs/concepts/cryptography/pedersen_commitments"},next:{title:"Suffix Node Commitment",permalink:"/docs/implementation/suffix node commitment"}},o={},m=[{value:"Comparison between the Merkle Patricia Trie and Verkle Trie",id:"comparison-between-the-merkle-patricia-trie-and-verkle-trie",level:2},{value:"Basic Overview",id:"basic-overview",level:2},{value:"Suffix nodes",id:"suffix-nodes",level:2},{value:"Inner nodes",id:"inner-nodes",level:2},{value:"Simple example",id:"simple-example",level:2}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verkle-trie-structure"},"Verkle Trie Structure"),(0,i.kt)("p",null,"Here we describe a high-level overview of the verkle trie without diving into the implementation details, or the mathematical and cryptographic operations."),(0,i.kt)("h2",{id:"comparison-between-the-merkle-patricia-trie-and-verkle-trie"},"Comparison between the Merkle Patricia Trie and Verkle Trie"),(0,i.kt)("p",null,"Starting from what we know, key similarities between the Merkle Patricia Trie and Verkle Trie include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data elements are stored as key-value pairs"),(0,i.kt)("li",{parentName:"ul"},"Keys are encoded nibble-by-nibble into the path from the root to the node holding corresponding values."),(0,i.kt)("li",{parentName:"ul"},"Each node has a cryptographic commitment, that commits the values and positions of its children nodes. "),(0,i.kt)("li",{parentName:"ul"},"Node positions and cryptographic commitments depend only on data contents, and not on the order in which data contents were created and updated.")),(0,i.kt)("p",null,"Some key differences are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Verkle Trie involves a single flat trie structure, whereas the Merkle Patricia Trie involves a nested 'Merkle Patricia Tries in a Merkle Patricia Trie' scheme."),(0,i.kt)("li",{parentName:"ul"},"The Pedersen commitment is used to create cryptographic commitments instead of the keccak256 hash function."),(0,i.kt)("li",{parentName:"ul"},"We switch from 20-byte keys in the Merkle Patricia Trie to 32-byte keys in the Verkle Trie.")),(0,i.kt)("h2",{id:"basic-overview"},"Basic Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We store data elements as key-value pairs, with the key and value both being 32-byte strings"),(0,i.kt)("li",{parentName:"ul"},"There are two types of nodes in the verkle trie: ",(0,i.kt)("b",null,"Suffix nodes",(0,i.kt)("sup",null,"1"))," and ",(0,i.kt)("b",null,"inner nodes",(0,i.kt)("sup",null,"2")),".")),(0,i.kt)("p",null,"The root node is a special inner node with no parents, and is the ancestor of every node in the verkle trie."),(0,i.kt)("br",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"This is named as ",(0,i.kt)("inlineCode",{parentName:"li"},"extension_and_suffix_tree")," in the ",(0,i.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@vbuterin/verkle_tree_eip"},"EIP"),", and is also referred to as an extension node."),(0,i.kt)("li",{parentName:"ol"},"This is named as ",(0,i.kt)("inlineCode",{parentName:"li"},"main_tree")," in the ",(0,i.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@vbuterin/verkle_tree_eip"},"EIP"))),(0,i.kt)("p",null,"We have taken these names from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/research/blob/master/verkle_trie_eip/verkle_trie.py"},"Python specification"),"."),(0,i.kt)("h2",{id:"suffix-nodes"},"Suffix nodes"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"merkle_00",src:n(4591).Z,width:"1996",height:"1048"})),(0,i.kt)("p",{align:"center"},"Figure 1. Suffix node"),(0,i.kt)("p",null,"Suffix nodes sit at the bottom of the verkle trie, and directly store values. Each suffix node is uniquely identified by a ",(0,i.kt)("strong",{parentName:"p"},"31-byte stem"),", and can store up to 256 values (one for each possible integer value of the single suffix byte). 32-byte keys can be split into a 31-byte stem and a 1-byte suffix. All keys that contain the identical 31-byte stem will have their values stored in the same suffix node. "),(0,i.kt)("p",null,"For example if we have three keys"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"0xAA...AAAA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"0xAA...AAAB")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"0xAA...ABAA"))),(0,i.kt)("p",null,"Then keys 1 and 2 share an identical stem: ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAA...AA")," and their values are placed in the suffix node identified by this stem. Key 3 has a different stem and so its associated value is placed in the suffix node identified by stem ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAA...AB"),"."),(0,i.kt)("p",null,"To obtain the cryptographic commitment for a suffix node, we first create two Pedersen commitments - ",(0,i.kt)("inlineCode",{parentName:"p"},"C1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C2"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"C1")," is the Pedersen commitment of the first 128 values (key suffix 00 to 7F), and ",(0,i.kt)("inlineCode",{parentName:"p"},"C2")," is the Pedersen commitment of the second 128 values (key suffix 80 to FF)."),(0,i.kt)("p",null,"Finally to produce the suffix node commitment we create a Pedersen commitment of ",(0,i.kt)("inlineCode",{parentName:"p"},"C1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C2")," and the stem."),(0,i.kt)("h2",{id:"inner-nodes"},"Inner nodes"),(0,i.kt)("p",null,"Inner nodes are similar to branch nodes in the Merkle Patricia trie - they do not store values directly but form the pathway from the root to suffix nodes. An inner node stores 256 pointers to children nodes, which can either be another inner node, a suffix node, or a non-existent node. Inner nodes are uniquely identified by a prefix, which is the common substring for all descendant suffix nodes and by definition must be smaller than a 31-byte stem."),(0,i.kt)("p",null,"For example, two suffix nodes with stems ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAAAA...AA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAABB...AA")," share the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAA"),". Hence an inner node with this prefix will be an ancestor (higher up in the tree) to both suffix nodes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"merkle_00",src:n(6372).Z,width:"2144",height:"812"})),(0,i.kt)("p",{align:"center"},"Figure 2. Inner node"),(0,i.kt)("p",null,"To obtain the commitment of an inner node, we determine the Pedersen commitment of all its children's commitments. "),(0,i.kt)("p",null,"The Verkle Trie root is a special case of an inner node with no parents, and is the ancestor to every other node in the Verkle Trie."),(0,i.kt)("h2",{id:"simple-example"},"Simple example"),(0,i.kt)("p",null,"Let's say we have a simple verkle trie with 5 keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0xAAAA..AAAA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0xAAAA..AAAB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0xAAAB..AAAA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0xAAAB..AAAB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0xBBBB..BBBB"))),(0,i.kt)("p",null,"The verkle trie (omitting cryptographic commitments) will look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"merkle_00",src:n(9089).Z,width:"3648",height:"1952"})),(0,i.kt)("p",{align:"center"},"Figure 3. Verkle trie with 5 key-value pairs"),(0,i.kt)("p",null,"The keys ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAAAA..AAAA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAAAA..AAAB")," share the same 31-byte stem ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAAAA..AA")," so they will be contained in the same suffix node. Within this suffix node, the values will be stored in the 'slots' ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"v"),(0,i.kt)("mrow",{parentName:"msub"},(0,i.kt)("mi",{parentName:"mrow"},"A"),(0,i.kt)("mi",{parentName:"mrow"},"A")))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v_{AA}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"AA"))))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,i.kt)("span",{parentName:"span"}))))))))))," and ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"v"),(0,i.kt)("mrow",{parentName:"msub"},(0,i.kt)("mi",{parentName:"mrow"},"A"),(0,i.kt)("mi",{parentName:"mrow"},"B")))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v_{AB}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05017em"}},"B"))))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,i.kt)("span",{parentName:"span"}))))))))))," defined by the suffix (last byte of the key). "),(0,i.kt)("p",null,"A similar situation occurs with the keys ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAAAB..AAAA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAAAB..AAAB")," which share the same suffix node with stem ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAAAB..AA"),". "),(0,i.kt)("p",null,"The last key ",(0,i.kt)("inlineCode",{parentName:"p"},"0xBBBB..BBBB")," does not share a stem with any other existing key, so it is the sole element of the suffix node with stem ",(0,i.kt)("inlineCode",{parentName:"p"},"0xBBBB..BB"),"."),(0,i.kt)("p",null,"The root node is an inner node associated with an empty prefix. There are only two distinct 'first-byte nibbles' in our set of keys - ",(0,i.kt)("inlineCode",{parentName:"p"},"0xAA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0xBB")," - hence these will be the only non-null pointers in the root node."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"0xBB")," pointer will lead directly to the suffix node with stem ",(0,i.kt)("inlineCode",{parentName:"li"},"0xBBBB..BB")," because there is currently only a single existing key stem with ",(0,i.kt)("inlineCode",{parentName:"li"},"0xBB")," as the first-byte nibble."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"OxAA")," pointer will eventually lead to all suffix nodes with a stem with the first-byte ",(0,i.kt)("inlineCode",{parentName:"li"},"0xAA"),". There are two such suffix nodes in our example, hence we require an inner node to branch off into these two suffix nodes. Our pointer ",(0,i.kt)("inlineCode",{parentName:"li"},"0xAA")," will directly lead to this inner node."),(0,i.kt)("li",{parentName:"ul"},"The inner node will be associated with the common prefix shared amongst the two stems that it branches into. ",(0,i.kt)("inlineCode",{parentName:"li"},"0xAA")," is the common prefix between the stems ",(0,i.kt)("inlineCode",{parentName:"li"},"0xAAAB..AAAA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"0xAAAB..AAAB"),".")))}d.isMDXComponent=!0},6372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inner_node-3965017f012fe5005aa40c14d7234e3d.png"},4591:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/suffix_node_0-7f9610665bbe17d802825a03b1bebc94.png"},9089:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/verkle_trie_0-e8dede39666f4908289be297e7950803.png"}}]);