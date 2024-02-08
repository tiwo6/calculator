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
    return Math.round(((Number(x) / Number(y)) + Number.EPSILON) * 100) / 100;
}

function operate(x, y, operator) {
    if (operator == "+") return add(x,y);
    if (operator == "-") return subtract(x,y);
    if (operator == "*") return multiply(x,y);
    if (operator == "/") return divide(x,y);
}

const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

let number = null;
let input = [];
let result = null;

numbers.addEventListener("click", function(e) {
    number == null ? number = e.target.textContent : 
    number += e.target.textContent;
    display.textContent = number;
})

operators.addEventListener("click", function(e) {
    if (number != null) {
        input.push(number);
        number = null;
    }
    let operator = e.target.textContent;
    input.push(operator);    
        
    if (input.length >= 3) {
        result = operate(input[0], input[2], input[1]);
        input[0] = result;
        input[1] = operator;
        input.pop();
        input.pop();
    }   

    if (result != null) result.textContent = result;
    console.log(input);
 })

 equals.addEventListener("click", function() {
    if (input.length == 1) {
        display.textContent = input[0];
    }
    else {
        input.push(number);
        result = operate(input[0], input[2], input[1]);
        display.textContent = result;
        input[0] = result;
        input.pop();
        input.pop();
        number = null;   
    }

 })

clear.addEventListener("click", function() {
    number = null;
    input = [];
    result = null;
    display.textContent = "";
})