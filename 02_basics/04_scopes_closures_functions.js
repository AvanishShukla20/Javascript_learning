// we don't carry usse of var because it is function scoped and not block scoped (This is specific to defining a variable onlyy)

// problem of var not being block scoped

let q = 90
if(true)
{
    var p = 20
    let q = 30
    console.log(q);
    
    const r = 50
}

console.log(p) // p is function scoped not block scoped So it becomes defined which is Not Good
console.log(q) 




// ******************************** Closures (Interview Asked) *****************

/*
Closures are:

Functions that remember the variables from the environment in which they were created.
Created automatically when you define a function inside another function.

A closure is formed when an inner function has access to:

Its own scope (variables defined between its {}),
The outer function’s variables, and
The global variables.

Even after the outer function has finished executing, the inner function remembers its lexical scope.

 */

// e.g ->

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        get: function () {
            return count;
        }
    };
}

const counter1 = createCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.get());       // 2
console.log(counter1.decrement()); // 1

console.log(counter1.increment()); // 2
console.log(counter1.increment()); // 3

// you can manipulate the count Which was initially declared as private using 


// *********************************** hoisting *******************(how to declare functions and where to place their calls etc)

1.

console.log(f1(6))

function f1(num)
{
    return num+4
}

2.

// in this type we are not only declaring the function but also storing it into variable

console.log(stored(4)) // worng as you have used stored before initialisation

const stored = function(num)
{
    return num*2
}

console.log(stored(4)) // correct

3.
// WRONG->

// const d = obj{
//     welcomeprice : function(val)
//     {
//         return val*1000
//     }
// }


const d2 = {
        welcomeprice : function(val)
        {
            return val*1000
        }
    }


console.log(d2.welcomeprice(40))