## Lesson 4.3: AES Structure Overview

AES is a block cipher that processes data in fixed-size blocks of 128 bits (16 bytes), which are typically arranged as a 4×4 matrix of bytes. Unlike DES which used a Feistel structure, AES uses a **substitution-permutation network (SPN)** architecture.

### Overall Structure

AES encryption consists of multiple rounds of processing, with the number of rounds depending on the key size:

- **10 rounds** for 128-bit keys *(most common)*
- **12 rounds** for 192-bit keys
- **14 rounds** for 256-bit keys

### The AES Encryption Process

1. **Key Expansion** - The original encryption key is expanded into a series of round keys
2. **Initial Round** - AddRoundKey (XOR the input with the first round key)
3. **Main Rounds** (9, 11, or 13 rounds, depending on key size)
   - SubBytes (byte substitution using S-box)
   - ShiftRows (row-wise permutation)
   - MixColumns (column-wise mixing)
   - AddRoundKey (XOR with round key)
4. **Final Round** (1 round)
   - SubBytes
   - ShiftRows
   - AddRoundKey (no MixColumns in the final round!)

### State Array

AES processes data using a 4×4 array of bytes called the **state**. For a 128-bit block:

```
┌─────┬─────┬─────┬─────┐
│ s₀₀ │ s₀₁ │ s₀₂ │ s₀₃ │
├─────┼─────┼─────┼─────┤
│ s₁₀ │ s₁₁ │ s₁₂ │ s₁₃ │
├─────┼─────┼─────┼─────┤
│ s₂₀ │ s₂₁ │ s₂₂ │ s₂₃ │
├─────┼─────┼─────┼─────┤
│ s₃₀ │ s₃₁ │ s₃₂ │ s₃₃ │
└─────┴─────┴─────┴─────┘
```

Each round transformation operates on this state array, gradually increasing confusion and diffusion of the input bits.

**🤔 Quick Question:** Why does AES use different numbers of rounds for different key sizes?
*(Answer below)*

<button onclick="revealAnswer('roundsAnswer', this)">Reveal Answer</button>
<span id="roundsAnswer" style="display: none;">
*(Answer: Larger key sizes require more rounds to ensure adequate diffusion of all key bits into the ciphertext, maintaining security proportional to the key size.)*
</span>

---

<div class="page-navigation">
    <a href="ch04_math.html" class="prev">← Previous: AES Galois Field Mathematics</a>
    <a href="ch04_round.html" class="next">Next: Inside an AES Round →</a>
</div>

<script src="../scripts/main.js"></script>