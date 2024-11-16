const abdullah = 97;
const abdurRahman = 99;
const abdurRaheem = 98;

if (abdullah > abdurRahman && abdullah > abdurRaheem) {
    console.log('Abdullah get the highest marks.');
} else if (abdurRahman > abdullah && abdurRahman > abdurRaheem ) {
    console.log('Abdur Rahman get the highest marks.');   
} else {
    console.log('Abdur Raheem get the highest marks.');
}

console.log('-------------------------------');


// get max the three numbers using function:
function getMax3 (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

const output = getMax3(10, 20, 30);
console.log('The largest number of three numbers is', output);

console.log('-------------------------------');

// to get max using Math.max():
const max = Math.max(10, 20, 30, 40);
console.log('Using Math.max to get the max number. Max number is:', max);
