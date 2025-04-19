## Lesson 4.8: AES Decryption - Undoing the Magic

Unlike DES's Feistel structure where encryption and decryption use the same operations, AES decryption requires mostly inverse operations.

### AES Decryption Process

1. **Initial Round**
   - AddRoundKey (with the last round key)

2. **Main Rounds** (9, 11, or 13 rounds, depending on key size)
   - InvShiftRows
   - InvSubBytes
   - AddRoundKey (using round keys in reverse order)
   - InvMixColumns

3. **Final Round**
   - InvShiftRows
   - InvSubBytes
   - AddRoundKey (with the first round key)

### The Inverse Operations

1. **InvShiftRows**
   - Just like ShiftRows, but shifts right instead of left:
     - Row 0: No shift
     - Row 1: Shift 1 byte right
     - Row 2: Shift 2 bytes right
     - Row 3: Shift 3 bytes right

2. **InvSubBytes**
   - Uses the inverse S-box to map each byte back to its original value
   - The inverse S-box is constructed to undo the SubBytes transformation

3. **InvMixColumns**
   - Uses a different matrix multiplication in GF(2⁸)
   - The matrix is the mathematical inverse of the one used in encryption
   - Ensures that applying MixColumns followed by InvMixColumns returns the original data

4. **AddRoundKey**
   - Identical to encryption (XOR is its own inverse)
   - Round keys are used in reverse order

### Interesting Implementation Detail

AES can be optimized by restructuring the decryption algorithm to more closely match encryption. This involves:

- Changing the order of operations
- Pre-computing modified inverse round keys
- Merging some transformations

This "equivalent inverse cipher" makes hardware/software implementations more efficient.

**Fun Fact:** Unlike DES's Feistel network, AES's decryption uses *different* operations than encryption.

**🤔 Quick Question:** Why can the AddRoundKey operation remain the same in both encryption and decryption?
*(Answer below)*

<button onclick="revealAnswer('xorAnswer', this)">Reveal Answer</button>
<span id="xorAnswer" style="display: none;">
*(Answer: AddRoundKey uses the XOR operation, which is its own inverse - XORing the same value twice returns the original value.)*
</span>

<div class="page-navigation">
    <a href="ch04_applications.html" class="prev">← Previous: AES in Practice</a>
    <a href="ch04_summary.html" class="next">Next: Chapter 4 Summary →</a>
</div>

<script src="../scripts/main.js"></script>