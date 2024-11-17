const products = [
    {name: 'Olive Oil', weight: '150 gm', price: 475},
    {name: 'Coffee', weight: '45 gm', price: 225},
    {name: 'Vaseline', weight: '50 ml', price: 65},
    {name: 'Toilet Tissue', Quantity: 3, price: 100},
]



function getShoppingTotal (products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}

const output = getShoppingTotal(products);
console.log('Total Price:', output);