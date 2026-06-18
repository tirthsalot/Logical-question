// Find the highest score from an array

const scores = [15, 42, 87, 23, 91, 56, 78, 99, 64];

// Using Math.max()

const getHighestScore = (scores) => {

    let highest = Math.max(...scores);

    console.log("Highest Score:", highest);

};

getHighestScore(scores);


// Using reduce()

const highestValue = scores.reduce((previous, current) => {

    if (current > previous) {
        previous = current;
    }

    return previous;

});

console.log("Highest Value:", highestValue);


// Without using any method

const displayHighestNumber = (scores) => {

    let biggest = scores[0];

    for (let i = 1; i < scores.length; i++) {

        if (scores[i] > biggest) {
            biggest = scores[i];
        }

    }

    console.log("Biggest Number:", biggest);

};

displayHighestNumber(scores);