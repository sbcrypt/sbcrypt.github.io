## Lesson 3.3: Diving Deeper - Inside a DES Round

Each of the 16 rounds in DES does the following (using the Feistel structure):

1.  **Split:** The 64-bit block coming into the round is split into a Left half (L_i, 32 bits) and a Right half (R_i, 32 bits).
2.  **The `f`-Function Fun:** The Right half (R_i) goes through a complex function `f` along with the 48-bit round key (K_i). This `f`-function is where the magic happens:
    *   **Expansion (E):** The 32-bit R_i is expanded to 48 bits by duplicating some bits. Think of stretching it out to match the round key size.
    *   **Key Mixing:** The expanded 48-bit block is XORed with the 48-bit round key K_i.
    *   **S-Boxes (Substitution):** This is the **confusion** core! The 48 bits are divided into eight 6-bit chunks. Each chunk goes into a different **Substitution Box (S-box)**. Each S-box takes 6 bits in and outputs 4 bits based on a fixed lookup table. These S-boxes are carefully designed to be **non-linear**. This non-linearity is CRUCIAL for security – without it, DES would be easily breakable.
    *   **Permutation (P):** The resulting 32 bits (8 S-boxes * 4 bits each) are shuffled (permuted) according to a fixed pattern P. This is the **diffusion** part within the round.
3.  **XOR and Swap:** The 32-bit output of the `f`-function is XORed with the Left half (L_i) to become the *new* Right half (R_{i+1}). The *old* Right half (R_i) becomes the *new* Left half (L_{i+1}).

<div style="text-align: center; margin: 20px 0;">
  <h4>DES f-Function Animation</h4>
  <svg id="f-function-svg" width="90%" height="300" viewBox="0 0 600 250" style="border: 1px solid #eee;">
    <defs>
      <marker id="arrow-f" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#000" />
      </marker>
      <style>
        .highlight {
          stroke: red;
          stroke-width: 2;
        }
      </style>
    </defs>

    <text id="f-status" x="10" y="20" font-size="14">Start: R_i (32 bits) and K_i (48 bits) enter.</text>

    <!-- Inputs -->
    <text id="f-input-r" x="50" y="50" text-anchor="end">R_i (32b)</text>
    <line x1="50" y1="50" x2="100" y2="50" stroke="black" marker-end="url(#arrow-f)"/>

    <text id="f-input-k" x="230" y="80" text-anchor="middle">K_i (48b)</text>
    <line x1="230" y1="70" x2="230" y2="100" stroke="black" marker-end="url(#arrow-f)"/>

    <!-- Expansion Box -->
    <rect id="f-box-e" x="100" y="30" width="50" height="40" fill="#eef" stroke="#aaa"/>
    <text x="125" y="55" text-anchor="middle">E</text>
    <line x1="150" y1="50" x2="200" y2="50" stroke="black" marker-end="url(#arrow-f)"/>
    <text id="f-expansion-output" x="175" y="40" text-anchor="middle" font-size="12" fill="blue"></text>

    <!-- Key XOR Area -->
    <g id="f-xor-area">
      <circle cx="230" cy="110" r="15" stroke="black" fill="none"/>
      <text x="230" y="115" text-anchor="middle" font-size="18">⊕</text>
      <line x1="200" y1="50" x2="230" y2="95" stroke="black" marker-end="url(#arrow-f)"/>
      <line x1="230" y1="125" x2="230" y2="150" stroke="black" marker-end="url(#arrow-f)"/>
      <text id="f-xor-output" x="240" y="140" text-anchor="start" font-size="12" fill="blue"></text>
    </g>

    <!-- S-Boxes -->
    <rect id="f-box-s" x="180" y="150" width="100" height="40" fill="#efe" stroke="#aaa"/>
    <text x="230" y="175" text-anchor="middle">S-Boxes (8)</text>
    <line x1="230" y1="190" x2="230" y2="210" stroke="black" marker-end="url(#arrow-f)"/>
    <text id="f-sbox-output" x="240" y="205" text-anchor="start" font-size="12" fill="blue"></text>

    <!-- P-Box -->
    <rect id="f-box-p" x="180" y="210" width="100" height="30" fill="#fee" stroke="#aaa"/>
    <text x="230" y="230" text-anchor="middle">P</text>
    <line x1="280" y1="225" x2="350" y2="225" stroke="black" marker-end="url(#arrow-f)"/>
    <text id="f-pbox-output" x="315" y="215" text-anchor="middle" font-size="12" fill="blue"></text>

    <!-- Final Output Label -->
    <text x="360" y="230" text-anchor="start">f(R_i, K_i) (32b)</text>

  </svg>
  <div style="margin-top: 10px;">
    <button id="f-step">Step f-Function</button>
    <button id="f-reset">Reset</button>
  </div>
</div>

**Animation Legend:**
*   **R_i:** The 32-bit Right half input to the round function.
*   **K_i:** The 48-bit Round Key for this round.
*   **E:** Expansion Permutation (expands R_i from 32 to 48 bits).
*   **⊕:** XOR operation (mixes expanded R_i with K_i).
*   **S-Boxes:** 8 Substitution Boxes (non-linear, map 48 bits down to 32 bits).
*   **P:** Permutation Box (shuffles the 32 S-box outputs).
*   *Highlighted elements* indicate the current stage of processing.

**Note:** In the very last round (Round 16), the final swap between the Left and Right halves is *not* performed. This makes encryption and decryption work correctly.

📜 **Crypto Trivia:** The design of the DES S-boxes was controversial. IBM originally designed them, but the NSA modified them before DES became a standard. Some feared the NSA had put in a secret "backdoor." Decades later, analysis revealed the NSA's changes actually made DES *more resistant* to a powerful attack called differential cryptanalysis, which wasn't publicly known at the time!

**🤔 Quick Question:** What is the main purpose of the S-Boxes in the DES round function?
*(Answer below)*

<button onclick="revealAnswer('sboxPurposeAnswer', this)">Reveal Answer</button>
<span id="sboxPurposeAnswer" style="display: none;">
*(Answer: To introduce non-linearity (Confusion), making the relationship between the key and the ciphertext complex and resistant to linear attacks.)*
</span>

<div class="page-navigation">
    <a href="ch03_overview.html" class="prev">← Previous: DES Overview & Feistel Network</a>
    <a href="ch03_keyschedule.html" class="next">Next: DES Key Schedule →</a>
</div>

<script src="../scripts/main.js"></script>
<script src="../scripts/f_function_animation.js"></script>