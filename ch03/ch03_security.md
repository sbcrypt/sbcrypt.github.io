## Lesson 3.4-3.5: DES Decryption & Security Analysis

### Decryption: The Feistel Magic Trick! (Section 3.4)

Remember how DES uses a Feistel network? This makes decryption surprisingly straightforward! You use the *exact same* algorithm as encryption (IP, 16 rounds using the `f`-function, FP), but with one key difference: you apply the 16 round keys K_1, K_2, ..., K_16 in **reverse order** during the decryption rounds (i.e., use K_16 in round 1, K_15 in round 2, ..., K_1 in round 16).

The Feistel structure is designed such that applying the rounds with reversed keys perfectly undoes the encryption process, giving you back the original plaintext.

### How Secure is DES? (Not Very Anymore!) (Section 3.5)

DES was strong for its time, but modern computing power has exposed its weaknesses.

1.  **Key Size (The Achilles' Heel):** DES uses only a **56-bit key**. This means there are 2^56 (about 72 quadrillion, or 7.2 x 10^16) possible keys. While this sounds enormous, it's vulnerable to a **Brute-Force Attack** – simply trying every possible key until the decrypted message makes sense.
    *   📜 **Crypto Trivia:** In 1998, the Electronic Frontier Foundation (EFF) built a custom machine called "Deep Crack" for about \$250,000 that could break DES by brute force in less than 3 days. Today, specialized hardware (like FPGAs or GPUs) or distributed computing efforts can break it even faster and cheaper.
    *   **Conclusion:** The 56-bit key size is **unacceptably small** for modern security needs. Brute-force attacks are practical.

2.  **Analytical Attacks:** Smarter attacks that exploit the cipher's internal structure.
    *   **Differential Cryptanalysis:** Needs about 2^47 chosen plaintexts (you get to pick the plaintexts and see the ciphertexts) to find the key with high probability. While faster than brute-force theoretically, it requires an unrealistic amount of specific data in most real-world scenarios.
    *   **Linear Cryptanalysis:** Finds probabilistic linear approximations. Requires about 2^43 *known* plaintexts (you have pairs of plaintext/ciphertext, but didn't choose them). Again, faster than brute-force but still requires significant data.
    *   **Conclusion:** While these attacks highlight theoretical weaknesses and advanced cryptanalysis techniques, the **practical vulnerability** of DES remains its **short key size**.

**🤔 Thought Puzzle:**

The Feistel structure splits the block into two halves. The `f`-function only needs to process *one* half (32 bits for DES) in each round, and the output is XORed with the *other* half. How does this design contribute to making encryption and decryption use the same algorithm (just with reversed keys)?
*(Answer below)*

<button onclick="revealAnswer('feistelDecryptAnswer', this)">Reveal Answer</button>
<span id="feistelDecryptAnswer" style="display: none;">
*(Hint: Consider one round. Encryption: `L_{i+1} = R_i`, `R_{i+1} = L_i ⊕ f(R_i, K_i)`. To reverse this using `K_i`, you need `L_i` and `R_i`. You know `L_{i+1} (=R_i)`. You can calculate `f(R_i, K_i) = f(L_{i+1}, K_i)`. Then, you can find `L_i` by calculating `R_{i+1} ⊕ f(L_{i+1}, K_i)`. Since XORing with the same value cancels out: `(L_i ⊕ f(R_i, K_i)) ⊕ f(R_i, K_i) = L_i`. The swap is easily reversed. Applying this logic over all rounds with keys in reverse order undoes the encryption.)*
</span>

---

[Previous: The DES Key Schedule](ch03_keyschedule.html) | [Next: Life After DES - Alternatives](ch03_alternatives.html)

<script src="../scripts/main.js"></script> <!-- Include shared revealAnswer function --> 