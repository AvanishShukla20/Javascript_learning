/// To understand call -> // khelo thoda this ko lgao aur hatao and dekho jagah jagah pe kya outputs aa rhe h


/*
1. 
functionName.call(thisArg, arg1, arg2, ...)
functionName: The function you're invoking.

thisArg: The value of this inside the function.

arg1, arg2, ...: Arguments passed to the function individually.


2.
Why use call()?

To explicitly set the this context in a function.
To borrow methods from another object.
To invoke a function with arguments and a specific context

*/



function setUsername(usern)
{
    this.usern = usern 
    console.log(`username passed : ${usern}`)
}

function credentials1(username, email, city)
{
    // Calls setUsername(this.username) — but this.username is undefined at this point because this.username hasn't been set yet.
    setUsername(this.username)
    this.email = email
    this.city = city
}

function credentials2(username, email, city)
{
    setUsername(username)
    console.log(this.username)
    this.email = email
    this.city = city
}

// if  you want to set username of credentials2 function with help of setUsername function Use call method

function credentials3(username, email, city)
{
    // setUsername.call(username) // work will not be done just by call keyword
     setUsername.call(this, username)
     
    console.log(this.username)
    this.email = email
    this.city = city
}



// const p = credentials("Amit", "abc@yahoo.com", "Jaipur") // phir Wahi Galti Kiye Tum !! Every time NEVER GORGET O USE A new keyword

// console.log(p)

const q = new credentials2("Arjun", "absc@yahoo.com", "Jabalpur")
console.log(q)



const student = new credentials3("Riya Kasaudhan", "rtk43@gmail.com", "MaharajGanj")
console.log(student)

// OMG the variable name also changed as ->
//  credentials3 {
//   usern: 'Riya Kasaudhan',
//   email: 'rtk43@gmail.com',
//   city: 'MaharajGanj'
// }

// console.log(this.username) username becomes undefined in credentials3