function revealAnswer(answerId, buttonElement) {
  const answerElement = document.getElementById(answerId);
  if (answerElement) {
    if (answerElement.style.display === 'none') {
      answerElement.style.display = 'inline'; // Or 'block' if needed
      buttonElement.textContent = 'Hide Answer';
    } else {
      answerElement.style.display = 'none';
      buttonElement.textContent = 'Reveal Answer';
    }
  }
} 