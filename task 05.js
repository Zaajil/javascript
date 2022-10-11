let number = 0;
const num = document.getElementById("display");

function increase()
{
    number = number + 1;
    num.innerHTML = number
}

function decrease()
{
    number = number - 1;
    num.innerHTML = number
}

function reset()
{
    
    num.innerHTML =0;
}