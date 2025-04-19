## Mini-Puzzle: Substitution Cipher Challenge

Oscar intercepted this message:

```
SPP YKU SKKN
```

Here's what we know:

*   It was encrypted with a monoalphabetic substitution cipher.
*   Frequency analysis shows the most common letter in the ciphertext is **K**.
*   It's a 3-word phrase in English.

**Hint:** Try matching based on common letter patterns and positions.
(Think about short common words and letter repetition.)

🕵️‍♀️ **Your mission:**
Can you decrypt the message?

<div>
  <label for="solutionInput">Your Answer:</label>
  <input type="text" id="solutionInput" name="solutionInput" size="20">
  <button onclick="checkSolution()">Check Answer</button>
  <p id="feedback" style="margin-top: 10px; font-weight: bold;"></p>
</div>

<div class="page-navigation">
    <a href="ch01_lesson1.2.html" class="prev">← Previous: Symmetric Ciphers & Substitution</a>
    <a href="ch01_lesson1.2_solution.html" class="next">Next: Puzzle Solution →</a>
</div>

<script src="../scripts/main.js"></script>

---

[Ready for the solution?](ch01_lesson1.2_solution.html) <!-- Link to the solution page -->

[Back to Lesson 1.2](ch01_lesson1.2.html)

<script>
function checkSolution() {
  const userAnswer = document.getElementById('solutionInput').value;
  const feedbackElement = document.getElementById('feedback');
  const correctAnswer = 'SEE YOU SOON';

  // Normalize answers (uppercase, trim whitespace)
  const normalizedUserAnswer = userAnswer.trim().toUpperCase();
  const normalizedCorrectAnswer = correctAnswer.trim().toUpperCase();

  if (normalizedUserAnswer === normalizedCorrectAnswer) {
    feedbackElement.textContent = 'Correct! 🎉';
    feedbackElement.style.color = 'green';
  } else {
    feedbackElement.textContent = 'Not quite, try again!';
    feedbackElement.style.color = 'red';
  }
}
</script>