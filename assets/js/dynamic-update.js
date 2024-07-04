document.getElementById('userInput').addEventListener('input', function() {
    const enteredText = this.value;
    document.getElementById('displayText').textContent = enteredText;
});
