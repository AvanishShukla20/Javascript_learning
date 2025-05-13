// function multiplyBy5(num)
// {
//     this.num = num
//     return num*5;
// }

// console.log(multiplyBy5(7))

// console.log(multiplyBy5.prototype) // Some properties are available on multiplyBy5.prototype because it inherits from Object.prototype ;

// console.log(multiplyBy5.power) // returns undefined

// // You're assigning a static property power to the function object multiplyBy5.
// // This line adds a property power with value 5 to the function object.

//  console.log(multiplyBy5.power = 5)


 // Details of prototypes ->

function bankDetails(username, amt)
{
    this.username = username;
    this.amt = amt;
    interest = 10;
    this.isAmeer = function()
    {
        return this.amt >= 100000000
    }
}

// FATAL SYNTAX ->  NEVER DO LIKE THIS :

//  bankDetails.prototype.houseLoanAmt(this.interest) 
// {
//     return (this.amt) - (this.amt)/(this.interest);
// }

bankDetails.prototype.houseLoanAmt = function(interest) 
{
    return (amt) - (amt)/(interest);
}

// you will have to mention this here
bankDetails.prototype.increment = function(money)
{
    return this.amt + money;
}







// const User1 = bankDetails("Aadi Singh", 1200000000);

// console.log(User1) // error -> Cannot read properties of undefined (reading 'houseLoanAmt')

const User2 = new bankDetails("amit Bijarnia", 1456700000)
console.log(User2)

const newsal = User2.increment(1200)
console.log(newsal)











