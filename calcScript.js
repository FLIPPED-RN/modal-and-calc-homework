document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.show__nums h2');
    const nums = document.querySelectorAll('.nums');
    const equalButton = document.getElementById('num__equally');
    const clearButton = document.querySelector('.clear');
    let currentNumber = '';
    let firstOperand = null;
    let currentOperation = null;

    const inputDigit = digit => {
        currentNumber += digit;
        updateDisplay(currentNumber);
    };

    const handleOperation = operation => {
        const inputValue = parseFloat(currentNumber);
        if (isNaN(inputValue)) return;
        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (currentOperation) {
            performOperation();
        }
        currentOperation = operation;
        if (operation === '/' && currentNumber === '') {
            currentNumber = '0';
            updateDisplay('0');
            return;
        }
        currentNumber = '';
        updateDisplay('0');
    };

    const performOperation = () => {
        const inputValue = parseFloat(currentNumber);
        if (isNaN(inputValue)) return;
        switch (currentOperation) {
            case '+': firstOperand += inputValue; break;
            case '-': firstOperand -= inputValue; break;
            case '*': firstOperand *= inputValue; break;
            case '/':
                if (inputValue === 0) {
                    updateDisplay('Error');
                    clearCalculator();
                    return;
                }
                firstOperand /= inputValue;
                break;
            default: return;
        }
        if (firstOperand !== '=') {
            updateDisplay(firstOperand);
        }
        currentNumber = '0';
        currentOperation = null;
    };

    const clearCalculator = () => {
        currentNumber = '';
        firstOperand = null;
        currentOperation = null;
        updateDisplay('0');
    };

    nums.forEach(button => {
        button.addEventListener('click', () => inputDigit(button.textContent));
    });

    document.getElementById('num__add').addEventListener('click', () => handleOperation('+'));
    document.getElementById('num__minus').addEventListener('click', () => handleOperation('-'));
    document.getElementById('num__multiply').addEventListener('click', () => handleOperation('*'));
    document.getElementById('num__divide').addEventListener('click', () => {
        if (currentNumber !== '' && currentOperation !== '/') {
            handleOperation('/');
        }
    });
    equalButton.addEventListener('click', () => {
        if (currentOperation !== null) {
            performOperation();
            currentOperation = null;
        }
    });
    clearButton.addEventListener('click', () => {
        clearCalculator();
    });

    const updateDisplay = value => display.textContent = value;
});