## Lesson 4.1: Introduction to AES - The New Encryption Standard

Alright, time to meet the **AES** – the encryption superstar that replaced DES! Get ready for some Galois Field math, byte shuffling, and *serious* confusion and diffusion. Let's dive into **Chapter 4: The Advanced Encryption Standard (AES)**!

### AES 101: The Encryption Superstar

**Why AES?**

- **DES was too weak:** 56-bit keys got crushed by brute-force attacks.
- **AES to the rescue!** Selected in 2001 after a **public competition** (no NSA backdoor suspicions here!).
- **Key sizes:** 128, 192, or 256 bits. *No more tiny keys!*
- **Blocksize:** 128 bits (bigger than DES's 64 bits).
- **Speed:** Optimized for both software *and* hardware.

**📜 Fun Fact:** The original name was **Rijndael** (pronounced *"Rhine-doll"*), created by Belgian cryptographers Joan Daemen and Vincent Rijmen. Try saying that 3 times fast!

**🤔 Quick Question:** What was the primary reason DES needed to be replaced?
*(Answer below)*

<button onclick="revealAnswer('desWeakAnswer', this)">Reveal Answer</button>
<span id="desWeakAnswer" style="display: none;">
*(Answer: DES had too small a key size (56 bits) making it vulnerable to brute-force attacks.)*
</span>

---

<div class="page-navigation">
    <a href="../ch03/ch03_summary.html" class="prev">← Previous: Chapter 3 Summary</a>
    <a href="ch04_math.html" class="next">Next: Galois Field Mathematics →</a>
</div>

<script src="../scripts/main.js"></script>