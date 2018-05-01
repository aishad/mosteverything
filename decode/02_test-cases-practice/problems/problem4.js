var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["abc", 0],
  ["go", 4],
  ["hi ", 2],
  [undefined, undefined],
  [2, "hello"],
  ["hello world", 3]
]

let outputs = [
  "o",
  undefined,
  "a",
  undefined,
  " ",
  undefined,
  undefined,
  "l"
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.
For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a
*/
function f(arr) {

  var string = arr[0];
  var number = arr[1];

  if (string == undefined || number == undefined || typeof string != 'string')
    return undefined;

  else return string[number];

}

function runTest(i) {
  var expected = outputs[i];
  var input = inputs[i];
  var actual = f(input);
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
console.log("test cases passed");