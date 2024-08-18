const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator")
const display = document.querySelector(".output");
const buttons = document.querySelectorAll("button")

var number1;
var operator;
var number2;
var calcArray = [];

function calculate(){

    var num = '';

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            
            if(button.className == 'num'){
                num += parseInt(button.innerHTML);
                display.innerHTML = num;
            };

            if(button.className == 'operator'){
                display.innerHTML = '';
                initArray(num, button.innerHTML);
                num = '';
            };

            if(calcArray.length >= 3){
                let result = operate(calcArray[0],
                                    calcArray[1],
                                    calcArray[2]);

                display.innerHTML = result;
                console.log(calcArray);
                calcArray.splice(0,3);
                calcArray.unshift(result);
                console.log(calcArray);
            };

            console.log(calcArray);
        });
    });
};

function initArray(...args){
    calcArray.push(...args);
}

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return (a / b).toFixed(5);
};

function operate(v1, operator, v2){

    let num1 = parseInt(v1);
    let num2 = parseInt(v2);

    if(operator === "+"){
        return add(num1, num2);
    }else if(operator === "-"){
        return subtract(num1, num2);
    }else if(operator === "x"){
        return multiply(num1, num2)
    }else if(operator === "/"){
        return divide(num1, num2)
    }else{
        return null
    }
};

calculate()