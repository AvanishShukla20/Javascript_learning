
// it is very trivial and non-problematic when the data type of both entities are same
// for ex ->

// console.log("hit" > "hgt");


// when data types are different->

/*Good to know for Ques-ans in interview But Not for practice in project codes */

// console.log("340" > 98); 
// console.log("45" == 45); 

// confusing cases -> 

1. 

// console.log(null == 0);
// console.log(null >= 0); // >=, <, <=, > first convert null into number 0 then compare which is not with ==
// console.log(null > 0);

2.

// The == operator (loose equality) does type coercion, but null is only loosely equal to undefined, and not to any number.
// for ex ->

console.log(null == undefined); 
console.log(null == 0);
// strict check i.e  === operator (checks data type also)
console.log(null === undefined);

3.
//undefined ke saath kuchh khel->  all false hi honge
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);






