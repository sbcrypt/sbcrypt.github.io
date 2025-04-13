## Lessons Learned (Chapter 2)

1.  Stream ciphers encrypt bit-by-bit using XOR and a keystream.
2.  Encryption and decryption often use the exact same XOR operation.
3.  Security depends ENTIRELY on the **unpredictability** of the keystream.
4.  The **One-Time Pad (OTP)** uses a truly random, non-reused keystream and is perfectly secure but impractical.
5.  Practical stream ciphers use a **CSPRNG** seeded by a shared secret key (and often a unique IV/Nonce) to generate a pseudorandom but unpredictable keystream.
6.  Using general PRNGs (like `rand()`) for keystreams is insecure.
7.  **LFSRs** are good for generating long sequences but are cryptographically weak alone due to their **linearity**.
8.  Secure stream ciphers (like Trivium) often combine LFSR-like structures with **non-linear** operations (like AND gates) to resist attacks.
9.  **NEVER reuse a keystream** with the same key (use a unique IV/Nonce for each session).

Phew! That was a whirlwind tour of stream ciphers. You've learned about XOR magic, the dream of the OTP, the dangers of predictability and linearity, and how modern ciphers like Trivium try to get the best of both worlds.

Ready for the next chapter when you are!

---

[Previous: Lesson 2.3.3 - Non-Linearity & Trivium](ch02_nonlinear.html) | [Next: Chapter 3 - Block Ciphers](../ch03/ch03_intro.html) <!-- Placeholder for Ch 3 --> 