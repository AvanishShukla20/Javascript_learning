// for each property doesn't return any element

// If you want to return elements with or without conditions use filter property

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// The consumer of a callback-based API writes a function that is passed into the API. The provider of the API (called the caller) takes the function and calls back (or executes) the function at some point inside the caller's body. The caller is responsible for passing the right parameters into the callback function. The caller may also expect a particular return value from the callback function, which is used to instruct further behavior of the caller.
// There are two ways in which the callback may be called: synchronous and asynchronous. Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.

const databaseArr = [
    {
        'name':"Anuj",
        score : 90,
        age: 18
    },
    {
        'name':"Agastya",
        score : 96,
        age: 20
    },
    {
        'name':"Gagan",
        score : 78,
        age: 23
    }
]

// syntax 1
const valid = databaseArr.filter( (obj) => (
    obj.age >= 20
))

// console.log(valid)

// syntax if you apply a scope then you have to mention return keyword

const l = [
    { 
        name : "Suryansh",
        age : 5
    },
    {
        name : 'Abhinandan',
        age : 6
    },
    {
        name : 'Ashish',
        age : 19
    }
]

const y = l.filter( (v) => {
    return v.age < 18
})



console.log(y)
 

// using filter property to do same task

const m = [98, 12, 45 , 34, 97, 36, 76, 85]
const newarr = []

// m.forEach( (v) => {
//     newarr.push(v)
// })

// console.log(newarr)



// map and chaining

// const lv = m.map( (num) => (num+10))
//console.log(lv)

const chains = m.map( (num) => num*10 ).map( function (num) { return num - 24}).filter( function (num) { return num <= 500})

console.log(chains)

