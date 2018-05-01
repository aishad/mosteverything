var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "hello world",
    "HELLO WORLD",
    "BONJOUR my name is Aisha",
    "nOt doIng this",
    "whatever"

  
]

let outputs = [
  "Hello World",
  "Hello World",
  "Bonjour My Name Is Aisha",
  "Not Doing This",
  "Whatever"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {

        var strString = str.split(' ');
        var capitalized = [];
          
        for(var x = 0; x < strString.length; x++){
            capitalized.push(strString[x].charAt(0).toUpperCase() + strString[x].slice(1).toLowerCase());

        }
        return capitalized.join(' ');
      }
        
    

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
   // console.log(actual, expected);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

