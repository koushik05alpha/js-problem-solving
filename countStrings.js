// Problem Description

// You are given a string and a character.Your task is to count how many times the character appears in the string.


// For example:

// Input: "hello", "l"
// Output: 2

// Example:

// Input: "hello", "1"
// output: 0

function countOccurrences(string, char) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }

    return count;
}

const string = "koushik saha";
const char = "s";
const occurrences = countOccurrences(string, char);

console.log(`The String is = ${string}
Character Find = ${char}
Times are counnting = ${occurrences}`)






























