## Lesson 4.5: AES Key Expansion - Creating Round Keys

AES needs multiple round keys derived from the original key. This process is called **Key Expansion** or the **Key Schedule**.

### Key Expansion Process

AES turns your 128/192/256-bit key into **round keys** for each round:

- **128-bit key:** Expands to eleven 128-bit round keys (1 initial + 10 rounds)
- **192-bit key:** Expands to thirteen 128-bit round keys (1 initial + 12 rounds)
- **256-bit key:** Expands to fifteen 128-bit round keys (1 initial + 14 rounds)

### How Key Expansion Works

For a 128-bit key (as an example):

1. **Initial Round Key:** The original key becomes the first round key
2. **Subsequent Keys:** Each new 128-bit round key is derived from the previous round key through several steps:
   
   a. **RotWord:** Take the last 4 bytes of the previous round key and rotate them
   b. **SubWord:** Apply the S-box substitution to each byte
   c. **Rcon:** XOR the first byte with a round constant (different for each round)
   d. **XOR Operations:** The result is XORed with earlier parts of the key schedule

### Round Constants (Rcon)

The round constants help ensure each round key is unique:

- Rcon[1] = 0x01, Rcon[2] = 0x02, Rcon[3] = 0x04, ...
- Each value is the previous one multiplied by 2 in GF(2⁸)

### Security Benefits

- **Avalanche Effect:** A small change in the key produces completely different round keys
- **No Weak Keys:** Unlike DES, AES has no known weak keys
- **One-Way Function:** Key schedule is designed so that knowing one round key doesn't reveal the main key

**💡 Pro Tip:** Never reuse keys! Each round key is unique, so even if one leaks, others stay safe.

**🤔 Quick Question:** If using AES-128, how many 128-bit round keys are generated from the original key?
*(Answer below)*

<button onclick="revealAnswer('keyCountAnswer', this)">Reveal Answer</button>
<span id="keyCountAnswer" style="display: none;">
*(Answer: Eleven 128-bit round keys - one for the initial AddRoundKey operation plus one for each of the 10 rounds.)*
</span>

---

<div class="page-navigation">
    <a href="ch04_round.html" class="prev">← Previous: Inside an AES Round</a>
    <a href="ch04_security.html" class="next">Next: AES Security Analysis →</a>
</div>

<script src="../scripts/main.js"></script>