var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [undefined, 2],
  [3],
  [undefined, undefined],
  [10, 3],
  ["string", 9]
]

let outputs = [
  6,
  0,
  undefined,
  undefined,
  undefined,
  13,
  undefined

]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {

  var firstNumber = arr[0];
  var secondNumber = arr[1];

  if (typeof firstNumber != 'number' || typeof secondNumber != 'number')
    return undefined;

  else return firstNumber + secondNumber;

}

function runTest(i) {
  var expected = outputs[i];
  var actual = f(inputs[i]);
  assert.deepEqual(actual, expected);


}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
