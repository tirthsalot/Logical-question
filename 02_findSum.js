const digit = [1, 10, 100, 1000, 10000, 100000];

const findsum = (digit) => {
    let sum = 0;

    for (let i = 0; i < digit.length; i++) {
        sum += digit[i];
    }

    console.log(sum);
};

findsum(digit);

//example 

const prices = [100, 250, 300, 150];

let totalPrice = 0;

for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
}

console.log("Total Price:", totalPrice);