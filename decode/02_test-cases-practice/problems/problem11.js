var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [0,2,3,4],
    ["hello", 2,3,4],
    [],
    [2,3],
    [undefined, 3,4,5]
  
]

let outputs = [
  9,
  9,
  0,
  5,
  12

]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    var sum=0;
    for (i=0;i<arr.length;i++){

        if (isNaN(arr[i])) {
            // could also be  if (typeOf(arr[i]==='number))
        i+=1;
        }
        else if (arr.length <1){
            sum = 0;
            return sum;
        }

        else if (arr[i]==undefined){
            i+=1;
        }
    
        sum +=arr[i];
    }
    console.log(sum);
    return(sum);
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

