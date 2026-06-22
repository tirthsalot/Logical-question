const factorial = (n) => {

    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
};

console.log(factorial(4)); 

const factorialIterative = (n) => {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    console.log(result);
};
factorialIterative(5);