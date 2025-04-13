## Lesson 2.1.2: The Magic Trick - XOR Encryption

This is the core secret sauce of most stream ciphers, and it's beautifully simple!

1.  You have your **plaintext** bit (let's call it `x`). This is your original secret bit (a 0 or a 1).
2.  You have a **keystream** bit (let's call it `s`). This is a bit generated from a secret shared key.
3.  You combine them using the **XOR** operation (often written as `⊕` or `+ mod 2`).

*   **Encryption:** Ciphertext bit `y = x ⊕ s`
*   **Decryption:** Plaintext bit `x = y ⊕ s`

**Wait, Encryption and Decryption are the SAME?!**
Yep! That's the magic of XOR. XORing with the same value twice cancels itself out: `(x ⊕ s) ⊕ s = x`. It's like flipping a switch on, then off again – you end up back where you started.

**Truth Table Fun (XOR - Addition Modulo 2):**

| Plaintext (`x`) | Keystream (`s`) | Ciphertext (`y = x ⊕ s`) |
| :-------------- | :-------------- | :------------------------- |
| 0               | 0               | 0                          |
| 0               | 1               | 1                          |
| 1               | 0               | 1                          |
| 1               | 1               | 0                          |

**Why is XOR so cool for this?** Look at the table! If the keystream bit `s` is truly random (50% chance of being 0, 50% chance of being 1), then the ciphertext bit `y` also has a 50% chance of being 0 or 1, *no matter what the plaintext bit `x` was*. It perfectly hides the original bit's value!

The *real* challenge isn't the XORing; it's generating a long, seemingly random, unpredictable **keystream** (`s0, s1, s2, ...`) that both the sender and receiver can create using their shared secret key, but that an eavesdropper can't guess.

***

**🤔 Quick Question:** Alice encrypts the plaintext `1011` using the keystream `0110`. What is the ciphertext? Can you decrypt it back?

<button onclick="revealAnswer('xorAnswer', this)">Reveal Answer</button>
<span id="xorAnswer" style="display: none;">
*(Answer: Ciphertext = `1011 ⊕ 0110 = 1101`. Decryption: `1101 ⊕ 0110 = 1011`)*
</span>

***

---

[Previous: Lesson 2.1.1 - Stream vs Block](ch02_intro.html) | [Next: Lesson 2.2 - Randomness & RNGs](ch02_randomness.html)

<script>
function revealAnswer(answerId, buttonElement) {
  const answerElement = document.getElementById(answerId);
  if (answerElement) {
    answerElement.style.display = 'inline'; // Or 'block' if needed
  }
  if (buttonElement) {
    buttonElement.style.display = 'none'; // Hide button after clicking
  }
}
</script> 