// 
/* in many a times like in e commerce application claculating gst etc may take a lot of precision in such cases we use function .toFixed(n) */

const num = 107.3
console.log(num.toFixed(3)) // 107.300 upto 3 decimal places of precision

const x = new Number(897) // Number object
console.log(x.toString().length)


// Asked in interview

// 1. //  .toPrecision() property

// const l = 2378.7654
// const m = 2458.555
// const s = 2458.555

// console.log(l.toPrecision(4));
// console.log(l.toPrecision(3));
// console.log(l.toPrecision(5));
// console.log(l.toPrecision(2));


// console.log(m.toPrecision(4)); // 2459
// console.log(s.toPrecision(4)); // 2459
// console.log(m.toPrecision(3));

/* 
toPrecision() property brief-> (return String)

The toPrecision() method formats a number to a specified number of significant digits. 
Significant digits include both the digits before and after the decimal point, depending on the value.

E.g ->

l.toPrecision(3)
3 significant digits:
Look at the first 3 digits: 237 → next digit is 8, so we round up
✅ Output: "2.38e+3"
(Scientific notation used because rounding 2378.7654 to 3 sig figs becomes 2380, which is represented as 2.38 × 10³ or 2.38e+3)


l.toPrecision(5)
5 significant digits: 2378.8
✅ Output: "2378.8"
 */

2. // .toLocaleString()

const k = 1000000
const j = 76719030910

// console.log(k.toLocaleString()) // Us standards repr
// console.log(k.toLocaleString('en-IN')) // indian standards
// console.log(j.toLocaleString('en-IN')) 
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)


// *********************** Maths Library *********************************** //

// console.log(Math.cos(0.12))
// console.log(Math.abs(-34))
// console.log(Math.PI)
// console.log(Math.round(9.555))
// console.log(Math.pow(3, 7))
// console.log(Math.ceil(45.6))
// console.log(Math.min(33, 17, 22, 9, 89))


console.log(Math.random()) // gives a random floating value bw 0 and 1 , used a lot for synchronization and session handling

// let's say you want a random number between 23 to 36 at every call
const min = 23
const max = 36

// Very Imp formula -> (Math.random() * (max - min + 1)) + min    ...-> +1 because i don't want to include case when .random returns 0

console.log((Math.random() * (max-min + 1)) + min)

// when you want only integral values
console.log(Math.floor((Math.random() * (max-min + 1))) + min)




