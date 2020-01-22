//global variables
const numButtons = document.getElementsByClassName("numBtn");
let runningInput = document.getElementById("runninginput");

//populate display function
const populateDisplay = function(){
    const value = this.getAttribute("data-value");
    runningInput.textContent += value;
}
for (var i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener('click', populateDisplay, false);
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
