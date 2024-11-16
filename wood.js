/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 * 
 */

function woodQuantityCalculator (chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * chairQuantity;
    const totalBedWood = perBedWood * chairQuantity;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
} 

const output = woodQuantityCalculator (2, 2, 1);
console.log('Total Wood Quantity', output);