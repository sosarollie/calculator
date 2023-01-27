const display = document.querySelector('#display');

let currentValue = "";
let currentOperator;
let previousValue = "";
let eraseCurrentValue = false;

const deleteBtn = document.querySelector('#delete');

deleteBtn.addEventListener("click", () => {
    if (currentValue.length == 0 || currentValue.length == 1){
        clearDisplay();
    }else if (currentValue != "0") {
        currentValue = currentValue.slice(0, -1);
        populateDisplay(currentValue);
    }
});

const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    if (previousValue != "" && currentValue != ""){
        operate();
    }
});

const dot = document.querySelector('#dot');

dot.addEventListener("click", () => {
    currentValue += '.';
    populateDisplay(currentValue);
    dot.disabled = true;
});

function populateDisplay (currentValue){
    if (display.textContent == "0" || display.textContent == 0)
        display.textContent = " ";
    display.textContent = currentValue;
}

const numbers = document.querySelectorAll('.number');

function addNumber(n){
    if (eraseCurrentValue == true) {
        eraseCurrentValue = false;
        currentValue = "";
    }
    let digit = (n);
    currentValue += digit;
    populateDisplay(currentValue);
}

numbers.forEach(number => {
    number.addEventListener("click", n => {
        addNumber(n.target.textContent);
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
        dot.disabled = false;
    });
});

function add(a, b){
    return Number(a) + Number(b);
};

function subtract(a, b){
    return Number(a) - Number(b);
};

function divide(a, b){
    if (b == "0") {
        clearDisplay();
        return display.textContent = 'Error! Cannot divide by 0';
    }
    return Number(a) / Number(b);
};

function multiply(a, b){
    return Number(a) * Number(b);
};

function mod(a, b){
    return Number(a) % Number(b);
};

function clearDisplay(){
    display.textContent = " ";
    currentValue = "";
    previousValue = "";
    dot.disabled = false;
    populateDisplay("0");
}

function operate(){
    let total;
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
        case '%':
            total = mod(previousValue, currentValue);
            break    
     };
     total = Math.round((total + Number.EPSILON) * 100) / 100;
     if (total > 1000000) {
        total.toExponential(10);
     };
     dot.disabled = false;
     currentValue = "";
     previousValue = total;
     populateDisplay(total);
};

window.addEventListener('keydown', e =>{
    addNumber(e.key);
});