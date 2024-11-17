/**
 * 
 * 
 * 1 to 100 --> 100
 * 
 * 101 to 200 --> 90
 * 
 * above 200 --> 70 
 * 
 *  
 */

function layeredDiscountCalculator (quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const totalPrice = quantity * first100Price;
        return totalPrice;
    } else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const totalPrice = first100Total + remainingTotal;

        return totalPrice;
    } else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const totalPrice = first100Total + second100Total + remainingTotal;

        return totalPrice;
    }
}

const output = layeredDiscountCalculator(300);
console.log('Total Price is', output);