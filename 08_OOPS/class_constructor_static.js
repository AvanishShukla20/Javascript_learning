// super keyword works all the function of call method explained in last class but only if inheritance is there
class UserStats{
    constructor(username, marks)
    {
        this.username = username 
        this.marks =  marks
    }
    
}

class User extends UserStats
{
    constructor(username, emailId, password, marks)
    {
        super(username, marks) // as it is super goes to parent class UserStats
        this.username = username
        this.emailId = emailId
        this.password = password
    }

    // function ka syntax note ->

    tellmarks()
    {
        console.log(`the marks obtained by ${this.username} is : ${this.marks}`);
    }
}

const a1 = new User("Aditi Singh", 'adr@gmail.com', 123412, 87)
console.log(a1)


// use of static keyword prevents use of that static property in any child class or in any instance of the class created
