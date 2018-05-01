var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "hello how are you",
    "",
    "fi la fo",
    "my name is john",
    "i am not"
]

let outputs = [
    "hello",
    "",
    "fo",
    "john",
    "not"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {

    var strSplit = str.split(' ');

    var longestWord = '';

    if (str.lentgh = 0)
        return ""

    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length >= longestWord.length) {
            longestWord = strSplit[i];

        }
    }
    return longestWord
}



function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

