const number  = [1,10,100.1000,10000,10000,100000,1000000,10000000,100000000,1000000000,10000000000,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,];

const total = (number) => {

    let sum = 0;

    for (let i = 0;i < number.length;i++) {

        sum += number[i];
    }

    console.log("Total:", sum);

};
total(number);

const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum using reduce:", sum);

const findSum = (number) => {
    let totalSum = 0;

    for (const num of number) {
        totalSum += num;
    }
    console.log("Total Sum using for...of loop:", totalSum);
};

findSum(number);


