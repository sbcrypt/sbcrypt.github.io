## Lesson 3.3.3: The DES Key Schedule - Making Round Keys

DES uses a 56-bit key (officially 64 bits, but 8 are parity bits and ignored). How do we get sixteen different 48-bit round keys (K_1 to K_16) from just 56 bits?

1.  **Initial Key Permutation (PC-1):** The 64-bit key is shuffled (permuted), and the 8 parity bits are discarded, leaving 56 specific bits from the original key.
2.  **Split:** The 56 bits are split into two 28-bit halves, C_0 and D_0.
3.  **Shifting:** For each round `i` (from 1 to 16), the previous halves (C_{i-1}, D_{i-1}) are rotated left by 1 or 2 positions to get the new halves (C_i, D_i). The number of shifts (1 or 2) depends on the round number; it's 1 shift for rounds 1, 2, 9, 16, and 2 shifts for all other rounds.
4.  **Round Key Selection (PC-2):** After shifting, the combined 56 bits (C_i and D_i) are permuted again using a compression permutation (PC-2). This permutation selects and shuffles 48 specific bits out of the 56 to form the 48-bit round key K_i for that round `i`.

This process ensures each round key K_i is different and uses a unique combination of bits derived from the original 56-bit key.

**(Diagram Reference: See Fig 3.7 for the key schedule)**

<!-- Placeholder for potential Key Schedule animation -->
<div id="keyschedule-animation-placeholder" style="border:1px dashed #ccc; padding: 20px; margin: 15px 0; text-align: center;">
  (Animation showing PC-1, split to C/D, left shifts per round, and PC-2 selection could go here)
</div>

**🤔 Quick Question:** How many bits from the original 64-bit key are actually used in the DES algorithm?
*(Answer below)*

<button onclick="revealAnswer('keyBitsAnswer', this)">Reveal Answer</button>
<span id="keyBitsAnswer" style="display: none;">
*(Answer: 56 bits. The other 8 are parity bits and are discarded by PC-1.)*
</span>

---

<div class="page-navigation">
    <a href="ch03_round.html" class="prev">← Previous: Inside a DES Round</a>
    <a href="ch03_security.html" class="next">Next: DES Security Analysis →</a>
</div>

<script src="../scripts/main.js"></script>