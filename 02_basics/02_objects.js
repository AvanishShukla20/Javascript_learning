// singleton objects are created by 
// Object.create() -> constructor objects



// object literals
// every key is treated as a string in behind the scenes

const obj1 = {
    name: "Param",
    roll_no : 25,
    marks : [68, 89, 24],
    location: "Raipur",
    "phone_no" : 67778999872
}
// accessing techhnique -> 2nd one always works but 1st one fails if keys are defined like "phone_no"

// 1. // dot operator
// console.log(obj1.location)
// 2. // ["....."]

// console.log(obj1["phone_no"])
// console.log(obj1["roll_no"])


// *****************Interview -> How to declare a symbol and use it as a key in an object and print it*************************

// const mySym = new Symbol("56f43") // wrong new is not used with Symbol

 const mySym = Symbol("54f67")

const obj2 = {
    name: "Shashwat",
    [mySym] : "RandomSymkey1", // remember this syntax
    roll_no : 41,
    marks : [68, 89, 24],
    location: "Jaipur",
    "phone_no" : 9872569872
}

// console.log(obj2[mySym]) // not console.log(obj2["mySym"])

// ******************* Function as key in object **********************

obj2.message = function()
{
    console.log("Hi, I Hope You are Doing Good !!")
}

console.log(obj2) // the message key-ppair will be displayed as  message: [Function (anonymous)],

console.log(obj2.message) // reference of method is given here
console.log(obj2.message()) // executing the method

obj2.anothermessage = function()
{
    console.log(`Hi, ${this.name} Your Location is ${this.location}`) // use of string interpolation
}

console.log(obj2.anothermessage())

// ***************************************** Part 2 **********************************

1. // .assign method -> return a new array after merging two or more arrays where first array is the target where all merging will be done

let ob1 = {'a' : 1, 'b': 4}
let ob2 = {'a' : 3, 'b' : 5, 'c': "uo"}
let ob3 = {'name' : 'param','c':"pi", loc : "venice"}

// must see output of these (interview asked)

// const ob4 = Object.assign(ob2, ob3) // all changes will be done in ob2 also
// console.log(ob4)
// console.log(ob2)

// and output of
const ob5 = Object.assign({}, ob1, ob2) // no change will be done in either ob1 or ob3 ....changes will be done and stored in {}
console.log(ob5)
console.log(ob1)

// You will 90 percent time use this -> spread operator
const ob6 = {...ob1, ...ob2, ...ob3}
console.log(ob6)

//********************** You will lot of times see this in database queries ->  */

// get all the keys/ values returned as an  array of strings

const arr = Object.keys(ob6)
const arr2 = Object.values(ob6)
const arr3 = Object.entries(ob6)

console.log(arr3)
console.log(arr)
console.log(arr2)