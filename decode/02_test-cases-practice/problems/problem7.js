var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["foo", 3],
  ["foo", -1],
  ["foo",0],
  [1, "foo"],
  [1,undefined],
  ["hello", 3],
  ["", 3]



]

let outputs = [
  "foofoofoo",
  "",
  "",
  undefined,
  undefined,
  "hellohellohello",
  ""
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    var word = arr[0];
    var repeat = arr[1];
    var result="";

    if (repeat>0){
    for (var i=0; i<=repeat-1; i++){
        result += word;
    }
    return result;
    }
    else if (repeat<=0){
        result="";
    
    return result;
    }
    else if (typeof word !='string' || isNaN(number)==true || word===""){
        return undefined;
    }
    
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
runTest(5);
runTest(6);

