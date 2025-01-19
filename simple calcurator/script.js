let currentInput = '';

function append(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    document.getElementById('display').value = currentInput;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}