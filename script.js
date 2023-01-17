const display = document.querySelector('#display');

function populateDisplay (digit){
    if (display.textContent == "0")
        display.textContent = " ";
    display.textContent += digit;
}

window.onload = function() {
    const elements = document.getElementsByClassName('numbers');
    
    for (const element of elements) {
        element.addEventListener("click", e => {
            populateDisplay(e.target.textContent);
        })
    }
}

function add(a, b){
    populateDisplay("+");
};

function subtract(a, b){
    populateDisplay(a - b);
};

function divide(a, b){
    populateDisplay(a / b);
};

function multiply(a, b){
    populateDisplay(a * b);
};

function clearDisplay(){
    display.textContent = " ";
    populateDisplay(0);
}

function operate(operator, a, b){
    switch (operator) {
        case 1:
            add(a, b);
        case 2:
            subtract(a, b);
        case 3:
            divide(a, b);                    
        case 4:
            multiply(a, b);
     };
};