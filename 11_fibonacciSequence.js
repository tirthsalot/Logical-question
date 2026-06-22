
const fibonacciSequence = (number) => {
    let number1 = 0;
    let number2 = 1;
    let nextNumber;

    for (let i = 1; i <= number; i++) {
        console.log("current number: " + number1);

        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;

    }
};

fibonacciSequence(10);