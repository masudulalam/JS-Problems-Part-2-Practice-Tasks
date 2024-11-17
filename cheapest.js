const mobiles = [
    {name: 'Huawei', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 7000},
    {name: 'Samsung', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 10000},
    {name: 'Walton', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 15000},
    {name: 'Nokia', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 20000},
    {name: 'Oppo', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 25000},
    {name: 'Showmi', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 40000},
    {name: 'Apple', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 100000},
    {name: 'HTC', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 30000},
    {name: 'Nokia', color: 'Golden', processor: 'Dual-core', RAM: '2 GB', price: 3000},
]

function getCheapestPhone (phones) {
    let cheapest = mobiles[0].price;
    console.log(cheapest);
    for (const phone of phones) {
        if (phone.price < cheapest) {
            cheapest = phone.price;
        }
    }
    return cheapest;
}

const output = getCheapestPhone(mobiles);
console.log('The cheapest phone price is ', output);