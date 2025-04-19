## Lesson 2.2: Randomness is Key

The security of a stream cipher lives and dies by its keystream. If the keystream is predictable, the cipher is toast!

### Meet the Random Number Generators (RNGs):

1.  **True RNGs (TRNGs):** The real deal. Based on unpredictable physical stuff like atmospheric noise or radioactive decay. Think flipping a perfectly fair coin. Output can't be reproduced.
2.  **Pseudorandom RNGs (PRNGs):** Fakers! They use an algorithm and a starting 'seed' value. The sequence *looks* random, but if you know the algorithm and seed, you know the whole sequence. Think of the `rand()` function in many programming languages – good for simulations, *terrible* for crypto!
3.  **Cryptographically Secure PRNGs (CSPRNGs):** The good fakers! These are PRNGs designed to be *unpredictable*. Given a chunk of the output, it should be practically impossible (computationally infeasible) to figure out the next bit or past bits. *This* is what we need for stream ciphers.

---

<div class="page-navigation">
    <a href="ch02_xor.html" class="prev">← Previous: XOR Encryption</a>
    <a href="ch02_otp.html" class="next">Next: One-Time Pad →</a>
</div>

<script src="../scripts/main.js"></script>