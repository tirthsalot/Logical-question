
const marks = [88, 45, 72, 16, 95, 38, 27, 54, 10, 63];


const minimumMark = Math.min(...marks);

console.log("Minimum Mark:", minimumMark);



const getMinimumMark = (marks) => {

    if (marks.length === 0) {
        console.log("No values found in the array.");
        return;
    }

    let lowest = marks[0];

    for (let i = 1; i < marks.length; i++) {

        if (marks[i] < lowest) {
            lowest = marks[i];
        }

    }

    console.log("Lowest Mark:", lowest);

};

getMinimumMark(marks);



const lowestValue = marks.reduce((previous, current) => {

    if (current < previous) {
        previous = current;
    }

    return previous;

});

console.log("Lowest Value:", lowestValue);