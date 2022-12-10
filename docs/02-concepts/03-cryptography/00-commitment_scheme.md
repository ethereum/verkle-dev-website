# Commitment Scheme


## Binding and hiding qualities 

A cryptographic commitment scheme is a method to commit to a secret value $m$, without revealing it. A commitment scheme must be both **binding** and **hiding**.

**Binding**: Given a commitment $C = commit(m)$, it is not possible to forge the commitment $C$ with another value $m'$ such that $m' \neq m$ and $C = commit(m) = commit(m')$.

**Hiding**: Given a commitment $C$, where $C = commit(m)$, it is not possible to discover $m$.

An analogy is writing a secret password on a piece of paper, placing it in a safe, and handing it to a friend. Without opening the safe, your friend cannot determine the password - this is the hiding property. Once you have given the safe away you can no longer change the password - this is the binding property. You have committed to the password using the safe, and you can later reveal the password by opening the safe.

## Prover and verifier

Commitment schemes involve a **prover** and a **verifier**. The prover has the secret value $m$ known only to themelves, and creates a commitment $C$ which they share with the verifier. At a later time the prover can share more information (including the secret value $m$) with the verifier to 'open' or 'reveal' the commitment. The verifier can then verify that $m$ was the value used to generate $C$.

In our analogy, you are the prover and the secret password is $m$. When you place the password into the safe you have created a commitment $C$. You can later open the commitment by opening the safe, and your friend - the verifier - can confirm that the password inside the safe is what you claim it to be.

## Commit and reveal phases

Cryptographic commitment schemes can be broken down into two steps - commit phase and reveal phase. Commit-reveal schemes are another name for a cryptographic commitment scheme.

In the **commit phase** the prover with exclusive knowledge of secret value $m$, creates a commitment $C$ to share with the verifier. In this phase the verifier does not know anything about $m$, other than that $C$ is a commitment to it. In our analogy this is storing our password in the safe, and sharing the safe with our friend.

In the **reveal phase** the prover reveals the secret value $m$, and the verifier is able to confirm that $C$ was created from $m$. In our analogy this is opening the safe and our friend confirming the contained password.

## Using an additional random number $r$

So far we have omitted the detail that to create a commitment $C$, the prover typically uses a random value $r$ in addition to the secret value $m$. $r$ is also kept secret in the commit phase. In our analogy $r$ is the combination to open the safe.

In the reveal phase, the prover shares $r$ and $m$ so that the verifier can verify that the commitment is binding with respect to both $r$ and $m$. This is akin to sharing both our password and the safe combination with our friend, so that our friend can open the safe and confirm our committed password.

Thus more formal descriptions of a cryptographic commitment scheme refer to $C = commit(r, m)$.

Committing to an additional random number $r$ in addition to a secret value $m$ significantly enhances the hiding and binding properties of a commitment scheme. Someone attempting to guess $m$ from a public commitment $C$, would need to correctly guess both $r$ and $m$. This stops brute force attacks on $m$, and conceals repeated use of values for $m$.