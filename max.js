// Who is get the highest marks:
const abdullah = 98;
const abdurRahman = 99;

if (abdullah > abdurRahman) {
    console.log('Abdullah is get the highest marks.');
} else {
    console.log('Abdur Rahman is get the highest marks.');
}

// inside a function:
function getMax (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const output = getMax(10, 20);
console.log('The largest number of two numbers is:', output);