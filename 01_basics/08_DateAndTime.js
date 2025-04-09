
// date in javascript is used and declared as an object

let currDate = new Date()
console.log(currDate) // output -> 2025-04-09T18:42:25.516Z

// methods on date -> 

// console.log(typeof currDate)
// console.log(currDate.toString()) // O/P -> Wed Apr 09 2025 18:43:22 GMT+0000 (Coordinated Universal Time)
// console.log(currDate.toDateString())
// console.log(currDate.toLocaleString()) // O/P -> 4/9/2025, 6:44:42 PM
// console.log(currDate.toISOString()) // Returns a date as a string value in ISO format.
// console.log(currDate.toUTCString())

// declaration types of date->
// let mydate = new Date(2024, 0, 24) // 0 means jan month as this is an array

// console.log(mydate.toLocaleString()) // // 1/24/2024 12:00:00 AM
// console.log(mydate.toLocaleDateString()) // 1/24/2024

// let mydate2 = new Date(2024, 2, 14, 7, 35, 12) // (year, monthidx, date, hours, mins, seconds)
// console.log(mydate2.toLocaleString()) 

// let mydate3 = new Date("23-04-2025") // invalid
// console.log(mydate3.toLocaleString()) 

// let mydate4 = new Date("04-23-2025") // valid "mm-dd-yyyy" or "yyyy-mm-dd"
// console.log(mydate4.toLocaleString()) 


// ******************************************************** Timestamps ***************************

let mytimestamp = Date.now() // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC) Output ->1744225058155
console.log(mytimestamp);

// extracting tgis ms timestamp value from a given date we use .getTime() method
let date1 = new Date(2024, 3, 16)
console.log(date1.getTime())

// to specofically get day or month etc we have lots of methods for ex ->
let date4 = new Date("2024-07-16");

// console.log(date4.getMonth() + 1) // + 1 is done so that we get month number in calendar not its idx
// console.log(date4.getDay()) // 0-> sunday 1-> monday ...

// Imp-> ctrl + space dabate hi saare properties ek method ke dikh jaate h

// you can literally define how you want your date to be presented inside .localeString() method object



console.log(date4.toLocaleString('default',
    {
        weekday : "long",
        timeZone : "Asia/Kolkata"
    }
))

