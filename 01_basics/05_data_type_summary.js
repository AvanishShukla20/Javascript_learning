// on the basis of how a data is stored in memeory and how it is accessed Data types are divided into 2 broad types
// 1. Primitive data Type (call by value type)
// 2. Non-Premitive data Type(call by reference type)


1. 
// premitive 
// String, Number, Boolean,null, undefined, Symbol(for uniqueness in components or entities) , BigInt

let p = Symbol("123")
let q = Symbol("123")

console.log(p == q) // false

2. 
// non-premitive -> Arrays, Object, Functions

let myfunc = function()
{
    console.log("hii there")
}

// ************************************** Stack and Heap memory ******************************** (interview specific)

//datatypes are based on memory allocation

// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it