## Mini-Puzzle Solution: Substitution Cipher

**Ciphertext:** `SPP YKU SKKN`

**Analysis:**

1.  **Structure:** We have a three-word phrase: `XXX YKU XXXN`.
2.  **Letter Frequency:** The letter `K` appears most often (3 times). In standard English, `E` or `O` are very common, especially in short phrases. Double letters like `PP` and `KK` are also strong clues.
3.  **Guessing based on Frequency:** Let's try mapping the most frequent ciphertext letter `K` to a common plaintext vowel, like `O`.
    *   If `K` → `O`, the pattern becomes: `SPP YOU SOON` (This requires `Y`→`Y`, `K`→`O`, `U`→`U`, `S`→`S`, `N`→`N`).
4.  **Solving the First Word:** Now look at `SPP`. We know `S`→`S`. So we need a 3-letter English word starting with `S` and ending in a double letter. `SEE` fits perfectly! This implies `P`→`E`.
5.  **Checking Consistency:** Let's check our mappings:
    *   `S` → `S`
    *   `P` → `E`
    *   `Y` → `Y`
    *   `K` → `O`
    *   `U` → `U`
    *   `N` → `N`
    *   These are all unique (one ciphertext letter maps to only one plaintext letter), which is required for a substitution cipher.
6.  **Decryption:** Applying these mappings to `SPP YKU SKKN` gives...

**Plaintext:** `SEE YOU SOON`

---

[Back to the Puzzle](ch01_lesson1.2_puzzle.html)
[Back to Lesson 1.2](ch01_lesson1.2.html) 