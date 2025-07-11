const inputs = document.querySelectorAll('.digit');
const submitLink = document.getElementById('submitLink');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
        validateInputs();
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

function validateInputs() {
    const value = Array.from(inputs).map(input => input.value).join('');
    if (value === '2025') {
        submitLink.classList.remove('disabled');
        submitLink.setAttribute('aria-disabled', 'false');
        submitLink.href = 'second.html'; // Set to a valid URL or action if needed
    } else {
        submitLink.classList.add('disabled');
        submitLink.setAttribute('aria-disabled', 'true');
        submitLink.href = '#'; // Keep it as a placeholder
    }
}
