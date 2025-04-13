## Lesson 2.3.3: Redemption - Non-Linearity Saves the Day!

How do we make LFSR-like structures secure? Introduce **NON-LINEARITY**! Combine multiple LFSRs or similar registers in clever, non-linear ways.

### Trivium - A Modern Example:

*   **Structure:** Uses three interconnected shift registers (A, B, C) of different lengths (total 288 bits).
*   **Key + IV:** Uses an 80-bit key and an 80-bit **Initialization Vector (IV)** or **Nonce**.
    *   **What's an IV/Nonce?** A "number used once." It's *not* secret, but it **must be unique** for every message encrypted with the same key. It ensures you get a different keystream even if you encrypt different messages with the same key, preventing the "two-time pad" problem!
*   **Initialization:** Key and IV are loaded into the registers.
*   **Warm-up:** The cipher runs for 1152 cycles *without* producing output, mixing the key and IV thoroughly into the internal state.
*   **Keystream Generation:** After warm-up, it starts spitting out keystream bits.
*   **The Magic:** Crucially, the feedback and output calculations involve **AND** operations (which are non-linear when viewed in modulo 2 arithmetic) in addition to XORs. This non-linearity thwarts the simple linear equation attack that breaks single LFSRs.

Trivium is designed to be small and fast, especially in hardware.

---

[Previous: The LFSR Linearity Attack](ch02_lfsr_attack.html) | [Next: Lesson 2 Summary](ch02_summary.html) 