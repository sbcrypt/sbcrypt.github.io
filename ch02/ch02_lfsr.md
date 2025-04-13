## Lesson 2.3: Building CSPRNGs - The Shift Register Saga

A popular way to build fast hardware CSPRNGs involves **Linear Feedback Shift Registers (LFSRs)**.

### What's an LFSR? (Section 2.3.1)

Imagine a row of boxes (memory cells/flip-flops). At each 'tick' of a clock:

1.  The content of each box shifts one position to the right.
2.  The bit falling off the right end is the **output bit** (`s_i`).
3.  The new bit entering the leftmost box is calculated by XORing the contents of some of the *other* boxes (the "feedback"). Which boxes are used is determined by the "feedback coefficients" or "taps".

**Properties:**

*   **Deterministic:** Output depends entirely on the initial state and feedback taps.
*   **Periodic:** The output sequence eventually repeats.
*   **Maximum Length:** With cleverly chosen feedback taps (related to "primitive polynomials"), an LFSR with `m` boxes can produce a sequence of length `2^m - 1` before repeating (it avoids the all-zero state). This sequence can look statistically random.

**Example:** A 3-bit LFSR (Fig 2.6 from original text) with feedback `s_{i+3} = s_{i+1} ⊕ s_i` starting at `100` outputs the sequence `0010111` which repeats every 7 bits (`2^3 - 1 = 7`).

### The Fatal Flaw: Linearity! (Section 2.3.2)

LFSRs are great for generating long sequences, but they are **LINEAR**. This makes them cryptographically **WEAK** when used alone.

**The Attack (Known Plaintext):**

1.  Oscar knows the LFSR degree `m` (he can guess this).
2.  He gets `2m` bits of known plaintext `x` and corresponding ciphertext `y`.
3.  He calculates `2m` bits of the keystream: `s_i = x_i ⊕ y_i`.
4.  He uses the LFSR's linear recurrence formula (`s_{i+m} = sum(p_j * s_{i+j})`) to set up `m` linear equations with the `m` unknown feedback coefficients (`p_j`) as variables.
5.  He solves this system of linear equations (easy for computers!) to find the secret feedback taps `p_j`.
6.  Boom! He knows the LFSR structure, can generate the whole keystream, and decrypts everything.

**Lesson:** Never use a single, plain LFSR as your stream cipher's keystream generator!

***

**🧩 Mini LFSR Puzzle:**

Consider the 3-bit LFSR from Example 2.3 again: `s_{i+3} = s_{i+1} ⊕ s_i`.
If the current state (from left to right, `s_{i+2}, s_{i+1}, s_i`) is `110`.

1.  What is the output bit `s_i`?
2.  What is the next bit to be fed into the left (`s_{i+3}`)?
3.  What will the state be after one clock tick?

<button onclick="revealAnswer('lfsrAnswer', this)">Reveal Answer</button>
<span id="lfsrAnswer" style="display: none;">
*(Answer: 1. Output `s_i` = 0. 2. Next bit `s_{i+3} = s_{i+1} ⊕ s_i = 1 ⊕ 0 = 1`. 3. New state = `111`.)*
</span>

***

---

[Previous: Lesson 2.2.3 - Practical Stream Ciphers](ch02_practical.html) | [Next: Lesson 2.3.3 - Non-Linearity & Trivium](ch02_nonlinear.html)

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