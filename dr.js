
const prices = [200, 300, 150, 400];
let total = 0;
let discount = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
    console.log(total);
}

if (total >= 1000) {
    discount = total * 0.1;
    console.log(discount);
}

let FinalAmount = total - discount;

console.log("Total amount:", total);
console.log("Discount:", discount);
console.log("Final Amount:", FinalAmount);