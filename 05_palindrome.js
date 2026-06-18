// Check whether the text is a palindrome

let text = "RACECAR";


const findPalindrome = (text) => {

    let lowerText = text.toLowerCase();

    let reverseText = lowerText.split("").reverse().join("");

    if (lowerText === reverseText) {
        console.log(text + " is a Palindrome.");
    } else {
        console.log(text + " is Not a Palindrome.");
    }

};

findPalindrome(text);