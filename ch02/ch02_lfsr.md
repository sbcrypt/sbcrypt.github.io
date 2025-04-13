## Lesson 2.3: Building CSPRNGs - The Shift Register Saga

A popular way to build fast hardware CSPRNGs involves **Linear Feedback Shift Registers (LFSRs)**.

### What's an LFSR? (Section 2.3.1)

Imagine a row of boxes (memory cells/flip-flops). At each 'tick' of a clock:

1.  The content of each box shifts one position to the right.
2.  The bit falling off the right end is the **output bit** (`s_i`).
3.  The new bit entering the leftmost box is calculated by XORing the contents of some of the *other* boxes (the "feedback"). Which boxes are used is determined by the "feedback coefficients" or "taps".

<div style="text-align: center; margin: 20px 0;">
  <svg id="lfsr-svg" width="400" height="150" style="border: 1px solid #ccc;">
    <!-- Boxes -->
    <rect x="50" y="50" width="50" height="50" stroke="black" fill="#eee" />
    <text id="bit2" x="75" y="80" font-size="20" text-anchor="middle">1</text>
    <text x="75" y="40" font-size="12">s_i+2</text>

    <rect x="120" y="50" width="50" height="50" stroke="black" fill="#eee" />
    <text id="bit1" x="145" y="80" font-size="20" text-anchor="middle">0</text>
    <text x="145" y="40" font-size="12">s_i+1</text>

    <rect x="190" y="50" width="50" height="50" stroke="black" fill="#eee" />
    <text id="bit0" x="215" y="80" font-size="20" text-anchor="middle">0</text>
    <text x="215" y="40" font-size="12">s_i</text>

    <!-- Feedback Lines -->
    <polyline points="145,45 145,20 75,20" stroke="blue" fill="none"/>
    <polyline points="215,45 215,20 75,20" stroke="blue" fill="none"/>
    <circle cx="75" cy="20" r="3" fill="blue"/>
    <text x="85" y="25" font-size="14">⊕</text>

    <!-- Input/Output Lines -->
    <line x1="10" y1="75" x2="50" y2="75" stroke="black" marker-end="url(#arrow)"/>
    <line x1="240" y1="75" x2="280" y2="75" stroke="black" marker-end="url(#arrow)"/>

    <!-- Explanatory Text -->
    <text id="feedback-bit" x="10" y="130" font-size="14"></text>
    <text id="output-bit" x="290" y="80" font-size="14"></text>

    <!-- Arrowhead Definition -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#000" />
      </marker>
    </defs>
  </svg>
  <div style="margin-top: 10px;">
    <button id="lfsr-step">Step</button>
    <button id="lfsr-run">Run</button>
    <button id="lfsr-stop">Stop</button>
    <button id="lfsr-reset">Reset (100)</button>
  </div>
</div>

**Properties:**

*   **Deterministic:** Output depends entirely on the initial state and feedback taps.
*   **Periodic:** The output sequence eventually repeats.
*   **Maximum Length:** With cleverly chosen feedback taps (related to "primitive polynomials"), an LFSR with `m` boxes can produce a sequence of length `2^m - 1` before repeating (it avoids the all-zero state). This sequence can look statistically random.

**Example:** The graphic above shows a 3-bit LFSR with feedback `s_{i+3} = s_{i+1} ⊕ s_i` (feedback taps from the 0th and 1st positions, counting from the right). It starts in state `100`. Use the buttons to see how it generates the output sequence `0010111...`

### The Fatal Flaw: Linearity! (Section 2.3.2)

LFSRs are great for generating long sequences, but they are **LINEAR**. This makes them cryptographically **WEAK** when used alone.

**The Attack (Known Plaintext):**

[See a detailed example of how the attack works](ch02_lfsr_attack.html)

1.  Oscar knows the LFSR degree `m`