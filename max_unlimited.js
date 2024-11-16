const numbers = [23, 50, 53, 29, 78, 26, 44, 98, 123];
let largestNumber = numbers[0];

function getMax (numbers) {
    for (const number of numbers) {
        if (number > largestNumber) {
            largestNumber = number;
        }
    }
    return largestNumber
}

const output = getMax(numbers);
console.log('The largest number is',output);