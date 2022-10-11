const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");

const result = document.getElementById("result");

const sum = () =>{
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    result.innerHTML = num1+num2;
}

const difference = () =>{
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    result.innerHTML = num1-num2;
}

const multiply = () =>{
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    result.innerHTML = num1*num2;
}

const division = () =>{
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    result.innerHTML = num1/num2;
}