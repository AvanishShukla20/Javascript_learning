
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

// for (const u of mp1) {
//     console.log(u)
// }


// very imp is to understand the destructuring of array as used here ->

// for (const [key, val] of mp1) {
//     console.log(key, "-: " , val)
// }

 // NOTE-> forof loop doesn't works on object 

const myobj = {
    n1 : 'football',
    n2 : 'Cricket',
    n3 : 'BasketBall'
}

// for (const [k, v] of myobj) {
//     console.log(k, '-> ', v)
// }


// objects ke upar forin loop work karta hai . It will iterate on the the Keys Only 

// for (const k in myobj) {
//     console.log(k, "-> ", myobj[k])
// }

// forin picks the indices only to iterate as key While forof iterates on the values directly

const a1 = ["Kal", "Chuadavin", "ki", "raat", 'thi']

for (const k in a1) {
   console.log(k)
}

// arre Bhai sahab Niche Wala forOf se bana hai aur upar wal forIn se Though they look exactly same

for (const k of a1) {
    console.log(k)
}

// NOTE -> Map is not iteratable Hence forof and forin will not work there !!



