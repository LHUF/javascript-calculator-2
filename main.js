let calcMemory = [];
let runningInput = document.getElementById("runninginput");
const numButtons = document.getElementsByClassName("numBtn");
const addButton = document.getElementById("add");
const operatorBtns = document.querySelectorAll(".operator");
const acButton = document.getElementById("allCancel");
const delButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");
const resultDisp = document.getElementById("result");
let answer;

const populateDisplay = function() {
  const value = this.getAttribute("data-value");
  runningInput.textContent += value;
};
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", populateDisplay, false);
}

operatorBtns.forEach(function(btn) {
  btn.addEventListener("click", operatorHandler);
});

function collapseMemStack(calcMemory) {
  const workingStack = calcMemory;
  while (workingStack.length > 1) {
    firstNum = Number(calcMemory.shift());
    op = calcMemory.shift();
    secondNum = Number(calcMemory.shift());
    let answer = operate(op, firstNum, secondNum);
    workingStack.unshift(answer);
  }
  return workingStack;
}

function operatorHandler(eventObj) {
  const clickedEl = eventObj.target;
  const operator = clickedEl.textContent;
  const split = runningInput.textContent.split(/[×÷+-]/);
  calcMemory.push(split[split.length - 1]);
  calcMemory = collapseMemStack(calcMemory);
  calcMemory.push(operator);
  if (answer === undefined) {
    runningInput.textContent += operator;
    return;
  } else runningInput.textContent = +answer + operator;
}

equalsButton.addEventListener("click", equals, false);
function equals() {
  const lastInput = Number(
    runningInput.textContent[runningInput.textContent.length - 1]
  );
  if (isNaN(lastInput)) {
    runningInput.textContent = runningInput.textContent.slice(0, -1);
    resultDisp.textContent = runningInput.textContent;
  } else {
    calcMemory.push(lastInput);
    resultDisp.textContent = collapseMemStack(calcMemory);
  }
}

operate = (operation, n1, n2) => {
  switch (operation) {
    case "+":
      answer = add(n1, n2);
      break;
    case "-":
      answer = subtract(n1, n2);
      break;
    case "×":
      answer = multiply(n1, n2);
      break;
    case "÷":
      answer = divide(n1, n2);
      break;
  }
  return answer;
};

acButton.addEventListener("click", allCancel, false);
function allCancel() {
  runningInput.textContent = "";
  calcMemory = [];
  answer = undefined;
  resultDisp.textContent = "";
}

delButton.addEventListener("click", delLastChar, false);
function delLastChar() {
  let lastItem = calcMemory.pop();
  if (lastItem === "+" || "-" || "×" || "÷") {
    runningInput.textContent = runningInput.textContent.slice(0, -1);
    calcMemory.pop();
    calcMemory.pop();
  } else {
    calcMemory.push(lastItem);
    runningInput.textContent = runningInput.textContent.slice(0, -1);
  }
}

add = (n1, n2) => n1 + n2;
subtract = (n1, n2) => n1 - n2;
multiply = (n1, n2) => n1 * n2;
divide = (n1, n2) => n1 / n2;
