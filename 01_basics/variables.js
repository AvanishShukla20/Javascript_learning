/* vr is discourages in modern practices because it is not block scopred 
e.g ->

if (true) {
  var x = 10;
}
console.log(x); // 10 ✅ (But this is unexpected!)

on other hand 
if (true) {
  let x = 10;
}
console.log(x); // ReferenceError ❌
 also 
 redeclaration is allowed in var which is not good 
 i.e var p = 23;
    var p = 14;
*/

const userId= 17675;
let EmailId = "amitBhadhana234@gmail.com";

City = "Delhi"

// to print multiple in one go->

console.table([userId, EmailId, City]);

// node 
let x =  null;
// note-> null is not a data type is is a standalone object 
let p = undefined;
// while undefined is a data type