## Lesson 1.3–1.4: Cryptanalysis + The Secret World of Modular Arithmetic

### 🕵️ What is Cryptanalysis?

Cryptanalysis is the art of code-breaking. Basically, what Oscar does in his spare time.

There are two main kinds:

*   **Brute-force attack:** Try every possible key until the message makes sense. Like trying every key on a keychain.
*   **Analytical attack:** Find a clever shortcut to crack the system. It's like picking the lock instead of trying every key.

💡 **Fun Fact:** If your cipher doesn't hide patterns like repeated letters or common words, Oscar can use frequency analysis to crack it faster than you'd expect!

### 🧮 Lesson 1.4: Modular Arithmetic – The Math Behind the Magic

Don't worry, this isn't scary math. This is "clock math." 🕒

#### 🔁 What is Modulo?

Modulo is just the remainder after division.

*   `7 mod 3 = 1` → because 7 ÷ 3 = 2 with remainder 1
*   `14 mod 5 = 4`

Think of a clock:

*   If it's 10 AM now, what time is it in 5 hours?
*   10 + 5 = 15, but clocks go to 12 → `15 mod 12 = 3` (3 PM)

#### 🏛️ The Caesar Cipher (a.k.a. Shift Cipher)

Julius Caesar used this to send top-secret Roman messages.

**Rule:** Shift each letter by 3.

*   **Plain:** `HELLO`
*   **Shift 3 → Cipher:** `KHOOR`

**Mathematically:**

1.  Convert letters to numbers: A = 0, B = 1, ..., Z = 25
2.  **Encryption:** `E(x) = (x + 3) mod 26`
3.  **Decryption:** `D(y) = (y - 3) mod 26`

🎲 Caesar only had 25 possible keys (since shifting 0 or 26 does nothing). Not very secure today, but it was the ancient version of a password manager!

#### 🎩 The Affine Cipher: Caesar Gets a Makeover

It's like Caesar Cipher 2.0:

*   Uses multiplication and addition:
*   `E(x) = (a·x + b) mod 26`

**Example with a = 5, b = 8:**

If x = 0 (A), then:
`E(0) = (5×0 + 8) mod 26 = 8` → `A` becomes `I`

**Important:**

*   `a` must be coprime to 26 (i.e., shares no common factors other than 1), or else decryption breaks. Valid values for `a` are 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25.
*   `b` can be any integer from 0 to 25.

### 🎓 Key Takeaways from Chapter 1:

*   A cipher must hide patterns, not just scramble letters.
*   Big key space ≠ secure, if Oscar can still analyze patterns.
*   Modulo math is everywhere in crypto.

---

[Previous: Lesson 1.2 - Symmetric Ciphers & Substitution](ch01_lesson1.2.html) | [Next: Chapter 2 - Stream Ciphers](../ch02.html) <!-- Placeholder for Ch 2 --> 