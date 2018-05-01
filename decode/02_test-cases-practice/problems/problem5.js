var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  ["hello", 1],
  [1],
  [-2, 10],
  [undefined, undefined]

]

let outputs = [
  14,
  undefined,
  undefined,
  -20,
  undefined

]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  var a = arr[0];
  var b = arr[1];

  if (typeof a != 'number' || typeof b != 'number') return undefined;
  else {
    var multiplied = a * b;
    console.log(multiplied);
    return multiplied;
  }

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
// runTest(4);
console.log("test cases passed");