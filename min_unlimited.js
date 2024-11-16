const numbers = [23, 50, 53, 29, 78, 26, 44, 98, 123, 2, 4, 12];
let smallestNumber = numbers[0];

function getMin (numbers) {
    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber
}

const output = getMin(numbers);
console.log('The smallest number is',output);