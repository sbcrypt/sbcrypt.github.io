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

> A cryptosystem should be secure even if everything about it is public—except the key.

Alright—Lesson 1.2 is now complete!
We're all warmed up to hit modular arithmetic and historical ciphers (which we just covered in Lesson 1.4).

Want a mini-puzzle using a substitution cipher before we leap into Chapter 2: Stream Ciphers? 