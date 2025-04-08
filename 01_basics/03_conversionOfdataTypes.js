
/* case study 1 ->

let s1 = 34
let s2 = "456"
let s3 = "45dsc"
let s4 = Object
let s5 = "human"
let s6 = null
let s7 = undefined



console.log(typeof s1);
console.log(typeof s4);
console.log(typeof s2);
console.log(typeof s6);
console.log(typeof s7);

// conversion of all above to number and seeing their final value for this we write as ->  
// 1. to number -> Number() 2. to string -> String() 3. to boolean -> Boolean()

let conv1 = Number(s1)
let conv2 = Number(s2)
let conv3 = Number(s3) // NaN (Not-a-Number) type is number but value is not a number
let conv4 = Number(s4)
let conv5 = Number(s5) 
let conv6 = Number(s6) //  null => 0
let conv7 = Number(s7) // undefined => NaN(Not-a-Number)

// typeof all above will be number but thier converted values will be different. See ->
console.log(conv1);
console.log(conv2);
console.log(conv3);
console.log(conv4);
console.log(conv5);
console.log(conv6);
console.log(conv7);

*/

/*case study 2 

let p = 34
let q = null
let g = Object

let r = String(q)
let s = String(p)
let t = String(g)

console.log(typeof r);
console.log(r);

console.log(typeof s);
console.log(s);

console.log(typeof t); // string
console.log(t);




let x = ""
let w = "himesh"
let y = " "

console.log(Boolean(x)); // false
console.log(Boolean(w)); // true
console.log(Boolean(y)); // true

*/



// *************************** Operations *******************************



// let str1 = "hitesh"
// let str2 = "223"

// let str3 = str1 + str2
// console.log(str3)
// console.log(typeof str3)


/* Imp->  */

//Don't follow writing these types of practices while writing any type of javascript Code. You code will always rejected in real world-> 
// Istead use parenthesis to tell which operation to do first.Yet for understanding You can take a look
// 

// 1.

// let str1 = "hitesh"
// let str2 = 43
// let str4 = 35

// let str3 = str4 + str2 + str1 // let str3 = str1 + (str2+str4) //<- correct way

// console.log(str3)
// console.log(typeof str3)

// 2.

// let str3 = str1 + str2 + str4
// console.log(str3)
// console.log(typeof str3)

/*
The + operator is:

Left-to-right associative, so it's evaluated in order.

************ If any operand is a string, the operation becomes string concatenation from that point on.**********

So:

In part 1, numeric addition happens first → then string concatenation.

In part 2, string concatenation starts immediately, so everything is treated as strings afterward.
 */




// *****************************Other Vital Basics ************************************

// prefix operator

let x = 54
let y = x++

// console.log('x: ${x}, y : ${y}');   // it should not be '' it should be `` (backticked)

console.log(`x: ${x}, y : ${y}`); 


// vice versa will be for postfix
let a = 54
let b = ++a;

console.log(`a: ${a}, y : ${b}`); 







