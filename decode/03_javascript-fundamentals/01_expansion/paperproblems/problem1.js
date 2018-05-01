function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
square(decrement(square(decrement(3))))
var a= decrement(3);
var b = square(a);
var c =decrement(b);
var d =square(c);


// #2
decrement(decrement(square(square(3))))

var x = square(3);
var y = square(x);
var z = decrement(y);
var w = decrement(z);

// #3F
duplicateString(reverseString("hello"))
var x = reverseString("hello");
x=duplicateString(x);


// #4
reverseString(duplicateString(duplicateString("foo")))
var x=duplicateString("foo");
x= duplicateString(x);
x=reverseString(x);
