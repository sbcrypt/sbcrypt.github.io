## Lesson 4.4: Inside an AES Round - The Four Transformations

Each main round in AES applies four transformations to the state array. These operations provide both confusion and diffusion, making AES highly secure.

### 1. Byte Substitution (SubBytes)

- **S-Box Magic:** Each byte is replaced using a **lookup table** (S-box).
- **How it works:** The S-box is a fixed 16×16 lookup table that maps each byte to a new byte.
- **Purpose:** Creates non-linearity (confusion), breaking patterns in the data.

The AES S-box was carefully designed to resist linear and differential cryptanalysis. It has no simple algebraic description, making it resistant to mathematical shortcuts.

### 2. Shift Rows

- **Row Shuffle:** Rows of the 4×4 byte matrix are cyclically shifted by different offsets:
    - Row 0: No shift.
    - Row 1: Shift 1 byte left.
    - Row 2: Shift 2 bytes left.
    - Row 3: Shift 3 bytes left.

```
Before ShiftRows:      After ShiftRows:
┌──┬──┬──┬──┐         ┌──┬──┬──┬──┐
│A0│A1│A2│A3│         │A0│A1│A2│A3│ (no shift)
├──┼──┼──┼──┤         ├──┼──┼──┼──┤
│B0│B1│B2│B3│   →     │B1│B2│B3│B0│ (1 byte shift)
├──┼──┼──┼──┤         ├──┼──┼──┼──┤
│C0│C1│C2│C3│         │C2│C3│C0│C1│ (2 byte shift)
├──┼──┼──┼──┤         ├──┼──┼──┼──┤
│D0│D1│D2│D3│         │D3│D0│D1│D2│ (3 byte shift)
└──┴──┴──┴──┘         └──┴──┴──┴──┘
```

- **Purpose:** Provides diffusion by spreading data to different columns.

### 3. Mix Columns

- **Matrix Mix:** Each column is multiplied by a fixed 4×4 matrix in GF(2⁸).
- **Effect:** Each byte in the output column depends on all bytes in the input column.
- **Purpose:** Provides strong diffusion across columns.

The MixColumn transformation mixes the bytes vertically, complementing ShiftRows which mixes bytes horizontally. Together, they ensure changes in one byte affect many bytes.

### 4. Add Round Key

- **XOR with Key:** The state is XORed with the round key (derived from the main key).
- **Operation:** Simple bitwise XOR between state and round key.
- **Purpose:** Introduces key material into the state.

This step is the only one that involves the secret key. Without the correct key, the transformation cannot be reversed, ensuring security.

**🤔 Quick Question:** Which transformation in AES provides non-linearity, essential for resisting cryptanalysis?
*(Answer below)*

<button onclick="revealAnswer('sboxAnswer', this)">Reveal Answer</button>
<span id="sboxAnswer" style="display: none;">
*(Answer: The SubBytes (S-Box) transformation is the only non-linear operation in AES, making it crucial for security against algebraic attacks.)*
</span>

---

<div class="page-navigation">
    <a href="ch04_structure.html" class="prev">← Previous: AES Structure Overview</a>
    <a href="ch04_key.html" class="next">Next: AES Key Schedule →</a>
</div>

<script src="../scripts/main.js"></script>