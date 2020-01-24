let calcMemory = [];
let runningInput = document.getElementById("runninginput");
const numButtons = document.getElementsByClassName("numBtn");
const addButton = document.getElementById("add");
const operatorBtns = document.querySelectorAll(".operator");
let answer;


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
    if(calcMemory.length > 2){
        firstNum = parseInt(calcMemory.shift());
        console.log(firstNum)
        let op = calcMemory.shift()
        if(op === "+") op = "add";
        if(op === "-") op = "subtract";
        if(op === "×") op = "multiply";
        if(op === "÷") op = "divide";
        console.log(op)
        let secondNum = parseInt(calcMemory.shift());
        console.log(secondNum)
        let answer = operate(op, firstNum, secondNum);
        console.log(parseInt(answer))
        calcMemory.unshift(answer);
    }
    
    calcMemory.push(operator);
    if(answer === undefined){
        runningInput.textContent += operator;
        return;
    } else runningInput.textContent =+ answer + operator;
  }


operate = (operation, n1, n2) => {
    switch(operation){
        case "add":
        answer = add(n1,n2);
        break;
        case "subtract":
        answer = subtract(n1, n2);
        break;
        case "multiply":
        answer = multiply(n1, n2);
        break;
        case "divide":
        answer = divide(n1, n2);
        break;
    }
    return answer;
}

 acButton = document.getElementById("allCancel");
 acButton.addEventListener("click", allCancel, false);

 function allCancel(){
 runningInput.textContent = "";
 calcMemory = [];
 answer = undefined;
 }

add = (n1,n2) =>  n1 + n2;
subtract = (n1,n2) => n1 - n2;
multiply = (n1,n2) => n1 * n2;
divide = (n1,n2) => n1 / n2;
