document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('lfsr-svg');
    if (!svg) return; // Exit if SVG element isn't found

    const state = [1, 0, 0]; // Initial state [s_i+2, s_i+1, s_i]
    const boxWidth = 50;
    const boxHeight = 50;
    const spacing = 20;
    const startX = 50;
    const startY = 50;

    // Get references to SVG text elements (assuming they have IDs like 'bit0', 'bit1', 'bit2')
    const bitElements = [
        document.getElementById('bit2'), // s_i+2
        document.getElementById('bit1'), // s_i+1
        document.getElementById('bit0')  // s_i
    ];
    const outputBitText = document.getElementById('output-bit');
    const feedbackBitText = document.getElementById('feedback-bit');
    let intervalId = null;

    function updateDisplay() {
        bitElements[0].textContent = state[0];
        bitElements[1].textContent = state[1];
        bitElements[2].textContent = state[2];
        // Clear previous step indicators
        outputBitText.textContent = "";
        feedbackBitText.textContent = "";
    }

    function stepLfsr() {
        const outputBit = state[2];
        // Correct calculation based on s_{i+3} = s_{i+1} XOR s_i
        const feedbackBit = state[1] ^ state[2]; 

        // Show intermediate values with correct indices displayed
        outputBitText.textContent = `Output (s_i): ${outputBit}`;
        feedbackBitText.textContent = `Feedback (s_i+1 ⊕ s_i): ${state[1]} ⊕ ${state[2]} = ${feedbackBit}`;

        // Update state for the *next* cycle
        state[2] = state[1];
        state[1] = state[0];
        state[0] = feedbackBit;

        // Update display after a short delay to show intermediate step
        setTimeout(() => {
             bitElements[0].textContent = state[0];
             bitElements[1].textContent = state[1];
             bitElements[2].textContent = state[2];
             // Optionally clear intermediate text or keep it until next step
        }, 500); // Delay to see intermediate calculation
    }

    function resetLfsr() {
        stopLfsr();
        state[0] = 1; // Reset to initial state 100
        state[1] = 0;
        state[2] = 0;
        updateDisplay();
        outputBitText.textContent = "";
        feedbackBitText.textContent = "";
    }

    function runLfsr() {
       stopLfsr(); // Stop any previous run
       stepLfsr(); // Run first step immediately
       intervalId = setInterval(stepLfsr, 1500); // Step every 1.5 seconds
    }

    function stopLfsr() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Add event listeners to buttons
    document.getElementById('lfsr-step').addEventListener('click', stepLfsr);
    document.getElementById('lfsr-run').addEventListener('click', runLfsr);
    document.getElementById('lfsr-reset').addEventListener('click', resetLfsr);
    document.getElementById('lfsr-stop').addEventListener('click', stopLfsr);

    // Initialize display
    updateDisplay();
}); 