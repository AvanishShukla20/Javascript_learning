
let myarr = [8, 7, "Aman", true]
console.log(typeof myarr) // Object


// array copy operations are shallow operations i.e They share the same reference point ...Change in one is also done in other
// They are not Deep copies ... i.e Copies that do not share same reference


// interview->
// Splice() function and slice function

/*
The splice() method (Changes the array and returns the deleted array)

In JavaScript it is a powerful array manipulation function that can be used to add, remove, or replace elements in an array.
It does to the actual array, thus changing the original array

🔧 Syntax:
javascript
Copy
Edit
array.splice(start, deleteCount, item1, item2, ..., itemN)

Parameter	Description
start	The index at which to start changing the array.
deleteCount	The number of elements to remove from the array starting from start.
item1...itemN	Elements to add to the array, starting at start index. 

*/
// splice play area

let fruits = ["apple","mosambi","Papaya", "banana", "mango", "orange"];
let delarr = fruits.splice(1, 3) // start form idx 1 and delete 3 elements 
console.log(fruits)
console.log(delarr)

let animals = ["cat", "dog", "elephant", "tiger"];
let delarr2 = animals.splice(1, 2, "giraffe", "fish", "Tuna") //start from idx1 delete 2 elemens and insert the given starting form idx 1 
console.log(animals)
console.log(delarr2)


let data = [1, 2, 3];
data.splice(data.length, 0, 4, 5); // insert 4, 5 at end
console.log(data); // [1, 2, 3, 4, 5]

let animal = ["cat","beer", "dog", "elephant", "tiger"];
animal.splice(-2, 2); // starts from 2nd last element and delete 2 elements i.e elephant, tiger
console.log(animal); 


// ********************************************* slice function **************************************************************************

//  (it is a simple function used to return a new array with the selected elements.No removal is done)

let numbers = [10, 20, 30, 40, 50];
let sliced = numbers.slice(1, 3); // from index 1 to 3 (not including 3)
console.log(sliced); // [20, 30]
console.log(numbers); // **  original will be unchanged: [10, 20, 30, 40, 50]

let animals3 = ["cat", "dog", "beer", "giraffe","lion", "tiger"];
let sliced2 = animals3.slice(-2); // last 2 elements
let sliced3 = animals3.slice(-3, -1); // from 3rd last to 2nd last (exclusive)
console.log(sliced3); // ["dog", "lion"]
console.log(sliced2); // ["lion", "tiger"]

// interview -> 
let arr = [1, 2, 3];
let clone = arr.slice();

console.log(clone); // [1, 2, 3]


console.log(arr == clone); // false though contents are same 
console.log(arr === clone); // false (different references)

/* This is because
both == and === compare object references, not content — when it comes to objects, including arrays.
Primitives (number, string, boolean, etc.) are compared by value with == .
hence [1,2,3] != [1,2,3] 
 */

console.log(typeof clone); 
console.log(typeof arr); 

// **********************************Other functions ->

let arr9 = [10, 20, 30, 40, 50];
let secondarr= arr9.join() // join always return a string containing all elements of array with comma separated
// console.log(typeof secondarr)
// console.log(secondarr)

// console.log(Array.isArray("Rishabh"))
// console.log(Array.isArray(12, 23, 56, 67))
// console.log(Array.isArray([98, 76, 34]))





// array functions
1.
// Interview asked ->

// from method -> Creates an array from an iterable object.

//console.log(Array.from("Hitesh")) 

//console.log(Array.from({name : "Himesh", roll_no : 25})) // this will not work 

// array.from always asks an iterable or array-like object to convert it to array
/*
Because
The object { name: "Himesh" } is neither:

1. Array-like → It doesn’t have:

A length property.

Numeric keys like 0, 1, etc.

✅ Example of array-like:

javascript
Copy
Edit
{0: "Himesh", length: 1}

2. Nor Iterable → It doesn’t implement Symbol.iterator.
 */


// this will work
let obj = { name: "Himesh", roll_no : 25 };
//console.log(Array.from(Object.entries(obj)));

2.
// merging of arrays

const arr1 = [3, 2, 5 ,6 , 9, 8]
const arr3 = ["hello", "you", "people"]
const arr4 = [23, 76 ,14, 54, 63]

// concat method -> Combines two or more arrays. This method returns a new array without modifying any existing arrays.(pass by value)

// let newarr = arr1.concat(arr3)
// console.log(newarr)

// best for merging-> spread operator
const newmergedarray = [...arr1, ...arr3, ...arr4]
//console.log(newmergedarray)

// push operator-> Appends new elements to the end of an array, and returns the new length of the array i.e modifies the array

arr1.push(arr3)
console.log(arr1)

// .flat() method -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


let ar1 = [12, 89, 97, [23, 54, [23, 90, 16, [0, 6, 5, 2]], [8, 7, 5]], ["dil", "meri", ["na", "sune"]], "dil", "ka"]
let newar1 = ar1.flat(2)
let newar2 = ar1.flat()
let newar3 = ar1.flat(3)
let newar4 = ar1.flat(Infinity)

// console.log(newar1);
// console.log(newar2);
// console.log(newar3);
// console.log(newar4);


/*
// search from chatgpt what is depth here ->

[                           // Level 0
  12,
  89,
  97,
  [                           // Level 1
    23,
    54,
    [23, 90, 16, [0, 6, 5, 2]],  // Level 2
    [8, 7, 5]                    // Level 2
  ],
  [                           // Level 1
    "dil",
    "meri",
    ["na", "sune"]              // Level 2
  ],
  "dil",
  "ka"
]

*/