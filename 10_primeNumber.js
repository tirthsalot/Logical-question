
const isprimenumber = (num) => {
    if (num <= 1) {
        return console.log(`${num} is not a prime number.`);
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return console.log(`${num} is not a prime number.`);
        }

    }
    console.log(`${num} is a prime number.`);
};

isprimenumber(7);

isprimenumber(10);