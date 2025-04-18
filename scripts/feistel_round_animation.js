document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('feistel-round-svg');
    if (!svg) return;

    let leftState = "L0";
    let rightState = "R0";
    let keyState = "K1";
    let step = 0;

    const leftText = document.getElementById('feistel-left');
    const rightText = document.getElementById('feistel-right');
    const fOutputText = document.getElementById('feistel-f-output');
    const keyText = document.getElementById('feistel-key');
    const tempText = document.getElementById('feistel-temp');
    const roundText = document.getElementById('feistel-round-num');

    function updateDisplay() {
        leftText.textContent = leftState;
        rightText.textContent = rightState;
        keyText.textContent = keyState;
        fOutputText.textContent = ""; // Clear intermediate steps
        tempText.textContent = "";
        roundText.textContent = `Start of Round ${step + 1}`;
    }

    function stepFeistel() {
        // 1. Calculate f(R_i, K_i)
        const fOutput = `f(${rightState}, ${keyState})`;
        fOutputText.textContent = fOutput;
        tempText.textContent = ""; // Clear previous temp

        // 2. Calculate L_i XOR f(R_i, K_i)
        setTimeout(() => {
            const newRight = `${leftState} ⊕ ${fOutput}`;
            tempText.textContent = newRight;

            // 3. Update state for next round (L_{i+1}=R_i, R_{i+1}=L_i XOR f)
            setTimeout(() => {
                step++;
                leftState = rightState; // Swap
                rightState = `R${step}`; // Represent L_i XOR f as R_{i+1}
                keyState = `K${step + 1}`;
                updateDisplay(); // Show final state for the round
            }, 1000); // Show XOR result before updating

        }, 1000); // Show f output before calculating XOR
    }

    function resetFeistel() {
        step = 0;
        leftState = "L0";
        rightState = "R0";
        keyState = "K1";
        updateDisplay();
    }

    // Add event listeners
    document.getElementById('feistel-step').addEventListener('click', stepFeistel);
    document.getElementById('feistel-reset').addEventListener('click', resetFeistel);

    // Initialize
    updateDisplay();
}); 