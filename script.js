const display = document.querySelector('#display');

let currentValue = "";
let currentOperator;
let previousValue = "";
let erasePreviousValue = false;


function populateDisplay (currentValue){
    if (display.textContent == "0" || display.textContent == 0)
        display.textContent = " ";
    display.textContent = currentValue;
}

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener("click", n => {
        if (erasePreviousValue == true) {
            erasePreviousValue = false;
            currentValue = "";
            clearDisplay();
        }
        let digit = (n.target.textContent);
        currentValue += digit;
        console.log(currentValue)
        populateDisplay(currentValue);
        });
});


const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener("click", o => {
        currentOperator = o.target.textContent;
        if (previousValue == "") {
            previousValue = currentValue;
        }
        erasePreviousValue = true;
    });
});

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function divide(a, b){
    return a / b;
};

function multiply(a, b){
    return a * b;
};

function clearDisplay(){
    display.textContent = " ";
    populateDisplay(0);
}

function operate(){
    let total;
    switch (currentOperator) {
        case '+':
            total = add(previousValue, currentValue);
        case '-':
            total = subtract(previousValue, currentValue);
        case '/':
            total = divide(previousValue, currentValue);                    
        case '*':
            total = multiply(previousValue, currentValue);
     };
     previousValue = total;
     clearDisplay();
     populateDisplay(total);
};