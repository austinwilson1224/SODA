var firstName = "Austin";
var lastName  = "Wilson";
var backwards  = lastName + ", " + firstName;



var a = 5;
var b = 5;
var c = 5;

function averageOf3Numbers(a, b, c) {
    return (a + b + c) / 3;
}

function  sqareSume(str1, str2) {
    var  len1 = str1.length;
    var len2 = str2.length;
    var sum = len1 + len2;
    return sum ** 2;
}

console.log(sqareSume(firstName,lastName));