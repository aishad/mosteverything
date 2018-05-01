var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam",
    "there are not 40 characters",
    "oneconsecutivewordwhenisthe40thcharacteritisrighthere",
    7,
    undefined


]

let outputs = [
    "Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam",
    "there are not 40 characters",
    "oneconsecutivewordwhenisthe40thcharacteri\ntisrighthere",
    undefined,
    undefined


]

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

 even though there is a space before the a in adipisicing
*/
function f(str) {


    var string = "";
    var count = 0;
    if (str == undefined || typeof str != 'string') return undefined;

    for (var i = 0; i < str.length; i++) {
        if (count == 41) {
            string = string.trim();
            string += "\n";
            count = 0;
        }
        string += str[i];
        count += 1;


    }
    console.log(string);
    return string;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    console.log("The expected " + expected);
    console.log("The actual " + actual);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

