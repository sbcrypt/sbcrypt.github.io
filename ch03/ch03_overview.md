## Lesson 3.2: DES - The High-Level Flyover (Feistel Network)

DES is a type of block cipher called a **Feistel Network**. This sounds fancy, but it's a clever design with a cool property: the *same* algorithm can be used for both encryption and decryption (just with keys used in reverse order!).

Here's the basic flow for encrypting one 64-bit block:

1.  **Initial Permutation (IP):** The 64 plaintext bits get a good shuffle, like dealing a deck of cards according to a fixed pattern. This doesn't add security but was likely done for efficient hardware implementation back in the day.
2.  **16 Rounds:** The real work happens here! The 64-bit block goes through 16 identical rounds of processing. Each round uses a different 48-bit **round key** derived from the main 56-bit DES key.
3.  **Final Permutation (FP):** Another shuffle, which is the exact inverse of the Initial Permutation (IP). It undoes the first shuffle.

The output is your 64-bit ciphertext block.

<div style="text-align: center; margin: 20px 0;">
  <h4>Overall DES Structure</h4>
  <svg width="90%" height="150" viewBox="0 0 620 100" style="border: 1px solid #eee;">
    <defs>
      <marker id="arrow-des" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#000" />
      </marker>
    </defs>
    <!-- Boxes -->
    <rect x="10" y="30" width="100" height="40" fill="#f9f9f9" stroke="#aaa"/>
    <text x="60" y="55" text-anchor="middle">Plaintext (64b)</text>
    <rect x="135" y="30" width="40" height="40" fill="#eef" stroke="#aac"/>
    <text x="155" y="55" text-anchor="middle">IP</text>
    <rect x="200" y="30" width="180" height="40" fill="#efe" stroke="#aca"/>
    <text x="290" y="48" text-anchor="middle">16 Rounds of Feistel</text>
    <text x="290" y="62" text-anchor="middle">Function (f, K1..16)</text>
    <rect x="405" y="30" width="40" height="40" fill="#eef" stroke="#aac"/>
    <text x="425" y="55" text-anchor="middle">FP</text>
    <rect x="470" y="30" width="110" height="40" fill="#f9f9f9" stroke="#aaa"/>
    <text x="525" y="55" text-anchor="middle">Ciphertext (64b)</text>
    <!-- Arrows -->
    <line x1="110" y1="50" x2="135" y2="50" stroke="black" marker-end="url(#arrow-des)"/>
    <line x1="175" y1="50" x2="200" y2="50" stroke="black" marker-end="url(#arrow-des)"/>
    <line x1="380" y1="50" x2="405" y2="50" stroke="black" marker-end="url(#arrow-des)"/>
    <line x1="445" y1="50" x2="470" y2="50" stroke="black" marker-end="url(#arrow-des)"/>
  </svg>
</div>

<div style="text-align: center; margin: 20px 0;">
  <h4>Single Feistel Round Animation</h4>
  <svg id="feistel-round-svg" width="80%" height="250" viewBox="0 0 500 200" style="border: 1px solid #eee;">
    <defs>
      <marker id="arrow-feistel" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#000" />
      </marker>
    </defs>

    <text id="feistel-round-num" x="10" y="20" font-size="14">Round 1</text>

    <!-- Left Input -->
    <rect x="50" y="50" width="80" height="40" fill="#f9f9f9" stroke="#aaa"/>
    <text id="feistel-left" x="90" y="75" text-anchor="middle">L0</text>

    <!-- Right Input -->
    <rect x="370" y="50" width="80" height="40" fill="#f9f9f9" stroke="#aaa"/>
    <text id="feistel-right" x="410" y="75" text-anchor="middle">R0</text>

    <!-- f Function Box -->
    <rect x="220" y="100" width="60" height="40" fill="#efe" stroke="#aca"/>
    <text x="250" y="125" text-anchor="middle">f</text>

    <!-- Key Input -->
    <text id="feistel-key" x="250" y="160" text-anchor="middle" font-size="14">K1</text>
    <line x1="250" y1="140" x2="250" y2="150" stroke="black" marker-end="url(#arrow-feistel)"/>

    <!-- XOR Circle -->
    <circle cx="170" cy="120" r="15" stroke="black" fill="none"/>
    <text x="170" y="125" text-anchor="middle" font-size="18">⊕</text>

    <!-- Data Flow Lines -->
    <polyline points="410,90 410,120 280,120" stroke="#999" fill="none" marker-end="url(#arrow-feistel)"/> <!-- R_i to f -->
    <line x1="280" y1="120" x2="220" y2="120" stroke="#999" fill="none" marker-start="url(#arrow-feistel)"/> <!-- f output -->
    <line x1="220" y1="120" x2="185" y2="120" stroke="#999" fill="none" marker-end="url(#arrow-feistel)"/> <!-- f output to XOR -->
    <line x1="90" y1="90" x2="90" y2="120" stroke="#999" fill="none"/>
    <line x1="90" y1="120" x2="155" y2="120" stroke="#999" fill="none" marker-end="url(#arrow-feistel)"/> <!-- L_i to XOR -->

    <!-- Swap Lines -->
    <polyline points="410,90 410,180 90,180" stroke="#999" fill="none" marker-end="url(#arrow-feistel)"/> <!-- R_i becomes new L_i+1 -->
    <line x1="170" y1="135" x2="170" y2="180" stroke="#999" fill="none"/>
    <line x1="170" y1="180" x2="410" y2="180" stroke="#999" fill="none" marker-end="url(#arrow-feistel)"/> <!-- XOR result becomes new R_i+1 -->

    <!-- Intermediate Texts -->
    <text id="feistel-f-output" x="215" y="110" text-anchor="end" font-size="14" fill="blue"></text>
    <text id="feistel-temp" x="170" y="155" text-anchor="middle" font-size="14" fill="red"></text>

    <!-- Output Labels -->
    <text x="90" y="195" text-anchor="middle" font-size="14">New Left (L_i+1)</text>
    <text x="410" y="195" text-anchor="middle" font-size="14">New Right (R_i+1)</text>

  </svg>
  <div style="margin-top: 10px;">
    <button id="feistel-step">Step Round</button>
    <button id="feistel-reset">Reset (Round 1)</button>
  </div>
</div>

**Diagram Legend:**
*   **L0 / R0:** Represent the Left and Right halves of the 64-bit data block entering Round 1.
*   **f:** The complex Feistel round function (details in Lesson 3.3). It takes R0 and K1 as input.
*   **K1:** The secret Round Key specific to Round 1.
*   **⊕:** The XOR (Exclusive OR) operation.
*   **New Left (L_i+1):** The output Left half for the *next* round. In Feistel, this is simply the *old* Right half (R0).
*   **New Right (R_i+1):** The output Right half for the *next* round, calculated as L0 ⊕ f(R0, K1).

---

[Previous: Intro to Block Ciphers](ch03_intro.html) | [Next: Inside a DES Round](ch03_round.html)

<script src="../scripts/feistel_round_animation.js"></script> 