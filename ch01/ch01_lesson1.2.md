## Lesson 1.2: Symmetric Cryptography & The Substitution Cipher

Picture this:

-   Alice wants to send a message to Bob.
-   Oscar is lurking, ready to snoop.

**Solution:** Use a symmetric cipher—both Alice and Bob share a secret key 🔑.

This is like whispering in a made-up language only you and your bestie understand.

### 🧠 Key Concepts:

-   **Plaintext (x):** The original message.
-   **Ciphertext (y):** The scrambled version.
-   **Key (k):** The secret rule both sides use to encrypt/decrypt.

### 🧩 Example: The Substitution Cipher

This cipher is old school cool. You replace each letter in the alphabet with a different one.

**Example Key:**
```
A → M
B → Q
C → D
... and so on
```

So the word `ABBA` becomes `MQQM`

This is a 1-to-1 mapping, making it easy to understand but not super secure.

### 🧨 Ways to Break It:

1.  **Brute Force Attack**
    -   Try every possible substitution (that's 26! = 403,291,461,126,605,635,584,000,000 combos 😱)
    -   Oscar doesn't love this—it's slow.

2.  **Frequency Analysis**
    -   Oscar is smart. He counts how often letters appear.
    -   In English, `E` is the most common letter.
    -   So if a mystery letter shows up a lot, chances are it's `E`.

📊 Cryptanalysis meets statistics!

### 🔒 The Real Lesson Here:

Good cryptography:

-   Shouldn't rely on "keeping the method secret"
-   Should only rely on keeping the **key** secret
-   Must make ciphertext look like random gibberish

This is called **Kerckhoffs' Principle:**

> <span style="color: blue; font-weight: bold;">A cryptosystem should be secure even if everything about it is public—except the key.</span>

Alright—Lesson 1.2 is now complete!
We're all warmed up to hit modular arithmetic and historical ciphers.

Ready for a challenge?

[Try the Lesson 1.2 Mini-Puzzle!](ch01_lesson1.2_puzzle.html)

---

[Previous: Lesson 1.1 - Overview](ch01.html) | [Next: Lesson 1.3-4 - Cryptanalysis & Modulo](ch01_lesson1.3-4.html)

<div class="page-navigation">
    <a href="ch01.html" class="prev">← Previous: Overview & Alice/Bob</a>
    <a href="ch01_lesson1.2_puzzle.html" class="next">Next: Substitution Cipher Puzzle →</a>
</div>

<script src="../scripts/main.js"></script>