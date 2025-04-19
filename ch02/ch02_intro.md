## Lesson 2.1: Stream Ciphers - The Speedy Secret Keepers!

Okay, buckle up! We're ditching the dry lecture notes and taking a joyride through the world of **Stream Ciphers**. Think of it like learning secret codes, but way cooler and used everywhere from your phone to secure websites! Since you've aced Chapter 1, let's jump straight into Chapter 2.

Imagine you're sending a super long, top-secret message. Instead of chopping it into big chunks and encrypting each chunk (that's for block ciphers, coming later!), you want something faster, something that encrypts as you go, bit by tiny bit. That's where stream ciphers come in!

### Stream vs. Block: The Quick Lowdown (Section 2.1.1)

*   **Stream Ciphers:** Like whispering your secret message one letter at a time, mixing each letter with a secret "key" letter as you go. They encrypt data bit-by-bit (or sometimes byte-by-byte).
*   **Block Ciphers:** Like putting your message in boxes (blocks) of a fixed size, scrambling the contents of each box all at once.

**Why Stream Ciphers?** They're often zippy and don't need much computing power, making them great for things like encrypting calls on older mobile phones (like the A5/1 cipher in GSM) or when you need low latency.

---

<div class="page-navigation">
    <a href="../ch01/ch01_lesson1.3-4.html" class="prev">← Previous: Chapter 1 Summary</a>
    <a href="ch02_xor.html" class="next">Next: XOR Encryption →</a>
</div>

<script src="../scripts/main.js"></script>