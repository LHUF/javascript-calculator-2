let calcMemory = [];
let runningInput = document.getElementById("runninginput");
const numButtons = document.getElementsByClassName("numBtn");
const addButton = document.getElementById("add");
const operatorBtns = document.querySelectorAll(".operator");


const populateDisplay = function(){
    const value = this.getAttribute("data-value");
    runningInput.textContent += value;
}
for (var i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener('click', populateDisplay, false);
}


operatorBtns.forEach(function(btn){
    btn.addEventListener("click", operatorHandler);
  });

function operatorHandler(eventObj){
    const clickedEl = eventObj.target;
    const operator = clickedEl.textContent;
    const split = runningInput.textContent.split(/[×÷+-]/);
    calcMemory.push((split[split.length -1]));
    calcMemory.push(operator);
    runningInput.textContent += operator;
  }



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

add = (n1,n2) =>  n1 + n2;
subtract = (n1,n2) => n1 - n2;
multiply = (n1,n2) => n1 * n2;
divide = (n1,n2) => n1 / n2;
