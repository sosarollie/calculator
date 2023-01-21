const display = document.querySelector('#display');

let currentValue = "";
let currentOperator;
let nextOperator;
let previousValue = "";
let eraseCurrentValue = false;


function populateDisplay (currentValue){
    if (display.textContent == "0" || display.textContent == 0)
        display.textContent = " ";
    display.textContent = currentValue;
}

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener("click", n => {
        if (eraseCurrentValue == true) {
            eraseCurrentValue = false;
            currentValue = "";
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
        if (previousValue != "" && currentValue != ""){
            operate();
        }
        currentOperator = o.target.textContent;
        eraseCurrentValue = true;
        if (previousValue == "") {
            previousValue = currentValue;
        };
    });
});

function add(a, b){
    return Number(a) + Number(b);
};

function subtract(a, b){
    return Number(a) - Number(b);
};

function divide(a, b){
    return Number(a) / Number(b);
};

function multiply(a, b){
    return Number(a) * Number(b);
};

function clearDisplay(){
    display.textContent = " ";
    currentValue = "";
    previousValue = "";
    populateDisplay(0);
}

const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    if (previousValue != "" && currentValue != ""){
        operate();
    }
});

function operate(){
    let total;
    console.log(currentOperator);
    switch (currentOperator) {
        case '+':
            total = add(previousValue, currentValue);
            break
        case '-':
            total = subtract(previousValue, currentValue);
            break
        case '/':
            total = divide(previousValue, currentValue);
            break                    
        case '*':
            total = multiply(previousValue, currentValue);
            break
     };
     console.log(total);
     console.log(typeof total);
     currentValue = "";
     previousValue = total;
     populateDisplay(total);
};