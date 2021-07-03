const screen = document.getElementById("calculator-screen");
const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");

let displayValue = "";

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        displayValue += numbers[i].value;
        updateScreen(displayValue);
    });
}

clearButton.addEventListener("click", () => {
    // Erase the input
    displayValue = "";
    updateScreen(displayValue);
});

deleteButton.addEventListener("click", () => {
    const lastDigit = displayValue.length - 1;
    // Remove the last digit of the number
    displayValue = displayValue.slice(0, lastDigit);
    updateScreen(displayValue);
});

// Displays the operands on the screen
function updateScreen(value) {
    if (value == "") {
        screen.textContent = 0;
    } else {
        screen.textContent = value;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "×":
            multiply(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
    }
}