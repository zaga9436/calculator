const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const clearButton = document.querySelector('[data-value="clear"]');
const equalsButton = document.querySelector('[data-value="equals"]');


let currentInput = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        currentInput += value;
        if (operator) {
            display.value = firstValue + ' ' + operator + ' ' + currentInput;
        } else {
            display.value = currentInput;
        }

    });
});

let firstValue = '';
let operator = null;

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        firstValue = currentInput;
        operator = value;
        currentInput = '';
        display.value = firstValue + ' ' + operator;
    })
})

equalsButton.addEventListener('click', () => {
    const secondValue = currentInput;

    if (firstValue && operator && secondValue) {
        let result;
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);

        if (operator === '+'){
            result = num1 + num2;
        } else if (operator === '-'){
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else {
            result = num1 / num2;
        }
        display.value = result;
        firstValue = '';
        operator = '';
        currentInput = result.toString();
    }
})

clearButton.addEventListener('click', () => {
    currentInput = '';
    firstValue = '';
    operator = '';
    display.value = '';
})