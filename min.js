const price = [10000, 20000, 30000, 15000, 40000, 50000, 70000, 100000];

function getMin (numbers) {
    let cheapPrice = price[0]; 
    for (const number of numbers) {
        if (number < cheapPrice) {
            cheapPrice = number;
        }
    }
    return cheapPrice;
}

const output = getMin (price);
console.log('The cheapest price is', output);