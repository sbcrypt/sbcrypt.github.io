## Lessons Learned (Chapter 4)

1. **AES replaced DES** with larger keys/blocks and better security:
   - Selected in 2001 after a public competition
   - Offers 128, 192, or 256-bit keys
   - Uses a 128-bit block size
   - Designed by Joan Daemen and Vincent Rijmen (Rijndael)

2. **Galois Fields (GF(2⁸))** enable non-linear byte transformations:
   - Bytes are treated as polynomials
   - Addition is performed with XOR
   - Multiplication uses polynomial arithmetic modulo an irreducible polynomial

3. **AES uses a Substitution-Permutation Network (SPN)** with multiple rounds:
   - 10 rounds for 128-bit keys
   - 12 rounds for 192-bit keys
   - 14 rounds for 256-bit keys

4. **Each AES round has 4 transformations:**
   - SubBytes (byte substitution using S-box) - provides confusion
   - ShiftRows (row-wise permutation) - provides diffusion
   - MixColumns (column-wise mixing) - provides further diffusion
   - AddRoundKey (XOR with round key) - adds key material
   - The final round skips MixColumns

5. **Key Expansion** turns the original key into many round keys:
   - Uses rotations, S-box substitutions, and XOR operations
   - Round constants ensure uniqueness
   - Creates 1 more round key than the number of rounds

6. **AES is remarkably secure:**
   - No practical attacks exist against the full cipher
   - Brute forcing is computationally infeasible
   - Side-channel attacks target implementations, not the algorithm

7. **AES is everywhere in modern systems:**
   - Network security (Wi-Fi, TLS, VPNs)
   - Storage encryption (BitLocker, FileVault)
   - Hardware acceleration in CPUs and devices
   - Used with various modes of operation (CBC, CTR, GCM)

8. **AES decryption is not identical to encryption:**
   - Uses inverse operations (InvSubBytes, InvShiftRows, InvMixColumns)
   - Round keys are applied in reverse order
   - Can be optimized with equivalent inverse cipher transformations

AES has proven to be a resilient and versatile standard that continues to secure our digital world. Its mathematical foundations, careful design, and resistance to attacks have kept it as the gold standard for symmetric encryption.

Ready to see AES in action with modes like CBC or CTR? Let's tackle Chapter 5 next! 🚀

---

<div class="page-navigation">
    <a href="ch04_decryption.html" class="prev">← Previous: AES Decryption</a>
    <a href="../ch05/ch05_intro.html" class="next">Next: Chapter 5 - Block Cipher Modes →</a>
</div>

<script src="../scripts/main.js"></script>