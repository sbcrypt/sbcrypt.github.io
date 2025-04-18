document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('f-function-svg');
    if (!svg) return;

    let step = 0;
    const steps = ['start', 'expansion', 'key_xor', 's_boxes', 'p_box', 'finished'];
    const descriptions = [
        'Start: R_i (32 bits) and K_i (48 bits) enter.',
        '1. Expansion (E): R_i expanded to 48 bits.',
        '2. Key XOR: Expanded R_i is XORed with K_i.',
        '3. S-Boxes: Resulting 48 bits go through 8 S-Boxes (6-to-4 bits each).',
        '4. P-Box: The 32-bit S-Box output is permuted.',
        'Finished: Output f(R_i, K_i) (32 bits) is ready.'
    ];

    // Get references to elements (assuming IDs are set in the SVG)
    const inputRText = document.getElementById('f-input-r');
    const inputKText = document.getElementById('f-input-k');
    const expansionOutputText = document.getElementById('f-expansion-output');
    const xorOutputText = document.getElementById('f-xor-output');
    const sboxOutputText = document.getElementById('f-sbox-output');
    const pboxOutputText = document.getElementById('f-pbox-output');
    const statusText = document.getElementById('f-status');

    // References to the visual boxes/areas to highlight
    const eBox = document.getElementById('f-box-e');
    const xorArea = document.getElementById('f-xor-area'); // Group or path
    const sBox = document.getElementById('f-box-s');
    const pBox = document.getElementById('f-box-p');

    function clearHighlights() {
        [eBox, xorArea, sBox, pBox].forEach(el => el?.classList.remove('highlight'));
        [expansionOutputText, xorOutputText, sboxOutputText, pboxOutputText].forEach(el => { if(el) el.textContent = ''; });
    }

    function updateDisplay() {
        clearHighlights();
        statusText.textContent = descriptions[step];
        inputRText.textContent = 'R_i (32b)';
        inputKText.textContent = 'K_i (48b)';

        switch (steps[step]) {
            case 'expansion':
                eBox.classList.add('highlight');
                expansionOutputText.textContent = 'E(R_i) (48b)';
                break;
            case 'key_xor':
                eBox.classList.add('highlight'); // Keep E output visible
                 expansionOutputText.textContent = 'E(R_i) (48b)';
                xorArea.classList.add('highlight');
                xorOutputText.textContent = 'XOR Res (48b)';
                break;
            case 's_boxes':
                 xorArea.classList.add('highlight'); // Keep XOR output visible
                 xorOutputText.textContent = 'XOR Res (48b)';
                sBox.classList.add('highlight');
                sboxOutputText.textContent = 'S-Out (32b)';
                break;
            case 'p_box':
                sBox.classList.add('highlight'); // Keep S output visible
                 sboxOutputText.textContent = 'S-Out (32b)';
                pBox.classList.add('highlight');
                pboxOutputText.textContent = 'P-Out (32b)';
                break;
            case 'finished':
                pBox.classList.add('highlight'); // Keep P output visible
                pboxOutputText.textContent = 'f(R_i,K_i) (32b)';
                break;
        }
    }

    function stepFunction() {
        step++;
        if (step >= steps.length) {
            step = steps.length - 1; // Stay on finished step
        }
        updateDisplay();
    }

    function resetFunction() {
        step = 0;
        updateDisplay();
    }

    // Add event listeners
    document.getElementById('f-step').addEventListener('click', stepFunction);
    document.getElementById('f-reset').addEventListener('click', resetFunction);

    // Initialize
    resetFunction();
}); 