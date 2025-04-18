## Lesson 3.1: Intro to Block Ciphers & DES

Alright, class is back in session! We've sailed the smooth waters of Stream Ciphers, now let's navigate the blocky world of... **Block Ciphers**, starting with the granddaddy of them all: **The Data Encryption Standard (DES)**!

Think back to our stream ciphers, encrypting bit-by-bit. Block ciphers are different. They like to work in chunks, or "blocks." DES operates on **64-bit blocks** of plaintext. Imagine taking 8 characters of your message (since 8 characters * 8 bits/character = 64 bits), putting them in a box, shaking and scrambling that box using a secret key, and getting 8 scrambled characters (64 bits of ciphertext) out.

**Why learn about DES?** It was *the* standard for decades (from the 1970s!), used everywhere from banking to government. While its key size is too small for today's security needs, understanding DES teaches us fundamental concepts used in many modern ciphers, including its successor, AES. It's like studying a classic car to understand how modern engines work!

### Confusion & Diffusion: The Secret Sauce (Section 3.1.1)

DES, like many good block ciphers, uses two key principles, coined by the legendary Claude Shannon (the father of information theory!):

1.  **Confusion:** Making the relationship between the ciphertext and the key as complex and involved as possible. Even if you know a lot about the ciphertext, it should be super hard to figure out anything about the key. Think of mixing different paint colors thoroughly – it's hard to tell the original colors apart. DES achieves this mainly through **S-boxes** (we'll get to those!).
2.  **Diffusion:** Spreading the influence of a single plaintext bit over many ciphertext bits. Change just *one* bit in the plaintext, and about *half* the bits in the ciphertext should flip! Similarly, changing one key bit should drastically change the ciphertext. This hides statistical patterns in the plaintext. Think of dropping a pebble in a pond – the ripples spread out far and wide. DES achieves this using **permutations** (shuffling).

Good ciphers mix confusion and diffusion repeatedly over multiple "rounds."

**🤔 Quick Question:** Which principle (Confusion or Diffusion) primarily aims to hide statistical patterns in the plaintext by spreading changes widely across the ciphertext?
*(Answer below)*

<button onclick="revealAnswer('cdAnswer', this)">Reveal Answer</button>
<span id="cdAnswer" style="display: none;">
*(Answer: Diffusion)*
</span>

---

[Previous: Chapter 2 Summary](../ch02/ch02_summary.html) | [Next: DES Overview - The Feistel Network](ch03_overview.html)

<script src="../scripts/main.js"></script> <!-- Include shared revealAnswer function --> 