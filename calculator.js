const screen = document.getElementById("calculator-screen");
const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");
const equals = document.getElementById("equals-button");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");

let displayValue = "";
let expression = "";


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        displayValue += numbers[i].value;
        updateScreen(displayValue);

        expression += numbers[i].value;
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        displayValue = "";
        expression += operators[i].value;
    });
}

equals.addEventListener("click", () => {
    updateScreen(eval(expression));
    displayValue = "";
    expression = "";
});

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
    screen.textContent = value;
}