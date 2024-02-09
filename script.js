function add(x, y) {
    return Math.round(((Number(x) + Number(y)) + Number.EPSILON) * 100) / 100;
}

function subtract(x, y) {
    return Math.round(((Number(x) - Number(y)) + Number.EPSILON) * 100) / 100;
}

function multiply(x, y) {
    return Math.round(((Number(x) * Number(y)) + Number.EPSILON) * 100) / 100;
}

function divide(x, y) {
    if (y == 0) return "ERROR ZERO";
    return Math.round(((Number(x) / Number(y)) + Number.EPSILON) * 100) / 100;
}

function operate(x, y, operator) {
    if (operator == "+") return add(x,y);
    if (operator == "-") return subtract(x,y);
    if (operator == "*") return multiply(x,y);
    if (operator == "/") return divide(x,y);
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelector(".operators");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const float = document.querySelector(".float");
const del = document.querySelector(".del");

let number = null;
let input = [];
let result = null;

const numbersArr = Array.from(numbers);

numbers.forEach((element) => element.addEventListener("click", function(e) {
    number == null ? number = e.target.textContent : 
    number += e.target.textContent;
    display.textContent = number;
}))


operators.addEventListener("click", function(e) {

    if (input.length == 0 || input.length == 2) {
        input.push(number);
        number = null;
    }
    let operator = e.target.textContent;
    if (input.length == 1) input.push(operator);

    if (input.length == 3) {
        result = operate(input[0], input[2], input[1]);
        display.textContent = result;
        input = [];
        input[0] = result;
        input[1] = operator;
    }   
    if (result == "ERROR ZERO") {
        number = null;
        input = [];
        result = null;
    }
    float.disabled = false;
 })


 equals.addEventListener("click", function() {
    if (input.length == 1) {
        display.textContent = input[0];
    }
    if (input.length == 0 || input.length == 2) {
        input.push(number);
        number = null;
    }
    if (input.length == 3) {
        result = operate(input[0], input[2], input[1]);
        display.textContent = result;
        input = [];
        input[0] = result; 
    }
    if (result == "ERROR ZERO") {
        number = null;
        input = [];
        result = null;
    }
    float.disabled = false;
 })

clear.addEventListener("click", function() {
    number = null;
    input = [];
    result = null;
    display.textContent = "0";
    float.disabled = false;
})

float.addEventListener("click", function(e) {
    if (number != null) {
        number += e.target.textContent;
        display.textContent = number;
        float.disabled = true;
    }
})

del.addEventListener("click", function() {
    if (number != null) {
        number = number.substring(0, number.length - 1);
        display.textContent = number;
    }
})