/**
 * 
 * 
 * upto 100 --> 100
 * 
 * 101 - 200 --> 90
 * 
 * more than 200 --> 75
 * 
 * 
 */


function discountedPrice (quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    } else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    } else {
        const total = quantity * 75;
        return total;
    }
}

const output = discountedPrice (201);
console.log('Price with discount:', output);