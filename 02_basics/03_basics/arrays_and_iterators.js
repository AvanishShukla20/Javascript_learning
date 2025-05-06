
let arr = ["4", "98"]
// forof loop 
for (const  num of arr) {
    console.log(`agar tum kaho : ${num}`)
}

// Maps 

// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
// Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method

const mp1 = new Map()
mp1.set("1", "Palke")
mp1.set("2", "Jhukao")
mp1.set("3", "Kadam Tum")
mp1.set("4", "Badhao")

const p = mp1.get("1")
console.log(p)

// type console.log(mp1) to get idea of how they are stored

// console.log(mp1)

// Gives an array representation 
for (const u of mp1) {
    console.log(u)
}


// very imp is to understand the destructuring of array as used here ->

for (const [key, val] of mp1) {
    console.log(key, "-: " , val)
}
