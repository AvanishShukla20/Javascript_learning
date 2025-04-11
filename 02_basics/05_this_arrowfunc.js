//this -> jeyword that refers to current context

// console.log(this)
// **** Interview asked -> But when this runs in browser ... The global object that we get is Window Object 
// in node env global object is {} empty object


// function, this, arrow function and others INTERVIEW

// function temp()
// {
//     let username = "avanish"
//     console.log(this)
//     // console.log(this.username) // gives undefined Sol THIS CANNOT BE USED IN functions IT CAN ONLY BE USED IN OBJECTS
// }

// temp()


// arrow function DECLARATIONS ->

1.

// FUNCTION CORRECTLY DEFINED BUT IT CANNOT BE CALLED. So this is not suitable ->

// () => {
//     let username = "aman"
//     console.log(username)
// }

// So store it in some variable and then call
// const l = () => {
//         let username = "aman"
//         console.log(username)
//     }

//     l()

2.

// jab curly braces nhi lgaoge to WE NEVER NEED to USE return keyword ...React me bahut Jyada use hota hai

const myarfunc = (num1, num2) => (num1 + num2) // :O
console.log(myarfunc(8, 98))

// above is equivalent to 
const myarfunc1 = (num1, num2) =>
{
    return num1 + num2
}

console.log(myarfunc1(8, 98))

// also if we want to return an object 

// const m1= (num1, num2) => {username: "Amit", price: 45} // wrong
const m2 = (num1, num2) => ({username: "Amit", price: 45}) // correct
console.log(m2(7, 8));



4. // ********************FAMOUS INTERVIEW QUES ****************
// Regular functions create their own this context based on the calling object.

// Arrow functions DO NOT create their own this — they use the this of the outer (enclosing) scope it means


// ************* regular function

// const user = {
//     name: "Aman",
//     age: 25,
//     greet: function () {
//         console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// };

// user.greet(); // 👉 "Hi, my name is Aman and I'm 25 years old."

// greet() is a regular function inside an object
// this refers to the object (user) that called the function.


// ************ arrow function ->

// const user1 = {
//     name: "Aman",
//         sayHi : () => {
//         console.log(`Hi, I am ${this.name}`); // undefined
//     }
// };

// console.log(user1.sayHi()) // Arrow function doesn't create its own this. It tries to use this.name, but this comes from the outer scope 


// DIFFERENCE IN BEHAVIOUR OF THIS

// const user = {
//     name: "Aman",
//     greet: function() {
//         const sayHi = () => {
//             console.log(`Hi, I am ${this.name}`);
//         };

//         sayHi(); // ✅ Works!
//     }
// };

// user.greet(); // 👉 "Hi, I am Aman" 
// // it works because -> sayHi is an arrow function, so it doesn't have its own this. It inherits this from greet(), which is called on user
 







// on other hand doing same in regular function will give error because->

// sayHi() is defined under a function greet() and this cannot be used to access inside a function i.e

// const user = {
//     name: "Aman",
//     greet: function() {
//         const sayHi = function() {
//             console.log(`Hi, I am ${this.name}`);
//         };

//         sayHi(); // ❌ `this` is undefined or window
//     }
// };

// user.greet(); // 👉 "Hi, I am undefined"





