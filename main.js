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
