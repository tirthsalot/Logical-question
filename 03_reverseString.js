// 1. Reverse a string using a for loop

const reverseTextLoop = (text) => {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
};

console.log(reverseTextLoop("JavaScript"));


// 2. Reverse a string using a for...of loop

const reverseWordForOf = (word) => {
  let output = "";

  for (const letter of word) {
    output = letter + output;
  }

  return output;
};

console.log(reverseWordForOf("Programming"));


// 3. Reverse a string using the spread operator

const reverseSentenceSpread = (sentence) => {
  return [...sentence]
    .reverse()
    .join("");
};

console.log(reverseSentenceSpread("Full Stack Developer"));