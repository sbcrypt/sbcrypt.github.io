---
layout: default
---

{% include mathjax_include.html %}

## Lesson 4.2: AES's Secret Sauce - Galois Fields

### Understanding Galois Fields - The Friendly Introduction

Don't worry if Galois Fields sound intimidating - they're actually a clever way to do math with bytes! Let's break this down step by step.

#### What is a Field?

A **field** is just a set of elements where you can:
- Add and subtract elements
- Multiply and divide elements (except by zero)
- And these operations behave in ways you'd expect (like addition is commutative)

Examples of fields you already know: real numbers, rational numbers, etc.

#### What makes Galois Fields special?

A **Galois Field** (named after mathematician Évariste Galois) is a field with a *finite* number of elements. 

**GF(2⁸)** means a Galois Field with 2⁸ = 256 elements. That's perfect for AES because:
- A byte has 256 possible values (0-255)
- We can represent each field element as one byte
- We can define operations that always produce another byte

### Thinking About Bytes as Polynomials

Here's the clever part: we can think of each byte as a polynomial with coefficients that are either 0 or 1.

Let's see how this works with a byte like `0xB3` (10110011 in binary):

```
Bit positions:   7 6 5 4 3 2 1 0
Binary:          1 0 1 1 0 0 1 1
```

We interpret this as the polynomial:
$1·x^7 + 0·x^6 + 1·x^5 + 1·x^4 + 0·x^3 + 0·x^2 + 1·x^1 + 1·x^0$

Which simplifies to:
$x^7 + x^5 + x^4 + x + 1$

### Addition in GF(2⁸): Just Use XOR!

Adding two polynomials in GF(2⁸) is super easy:
- Just XOR the two bytes together
- It's that simple!

**Example:**
```
  0x53 (01010011) → x^6 + x^4 + x + 1
+ 0xCA (11001010) → x^7 + x^6 + x^3 + x
= 0x99 (10011001) → x^7 + x^4 + x^3 + 1
```

Notice how 1+1=0 in this system (which is what XOR does).

### Multiplication: A Bit Trickier

Multiplication has two steps:
1. Multiply the polynomials (like you learned in algebra)
2. Take the remainder when divided by a special polynomial

This special "modulus" polynomial for AES is:
$m(x) = x^8 + x^4 + x^3 + x + 1$

It's like doing a clock arithmetic, ensuring our result always stays within our 8-bit space.

#### Simplified Example of Multiplication:

Let's multiply `0x02` (00000010 or just $x$) by `0x03` (00000011 or $x + 1$):

1. Multiply the polynomials:
   $x · (x + 1) = x^2 + x$

2. Since the degree is less than 8, no reduction needed.
   Result: $x^2 + x$ = 00000110 = `0x06`

#### More Complex Example:

Let's multiply `0x57` (01010111 or $x^6 + x^4 + x^2 + x + 1$) by `0x13` (00010011 or $x^4 + x + 1$):

1. Multiply:
   $(x^6 + x^4 + x^2 + x + 1)(x^4 + x + 1)$
   
   This expands to a polynomial with terms up to $x^{10}$

2. Reduce modulo $m(x)$
   
   After reduction, we get `0xFE` (11111110 or $x^7 + x^6 + x^5 + x^4 + x^3 + x^2 + x$)

### Why Use Galois Fields in AES?

1. **Perfect for Bytes**: Operations always produce another valid byte
2. **Efficient Implementation**: XOR for addition is very fast in hardware and software
3. **Non-Linearity**: Multiplication provides the non-linear properties needed for security
4. **Mathematical Structure**: The algebraic properties help prove security properties

### Practical Applications in AES

In AES, Galois Fields are used in:

1. **MixColumns**: Each column is multiplied by a fixed matrix using GF(2⁸) operations
2. **Key Schedule**: Used in generating round keys
3. **S-box Construction**: The substitution box uses the multiplicative inverse in GF(2⁸)

#### Visual Example: The MixColumns Step

Here's how MixColumns transforms a column of bytes using Galois Field multiplication:

```
┌───┐     ┌──┬──┬──┬──┐     ┌───┐
│ a │     │02│03│01│01│     │ w │
│ b │  ×  │01│02│03│01│  =  │ x │
│ c │     │01│01│02│03│     │ y │
│ d │     │03│01│01│02│     │ z │
└───┘     └──┴──┴──┴──┘     └───┘
```

Where:
w = (0x02·a) ⊕ (0x03·b) ⊕ c ⊕ d
x = a ⊕ (0x02·b) ⊕ (0x03·c) ⊕ d
y = a ⊕ b ⊕ (0x02·c) ⊕ (0x03·d)
z = (0x03·a) ⊕ b ⊕ c ⊕ (0x02·d)

These multiplications are all in GF(2⁸) and provide strong diffusion properties.

### The Good News

**You don't need to calculate GF(2⁸) operations by hand!** 

AES implementations typically use pre-computed lookup tables for multiplication. So while understanding the concept is valuable, the mathematical heavy lifting is usually done for you.

**🤔 Quick Question:** Why do we use XOR for addition in Galois Fields instead of regular addition?

<button onclick="revealAnswer('gfAddAnswer', this)">Reveal Answer</button>
<span id="gfAddAnswer" style="display: none;">
*(Answer: In GF(2), coefficients must be either 0 or 1. Regular addition would give 1+1=2, which isn't in our field. With XOR, 1+1=0, keeping all results within the field.)*
</span>

---

<div class="page-navigation">
    <a href="ch04_intro.html" class="prev">← Previous: Introduction to AES</a>
    <a href="ch04_structure.html" class="next">Next: AES Structure Overview →</a>
</div>

<script src="../scripts/main.js"></script>