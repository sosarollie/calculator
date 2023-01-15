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