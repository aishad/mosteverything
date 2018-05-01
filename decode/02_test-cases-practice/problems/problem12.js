var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[1, 2, 3, 4, 5], [1, 7, 3, 5]],
    [[1, 1, 1, 1], [2, 2, 2, 2]],
    [2, 3],
    [[2, 3, 4], [2, 7]],
    [[0], [0]]

]

let outputs = [
    [1, 3, 5],
    [],
    undefined,
    [2],
    [0]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function f(arr1, arr2) {

    var matches = [];
    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) return undefined;

    else {
        for (var i = 0; i < arr1.length; i++) {

            for (var b = 0; b < arr2.length; b++) {
                if (arr1[i] === arr2[b]) {
                    matches.push(arr1[i]);
                    console.log(arr2[b]);
                }
            }

        }
        if (matches.length == 0) {
            return matches;
        }
    }

    return matches;
}






function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    //   console.log("input: " + input +"actual "+actual+"expected "+expected);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

