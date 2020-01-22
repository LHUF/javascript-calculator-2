//global variables
let calcMemory = [];
const numButtons = document.getElementsByClassName("numBtn");
const addButton = document.getElementById("add");
let runningInput = document.getElementById("runninginput");

addButton.addEventListener("click", userAdd, false);

//populate display function
const populateDisplay = function(){
    const value = this.getAttribute("data-value");
    calcMemory.push(parseInt(value));
    runningInput.textContent += value;
}
for (var i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener('click', populateDisplay, false);
}

//addbutton
function userAdd() {
    if(calcMemory.length > 2) {
        runningInput.textContent = operate(add, calcMemory[0], calcMemory[2]);
        calcMemory = [operate(add, calcMemory[0], calcMemory[2])];
    }
    calcMemory.push("+")
    runningInput.textContent += "+";
}

//operation selection function
operate = (operation, n1, n2) => {
    switch(operation){
        case add:
        result = add(n1,n2);
        break;
        case subtract:
        result = subtract(n1, n2);
        break;
        case multiply:
        result = multiply(n1, n2);
        break;
        case divide:
        result = divide(n1, n2);
        break;
    }
    return result;
}

//basic operation functions
add = (n1,n2) =>  n1 + n2;
subtract = (n1,n2) => n1 - n2;
multiply = (n1,n2) => n1 * n2;
divide = (n1,n2) => n1 / n2;
