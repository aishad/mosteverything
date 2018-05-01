var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "radar",
    "hello",
    "Javascript",
    "Radar",
    "ice"
]

let outputs = [
    true,
    false,
    false,
    true,
    false
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase())
            return false;
    return true;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    console.log(expected + " " + actual)
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

