function add (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract (num1, num2) {
    const subtract = num1 - num2;
    return subtract;
}
function multiply (num1, num2) {
    const multiply = num1 * num2;
    return multiply;
}
function division (num1, num2) {
    const division = num1 / num2;
    return division;
}

function calculator (n1 , n2, operation) {
    if (operation === 'add') {
        const result = add(n1, n2)
        return result;
    } else if (operation === 'subtract') {
        const result = subtract(n1, n2);
        return result;
    } else if (operation === 'multiply') {
        const result = multiply(n1, n2);
        return result;
    } else if (operation === 'division') {
        const result = division(n1, n2);
        return result;
    } else {
        return "Only 'add', 'subtraction', 'multiplication', and 'division' is allowed.";
    }
}

const output = calculator(20, 3, 'multiply');
console.log(output);