

// premitive string declaration ->
/* 
It’s a primitive data type — simple, immutable, and stored by value.

JavaScript automatically wraps it into a String object temporarily when you use string methods:

console.log(str.toUpperCase()); // "EICHER SCHOOL"

Behind the scenes, JS does: new String(str).toUpperCase() — but this is invisible to you.

*/
const name="Amit Bhadhana"
const marks = 75


console.log(`Hi, My name is ${name} and I have Got ${marks} in JEE Advanced 2025`)

console.log(name.substring(-2, 6)) // Substring does not supports negative indices if you give it will take it as 0

console.log(name.slice(2, -6)) // 2nd to (13-6 = ) 7th se just pehle tak slice off

/*Imp methods  of string ->
a. charAt(7)
b. indexOf('a') 
c.
    METHOD                  WORK                        Example
Imp .includes(substring)	Checks if substring exists	    "abc".includes("b") → true
Imp .indexOf(substring)	    First occurrence index	        "hello".indexOf("l") → 2
.match(regex)	        Matches regex	                "abc123".match(/\d+/) → ["123"]
Imp .slice(start, end)	    Returns part of string	        "hello".slice(1, 4) → "ell"
Imp .substring(start, end)	Like slice, no negatives	    "hello".substring(1, 4) → "ell"

Imp .replace(old, new)	    Replace first match	              "https//:xyz-%20.com/".replace("-%20", "") → "https//:xyz.com/"
.replaceAll(old, new)	Replace all (ES2021+)	            "a-b-a".replaceAll("a", "x") → "x-b-x"
Imp .trim()	                Remove leading/trailing spaces	    " text ".trim() → "text"
.toLowerCase()	        All lowercase	                    "HeLLo".toLowerCase() → "hello"
.toUpperCase()	        All uppercase	                    "hello".toUpperCase() → "HELLO"

Imp .split(separator)	    Splits into array	                "a,b,c".split(",") → ["a", "b", "c"]
.concat(str1, str2)	    Joins strings	                    "Awara".concat("Hoon") → "AwaraHoon"

Imp .repeat(n)	            Repeats string n times	            "ha".repeat(3) → "hahaha"

.valueOf()	            Returns primitive value of 
                        String object
.toString()	            Returns string representation

*/

































/*
2. String Object

It’s a real object — behaves differently:

Has extra metadata (e.g. prototype chain)

Mutable properties (you can attach extra keys)

const primitive = "Eicher School";
const strobject = new String("Eicher School");

console.log(primitive == strobject);  // true (loose equality)
console.log(primitive === strobject); // false (strict type mismatch) as strobject is an object Type not a String type
 
*/

const School = new String('Eicher School') 
/*
this means  School is an object here 
and it is defined as 

{
    0 : 'E',
    1 : 'i',
    2 : 'c',
    3 : 'h',
    ....key value pairs
}

 */

// console.log(School)
console.log(School.toUpperCase()) // School is passed as value here
console.log(School)
/*
JavaScript is a prototype-based language, not a classical class-based one (like C++ or Java — although ES6 introduced class syntax, it's still prototype-based under the hood).

Every object in JavaScript has an internal link to another object called its prototype. This prototype object can also have its own prototype, and so on — forming a prototype chain.

 */