const products = [
    {name: 'Olive Oil', weight: '150 gm', price: 475, Quantity: 1},
    {name: 'Coffee', weight: '45 gm', price: 225, Quantity: 1},
    {name: 'Vaseline', weight: '50 ml', price: 65, Quantity: 1},
    {name: 'Toilet Tissue', price: 35, Quantity: 3}
]


function cartTotal (products) {
    let total = 0;
    for (const product of products) {
        const productPrice = product.price * product.Quantity;
        total = productPrice + total;
    }
    return total;
}


const output = cartTotal(products);
console.log('Total Price is', output);