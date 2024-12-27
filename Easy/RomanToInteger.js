/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            num -= obj[s[i]];
        } else {
            num += obj[s[i]];
        }
    }
    return num;
};

// Test the function with example inputs
const input = "XIV"; // Change this to test different Roman numerals
const result = romanToInt(input);

// Output the result to the console
console.log(`The integer value of the Roman numeral "${input}" is: ${result}`);
