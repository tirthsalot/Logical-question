const digit = [1,10,100,1000,10000,1,10,100,10,1,1000];

const findvalue = (digit) => {
    let count = {};
    let uniquevalue = [];
    let repetativevalue = [];

    for (let d of digit) {
        if (count[d]) {
            count[d] +=1;
        }else {
            count[d] = 1;
        }
    }

    for (let key in count) {
        if (count[key] ===1) {
            uniquevalue.push(Number(key));
        }else {
            repetativevalue.push(Number(key));
        }
    }

    console.log("count",count);
    console.log("uniquevalue",uniquevalue);
    console.log("repetativevalue",repetativevalue);
};

findvalue(digit);

