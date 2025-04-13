## Lesson 2.2.3: Making Stream Ciphers Practical

Since OTPs are a pain, practical stream ciphers use a **CSPRNG**.

1.  Alice and Bob share a relatively short secret key `k`.
2.  They both use this key `k` as the seed for the *same* CSPRNG algorithm.
3.  The CSPRNG spits out a long, unpredictable keystream `s0, s1, s2, ...`.
4.  They use this keystream to encrypt/decrypt with XOR.

This is **computationally secure** – meaning breaking it *should* take an infeasible amount of time with current (and foreseeable) computers. The security relies on the CSPRNG being unpredictable.

**Warning:** Using a standard PRNG (like `rand()`) is a massive security hole! As shown in Example 2.2 (in the original text), if an attacker knows just a little bit of plaintext, they can often work backward, figure out the PRNG's internal state or parameters, and generate the *entire* keystream. Game over!

---

[Previous: Lesson 2.2.2 - The One-Time Pad](ch02_otp.html) | [Next: The LFSR Linearity Attack](ch02_lfsr_attack.html) 