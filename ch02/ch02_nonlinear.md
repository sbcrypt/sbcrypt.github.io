## Lesson 2.3.3: Redemption - Non-Linearity Saves the Day!

How do we make LFSR-like structures secure? Introduce **NON-LINEARITY**! Combine multiple LFSRs or similar registers in clever, non-linear ways.

### Trivium - A Modern Example:

Okay, so single LFSRs are weak because they are linear. How do we fix this? We introduce **non-linearity**. Trivium is a good example of how this is done in a modern, efficient stream cipher.

**The Core Idea:** Instead of one LFSR, Trivium uses *three* different shift registers (let's call them A, B, and C). The clever part isn't just having three; it's how they interact.

*   **Structure:** Three interconnected shift registers of different lengths (93, 84, and 111 bits, totalling 288 bits of internal state). They don't just run independently.

*   **Key + IV Loading:** The 80-bit secret key and the 80-bit **Initialization Vector (IV)** / **Nonce** (a unique number for each message, not secret) are loaded into specific positions across the three registers at the start.

*   **Warm-up Phase (Crucial!):** Before generating any keystream bits, Trivium runs itself for 1152 clock cycles. Think of this as thoroughly mixing the ingredients. During this phase, the registers shift, bits are calculated using the feedback rules, but *no output is produced*. The purpose is to scramble the initial state (key and IV) so deeply that the internal state becomes highly sensitive to every single bit of the key and IV. An attacker can't easily figure out the starting state just by looking at the later keystream.

*   **Keystream Generation (The Non-Linear Magic):** After the warm-up, Trivium starts producing the keystream bits (`s_i`). To calculate each keystream bit, and also to calculate the *feedback* bits for each of the three registers, Trivium does the following:
    *   It takes specific bits from *all three* registers.
    *   It combines some using **XOR** (⊕), just like our simple LFSR.
    *   **Crucially, it also combines some using AND (·)** operations.

    *Conceptual Example (Not exact Trivium logic):* Imagine calculating a feedback bit like `(bit_from_A · bit_from_B) ⊕ bit_from_C`. The `AND` operation (multiplication in modulo 2) is **non-linear**. You can no longer write simple linear equations relating the output bits to previous bits like we did for the single LFSR attack. The AND gates effectively break the linearity that Oscar exploited.

*   **Result:** The resulting keystream looks random and is computationally difficult to predict without knowing the secret key. The combination of multiple registers and the non-linear mixing (AND gates) prevents the simple linear equation attack.

Trivium is designed to be very efficient, especially when implemented directly in hardware (like in computer chips).

---

[Previous: The LFSR Linearity Attack](ch02_lfsr_attack.html) | [Next: Lesson 2 Summary](ch02_summary.html) 