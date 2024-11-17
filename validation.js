function multiply (n1, n2) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number') {
        return 'Pleas provide a Number!';
    }
    const mult = n1 * n2;
    return mult;
}

// const output = multiply ('5', 10);
// console.log(output);


// <---------------------------------->

function fullName (firstName, lastName) {
    if (typeof firstName !== 'string') {
        return 'First name should be string!';
    } else if (typeof lastName !== 'string') {
        return 'Last name should be string!';
    }
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const firstName = 'Muhammad';
const lastName = 'Masud-ul-Alam';

// const output = fullName(firstName);
// console.log('Full Name:', output);


// <---------------------------------->



function getPrice (product) {
    if (typeof product !== 'object') {
        return 'Please provide an object.'
    }
    const price = product.price;
    return price;
}


const product = {name: 'Olive oil', brand: 'Ambassador', weight: '150 gm', price: 475};
// const output = getPrice(product);
// console.log(output);


// <---------------------------------->



function getSecond (numbers) {
    if(Array.isArray(numbers) === false) {
        return 'Please provide an array.'
    };
    const second = numbers[1];
    return second;
}

const numbers = [1, 1, 2, 3, 4, 5];
const output = getSecond(numbers);
console.log(output);