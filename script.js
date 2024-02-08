function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    return Number(x) / Number(y);
}

function operate(x, y, operator) {
    if (operator == "+") return add(x,y);
    if (operator == "-") return subtract(x,y);
    if (operator == "*") return multiply(x,y);
    if (operator == "/") return divide(x,y);
}

const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const result = document.querySelector(".result");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

let number = null;
let input = [];
let results = null;

numbers.addEventListener("click", function(e) {
    number == null ? number = e.target.textContent : 
    number += e.target.textContent;
    result.textContent = number;
})

operators.addEventListener("click", function(e) {
    
        console.log(input);

        input.push(number);
        let operatore = e.target.textContent;
        console.log(operatore);
        input.push(operatore);    
        
        if (input.length >= 3) {
            results = operate(input[0], input[2], input[1]);
            input[0] = results;
            input[1] = operatore;
            input.pop();
            input.pop();
        }   
        number = null;

        if (results != null) result.textContent = results;

 })

 equals.addEventListener("click", function() {
    input.push(number);
    results = operate(input[0], input[2], input[1]);
    result.textContent = results;
    input[0] = results;
    input.pop();
    input.pop();
    console.log(input);
 })

clear.addEventListener("click", function() {
    number = null;
    input = [];
    results = null;
    result.textContent = "";
})